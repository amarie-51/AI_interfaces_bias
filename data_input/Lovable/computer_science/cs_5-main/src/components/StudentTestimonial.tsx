import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface StudentTestimonialProps {
  name: string;
  year: string;
  quote: string;
  image: string;
}

const StudentTestimonial = ({ name, year, quote, image }: StudentTestimonialProps) => {
  return (
    <Card className="p-6 hover:shadow-elegant transition-shadow">
      <Quote className="h-8 w-8 text-accent mb-4" />
      <p className="text-muted-foreground mb-6 italic">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center space-x-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border-2 border-primary"
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
