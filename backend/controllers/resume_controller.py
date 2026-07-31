from fastapi import HTTPException
from backend.service.resume_analysis_service import FileService
from backend.service.text_cleaner import TextCleaner
from backend.Agents.resume_agent import ResumeAnalyzer
import json

class ResumeController:
 
    async def upload_resume(self,file,job_description:str):

        if not job_description.strip():
            raise HTTPException(status_code=400,detail="job description is required.")
        

        # save pdf
        file_path = await FileService.save_resume(file)

        # extract text 

        raw_text = FileService.extract_text(file_path)

        # clean text 
        clean_resume_text = TextCleaner.clean(raw_text)
        clean_job_description =  TextCleaner.clean(job_description)

        resume_result = ResumeAnalyzer.analyze(resume_text=clean_resume_text,job_description=clean_job_description)

        return json.loads(resume_result)

        




