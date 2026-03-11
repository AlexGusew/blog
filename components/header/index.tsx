import { ModeToggle } from "@/components/mode-toggle";
import { NavLinks } from "./nav-links";

export const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between">
        <ModeToggle />
        <NavLinks />
      </div>
    </header>
  );
};
