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
import { generateBannerTextAction } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { CopyButton } from '../copy-button';

const defaultBannerText = "Empowering your business with digital solutions. MarcoPolo Media – Your tech partner.";

export function BannerTextGenerator() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<string>(defaultBannerText);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt.trim()) {
      toast({
        title: 'Prompt is empty',
        description: 'Please enter a description for the banner text you want to generate.',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(true);
    setResult('');
    
    const response = await generateBannerTextAction(prompt);

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
        <CardTitle>Homepage Banner Text</CardTitle>
        <CardDescription>
          Generate or customize compelling banner text for your homepage.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="banner-prompt">
              Describe your business or the message you want to convey
            </Label>
            <Textarea
              id="banner-prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., A creative agency that builds beautiful websites for startups."
              className="mt-1"
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Regenerate
          </Button>
        </form>

        {(isLoading || result) && (
          <div className="space-y-2 pt-4">
            <Label>Generated Banner Text</Label>
            <div className="flex items-center space-x-2">
              <Textarea
                readOnly
                value={isLoading ? "Generating..." : result}
                className="flex-grow resize-none"
                rows={3}
              />
              <CopyButton textToCopy={result} />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
