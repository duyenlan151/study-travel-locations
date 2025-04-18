'use client';

import { TypewriterLoop } from '@/components/ui';

import { SearchSection } from './SearchSection';

export function HeroSection() {
  return (
    <section className="border-b w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto">
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
      <div className="container mx-auto">
        <SearchSection />
      </div>
    </section>
  );
}
