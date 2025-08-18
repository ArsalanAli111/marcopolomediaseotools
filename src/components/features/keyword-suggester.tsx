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
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { suggestKeywordsAction } from '@/lib/actions';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

const defaultKeywords = [
  'digital marketing services Pakistan',
  'online marketing Pakistan',
  'SEO and SMM Pakistan',
  'social media marketing Pakistan',
];

export function KeywordSuggester() {
  const [topic, setTopic] = useState('digital marketing Pakistan');
  const [results, setResults] = useState<string[]>(defaultKeywords);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!topic.trim()) {
      toast({
        title: 'Topic is empty',
        description: 'Please enter a topic to get keyword suggestions.',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(true);
    setResults([]);
    
    const response = await suggestKeywordsAction(topic);

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
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied to clipboard!',
      description: `"${text}"`,
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Keyword Suggestion Tool</CardTitle>
        <CardDescription>
          Enter a topic to discover relevant SEO keywords for your content strategy.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="flex items-end space-x-2">
          <div className="flex-grow">
            <Label htmlFor="keyword-topic">Topic</Label>
            <Input
              id="keyword-topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., 'small business accounting software'"
              className="mt-1"
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Suggest
          </Button>
        </form>

        {(isLoading || results.length > 0) && (
          <div className="space-y-2 pt-4">
            <Label>Suggested Keywords</Label>
            {isLoading ? (
              <div className="flex items-center justify-center p-8">
                 <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <div className="flex flex-wrap gap-2 rounded-md border p-4">
                 {results.map((keyword, index) => (
                   <Tooltip key={index}>
                     <TooltipTrigger asChild>
                       <Badge 
                         variant="secondary" 
                         className="cursor-pointer text-base px-3 py-1"
                         onClick={() => copyToClipboard(keyword)}
                       >
                         {keyword}
                       </Badge>
                     </TooltipTrigger>
                     <TooltipContent>
                       <p>Click to copy</p>
                     </TooltipContent>
                   </Tooltip>
                 ))}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
