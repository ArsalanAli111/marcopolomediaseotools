'use server';

/**
 * @fileOverview An AI agent for analyzing website page speed and performance.
 *
 * - analyzePageSpeed - A function that analyzes the page speed of a given URL.
 * - AnalyzePageSpeedInput - The input type for the analyzePageSpeed function.
 * - AnalyzePageSpeedOutput - The return type for the analyzePageSpeed function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzePageSpeedInputSchema = z.object({
  pageContent: z
    .string()
    .describe('The HTML content of the page to analyze.'),
});
export type AnalyzePageSpeedInput = z.infer<typeof AnalyzePageSpeedInputSchema>;

const AnalyzePageSpeedOutputSchema = z.object({
  score: z.number().min(0).max(100).describe('The performance score from 0 to 100.'),
  suggestions: z.array(z.string()).describe('A list of actionable suggestions for improvement.'),
});
export type AnalyzePageSpeedOutput = z.infer<typeof AnalyzePageSpeedOutputSchema>;

export async function analyzePageSpeed(input: AnalyzePageSpeedInput): Promise<AnalyzePageSpeedOutput> {
  return analyzePageSpeedFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzePageSpeedPrompt',
  input: {schema: AnalyzePageSpeedInputSchema},
  output: {schema: AnalyzePageSpeedOutputSchema},
  prompt: `You are a web performance expert. Your task is to analyze the provided HTML content of a webpage and provide a performance score and actionable suggestions for improvement, similar to Google PageSpeed Insights.

  Analyze the following page content:
  {{{pageContent}}}

  Based on your analysis, provide a performance score from 0 (very poor) to 100 (excellent) and a list of specific, actionable suggestions to improve the page's loading speed, rendering time, and overall user experience. Focus on areas like image optimization, script deferring, CSS minification, and reducing render-blocking resources.
  `,
});

const analyzePageSpeedFlow = ai.defineFlow(
  {
    name: 'analyzePageSpeedFlow',
    inputSchema: AnalyzePageSpeedInputSchema,
    outputSchema: AnalyzePageSpeedOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
