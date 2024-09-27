import React from "react";

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

  return (
    <div className="relative w-64 h-64">
      <div className="absolute inset-0 rounded-full border-4 border-purple-500 bg-white"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 bg-purple-200 rounded-full flex items-center justify-center">
          <span className="text-2xl">😊</span>
        </div>
      </div>
      {reactions.map((reaction, index) => (
        <div
          key={index}
          className="absolute w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            top: `${
              50 + 40 * Math.sin((index * 2 * Math.PI) / reactions.length)
            }%`,
            left: `${
              50 + 40 * Math.cos((index * 2 * Math.PI) / reactions.length)
            }%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="text-xl">{reaction.emoji}</span>
        </div>
      ))}
    </div>
  );
};

export default ReactionWheel;
