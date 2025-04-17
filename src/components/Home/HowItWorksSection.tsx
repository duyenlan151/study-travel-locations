'use client';

import { Search, MapPinned, MessagesSquare } from 'lucide-react';

const mapData = [
  {
    icon: <Search className="text-primary h-10 w-10" />,
    title: 'Step 1: Search',
    desc: 'Search for study spots based on your preferences and needs.',
  },
  {
    icon: <MapPinned className="text-primary h-10 w-10" />,
    title: 'Step 2: Explore',
    desc: 'Use the interactive map to explore your options and choose the best spot.',
  },
  {
    icon: <MessagesSquare className="text-primary h-10 w-10" />,
    title: 'Step 3: Engage',
    desc: 'Read reviews from other students and share your experience.',
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 bg-background/95">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl font-poppins">
          How It Works
        </h2>
        <div className="flex flex-wrap justify-center gap-16 mt-20">
          {mapData.map((step, idx) => (
            <div
              key={`${`${idx}${step.desc}`}`}
              className="w-full sm:w-1/2 md:w-1/3 p-6 bg-white dark:bg-gray-700 rounded-lg transition-all border hover:shadow-md"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
