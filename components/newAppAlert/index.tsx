export const NewAppAlert = () => {
  return (
    <section className="not-prose mb-8 -mt-8 sm:mt-2 px-8 py-7 border border-zinc-200 dark:border-zinc-700/60 rounded-2xl bg-zinc-50/50 dark:bg-zinc-800/30">
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
