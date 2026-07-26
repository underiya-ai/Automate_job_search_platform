from backend.utils.llm import llm
from backend.prompts.resume_analyzer_prompt import RESUME_ANALYZER_PROMPT


class ResumeAnalyzer:

    llm = llm

    @staticmethod
    def analyze(
        resume_text: str,
        job_description: str
    ) -> str:

        prompt = RESUME_ANALYZER_PROMPT.format(
            resume=resume_text,
            job_description=job_description
        )

        response = ResumeAnalyzer.llm.invoke(prompt)

        return response.content.strip()