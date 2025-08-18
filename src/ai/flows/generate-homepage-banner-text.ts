'use server';
/**
 * @fileOverview AI agent that generates compelling homepage banner text.
 *
 * - generateHomepageBannerText - A function that generates homepage banner text.
 * - GenerateHomepageBannerTextInput - The input type for the generateHomepageBannerText function.
 * - GenerateHomepageBannerTextOutput - The return type for the generateHomepageBannerText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHomepageBannerTextInputSchema = z.object({
  prompt: z
    .string()
    .describe('A description of the desired homepage banner text.'),
});
export type GenerateHomepageBannerTextInput = z.infer<typeof GenerateHomepageBannerTextInputSchema>;

const GenerateHomepageBannerTextOutputSchema = z.object({
  bannerText: z.string().describe('The generated homepage banner text.'),
});
export type GenerateHomepageBannerTextOutput = z.infer<typeof GenerateHomepageBannerTextOutputSchema>;

export async function generateHomepageBannerText(input: GenerateHomepageBannerTextInput): Promise<GenerateHomepageBannerTextOutput> {
  return generateHomepageBannerTextFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHomepageBannerTextPrompt',
  input: {schema: GenerateHomepageBannerTextInputSchema},
  output: {schema: GenerateHomepageBannerTextOutputSchema},
  prompt: `You are an expert copywriter specializing in creating compelling homepage banner text.

  Based on the following description, generate engaging banner text for a homepage:

  Description: {{{prompt}}}
  `,
});

const generateHomepageBannerTextFlow = ai.defineFlow(
  {
    name: 'generateHomepageBannerTextFlow',
    inputSchema: GenerateHomepageBannerTextInputSchema,
    outputSchema: GenerateHomepageBannerTextOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
