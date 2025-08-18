
'use client';
import { MetaDescriptionGenerator } from "@/components/features/meta-description-generator";
import { Faq } from "@/components/faq";

const faqItems = [
    {
        question: "What is a meta description?",
        answer: "A meta description is an HTML attribute that provides a brief summary of a webpage. It is often displayed in search engine results pages (SERPs) under the page title, influencing whether users click on your link."
    },
    {
        question: "Why is a good meta description important?",
        answer: "A well-written meta description can increase your click-through rate (CTR) from search results. While not a direct ranking factor, a higher CTR can signal to search engines that your page is a good result, which can positively influence rankings over time."
    },
    {
        question: "What is the ideal length for a meta description?",
        answer: "It's recommended to keep meta descriptions under 160 characters. This tool includes a character counter to help you stay within the optimal length to avoid it being truncated in search results."
    }
];

export function MetaPage() {
    return (
        <div>
            <MetaDescriptionGenerator />
            <Faq items={faqItems} />
        </div>
    )
}
