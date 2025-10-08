import { Pencil } from "lucide-react";

interface PencilBorderProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  color: string;
  rotation: string;
}

export default function PencilBorder({ position, color, rotation }: PencilBorderProps) {
  const positionClasses = {
    "top-left": "top-2 left-2",
    "top-right": "top-2 right-2",
    "bottom-left": "bottom-2 left-2",
    "bottom-right": "bottom-2 right-2",
  };

  return (
    <div className={`absolute ${positionClasses[position]} ${rotation}`}>
      <Pencil className={`w-12 h-12 ${color}`} strokeWidth={2} />
    </div>
  );
}
