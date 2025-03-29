import { Heart, BedDouble, Bath, Square, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link } from "@inertiajs/react"

interface Property {
  id: string
  title: string
  address: string
  price: number
  beds: number
  baths: number
  sqft: number
  image: string
  isNew: boolean
}

const properties: Property[] = [
  {
    id: "1",
    title: "Modern Apartment with City View",
    address: "123 Downtown Ave, New York, NY",
    price: 750000,
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: "https://kzmoeyudkg9cajr7cjn2.lite.vusercontent.net/placeholder.svg?height=300&width=500",
    isNew: true,
  },
  {
    id: "2",
    title: "Spacious Family Home",
    address: "456 Suburban St, Los Angeles, CA",
    price: 1250000,
    beds: 4,
    baths: 3,
    sqft: 2800,
    image: "https://kzmoeyudkg9cajr7cjn2.lite.vusercontent.net/placeholder.svg?height=300&width=500",
    isNew: false,
  },
  {
    id: "3",
    title: "Luxury Waterfront Condo",
    address: "789 Bayshore Dr, Miami, FL",
    price: 1850000,
    beds: 3,
    baths: 3.5,
    sqft: 2200,
    image: "https://kzmoeyudkg9cajr7cjn2.lite.vusercontent.net/placeholder.svg?height=300&width=500",
    isNew: true,
  },
  {
    id: "4",
    title: "Charming Craftsman Bungalow",
    address: "321 Heritage Ln, Portland, OR",
    price: 625000,
    beds: 3,
    baths: 2,
    sqft: 1800,
    image: "https://kzmoeyudkg9cajr7cjn2.lite.vusercontent.net/placeholder.svg?height=300&width=500",
    isNew: false,
  },
]

export default function FeaturedProperties() {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Properties</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Discover our handpicked selection of premium properties
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden group pt-0">
              <div className="relative h-full">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-[200px] transition-transform duration-300 group-hover:scale-105"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full"
                >
                  <Heart className="h-5 w-5 text-muted-foreground" />
                  <span className="sr-only">Save property</span>
                </Button>
                {property.isNew && <Badge className="absolute top-2 left-2 bg-primary">New</Badge>}
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg line-clamp-1">{property.title}</h3>
                  <p className="font-bold text-primary">{formatPrice(property.price)}</p>
                </div>
                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <MapPin className="h-3.5 w-3.5 mr-1" />
                  <p className="line-clamp-1">{property.address}</p>
                </div>
                <div className="flex justify-between text-sm">
                  <div className="flex items-center">
                    <BedDouble className="h-4 w-4 mr-1" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href={`/property/${property.id}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link href="/properties">
            <Button size="lg">View All Properties</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

