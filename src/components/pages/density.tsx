
'use client';
import { KeywordDensityAnalyzer } from "@/components/features/keyword-density-analyzer";
import { Faq } from "@/components/faq";

const faqItems = [
    {
        question: "What is keyword density?",
        answer: "Keyword density is the percentage of times a specific keyword or phrase appears on a webpage compared to the total number of words on that page. It's a metric used in SEO to analyze how relevant a page is to a particular topic."
    },
    {
        question: "Why is keyword density important?",
        answer: "Analyzing keyword density helps you understand if your content is sufficiently focused on your target keywords. It can help you avoid 'keyword stuffing' (overusing keywords), which can harm your rankings, while ensuring your content is seen as relevant by search engines."
    },
    {
        question: "How do I interpret the results?",
        answer: "The tool provides a list of the most frequent keywords found in the URL's content, along with their count and density percentage. Use this data to see which terms are most prominent and whether your primary keywords are adequately represented."
    }
];

export function DensityPage() {
    return (
        <div>
            <KeywordDensityAnalyzer />
            <Faq items={faqItems} />
        </div>
    )
}
