"use client";

import React, { useState, useEffect } from "react";
import { Brain, Phone, Headphones, Shield, BarChart3, Plug, Users, MessageSquare, Play, Pause, LucideIcon } from "lucide-react";

// --- START: SELF-CONTAINED UTILITY COMPONENTS & ICONS ---
// Reusable SVG icon components


// Interface for a feature object
interface Feature {
  icon:  LucideIcon;
  title: string;
  description: string;
  color: "primary" | "accent" | "neon-green" | "neon-cyan" | "neon-violet";
  demo: string;
}

// This component encapsulates the logic for each feature card.
const FeatureOrb = ({ feature, isActive, onClick }: { feature: Feature; isActive: boolean; onClick: () => void }) => {
  const { icon: Icon, title, description, color, demo } = feature;
  
  // Dynamic color classes
  const colorClasses = {
    primary: "border-primary/20 hover:border-primary/50 text-primary",
    accent: "border-accent/20 hover:border-accent/50 text-accent",
    "neon-green": "border-neon-green/20 hover:border-neon-green/50 text-neon-green",
    "neon-cyan": "border-neon-cyan/20 hover:border-neon-cyan/50 text-neon-cyan",
    "neon-violet": "border-neon-violet/20 hover:border-neon-violet/50 text-neon-violet",
  };

  return (
    <div
      onClick={onClick}
      className={`relative group cursor-pointer overflow-hidden p-6 rounded-3xl backdrop-blur-md transition-all duration-300 transform border ${colorClasses[color]} ${
        isActive ? "scale-105 shadow-xl ring-2 ring-offset-2 ring-offset-background" : "hover:scale-105 hover:shadow-lg"
      }`}
      style={{
        backgroundColor: isActive ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.02)",
        transitionProperty: "all",
      }}
    >
      <div className="space-y-4 text-center">
        <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-white/5 border border-white/10 transition-colors duration-300">
          <Icon size={32} className={`transition-transform duration-300 ${isActive ? "scale-125" : ""}`} />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="mt-4 text-sm font-semibold flex items-center justify-center gap-2 transition-opacity duration-300 group-hover:opacity-100 opacity-0">
        <span className="text-primary">{demo}</span>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg> */}
      </div>
    </div>
  );
};
// --- END: SELF-CONTAINED COMPONENTS ---

const features: Feature[] = [
  {
    icon: Brain,
    title: "AI Call Assistant",
    description: "Intelligent agents that understand context, sentiment, and intent in real-time.",
    color: "primary",
    demo: "Listen to AI qualifying a lead in 30 seconds",
  },
  {
    icon: MessageSquare,
    title: "Conversational IVR",
    description: "Natural language IVR that actually understands what customers want.",
    color: "accent",
    demo: "Hear the AI route a complex support request",
  },
  {
    icon: Phone,
    title: "Sales AI Dialer",
    description: "Parallel dialing with AI qualification and live transfer to closers.",
    color: "neon-green",
    demo: "AI books a demo after qualifying interest",
  },
  {
    icon: Headphones,
    title: "Support AI",
    description: "Resolve 80% of tickets without human intervention.",
    color: "neon-cyan",
    demo: "AI resets password and verifies identity",
  },
  {
    icon: Shield,
    title: "Compliance & Recording",
    description: "HIPAA, PCI, and GDPR compliant with automatic redaction.",
    color: "primary",
    demo: "Automatic PII redaction in action",
  },
  {
    icon: BarChart3,
    title: "Analytics Hub",
    description: "Real-time insights on agent performance and customer sentiment.",
    color: "accent",
    demo: "Live dashboard showing AI metrics",
  },
  {
    icon: Plug,
    title: "Integrations",
    description: "Native connections to Salesforce, HubSpot, Zendesk, and 100+ tools.",
    color: "neon-violet",
    demo: "Watch AI update CRM automatically",
  },
  {
    icon: Users,
    title: "Multi-Agent Orchestration",
    description: "AI agents collaborate to handle complex workflows seamlessly.",
    color: "primary",
    demo: "Multiple agents handling escalation",
  },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Simulate audio playback progress
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 50); // Adjust speed here
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  
  const handleFeatureClick = (index: number) => {
    if (activeFeature === index) {
      setActiveFeature(null);
      setIsPlaying(false);
      setProgress(0);
    } else {
      setActiveFeature(index);
      setIsPlaying(false);
      setProgress(0);
    }
  };

  return (
    <section className="relative py-20 overflow-hidden bg-background font-sans">
      <style>
        {`
          /* Custom fonts and utilities */
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
          .bg-background {
            background-color: #0c0a09;
            color: #fafafa;
          }
          .font-sans { font-family: 'Inter', sans-serif; }
          .font-display { font-family: 'Inter', sans-serif; }
          .bg-gradient-holographic {
            background-image: linear-gradient(to right, #00C9FF, #92FE9D);
          }
          .text-muted-foreground { color: #a1a1aa; }
          .text-primary { color: #3b82f6; }
          .text-accent { color: #c084fc; }
          .text-neon-green { color: #84cc16; }
          .text-neon-cyan { color: #00bcd4; }
          .text-neon-violet { color: #a855f7; }
          
          .bg-gradient-cyber {
            background: radial-gradient(circle at top left, rgba(59, 130, 246, 0.15) 0%, transparent 40%),
                        radial-gradient(circle at bottom right, rgba(192, 132, 252, 0.15) 0%, transparent 40%);
          }
          
          .glass {
            background-color: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .animate-fade-in { animation: fadeIn 0.5s ease-out; }
          @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

          .animate-wave {
            animation: wave 1.2s ease-in-out infinite;
          }
          @keyframes wave {
            0%, 100% { transform: scaleY(1); }
            50% { transform: scaleY(1.5); }
          }
        `}
      </style>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-cyber opacity-50" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-6xl font-display font-bold">
            <span className="bg-gradient-holographic bg-clip-text text-transparent">
              Intelligent Modules
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each module is an autonomous AI agent designed to handle specific aspects of your communication workflow.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureOrb
              key={index}
              feature={feature}
              isActive={activeFeature === index}
              onClick={() => handleFeatureClick(index)}
            />
          ))}
        </div>

        {/* Interactive Demo Section */}
        {activeFeature !== null && (
          <div className="mt-12 glass rounded-2xl p-8 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-semibold">{features[activeFeature].title} Demo</h3>
              <button
                onClick={() => handleFeatureClick(activeFeature)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                ✕
              </button>
            </div>
            <p className="text-muted-foreground mb-6">{features[activeFeature].demo}</p>
            
            {/* Audio player controls and visualization */}
            <div className="flex items-center gap-4">
              <button
                onClick={handlePlayPause}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
              <div className="flex-1 h-12 bg-white/10 rounded-full flex items-center justify-start p-1 relative overflow-hidden">
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-linear"
                  style={{ width: `${progress}%` }}
                />
                <div className="relative z-10 flex gap-1 w-full items-center h-full px-2 opacity-80">
                  {Array.from({ length: 50 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1 rounded-full animate-wave transition-colors duration-300"
                      style={{
                        height: `${Math.random() * 80 + 20}%`,
                        backgroundColor: i / 50 < progress / 100 ? 'white' : 'rgba(255, 255, 255, 0.5)',
                        animationDelay: `${i * 0.05}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
