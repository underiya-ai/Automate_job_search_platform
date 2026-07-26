from backend.schema.state import JobSearchState
from backend.utils.llm import llm
from backend.prompts.job_description_agent_prompt import (
    JOB_DESCRIPTION_ENHANCER_PROMPT,
)


def job_description_node(state: JobSearchState) -> dict:

    if not state.job_text.strip():
        return {
            "job_clean_text": ""
        }

    prompt = JOB_DESCRIPTION_ENHANCER_PROMPT.format(
        job_description=state.job_text
    )

    response = llm.invoke(prompt)

    return {
        "job_clean_text": response.content.strip()
    }

