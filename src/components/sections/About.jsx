import React from 'react'
import './About.css'
import catImage from '../../assets/images/bluecat.png'
import hollowStar from '../../assets/hollowstar.png'

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title">Beck Peterson</h2>
          <div className="title-flourish"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="lead-text">
              Hi! I'm Beck, a Cognitive Science & Computer Science & Linguistics student at UCLA.
            </p>
            
            <p>
              I love exploring the intersection of the human brain and machine learning, robotics and art, and chocolate and coffee-- emphasis on that last combo. 
              I also love to learn about anything odd, so please get in touch with me if you have a good book or fun animal fact you'd like to share.
              <br /><br /> Although I'm passionate about AI, all content on this site is hand-drawn/written by me.
            </p>
            
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Technical</h3>
                <ul>
                  <li><img src={hollowStar} alt="Star" className="skill-bullet" />Machine Learning</li>
                  <li><img src={hollowStar} alt="Star" className="skill-bullet" />Backend Architecture</li>
                  <li><img src={hollowStar} alt="Star" className="skill-bullet" />Research</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h3>Design</h3>
                <ul>
                  <li><img src={hollowStar} alt="Star" className="skill-bullet" />UI/UX & Digital art</li>
                  <li><img src={hollowStar} alt="Star" className="skill-bullet" />Robotics</li>
                  <li><img src={hollowStar} alt="Star" className="skill-bullet" />Drawing & Painting</li>
                </ul>
              </div>
            </div>
          </div>
          
                           <div className="about-visual">
                   <div className="cat-animation">
                     <img src={catImage} alt="Animated cat" className="cat-image hand-drawn-element" />
                   </div>
                 </div>
        </div>
      </div>
    </section>
  )
}

export default About
