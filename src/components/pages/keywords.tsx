'use client';
import { AppLayout } from "@/components/dashboard";
import { KeywordSuggester } from "@/components/features/keyword-suggester";

export function KeywordsPage() {
    return (
        <AppLayout>
            <KeywordSuggester />
        </AppLayout>
    )
}
