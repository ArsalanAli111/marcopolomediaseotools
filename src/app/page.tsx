import { Dashboard } from "@/components/dashboard";
import { SidebarProvider, Sidebar, SidebarTrigger, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset } from "@/components/ui/sidebar";
import { Bot, Gauge, FileText, Captions, Image as ImageIcon, Lightbulb, Search, Megaphone } from "lucide-react";

export default function Home() {
  return (
    <SidebarProvider>
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
            <SidebarMenuItem>
              <SidebarMenuButton href="#speed" isActive>
                <Gauge />
                Page Speed
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#meta">
                <FileText />
                Meta Desc
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#headings">
                <Captions />
                Headings
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#images">
                <ImageIcon />
                Images
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#keywords">
                <Lightbulb />
                Keywords
              </SidebarMenuButton>
            </SidebarMenuItem>
             <SidebarMenuItem>
              <SidebarMenuButton href="#density">
                <Search />
                Density
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton href="#banner">
                <Megaphone />
                Banner
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12">
          <div className="w-full max-w-6xl">
            <header className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                 <SidebarTrigger className="md:hidden"/>
                 <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary">
                  Media Optimizer
                </h1>
              </div>
              <p className="mt-2 text-lg text-foreground/80 hidden md:block">
                Your AI-powered toolkit for peak SEO performance.
              </p>
            </header>
            <Dashboard />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
