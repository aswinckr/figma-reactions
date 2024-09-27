import Image from "next/image";
import ReactionWheel from "../components/ReactionWheel";
import PieShape from "../components/PieShape";
import AnimatedReactions from "../components/AnimatedReactions";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-2xl font-bold">Figma Reactions</h1>
        <ReactionWheel />
        <p className="text-sm text-gray-500">Click anywhere to see reactions</p>
      </div>
      <AnimatedReactions />
    </div>
  );
}
