'use client';

import Link from 'next/link';

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl font-poppins">
              Ready to find your next favorite study spot?
            </h2>
            <p className="mx-auto max-w-[700px] text-primary-foreground/90 md:text-xl">
              Browse thousands of curated locations made just for learners like
              you.
            </p>
          </div>
          <div className="relative inline-block px-10 py-2 bg-white text-black font-semibold rounded-md overflow-hidden">
            <Link
              href="/locations"
              className="relative text-black font-semibold transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-blue-500"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
