import Link from 'next/link';
import { Bot } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start space-y-4">
             <Link href="/" className="flex items-center gap-2">
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
            <p className="text-sm text-muted-foreground">
              AI-powered SEO and content optimization tools to supercharge your digital presence.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/speed" className="text-muted-foreground hover:text-primary transition-colors">Page Speed</Link></li>
              <li><Link href="/meta" className="text-muted-foreground hover:text-primary transition-colors">Meta Desc</Link></li>
              <li><Link href="/keywords" className="text-muted-foreground hover:text-primary transition-colors">Keywords</Link></li>
              <li><Link href="/headings" className="text-muted-foreground hover:text-primary transition-colors">Headings</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social media links here if you have them */}
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MarcoPolo Media Optimizer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
