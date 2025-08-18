import { config } from 'dotenv';
config();

import '@/ai/flows/optimize-headings.ts';
import '@/ai/flows/generate-homepage-banner-text.ts';
import '@/ai/flows/suggest-keywords.ts';
import '@/ai/flows/generate-meta-descriptions.ts';
import '@/ai/flows/suggest-alt-text.ts';
import '@/ai/flows/analyze-page-speed.ts';
