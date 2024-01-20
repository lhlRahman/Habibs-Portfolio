import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨーラリルレロワヰヱヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ";

const WordRotate = ({ CYCLES_PER_LETTER, SHUFFLE_TIME, children }) => {
  const intervalRef = useRef(null);
  const [text, setText] = useState(children);

  // Convert children to a string for scrambling
  const TARGET_TEXT =
    typeof children === "string"
      ? children
      : React.Children.toArray(children).join("");

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current);
    setText(TARGET_TEXT);
  };

  useEffect(() => {
    scramble();
    const timeoutId = setTimeout(stopScramble, 15000);

    // Clear the interval and timeout when the component unmounts
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <motion.button
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
    >
      <div className="relative z-10 flex items-center gap-2">
        <span>{text}</span>
      </div>
    </motion.button>
  );
};

export default WordRotate;