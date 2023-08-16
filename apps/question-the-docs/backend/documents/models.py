import typing as t
from enum import Enum

from pydantic import BaseModel, Field


class Repo(str, Enum):
    superduperdb = 'superduperdb'
    langchain = 'langchain'
    fastchat = 'fastchat'


class Query(BaseModel):
    query: str = Field(...)
    collection_name: Repo = Field(...)


class Answer(BaseModel):
    answer: str = Field(...)
