"use client";

import React from "react";
import { motion } from "framer-motion";

const ReactionWheel: React.FC = () => {
  const reactions = [
    { emoji: "😎", label: "Cool" },
    { emoji: "🔥", label: "Fire" },
    { emoji: "😮", label: "Wow" },
    { emoji: "👀", label: "Eyes" },
    { emoji: "👋", label: "Wave" },
    { emoji: "😢", label: "Sad" },
    { emoji: "😂", label: "Laugh" },
  ];

  // Update this constant for manual rotation adjustment
  const MANUAL_ROTATION_ADJUSTMENT = -8; // Adjust this value to rotate all sections

  return (
    <div className="relative w-64 h-64">
      <div className="absolute inset-0 rounded-full border-4 border-purple-500 bg-white overflow-hidden">
        {/* Update separations */}
        {reactions.map((_, index) => (
          <div
            key={`separation-${index}`}
            className="absolute top-1/2 left-1/2 w-1/2 h-0.5 bg-gray-200 origin-left"
            style={{
              transform: `rotate(${
                ((index + 1.185) * 360) / reactions.length +
                MANUAL_ROTATION_ADJUSTMENT
              }deg)`,
            }}
          ></div>
        ))}

        {/* Update section highlights to use a lighter purple color */}
        {reactions.map((_, index) => (
          <motion.div
            key={`highlight-${index}`}
            className="absolute top-0 left-1/2 w-1/2 h-1/2 origin-bottom-left bg-purple-100 cursor-pointer"
            style={{
              transform: `rotate(${
                (index * 360) / reactions.length + MANUAL_ROTATION_ADJUSTMENT
              }deg)`,
              clipPath: "polygon(0 0, 100% 0, 0 100%)",
            }}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          ></motion.div>
        ))}
      </div>

      {reactions.map((reaction, index) => {
        const angle = ((index + 0.5) * 2 * Math.PI) / reactions.length;
        return (
          <div
            key={index}
            className="absolute w-10 h-10 rounded-full flex items-center justify-center pointer-events-none"
            style={{
              top: `${50 + 40 * Math.sin(angle)}%`,
              left: `${50 + 40 * Math.cos(angle)}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <span className="text-xl">{reaction.emoji}</span>
          </div>
        );
      })}

      {/* Update the center circle to remain constant */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div className="w-24 h-24 bg-purple-200 rounded-full flex items-center justify-center pointer-events-auto">
          <span className="text-2xl">😊</span>
        </div>
      </div>
    </div>
  );
};

export default ReactionWheel;
