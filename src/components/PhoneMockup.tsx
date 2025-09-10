"use client";

import { Phone, Mic, MicOff } from "lucide-react";
import { useState, useEffect } from "react";

export default function PhoneMockup() {
    const [isActive, setIsActive] = useState(true);
    const [waveHeights, setWaveHeights] = useState<number[]>([]);

    useEffect(() => {
        // Generate random wave heights
        const interval = setInterval(() => {
            setWaveHeights(Array.from({ length: 20 }, () => Math.random() * 100 + 20));
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-neon-blue/30 to-transparent blur-3xl" />

            {/* Phone frame */}
            <div className="relative w-80 h-[580px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-b from-card/80 to-card/40 rounded-[3rem] border border-white/10 backdrop-blur-xl overflow-hidden">
                    {/* Status bar */}
                    <div className="flex justify-between items-center px-6 py-4 text-xs text-muted-foreground">
                        <span>9:41 AM</span>
                        <div className="flex gap-1">
                            <div className="w-6 h-3 bg-foreground/60 rounded-sm" />
                            <div className="w-1 h-3 bg-foreground/60 rounded-sm" />
                            <div className="w-1 h-3 bg-foreground/60 rounded-sm" />
                        </div>
                    </div>

                    {/* Call interface */}
                    <div className="px-6 space-y-6">
                        {/* Caller info */}
                        <div className="text-center space-y-2">
                            <p className="text-sm text-muted-foreground">AI Agent Active</p>
                            <h3 className="text-2xl font-semibold">Sarah Johnson</h3>
                            <p className="text-sm text-primary">Qualifying Lead...</p>
                        </div>

                        {/* AI Avatar */}
                        <div className="relative h-32 flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-2xl animate-pulse-neon" />
                            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                <Phone className="w-10 h-10 text-primary-foreground" />
                            </div>
                        </div>

                        {/* Voice waveform */}
                        <div className="flex items-center justify-center gap-1 h-20">
                            {waveHeights.map((height, i) => (
                                <div
                                    key={i}
                                    className="w-1 bg-gradient-to-t from-primary to-accent rounded-full transition-all duration-100"
                                    style={{
                                        height: isActive ? `${height}%` : "4px",
                                        opacity: isActive ? 1 : 0.3,
                                    }}
                                />
                            ))}
                        </div>

                        {/* AI Transcript */}
                        <div className="glass rounded-xl p-2 space-y-2">
                            <div className="space-y-1">
                                <p className="text-xs text-primary">AI Agent</p>
                                <p className="text-sm">
                                    Hi Sarah! I saw you signed up. How's your call volume?
                                </p>
                            </div>
                            <div className="space-y-1 text-right">
                                <p className="text-xs text-accent">Sarah</p>
                                <p className="text-sm">
                                    About 500 calls daily. Agents are overwhelmed.
                                </p>
                            </div>
                        </div>


                        {/* Call controls */}
                        {/*  <div className="flex justify-center gap-4">
              <button
                onClick={() => setIsActive(!isActive)}
                className="w-14 h-14 rounded-full bg-secondary/50 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-secondary/70 transition-all"
              >
                {isActive ? (
                  <Mic className="w-6 h-6 text-primary" />
                ) : (
                  <MicOff className="w-6 h-6 text-muted-foreground" />
                )}
              </button>
              <button className="w-14 h-14 rounded-full bg-destructive/80 backdrop-blur-xl border border-destructive/50 flex items-center justify-center hover:bg-destructive transition-all">
                <Phone className="w-6 h-6 text-destructive-foreground rotate-[135deg]" />
              </button>
            </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
