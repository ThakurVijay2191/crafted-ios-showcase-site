
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300", 
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-ios-blue">
            iOS<span className="text-foreground">Dev</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-ios-blue font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button className="bg-ios-blue hover:bg-ios-darkblue">
              Resume
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground"
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-2 border-t animate-fade-in">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="block py-2 text-foreground/80 hover:text-ios-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="mt-4 w-full bg-ios-blue hover:bg-ios-darkblue">
              Resume
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
