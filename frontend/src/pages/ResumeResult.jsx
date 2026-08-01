import React from "react";
import {CheckCircle,XCircle,Award,AlertTriangle,} from "lucide-react";

const CircularProgress = ({ value, title }) => {

  const degree = value * 3.6;

  return (

    <div className="circle-card">

      <div
        className="circle"
        style={{
          background: `conic-gradient(#2563eb ${degree}deg,#e5e7eb ${degree}deg)`
        }}
      >

        <div className="circle-inner">

          <h2>{value}%</h2>

        </div>

      </div>

      <h3>{title}</h3>

    </div>

  );

};

const TagList = ({ items, type }) => {

  if (!items || items.length === 0) {

    return (

      <p className="empty-text">

        No Data Found

      </p>

    );

  }

  return (

    <div className="tag-list">

      {items.map((item,index)=>(

        <span

          key={index}

          className={`tag ${type}`}

        >

          {item}

        </span>

      ))}

    </div>

  );

};

const BulletList = ({ items }) => {

  if (!items || items.length===0){

    return(

      <p className="empty-text">

        No Data Found

      </p>

    );

  }

  return(

    <ul className="bullet-list">

      {items.map((item,index)=>(

        <li key={index}>

          {item}

        </li>

      ))}

    </ul>

  );

};

const ResumeResult = ({ data, fileName, onReset }) => {
  const {
    ats_score,
    job_match_percentage,
    matching_skills,
    missing_skills,
    strengths,
    weaknesses,
    improvement_suggestions,
    keyword_analysis,
    experience_match,
    education_match,
    projects_feedback,
    resume_summary,
    final_recommendation,
  } = data;

  return (
    <div className="result-middle">
      <div className="result-container">
        <div className="result-header">

    <div>

        <h1>Resume Analysis Report</h1>

        <p className="result-filename">

            {fileName}

        </p>

    </div>

    <button
        className="reset-btn"
        onClick={onReset}
    >
        Analyze Another Resume
    </button>

</div>

        <div className="dashboard-top">

           <CircularProgress
              value={ats_score}
              title="ATS Score"
            />

           <CircularProgress
             value={job_match_percentage}
             title="Job Match"
            />

        </div>

        <div className="result-card summary-card">

    <h2>Resume Summary</h2>

        <p>

        {resume_summary? resume_summary: "No summary available."}

       </p>

</div>

        <div className="result-grid">

  <div className="result-card">

    <div className="card-title">

      <Award size={24} color="#22c55e"/>

      <h3>Matching Skills</h3>

    </div>

    <TagList
      items={matching_skills}
      type="good"
    />

  </div>

  <div className="result-card">

    <div className="card-title">

      <AlertTriangle
        size={24}
        color="#ef4444"
      />

      <h3>Missing Skills</h3>

    </div>

    <TagList
      items={missing_skills}
      type="bad"
    />

  </div>

</div>

       <div className="result-grid">

  <div className="result-card">

    <div className="card-title">

      <CheckCircle
        size={24}
        color="#22c55e"
      />

      <h3>Strengths</h3>

    </div>

    <BulletList items={strengths}/>

  </div>

  <div className="result-card">

    <div className="card-title">

      <XCircle
        size={24}
        color="#ef4444"
      />

      <h3>Weaknesses</h3>

    </div>

    <BulletList items={weaknesses}/>

  </div>

</div>

        <div className="result-card">
          <h3>Improvement Suggestions</h3>
          <BulletList items={improvement_suggestions} />
        </div>

        <div className="result-grid">
          <div className="result-card">
            <h3>Matched Keywords</h3>
            <TagList items={keyword_analysis?.matched_keywords} type="good" />
          </div>
          <div className="result-card">
            <h3>Missing Keywords</h3>
            <TagList items={keyword_analysis?.missing_keywords} type="bad" />
          </div>
        </div>

        <div className="result-grid-three">
          <div className="result-card">
            <h3>Experience Match</h3>
            <p>{experience_match || "—"}</p>
          </div>
          <div className="result-card">
            <h3>Education Match</h3>
            <p>{education_match || "—"}</p>
          </div>
          <div className="result-card">
            <h3>Projects Feedback</h3>
            <p>{projects_feedback || "—"}</p>
          </div>
        </div>

        {final_recommendation && (
          <div className="result-card highlight-card">
            <h3>Final Recommendation</h3>
            <p>{final_recommendation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeResult;
