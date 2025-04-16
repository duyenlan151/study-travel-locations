import Link from 'next/link';

export default function MainFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with <span className="font-medium">Next.js 15</span>. The
            source code is available on{' '}
            <Link
              href="https://github.com/AnwarHossainSR/nextjs-15-template"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/privacy"
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            Terms
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Anwar Hossain
          </p>
        </div>
      </div>
    </footer>
  );
}
