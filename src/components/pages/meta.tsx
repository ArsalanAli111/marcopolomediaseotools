'use client';
import { AppLayout } from "@/components/dashboard";
import { MetaDescriptionGenerator } from "@/components/features/meta-description-generator";

export function MetaPage() {
    return (
        <AppLayout>
            <MetaDescriptionGenerator />
        </AppLayout>
    )
}
