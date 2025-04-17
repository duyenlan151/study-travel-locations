import '@/styles/globals.css';
import { Inter, Poppins } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import { QueryProvider } from '@/providers/query';
import { ThemeProvider } from '@/providers/theme';
import type { ChildrenProps } from '@/types';
import { Header, MainFooter } from '@/components';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  adjustFontFallback: false,
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Next.js Boilerplate | Professional Starter Template',
  description:
    'A highly opinionated and production-ready Next.js 15 boilerplate with TypeScript, Tailwind CSS, ESLint, Prettier, Husky, and comprehensive SEO optimization.',
  keywords:
    'next.js, boilerplate, typescript, tailwind css, eslint, prettier, husky, seo, nextjs 15, react, web development',
  authors: [{ name: 'Anwar Hossain' }],
  creator: 'Anwar Hossain',
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Next.js Boilerplate | Professional Starter Template',
    description:
      'Production-ready Next.js 15 boilerplate with all the essential tools',
    siteName: 'Next.js Boilerplate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Boilerplate',
    description:
      'Production-ready Next.js 15 boilerplate with all the essential tools',
    creator: '@anwarhossainsr',
  },
};

export default async function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <QueryProvider>
            <div className="flex min-h-screen flex-col bg-background">
              <Header />
              <main className="flex-1">{children}</main>
              <MainFooter />
            </div>
            <Toaster position="bottom-right" />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
