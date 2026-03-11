"use client";

import { useState, useEffect } from "react";

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-3 h-3 text-gray-500"
  >
    <path
      fillRule="evenodd"
      d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

export const NewAppAlert = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsVisible(localStorage.getItem("tcgetterAlertVisible") !== "true");
    }
  }, []);

  const onClose = () => {
    localStorage.setItem("tcgetterAlertVisible", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <section className="relative mt-14 mb-4 px-8 py-7 border border-zinc-200 dark:border-zinc-700/60 rounded-2xl bg-zinc-50/50 dark:bg-zinc-800/30">
      <button onClick={onClose} className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center hover:bg-zinc-200/60 dark:hover:bg-zinc-700/40 rounded-full transition-colors">
        <CloseIcon />
      </button>
      <h2 className="text-lg font-semibold mb-1">Introducing TC Getter</h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Calculate Big-O time complexity of Python code in the browser.{" "}
        <a
          href="https://tcgetter.alexcoders.com"
          target="_blank"
          className="underline text-blue-600 dark:text-blue-400"
        >
          Try it out
        </a>
      </p>
    </section>
  );
};
