"use client";

import { Character } from "@/types";
import { useState } from "react";
import Image from "next/image";

interface CharacterCardProps {
  character: Character;
  isLiked: boolean;
  onLike: (id: number) => Promise<void>;
}

export function CharacterCard({
  character,
  isLiked,
  onLike,
}: CharacterCardProps) {
  const [isLiking, setIsLiking] = useState(false);

  const handleLike = async () => {
    if (isLiking) return;

    setIsLiking(true);
    try {
      await onLike(character.id);
    } finally {
      setIsLiking(false);
    }
  };

  const handleUnlike = async () => {
    console.log("unlike");
  };

  return (
    <div className="p-6 rounded-lg border border-black/[.08] dark:border-white/[.145] hover:border-transparent transition-all hover:shadow-lg">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold">{character.name}</h2>
          </div>
          <button
            onClick={isLiked ? handleUnlike : handleLike}
            disabled={isLiking}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 hover:bg-pink-200 dark:bg-pink-900 dark:hover:bg-pink-800 transition-colors disabled:opacity-50"
          >
            <Image
              src="/heart.svg"
              alt="Like"
              width={16}
              height={16}
              className="text-pink-600"
            />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-gray-600 dark:text-gray-400">Height:</span>{" "}
            <span className="font-medium">{character.height}cm</span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">Mass:</span>{" "}
            <span className="font-medium">{character.mass}kg</span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">Hair:</span>{" "}
            <span className="font-medium">{character.hairColour}</span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">Eyes:</span>{" "}
            <span className="font-medium">{character.eyeColour}</span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">Skin:</span>{" "}
            <span className="font-medium">{character.skinColour}</span>
          </div>
          <div>
            <span className="text-gray-600 dark:text-gray-400">Gender:</span>{" "}
            <span className="font-medium">{character.gender}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
