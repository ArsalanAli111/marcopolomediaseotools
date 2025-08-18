'use client';
import { AppLayout } from "@/components/dashboard";
import { BannerTextGenerator } from "@/components/features/banner-text-generator";

export function BannerPage() {
    return (
        <AppLayout>
            <BannerTextGenerator />
        </AppLayout>
    )
}
