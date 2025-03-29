import { Home, Building, Warehouse, TreePine } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Link } from "@inertiajs/react"

const categories = [
  {
    title: "Houses",
    description: "Find your perfect single-family home",
    icon: <Home className="h-6 w-6" />,
    image: "https://kzmoeyudkg9cajr7cjn2.lite.vusercontent.net/placeholder.svg?height=300&width=500",
    count: 1245,
    link: "/properties/houses",
  },
  {
    title: "Apartments",
    description: "Modern apartments and condos in the city",
    icon: <Building className="h-6 w-6" />,
    image: "https://kzmoeyudkg9cajr7cjn2.lite.vusercontent.net/placeholder.svg?height=300&width=500",
    count: 873,
    link: "/properties/apartments",
  },
  {
    title: "Commercial",
    description: "Office spaces and retail properties",
    icon: <Warehouse className="h-6 w-6" />,
    image: "https://kzmoeyudkg9cajr7cjn2.lite.vusercontent.net/placeholder.svg?height=300&width=500",
    count: 427,
    link: "/properties/commercial",
  },
  {
    title: "Land",
    description: "Vacant land and development opportunities",
    icon: <TreePine className="h-6 w-6" />,
    image: "https://kzmoeyudkg9cajr7cjn2.lite.vusercontent.net/placeholder.svg?height=300&width=500",
    count: 312,
    link: "/properties/land",
  },
]

export function PropertyCategories() {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Browse by Property Type</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Explore our diverse range of properties to find what suits your needs
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.title} href={category.link} className="block group">
              <Card className="overflow-hidden h-full py-0 transition-all duration-200 hover:shadow-lg">
                <div className="relative h-40">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="text-sm font-medium">{category.count} Properties</p>
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-primary">{category.icon}</div>
                    <h3 className="font-bold text-xl">{category.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

