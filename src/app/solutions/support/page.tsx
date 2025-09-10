import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Headphones, Clock, Heart, MessageSquare, TrendingDown, Zap, CheckCircle, PlayCircle } from "lucide-react";

const Support = () => {
  const features = [
    {
      icon: Headphones,
      title: "Smart Call Routing",
      description: "Automatically route calls to the right agent based on expertise, availability, and customer context.",
    },
    {
      icon: MessageSquare,
      title: "Conversation Intelligence",
      description: "AI-powered transcription and sentiment analysis to understand customer emotions and needs.",
    },
    {
      icon: Clock,
      title: "Response Time Optimization",
      description: "Track and optimize response times with intelligent queue management and agent alerts.",
    },
    {
      icon: Heart,
      title: "Customer Satisfaction Tracking",
      description: "Monitor satisfaction scores and identify areas for improvement in real-time.",
    },
    {
      icon: TrendingDown,
      title: "Issue Resolution Analytics",
      description: "Analyze resolution patterns to identify common problems and optimize solutions.",
    },
    {
      icon: Zap,
      title: "Automated Follow-ups",
      description: "Ensure customer satisfaction with smart follow-up messaging and feedback collection.",
    },
  ];

  const supportMetrics = [
    {
      metric: "40%",
      description: "Faster Resolution Time",
      detail: "AI-powered insights help agents resolve issues more quickly and effectively",
    },
    {
      metric: "25%", 
      description: "Higher CSAT Scores",
      detail: "Better understanding of customer sentiment leads to improved satisfaction",
    },
    {
      metric: "60%",
      description: "Reduction in Escalations",
      detail: "Proactive issue identification and smart routing minimize escalations",
    },
  ];

  const benefits = [
    "Reduce average handle time by 40%",
    "Increase first-call resolution by 35%", 
    "Improve customer satisfaction by 25%",
    "Decrease agent training time by 50%",
    "Enhance team productivity and morale",
    "Scale support operations efficiently",
  ];

  const useCases = [
    {
      title: "Technical Support",
      description: "Help customers resolve technical issues faster with AI-guided troubleshooting and knowledge base integration.",
      icon: Zap,
    },
    {
      title: "Customer Service", 
      description: "Deliver exceptional customer experiences with sentiment analysis and personalized interaction insights.",
      icon: Heart,
    },
    {
      title: "Complaint Resolution",
      description: "Turn dissatisfied customers into advocates with intelligent escalation and proactive resolution tracking.",
      icon: TrendingDown,
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
                Elevate Customer
                <span className="block text-blue-200">Support Excellence</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Transform your customer support with AI-powered insights, intelligent routing, 
                and conversation analytics that help your team deliver exceptional experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary">
                  Improve Support Now
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-white/10 backdrop-blur border-white/20 p-8">
                <div className="text-center">
                  <Heart className="h-16 w-16 text-white mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">4.8/5 CSAT</h3>
                  <p className="text-white/80">Average customer satisfaction</p>
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
              AI-Enhanced Support Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empower your support team with intelligent tools that understand customer needs and streamline resolution processes.
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

      {/* Support Metrics */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Measurable Support Improvements
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from support teams using XBolt AI to enhance customer experiences.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {supportMetrics.map((item, index) => (
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
              Support Solutions for Every Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From technical troubleshooting to complaint resolution, XBolt AI adapts to your support challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-0 shadow-card bg-gradient-card text-center p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-4">{useCase.title}</CardTitle>
                <CardDescription className="text-base">
                  {useCase.description}
                </CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
                Empower Your Support Team
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
                  See Agent Tools
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="border-0 shadow-card bg-gradient-card p-6 text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">2.5min</div>
                <div className="text-muted-foreground">Avg Handle Time</div>
              </Card>
              <Card className="border-0 shadow-card bg-gradient-card p-6 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">First Call Resolution</div>
              </Card>
              <Card className="border-0 shadow-card bg-gradient-card p-6 text-center">
                <Headphones className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                <div className="text-muted-foreground">Agent Satisfaction</div>
              </Card>
              <Card className="border-0 shadow-card bg-gradient-card p-6 text-center">
                <TrendingDown className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">75%</div>
                <div className="text-muted-foreground">Less Burnout</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Intelligent Support Features
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Real-time Sentiment Analysis</h3>
                  <p className="text-muted-foreground">Detect customer emotions during calls and provide agents with instant guidance on how to respond appropriately.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Smart Knowledge Suggestions</h3>
                  <p className="text-muted-foreground">AI automatically suggests relevant articles, solutions, and responses based on conversation context.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Predictive Issue Detection</h3>
                  <p className="text-muted-foreground">Identify potential escalations before they happen and proactively address customer concerns.</p>
                </div>
              </div>
            </div>
            
            <Card className="border-0 shadow-xl bg-gradient-card p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Support Intelligence Dashboard</h3>
                <p className="text-muted-foreground">Real-time insights for support managers</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                  <span className="text-foreground">Queue Wait Time</span>
                  <span className="text-primary font-bold">1.2 min</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                  <span className="text-foreground">Customer Satisfaction</span>
                  <span className="text-primary font-bold">4.8/5</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                  <span className="text-foreground">Resolution Rate</span>
                  <span className="text-primary font-bold">94%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-4xl mx-auto border-0 shadow-xl bg-gradient-card p-12">
            <div className="text-2xl lg:text-3xl italic text-foreground mb-8">
              &quot;XBolt AI revolutionized our customer support. Our agents are more confident, customers are happier, and we&apos;ve reduced escalations by 60%. The AI insights help us understand what our customers really need.&quot;
            </div>
            <div className="flex items-center justify-center gap-4">
              <div>
                <div className="font-semibold text-foreground">Marcus Johnson</div>
                <div className="text-muted-foreground">Head of Customer Success, ServicePro</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Transform Your Customer Support Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join support teams worldwide who are delivering exceptional customer experiences with XBolt AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;