import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { TooltipProvider } from '@/components/ui/tooltip';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'MarcoPolo Media Optimizer',
  description: 'AI-powered SEO and content optimization tools.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body className="font-body antialiased flex flex-col min-h-screen bg-[#121212]">
        <TooltipProvider>
          <Header />
          <main className="flex-grow flex flex-col items-center p-4 sm:p-8 md:p-12">
            <div className="w-full max-w-7xl">
              {children}
            </div>
          </main>
          <Footer />
        </TooltipProvider>
        <Toaster />
      </body>
    </html>
  );
}
