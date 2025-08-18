'use client';
import { AppLayout } from "@/components/dashboard";
import { KeywordDensityAnalyzer } from "@/components/features/keyword-density-analyzer";

export function DensityPage() {
    return (
        <AppLayout>
            <KeywordDensityAnalyzer />
        </AppLayout>
    )
}
