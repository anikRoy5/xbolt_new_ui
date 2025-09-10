import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, Settings, Shield, BarChart3, Zap, CheckCircle, PlayCircle } from "lucide-react";

const Organization = () => {
  const features = [
    {
      icon: Users,
      title: "Centralized User Management",
      description: "Manage all users, roles, and permissions from a single dashboard with automated provisioning.",
    },
    {
      icon: Settings,
      title: "Administrative Controls",
      description: "Configure organization-wide settings, policies, and communication preferences with ease.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with SSO, audit logs, and compliance certifications.",
    },
    {
      icon: BarChart3,
      title: "Organization Analytics",
      description: "Comprehensive insights into communication patterns, usage, and team productivity.",
    },
    {
      icon: Building2,
      title: "Department Management",
      description: "Organize teams by departments with custom hierarchies and reporting structures.",
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Streamline processes with automated user onboarding, role assignments, and notifications.",
    },
  ];

  const managementFeatures = [
    {
      category: "User Administration",
      items: [
        "Bulk user import and export",
        "Role-based access control (RBAC)",
        "Automated user provisioning",
        "Custom user attributes",
        "Directory integration (AD/LDAP)",
        "User lifecycle management"
      ]
    },
    {
      category: "Communication Management", 
      items: [
        "Phone number pool management",
        "Department-based number assignment",
        "Call routing configuration",
        "Message template management",
        "Communication policies",
        "Usage monitoring and alerts"
      ]
    },
    {
      category: "Security & Governance",
      items: [
        "Single Sign-On (SSO) integration",
        "Multi-factor authentication (MFA)",
        "Comprehensive audit logs",
        "Data retention policies", 
        "Compliance reporting",
        "Privacy controls and GDPR support"
      ]
    }
  ];

  const benefits = [
    "Reduce IT administrative overhead by 70%",
    "Improve security posture and compliance",
    "Streamline user onboarding and offboarding",
    "Centralize communication management",
    "Gain visibility into organization usage",
    "Scale communication infrastructure efficiently",
  ];

  const orgMetrics = [
    {
      metric: "70%",
      description: "Less Admin Time",
      detail: "Automated processes reduce manual administration tasks significantly",
    },
    {
      metric: "99.9%",
      description: "Security Uptime",
      detail: "Enterprise-grade security with continuous monitoring and protection",
    },
    {
      metric: "50%",
      description: "Faster Onboarding",
      detail: "Streamlined processes get new users productive in half the time",
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
                Centralized Organization
                <span className="block text-blue-200">Management</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Streamline your organization&apos;s communication infrastructure with centralized management, 
                enterprise security, and comprehensive administrative controls.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary">
                  Manage Organization
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Admin Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-white/10 backdrop-blur border-white/20 p-8">
                <div className="text-center">
                  <Building2 className="h-16 w-16 text-white mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">1000+ Users</h3>
                  <p className="text-white/80">Enterprise scale management</p>
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
              Enterprise Management Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tools to manage your organization&apos;s communication infrastructure at scale.
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

      {/* Management Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Comprehensive Management Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to manage users, communications, and security from a single platform.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {managementFeatures.map((category, index) => (
              <Card key={index} className="border-0 shadow-card bg-gradient-card">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-primary mb-4">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Proven Organizational Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how organizations streamline operations with centralized management.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {orgMetrics.map((item, index) => (
              <Card key={index} className="border-0 shadow-card bg-gradient-card text-center p-8">
                <div className="text-5xl font-bold text-primary mb-4">{item.metric}</div>
                <CardTitle className="text-xl mb-4">{item.description}</CardTitle>
                <CardDescription className="text-base">
                  {item.detail}
                </CardDescription>
              </Card>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-0 shadow-card bg-gradient-card p-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Users Managed</div>
            </Card>
            <Card className="border-0 shadow-card bg-gradient-card p-6 text-center">
              <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Organizations</div>
            </Card>
            <Card className="border-0 shadow-card bg-gradient-card p-6 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Compliance Rate</div>
            </Card>
            <Card className="border-0 shadow-card bg-gradient-card p-6 text-center">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Admin Support</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Admin Dashboard Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
                Powerful Admin Dashboard
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Real-time Organization Insights</h3>
                    <p className="text-muted-foreground">Monitor usage patterns, user activity, and system health across your entire organization.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Bulk User Operations</h3>
                    <p className="text-muted-foreground">Efficiently manage large user bases with bulk import, export, and update capabilities.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Security Monitoring</h3>
                    <p className="text-muted-foreground">Track security events, compliance status, and audit trails in real-time.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="border-0 shadow-xl bg-gradient-card p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Organization Overview</h3>
                <p className="text-muted-foreground">Current status and key metrics</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                  <span className="text-foreground">Active Users</span>
                  <span className="text-primary font-bold">1,247</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                  <span className="text-foreground">Phone Numbers</span>
                  <span className="text-primary font-bold">156/200</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                  <span className="text-foreground">Compliance Status</span>
                  <span className="text-green-600 font-bold">✓ Compliant</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                  <span className="text-foreground">Security Score</span>
                  <span className="text-primary font-bold">98/100</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Card className="border-0 shadow-xl bg-gradient-card p-12">
              <div className="text-center">
                <Building2 className="h-20 w-20 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Enterprise Ready</h3>
                <p className="text-muted-foreground mb-6">
                  Built for organizations of all sizes with enterprise-grade security, scalability, and reliability.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">99.99%</div>
                    <div className="text-sm text-muted-foreground">Uptime SLA</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">SOC 2</div>
                    <div className="text-sm text-muted-foreground">Compliant</div>
                  </div>
                </div>
              </div>
            </Card>
            
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
                Streamline Your Operations
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-lg text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Streamline Your Organization?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations already using XBolt AI to centralize and optimize their communication infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Start Enterprise Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Contact Enterprise Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Organization;