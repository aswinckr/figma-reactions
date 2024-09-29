"use client";

import React, { useState, forwardRef, ForwardedRef } from "react";
import { FiShuffle } from "react-icons/fi"; // Import the shuffle icon

interface PieShapeProps {
  isVisible: boolean;
  triggerPosition: { x: number; y: number };
  onEmojiSelect: (emoji: string) => void; // Add this line
}

const PieShape = forwardRef(
  (
    { isVisible, triggerPosition, onEmojiSelect }: PieShapeProps, // Add onEmojiSelect here
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [hoveredSection, setHoveredSection] = useState<number | null>(null);
    const [emojis, setEmojis] = useState([
      "😀",
      "🎉",
      "🚀",
      "💡",
      "🌈",
      "🎵",
      "🍕",
      "🌟",
    ]);

    const svgSize = 300;
    const halfSize = svgSize / 2;

    const shuffleEmojis = () => {
      setEmojis([...emojis].sort(() => Math.random() - 0.5));
    };

    return (
      <div
        ref={ref}
        style={{
          position: "fixed",
          left: triggerPosition.x - halfSize,
          top: triggerPosition.y - halfSize,
          pointerEvents: isVisible ? "auto" : "none",
        }}
      >
        <svg
          width={svgSize}
          height={svgSize}
          viewBox={`0 0 ${svgSize} ${svgSize}`}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: `scale(${isVisible ? 1 : 0.8})`,
            transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
          }}
        >
          <circle
            cx={halfSize}
            cy={halfSize}
            r={145}
            fill="white"
            stroke="#9746FF"
            strokeWidth="4"
          />
          {[...Array(8)].map((_, index) => (
            <React.Fragment key={index}>
              <line
                x1={halfSize}
                y1={halfSize}
                x2={halfSize + 145 * Math.cos((Math.PI / 4) * index)}
                y2={halfSize + 145 * Math.sin((Math.PI / 4) * index)}
                stroke="#E5E5E5"
                strokeWidth="2"
              />
              <path
                d={`M ${halfSize} ${halfSize} L ${
                  halfSize + 145 * Math.cos((Math.PI / 4) * index)
                } ${
                  halfSize + 145 * Math.sin((Math.PI / 4) * index)
                } A 145 145 0 0 1 ${
                  halfSize + 145 * Math.cos((Math.PI / 4) * (index + 1))
                } ${halfSize + 145 * Math.sin((Math.PI / 4) * (index + 1))} Z`}
                fill={hoveredSection === index ? "lavender" : "transparent"}
                onMouseEnter={() => setHoveredSection(index)}
                onMouseLeave={() => setHoveredSection(null)}
                onClick={() => onEmojiSelect(emojis[index])} // Add this line
                style={{ cursor: "pointer" }}
              />
              <text
                x={
                  halfSize + 100 * Math.cos((Math.PI / 4) * index + Math.PI / 8)
                }
                y={
                  halfSize + 100 * Math.sin((Math.PI / 4) * index + Math.PI / 8)
                }
                fontSize="24"
                textAnchor="middle"
                dominantBaseline="central"
              >
                {emojis[index]}
              </text>
            </React.Fragment>
          ))}

          {/* Shuffle circle and emoji */}
          <g onClick={shuffleEmojis} style={{ cursor: "pointer" }}>
            <circle cx={halfSize} cy={halfSize} r={48} fill="#9746FF" />
            <text
              x={halfSize}
              y={halfSize}
              fontSize="32"
              textAnchor="middle"
              dominantBaseline="central"
              fill="white"
            >
              🔀
            </text>
          </g>
        </svg>
      </div>
    );
  }
);

PieShape.displayName = "PieShape";

export default PieShape;
