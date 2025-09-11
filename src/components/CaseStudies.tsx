import { ArrowUpRight, TrendingUp, Clock, DollarSign } from "lucide-react";

const caseStudies = [
  {
    company: "TechStart SaaS",
    industry: "Software",
    logo: "TS",
    metric: "40%",
    metricLabel: "Sales Increase",
    description: "Automated lead qualification and 24/7 demo scheduling",
    icon: TrendingUp,
    gradient: "from-primary to-neon-cyan",
    testimonial: "X-Bolt's AI agents closed deals while we slept. Game changer.",
    author: "Sarah Chen, VP Sales",
  },
  {
    company: "RetailFlow",
    industry: "E-commerce",
    logo: "RF",
    metric: "60%",
    metricLabel: "Cost Reduction",
    description: "AI-powered customer support handling returns and tracking",
    icon: DollarSign,
    gradient: "from-green-500 to-neon-cyan",
    testimonial: "We cut support costs in half while improving CSAT scores.",
    author: "Mike Johnson, COO",
  },
  {
    company: "MedClinic Plus",
    industry: "Healthcare",
    logo: "M+",
    metric: "70%",
    metricLabel: "Time Saved",
    description: "Automated appointment scheduling and prescription reminders",
    icon: Clock,
    gradient: "from-blue-500 to-primary",
    testimonial: "Our staff can focus on patients, not phone calls.",
    author: "Dr. Emily Rodriguez",
  },
];

export default function CaseStudies() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-6xl font-display font-bold">
            <span className="bg-gradient-neon bg-clip-text text-accent ">Real Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how SMBs are transforming their operations with X-Bolt.ai
          </p>
        </div>

        {/* Case study cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full glass rounded-2xl p-8 hover:scale-[1.02] transition-all duration-500">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />

                <div className="relative space-y-6">
                  {/* Company header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${study.gradient} flex items-center justify-center font-bold text-background`}>
                        {study.logo}
                      </div>
                      <div>
                        <h3 className="font-semibold">{study.company}</h3>
                        <p className="text-sm text-muted-foreground">{study.industry}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  {/* Metric highlight */}
                  <div className="py-6 border-y border-border/50">
                    <div className="flex items-center gap-3">
                      <study.icon className="w-8 h-8 text-primary" />
                      <div>
                        <p className={`text-4xl font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                          {study.metric}
                        </p>
                        <p className="text-sm text-muted-foreground">{study.metricLabel}</p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground">{study.description}</p>

                  {/* Testimonial */}
                  <blockquote className="space-y-2">
                    <p className="text-sm italic">&quot;{study.testimonial}&quot;</p>
                    <p className="text-xs text-muted-foreground">— {study.author}</p>
                  </blockquote>

                  {/* Visual metric bars */}
                  <div className="space-y-2">
                    <div className="h-2 bg-gradient-to-r from-card to-card/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${study.gradient} rounded-full transition-all duration-1000`}
                        style={{ width: study.metric }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success metrics summary */}
        <div className="mt-16 glass rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-primary text-glow-blue">500+</p>
              <p className="text-sm text-muted-foreground mt-1">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent text-glow-violet">10M+</p>
              <p className="text-sm text-muted-foreground mt-1">Calls Handled</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-neon-green text-glow-green">99.9%</p>
              <p className="text-sm text-muted-foreground mt-1">Uptime SLA</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-neon-cyan">4.9/5</p>
              <p className="text-sm text-muted-foreground mt-1">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}