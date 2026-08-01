import React, { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import {CloudUpload,FileText,Search,MapPin,}from 'lucide-react';
import './Jobsearch.css';


const Jobsearch = () => {

  const [mode, setMode] = useState("resume");

const [file, setFile] = useState(null);

const [jobDescription, setJobDescription] = useState("");

const [location, setLocation] = useState("");

const [loading, setLoading] = useState(false);

const [error, setError] = useState("");

const [result, setResult] = useState(null);

const inputRef = useRef(null);

function handleFileChange(event) {

        const selectedFile = event.target.files[0];

        if (selectedFile) {

            setFile(selectedFile);

            setError("");

        }

    }

    async function handleSearch() {

        setError("");

        if (location.trim() === "") {

            setError("Please enter location.");

            return;

        }

        if (mode === "resume") {

            if (!file) {

                setError("Please upload resume.");

                return;

            }

        }

        if (mode === "job_description") {

            if (jobDescription.trim() === "") {

                setError("Please enter Job Description.");

                return;

            }

        }
       console.log("Validation Success");
      }
  return (
    <div className='job-container'>
        <div className='nav-container'>
                  <Navbar/>
        </div>

        <div className="job-search-wrapper">

     {/* Heading */}

  <div className="job-header">

    <h1>AI Job Search</h1>

    <p>
      Find the best jobs using your Resume or Job Description
    </p>

  </div>

  {/* Mode Selection */}

  <div className="mode-selector">

    <button
      className={mode === "resume" ? "active-mode" : ""}
      onClick={() => setMode("resume")}
    >
      <FileText size={18} />
      Resume
    </button>

    <button
      className={mode === "job_description" ? "active-mode" : ""}
      onClick={() => setMode("job_description")}
    >
      <Search size={18} />
      Job Description
    </button>

  </div>


  {/* Resume Upload */}

   {mode === "resume" && (

  <div className="upload-card">

    <CloudUpload size={70} className="upload-icon" />

    <h2>

      {

        file

        ?

        file.name

        :

        "Upload Your Resume"

      }

    </h2>

    <p>Only PDF files are supported</p>

    <input

      ref={inputRef}

      type="file"

      hidden

      id="resume"

      accept=".pdf"

      onChange={handleFileChange}

    />

    <label htmlFor="resume" className="choose-btn">

      Choose Resume

    </label>

  </div>

)}  {/* Job Description */}

{
mode === "job_description" && (

<div className="job-description-card">

    <h2>Job Description</h2>

    <textarea

        className="job-textarea"

        placeholder="Paste Job Description Here..."

        value={jobDescription}

        onChange={(e)=>setJobDescription(e.target.value)}

    />

</div>

)
}

{/* Location */}

<div className="location-card">

    <h2>Location</h2>

    <div className="location-input">

        <MapPin size={20}/>

        <input

            type="text"

            placeholder="Enter Location"

            value={location}

            onChange={(e)=>setLocation(e.target.value)}

        />

    </div>

</div>
{
error &&

<p className="error-text">

    {error}

</p>

}

<div className="search-btn-container">

<button

className="search-btn"

onClick={handleSearch}

disabled={loading}

>

{

loading

?

"Searching..."

:

"Search Jobs"

}

</button>

</div>

</div>
        
          
      
</div>
  )
}

export default Jobsearch