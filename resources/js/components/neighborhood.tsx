import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "@inertiajs/react"

const neighborhoods = [
  {
    name: "Downtown",
    image: "https://kzmoeyudkg9cajr7cjn2.lite.vusercontent.net/placeholder.svg?height=300&width=500",
    description: "Urban living with restaurants, shops, and entertainment",
    stats: {
      avgPrice: "$750,000",
      walkScore: 95,
      schools: "A-",
    },
    link: "/neighborhoods/downtown",
  },
  {
    name: "Westside",
    image: "https://kzmoeyudkg9cajr7cjn2.lite.vusercontent.net/placeholder.svg?height=300&width=500",
    description: "Family-friendly area with parks and top-rated schools",
    stats: {
      avgPrice: "$950,000",
      walkScore: 75,
      schools: "A+",
    },
    link: "/neighborhoods/westside",
  },
  {
    name: "Riverside",
    image: "https://kzmoeyudkg9cajr7cjn2.lite.vusercontent.net/placeholder.svg?height=300&width=500",
    description: "Scenic waterfront properties with outdoor activities",
    stats: {
      avgPrice: "$1,200,000",
      walkScore: 80,
      schools: "A",
    },
    link: "/neighborhoods/riverside",
  },
]

export function NeighborhoodGuide() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Neighborhood Guides</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Explore popular neighborhoods and find the perfect area for your lifestyle
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {neighborhoods.map((neighborhood) => (
            <Card key={neighborhood.name} className="overflow-hidden py-0">
              <div className="relative h-48">
                <img
                  src={neighborhood.image || "/placeholder.svg"}
                  alt={neighborhood.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="font-bold text-xl mb-2">{neighborhood.name}</h3>
                <p className="text-muted-foreground mb-4">{neighborhood.description}</p>

                <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
                  <div>
                    <p className="font-medium">Avg. Price</p>
                    <p className="text-muted-foreground">{neighborhood.stats.avgPrice}</p>
                  </div>
                  <div>
                    <p className="font-medium">Walk Score</p>
                    <p className="text-muted-foreground">{neighborhood.stats.walkScore}/100</p>
                  </div>
                  <div>
                    <p className="font-medium">Schools</p>
                    <p className="text-muted-foreground">{neighborhood.stats.schools}</p>
                  </div>
                </div>

                <Link href={neighborhood.link}>
                  <Button variant="ghost" className="p-0 h-auto">
                    Explore {neighborhood.name} <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link href="/neighborhoods">
            <Button>View All Neighborhoods</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

