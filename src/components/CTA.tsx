import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-animated-gradient opacity-10" />
      
      {/* Floating orbs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-radial from-primary/30 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-radial from-accent/30 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="card-holographic rounded-3xl p-12 md:p-20 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary animate-pulse-neon" />
              <span className="text-sm">Limited Time: 3 Months Free for Early Adopters</span>
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl lg:text-6xl font-display font-bold">
              Ready to <span className="bg-gradient-holographic bg-clip-text text-transparent">Transform Your Calls?</span>
            </h2>
            
            {/* Description */}
            <p className="text-xl text-muted-foreground">
              Join 500+ businesses already using AI agents to handle calls, close deals, and delight customers.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="navbar-accent" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="navbar-primary">
                Schedule Demo
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Setup in 5 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}