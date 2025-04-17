'use client';

import Link from 'next/link';
import type { FC } from 'react';

import type { CurrentUserProps } from '@/types';

import { MainNavbar } from '../Navbar';

export const Header: FC<CurrentUserProps> = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-1">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <h1 className="text-2xl font-bold font-poppins">StudySpots</h1>
        </Link>

        {/* Navbar */}
        <MainNavbar />
      </div>
    </header>
  );
};
