import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageSpeedAnalyzer } from "./features/page-speed-analyzer"
import { MetaDescriptionGenerator } from "./features/meta-description-generator"
import { HeadingOptimizer } from "./features/heading-optimizer"
import { ImageAltTextGenerator } from "./features/image-alt-text-generator"
import { KeywordSuggester } from "./features/keyword-suggester"
import { BannerTextGenerator } from "./features/banner-text-generator"
import { KeywordDensityAnalyzer } from "./features/keyword-density-analyzer"
import { Gauge, Wand2, Search, FileText, Captions, Image as ImageIcon, Lightbulb, Megaphone } from "lucide-react"

export function Dashboard() {
  return (
    <Tabs defaultValue="speed" className="w-full">
      <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 h-auto">
        <TabsTrigger value="speed" className="flex-col sm:flex-row h-auto py-2"><Gauge className="mb-1 sm:mb-0 sm:mr-2" /> Page Speed</TabsTrigger>
        <TabsTrigger value="meta" className="flex-col sm:flex-row h-auto py-2"><FileText className="mb-1 sm:mb-0 sm:mr-2" /> Meta Desc</TabsTrigger>
        <TabsTrigger value="headings" className="flex-col sm:flex-row h-auto py-2"><Captions className="mb-1 sm:mb-0 sm:mr-2" /> Headings</TabsTrigger>
        <TabsTrigger value="images" className="flex-col sm:flex-row h-auto py-2"><ImageIcon className="mb-1 sm:mb-0 sm:mr-2" /> Images</TabsTrigger>
        <TabsTrigger value="keywords" className="flex-col sm:flex-row h-auto py-2"><Lightbulb className="mb-1 sm:mb-0 sm:mr-2" /> Keywords</TabsTrigger>
        <TabsTrigger value="density" className="flex-col sm:flex-row h-auto py-2"><Search className="mb-1 sm:mb-0 sm:mr-2" /> Density</TabsTrigger>
        <TabsTrigger value="banner" className="flex-col sm:flex-row h-auto py-2"><Megaphone className="mb-1 sm:mb-0 sm:mr-2" /> Banner</TabsTrigger>
      </TabsList>
      <TabsContent value="speed">
        <PageSpeedAnalyzer />
      </TabsContent>
      <TabsContent value="meta">
        <MetaDescriptionGenerator />
      </TabsContent>
      <TabsContent value="headings">
        <HeadingOptimizer />
      </TabsContent>
      <TabsContent value="images">
        <ImageAltTextGenerator />
      </TabsContent>
       <TabsContent value="keywords">
        <KeywordSuggester />
      </TabsContent>
      <TabsContent value="density">
        <KeywordDensityAnalyzer />
      </TabsContent>
      <TabsContent value="banner">
        <BannerTextGenerator />
      </TabsContent>
    </Tabs>
  )
}
