import React, { useState, useRef } from "react";
import ResumeResult from "./ResumeResult";
import Navbar from "../components/Navbar";
import { CloudUpload } from "lucide-react";
import Lastbutton from "../components/Lastbutton";

const API_BASE_URL = "http://localhost:8000";

function ResumeAnalyzer() {

  // States
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  // File Input Ref
  const inputRef = useRef(null);

  // Select Resume
  function handleFileChange(event) {

    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      setError("");
    }

  }

  // Analyze Resume
  async function handleAnalyze() {

    if (!file) {
      setError("Please choose a resume...");
      return;
    }

    if (jobDescription.trim() === "") {
      setError("Please enter job description.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    const formData = new FormData();

    formData.append("file", file);
    formData.append("job_description", jobDescription);

    try {

      const response = await fetch(
        `${API_BASE_URL}/resume/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Server Error");
      }

      const data = await response.json();

      setResult(data);

    } catch (error) {

      setError(error.message);

    } finally {

      setLoading(false);

    }

  }

  // Reset
  function handleReset() {

    setFile(null);
    setJobDescription("");
    setError("");
    setResult(null);

    inputRef.current.value = "";

  }

  // Show Result Page
  if (result) {
    return (
      <ResumeResult
        data={result}
        fileName={file?.name}
        onReset={handleReset}
      />
    );
  }

  return (
    <div className="resume-middle">

      <div className="resume-container">

          <div className='nav-container'>
                  <Navbar/>
          </div>


        {/* Heading */}
        <div className="resume-header">
          <h1>Upload Your Resume Get Instant Feedback</h1>
        </div>

        {/* Upload Section */} 
        <div className="resume-upload">

          {/* Resume Upload */}
          <div className="upload-file">

            <div className="icon">
            <CloudUpload size={80} color='white' />
            </div>

            <div className="text-container">
              <h3>
                {file
                  ? file.name
                  : "PDF, DOCX Format Supported (Max 10MB)"}
              </h3>
            </div>

            <input
              ref={inputRef}
              id="resume-file-input"
              type="file"
              accept=".pdf,.doc,.docx"
              hidden
              onChange={handleFileChange}
            />

            <label
              htmlFor="resume-file-input"
              className="uploadbtn"
            >
              Choose File
            </label>

          </div>

          {/* Job Description */}
          <div className="job-desc-container">

            <h2>Job Description</h2>

            <textarea
              className="job-desc-input"
              placeholder="Paste Job Description..."
              value={jobDescription}
              onChange={(event) =>
                setJobDescription(event.target.value)
              }
            />

          </div>

        </div>

        {/* Error */}
        {error && (
          <div className="text-container">
            <h3 className="error-text">{error}</h3>
          </div>
        )}

        {/* Analyze Button */}
        <div className="analyze-btn">
          <button
            onClick={handleAnalyze}
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Analyze"}
          </button>
        </div>

      </div>

        <div className="footer">
          <div className="last-container">
                <div className="footer">
                       <p>
                        © 2026 AI Job Search Platform | Built by
                        <strong> Aniket Underiya</strong>
                    </p>
                </div>
             </div>
        </div>
    </div>
  );
}

export default ResumeAnalyzer;