import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-foreground">
      <div className="container-narrow px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="/" className="font-display text-2xl text-foreground">
            🐼 PANDA LETTERS
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection("how-it-works")}
              className="text-muted-foreground hover:text-foreground text-sm uppercase tracking-wide"
            >
              How It Works
            </button>
            <Button variant="default" size="sm" onClick={() => scrollToSection("signup")}>
              Join →
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-foreground text-sm uppercase"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "[CLOSE]" : "[MENU]"}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t-2 border-foreground">
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => scrollToSection("how-it-works")}
                className="text-muted-foreground hover:text-foreground text-left text-sm uppercase"
              >
                → How It Works
              </button>
              <button 
                onClick={() => scrollToSection("signup")}
                className="text-muted-foreground hover:text-foreground text-left text-sm uppercase"
              >
                → Join Waitlist
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
