import React, { useState } from 'react'
import './Contact.css'
import sleepyBirdImage from '../../assets/images/bluebird.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="harold-annotation">
            <span className="annotation-text">this is harold →</span>
          </div>
          <div className="sleepy-bird-decoration">
            <img src={sleepyBirdImage} alt="Sleepy bird" className="sleepy-bird-image" />
          </div>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              You can reach me via my messenger pigeon, Harold, or one of the methods below.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <h4>Email</h4>
                <p>beckjpeterson@gmail.com</p>
              </div>
              
              <div className="contact-method">
                <h4>Location</h4>
                <p>San Fransisco Bay Area, CA</p>
              </div>
              
              <div className="contact-method">
                <h4>Social</h4>
                <div className="social-links">
                  <a href="https://github.com/beck-2" className="social-link">GitHub</a>
                  <a href="https://www.linkedin.com/in/beckjpeterson/" className="social-link">LinkedIn</a>
                  <a href="https://www.instagram.com/beckjpeterson/" className="social-link">Instagram</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
