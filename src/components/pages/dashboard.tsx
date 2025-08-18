'use client';
import { PageSpeedAnalyzer } from "@/components/features/page-speed-analyzer";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { ArrowRight, Captions, FileText, GalleryHorizontal, ImageIcon, Percent, Tags } from "lucide-react";
import { Button } from "../ui/button";

const tools = [
  {
    title: "Meta Description Generator",
    description: "Generate compelling, SEO-friendly meta descriptions.",
    href: "/meta",
    icon: <FileText className="h-8 w-8 text-primary" />,
  },
  {
    title: "Heading Optimizer",
    description: "Get keyword-rich heading suggestions to improve SEO.",
    href: "/headings",
    icon: <Captions className="h-8 w-8 text-primary" />,
  },
  {
    title: "Image Alt Text Generator",
    description: "Create descriptive alt text for your images.",
    href: "/images",
    icon: <ImageIcon className="h-8 w-8 text-primary" />,
  },
  {
    title: "Keyword Suggestion Tool",
    description: "Discover relevant SEO keywords for your content.",
    href: "/keywords",
    icon: <Tags className="h-8 w-8 text-primary" />,
  },
  {
    title: "Keyword Density Analyzer",
    description: "Analyze your content for keyword density.",
    href: "/density",
    icon: <Percent className="h-8 w-8 text-primary" />,
  },
  {
    title: "Homepage Banner Text",
    description: "Generate compelling banner text for your homepage.",
    href: "/banner",
    icon: <GalleryHorizontal className="h-8 w-8 text-primary" />,
  },
];

export function DashboardPage() {
    return (
        <div className="space-y-8">
            <PageSpeedAnalyzer />
            
            <div className="text-center">
                 <h2 className="text-3xl font-bold tracking-tight text-gradient">All Tools</h2>
                 <p className="text-muted-foreground mt-2">Explore our full suite of optimization tools.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool) => (
                    <Card key={tool.href} className="flex flex-col">
                        <CardHeader className="flex flex-row items-center gap-4">
                            {tool.icon}
                            <div>
                                <CardTitle className="text-xl">{tool.title}</CardTitle>
                                <CardDescription>{tool.description}</CardDescription>
                            </div>
                        </CardHeader>
                        <div className="flex-grow" />
                        <div className="p-6 pt-0">
                            <Link href={tool.href} passHref>
                                <Button variant="outline" className="w-full">
                                    Use Tool <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
