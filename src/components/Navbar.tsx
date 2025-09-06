"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Ana Sayfa", href: "#hero" },
    { name: "Hakkımızda", href: "#about" },
    { name: "Hizmetler", href: "#services" },
    { name: "Hakkımda", href: "#hakkinda" },
    { name: "Medya", href: "#medya" },
    { name: "İletişim", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav 
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-foreground">Berkay Dağıstan</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-sm"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Button
                asChild
                size="sm"
                className="bg-gradient-primary hover:opacity-90 text-hero-background font-bold px-4 py-2 text-sm"
              >
                <a 
                  href="https://www.instagram.com/turkzagor/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Instagram className="w-4 h-4 mr-1" />
                  Takip Et
                </a>
              </Button>
            </div>

          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
