
'use client';
import { HeadingOptimizer } from "@/components/features/heading-optimizer";
import { Faq } from "@/components/faq";

const faqItems = [
    {
        question: "What does the Heading Optimizer do?",
        answer: "This tool analyzes the content of a given URL and suggests optimized H1 and H2 heading tags. These suggestions are designed to be keyword-rich and structured in a way that is favorable for search engine optimization (SEO)."
    },
    {
        question: "Why are headings important for SEO?",
        answer: "Headings (like H1 and H2) help search engines understand the structure and main topics of your page. Well-optimized headings that include relevant keywords can significantly improve your page's ability to rank for those terms."
    },
    {
        question: "How should I use the suggested headings?",
        answer: "You can use the suggestions as direct replacements for your current headings or as inspiration to rewrite them. The goal is to make your headings more descriptive, keyword-focused, and helpful for both users and search engines."
    }
];


export function HeadingsPage() {
    return (
        <div>
            <HeadingOptimizer />
            <Faq items={faqItems} />
        </div>
    )
}
