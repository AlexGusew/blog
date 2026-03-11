"use client";

import { useState, useEffect } from "react";

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-6 text-gray-500 size-4"
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
    <section className="relative mt-14 mb-4 p-4 border border-gray-300 dark:border-zinc-700 rounded-lg">
      <button onClick={onClose} className="absolute top-2 right-2 w-6 p-1 dark:hover:bg-gray-700/40 hover:bg-gray-200/40 rounded-lg">
        <CloseIcon />
      </button>
      <h2 className="text-lg font-semibold mb-2">🚀 Introducing TC Getter!</h2>
      <p>
        Check out{" "}
        <a
          href="https://tcgetter.alexcoders.com"
          target="_blank"
          className="underline text-blue-600 dark:text-blue-400"
        >
          TC Getter
        </a>{" "}
        - calculate Big-O time complexity of your Python code right in the browser.
      </p>
    </section>
  );
};
