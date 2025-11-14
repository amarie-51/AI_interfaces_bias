import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  image: string;
  quote: string;
  year: string;
}

const TestimonialCard = ({ name, image, quote, year }: TestimonialCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-4">
            <img
              src={image}
              alt={name}
              className="w-24 h-24 rounded-full object-cover border-4 border-primary/10"
            />
            <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground p-2 rounded-full">
              <Quote className="h-4 w-4" />
            </div>
          </div>
          <p className="text-muted-foreground italic mb-4">{quote}</p>
          <div className="border-t border-border pt-4 w-full">
            <h4 className="font-semibold text-foreground">{name}</h4>
            <p className="text-sm text-muted-foreground">{year}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
