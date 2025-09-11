import { Check, Sparkles, Zap, Rocket } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/libs/utils";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for testing the waters",
    icon: Sparkles,
    features: [
      "1 AI Agent",
      "200 minutes/month",
      "Basic transcription",
      "Email support",
      "Standard voice",
    ],
    cta: "Start Free",
    variant: "glass" as const,
    popular: false,
  },
  {
    name: "Growth",
    price: "$49",
    period: "/month",
    description: "For growing teams",
    icon: Zap,
    features: [
      "5 AI Agents",
      "2,000 minutes/month",
      "AI summaries & insights",
      "CRM integration",
      "Priority support",
      "Custom voices",
      "Real-time coaching",
    ],
    cta: "Start Trial",
    variant: "neon" as const,
    popular: true,
  },
  {
    name: "Scale",
    price: "$99",
    period: "/seat/month",
    description: "For serious businesses",
    icon: Rocket,
    features: [
      "Unlimited AI Agents",
      "10,000 minutes/month",
      "Advanced IVR",
      "Multi-agent orchestration",
      "Custom integrations",
      "Dedicated success manager",
      "SLA guarantee",
      "Compliance suite",
    ],
    cta: "Contact Sales",
    variant: "holographic" as const,
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-6xl font-display font-bold">
            <span className="bg-gradient-holographic bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "relative group",
                plan.popular && "md:scale-105 bg-accent"
              )}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="px-4 py-1 rounded-full bg-gradient-holographic text-background text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              {/* Card */}
              <div className={cn(
                "relative h-full rounded-2xl p-8 transition-all duration-500",
                plan.popular ? "card-holographic" : "glass",
                "hover:scale-[1.02] hover:shadow-2xl"
              )}>
                {/* Glow effect for popular plan */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent rounded-2xl blur-xl" />
                )}
                
                <div className="relative space-y-6">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className={cn(
                      "inline-flex p-3 rounded-xl",
                      plan.popular ? "bg-gradient-holographic" : "bg-gradient-to-br from-primary/20 to-accent/20"
                    )}>
                      <plan.icon className="w-6 h-6 text-foreground" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                      <p className="text-muted-foreground mt-1">{plan.description}</p>
                    </div>
                    
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className={cn(
                          "w-5 h-5 mt-0.5 shrink-0",
                          plan.popular ? "text-primary" : "text-muted-foreground"
                        )} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA */}
                  <Button 
                    className="w-full bg-primary" 
                    size="lg" 
                    
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Need more? Add these to any plan:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["SMS Integration", "WhatsApp", "Advanced Compliance AI", "Custom Training"].map((addon) => (
              <div key={addon} className="px-4 py-2 rounded-full glass border border-primary/20 text-sm">
                {addon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}