from langgraph.graph import StateGraph,END,START
from backend.schema.state import JobSearchState
from backend.Agents.resume_parser_agent import resume_parser_node
from backend.Agents.job_description_agent import job_description_node
from backend.Agents.search_query_agent import search_query_node

from backend.Agents.job_search_agent import Job_search_node

from backend.service.keyword_extractor import keyword_extractor_node



# router node 

def input_router(state: JobSearchState):

    if state.mode == "resume":
        return "resume"

    elif state.mode == "job_description":
        return "job_description"

    raise ValueError("Invalid mode")


# add node 

graph = StateGraph(JobSearchState)

# add node for resume parser

graph.add_node("resume_parser", resume_parser_node)
graph.add_node("job_description",job_description_node)
graph.add_node("keyword_extractor",keyword_extractor_node)
graph.add_node("search_query",search_query_node)
graph.add_node("job_search",Job_search_node)


# entry point 
graph.add_conditional_edges(
    START,input_router,
    {
        "resume":"resume_parser",
        "job_description":"job_description",
    }
)

# Resume Flow
graph.add_edge("resume_parser", "keyword_extractor")

# Job Description Flow
graph.add_edge("job_description", "keyword_extractor")

# Common Flow
graph.add_edge("keyword_extractor", "search_query")
graph.add_edge("search_query", "job_search")
graph.add_edge("job_search", END)

job_search_graph = graph.compile()