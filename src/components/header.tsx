'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bot, Gauge, FileText, Captions, ImageIcon, Tags, Percent, GalleryHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function Header() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const menuItems = [
    { href: "/speed", icon: <Gauge className="h-4 w-4" />, label: "Page Speed" },
    { href: "/meta", icon: <FileText className="h-4 w-4" />, label: "Meta Desc" },
    { href: "/headings", icon: <Captions className="h-4 w-4" />, label: "Headings" },
    { href: "/images", icon: <ImageIcon className="h-4 w-4" />, label: "Images" },
    { href: "/keywords", icon: <Tags className="h-4 w-4" />, label: "Keywords" },
    { href: "/density", icon: <Percent className="h-4 w-4" />, label: "Density" },
    { href: "/banner", icon: <GalleryHorizontal className="h-4 w-4" />, label: "Banner" },
  ];

  if (!isClient) {
    // Render a placeholder or null on the server to avoid hydration errors
    return (
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
           <Link href="/" className="flex items-center gap-2 flex-1">
            <div className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-lg p-2">
              <Bot className="h-6 w-6" />
            </div>
            <div>
              <h1 className="font-headline text-xl font-bold text-gradient-green">
                MarcoPolo
              </h1>
              <p className="text-sm text-muted-foreground">Media Optimizer</p>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-6 justify-center flex-1" />
          <div className="flex-1" />
        </div>
      </header>
    );
  }
  
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 flex-1">
          <div className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-lg p-2">
            <Bot className="h-6 w-6" />
          </div>
          <div>
            <h1 className="font-headline text-xl font-bold text-gradient-green">
              MarcoPolo
            </h1>
            <p className="text-sm text-muted-foreground">Media Optimizer</p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 justify-center flex-1 whitespace-nowrap">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary',
                pathname === item.href || (pathname === '/' && item.href === '/speed')
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex-1"></div>
      </div>
    </header>
  );
}
