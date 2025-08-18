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
import { Loader2, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { analyzeKeywordDensityFromUrlAction } from '@/lib/actions';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface KeywordDensityResult {
  keyword: string;
  count: number;
  density: number;
}

const defaultResults: KeywordDensityResult[] = [
  { keyword: 'AI optimization', count: 12, density: 2.5 },
  { keyword: 'SEO tools', count: 10, density: 2.1 },
  { keyword: 'content strategy', count: 8, density: 1.7 },
  { keyword: 'digital marketing', count: 7, density: 1.5 },
  { keyword: 'MarcoPolo Media', count: 6, density: 1.3 },
  { keyword: 'performance', count: 5, density: 1.1 },
];

export function KeywordDensityAnalyzer() {
  const [url, setUrl] = useState('https://marcopolo.ai/blog');
  const [results, setResults] = useState<KeywordDensityResult[]>(defaultResults);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!url.trim()) {
      toast({
        title: 'URL is empty',
        description: 'Please enter a website URL to analyze keyword density.',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(true);
    setResults([]);
    
    const response = await analyzeKeywordDensityFromUrlAction(url);

    if (response.error) {
      toast({
        title: 'Error',
        description: response.error,
        variant: 'destructive',
      });
    } else {
      setResults(response.data || []);
    }
    setIsLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Keyword Density Analyzer</CardTitle>
        <CardDescription>
          Enter a URL to analyze its content for keyword density and identify top terms.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="flex items-end space-x-2">
          <div className="flex-grow">
            <Label htmlFor="density-url">Website URL</Label>
            <Input
              id="density-url"
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
              <Search className="mr-2 h-4 w-4" />
            )}
            Analyze
          </Button>
        </form>

        {(isLoading || results.length > 0) && (
          <div className="space-y-2 pt-4">
            <Label>Analysis Results</Label>
            {isLoading ? (
              <div className="flex items-center justify-center p-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Keyword</TableHead>
                      <TableHead className="text-center w-[100px]">Count</TableHead>
                      <TableHead className="text-right w-[100px]">Density</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {results.map((result) => (
                      <TableRow key={result.keyword}>
                        <TableCell className="font-medium">{result.keyword}</TableCell>
                        <TableCell className="text-center">{result.count}</TableCell>
                        <TableCell className="text-right">{result.density.toFixed(2)}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
