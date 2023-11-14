import React from 'react';
import { motion } from 'framer-motion';

interface TypingAnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  delay?: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  delay = 0.07,
  ...props
}) => {
  const characters = Array.from(text);

  const characterVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * delay,
      },
    }),
  };

  return (
    <div {...props}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={characterVariants}
          initial="hidden"
          animate="visible"
          custom={index}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default TypingAnimation;
