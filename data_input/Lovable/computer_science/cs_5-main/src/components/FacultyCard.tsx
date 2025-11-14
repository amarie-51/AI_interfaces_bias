import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";

interface FacultyCardProps {
  name: string;
  title: string;
  bio: string;
  image: string;
  email: string;
}

const FacultyCard = ({ name, title, bio, image, email }: FacultyCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-elegant transition-shadow">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
        <p className="text-primary font-medium mb-3">{title}</p>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{bio}</p>
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center space-x-2 text-sm text-primary hover:text-primary-light transition-colors"
        >
          <Mail className="h-4 w-4" />
          <span>Contact</span>
        </a>
      </div>
    </Card>
  );
};

export default FacultyCard;
