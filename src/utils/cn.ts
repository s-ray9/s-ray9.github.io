import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge<"text-accent">({
  extend: {
    classGroups: {
      "text-accent": [{ text: ["accent"] }],
    },
    conflictingClassGroups: {
      "text-color": ["text-accent"],
    },
  },
});

export function cn(...inputs: ClassValue[]): string {
  return customTwMerge(clsx(inputs));
}
