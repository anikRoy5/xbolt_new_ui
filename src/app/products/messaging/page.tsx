import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, Zap, Search, Bot, Shield, CheckCircle, PlayCircle } from "lucide-react";

const Messaging = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Smart Messaging",
      description: "Send and receive SMS/MMS with intelligent conversation threading and organization.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share conversations across team members with role-based access and permissions.",
    },
    {
      icon: Zap,
      title: "Automated Responses",
      description: "Set up intelligent auto-responses and message routing based on keywords and context.",
    },
    {
      icon: Search,
      title: "Advanced Search",
      description: "Find any message instantly with powerful search across all conversations and contacts.",
    },
    {
      icon: Bot,
      title: "AI Assistance",
      description: "Get smart suggestions for responses and automatic sentiment analysis.",
    },
    {
      icon: Shield,
      title: "Secure Messaging",
      description: "Enterprise-grade security with message encryption and compliance features.",
    },
  ];

  const integrations = [
    "Salesforce", "HubSpot", "Slack", "Microsoft Teams", "Zendesk", 
    "Intercom", "Pipedrive", "Monday.com", "Zapier", "API Access"
  ];

  const messageTypes = [
    {
      type: "SMS",
      description: "Standard text messaging with delivery tracking and read receipts.",
      limit: "160 characters per message",
    },
    {
      type: "MMS",
      description: "Rich media messaging with images, videos, and file attachments.",
      limit: "Up to 5MB per message",
    },
    {
      type: "Rich Business Messaging",
      description: "Interactive messages with buttons, carousels, and rich content.",
      limit: "Enhanced engagement features",
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
                Smart Messaging
                <span className="block text-blue-200">Platform</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Streamline your business communications with intelligent SMS/MMS messaging, 
                conversation management, and AI-powered insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary">
                  Start Messaging
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  View Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-white/10 backdrop-blur border-white/20 p-8">
                <div className="text-center">
                  <MessageSquare className="h-16 w-16 text-white mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">99.9% Delivery</h3>
                  <p className="text-white/80">Guaranteed message delivery worldwide</p>
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
              Advanced Messaging Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for professional business messaging, from basic SMS to advanced AI-powered conversations.
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

      {/* Message Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Flexible Message Types
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Support for all modern messaging formats to meet your communication needs.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {messageTypes.map((msgType, index) => (
              <Card key={index} className="border-0 shadow-card bg-gradient-card">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{msgType.type}</CardTitle>
                  <div className="text-primary font-semibold">{msgType.limit}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-center">
                    {msgType.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with your existing tools and workflows for a unified communication experience.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-card bg-gradient-card p-8">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {integrations.map((integration, index) => (
                  <div key={index} className="text-center p-4 bg-primary/5 rounded-lg">
                    <span className="text-sm font-medium text-foreground">{integration}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button variant="outline">View All Integrations</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits & Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
                Messaging That Drives Results
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">98% Open Rate</h3>
                    <p className="text-muted-foreground">SMS messages have significantly higher open rates than email.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">5-Second Response Time</h3>
                    <p className="text-muted-foreground">Average response time for SMS is under 5 seconds.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Global Reach</h3>
                    <p className="text-muted-foreground">Send messages to 200+ countries with local number support.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Smart Automation</h3>
                    <p className="text-muted-foreground">Reduce manual work with intelligent message routing and responses.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="border-0 shadow-card bg-gradient-card p-6 text-center">
                <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">10B+</div>
                <div className="text-muted-foreground">Messages Delivered</div>
              </Card>
              <Card className="border-0 shadow-card bg-gradient-card p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Delivery Rate</div>
              </Card>
              <Card className="border-0 shadow-card bg-gradient-card p-6 text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">&lt;1s</div>
                <div className="text-muted-foreground">Avg. Send Time</div>
              </Card>
              <Card className="border-0 shadow-card bg-gradient-card p-6 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Countries</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Perfect for Every Business Need
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-card bg-gradient-card text-center p-8">
              <Users className="h-16 w-16 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl mb-4">Customer Support</CardTitle>
              <CardDescription>
                Provide instant support through SMS with conversation history and team collaboration features.
              </CardDescription>
            </Card>
            <Card className="border-0 shadow-card bg-gradient-card text-center p-8">
              <Zap className="h-16 w-16 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl mb-4">Sales & Marketing</CardTitle>
              <CardDescription>
                Engage prospects and customers with targeted messaging campaigns and follow-up sequences.
              </CardDescription>
            </Card>
            <Card className="border-0 shadow-card bg-gradient-card text-center p-8">
              <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl mb-4">Notifications & Alerts</CardTitle>
              <CardDescription>
                Send important updates, reminders, and alerts to customers and team members instantly.
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Start Messaging Smarter Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transform your business communication with intelligent messaging that delivers results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Messaging;