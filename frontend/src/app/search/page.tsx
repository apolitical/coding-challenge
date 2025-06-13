"use client";

import { useState } from "react";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setResponse("");

    try {
      const res = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apiKey: process.env.NEXT_PUBLIC_API_KEY || "",
        },
        body: JSON.stringify({ prompt: query }),
      });

      if (!res.ok) {
        throw new Error("Failed to get response");
      }

      const data = await res.json();
      setResponse(data.content);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-8 sm:p-20">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Search Here</h1>
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              disabled={isLoading}
              placeholder="Ask a question..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !query.trim()}
              className="px-6 py-2 bg-pink-100 hover:bg-pink-200 dark:bg-pink-900 dark:hover:bg-pink-800 text-pink-700 dark:text-pink-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Searching..." : "Search"}
            </button>
          </div>
        </form>

        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {response && (
          <div className="mt-8">
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                {response}
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
