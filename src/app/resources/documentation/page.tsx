import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code, Zap, Users, Search, Download, ExternalLink } from "lucide-react";

const Documentation = () => {
  const docSections = [
    {
      icon: Zap,
      title: "Quick Start Guide",
      description: "Get up and running with XBolt AI in minutes",
      items: [
        "Account setup and configuration",
        "First phone number purchase",
        "Making your first call",
        "Setting up messaging",
        "Basic analytics overview"
      ],
      time: "5 min read"
    },
    {
      icon: Code,
      title: "Developer Resources",
      description: "Technical documentation for integrations",
      items: [
        "REST API reference",
        "Webhook configuration",
        "SDK documentation",
        "Code examples and snippets",
        "Authentication guide"
      ],
      time: "Technical"
    },
    {
      icon: Users,
      title: "User Guides",
      description: "Comprehensive guides for all user types",
      items: [
        "Admin dashboard walkthrough",
        "User management best practices",
        "Call handling procedures",
        "Message template creation",
        "Analytics interpretation"
      ],
      time: "15 min read"
    },
    {
      icon: BookOpen,
      title: "Feature Documentation",
      description: "Detailed documentation for all features",
      items: [
        "Voice calling system",
        "AI transcription and notes",
        "Messaging platform",
        "Analytics dashboard",
        "Integrations and workflows"
      ],
      time: "Comprehensive"
    }
  ];

  const popularArticles = [
    {
      title: "Getting Started with XBolt AI",
      description: "Complete setup guide from account creation to first call",
      category: "Getting Started",
      readTime: "8 min"
    },
    {
      title: "API Authentication and Security",
      description: "How to securely authenticate with XBolt AI APIs",
      category: "Developer",
      readTime: "12 min"
    },
    {
      title: "Setting Up Call Recording and Transcription",
      description: "Configure automated recording and AI transcription",
      category: "Features",
      readTime: "6 min"
    },
    {
      title: "Analytics Dashboard Deep Dive",
      description: "Understanding metrics and insights in your dashboard",
      category: "Analytics",
      readTime: "15 min"
    },
    {
      title: "Troubleshooting Common Issues",
      description: "Solutions to frequently encountered problems",
      category: "Support",
      readTime: "10 min"
    },
    {
      title: "Webhook Integration Guide",
      description: "Integrate XBolt AI with your existing systems",
      category: "Developer",
      readTime: "18 min"
    }
  ];

  const resources = [
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides for visual learners",
      icon: "🎥"
    },
    {
      title: "Code Examples",
      description: "Ready-to-use code snippets and sample applications", 
      icon: "💻"
    },
    {
      title: "Best Practices",
      description: "Industry best practices and optimization tips",
      icon: "⭐"
    },
    {
      title: "Changelog",
      description: "Latest updates, features, and improvements",
      icon: "📋"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Documentation & Guides
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Everything you need to get the most out of XBolt AI. From quick start guides 
            to comprehensive API documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <BookOpen className="mr-2 h-5 w-5" />
              Browse Documentation
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Search className="mr-2 h-5 w-5" />
              Search Docs
            </Button>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Documentation Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find the right documentation for your needs, whether you&apos;re just getting started or building advanced integrations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {docSections.map((section, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-lg transition-all duration-300 bg-gradient-card">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <section.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{section.title}</CardTitle>
                      <div className="text-sm text-primary">{section.time}</div>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {section.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant="outline">
                    Browse {section.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Popular Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Most viewed and helpful documentation articles.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-lg transition-all duration-300 bg-gradient-card cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription>
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full justify-between">
                    Read Article
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Additional Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore more ways to learn and get the most out of XBolt AI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-lg transition-all duration-300 bg-gradient-card text-center p-8 cursor-pointer">
                <div className="text-4xl mb-4">{resource.icon}</div>
                <CardTitle className="text-lg mb-3">{resource.title}</CardTitle>
                <CardDescription className="text-sm">
                  {resource.description}
                </CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Downloads & Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Download helpful resources to get started faster.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-card bg-gradient-card text-center p-8">
              <Download className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg mb-3">Setup Checklist</CardTitle>
              <CardDescription className="mb-6">
                Step-by-step checklist for account setup
              </CardDescription>
              <Button variant="outline" className="w-full">
                Download PDF
              </Button>
            </Card>
            
            <Card className="border-0 shadow-card bg-gradient-card text-center p-8">
              <Code className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg mb-3">SDK Package</CardTitle>
              <CardDescription className="mb-6">
                Official SDKs for popular programming languages
              </CardDescription>
              <Button variant="outline" className="w-full">
                Download SDK
              </Button>
            </Card>
            
            <Card className="border-0 shadow-card bg-gradient-card text-center p-8">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg mb-3">User Manual</CardTitle>
              <CardDescription className="mb-6">
                Complete user manual in PDF format
              </CardDescription>
              <Button variant="outline" className="w-full">
                Download Manual
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Can&apos;t find what you&apos;re looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Contact Support
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Join Community
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;