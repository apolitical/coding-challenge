"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const paths = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/search",
      label: "Search",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6">
      <div className="h-full max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6">
          {paths.map((path) => (
            <Link
              key={path.path}
              href={path.path}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                pathname === path.path
                  ? "bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-100"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {path.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center">
          <Image
            src="/apolitical-logo.svg"
            alt="Apolitical"
            width={120}
            height={32}
            className="dark:invert"
          />
        </div>
      </div>
    </nav>
  );
}
