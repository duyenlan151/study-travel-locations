'use client';

import { Github, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import ThemeToggle from './ThemeToggle';

export default function MainNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold font-poppins">NextBoiler</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/docs" className="text-sm font-medium hover:text-primary">
            Documentation
          </Link>
          <Link
            href="/components"
            className="text-sm font-medium hover:text-primary"
          >
            Components
          </Link>
          <Link
            href="/examples"
            className="text-sm font-medium hover:text-primary"
          >
            Examples
          </Link>
          <Link
            href="https://github.com/AnwarHossainSR/nextjs-15-template"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-primary"
          >
            <Github className="h-5 w-5" />
          </Link>
          <ThemeToggle />
        </nav>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {mobileMenuOpen && (
          <div className="absolute inset-x-0 top-16 z-50 bg-background border-b md:hidden">
            <div className="container py-4 flex flex-col space-y-4">
              <Link
                href="/docs"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Documentation
              </Link>
              <Link
                href="/components"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Components
              </Link>
              <Link
                href="/examples"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Examples
              </Link>
              <div className="flex items-center justify-between">
                <Link
                  href="https://github.com/AnwarHossainSR/nextjs-15-template"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
