from backend.schema.state import JobSearchState
from backend.service.resume_parser_service import FileService
from backend.service.text_cleaner import TextCleaner

def resume_parser_node(state: JobSearchState):

    raw_text = FileService.extract_text(
        state.resume_path
    )

    clean_text = TextCleaner.clean(raw_text)

    return {
        "resume_clean_text": clean_text
    }