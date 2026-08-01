from fastapi import APIRouter, UploadFile, File, HTTPException

from backend.controllers.graph import job_search_graph
from backend.schema.state import JobSearchState
from backend.service.resume_parser_service import FileService
from fastapi import Form

router = APIRouter(
    prefix="/job-search",
    tags=["Job Search"],
)


@router.post("/search-by-resume")
async def search_job_by_resume(
    file: UploadFile = File(...),
    location:str = Form(...)
):

    if file.content_type != "application/pdf":
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are allowed."
        )

    file_path = await FileService.save_resume(file)

    try:
        state = JobSearchState(
            mode="resume",
            resume_path=str(file_path),
            location=location

        )

        result = await job_search_graph.ainvoke(state)

        return result

    finally:
        FileService.delete_file(file_path)