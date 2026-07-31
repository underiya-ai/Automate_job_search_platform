import React from "react";

const TagList = ({ items, type }) => {
  if (!items || items.length === 0) {
    return <p className="empty-text">Kuch nahi mila.</p>;
  }
  return (
    <div className="tag-list">
      {items.map((item, i) => (
        <span key={i} className={type === "good" ? "tag-good" : "tag-bad"}>
          {item}
        </span>
      ))}
    </div>
  );
};

const BulletList = ({ items }) => {
  if (!items || items.length === 0) {
    return <p className="empty-text">There is noting to extract.</p>;
  }
  return (
    <ul className="bullet-list">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
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
          <h1>Resume Analysis Report</h1>
          {fileName && <p className="result-filename">{fileName}</p>}
          <div className="analyze-btn">
            <button onClick={onReset}>Analyze Another Resume</button>
          </div>
        </div>

        <div className="score-row">
          <div className="score-box">
            <h2>{ats_score}%</h2>
            <p>ATS Score</p>
          </div>
          <div className="score-box">
            <h2>{job_match_percentage}%</h2>
            <p>Job Match</p>
          </div>
        </div>

        {resume_summary && (
          <div className="result-card">
            <h3>Resume Summary</h3>
            <p>{resume_summary}</p>
          </div>
        )}

        <div className="result-grid">
          <div className="result-card">
            <h3>Matching Skills</h3>
            <TagList items={matching_skills} type="good" />
          </div>
          <div className="result-card">
            <h3>Missing Skills</h3>
            <TagList items={missing_skills} type="bad" />
          </div>
        </div>

        <div className="result-grid">
          <div className="result-card">
            <h3>Strengths</h3>
            <BulletList items={strengths} />
          </div>
          <div className="result-card">
            <h3>Weaknesses</h3>
            <BulletList items={weaknesses} />
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
