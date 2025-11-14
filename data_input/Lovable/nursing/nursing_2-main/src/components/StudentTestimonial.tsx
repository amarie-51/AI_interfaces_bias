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
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <img
            src={image}
            alt={name}
            className="w-24 h-24 rounded-full object-cover mb-4 ring-4 ring-primary/10"
          />
          <Quote className="w-8 h-8 text-primary/20 mb-3" />
          <p className="text-muted-foreground italic mb-4 leading-relaxed">"{quote}"</p>
          <div>
            <p className="font-semibold text-foreground">{name}</p>
            <p className="text-sm text-muted-foreground">{year}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
