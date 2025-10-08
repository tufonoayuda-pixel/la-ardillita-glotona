import PencilBorder from "../PencilBorder";

export default function PencilBorderExample() {
  return (
    <div className="relative w-full h-64 bg-background rounded-lg">
      <PencilBorder position="top-left" color="text-primary" rotation="rotate-12" />
      <PencilBorder position="top-right" color="text-secondary" rotation="-rotate-6" />
      <PencilBorder position="bottom-left" color="text-accent" rotation="-rotate-12" />
      <PencilBorder position="bottom-right" color="text-chart-4" rotation="rotate-6" />
    </div>
  );
}
