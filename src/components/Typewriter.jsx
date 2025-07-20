import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Typewriter = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <motion.h1
      className="text-4xl md:text-5xl font-semibold text-white mt-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {displayedText}
      <span className="inline-block w-[1ch] animate-pulse text-white/15">|</span>
    </motion.h1>
  );
};

export default Typewriter;
