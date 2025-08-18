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
import { Loader2, Zap, CheckCircle, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { analyzePageSpeedFromUrlAction } from '@/lib/actions';
import { Progress } from '@/components/ui/progress';

interface SpeedResult {
  score: number;
  suggestions: string[];
}

export function PageSpeedAnalyzer() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<SpeedResult | null>(null);
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
          <div>
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
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Zap className="mr-2 h-4 w-4" />
            )}
            Analyze Speed
          </Button>
        </form>

        {isLoading && (
           <div className="flex flex-col items-center justify-center p-8 space-y-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="text-muted-foreground">Analyzing page performance... this may take a moment.</p>
          </div>
        )}

        {result && (
          <div className="space-y-6 pt-4">
            <div className='text-center'>
              <h3 className="text-lg font-semibold mb-2">Performance Score</h3>
              <div className="relative w-32 h-32 mx-auto">
                 <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      className="text-muted"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />
                    <path
                      className={getScoreColor(result.score)}
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray={`${result.score}, 100`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                      <span className={`text-4xl font-bold ${getScoreColor(result.score)}`}>{result.score}</span>
                  </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Improvement Suggestions</h3>
              <ul className="space-y-3">
                {result.suggestions.map((suggestion, index) => (
                  <li key={index} className="flex items-start">
                    <AlertTriangle className="h-5 w-5 mr-3 mt-0.5 text-yellow-500 flex-shrink-0" />
                    <span>{suggestion}</span>
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
