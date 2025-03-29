import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "@inertiajs/react"

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Find Your Dream Home?
            </h2>
            <p className="max-w-[600px] text-primary-foreground/90 md:text-xl">
              Sign up to receive personalized property recommendations and market updates.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button variant="secondary" size="lg" className="shrink-0">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">For Buyers</h3>
            <p className="text-primary-foreground/80">
              Find your perfect home with our advanced search tools and expert guidance.
            </p>
            <Link href="/buyers">
              <Button variant="link" className="p-0 h-auto text-primary-foreground">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold">For Sellers</h3>
            <p className="text-primary-foreground/80">
              Get the best price for your property with our marketing expertise and network.
            </p>
            <Link href="/sellers">
              <Button variant="link" className="p-0 h-auto text-primary-foreground">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold">For Agents</h3>
            <p className="text-primary-foreground/80">Join our network of top-performing real estate professionals.</p>
            <Link href="/agents">
              <Button variant="link" className="p-0 h-auto text-primary-foreground">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

