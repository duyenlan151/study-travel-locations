'use client';

import React, { useEffect, useState } from 'react';

interface Props {
  texts: string[];
  speed?: number;
  pause?: number;
  className?: string;
}

/**
 * A typewriter effect component that loops through an array of texts, displaying each text one character at a time.
 * The text is typed out and then deleted before the next text starts. This creates a dynamic typing loop effect.
 *
 * The component allows customization of typing speed and pause duration between text deletions.
 *
 * @component
 * @example
 * // Use the default typing speed and pause, looping through texts
 * <TypewriterLoop texts={['Hello, world!', 'Welcome to our site.']} />
 *
 * // Use a faster typing speed and shorter pause between texts
 * <TypewriterLoop texts={['Short text 1', 'Short text 2']} speed={100} pause={1000} />
 *
 * // Use custom styling for the typewriter text
 * <TypewriterLoop texts={['Typewriting effect']} className="text-xl font-bold text-blue-500" />
 *
 * @param {Object} props - The props for the component.
 * @param {string[]} props.texts - An array of strings that will be typed out in the component.
 * @param {number} [props.speed=200] - The typing speed in milliseconds. Default is 200ms.
 * @param {number} [props.pause=2500] - The pause duration between deleting and typing new text, in milliseconds. Default is 2500ms.
 * @param {string} [props.className] - Optional custom class name for styling.
 * @returns {JSX.Element} - The TypewriterLoop component.
 */

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
