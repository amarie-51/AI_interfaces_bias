import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface StudentTestimonialProps {
  name: string;
  year: string;
  quote: string;
  image: string;
}

export const StudentTestimonial = ({ name, year, quote, image }: StudentTestimonialProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div className="absolute -bottom-2 -right-2 bg-accent text-accent-foreground rounded-full p-2">
            <Quote className="h-4 w-4" />
          </div>
        </div>
        
        <blockquote className="text-muted-foreground italic">
          "{quote}"
        </blockquote>
        
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{year}</p>
        </div>
      </CardContent>
    </Card>
  );
};
