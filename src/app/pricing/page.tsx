import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, X, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "per user/month",
      description: "Perfect for small teams getting started with AI communication.",
      features: [
        "Up to 500 minutes of calls per month",
        "Basic AI transcription",
        "SMS messaging (1,000 messages)",
        "Basic analytics dashboard",
        "Email support",
        "2 phone numbers included",
      ],
      notIncluded: [
        "Advanced AI insights",
        "Call recording",
        "Priority support",
        "Custom integrations",
      ],
      popular: false,
    },
    {
      name: "Professional", 
      price: "$79",
      period: "per user/month",
      description: "Advanced features for growing teams that need more power.",
      features: [
        "Unlimited calls and messages",
        "Advanced AI transcription & notes",
        "Call recording & analytics",
        "Sentiment analysis",
        "Priority support",
        "5 phone numbers included",
        "API access",
        "Custom integrations",
      ],
      notIncluded: [
        "White-label options",
        "Dedicated account manager",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description: "Tailored solutions for large organizations with custom needs.",
      features: [
        "Everything in Professional",
        "Unlimited phone numbers",
        "White-label options",
        "Dedicated account manager",
        "Custom AI model training",
        "Advanced security & compliance",
        "On-premise deployment options",
        "24/7 premium support",
      ],
      notIncluded: [],
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.",
    },
    {
      question: "What happens to my data if I cancel?",
      answer: "Your data is retained for 30 days after cancellation, giving you time to export or reactivate your account.",
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer: "Yes, we offer 20% discount when you pay annually. Contact sales for volume discounts on 50+ users.",
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees for any plan. We provide free onboarding and setup assistance for all customers.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your team. Start with our free trial and upgrade as you grow.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-6 py-3">
            <Zap className="h-5 w-5 text-yellow-300" />
            <span>14-day free trial on all plans</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative border-0 shadow-card hover:shadow-xl transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-primary text-white scale-105' 
                    : 'bg-gradient-card'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className={`text-2xl ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-foreground'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg ${plan.popular ? 'text-white/80' : 'text-muted-foreground'} ml-2`}>
                      {plan.period}
                    </span>
                  </div>
                  <CardDescription className={`mt-4 ${plan.popular ? 'text-white/90' : 'text-muted-foreground'}`}>
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className={`h-5 w-5 flex-shrink-0 ${plan.popular ? 'text-green-300' : 'text-primary'}`} />
                        <span className={`${plan.popular ? 'text-white' : 'text-foreground'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 opacity-60">
                        <X className={`h-5 w-5 flex-shrink-0 ${plan.popular ? 'text-white/50' : 'text-muted-foreground'}`} />
                        <span className={`${plan.popular ? 'text-white/70' : 'text-muted-foreground'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full" 
                    size="lg"
                    variant={plan.popular ? "secondary" : "default"}
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
            Compare All Features
          </h2>
          <div className="max-w-4xl mx-auto bg-card rounded-xl shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold">Features</th>
                    <th className="text-center p-4 font-semibold">Starter</th>
                    <th className="text-center p-4 font-semibold">Professional</th>
                    <th className="text-center p-4 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Call Minutes", "500/month", "Unlimited", "Unlimited"],
                    ["Phone Numbers", "2", "5", "Unlimited"],
                    ["AI Transcription", "Basic", "Advanced", "Advanced + Custom"],
                    ["Call Recording", "❌", "✅", "✅"],
                    ["Analytics Dashboard", "Basic", "Advanced", "Advanced + Custom"],
                    ["API Access", "❌", "✅", "✅"],
                    ["Priority Support", "❌", "✅", "24/7 Premium"],
                    ["Custom Integrations", "❌", "✅", "✅"],
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-muted">
                      <td className="p-4 font-medium">{row[0]}</td>
                      <td className="p-4 text-center">{row[1]}</td>
                      <td className="p-4 text-center">{row[2]}</td>
                      <td className="p-4 text-center">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-card bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-xl">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your free trial today. No credit card required, cancel anytime.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4 h-auto">
            Start Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;