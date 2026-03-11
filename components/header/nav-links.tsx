"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NewChip = () => (
  <span className="absolute -top-3 -right-7 text-[11px] font-medium text-blue-500 dark:text-blue-400">
    new
  </span>
);

const navItems = [
  { href: "/apps", label: "Apps", hasChip: true },
  { href: "/", label: "Posts" },
  { href: "/about", label: "About" },
];

export const NavLinks = () => {
  const pathname = usePathname();

  return (
    <nav className="ml-auto text-sm font-medium space-x-6 flex gap-4">
      {navItems.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            className={`hover:underline ${item.hasChip ? "relative" : ""} ${isActive ? "" : "text-zinc-400 dark:text-zinc-500"}`}
            href={item.href}
          >
            {item.label}
            {item.hasChip && <NewChip />}
          </Link>
        );
      })}
    </nav>
  );
};
