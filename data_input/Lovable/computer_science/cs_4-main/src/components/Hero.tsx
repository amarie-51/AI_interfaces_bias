import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  primaryCTA?: {
    label: string;
    to: string;
  };
  secondaryCTA?: {
    label: string;
    to: string;
  };
}

export const Hero = ({ title, subtitle, backgroundImage, primaryCTA, secondaryCTA }: HeroProps) => {
  return (
    <div className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          {title}
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
          {subtitle}
        </p>
        
        {(primaryCTA || secondaryCTA) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryCTA && (
              <Button asChild size="lg" variant="secondary">
                <Link to={primaryCTA.to}>{primaryCTA.label}</Link>
              </Button>
            )}
            {secondaryCTA && (
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to={secondaryCTA.to}>{secondaryCTA.label}</Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
