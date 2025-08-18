'use client';
import { Sidebar, SidebarContent, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarTrigger } from "@/components/ui/sidebar";
import { Bot, Captions, FileText, Gauge, Image as ImageIcon, Lightbulb, Megaphone, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function AppLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const menuItems = [
        { href: "/speed", icon: <Gauge />, label: "Page Speed" },
        { href: "/meta", icon: <FileText />, label: "Meta Desc" },
        { href: "/headings", icon: <Captions />, label: "Headings" },
        { href: "/images", icon: <ImageIcon />, label: "Images" },
        { href: "/keywords", icon: <Lightbulb />, label: "Keywords" },
        { href: "/density", icon: <Search />, label: "Density" },
        { href: "/banner", icon: <Megaphone />, label: "Banner" },
    ];

    return (
        <>
            <Sidebar>
                <SidebarContent>
                    <SidebarHeader>
                        <div className="flex items-center gap-2">
                            <div className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-lg p-2">
                                <Bot className="h-6 w-6" />
                            </div>
                            <div>
                                <h1 className="font-headline text-xl font-bold text-gradient">
                                    MarcoPolo
                                </h1>
                                <p className="text-sm text-muted-foreground">Media Optimizer</p>
                            </div>
                        </div>
                    </SidebarHeader>
                    <SidebarMenu>
                        {menuItems.map((item) => (
                            <SidebarMenuItem key={item.href}>
                                <Link href={item.href} passHref>
                                    <SidebarMenuButton asChild isActive={pathname === item.href || (pathname === '/' && item.href === '/speed')}>
                                        <>
                                            {item.icon}
                                            {item.label}
                                        </>
                                    </SidebarMenuButton>
                                </Link>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarContent>
            </Sidebar>
            <SidebarInset>
                <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12">
                    <div className="w-full max-w-6xl">
                         <header className="mb-8 flex items-center justify-between md:hidden">
                            <div className="flex items-center gap-4">
                                <SidebarTrigger/>
                                <h1 className="font-headline text-2xl font-bold text-gradient">
                                   MarcoPolo
                                </h1>
                            </div>
                        </header>
                        {children}
                    </div>
                </main>
            </SidebarInset>
        </>
    );
}
