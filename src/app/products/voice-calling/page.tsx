import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mic, Settings, Users, Shield, Zap, CheckCircle, PlayCircle } from "lucide-react";

const VoiceCalling = () => {
  const features = [
    {
      icon: Phone,
      title: "Crystal Clear Audio",
      description: "High-definition voice quality with advanced noise cancellation and echo reduction technology.",
    },
    {
      icon: Mic,
      title: "Smart Call Recording", 
      description: "Automatic call recording with intelligent indexing and easy search capabilities.",
    },
    {
      icon: Settings,
      title: "Advanced Controls",
      description: "Comprehensive call controls including mute, hold, transfer, and conference features.",
    },
    {
      icon: Users,
      title: "Conference Calling",
      description: "Host meetings with up to 100 participants with seamless audio management.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "End-to-end encryption and compliance with industry security standards.",
    },
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Live call metrics, quality monitoring, and performance insights.",
    },
  ];

  const benefits = [
    "Reduce call setup time by 80%",
    "Improve call quality and reliability", 
    "Enable seamless team collaboration",
    "Ensure regulatory compliance",
    "Scale globally with local numbers",
    "Integrate with existing workflows",
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Real-time Voice Calling
                <span className="block text-blue-200">System</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Professional-grade voice calling with crystal-clear audio, advanced controls, 
                and intelligent recording capabilities designed for modern businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary">
                  Start Free Trial
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
                  <Phone className="h-16 w-16 text-white mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">99.99% Uptime</h3>
                  <p className="text-white/80">Enterprise-grade reliability</p>
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
              Powerful Voice Calling Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for professional voice communication, from basic calls 
              to advanced conference management.
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

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
                Transform Your Business Communication
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our voice calling system is trusted by thousands of organizations worldwide 
                to deliver reliable, high-quality communication experiences.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-lg text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="border-0 shadow-card bg-gradient-card p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">50ms</div>
                <div className="text-muted-foreground">Average Latency</div>
              </Card>
              <Card className="border-0 shadow-card bg-gradient-card p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">100</div>
                <div className="text-muted-foreground">Max Participants</div>
              </Card>
              <Card className="border-0 shadow-card bg-gradient-card p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">180+</div>
                <div className="text-muted-foreground">Countries</div>
              </Card>
              <Card className="border-0 shadow-card bg-gradient-card p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-foreground">
            Technical Specifications
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-card bg-gradient-card">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Audio Quality</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• HD audio up to 48kHz sampling rate</li>
                      <li>• Advanced noise cancellation</li>
                      <li>• Echo reduction algorithms</li>
                      <li>• Adaptive bitrate optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Security & Compliance</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• End-to-end AES-256 encryption</li>
                      <li>• HIPAA & SOC 2 compliant</li>
                      <li>• GDPR data protection</li>
                      <li>• Regular security audits</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Integration</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• REST API & WebRTC support</li>
                      <li>• CRM integrations available</li>
                      <li>• Webhook notifications</li>
                      <li>• Custom branding options</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Performance</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 99.99% uptime guarantee</li>
                      <li>• Global CDN infrastructure</li>
                      <li>• Auto-scaling capabilities</li>
                      <li>• Real-time monitoring</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Upgrade Your Calling System?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of organizations using XBolt AI for reliable, high-quality voice communication.
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

export default VoiceCalling;