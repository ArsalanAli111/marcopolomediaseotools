'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, Zap, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { analyzePageSpeedFromUrlAction } from '@/lib/actions';

interface SpeedResult {
  score: number;
  suggestions: string[];
}

const defaultResult: SpeedResult = {
  score: 92,
  suggestions: [
    'Eliminate render-blocking resources by inlining critical CSS.',
    'Serve images in next-gen formats like WebP.',
    'Minify JavaScript and CSS files to reduce their size.',
    'Leverage browser caching for static assets.',
  ]
};

export function PageSpeedAnalyzer() {
  const [url, setUrl] = useState('https://marcopolo.ai');
  const [result, setResult] = useState<SpeedResult | null>(defaultResult);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!url.trim()) {
      toast({
        title: 'URL is empty',
        description: 'Please enter a website URL to analyze.',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(true);
    setResult(null);

    const response = await analyzePageSpeedFromUrlAction(url);

    if (response.error) {
      toast({
        title: 'Error',
        description: response.error,
        variant: 'destructive',
      });
    } else {
      setResult(response.data || null);
    }
    setIsLoading(false);
  };
  
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-red-500';
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Page Speed Analyzer</CardTitle>
        <CardDescription>
          Enter a URL to get a performance score and optimization suggestions, like Google PageSpeed Insights.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end sm:gap-2 space-y-2 sm:space-y-0">
            <div className="flex-grow">
              <Label htmlFor="speed-url">Website URL</Label>
              <Input
                id="speed-url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="mt-1"
                type="url"
              />
            </div>
            <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Zap className="mr-2 h-4 w-4" />
              )}
              Analyze Speed
            </Button>
          </div>
        </form>

        {isLoading && (
           <div className="flex flex-col items-center justify-center p-8 space-y-4 rounded-lg bg-muted/50 mt-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="text-muted-foreground">Analyzing page performance... this may take a moment.</p>
          </div>
        )}

        {result && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className='md:col-span-1 flex flex-col items-center justify-center p-6 rounded-lg bg-muted/50'>
              <h3 className="text-lg font-semibold mb-4 text-center">Performance Score</h3>
              <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                 <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      className="text-border"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      strokeWidth="3"
                    />
                    <path
                      className={getScoreColor(result.score)}
                      strokeDasharray={`${result.score}, 100`}
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      strokeWidth="3"
                      strokeLinecap="round"
                      transform="rotate(-90 18 18)"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                      <span className={`text-4xl sm:text-5xl font-bold ${getScoreColor(result.score)}`}>{result.score}</span>
                  </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              <h3 className="text-lg font-semibold">Improvement Suggestions</h3>
              <ul className="space-y-3">
                {result.suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-start bg-card p-3 rounded-md border">
                    <AlertTriangle className="h-5 w-5 mr-3 mt-0.5 text-yellow-500 flex-shrink-0" />
                    <span className="text-sm">{suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
