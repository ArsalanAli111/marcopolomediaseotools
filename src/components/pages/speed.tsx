'use client';
import { AppLayout } from "@/components/dashboard";
import { PageSpeedAnalyzer } from "@/components/features/page-speed-analyzer";

export function SpeedPage() {
    return (
        <AppLayout>
            <PageSpeedAnalyzer />
        </AppLayout>
    )
}
