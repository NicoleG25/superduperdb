from backend.ai.utils.github import save_github_md_files_locally
from backend.ai.utils.text import chunk_file_contents
from backend.config import settings

from superduperdb.container.document import Document
from superduperdb.db.mongodb.query import Collection


def _create_ai_text_artifacts(repo):
    files = save_github_md_files_locally(repo)
    # Chunked text is more suitable input for the AI models
    ai_text_artifacts = chunk_file_contents(files)
    return ai_text_artifacts


def load_ai_artifacts(db):
    for repo in settings.default_repos:
        # Skip if already exists in database
        if repo in db.show('vector_index'):
            continue

        artifacts = _create_ai_text_artifacts(repo)
        documents = [Document({settings.vector_embedding_key: v}) for v in artifacts]
        db.execute(Collection(name=repo).insert_many(documents))
