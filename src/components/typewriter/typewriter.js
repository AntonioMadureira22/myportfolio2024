// src/components/Typewriter.js
import React, { useEffect, useState } from 'react';
import '../typewriter/typewriter.css'; // Import CSS for typewriter effect

const Typewriter = ({ text, typingSpeed = 100, deletingSpeed = 150, pauseDuration = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(text.slice(0, index));
        setIndex(prev => prev - 1);
      }, deletingSpeed);
      if (index === 0) {
        setIsDeleting(false);
        setIndex(prev => prev + 1);
      }
    } else {
      timer = setTimeout(() => {
        setDisplayText(text.slice(0, index + 1));
        setIndex(prev => prev + 1);
      }, typingSpeed);
      if (index === text.length) {
        setIsDeleting(true);
        timer = setTimeout(() => {
          setDisplayText(text.slice(0, index));
          setIndex(prev => prev - 1);
        }, pauseDuration);
      }
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, text, typingSpeed, deletingSpeed, pauseDuration]);

  return <p className="typewriter-text">{displayText}</p>;
};

export default Typewriter;
