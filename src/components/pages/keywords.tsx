
'use client';
import { KeywordSuggester } from "@/components/features/keyword-suggester";
import { Faq } from "@/components/faq";

const faqItems = [
    {
        question: "What is the Keyword Suggestion Tool?",
        answer: "This tool helps you discover relevant keywords and phrases related to a specific topic. It's designed to help you brainstorm ideas for your content strategy and target terms that your audience is searching for."
    },
    {
        question: "How do I use the suggested keywords?",
        answer: "You can incorporate these keywords into your website's content, blog posts, page titles, headings, and meta descriptions. The goal is to create content that naturally includes these terms, making it more likely to rank in search results for those queries."
    },
    {
        question: "How are these keywords generated?",
        answer: "The tool uses an AI model that has been trained on a vast amount of text from the internet. It analyzes your input topic and generates a list of related keywords that are semantically and contextually relevant."
    }
];

export function KeywordsPage() {
    return (
        <div>
            <KeywordSuggester />
            <Faq items={faqItems} />
        </div>
    )
}
