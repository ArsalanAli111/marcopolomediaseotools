import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BannerTextGenerator } from "./features/banner-text-generator"
import { HeadingOptimizer } from "./features/heading-optimizer"
import { ImageAltTextGenerator } from "./features/image-alt-text-generator"
import { KeywordSuggester } from "./features/keyword-suggester"
import { MetaDescriptionGenerator } from "./features/meta-description-generator"

import { Tags, Megaphone, Type, FileImage, ShieldQuestion, Captions } from "lucide-react"

export function Dashboard() {
  return (
    <Tabs defaultValue="banner" className="w-full">
      <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 h-auto">
        <TabsTrigger value="banner" className="flex-col sm:flex-row h-auto py-2"><Megaphone className="mb-1 sm:mb-0 sm:mr-2" /> Banner Text</TabsTrigger>
        <TabsTrigger value="keywords" className="flex-col sm:flex-row h-auto py-2"><Tags className="mb-1 sm:mb-0 sm:mr-2" /> Keywords</TabsTrigger>
        <TabsTrigger value="meta" className="flex-col sm:flex-row h-auto py-2"><ShieldQuestion className="mb-1 sm:mb-0 sm:mr-2" /> Meta Desc</TabsTrigger>
        <TabsTrigger value="headings" className="flex-col sm:flex-row h-auto py-2"><Captions className="mb-1 sm:mb-0 sm:mr-2" /> Headings</TabsTrigger>
        <TabsTrigger value="images" className="flex-col sm:flex-row h-auto py-2"><FileImage className="mb-1 sm:mb-0 sm:mr-2" /> Images</TabsTrigger>
      </TabsList>
      <TabsContent value="banner">
        <BannerTextGenerator />
      </TabsContent>
      <TabsContent value="keywords">
        <KeywordSuggester />
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
    </Tabs>
  )
}
