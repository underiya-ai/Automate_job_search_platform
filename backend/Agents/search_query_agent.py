import json

from backend.utils.llm import llm
from backend.prompts.search_query_prompt import SEARCH_QUERY_PROMPT
from backend.schema.state import JobSearchState


def search_query_node(state: JobSearchState):

    if not state.extracted_keywords:
        return {
            "search_queries": []
        }

    prompt = SEARCH_QUERY_PROMPT.format(
        keywords=", ".join(state.extracted_keywords)
    )

    response = llm.invoke(prompt)

    try:
        data = json.loads(response.content)

        return {
            "search_queries": data["search_queries"]
        }

    except (json.JSONDecodeError, KeyError):
        return {
            "search_queries": []
        }