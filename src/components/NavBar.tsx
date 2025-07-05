import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

interface NavLink {
  name: string;
  url: string;
}

const resumeUrl = "https://drive.google.com/file/d/1jgUSbA1XLJdrqwjk59NcCj7_xBmX9WFu/view?usp=sharing";

const navLinks: NavLink[] = [
  { name: "About", url: "#about" },
  { name: "Experience", url: "#experience" },
  { name: "Projects", url: "#projects" },
  { name: "Contact", url: "#contact" },
];

const NavBar = () => {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full px-4 md:px-12 py-4 transition-all duration-300 ${
        scrolled ? "bg-navy-dark/90 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-2xl font-bold text-highlight"
        >
          SDE
        </a>

        {isMobile ? (
          <>
            <button
              className="text-slate-light z-50"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span 
                  className={`bg-highlight h-0.5 w-full transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span 
                  className={`bg-highlight h-0.5 w-full transition-all duration-300 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span 
                  className={`bg-highlight h-0.5 w-full transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
            <div 
              className={`fixed inset-0 bg-navy-dark/95 backdrop-blur-sm z-40 transition-transform duration-300 ${
                menuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <nav className="h-full flex flex-col items-center justify-center gap-8">
                {navLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    onClick={(e) => scrollToSection(e, link.url.substring(1))}
                    className="text-2xl text-slate-light hover:text-highlight transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <Button
                  variant="outline"
                  className="text-highlight border-highlight hover:bg-highlight/10"
                  asChild
                >
                  <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                    Resume
                  </a>
                </Button>
              </nav>
            </div>
          </>
        ) : (
          <nav className="flex items-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                onClick={(e) => scrollToSection(e, link.url.substring(1))}
                className="text-slate-light hover:text-highlight transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button
              variant="outline"
              className="text-highlight border-highlight hover:bg-highlight/10"
              asChild
            >
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavBar;
