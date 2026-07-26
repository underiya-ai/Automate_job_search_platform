from langgraph.graph import StateGraph,END,START
from backend.schema.state import JobSearchState
from backend.Agents.job_description_agent import job_description_node
from backend.Agents.search_query_agent import search_query_node

from backend.Agents.job_search_agent import Job_search_node

from backend.service.keyword_extractor import keyword_extractor_node

# add node 

graph = StateGraph(JobSearchState)

graph.add_node("job_description",job_description_node)
graph.add_node("keyword_extractor",keyword_extractor_node)
graph.add_node("search_query",search_query_node)
graph.add_node("job_search",Job_search_node)
