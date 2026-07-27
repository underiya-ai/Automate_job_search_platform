from fastapi import FastAPI
from backend.api.resume_api import router as resume_api
from backend.api.job_by_jobdescription_api import router as job_description_router
from backend.api.resume_parser_api import router as resume_parser_router



app = FastAPI(
    title="Automate job search API",
    description="AI Powered platform which help to search the job and also Analysis the Resume",
    version="1.0.0"
)

app.include_router(resume_api)
app.include_router(resume_parser_router)
app.include_router(job_description_router)

@app.get("/")
async def root():
    return {
        "application": "Job Aggregator API",
        "version": "1.0.0",
        "status": "Running",
        "message": "Automate Job search Platform"
    }