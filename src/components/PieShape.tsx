"use client";

import React, { useState, forwardRef, ForwardedRef } from "react";

interface PieShapeProps {
  isVisible: boolean;
  triggerPosition: { x: number; y: number };
}

const PieShape = forwardRef(
  (
    { isVisible, triggerPosition }: PieShapeProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [hoveredSection, setHoveredSection] = useState<number | null>(null);

    // Array of emojis to use for each section
    const emojis = ["😀", "🎉", "🚀", "💡", "🌈", "🎵", "🍕", "🌟"];

    const svgSize = 300;
    const halfSize = svgSize / 2;

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
        </svg>
      </div>
    );
  }
);

PieShape.displayName = "PieShape";

export default PieShape;
