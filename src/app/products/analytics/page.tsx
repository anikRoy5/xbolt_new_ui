import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, Clock, Target, Zap, CheckCircle, PlayCircle } from "lucide-react";

const Analytics = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Multi-Tab Dashboard",
      description: "Comprehensive analytics across Overview, Calls, Messages, and Users with customizable views.",
    },
    {
      icon: TrendingUp,
      title: "Real-time Metrics",
      description: "Live performance tracking with instant updates and month-over-month comparisons.",
    },
    {
      icon: Users,
      title: "User Analytics",
      description: "Deep insights into user engagement, session duration, and activity patterns.",
    },
    {
      icon: Clock,
      title: "Time-based Analysis",
      description: "Track patterns by hour, day, week, or month with intelligent period selectors.",
    },
    {
      icon: Target,
      title: "Performance Insights",
      description: "Identify trends, optimize workflows, and make data-driven decisions.",
    },
    {
      icon: Zap,
      title: "AI-Powered Reports",
      description: "Automated insights and recommendations based on your communication patterns.",
    },
  ];

  const dashboardTabs = [
    {
      name: "Overview",
      metrics: [
        "Total Calls with % change",
        "Total Messages with % change", 
        "Call Duration Analytics",
        "AI Transcription Count",
        "Communication Activity Graph",
        "Recent Activity Feed"
      ]
    },
    {
      name: "Calls",
      metrics: [
        "Call Volume Charts",
        "Peak Hours Analysis",
        "Duration Distribution",
        "Call Success Rates",
        "Geographic Distribution",
        "Quality Metrics"
      ]
    },
    {
      name: "Messages",
      metrics: [
        "Message Volume Trends",
        "Response Time Analytics",
        "Conversation Metrics",
        "Delivery Success Rates",
        "Channel Performance",
        "Engagement Analysis"
      ]
    },
    {
      name: "Users",
      metrics: [
        "Active User Counts",
        "Session Duration",
        "User Activity Heatmaps",
        "Growth Tracking",
        "Productivity Metrics",
        "Team Performance"
      ]
    }
  ];

  const reportTypes = [
    {
      title: "Executive Summary",
      description: "High-level KPIs and trends for leadership teams with actionable insights.",
      frequency: "Weekly/Monthly"
    },
    {
      title: "Performance Reports",
      description: "Detailed analysis of communication patterns and team productivity metrics.",
      frequency: "Daily/Weekly"
    },
    {
      title: "Custom Analytics",
      description: "Tailored reports based on your specific business needs and KPIs.",
      frequency: "On-demand"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Advanced Analytics
                <span className="block text-blue-200">Dashboard</span>
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Unlock powerful insights from your communication data with comprehensive analytics, 
                real-time reporting, and AI-powered recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary">
                  Explore Analytics
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Live Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-white/10 backdrop-blur border-white/20 p-8">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-white mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Real-time Data</h3>
                  <p className="text-white/80">Instant insights as they happen</p>
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
              Comprehensive Analytics Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your communication data into actionable insights with advanced analytics and reporting.
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

      {/* Dashboard Tabs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Multi-Tab Analytics Interface
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Organized analytics across four comprehensive dashboards for complete visibility.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardTabs.map((tab, index) => (
              <Card key={index} className="border-0 shadow-card bg-gradient-card">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-primary">{tab.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tab.metrics.map((metric, metricIndex) => (
                      <li key={metricIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Track What Matters Most
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Monitor key performance indicators that drive your business success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-card bg-gradient-card p-6 text-center">
              <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">1M+</div>
              <div className="text-muted-foreground">Data Points Daily</div>
            </Card>
            <Card className="border-0 shadow-card bg-gradient-card p-6 text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">Real-time</div>
              <div className="text-muted-foreground">Updates</div>
            </Card>
            <Card className="border-0 shadow-card bg-gradient-card p-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Metrics Tracked</div>
            </Card>
            <Card className="border-0 shadow-card bg-gradient-card p-6 text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Accuracy Rate</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Report Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Automated Reporting
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get the insights you need, when you need them, with automated report generation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {reportTypes.map((report, index) => (
              <Card key={index} className="border-0 shadow-card bg-gradient-card">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{report.title}</CardTitle>
                  <div className="text-primary font-semibold">{report.frequency}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-center">
                    {report.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
                Advanced Analytics Capabilities
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Predictive Analytics</h3>
                    <p className="text-muted-foreground">Forecast trends and identify opportunities with AI-powered predictions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Custom Dashboards</h3>
                    <p className="text-muted-foreground">Create personalized views with drag-and-drop dashboard builder.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Data Export</h3>
                    <p className="text-muted-foreground">Export data in multiple formats for further analysis or presentations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">API Integration</h3>
                    <p className="text-muted-foreground">Connect analytics data to your existing BI tools and workflows.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="border-0 shadow-xl bg-gradient-card p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-foreground">Call Volume</span>
                    <span className="text-primary font-bold">+24%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-foreground">Response Time</span>
                    <span className="text-green-600 font-bold">-15%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-foreground">User Satisfaction</span>
                    <span className="text-primary font-bold">4.8/5</span>
                  </div>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">AI Insight</h4>
                    <p className="text-sm text-muted-foreground">
                      Peak call hours are 2-4 PM. Consider adjusting team schedules for optimal coverage.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Turn Data into Decisions
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start leveraging advanced analytics to optimize your communication strategy and drive business growth.
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

export default Analytics;