from fastapi import APIRouter,UploadFile,File,Form

from backend.controllers.resume_controller import ResumeController


router = APIRouter(
    prefix="/resume",
    tags=["Resume Analyzer"]
)

controller = ResumeController()

@router.post("/upload")
async def upload_resume(
    file:UploadFile = File(...), job_description:str= Form(...)
    ):

    return await controller.upload_resume(
        file=file,
        job_description=job_description
        )


    

