'use server';

/**
 * @fileOverview A heading optimization AI agent.
 *
 * - optimizeHeadings - A function that handles the heading optimization process.
 * - OptimizeHeadingsInput - The input type for the optimizeHeadings function.
 * - OptimizeHeadingsOutput - The return type for the optimizeHeadings function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeHeadingsInputSchema = z.object({
  pageContent: z
    .string()
    .describe('The content of the page to optimize headings for.'),
});
export type OptimizeHeadingsInput = z.infer<typeof OptimizeHeadingsInputSchema>;

const OptimizeHeadingsOutputSchema = z.object({
  optimizedHeadings: z
    .array(z.string())
    .describe('An array of optimized headings for the page.'),
});
export type OptimizeHeadingsOutput = z.infer<typeof OptimizeHeadingsOutputSchema>;

export async function optimizeHeadings(input: OptimizeHeadingsInput): Promise<OptimizeHeadingsOutput> {
  return optimizeHeadingsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeHeadingsPrompt',
  input: {schema: OptimizeHeadingsInputSchema},
  output: {schema: OptimizeHeadingsOutputSchema},
  prompt: `You are an SEO expert tasked with optimizing page headings for better search engine rankings.

  Given the content of the page below, suggest optimized headings (H1, H2) that incorporate relevant keywords.

  Page Content: {{{pageContent}}}

  Provide an array of optimized headings.
  `,
});

const optimizeHeadingsFlow = ai.defineFlow(
  {
    name: 'optimizeHeadingsFlow',
    inputSchema: OptimizeHeadingsInputSchema,
    outputSchema: OptimizeHeadingsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
