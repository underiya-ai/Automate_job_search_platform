from backend.service.jsearch_service import search_jobs
from backend.schema.state import JobSearchState


def Job_search_node(state:JobSearchState):

    all_jobs =[]

    for query in state.search_queries:

        jobs = search_jobs(
                           query=query,
                           location=state.location
                          )

        all_jobs.extend(jobs)


    return {
            "results": all_jobs
        }
