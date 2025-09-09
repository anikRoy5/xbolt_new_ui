import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Brain, FileText, Search, TrendingUp, Shield, CheckCircle, PlayCircle } from "lucide-react";

const AITranscription = () => {
  const features = [
    {
      icon: Zap,
      title: "Real-time Transcription",
      description: "Instant, accurate transcription of live calls with 99%+ accuracy across multiple languages.",
    },
    {
      icon: Brain,
      title: "Smart AI Notes",
      description: "Automatically extract key points, action items, and important decisions from conversations.",
    },
    {
      icon: FileText,
      title: "Intelligent Summaries",
      description: "Generate concise, actionable summaries that capture the essence of each call.",
    },
    {
      icon: Search,
      title: "Advanced Search",
      description: "Search through all transcripts using keywords, topics, or speaker identification.",
    },
    {
      icon: TrendingUp,
      title: "Sentiment Analysis",
      description: "Understand conversation tone, emotions, and customer satisfaction levels.",
    },
    {
      icon: Shield,
      title: "Data Privacy",
      description: "Enterprise-grade security with encryption and compliance certifications.",
    },
  ];

  const languages = [
    "English", "Spanish", "French", "German", "Italian", "Portuguese", 
    "Japanese", "Korean", "Mandarin", "Arabic", "Dutch", "Russian"
  ];

  const useCases = [
    {
      title: "Sales Calls",
      description: "Extract key insights, track customer objections, and identify follow-up opportunities.",
      metrics: "35% increase in deal closure rate",
    },
    {
      title: "Customer Support",
      description: "Monitor service quality, identify common issues, and improve response times.",
      metrics: "40% reduction in resolution time",
    },
    {
      title: "Team Meetings",
      description: "Capture decisions, action items, and ensure nothing important is missed.",
      metrics: "50% improvement in follow-through",
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
                AI Transcription &
                <span className="block text-blue-200">Smart Notes</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Transform every conversation into valuable insights with industry-leading AI transcription, 
                intelligent notes, and automated summaries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary">
                  Try AI Transcription
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  See Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-white/10 backdrop-blur border-white/20 p-8">
                <div className="text-center">
                  <Brain className="h-16 w-16 text-white mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">99%+ Accuracy</h3>
                  <p className="text-white/80">Industry-leading transcription quality</p>
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
              Advanced AI-Powered Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Leverage cutting-edge AI technology to extract maximum value from every conversation.
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

      {/* Language Support */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Multi-Language Support
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Accurate transcription and AI analysis across 50+ languages and dialects.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-card bg-gradient-card p-8">
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {languages.map((language, index) => (
                  <div key={index} className="text-center p-3 bg-primary/5 rounded-lg">
                    <span className="text-sm font-medium text-foreground">{language}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <Button variant="outline">View All Languages</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Real-World Applications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how organizations across industries use AI transcription to drive results.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-0 shadow-card bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                  <div className="text-primary font-semibold">{useCase.metrics}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {useCase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
                Powered by Advanced AI Technology
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Speaker Identification</h3>
                    <p className="text-muted-foreground">Automatically identify and separate different speakers in conversations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Topic Detection</h3>
                    <p className="text-muted-foreground">Identify key topics and themes discussed during calls.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Action Item Extraction</h3>
                    <p className="text-muted-foreground">Automatically extract tasks, commitments, and follow-up items.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Custom Models</h3>
                    <p className="text-muted-foreground">Train AI models on your industry-specific terminology and context.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="border-0 shadow-card bg-gradient-card p-6 text-center">
                <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">99%</div>
                <div className="text-muted-foreground">Accuracy Rate</div>
              </Card>
              <Card className="border-0 shadow-card bg-gradient-card p-6 text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">&lt;2s</div>
                <div className="text-muted-foreground">Processing Time</div>
              </Card>
              <Card className="border-0 shadow-card bg-gradient-card p-6 text-center">
                <Search className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Languages</div>
              </Card>
              <Card className="border-0 shadow-card bg-gradient-card p-6 text-center">
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">100M+</div>
                <div className="text-muted-foreground">Words Processed</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Transform Every Conversation into Insights
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start leveraging AI-powered transcription and notes to unlock the hidden value in your conversations.
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

export default AITranscription;