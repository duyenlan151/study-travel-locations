'use client';

import React, { useEffect, useState } from 'react';

interface Props {
  texts: string[];
  speed?: number;
  pause?: number;
  className?: string;
}

export const TypewriterLoop: React.FC<Props> = ({
  texts,
  speed = 200,
  pause = 2500,
  className,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0] || '');

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isDeleting && index === 0) {
      setIsDeleting(false);
      setTextIndex(prev => (prev + 1) % texts.length);
      timeout = setTimeout(() => {}, speed);
    } else if (!isDeleting && index < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(prev => prev + currentText.charAt(index));
        setIndex(prev => prev + 1);
      }, speed);
    } else if (!isDeleting && index === currentText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pause);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
        setIndex(prev => prev - 1);
      }, speed - 150);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, currentText, speed, pause]);

  useEffect(() => {
    setCurrentText(texts[textIndex] || '');
  }, [textIndex, texts]);

  return (
    <div className={className}>
      <span>{displayText}</span>
      <span className="ml-2">|</span>
    </div>
  );
};
