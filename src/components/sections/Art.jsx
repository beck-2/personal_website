import React from 'react'
import './Art.css'

const Art = () => {
  const artPieces = [
    {
      id: 1,
      title: "Astrophil",
      medium: "Portfolio",
      year: "2024",
      description: "An exploration of our connection with stars and symbols of science, and an absolute nuisance as my first-ever portfolio."
    },
    {
      id: 2,
      title: "My plants",
      medium: "seeds and earth",
      year: "2020 onwards",
      description: "Homegrown: orchids and herbs \n UCLA: terrarium and vegetable-bed \n Tassajara: a little gardening, a LOT of killing invasive plants"
    },
    {
      id: 3,
      title: "Framed up",
      medium: "Photographs",
      year: "",
      description: "My neighbor-turned-grandma Zia is a wonderful photographer and teacher, and I still snap pics on her old Lumix camera."
    },
    {
      id: 4,
      title: "Notebook Snippets",
      medium: "various sketches",
      year: "ever-growing",
      description: "I doodle everywhere, usually in margins and on top of old homework."
    }
  ]

  return (
    <section id="extras" className="section art-section">
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title">Extras</h2>
          <div className="title-flourish"></div>
        </div>
        
        <div className="art-intro">
          <p className="lead-text">
            I'm great at being mediocre at a variety of things. I don't document most things I make, but here are some experiments with as many mediums as I can get my hands on
          </p>
        </div>
        
        <div className="art-gallery">
          {artPieces.map((piece) => (
            <div key={piece.id} className="art-piece">
              <div className="art-image">
                <div className="image-placeholder">
                  <span>{piece.title}</span>
                </div>
              </div>
              
              <div className="art-info">
                <h3 className="art-title">{piece.title}</h3>
                <div className="art-meta">
                  <span className="art-medium">{piece.medium}</span>
                  <span className="art-year">{piece.year}</span>
                </div>
                <p className="art-description">{piece.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Art
