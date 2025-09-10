import { TrendingUp, HeadphonesIcon, Heart, ShoppingCart, Briefcase } from "lucide-react";
import { Button } from "./ui/button";

const useCases = [
  {
    icon: TrendingUp,
    title: "Sales Teams",
    description: "AI coaches reps in real-time, auto-logs to CRM, and qualifies leads 24/7",
    stats: "40% higher close rate",
    gradient: "from-primary to-neon-cyan",
  },
  {
    icon: HeadphonesIcon,
    title: "Support Desks",
    description: "AI triages tickets, handles password resets, and escalates complex issues",
    stats: "60% cost reduction",
    gradient: "from-accent to-neon-violet",
  },
  {
    icon: Heart,
    title: "Healthcare SMBs",
    description: "HIPAA-compliant call notes, appointment scheduling, and prescription reminders",
    stats: "70% less admin time",
    gradient: "from-neon-green to-primary",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description: "Post-purchase follow-ups, order tracking, and proactive customer outreach",
    stats: "3x customer satisfaction",
    gradient: "from-neon-violet to-accent",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Voice concierge, intelligent scheduling, and client intake automation",
    stats: "50% more billable hours",
    gradient: "from-primary to-accent",
  },
];

export default function UseCases() {
  return (
    <section className="relative py-20 overflow-hidden"> {/* ✅ scrollbar fixed */}
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-6xl font-display font-bold">
            Built for{" "}
            <span className="bg-gradient-neon bg-clip-text text-transparent">
              Every Industry
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From startups to enterprises, X-Bolt.ai adapts to your unique business needs
          </p>
        </div>

        {/* Use cases list */}
        <div className="space-y-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative glass rounded-2xl p-8 hover:scale-[1.02] transition-all duration-500 overflow-hidden" // ✅ added overflow-hidden here too
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${useCase.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
              />

              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${useCase.gradient}`}
                  >
                    <useCase.icon className="w-8 h-8 text-background" />
                  </div>
                  <h3 className="text-2xl font-semibold">{useCase.title}</h3>
                  <p className="text-muted-foreground">{useCase.description}</p>
                  <div className="flex items-center gap-4">
                    <span
                      className="text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent"
                      style={{
                        backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                      }}
                    >
                      {useCase.stats}
                    </span>
                  </div>
                </div>

                {/* Visual representation */}
                <div className="relative h-48 overflow-hidden"> {/* ✅ fixed overflow */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Animated workflow visualization */}
                    <div className="relative w-full h-full">
                      {/* Central node */}
                      <div
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br ${useCase.gradient} flex items-center justify-center animate-pulse-neon`}
                      >
                        <useCase.icon className="w-10 h-10 text-background" />
                      </div>

                      {/* Orbiting nodes */}
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="absolute top-1/2 left-1/2 w-full h-full"
                          style={{
                            animation: `orbit ${10 + i * 2}s linear infinite`,
                            animationDelay: `${i * 2}s`,
                          }}
                        >
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white/50 rounded-full" />
                        </div>
                      ))}

                      {/* Connection lines */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <circle
                          cx="50%"
                          cy="50%"
                          r="60"
                          fill="none"
                          stroke="url(#gradient)"
                          strokeWidth="1"
                          strokeDasharray="5 5"
                          opacity="0.3"
                        />
                        <defs>
                          <linearGradient
                            id="gradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop offset="0%" stopColor="hsl(var(--primary))" />
                            <stop
                              offset="100%"
                              stopColor="hsl(var(--accent))"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" variant="navbar-primary">
            See Your Industry Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
