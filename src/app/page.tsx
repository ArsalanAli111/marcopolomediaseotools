import { Dashboard } from "@/components/dashboard";
import { Bot } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12">
      <div className="w-full max-w-6xl">
        <header className="mb-8 text-center">
          <div className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full p-3 mb-4">
            <Bot className="h-8 w-8" />
          </div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            MarcoPolo Media Optimizer
          </h1>
          <p className="mt-2 text-lg text-foreground/80">
            Your AI-powered toolkit for peak SEO performance and content strategy.
          </p>
        </header>
        <Dashboard />
      </div>
    </main>
  );
}
