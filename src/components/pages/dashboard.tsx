
'use client';
import { PageSpeedAnalyzer } from "@/components/features/page-speed-analyzer";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { ArrowRight, Bot, Captions, FileText, GalleryHorizontal, ImageIcon, Percent, ShieldCheck, Smile, Tags, Zap } from "lucide-react";
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
        <div className="space-y-12">
            <section className="text-center bg-[#121212] rounded-xl p-8 md:p-12 lg:p-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                The All-in-One <span className="text-gradient">SEO</span> Solution Platform
              </h1>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to boost rankings, optimize content, and drive more traffic. MarcoPolo provides a complete suite of AI-powered tools for your success.
              </p>
              <div className="mt-8 flex justify-center">
                <Button size="lg" asChild>
                  <Link href="#page-speed">
                    Analyze Your Site
                    <Zap className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </section>
            
            <div id="page-speed">
              <PageSpeedAnalyzer />
            </div>
            
            <div className="text-center">
                 <h2 className="text-3xl font-bold tracking-tight text-gradient">All Tools</h2>
                 <p className="text-muted-foreground mt-2">Explore our full suite of optimization tools.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool) => (
                    <Card key={tool.href} className="flex flex-col bg-secondary/50 hover:bg-secondary/80 transition-colors duration-300">
                        <CardHeader className="flex flex-col items-center flex-grow gap-4 p-4 pb-2 text-center">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                {tool.icon}
                            </div>
                            <div className="flex-1">
                                <CardTitle>{tool.title}</CardTitle>
                                <CardDescription className="mt-2">{tool.description}</CardDescription>
                            </div>
                        </CardHeader>
                        
                        <div className="p-4 pt-0 mt-auto">
                            <Link href={tool.href} passHref>
                                <Button variant="outline" className="w-full bg-transparent text-foreground hover:bg-primary/90 hover:text-primary-foreground">
                                    Use Tool <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </Card>
                ))}
            </div>

            <section className="py-12 lg:py-20">
              <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gradient">Why Choose MarcoPolo?</h2>
                <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                  We provide the sharpest tools to help you navigate the digital landscape and conquer search rankings.
                </p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Bot className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">AI-Powered Precision</h3>
                    <p className="text-muted-foreground">Harness cutting-edge AI for data-driven SEO recommendations that give you a competitive edge.</p>
                  </div>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <ShieldCheck className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Comprehensive Toolkit</h3>
                    <p className="text-muted-foreground">Access a full suite of tools covering everything from page speed and meta tags to keyword analysis.</p>
                  </div>
                  <div className="flex flex-col items-center space-y-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Smile className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">User-Friendly Interface</h3>
                    <p className="text-muted-foreground">Our intuitive dashboard makes it easy for anyone, from beginners to experts, to optimize their site.</p>
                  </div>
                </div>
              </div>
            </section>

        </div>
    )
}
