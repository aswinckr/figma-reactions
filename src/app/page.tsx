import PieShape from "../components/PieShape";
import AnimatedReactions from "../components/AnimatedReactions";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-2xl font-bold">Figma Reactions</h1>
        <div className="relative z-10">
          <PieShape />
        </div>
        <AnimatedReactions />
        <p className="text-sm text-gray-500 relative z-10">
          Click outside the wheel to see reactions
        </p>
      </div>
    </div>
  );
}
