import React from 'react'
import './Extras.css'

const Extras = () => {
  const extras = [
    {
      id: 1,
      title: "Currently Reading",
      content: "Designing Data-Intensive Applications by Martin Kleppmann",
      icon: "📚"
    },
    {
      id: 2,
      title: "Learning",
      content: "Advanced CSS animations and creative coding techniques",
      icon: "🎨"
    },
    {
      id: 3,
      title: "Listening To",
      content: "Retro synthwave and ambient electronic music",
      icon: "🎵"
    },
    {
      id: 4,
      title: "Fun Fact",
      content: "I once built a website entirely in CSS Grid before it was cool",
      icon: "⭐"
    }
  ]

  return (
    <section id="extras" className="section extras-section">
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title">Extras & Miscellany</h2>
          <div className="title-flourish"></div>
        </div>
        
        <div className="extras-intro">
          <p className="lead-text">
            A collection of random thoughts, current interests, and things that make me smile.
          </p>
        </div>
        
        <div className="extras-grid">
          {extras.map((item) => (
            <div key={item.id} className="extra-card">
              <div className="extra-icon">
                {typeof item.icon === 'string' ? item.icon : <img src={item.icon} alt="Icon" className="icon-image" />}
              </div>
              <h3 className="extra-title">{item.title}</h3>
              <p className="extra-content">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Extras
