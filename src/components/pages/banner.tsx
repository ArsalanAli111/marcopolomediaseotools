
'use client';
import { BannerTextGenerator } from "@/components/features/banner-text-generator";
import { Faq } from "@/components/faq";

const faqItems = [
    {
        question: "What is the Homepage Banner Text generator?",
        answer: "This tool uses AI to craft compelling and engaging text for the main banner on your website's homepage. It's designed to grab visitors' attention and communicate your key message effectively."
    },
    {
        question: "How do I use it?",
        answer: "Simply enter a brief description of your business, product, or the message you want to convey. The AI will generate a banner text suggestion based on your input, which you can then customize or use as-is."
    },
    {
        question: "Can I regenerate the text if I don't like the first result?",
        answer: "Yes, absolutely. You can click the 'Regenerate' button as many times as you need to get a result that perfectly fits your brand's voice and style."
    },
];

export function BannerPage() {
    return (
        <div>
            <BannerTextGenerator />
            <Faq items={faqItems} />
        </div>
    )
}
