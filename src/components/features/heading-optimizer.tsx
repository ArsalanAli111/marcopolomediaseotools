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
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { optimizeHeadingsAction } from '@/lib/actions';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CopyButton } from '../copy-button';

export function HeadingOptimizer() {
  const [pageContent, setPageContent] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!pageContent.trim()) {
      toast({
        title: 'Content is empty',
        description: 'Please paste your page content to optimize headings.',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(true);
    setResults([]);
    
    const response = await optimizeHeadingsAction(pageContent);

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
        <CardTitle>Heading Optimizer</CardTitle>
        <CardDescription>
          Analyze your page content and get keyword-rich heading suggestions (H1, H2) to improve your SEO.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="page-content-headings">Page Content</Label>
            <Textarea
              id="page-content-headings"
              value={pageContent}
              onChange={(e) => setPageContent(e.target.value)}
              placeholder="Paste the full text content of your webpage here..."
              className="mt-1 min-h-[150px]"
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Optimize Headings
          </Button>
        </form>

        {(isLoading || results.length > 0) && (
          <div className="space-y-2 pt-4">
            <Label>Suggested Headings</Label>
            {isLoading ? (
              <div className="flex items-center justify-center p-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Optimized Heading</TableHead>
                      <TableHead className="text-right w-[80px]">Copy</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {results.map((heading, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{heading}</TableCell>
                        <TableCell className="text-right">
                          <CopyButton textToCopy={heading} />
                        </TableCell>
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
