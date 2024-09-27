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

      {/* Add separations */}
      {reactions.map((_, index) => (
        <div
          key={`separation-${index}`}
          className="absolute top-1/2 left-1/2 w-1/2 h-0.5 bg-gray-200 origin-left"
          style={{
            transform: `rotate(${(index * 360) / reactions.length}deg)`,
          }}
        ></div>
      ))}

      {/* Add section highlights */}
      {reactions.map((_, index) => (
        <div
          key={`highlight-${index}`}
          className="absolute top-0 left-1/2 w-1/2 h-1/2 origin-bottom-left bg-gray-100"
          style={{
            transform: `rotate(${(index * 360) / reactions.length}deg)`,
            clipPath: "polygon(0 0, 100% 0, 0 100%)",
          }}
        ></div>
      ))}

      {reactions.map((reaction, index) => (
        <div
          key={index}
          className="absolute w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            top: `${
              50 +
              40 * Math.sin(((index + 0.5) * 2 * Math.PI) / reactions.length)
            }%`,
            left: `${
              50 +
              40 * Math.cos(((index + 0.5) * 2 * Math.PI) / reactions.length)
            }%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="text-xl">{reaction.emoji}</span>
        </div>
      ))}

      {/* Move the center circle to be above the separations and highlights */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="w-24 h-24 bg-purple-200 rounded-full flex items-center justify-center">
          <span className="text-2xl">😊</span>
        </div>
      </div>
    </div>
  );
};

export default ReactionWheel;
