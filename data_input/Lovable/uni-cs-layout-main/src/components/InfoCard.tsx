import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const InfoCard = ({ icon, title, description, className }: InfoCardProps) => {
  return (
    <Card className={cn(
      "p-6 hover:shadow-[var(--shadow-hover)] transition-shadow duration-300",
      className
    )}>
      {icon && (
        <div className="mb-4 text-primary">
          {icon}
        </div>
      )}
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </Card>
  );
};

export default InfoCard;
