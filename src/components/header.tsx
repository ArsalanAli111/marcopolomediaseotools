'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Gauge, FileText, Captions, ImageIcon, Tags, Percent, GalleryHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import Image from 'next/image';

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
      <header className="bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
           <Link href="/" className="flex items-center gap-2 flex-1">
             <Image src="https://marcopolomedia.pk/wp-content/uploads/2025/06/69efc38e0ad015cae148ae23f0dd52665334907d.gif" alt="MarcoPolo Media Optimizer Logo" width={150} height={33} unoptimized />
          </Link>
          <div className="hidden md:flex items-center space-x-6 justify-center flex-1" />
          <div className="flex-1" />
        </div>
      </header>
    );
  }
  
  return (
    <header className="bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 flex-1">
          <Image src="https://marcopolomedia.pk/wp-content/uploads/2025/06/69efc38e0ad015cae148ae23f0dd52665334907d.gif" alt="MarcoPolo Media Optimizer Logo" width={150} height={33} unoptimized />
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
