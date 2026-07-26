SEARCH_QUERY_PROMPT = """
You are an expert Job Search Query Generator.

Generate 5-10 job search queries using the provided keywords.

Keywords:
{keywords}

Rules:
1. Use only the given keywords.
2. Do not invent new skills or technologies.
3. Keep each query short (2-6 words).
4. Remove duplicate queries.
5. Return ONLY valid JSON.
6. Do not include markdown.
7. Do not include explanations.

Output Format:

{{
    "search_queries": [
        "Python Developer",
        "Python Backend Developer",
        "FastAPI Developer",
        "Backend Software Engineer"
    ]
}}
"""