'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, Wand2, AlertCircle, UploadCloud } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { suggestAltTextAction } from '@/lib/actions';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CopyButton } from '../copy-button';
import { Textarea } from '../ui/textarea';

export function ImageAltTextGenerator() {
  const [imagePreview, setImagePreview] = useState<string | null>("https://placehold.co/600x400.png");
  const [result, setResult] = useState<string>('A sleek, modern laptop displaying colorful charts and graphs on a clean desk, symbolizing data-driven business growth and technology.');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const imageFile = formData.get('image') as File;

    if (!imageFile || imageFile.size === 0) {
      // If there's a preview but no file, it means they want to use the default.
      // We can't actually process a placeholder URL, so we'll show an error.
      if (imagePreview) {
        toast({
          title: 'Cannot process placeholder',
          description: 'Please upload your own image to generate alt text.',
          variant: 'destructive',
        });
        return;
      }
      toast({
        title: 'No image selected',
        description: 'Please upload an image to generate alt text.',
        variant: 'destructive',
      });
      return;
    }
    
    setIsLoading(true);
    setResult('');
    
    const response = await suggestAltTextAction(formData);

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
        <CardTitle>Image Alt Text & Optimization</CardTitle>
        <CardDescription>
          Generate SEO-friendly alt text for your images and get optimization tips.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit} ref={formRef}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="space-y-2">
              <Label htmlFor="image-upload">Upload Image</Label>
               <div
                className="relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-card hover:bg-muted transition-colors"
                onClick={() => fileInputRef.current?.click()}
              >
                {imagePreview ? (
                   <Image src={imagePreview} alt="Image preview" layout="fill" objectFit="contain" className="rounded-lg p-2" data-ai-hint="business analytics" />
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <UploadCloud className="w-10 h-10 mb-3 text-muted-foreground" />
                    <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-muted-foreground">PNG, JPG, GIF up to 10MB</p>
                  </div>
                )}
                <Input id="image-upload" name="image" type="file" className="hidden" onChange={handleImageChange} accept="image/png, image/jpeg, image/gif" ref={fileInputRef} />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="image-description">Image Description</Label>
                <Textarea
                  id="image-description"
                  name="description"
                  required
                  defaultValue="A laptop on a desk showing business intelligence dashboards."
                  placeholder="Briefly describe the image content and context. E.g., 'A developer working on a laptop in a modern office.'"
                  className="mt-1 min-h-[100px]"
                />
              </div>
               <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Wand2 className="mr-2 h-4 w-4" />
                )}
                Suggest Alt Text
              </Button>
            </div>
          </div>
        
          {(isLoading || result) && (
            <div className="space-y-2 pt-4">
              <Label>Suggested Alt Text</Label>
              <div className="flex items-center space-x-2">
                <Input
                  readOnly
                  value={isLoading ? "Generating..." : result}
                  className="flex-grow"
                />
                <CopyButton textToCopy={result} />
              </div>
            </div>
          )}
        </CardContent>
        {imagePreview && (
          <CardFooter>
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Optimization Tip</AlertTitle>
              <AlertDescription>
                For faster page loads, compress your images before uploading. Tools like TinyPNG or ImageOptim can significantly reduce file size without losing quality.
              </AlertDescription>
            </Alert>
          </CardFooter>
        )}
      </form>
    </Card>
  );
}
