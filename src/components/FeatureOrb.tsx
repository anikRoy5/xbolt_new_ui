import { cn } from "@/libs/utils";
import { LucideIcon } from "lucide-react";

interface FeatureOrbProps {
  feature: {
    icon: LucideIcon;
    title: string;
    description: string;
    color: string;
    demo: string;
  };
  isActive: boolean;
  onClick: () => void;
}

export default function FeatureOrb({ feature, isActive, onClick }: FeatureOrbProps) {
  const Icon = feature.icon;
  
  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "from-primary/20 to-primary/10 hover:from-primary/30 hover:to-primary/20 shadow-neon-blue";
      case "accent":
        return "from-accent/20 to-accent/10 hover:from-accent/30 hover:to-accent/20 shadow-neon-violet";
      case "neon-green":
        return "from-neon-green/20 to-neon-green/10 hover:from-neon-green/30 hover:to-neon-green/20 shadow-neon-green";
      case "neon-cyan":
        return "from-neon-cyan/20 to-neon-cyan/10 hover:from-neon-cyan/30 hover:to-neon-cyan/20 shadow-neon-blue";
      case "neon-violet":
        return "from-neon-violet/20 to-neon-violet/10 hover:from-neon-violet/30 hover:to-neon-violet/20 shadow-neon-violet";
      default:
        return "from-primary/20 to-accent/10 hover:from-primary/30 hover:to-accent/20 shadow-holographic";
    }
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative cursor-pointer transition-all duration-500",
        isActive && "scale-105"
      )}
    >
      <div className={cn(
        "relative h-64 rounded-2xl overflow-hidden backdrop-blur-xl border transition-all duration-300",
        "bg-gradient-to-br",
        getColorClasses(feature.color),
        isActive ? "border-white/30 shadow-2xl" : "border-white/10 hover:border-white/20"
      )}>
        {/* Holographic effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-holographic opacity-20" />
        </div>
        
        {/* Content */}
        <div className="relative p-6 h-full flex flex-col">
          <div className={cn(
            "w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center mb-4",
            feature.color === "primary" && "from-primary to-primary/50",
            feature.color === "accent" && "from-accent to-accent/50",
            feature.color === "neon-green" && "from-neon-green to-neon-green/50",
            feature.color === "neon-cyan" && "from-neon-cyan to-neon-cyan/50",
            feature.color === "neon-violet" && "from-neon-violet to-neon-violet/50"
          )}>
            <Icon className="w-6 h-6 text-background" />
          </div>
          
          <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
          <p className="text-sm text-muted-foreground flex-grow">{feature.description}</p>
          
          {/* Play demo hint */}
          <div className="mt-4 flex items-center gap-2 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
              ▶
            </div>
            <span>Click to play demo</span>
          </div>
        </div>
        
        {/* Floating particles */}
        {isActive && (
          <>
            <div className="absolute top-4 right-4 w-2 h-2 bg-white/50 rounded-full animate-float" />
            <div className="absolute bottom-8 left-8 w-1 h-1 bg-white/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-white/40 rounded-full animate-float" style={{ animationDelay: "2s" }} />
          </>
        )}
      </div>
    </div>
  );
}