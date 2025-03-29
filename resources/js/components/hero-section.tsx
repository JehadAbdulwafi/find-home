"use client"

import { useState } from "react"
import { Search, Home, Building, DollarSign, BedDouble, Bath, ArrowRight, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  const [searchType, setSearchType] = useState("buy")
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 1000000])
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])

  const features = [
    "Garage",
    "Pool",
    "Fireplace",
    "Air Conditioning",
    "Balcony",
    "Garden",
    "Elevator",
    "Security System",
  ]

  const toggleFeature = (feature: string) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feature))
    } else {
      setSelectedFeatures([...selectedFeatures, feature])
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <section className="relative w-full h-[720px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://kzmoeyudkg9cajr7cjn2.lite.vusercontent.net/placeholder.svg?height=600&width=1600"
          alt="Beautiful home exterior"
          className="object-cover brightness-[0.7] bg-green-200 w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container h-full mx-auto flex flex-col justify-center items-center text-white">
        <div className="text-center mb-8 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-md">
            Find Your Perfect Place to Call Home
          </h1>
          <p className="text-lg md:text-xl opacity-90 drop-shadow-md">
            Search millions of properties across the country with our powerful search tools
          </p>
        </div>

        {/* Search Box */}
        <div className="w-full max-w-4xl bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-4 md:p-6 text-foreground">
          <Tabs defaultValue="buy" onValueChange={setSearchType} className="mb-2">
            <TabsList className="grid w-full grid-cols-2 mb-2">
              <TabsTrigger value="buy" className="text-base">
                <Home className="mr-2 h-4 w-4" /> Buy
              </TabsTrigger>
              <TabsTrigger value="rent" className="text-base">
                <Building className="mr-2 h-4 w-4" /> Rent
              </TabsTrigger>
            </TabsList>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3 mt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter location, ZIP code, or address"
                  className="pl-10 pr-4 py-6 text-base"
                />
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white py-6">
                Search <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="mt-2">
              <Button
                variant="ghost"
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="text-sm flex items-center gap-1 px-0"
              >
                {showAdvanced ? "Hide" : "Show"} Advanced Search
                <ChevronDown
                  className={cn("h-4 w-4 transition-transform duration-200", showAdvanced ? "rotate-180" : "")}
                />
              </Button>

              <div
                className={cn(
                  "grid gap-4 overflow-hidden transition-all duration-300",
                  showAdvanced ? "grid-rows-[1fr] opacity-100 max-h-[500px] mt-4" : "grid-rows-[0fr] opacity-0 max-h-0",
                )}
              >
                <div className="min-h-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Property Type</label>
                      <Select defaultValue="any">
                        <SelectTrigger>
                          <SelectValue placeholder="Any" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="house">House</SelectItem>
                          <SelectItem value="apartment">Apartment</SelectItem>
                          <SelectItem value="condo">Condo</SelectItem>
                          <SelectItem value="townhouse">Townhouse</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Bedrooms</label>
                      <Select defaultValue="any">
                        <SelectTrigger>
                          <SelectValue placeholder="Any" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="1">1+</SelectItem>
                          <SelectItem value="2">2+</SelectItem>
                          <SelectItem value="3">3+</SelectItem>
                          <SelectItem value="4">4+</SelectItem>
                          <SelectItem value="5">5+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-1 block">Bathrooms</label>
                      <Select defaultValue="any">
                        <SelectTrigger>
                          <SelectValue placeholder="Any" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Any</SelectItem>
                          <SelectItem value="1">1+</SelectItem>
                          <SelectItem value="2">2+</SelectItem>
                          <SelectItem value="3">3+</SelectItem>
                          <SelectItem value="4">4+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>

                      <label className="text-sm font-medium mb-1 block">Features</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-between">
                            <div className="">{selectedFeatures.length}</div>

                            <ChevronDown
                              className={cn("h-4 w-4 transition-transform duration-200")}
                            />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                          <div className="grid grid-cols-2 gap-2">
                            {features.map((feature) => (
                              <Button
                                key={feature}
                                variant={selectedFeatures.includes(feature) ? "default" : "outline"}
                                size="sm"
                                onClick={() => toggleFeature(feature)}
                                className="justify-start"
                              >
                                {feature}
                              </Button>
                            ))}
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="md:col-span-2 lg:col-span-4">
                      <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium">Price Range</label>
                        <span className="text-sm">
                          {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
                        </span>
                      </div>
                      <Slider
                        defaultValue={[0, 1000000]}
                        max={2000000}
                        step={50000}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="my-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tabs>

          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="rounded-full">
              <BedDouble className="mr-1 h-3 w-3" /> 3+ Beds
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              <Bath className="mr-1 h-3 w-3" /> 2+ Baths
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              <DollarSign className="mr-1 h-3 w-3" /> Under $500k
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              New Construction
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Pool
            </Button>
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <p className="text-sm text-white/80">
            Popular searches:
            <Button variant="link" className="text-white p-0 h-auto font-normal text-sm ml-1">
              Waterfront homes
            </Button>
            ,
            <Button variant="link" className="text-white p-0 h-auto font-normal text-sm ml-1">
              New listings
            </Button>
            ,
            <Button variant="link" className="text-white p-0 h-auto font-normal text-sm ml-1">
              Open houses
            </Button>
          </p>
        </div>
      </div>
    </section>
  )
}


