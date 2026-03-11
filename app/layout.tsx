import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { Header } from "@/components/header";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alex Coders",
  description: "Personal blog",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto pt-10 px-4 min-h-screen flex flex-col">
            <Header />
            <main className="mt-14 flex-1">{children}</main>
            <footer className="mt-16 text-center text-sm text-zinc-400 dark:text-zinc-500">
              <hr className="border-zinc-200 dark:border-zinc-700 -mx-[calc((100vw-100%)/2)]" />
              <div className="py-6 flex items-center justify-center gap-4">
                <a href="/" className="hover:underline">alexcoders.com</a>
                <span>&middot;</span>
                <span>Let&apos;s connect</span>
                <a
                  href="https://www.linkedin.com/in/alex-gusew/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://leetcode.com/u/AlexGoosev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode"
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 00-1.209 2.104 5.35 5.35 0 00-.125.513 5.527 5.527 0 00.062 2.362 5.83 5.83 0 00.349 1.017 5.938 5.938 0 001.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 00-1.951-.003l-2.396 2.392a3.021 3.021 0 01-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 01.066-.523 2.545 2.545 0 01.619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 00-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0013.483 0zm-2.866 12.815a1.38 1.38 0 00-1.38 1.382 1.38 1.38 0 001.38 1.382H20.79a1.38 1.38 0 001.38-1.382 1.38 1.38 0 00-1.38-1.382z" />
                  </svg>
                </a>
              </div>
            </footer>
          </div>
          <Analytics />
          <Script
            async
            defer
            src="https://umami.alexcoders.com/script.js"
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            data-domains="alexcoders.com"
            strategy="afterInteractive"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
