import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './ClickSpark.css'

const ClickSpark = () => {
  const [sparks, setSparks] = useState([])

  useEffect(() => {
    let sparkId = 0

    const handleClick = (e) => {
      const newSparks = []
      const sparkCount = 8 // Number of sparks per click
      
      for (let i = 0; i < sparkCount; i++) {
        const angle = (i * 360) / sparkCount
        const velocity = 15
        
        newSparks.push({
          id: sparkId++,
          x: e.clientX,
          y: e.clientY,
          angle,
          velocity,
        })
      }
      
      setSparks(prev => [...prev, ...newSparks])
      
      // Remove sparks after animation
      setTimeout(() => {
        setSparks(prev => prev.filter(spark => !newSparks.find(s => s.id === spark.id)))
      }, 1000)
    }

    document.addEventListener('click', handleClick)
    
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <div className="click-spark-container">
      <AnimatePresence>
        {sparks.map((spark) => (
          <motion.div
            key={spark.id}
            className="spark"
            initial={{
              x: spark.x,
              y: spark.y,
              scale: 1,
              opacity: 1,
            }}
            animate={{
              x: spark.x + Math.cos((spark.angle * Math.PI) / 180) * spark.velocity,
              y: spark.y + Math.sin((spark.angle * Math.PI) / 180) * spark.velocity,
              scale: 0,
              opacity: 0,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

export default ClickSpark

