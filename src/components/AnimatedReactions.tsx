"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Reaction {
  id: number;
  x: number;
  y: number;
}

const AnimatedReactions: React.FC = () => {
  const [reactions, setReactions] = useState<Reaction[]>([]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const newReaction: Reaction = {
      id: Date.now(),
      x: event.clientX,
      y: event.clientY,
    };
    setReactions((prev) => [...prev, newReaction]);
  };

  return (
    <div className="fixed inset-0 z-50" onClick={handleClick}>
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
            className="absolute text-4xl"
            onAnimationComplete={() => {
              setReactions((prev) => prev.filter((r) => r.id !== reaction.id));
            }}
          >
            🔥
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedReactions;
