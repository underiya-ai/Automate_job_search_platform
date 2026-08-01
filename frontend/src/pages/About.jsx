import React from 'react';
import './About.css';

import Navbar from '../components/Navbar';

import {Brain,Search,FileText,Zap,CheckCircle,ArrowRight,} from 'lucide-react';

function About() {
  return (
    <div className="about-page">

      <div className="nav-container">
        <Navbar />
      </div>

      {/* Hero */}

      <section className="hero-section">

        <h1>About AI Job Search</h1>

        <p>
          AI Job Search is an intelligent platform designed to help job seekers
          improve their resumes, discover relevant opportunities, and increase
          their chances of getting hired using Artificial Intelligence.
        </p>

        <button>
          Get Started
          <ArrowRight size={18} />
        </button>

      </section>

      {/* Mission */}

      <section className="mission-section">

        <h2>Our Mission</h2>

        <p>
          Our mission is to simplify the hiring journey by combining Artificial
          Intelligence with modern web technologies. We help candidates analyze
          resumes, identify missing skills, and search for jobs that match their
          profiles.
        </p>

      </section>

      {/* Features */}

      <section className="feature-section">

        <h2>What We Offer</h2>

        <div className="feature-grid">

          <div className="feature-card">

            <Brain size={45} />

            <h3>AI Resume Analyzer</h3>

            <p>
              Get ATS score, skill gap analysis, strengths, weaknesses, keyword
              matching and AI-powered recommendations.
            </p>

          </div>

          <div className="feature-card">

            <Search size={45} />

            <h3>AI Job Search</h3>

            <p>
              Search jobs using either your Resume or Job Description and find
              opportunities that closely match your profile.
            </p>

          </div>

          <div className="feature-card">

            <FileText size={45} />

            <h3>Smart Analysis</h3>

            <p>
              Analyze your resume with AI and receive detailed feedback on
              experience, education, keywords and projects.
            </p>

          </div>

          <div className="feature-card">

            <Zap size={45} />

            <h3>Fast & Easy</h3>

            <p>
              Upload your resume or paste a Job Description and receive results
              in just a few seconds.
            </p>

          </div>

        </div>

      </section>

      {/* How it Works */}

      <section className="work-section">

        <h2>How It Works</h2>

        <div className="work-grid">

          <div className="step-card">

            <span>1</span>

            <h3>Upload Resume</h3>

            <p>Upload your resume securely in PDF format.</p>

          </div>

          <div className="step-card">

            <span>2</span>

            <h3>AI Analysis</h3>

            <p>Our AI analyzes your resume and extracts important information.</p>

          </div>

          <div className="step-card">

            <span>3</span>

            <h3>Search Jobs</h3>

            <p>Find jobs using your Resume or Job Description.</p>

          </div>

          <div className="step-card">

            <span>4</span>

            <h3>Apply</h3>

            <p>Apply directly to your favorite job opportunities.</p>

          </div>

        </div>

      </section>

      {/* Tech Stack */}

      <section className="tech-section">

        <h2>Technology Stack</h2>

        <div className="tech-grid">
          
          <span>AI/ML</span>
          <span>React</span>

          <span>FastAPI</span>

          <span>Python</span>

          <span>LangGraph</span>

          <span>LangChain</span>

          <span>Pydantic</span>

          <span>REST API</span>

          <span>JavaScript</span>

          <span>HTML</span>

          <span>CSS</span>
          <span>Agentic Ai</span>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="why-section">

        <h2>Why Choose Us?</h2>

        <div className="why-grid">

          <div>

            <CheckCircle size={20} />

            AI Powered Resume Analysis

          </div>

          <div>

            <CheckCircle size={20} />

            ATS Score Calculation

          </div>

          <div>

            <CheckCircle size={20} />

            Resume Based Job Search

          </div>

          <div>

            <CheckCircle size={20} />

            Job Description Search

          </div>

          <div>

            <CheckCircle size={20} />

            Skill Gap Detection

          </div>

          <div>

            <CheckCircle size={20} />

            Fast Performance

          </div>

        </div>

      </section>

      {/* Developer */}

      <section className="developer-section">

        <div className="developer-card">

          <div className="avatar">

            AU

          </div>

          <h2>Aniket Underiya</h2>

          <p>

            Full Stack Python Developer passionate about building AI-powered
            applications using React, FastAPI, LangGraph, Agentic Ai modern AI
            technologies.

          </p>

        </div>

      </section>

      {/* Footer */}

      <footer>

        © 2026 AI Job Search Platform | Built by
        <strong> Aniket Underiya</strong>

      </footer>

    </div>
  );
}

export default About;