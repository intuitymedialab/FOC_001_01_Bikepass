import { FunctionComponent } from "react";

interface GridBackgroundProps {
  variant?: "dots" | "lines";
}

const GridBackground: FunctionComponent<GridBackgroundProps> = ({
  variant = "dots",
}) => {
  return (
    <svg className="absolute top-0 left-0 w-full h-full -z-10">
      <defs>
        <pattern
          id="dot-pattern"
          width="18"
          height="18"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="9" cy="9" r="1" fill="hsl(var(--border))" />
        </pattern>
        <pattern
          id="line-pattern"
          width="18"
          height="18"
          patternUnits="userSpaceOnUse"
        >
          <line
            x1="9"
            x2="9"
            y1="0"
            y2="18"
            strokeWidth="1"
            opacity={0.2}
            stroke="hsl(var(--border))"
          />
          <line
            y1="9"
            y2="9"
            x1="0"
            x2="18"
            strokeWidth="1"
            opacity={0.2}
            stroke="hsl(var(--border))"
          />
        </pattern>
      </defs>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill={variant === "dots" ? "url(#dot-pattern)" : "url(#line-pattern)"}
      />
    </svg>
  );
};

export default GridBackground;
