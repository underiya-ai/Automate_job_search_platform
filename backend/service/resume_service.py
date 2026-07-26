# save resume  and extract text from the resume 
from pathlib import Path
import uuid
import fitz
import aiofiles
from fastapi import UploadFile, HTTPException

UPLOAD_DIR = Path("backend/uploads/resumes")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

# Max file size Type 
MAX_FILE_SIZE = 10 * 1024 * 1024


class FileService:

    @staticmethod
    async def save_resume(file:UploadFile) -> Path:

        if not file.filename.lower().endswith(".pdf"):
            raise HTTPException(status_code=400,detail="Only PDF files are allowed.")

        filename = f"{uuid.uuid4().hex}.pdf"
        file_path = UPLOAD_DIR / filename

        content = await file.read()

        if len(content) == 0:
            raise HTTPException(status_code=400, detail="Uploaded file is empty.")

        if len(content) > MAX_FILE_SIZE:
            raise HTTPException(status_code=400,detail="Maximum file size is 10 MB.")

        async with aiofiles.open(file_path, "wb") as f:
            
            await f.write(content)

        await file.close()


        return file_path

    # extract text from the file 

    @staticmethod  
    def extract_text(file_path:Path) -> str:

        try:

          doc = fitz.open(file_path)

          text = ""

          with fitz.open(file_path) as doc:
              for page in doc:
                  text += page.get_text()

          return text

        except Exception:
            raise HTTPException(status_code=400,detail="Invalid or corrupted PDF File.")
        
