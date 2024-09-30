"use client";

import { useState, useEffect, useRef } from "react";
import PieShape from "../components/PieShape";
import AnimatedReactions from "../components/AnimatedReactions";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [triggerPosition, setTriggerPosition] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const pieShapeRef = useRef<HTMLDivElement>(null);
  const [selectedEmoji, setSelectedEmoji] = useState("🔥"); // Add this line

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "e" && !isVisible) {
        setIsVisible(true);
        setTriggerPosition(mousePosition);
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isVisible &&
        pieShapeRef.current &&
        !pieShapeRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, mousePosition]);

  const handleEmojiSelect = (emoji: string) => {
    setSelectedEmoji(emoji);
    setIsVisible(false);
  };

  return (
    <div className="relative min-h-screen">
      <div className="font-[family-name:var(--font-geist-sans)] text-center pt-20">
        <h1 className="text-2xl font-bold select-none">Figma Reactions</h1>
        <div className="relative z-10">
          <PieShape
            ref={pieShapeRef}
            isVisible={isVisible}
            triggerPosition={triggerPosition}
            onEmojiSelect={handleEmojiSelect} // Add this line
          />
        </div>
        <p className="text-sm text-gray-500 relative z-10 select-none">
          Press &apos;E&apos; to show reactions, click outside to hide
        </p>
      </div>
      <AnimatedReactions currentEmoji={selectedEmoji} />{" "}
      {/* Update this line */}
    </div>
  );
}
