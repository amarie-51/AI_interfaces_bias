import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StudentTestimonialProps {
  name: string;
  image: string;
  quote: string;
  year: string;
}

const StudentTestimonial = ({ name, image, quote, year }: StudentTestimonialProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <Quote className="h-8 w-8 text-primary mb-4" />
      <p className="text-foreground/80 mb-6 italic">{quote}</p>
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
        />
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{year}</p>
        </div>
      </div>
    </Card>
  );
};

export default StudentTestimonial;
