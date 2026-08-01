import React from "react";
import "./JobResult.css";

import {
  MapPin,
  Building2,
  Briefcase,
  Globe,
  CalendarDays,
  ExternalLink,
} from "lucide-react";

function JobResult({ jobs }) {
  return (
    <div className="job-result-page">

      <div className="job-result-header">

        <h1>Job Search Results</h1>

        <p>{jobs.length} Jobs Found</p>

      </div>

      <div className="job-list">

        {jobs.map((job, index) => (

          <div className="job-card" key={index}>

            <h2>{job.title}</h2>

            <div className="job-company">

              <Building2 size={18} />

              <span>{job.company}</span>

            </div>

            <div className="job-info">

              <div>

                <MapPin size={17} />

                <span>

                  {job.city}, {job.state}, {job.country}

                </span>

              </div>

              <div>

                <Briefcase size={17} />

                <span>{job.employment_type}</span>

              </div>

              <div>

                <Globe size={17} />

                <span>

                  {job.is_remote ? "Remote" : "Onsite"}

                </span>

              </div>

              <div>

                <CalendarDays size={17} />

                <span>{job.posted_at}</span>

              </div>

            </div>

            <div className="publisher">

              Publisher : {job.publisher}
            </div>

            <p className="description">

              {job.description?.slice(0, 220)}...

            </p>

            <a
              href={job.apply_link}
              target="_blank"
              rel="noreferrer"
              className="apply-btn"
            >
              Apply Now

              <ExternalLink size={18} />

            </a>

          </div>

        ))}

      </div>

    </div>
  );
}

export default JobResult;