'use server';

/**
 * @fileOverview An AI agent for analyzing keyword density on a webpage.
 *
 * - analyzeKeywordDensity - Analyzes the keyword density of a given text content.
 * - AnalyzeKeywordDensityInput - The input type for the analyzeKeywordDensity function.
 * - AnalyzeKeywordDensityOutput - The return type for the analyzeKeywordDensity function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeKeywordDensityInputSchema = z.object({
  pageContent: z
    .string()
    .describe('The text content of the page to analyze.'),
});
export type AnalyzeKeywordDensityInput = z.infer<typeof AnalyzeKeywordDensityInputSchema>;

const KeywordDensityResultSchema = z.object({
    keyword: z.string().describe('The keyword found in the text.'),
    count: z.number().describe('The number of times the keyword appears.'),
    density: z.number().describe('The density of the keyword in the text (as a percentage).'),
});

const AnalyzeKeywordDensityOutputSchema = z.object({
  results: z.array(KeywordDensityResultSchema).describe('A list of keywords and their density.'),
});
export type AnalyzeKeywordDensityOutput = z.infer<typeof AnalyzeKeywordDensityOutputSchema>;

export async function analyzeKeywordDensity(input: AnalyzeKeywordDensityInput): Promise<AnalyzeKeywordDensityOutput> {
  return analyzeKeywordDensityFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeKeywordDensityPrompt',
  input: {schema: AnalyzeKeywordDensityInputSchema},
  output: {schema: AnalyzeKeywordDensityOutputSchema},
  prompt: `You are a professional SEO analyst. Your task is to analyze the given text content and determine the keyword density for the most important keywords.

  Analyze the following page content:
  {{{pageContent}}}

  Identify the top 5-10 most relevant single-word and multi-word keywords (bigrams and trigrams). For each keyword, calculate its count and density percentage. Return the results as an array of objects, each containing the keyword, its count, and its density.
  `,
});

const analyzeKeywordDensityFlow = ai.defineFlow(
  {
    name: 'analyzeKeywordDensityFlow',
    inputSchema: AnalyzeKeywordDensityInputSchema,
    outputSchema: AnalyzeKeywordDensityOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
