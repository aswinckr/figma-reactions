import Image from "next/image";
import ReactionWheel from "../components/ReactionWheel";
import PieShape from "../components/PieShape";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold">Figma Reactions</h1>
      <PieShape />
      <p className="text-sm text-gray-500">Click on a reaction to select it</p>
    </div>
  );
}
