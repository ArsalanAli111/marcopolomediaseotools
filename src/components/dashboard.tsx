import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageSpeedAnalyzer } from "./features/page-speed-analyzer"
import { Gauge } from "lucide-react"

export function Dashboard() {
  return (
    <Tabs defaultValue="speed" className="w-full">
      <TabsList className="grid w-full grid-cols-1">
        <TabsTrigger value="speed" className="flex-col sm:flex-row h-auto py-2"><Gauge className="mb-1 sm:mb-0 sm:mr-2" /> Page Speed</TabsTrigger>
      </TabsList>
      <TabsContent value="speed">
        <PageSpeedAnalyzer />
      </TabsContent>
    </Tabs>
  )
}
