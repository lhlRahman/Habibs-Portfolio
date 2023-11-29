import React from 'react';
import TypeWriter from 'typewriter-effect';

const TitleTypeWriter = () => {
  const emojiFontClass = 'font-system-ui'; // This is the class that applie
  
  return (
    <TypeWriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter.typeString('a Software Engineer <span class="' + emojiFontClass + '">&#x1F4BB;</span>')
          .pauseFor(500)
          .deleteAll()
          .typeString('A Full Stack Developer <span class="' + emojiFontClass + '">&#x1F4BB;</span>')
          .pauseFor(500)
          .deleteAll()
          .typeString('an Air Cadet <span class="' + emojiFontClass + '">&#x1F6E2;&#x200D;&#x2708;&#xFE0F;</span>')
          .pauseFor(500)
          .deleteAll()
          .typeString('Batman <span class="' + emojiFontClass + '">&#x1F987;</span>')
          .pauseFor(500)
          .deleteAll()
          .start();
      }}
    />
  )
}

export default TitleTypeWriter;