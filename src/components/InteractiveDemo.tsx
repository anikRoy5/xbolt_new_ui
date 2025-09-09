"use client"

import { useState } from "react";
import { Button } from "./ui/button";
import { Phone, Play, Pause, SkipForward, Volume2, Brain } from "lucide-react";

const demoScenarios = [
  {
    id: "sales",
    title: "AI Sales Agent Pitch",
    duration: "0:45",
    description: "Listen to our AI qualify a lead and book a demo",
  },
  {
    id: "support",
    title: "AI Support Agent",
    duration: "1:20",
    description: "Password reset with identity verification",
  },
  {
    id: "appointment",
    title: "Appointment Booking",
    duration: "0:55",
    description: "Healthcare appointment scheduling",
  },
];

export default function InteractiveDemo() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayDemo = (demoId: string) => {
    setActiveDemo(demoId);
    setIsPlaying(true);
    // In production, this would trigger actual audio playback
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-6xl font-display font-bold">
            <span className="bg-gradient-holographic bg-clip-text text-transparent">
              Experience the AI
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Call our AI agents right now and experience the future of business communication
          </p>
        </div>

        {/* Live Call Widget */}
        <div className="max-w-4xl mx-auto">
          <div className="card-holographic rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Call Interface */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Call the AI Agent Now</h3>
                <p className="text-muted-foreground">
                  Experience a live conversation with our AI. No signup required.
                </p>
                
                {/* Phone number display */}
                <div className="glass rounded-xl p-6 text-center">
                  <p className="text-sm text-muted-foreground mb-2">Call this number:</p>
                  <p className="text-3xl font-bold font-mono text-primary text-glow-blue">
                    1-800-XBOLT-AI
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">Available 24/7 • Free demo call</p>
                </div>
                
                {/* Or simulate call */}
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">Or simulate a call here:</p>
                  <Button size="lg" variant="neon" className="group">
                    <Phone className="mr-2 group-hover:animate-pulse" />
                    Start Browser Call
                  </Button>
                </div>
              </div>
              
              {/* Demo Scenarios */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Audio Samples</h4>
                
                {demoScenarios.map((scenario) => (
                  <div
                    key={scenario.id}
                    className={`glass rounded-lg p-4 cursor-pointer transition-all ${
                      activeDemo === scenario.id ? "border-primary/50 bg-primary/5" : "hover:bg-card/50"
                    }`}
                    onClick={() => handlePlayDemo(scenario.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h5 className="font-semibold">{scenario.title}</h5>
                        <p className="text-sm text-muted-foreground">{scenario.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{scenario.duration}</span>
                        <button className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                          {activeDemo === scenario.id && isPlaying ? (
                            <Pause className="w-4 h-4 text-primary" />
                          ) : (
                            <Play className="w-4 h-4 text-primary" />
                          )}
                        </button>
                      </div>
                    </div>
                    
                    {/* Audio waveform visualization */}
                    {activeDemo === scenario.id && (
                      <div className="mt-4 h-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg flex items-center px-4">
                        <div className="flex gap-0.5 items-center h-full">
                          {Array.from({ length: 40 }).map((_, i) => (
                            <div
                              key={i}
                              className="w-0.5 bg-gradient-to-t from-primary to-accent rounded-full animate-wave"
                              style={{
                                height: isPlaying ? `${Math.random() * 100}%` : "20%",
                                animationDelay: `${i * 0.03}s`,
                                transition: "height 0.1s",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Audio controls */}
                {activeDemo && (
                  <div className="glass rounded-lg p-3 flex items-center gap-3">
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4 text-primary" />
                      ) : (
                        <Play className="w-4 h-4 text-primary" />
                      )}
                    </button>
                    <div className="flex-1 h-1 bg-card rounded-full overflow-hidden">
                      <div className="h-full w-1/3 bg-gradient-to-r from-primary to-accent rounded-full" />
                    </div>
                    <Volume2 className="w-4 h-4 text-muted-foreground" />
                    <SkipForward className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Multi-agent orchestration visual */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">See Multi-Agent Orchestration in Action</h3>
          <div className="glass rounded-2xl p-8">
            <div className="relative h-64">
              {/* Central orchestrator */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-neon flex items-center justify-center z-10">
                <Brain className="w-12 h-12 text-background" />
              </div>
              
              {/* Orbiting agents */}
              {["Sales", "Support", "Scheduling", "Analytics"].map((agent, i) => (
                <div
                  key={agent}
                  className="absolute top-1/2 left-1/2 w-48 h-48"
                  style={{
                    animation: `orbit ${15 + i * 3}s linear infinite`,
                    animationDelay: `${i * 2}s`,
                  }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full glass text-xs">
                    {agent}
                  </div>
                </div>
              ))}
              
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <circle cx="50%" cy="50%" r="100" fill="none" stroke="url(#demo-gradient)" strokeWidth="1" strokeDasharray="5 5" opacity="0.3" />
                <defs>
                  <linearGradient id="demo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}