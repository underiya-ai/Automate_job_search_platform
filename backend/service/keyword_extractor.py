import spacy

from backend.schema.state import JobSearchState

# Load spaCy model only once
nlp = spacy.load("en_core_web_sm")

# Ignore these entity types
IGNORE_ENTITY_LABELS = {
    "DATE",
    "TIME",
    "ORDINAL",
    "CARDINAL",
    "MONEY",
    "PERCENT",
    "QUANTITY",
}

# Common words to ignore
STOPWORDS = {
    "experience",
    "year",
    "years",
    "work",
    "working",
    "knowledge",
    "good",
    "excellent",
    "strong",
    "ability",
    "responsible",
    "responsibilities",
    "candidate",
    "required",
    "preferred",
    "looking",
    "job",
    "role",
    "company",
    "skill",
    "skills",
}


def keyword_extractor_node(state: JobSearchState) -> dict:
    """
    Extract keywords from Resume or Job Description.
    """

    # Resume ko priority do, agar resume nahi hai to JD use karo
    text = state.resume_clean_text or state.job_clean_text

    if not text.strip():
        return {
            "extracted_keywords": []
        }

    doc = nlp(text)

    keywords = set()

    # ----------------------------------
    # Named Entities
    # Example:
    # AWS
    # Google
    # Microsoft
    # ----------------------------------
    for ent in doc.ents:

        if ent.label_ not in IGNORE_ENTITY_LABELS:

            value = ent.text.strip()

            if len(value) > 2:
                keywords.add(value)

    # ----------------------------------
    # Noun Chunks
    # Example:
    # Machine Learning
    # Software Engineer
    # Data Science
    # ----------------------------------
    for chunk in doc.noun_chunks:

        phrase = chunk.text.strip()

        if len(phrase) < 3:
            continue

        words = phrase.lower().split()

        if any(word in STOPWORDS for word in words):
            continue

        keywords.add(phrase)

    # ----------------------------------
    # Important Single Words
    # Example:
    # Python
    # FastAPI
    # Docker
    # PostgreSQL
    # ----------------------------------
    for token in doc:

        if (
            token.pos_ in {"NOUN", "PROPN"}
            and not token.is_stop
            and not token.is_punct
            and len(token.text) > 2
            and token.text.lower() not in STOPWORDS
        ):
            keywords.add(token.text)

    return {
        "extracted_keywords": sorted(keywords)
    }