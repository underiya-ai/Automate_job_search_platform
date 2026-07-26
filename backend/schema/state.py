from pydantic import BaseModel, Field
from typing import List, Optional


class Job(BaseModel):

    title: str

    company: str

    publisher: Optional[str] = None

    employment_type: Optional[str] = None

    apply_link: Optional[str] = None

    description: Optional[str] = None

    is_remote: bool = False

    city: Optional[str] = None

    state: Optional[str] = None

    country: Optional[str] = None

    posted_at: Optional[str] = None

    required_skills: List[str] = Field(default_factory=list)

    qualifications: List[str] = Field(default_factory=list)

    responsibilities: List[str] = Field(default_factory=list)

    benefits: List[str] = Field(default_factory=list)

    experience_months: Optional[int] = None


class JobSearchState(BaseModel):
    mode: str = ""                              
    job_text: str = ""
    resume_text: str = ""
    job_clean_text: str = ""
    resume_clean_text: str = ""
    extracted_keywords: list[str] = Field(default_factory=list)
    search_queries: list[str] = Field(default_factory=list)
    location: str = ""
    platform: list[str] = Field(default_factory=list)
    results: list[Job] = Field(default_factory=list)







