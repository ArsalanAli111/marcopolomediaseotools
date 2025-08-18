import { PageSpeedAnalyzer } from "./features/page-speed-analyzer"
import { MetaDescriptionGenerator } from "./features/meta-description-generator"
import { HeadingOptimizer } from "./features/heading-optimizer"
import { ImageAltTextGenerator } from "./features/image-alt-text-generator"
import { KeywordSuggester } from "./features/keyword-suggester"
import { BannerTextGenerator } from "./features/banner-text-generator"
import { KeywordDensityAnalyzer } from "./features/keyword-density-analyzer"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export function Dashboard() {
  return (
    <div className="space-y-8">
      <div id="speed">
        <PageSpeedAnalyzer />
      </div>
      <div id="meta">
        <MetaDescriptionGenerator />
      </div>
      <div id="headings">
        <HeadingOptimizer />
      </div>
      <div id="images">
        <ImageAltTextGenerator />
      </div>
      <div id="keywords">
        <KeywordSuggester />
      </div>
      <div id="density">
        <KeywordDensityAnalyzer />
      </div>
      <div id="banner">
        <BannerTextGenerator />
      </div>
    </div>
  )
}
