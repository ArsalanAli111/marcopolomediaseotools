
'use client';
import { ImageAltTextGenerator } from "@/components/features/image-alt-text-generator";
import { Faq } from "@/components/faq";

const faqItems = [
    {
        question: "What is alt text?",
        answer: "Alt text (alternative text) is a short, written description of an image on a webpage. It is used by screen readers for visually impaired users and by search engines to understand the content of the image."
    },
    {
        question: "Why is alt text important for SEO?",
        answer: "Good alt text improves accessibility and helps your images rank in image search results. It provides context to search engines, which can contribute to better overall page rankings."
    },
    {
        question: "How does the image optimization tip work?",
        answer: "The tool provides a general but crucial tip for web performance: compressing your images. Large image files can significantly slow down your website. Using tools to reduce file size before uploading is one of the most effective ways to improve page speed."
    }
];

export function ImagesPage() {
    return (
        <div>
            <ImageAltTextGenerator />
            <Faq items={faqItems} />
        </div>
    )
}
