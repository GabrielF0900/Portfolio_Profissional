import React from "react";

import { cn } from "@/lib/utils";

export interface OrbitingCirclesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 20,
  delay = 0,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;

  const items = React.Children.toArray(children);
  const totalItems = items.length;

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <circle
            className="stroke-black/10 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeWidth="1"
          />
        </svg>
      )}

      {items.map((child, index) => {
        const angle = (360 / totalItems) * index;

        return (
          <div
            key={index}
            {...props}
            className={cn(
              "magic-orbit-runtime absolute flex items-center justify-center rounded-full",
              className,
            )}
            style={
              {
                "--duration": calculatedDuration,
                "--radius": radius,
                "--angle": angle,

                left: "50%",
                top: "50%",

                width: `${iconSize}px`,
                height: `${iconSize}px`,

                marginLeft: `${-iconSize / 2}px`,
                marginTop: `${-iconSize / 2}px`,

                animationDelay: `${delay}s`,
                animationDirection: reverse ? "reverse" : "normal",

                ...props.style,
              } as React.CSSProperties
            }
          >
            {child}
          </div>
        );
      })}
    </>
  );
}