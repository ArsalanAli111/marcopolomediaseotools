import { Sidebar, SidebarContent, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarTrigger } from "@/components/ui/sidebar";
import { Bot, Captions, FileText, Gauge, Image as ImageIcon, Lightbulb, Megaphone, Search } from "lucide-react";
import { usePathname } from "next/navigation";

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
                            <div className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full p-2">
                                <Bot className="h-6 w-6" />
                            </div>
                            <h1 className="font-headline text-xl font-bold text-primary">
                                MarcoPolo
                            </h1>
                        </div>
                    </SidebarHeader>
                    <SidebarMenu>
                        {menuItems.map((item) => (
                            <SidebarMenuItem key={item.href}>
                                <SidebarMenuButton href={item.href} isActive={pathname === item.href}>
                                    {item.icon}
                                    {item.label}
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarContent>
            </Sidebar>
            <SidebarInset>
                <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12">
                    <div className="w-full max-w-6xl">
                        <header className="mb-8 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <SidebarTrigger className="md:hidden" />
                                <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary">
                                    Media Optimizer
                                </h1>
                            </div>
                            <p className="mt-2 text-lg text-foreground/80 hidden md:block">
                                Your AI-powered toolkit for peak SEO performance.
                            </p>
                        </header>
                        {children}
                    </div>
                </main>
            </SidebarInset>
        </>
    );
}
