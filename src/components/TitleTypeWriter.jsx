"use client"
import React from 'react';
import TypeWriter from 'typewriter-effect';

const TitleTypeWriter = () => {
  return (
    <TypeWriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter.typeString('a Software Engineer \u{1F4BB}') // Unicode for 💻
          .pauseFor(500)
          .deleteAll()
          .typeString('A Full Stack Developer \u{1F5A5}') // Unicode for 🖥️
          .pauseFor(500)
          .deleteAll()
          .typeString('an Air Cadet \u{1F468}\u200D\u2708\uFE0F') // Unicode for 👨‍✈️
          .pauseFor(500)
          .deleteAll()
          .typeString('Batman \u{1F987}') // Unicode for 🦇
          .pauseFor(500)
          .deleteAll()
          .start();
      }}
    />
  )
}

export default TitleTypeWriter;
