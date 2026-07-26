from pydantic import BaseModel,Field
from typing import List



from pydantic import BaseModel, Field

class JobSearchState(BaseModel):
    mode: str = ""                              
    job_text: str = ""
    resume_text: str = ""
    job_clean_text: str = ""
    resume_clean_text: str = ""
    extracted_keywords: list[str] = Field(default_factory=list)
    location: str = ""
    platform: list[str] = Field(default_factory=list)
    results: list[dict] = Field(default_factory=list)

    





