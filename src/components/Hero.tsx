"use client";

import { ArrowRight, Headphones, Sparkles } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import PhoneMockup from "./PhoneMockup";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative p-6 flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-radial from-neon-blue/20 to-transparent rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-radial from-neon-violet/20 to-transparent rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container relative z-10 mx-auto px-4 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          {/* Content */}
          <div className="space-y-8 overflow-hidden">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary animate-pulse-neon" />
              <span className="text-sm text-muted-foreground">
                The World&apos;s First Agentic AI VoIP
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
              <span className="bg-gradient-neon bg-clip-text">
                Smarter Calls.
              </span>
              <br />
              <span className="text-foreground">Powered by</span>
              <br />
              <span className="bg-gradient-holographic bg-clip-text text-transparent animate-pulse-neon">
                AI Agents
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-lg">
              Transform your business communications with autonomous AI agents
              that handle calls, close deals, and delight customers — 24/7.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="navbar-primary" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="navbar-secondary" className="group">
                <Headphones className="mr-2" />
                See Live Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-primary text-glow-blue">
                  40%
                </p>
                <p className="text-sm text-muted-foreground">Sales Increase</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-accent text-glow-violet">
                  60%
                </p>
                <p className="text-sm text-muted-foreground">Cost Reduction</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-neon-green text-glow-green">
                  24/7
                </p>
                <p className="text-sm text-muted-foreground">Availability</p>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative lg:pl-12 flex justify-center items-center">
            <div className="max-h-full w-full flex justify-center items-center">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
