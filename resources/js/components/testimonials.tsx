import { Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "First-time Homebuyer",
    image: "https://kzmoeyudkg9cajr7cjn2.lite.vusercontent.net/placeholder.svg?height=300&width=500",
    content:
      "HomeFind made buying my first home so much easier than I expected. The search tools were intuitive, and my agent was incredibly helpful throughout the entire process.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Property Investor",
    image: "https://kzmoeyudkg9cajr7cjn2.lite.vusercontent.net/placeholder.svg?height=300&width=500",
    content:
      "As someone who regularly invests in real estate, I appreciate the detailed market data and analytics that HomeFind provides. It's become my go-to platform for finding new investment opportunities.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Relocated for Work",
    image: "https://kzmoeyudkg9cajr7cjn2.lite.vusercontent.net/placeholder.svg?height=300&width=500",
    content:
      "When I had to relocate for a new job, HomeFind helped me find a great place in a neighborhood that perfectly matched my lifestyle. The neighborhood guides were especially helpful!",
    rating: 4,
  },
]

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Clients Say</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Hear from homebuyers and sellers who found success with HomeFind
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full h-16 w-16 object-cover"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-muted"}`}
                    />
                  ))}
                </div>

                <p className="text-muted-foreground flex-grow">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

