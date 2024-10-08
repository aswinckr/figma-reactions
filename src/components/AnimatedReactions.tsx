"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Reaction {
  id: number;
  x: number;
  y: number;
}

interface AnimatedReactionsProps {
  currentEmoji: string;
}

const AnimatedReactions: React.FC<AnimatedReactionsProps> = ({
  currentEmoji,
}) => {
  const [reactions, setReactions] = useState<Reaction[]>([]);

  const handleClick = useCallback((event: MouseEvent) => {
    const newReaction: Reaction = {
      id: Date.now(),
      x: event.clientX,
      y: event.clientY,
    };
    setReactions((prev) => [...prev, newReaction]);
  }, []);

  React.useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <AnimatePresence>
        {reactions.map((reaction) => (
          <motion.div
            key={reaction.id}
            initial={{ opacity: 1, scale: 1, x: reaction.x, y: reaction.y }}
            animate={{
              y: reaction.y - 200,
              scale: [1, 1.5, 1],
              rotate: [0, -10, 10, 0],
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 1 }}
            className="absolute text-4xl pointer-events-none select-none"
            onAnimationComplete={() => {
              setReactions((prev) => prev.filter((r) => r.id !== reaction.id));
            }}
          >
            {currentEmoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedReactions;
