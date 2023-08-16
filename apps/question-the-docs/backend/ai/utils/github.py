"AI helper functions for loading data from GitHub."

import base64
import os
from pathlib import Path

import requests

REPOS = {
    'superduperdb': {
        'owner': 'SuperDuperDB',
        'name': 'superduperdb',
        'branch': 'main',
        'documentation_location': 'docs/',
    },
    'langchain': {
        'owner': 'langchain-ai',
        'name': 'langchain',
        'branch': 'master',
        'documentation_location': 'docs/',
    },
    'fastchat': {
        'owner': 'lm-sys',
        'name': 'FastChat',
        'branch': 'main',
        'documentation_location': 'docs/',
    },
}


# TODO: Use GraphQL API instead of REST API and convert to async
def gh_repo_contents(owner, repo, branch=None):
    def get_repo(branch):
        nonlocal owner, repo
        r = requests.get(
            f"https://api.github.com/repos/{owner}/{repo}/git/trees/{branch}?recursive=true",
            headers={'Authorization': f'token {os.environ["GITHUB_TOKEN"]}'},
        )
        if r.status_code != 200:
            raise Exception(f"Error getting repo contents: {r.status_code, r.json()}")
        return r.json()

    if branch:
        return get_repo(branch)
    else:
        errs = []
        for br in ['main', 'master']:
            try:
                return get_repo(br)
            except Exception as e:
                errs.append(e)
                continue
        raise Exception(
            f"Tried `main` and `master` branches, but neither exist. Reason: {errs}"
        )


def documentation_markdown_urls(repo_contents, documentation_location):
    urls = []
    for val in repo_contents['tree']:
        if documentation_location in val['path'] and val['path'].endswith('.md'):
            urls.append(val['url'])
        else:
            continue
    return urls


def download_and_decode(url):
    blob = requests.get(
        url,
        headers={'Authorization': f'token {os.environ["GITHUB_TOKEN"]}'},
    ).json()
    return base64.b64decode(blob['content'])


def save_github_md_files_locally(repo):
    owner, name, branch, documentation_location = REPOS[repo].values()

    repo_contents = gh_repo_contents(owner, name, branch)
    urls = documentation_markdown_urls(repo_contents, documentation_location)

    try:
        Path(f"docs/{name}").mkdir(exist_ok=False, parents=True)
    except FileExistsError:
        pass

    for i, url in enumerate(urls):
        content = download_and_decode(url)
        with open(f"docs/{name}/file_{i}", 'wb') as f:
            f.write(content)

    return Path(f"docs/{name}").glob("*")
