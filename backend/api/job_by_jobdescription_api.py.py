from fastapi import APIRouter
from pydantic import BaseModel
from backend.controllers.graph import job_search_graph
from backend.schema.state import JobSearchState

router = APIRouter(
    prefix="/job-search",
    tags=["job search"],

)

class JobDescriptionRequest(BaseModel):
    job_text:str
    location:str = ""


@router.post("/search-by-job-description")
async def search_job_by_description(request:JobDescriptionRequest):
    state = JobSearchState(
        mode = "job_description",
        job_text=request.job_text,
        location=request.location,

    )

    result = await job_search_graph.ainvoke(state)

    return result