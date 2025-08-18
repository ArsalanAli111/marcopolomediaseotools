'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function Header() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const menuItems = [
    { href: "/speed", label: "Page Speed" },
    { href: "/meta", label: "Meta Desc" },
    { href: "/headings", label: "Headings" },
    { href: "/images", label: "Images" },
    { href: "/keywords", label: "Keywords" },
    { href: "/density", label: "Density" },
    { href: "/banner", label: "Banner" },
  ];

  if (!isClient) {
    return null;
  }

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 flex-1">
          <div className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-lg p-2">
            <Bot className="h-6 w-6" />
          </div>
          <div>
            <h1 className="font-headline text-xl font-bold text-gradient">
              MarcoPolo
            </h1>
            <p className="text-sm text-muted-foreground">Media Optimizer</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 justify-center flex-1">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === item.href || (pathname === '/' && item.href === '/speed')
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex-1"></div>
      </div>
    </header>
  );
}
