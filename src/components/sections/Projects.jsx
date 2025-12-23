import React from 'react'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Applicant Tracking System",
      description: "Designed with the UCLA club recruiting process in mind, this ATS allows club officers to create events, application forms, and track applicants all in one place.",
      tech: ["React", "PostgreSQL", "JavaScript", "Node.js", "Express"],
      image: "project-1",
      liveLink: null,
      githubLink: "https://github.com/beck-2/CS35L"
    },
    {
      id: 2,
      title: "Video2Comic",
      description: "Converts videos into comic strips with automatic frame selection and text bubble generation from audio. Featured on Deeplearning.AI",
      tech: ["Yolov5", "Gemini API", "Python"],
      image: "project-2",
      liveLink: null,
      githubLink: null
    },
    {
      id: 3,
      title: "Retro Portfolio",
      description: "A vintage-inspired portfolio website with hand-drawn elements and smooth scrolling.",
      tech: ["React", "Styled Components", "Framer Motion"],
      image: "project-3",
      liveLink: null,
      githubLink: null
    }
  ]

  return (
    <section id="projects" className="section projects-section">
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="title-flourish"></div>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <span>{project.image}</span>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      View Project
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
