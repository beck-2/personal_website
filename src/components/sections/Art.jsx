import React from 'react'
import './Art.css'

const Art = () => {
  const artPieces = [
    {
      id: 1,
      title: "Digital Dreams",
      medium: "Digital Art",
      year: "2024",
      description: "A surreal exploration of digital landscapes and retro aesthetics."
    },
    {
      id: 2,
      title: "Vintage Visions",
      medium: "Mixed Media",
      year: "2023",
      description: "Combining traditional techniques with modern digital tools."
    },
    {
      id: 3,
      title: "Pixel Poetry",
      medium: "Pixel Art",
      year: "2024",
      description: "Minimalist pixel art exploring themes of nostalgia and technology."
    },
    {
      id: 4,
      title: "Retro Rhythms",
      medium: "Digital Illustration",
      year: "2023",
      description: "Dynamic illustrations inspired by vintage design and modern sensibilities."
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
            Beyond code, I explore digital art and creative expression. Here's a collection of my 
            artistic experiments and visual explorations.
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
