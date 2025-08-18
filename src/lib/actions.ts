'use server';

import { z } from 'zod';
import { generateHomepageBannerText } from '@/ai/flows/generate-homepage-banner-text';
import { suggestKeywords } from '@/ai/flows/suggest-keywords';
import { generateMetaDescription } from '@/ai/flows/generate-meta-descriptions';
import { optimizeHeadings } from '@/ai/flows/optimize-headings';
import { suggestAltText } from '@/ai/flows/suggest-alt-text';
import { analyzePageSpeed } from '@/ai/flows/analyze-page-speed';
import { analyzeKeywordDensity } from '@/ai/flows/analyze-keyword-density';

export async function generateBannerTextAction(prompt: string) {
  try {
    const result = await generateHomepageBannerText({ prompt });
    return { data: result.bannerText };
  } catch (error) {
    console.error(error);
    return { error: 'Failed to generate banner text.' };
  }
}

export async function suggestKeywordsAction(topic: string) {
  try {
    const result = await suggestKeywords(topic);
    return { data: result };
  } catch (error) {
    console.error(error);
    return { error: 'Failed to suggest keywords.' };
  }
}

export async function generateMetaDescriptionAction(pageContent: string) {
  try {
    const result = await generateMetaDescription({ pageContent });
    return { data: result.metaDescription };
  } catch (error) {
    console.error(error);
    return { error: 'Failed to generate meta description.' };
  }
}

export async function optimizeHeadingsAction(pageContent: string) {
  try {
    const result = await optimizeHeadings({ pageContent });
    return { data: result.optimizedHeadings };
  } catch (error) {
    console.error(error);
    return { error: 'Failed to optimize headings.' };
  }
}

export async function optimizeHeadingsFromUrlAction(url: string) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        return { error: `Failed to fetch URL: ${response.statusText}` };
      }
      const pageContent = await response.text();
      const result = await optimizeHeadings({ pageContent });
      return { data: result.optimizedHeadings };
    } catch (error) {
      console.error(error);
      return { error: 'Failed to fetch or optimize headings from URL.' };
    }
}

const altTextSchema = z.object({
  image: z.instanceof(File),
  description: z.string().min(1, "Description is required."),
});

export async function suggestAltTextAction(formData: FormData) {
  const rawFormData = {
    image: formData.get('image'),
    description: formData.get('description'),
  }

  const validatedFields = altTextSchema.safeParse(rawFormData);
  if (!validatedFields.success) {
    return { error: "Invalid form data." };
  }

  const { image, description } = validatedFields.data;

  try {
    const arrayBuffer = await image.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString('base64');
    const imageDataUri = `data:${image.type};base64,${base64}`;

    const result = await suggestAltText({ imageDataUri, imageDescription: description });
    return { data: result.altText };

  } catch (error) {
    console.error(error);
    return { error: "Failed to generate alt text. Please ensure the uploaded file is a valid image." };
  }
}

export async function analyzePageSpeedFromUrlAction(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return { error: `Failed to fetch URL: ${response.statusText}` };
    }
    const pageContent = await response.text();
    const result = await analyzePageSpeed({ pageContent });
    return { data: result };
  } catch (error) {
    console.error(error);
    return { error: 'Failed to analyze page speed from URL.' };
  }
}

export async function analyzeKeywordDensityFromUrlAction(url: string) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            return { error: `Failed to fetch URL: ${response.statusText}` };
        }
        const pageContent = await response.text();
        const result = await analyzeKeywordDensity({ pageContent });
        return { data: result.results };
    } catch (error) {
        console.error(error);
        return { error: 'Failed to analyze keyword density from URL.' };
    }
}
