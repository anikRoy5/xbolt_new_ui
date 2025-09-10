import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Target, Users, BarChart3, Phone, MessageSquare, CheckCircle, PlayCircle } from "lucide-react";

const Sales = () => {
  const features = [
    {
      icon: Phone,
      title: "Sales Call Intelligence",
      description: "AI-powered call analysis to identify successful conversation patterns and objection handling techniques.",
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Track key sales metrics, conversion rates, and individual rep performance with detailed insights.",
    },
    {
      icon: Target,
      title: "Lead Scoring & Routing",
      description: "Automatically score leads and route them to the best-suited sales representatives.",
    },
    {
      icon: MessageSquare,
      title: "Follow-up Automation",
      description: "Smart messaging sequences that nurture leads and maintain prospect engagement.",
    },
    {
      icon: BarChart3,
      title: "Pipeline Management",
      description: "Visualize your sales pipeline with real-time updates and forecasting capabilities.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share insights, best practices, and collaborate on deals across your sales team.",
    },
  ];

  const benefits = [
    "Increase deal closure rate by 35%",
    "Reduce sales cycle length by 25%",
    "Improve lead qualification accuracy by 40%",
    "Boost rep productivity by 50%",
    "Enhance customer relationship quality",
    "Scale successful sales strategies across teams",
  ];

  const salesMetrics = [
    {
      metric: "35%",
      description: "Increase in Deal Closure Rate",
      detail: "Sales teams using XBolt AI close more deals through better conversation insights",
    },
    {
      metric: "25%",
      description: "Reduction in Sales Cycle",
      detail: "Faster qualification and follow-up processes accelerate deal progression",
    },
    {
      metric: "40%",
      description: "Better Lead Qualification",
      detail: "AI-powered lead scoring improves qualification accuracy and resource allocation",
    },
  ];

  const useCases = [
    {
      title: "Outbound Sales Calls",
      description: "Maximize cold calling success with AI-guided conversation insights and real-time coaching suggestions.",
      features: ["Call script optimization", "Objection handling alerts", "Sentiment analysis", "Success pattern identification"]
    },
    {
      title: "Inbound Lead Management",
      description: "Qualify and convert inbound leads faster with intelligent routing and automated follow-up sequences.",
      features: ["Smart lead scoring", "Automatic routing", "Response time tracking", "Conversion optimization"]
    },
    {
      title: "Customer Relationship Building",
      description: "Strengthen relationships with existing customers through personalized communication and proactive outreach.",
      features: ["Customer health scoring", "Renewal predictions", "Upsell opportunities", "Relationship tracking"]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Supercharge Your
                <span className="block text-blue-200">Sales Team</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Boost performance with AI-powered call analytics, intelligent lead management, 
                and data-driven insights that turn every conversation into revenue opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary">
                  Boost Sales Performance
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  See Success Stories
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-white/10 backdrop-blur border-white/20 p-8">
                <div className="text-center">
                  <TrendingUp className="h-16 w-16 text-white mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">35% More Deals</h3>
                  <p className="text-white/80">Average increase in closure rate</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              AI-Powered Sales Intelligence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your sales process with intelligent tools designed to maximize every opportunity and accelerate revenue growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-lg transition-all duration-300 bg-gradient-card">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Metrics */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Proven Sales Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real metrics from sales teams using XBolt AI to drive performance improvements.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {salesMetrics.map((item, index) => (
              <Card key={index} className="border-0 shadow-card bg-gradient-card text-center p-8">
                <div className="text-5xl font-bold text-primary mb-4">{item.metric}</div>
                <CardTitle className="text-xl mb-4">{item.description}</CardTitle>
                <CardDescription className="text-base">
                  {item.detail}
                </CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Sales Solutions for Every Stage
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From prospecting to closing, XBolt AI provides the intelligence your sales team needs to succeed.
            </p>
          </div>
          
          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">{useCase.title}</h3>
                  <p className="text-lg text-muted-foreground mb-8">{useCase.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {useCase.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="border-0 shadow-card bg-gradient-card p-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">
                        {index === 0 ? '3x' : index === 1 ? '60%' : '25%'}
                      </div>
                      <div className="text-lg text-foreground">
                        {index === 0 ? 'Higher Connection Rate' : index === 1 ? 'Faster Response Time' : 'More Renewals'}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
                Measurable Sales Impact
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-lg text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button size="lg" variant="default">
                  Calculate Your ROI
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="border-0 shadow-card bg-gradient-card p-6 text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">150%</div>
                <div className="text-muted-foreground">ROI in 6 months</div>
              </Card>
              <Card className="border-0 shadow-card bg-gradient-card p-6 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">2.5x</div>
                <div className="text-muted-foreground">Quota Achievement</div>
              </Card>
              <Card className="border-0 shadow-card bg-gradient-card p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">90%</div>
                <div className="text-muted-foreground">Team Adoption</div>
              </Card>
              <Card className="border-0 shadow-card bg-gradient-card p-6 text-center">
                <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">50%</div>
                <div className="text-muted-foreground">More Qualified Leads</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-4xl mx-auto border-0 shadow-xl bg-gradient-card p-12">
            <div className="text-2xl lg:text-3xl italic text-foreground mb-8">
              &quot;XBolt AI transformed our sales process. We&apos;re closing 40% more deals and our team is more confident than ever. The AI insights help us understand what works and replicate success across the entire team.&quot;
            </div>
            <div className="flex items-center justify-center gap-4">
              <div>
                <div className="font-semibold text-foreground">Sarah Mitchell</div>
                <div className="text-muted-foreground">VP of Sales, TechScale Inc.</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Accelerate Your Sales?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of sales teams already using XBolt AI to exceed their quotas and drive revenue growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Book Sales Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sales;