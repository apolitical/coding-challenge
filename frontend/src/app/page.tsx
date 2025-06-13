"use client";

import { Character } from "@/types";
import { CharacterCard } from "@/components/CharacterCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [characters, setCharacters] = useState<
    (Character & { isLiked: boolean })[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCharacters = async () => {
    try {
      const response = await fetch("/api/characters", {
        headers: {
          apiKey: process.env.API_KEY || "",
        },
      });
      const data = await response.json();

      // Ensure we have an array of characters
      const characters = Array.isArray(data) ? data : [];

      if (characters.length === 0) {
        setError("No characters found");
        setLoading(false);
        return;
      }

      // Fetch characters the user has liked
      // const userLikes = await fetch(`/api/users/1/likes`, {
      //   headers: {
      //     apiKey: process.env.API_KEY || "",
      //   },
      // });

      setCharacters(characters);
      setError(null);
    } catch (error) {
      console.error("Failed to fetch characters:", error);
      setError("Failed to load characters");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const handleLike = async (characterId: number) => {
    try {
      await fetch(`/api/characters/${characterId}/like`, {
        method: "POST",
        headers: {
          apiKey: process.env.API_KEY || "",
        },
      });
    } catch (error) {
      console.error("Failed to like character:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 sm:p-20">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Characters</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              isLiked={true}
              onLike={handleLike}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
