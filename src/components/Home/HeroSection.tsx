'use client';

import Image from 'next/image';

import { TypewriterLoop } from '@/components/ui';

import { SearchSection } from './SearchSection';

export function HeroSection() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-24 xl:py-32">
      <div className="container mx-auto relative z-20">
        <h2 className="font-bold tracking-tighter text-4xl sm:text-4xl md:text-5xl 2xl:text-6xl font-poppins pt-10 text-left">
          <div className="lg:inline-flex items-center">
            Find
            <TypewriterLoop
              texts={['your study', 'your travel']}
              className="px-2 text-primary flex flex-wrap justify-start lg:justify-center text-4xl sm:text-5xl md:text-6xl font-bold font-sarina"
            />
            destination today
          </div>
        </h2>
        <p className="text-muted-foreground font-poppins text-md mt-2">
          Thousands of educational travel spots are waiting for you.
        </p>
      </div>
      <div className="container mx-auto relative z-20">
        <SearchSection />
      </div>
      <div className="absolute inset-0 w-full h-full left-0 bottom-0 bg-gradient-to-r from-white to-transparent z-10" />
      <Image
        src="/images/frame-1.svg"
        alt="Decorative background"
        fill
        className="absolute left-[15%] top-0 w-full h-full opacity-40 z-9"
        priority
      />
    </section>
  );
}
