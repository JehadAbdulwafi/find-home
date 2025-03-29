"use client"

import { useState } from "react"
import { Search, Menu, X, Home, MapPin, DollarSign, Building, Heart, User } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Link, usePage } from "@inertiajs/react"

export default function SiteHeader() {
  const { url } = usePage();
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b">
      <div className="container flex h-16 items-center mx-auto">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                <Home className="h-5 w-5" />
                Buy
              </Link>
              <Link href="/sell" className="flex items-center gap-2 text-lg font-semibold">
                <DollarSign className="h-5 w-5" />
                Sell
              </Link>
              <Link href="/rent" className="flex items-center gap-2 text-lg font-semibold">
                <Building className="h-5 w-5" />
                Rent
              </Link>
              <Link href="/mortgage" className="flex items-center gap-2 text-lg font-semibold">
                <Home className="h-5 w-5" />
                Mortgage
              </Link>
              <Link href="/saved" className="flex items-center gap-2 text-lg font-semibold">
                <Heart className="h-5 w-5" />
                Saved
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex items-center gap-2 mr-6">
          <MapPin className="h-6 w-6 text-primary" />
          <span className="hidden font-bold text-xl sm:inline-block">HomeFind</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="/"
            className={cn(
              "transition-colors hover:text-primary",
              url === "/" ? "text-primary font-medium" : "text-muted-foreground",
            )}
          >
            Buy
          </Link>
          <Link
            href="/sell"
            className={cn(
              "transition-colors hover:text-primary",
              url === "/sell" ? "text-primary font-medium" : "text-muted-foreground",
            )}
          >
            Sell
          </Link>
          <Link
            href="/rent"
            className={cn(
              "transition-colors hover:text-primary",
              url === "/rent" ? "text-primary font-medium" : "text-muted-foreground",
            )}
          >
            Rent
          </Link>
          <Link
            href="/mortgage"
            className={cn(
              "transition-colors hover:text-primary",
              url === "/mortgage" ? "text-primary font-medium" : "text-muted-foreground",
            )}
          >
            Mortgage
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="gap-1">
                More <span className="sr-only">More options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/agents">Find a Realtor</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/news">Real Estate News</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/moving">Moving Guide</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center ml-auto gap-2">
          {isSearchOpen ? (
            <div className="relative flex items-center">
              <Input
                type="search"
                placeholder="City, Address, ZIP, Agent..."
                className="w-[200px] md:w-[300px] pr-8"
                autoFocus
              />
              <Button variant="ghost" size="icon" className="absolute right-0" onClick={() => setIsSearchOpen(false)}>
                <X className="h-4 w-4" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <Link href="/saved">
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Saved properties</span>
            </Button>
          </Link>

          <Link href="/account">
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>

          <Link href="/signin" className="hidden md:block">
            <Button variant="outline">Sign In</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}


