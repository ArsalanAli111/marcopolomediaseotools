
'use client';
import { PageSpeedAnalyzer } from "@/components/features/page-speed-analyzer";
import { Faq } from "@/components/faq";

const faqItems = [
    {
        question: "What is Page Speed?",
        answer: "Page speed refers to the amount of time it takes for a web browser to load the content of a specific page. It's a critical factor for user experience and a confirmed ranking signal for search engines like Google."
    },
    {
        question: "How is the performance score calculated?",
        answer: "The tool analyzes the provided URL's HTML content to identify common performance bottlenecks, similar to how Google's PageSpeed Insights works. It looks for things like large images, unoptimized scripts, and render-blocking resources to generate a score from 0 to 100."
    },
    {
        question: "Are these suggestions guaranteed to improve my score?",
        answer: "The suggestions provided are best practices for web performance optimization. Implementing them will almost certainly improve your website's speed and user experience. However, the final score depends on many factors, including your hosting environment and third-party scripts."
    }
];

export function SpeedPage() {
    return (
        <div>
            <PageSpeedAnalyzer />
            <Faq items={faqItems} />
        </div>
    )
}
