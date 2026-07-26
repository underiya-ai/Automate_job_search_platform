import requests

from backend.utils.config import RAPIDAPI_API_KEY
from backend.schema.state import Job


BASE_URL = "https://jsearch.p.rapidapi.com/search"


HEADERS = {
    "x-rapidapi-key": RAPIDAPI_API_KEY,
    "x-rapidapi-host": "jsearch.p.rapidapi.com",
}


def search_jobs(query: str,location: str = "",page: int = 1,num_pages: int = 1) -> list[Job]:
    """
    Search jobs using JSearch API Returns:list[Job]
    """

    params = {
        "query": query,
        "page": page,
        "num_pages": num_pages,
    }

    if location:
        params["location"] = location

    try:

        response = requests.get(
            BASE_URL,
            headers=HEADERS,
            params=params,
            timeout=30,
        )

        response.raise_for_status()

        data = response.json()

    except requests.RequestException as e:

        print(f"JSearch Error: {e}")

        return []

    jobs = []

    for item in data.get("data", []):

        highlights = item.get("job_highlights", {})

        experience = item.get(
            "job_required_experience",
            {},
        )

        jobs.append(
            Job(
                title=item.get("job_title", ""),
                company=item.get("employer_name", ""),
                publisher=item.get("job_publisher"),
                employment_type=item.get("job_employment_type"),
                apply_link=item.get("job_apply_link"),
                description=item.get("job_description"),
                is_remote=item.get("job_is_remote", False),
                city=item.get("job_city"),
                state=item.get("job_state"),
                country=item.get("job_country"),
                posted_at=item.get(
                    "job_posted_at_datetime_utc"
                ),
                qualifications=highlights.get(
                    "Qualifications",
                    [],
                ),
                responsibilities=highlights.get(
                    "Responsibilities",
                    [],
                ),
                benefits=highlights.get(
                    "Benefits",
                    [],
                ),
                required_skills=item.get(
                    "job_required_skills",
                    [],
                ),
                experience_months=experience.get(
                    "required_experience_in_months"
                ),
            )
        )

    return jobs