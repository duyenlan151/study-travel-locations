'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '../ui';
import { ThemeToggle } from '../ThemeToggle';

const navItems = [
  { href: '/docs', label: 'Start a search' },
  { href: '/components', label: 'List' },
  { href: '/examples', label: 'Salary estimate' },
];

export function MainNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-16 items-center justify-between">
      <nav className="hidden lg:flex items-center gap-4">
        {navItems.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap text-sm font-medium hover:text-primary"
          >
            {item.label}
          </Link>
        ))}
        <ThemeToggle />
        <Button label="Login" variant="outline" className="w-[9em]" />
        <Button label="Signup" className="w-[9em]" />
      </nav>

      <button
        type="button"
        className="lg:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 z-50 bg-background border-b lg:hidden h-[calc(100vh-64px)]">
          <div className="container py-4 flex flex-col space-y-4">
            <div className="ml-auto">
              <ThemeToggle />
            </div>
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-primary"
              >
                {item.label}
              </Link>
            ))}

            <div className="flex items-center justify-between gap-4">
              <Button
                label="Login"
                variant="outline"
                className="w-[8em] flex-1"
              />
              <Button label="Signup" className="w-[8em] flex-1" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
