import { motion } from "framer-motion";

export default function Spinner({ text, radius, fontSize, letterSpacing }) {
  const characters = text.split("");

  return (
    <motion.div className="relative" style={{ width: radius * 2, aspectRatio: '1' }}>
      <p aria-label={text} />
      <p aria-hidden="true" className="text">
        {characters.map((ch, i) => (
          <motion.span
            key={i}
            className={`absolute top-0 left-1/2 transform -translate-x-1/2`}
            style={{
              transformOrigin: `0 ${radius}px`,
              transform: `rotate(${i * letterSpacing}deg)`,
              fontSize: fontSize,
              color: '#ccd6f6'
            }}
          >
            {ch}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
}
