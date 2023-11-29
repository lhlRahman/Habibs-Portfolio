"use client";
import React from 'react';
import TypeWriter from 'typewriter-effect';

const TitleTypeWriter = () => {
  const emojiFontClass = 'font-system-ui'; // This is the class that applies the system font stack
  
  return (
    <TypeWriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter.typeString('a Software Engineer <span class="' + emojiFontClass + '">💻</span>')
          .pauseFor(500)
          .deleteAll()
          .typeString('A Full Stack Developer <span class="' + emojiFontClass + '">🖥️</span>')
          .pauseFor(500)
          .deleteAll()
          .typeString('an Air Cadet <span class="' + emojiFontClass + '">👨‍✈️</span>')
          .pauseFor(500)
          .deleteAll()
          .typeString('Batman <span class="' + emojiFontClass + '">🦇</span>')
          .pauseFor(500)
          .deleteAll()
          .start();
      }}
    />
  )
}

export default TitleTypeWriter;
