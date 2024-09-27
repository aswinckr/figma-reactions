import React from "react";

const PieShape: React.FC = () => {
  return (
    <svg width="300" height="300" viewBox="0 0 300 300">
      <circle
        cx="150"
        cy="150"
        r="145"
        fill="white"
        stroke="purple"
        strokeWidth="2"
      />
      {[...Array(8)].map((_, index) => (
        <line
          key={index}
          x1="150"
          y1="150"
          x2={150 + 145 * Math.cos((Math.PI / 4) * index)}
          y2={150 + 145 * Math.sin((Math.PI / 4) * index)}
          stroke="purple"
          strokeWidth="2"
        />
      ))}
    </svg>
  );
};

export default PieShape;
