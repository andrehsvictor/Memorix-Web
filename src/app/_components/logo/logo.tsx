import { LightbulbIcon } from "lucide-react";

interface LogoProps {
  className?: string;
  variant?: "blue" | "white";
  size?: number;
}

export default function Logo({ className, variant = "blue", size }: LogoProps) {
  const color = variant === "blue" ? "text-primary" : "text-white";
  return (
    <div className={`flex items-center ${className}`}>
      <LightbulbIcon className={`${color}`} size={size} />
      <span
        className={`ml-1 font-bold ${color}`}
        style={{ fontSize: size }}
      >
        Memorix
      </span>
    </div>
  );
}
