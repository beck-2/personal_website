import React, { useState } from 'react'
import './Art.css'

const Art = () => {
  const [currentImages, setCurrentImages] = useState({})
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isThrottled, setIsThrottled] = useState({})

  const artPieces = [
    {
      id: 1,
      title: "Astrophil",
      medium: "Portfolio",
      year: "2024",
      description: "An exploration of our connection with stars and symbols of science, and an absolute nuisance as my first-ever portfolio.",
      images: ['Image 1', 'Image 2', 'Image 3']
    },
    {
      id: 2,
      title: "My plants",
      medium: "seeds and earth",
      year: "2020 onwards",
      description: "Homegrown: orchids and herbs \n UCLA: terrarium and vegetable-bed \n Tassajara: a little gardening, a LOT of killing invasive plants",
      images: ['Image 1', 'Image 2', 'Image 3', 'Image 4']
    },
    {
      id: 3,
      title: "Framed up",
      medium: "Photographs",
      year: "",
      description: "My neighbor-turned-grandma Zia is a wonderful photographer and teacher, and I still snap pics on her old Lumix camera.",
      images: ['Image 1', 'Image 2', 'Image 3']
    },
    {
      id: 4,
      title: "Notebook Snippets",
      medium: "various sketches",
      year: "ever-growing",
      description: "I doodle everywhere, usually in margins and on top of old homework.",
      images: ['/src/assets/images/planeart.jpeg', 'Image 2', 'Image 3', 'Image 4', 'Image 5']
    }
  ]

  const handleNext = (pieceId, totalImages) => {
    setCurrentImages(prev => ({
      ...prev,
      [pieceId]: ((prev[pieceId] || 0) + 1) % totalImages
    }))
  }

  const handlePrev = (pieceId, totalImages) => {
    setCurrentImages(prev => ({
      ...prev,
      [pieceId]: ((prev[pieceId] || 0) - 1 + totalImages) % totalImages
    }))
  }

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (pieceId, totalImages) => {
    const swipeDistance = touchStart - touchEnd
    if (Math.abs(swipeDistance) > 30) {
      if (swipeDistance > 0) {
        // Swiped left - go to next
        handleNext(pieceId, totalImages)
      } else {
        // Swiped right - go to previous
        handlePrev(pieceId, totalImages)
      }
    }
    setTouchStart(0)
    setTouchEnd(0)
  }

  const handleMouseDown = (e) => {
    e.preventDefault()
    setTouchStart(e.clientX)
    setTouchEnd(e.clientX)
  }

  const handleMouseMove = (e) => {
    if (touchStart) {
      setTouchEnd(e.clientX)
    }
  }

  const handleMouseUp = (pieceId, totalImages) => {
    const swipeDistance = touchStart - touchEnd
    if (Math.abs(swipeDistance) > 30) {
      if (swipeDistance > 0) {
        handleNext(pieceId, totalImages)
      } else {
        handlePrev(pieceId, totalImages)
      }
    }
    setTouchStart(0)
    setTouchEnd(0)
  }

  const handleWheel = (e, pieceId, totalImages) => {
    // Throttle to prevent multiple rapid swipes
    if (isThrottled[pieceId]) return
    
    // Detect horizontal scroll (trackpad swipe)
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      // More sensitive threshold for back swipe, slightly less for forward
      const threshold = e.deltaX > 0 ? 20 : 15
      
      if (Math.abs(e.deltaX) > threshold) {
        e.preventDefault()
        
        if (e.deltaX > 0) {
          // Swiped left - go to next
          handleNext(pieceId, totalImages)
        } else {
          // Swiped right - go to previous (more sensitive)
          handlePrev(pieceId, totalImages)
        }
        
        // Set throttle
        setIsThrottled(prev => ({...prev, [pieceId]: true}))
        setTimeout(() => {
          setIsThrottled(prev => ({...prev, [pieceId]: false}))
        }, 700)
      }
    }
  }

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
          {artPieces.map((piece) => {
            const currentIndex = currentImages[piece.id] || 0
            return (
              <div key={piece.id} className="art-piece-wrapper">
                <div className="carousel-container">
                  <div 
                    className="art-image swipeable"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={() => handleTouchEnd(piece.id, piece.images.length)}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={() => handleMouseUp(piece.id, piece.images.length)}
                    onMouseLeave={() => {
                      setTouchStart(0)
                      setTouchEnd(0)
                    }}
                    onWheel={(e) => handleWheel(e, piece.id, piece.images.length)}
                  >
                    <div className="image-stack">
                      {/* Next image in the background */}
                      <div className="stacked-image background-image">
                        <img 
                          src={piece.images[(currentIndex + 1) % piece.images.length]} 
                          alt={`${piece.title} - Next image`}
                          className="gallery-image"
                        />
                      </div>
                      
                      {/* Current image on top */}
                      <div className="stacked-image front-image" key={currentIndex}>
                        <img 
                          src={piece.images[currentIndex]} 
                          alt={`${piece.title} - Image ${currentIndex + 1}`}
                          className="gallery-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="art-piece">
                  <div className="art-info">
                    <h3 className="art-title">{piece.title}</h3>
                    <div className="art-meta">
                      <span className="art-medium">{piece.medium}</span>
                      <span className="art-year">{piece.year}</span>
                    </div>
                    <p className="art-description">{piece.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Art
