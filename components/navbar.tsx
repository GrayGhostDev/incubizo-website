"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import Logo3D from "@/components/logo-3d";
import { siteConfig } from "@/lib/site-config";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="mr-2">
            <Logo3D size={50} isInteractive={false} />
          </div>
          <span className="text-2xl font-bold text-primary">{siteConfig.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-foreground/80 hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/services" className="text-foreground/80 hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/portfolio" className="text-foreground/80 hover:text-primary transition-colors">
            Portfolio
          </Link>
          <Link href="/contact" className="text-foreground/80 hover:text-primary transition-colors">
            Contact
          </Link>
          <Button variant="default" size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <Cross1Icon className="h-5 w-5" /> : <HamburgerMenuIcon className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link 
              href="/portfolio" 
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
            <Link 
              href="/contact" 
              className="text-foreground/80 hover:text-primary transition-colors py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button variant="default" size="sm" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 