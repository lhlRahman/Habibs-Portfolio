"use client"
import React from 'react'
import TypeWriter from 'typewriter-effect'

const TitleTypeWriter = () => {
  return (
    <TypeWriter
    options={{
      loop: true,
    }}
    onInit={(typewriter) => {
      typewriter.typeString('a Software Engineer 💻')
        .pauseFor(500)
        .deleteAll()
        .typeString('A Full Stack Developer 🖥️')
        .pauseFor(500)
        .deleteAll()
        .typeString('an Air Cadet 👨‍✈️')
        .pauseFor(500)
        .deleteAll()
        .typeString('Batman 🦇')
        .pauseFor(500)
        .deleteAll()
        .start();
    }}
    
    />
  )
}

export default TitleTypeWriter