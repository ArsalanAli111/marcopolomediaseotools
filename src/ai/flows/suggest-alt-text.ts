'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting alt text for images.
 *
 * - suggestAltText - A function that suggests alt text for an image.
 * - SuggestAltTextInput - The input type for the suggestAltText function.
 * - SuggestAltTextOutput - The return type for the suggestAltText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestAltTextInputSchema = z.object({
  imageDataUri: z
    .string()
    .describe(
      "A photo of an object, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  imageDescription: z.string().describe('A description of the image.'),
});
export type SuggestAltTextInput = z.infer<typeof SuggestAltTextInputSchema>;

const SuggestAltTextOutputSchema = z.object({
  altText: z.string().describe('The suggested alt text for the image.'),
});
export type SuggestAltTextOutput = z.infer<typeof SuggestAltTextOutputSchema>;

export async function suggestAltText(input: SuggestAltTextInput): Promise<SuggestAltTextOutput> {
  return suggestAltTextFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestAltTextPrompt',
  input: {schema: SuggestAltTextInputSchema},
  output: {schema: SuggestAltTextOutputSchema},
  prompt: `You are an SEO expert. Generate concise and descriptive alt text for an image based on the provided information.\n\nDescription: {{{imageDescription}}}\nImage: {{media url=imageDataUri}}\n\nAlt Text:`,
});

const suggestAltTextFlow = ai.defineFlow(
  {
    name: 'suggestAltTextFlow',
    inputSchema: SuggestAltTextInputSchema,
    outputSchema: SuggestAltTextOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
