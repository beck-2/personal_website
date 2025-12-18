import React from 'react'
import './Projects.css'
import vinesImage from '../../assets/images/vines.png'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Quirky Web App",
      description: "A delightful web application that showcases creative coding and retro design principles.",
      tech: ["React", "CSS3", "JavaScript"],
      image: "project-1"
    },
    {
      id: 2,
      title: "Digital Art Gallery",
      description: "An interactive gallery for showcasing digital artwork with smooth animations.",
      tech: ["HTML5", "CSS3", "Vanilla JS"],
      image: "project-2"
    },
    {
      id: 3,
      title: "Retro Portfolio",
      description: "A vintage-inspired portfolio website with hand-drawn elements and smooth scrolling.",
      tech: ["React", "Styled Components", "Framer Motion"],
      image: "project-3"
    }
  ]

  return (
    <section id="projects" className="section projects-section">
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="title-flourish"></div>
        </div>
        
        <div className="vines-decoration">
          <img src={vinesImage} alt="Decorative vines" className="vines-image" />
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
                  <button className="btn btn-primary">View Project</button>
                  <button className="btn btn-secondary">Source Code</button>
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
