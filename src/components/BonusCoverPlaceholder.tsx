import React from "react";

interface BonusCoverPlaceholderProps {
  emoji: string;
  num: number;
}

export function BonusCoverPlaceholder({ emoji, num }: BonusCoverPlaceholderProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#f4efe2] to-[#e8ddc0] text-center p-4">
      <span className="text-4xl mb-2" aria-hidden="true">
        {emoji}
      </span>
      <span className="text-[#5C6851] font-bold text-xs uppercase tracking-wide">
        Bono {num}
      </span>
    </div>
  );
}
