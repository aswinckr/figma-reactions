"use client";

import React, { useState } from "react";

const PieShape: React.FC = () => {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);

  return (
    <svg width="300" height="300" viewBox="0 0 300 300">
      <circle
        cx="150"
        cy="150"
        r="145"
        fill="white"
        stroke="#9746FF"
        strokeWidth="4"
      />
      {[...Array(8)].map((_, index) => (
        <React.Fragment key={index}>
          <line
            x1="150"
            y1="150"
            x2={150 + 145 * Math.cos((Math.PI / 4) * index)}
            y2={150 + 145 * Math.sin((Math.PI / 4) * index)}
            stroke="#E5E5E5"
            strokeWidth="2"
          />
          <path
            d={`M 150 150 L ${150 + 145 * Math.cos((Math.PI / 4) * index)} ${
              150 + 145 * Math.sin((Math.PI / 4) * index)
            } A 145 145 0 0 1 ${
              150 + 145 * Math.cos((Math.PI / 4) * (index + 1))
            } ${150 + 145 * Math.sin((Math.PI / 4) * (index + 1))} Z`}
            fill={hoveredSection === index ? "lavender" : "transparent"}
            onMouseEnter={() => setHoveredSection(index)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ cursor: "pointer" }}
          />
        </React.Fragment>
      ))}
    </svg>
  );
};

export default PieShape;
