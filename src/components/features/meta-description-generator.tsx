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
import { generateMetaDescriptionAction } from '@/lib/actions';
import { CopyButton } from '../copy-button';

export function MetaDescriptionGenerator() {
  const [pageContent, setPageContent] = useState('');
  const [result, setResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!pageContent.trim()) {
      toast({
        title: 'Content is empty',
        description: 'Please paste your page content to generate a meta description.',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(true);
    setResult('');
    
    const response = await generateMetaDescriptionAction(pageContent);

    if (response.error) {
      toast({
        title: 'Error',
        description: response.error,
        variant: 'destructive',
      });
    } else {
      setResult(response.data || '');
    }
    setIsLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Meta Description Generator</CardTitle>
        <CardDescription>
          Paste your page content to generate a compelling, SEO-friendly meta description under 160 characters.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="page-content">Page Content</Label>
            <Textarea
              id="page-content"
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
            Generate Description
          </Button>
        </form>

        {(isLoading || result) && (
          <div className="space-y-2 pt-4">
            <Label>Generated Meta Description</Label>
            <div className="flex items-center space-x-2">
              <Textarea
                readOnly
                value={isLoading ? "Generating..." : result}
                className="flex-grow resize-none"
                rows={3}
              />
              <CopyButton textToCopy={result} />
            </div>
            {!isLoading && result && (
              <p className={`text-sm ${result.length > 160 ? 'text-destructive' : 'text-muted-foreground'}`}>
                Character count: {result.length} (recommended: under 160)
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
