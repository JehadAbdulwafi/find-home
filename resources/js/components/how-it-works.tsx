import { Search, Home, Key } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: <Search className="h-10 w-10" />,
      title: "Search Properties",
      description: "Browse thousands of listings using our advanced search filters to find your perfect home.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: <Home className="h-10 w-10" />,
      title: "Tour Homes",
      description: "Schedule viewings online or through our app. Virtual tours are also available for many properties.",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: <Key className="h-10 w-10" />,
      title: "Close the Deal",
      description: "Our agents will guide you through the entire buying process, from offer to closing.",
      color: "bg-amber-50 text-amber-600",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Finding your dream home has never been easier
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className={`${step.color} p-4 rounded-full mb-4`}>{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              <div className="mt-4 text-2xl font-bold text-primary">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

