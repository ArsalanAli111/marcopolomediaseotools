'use client';
import { AppLayout } from "@/components/dashboard";
import { ImageAltTextGenerator } from "@/components/features/image-alt-text-generator";

export function ImagesPage() {
    return (
        <AppLayout>
            <ImageAltTextGenerator />
        </AppLayout>
    )
}
