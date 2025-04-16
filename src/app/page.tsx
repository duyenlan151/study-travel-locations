import { ArrowRight, Code, Rocket, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-background/80">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-poppins">
                Next.js 15 <span className="text-primary">Boilerplate</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A production-ready starter template with all the essential tools
                and best practices.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/docs"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="https://github.com/AnwarHossainSR/nextjs-15-template"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                View on GitHub
                <Code className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-poppins">
                Features
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Everything you need to build amazing web applications
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:border-primary hover:shadow-md">
              <div className="rounded-full bg-primary/10 p-3">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Performance Optimized</h3>
              <p className="text-center text-muted-foreground">
                Built with Next.js 15 for lightning-fast page loads and optimal
                user experience.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:border-primary hover:shadow-md">
              <div className="rounded-full bg-primary/10 p-3">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Best Practices</h3>
              <p className="text-center text-muted-foreground">
                TypeScript, ESLint, Prettier, and Husky for robust, maintainable
                code.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm transition-all hover:border-primary hover:shadow-md">
              <div className="rounded-full bg-primary/10 p-3">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Production Ready</h3>
              <p className="text-center text-muted-foreground">
                SEO optimized, responsive design, and accessibility features
                built-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-poppins">
                Ready to Start Building?
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/90 md:text-xl">
                Clone the repository and start creating your next amazing
                project today.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <pre className="bg-primary-foreground/10 px-6 py-3 rounded-md font-mono text-sm overflow-x-auto">
                <code>
                  git clone
                  https://github.com/AnwarHossainSR/nextjs-15-template.git
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
