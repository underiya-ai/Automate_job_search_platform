
## Resume Analysis
from dotenv import load_dotenv
from langchain_groq import ChatGroq
from backend.prompts.resume_analyzer_prompt import RESUME_ANALYZER_PROMPT
load_dotenv()


class ResumeAnalyzer:
    llm = ChatGroq(
        model="openai/gpt-oss-120b",
        
        temperature=0
    )

    @staticmethod
    def analyze(resume_text:str,
                job_description:str)->str:

        prompt = RESUME_ANALYZER_PROMPT.format(
            resume = resume_text,
            job_description=job_description

        )
        response = ResumeAnalyzer.llm.invoke(prompt)

        result_score = response.content

        return result_score
