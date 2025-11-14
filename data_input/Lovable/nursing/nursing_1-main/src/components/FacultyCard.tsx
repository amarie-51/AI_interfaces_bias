import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

interface FacultyCardProps {
  name: string;
  title: string;
  image: string;
  bio: string;
  email: string;
}

const FacultyCard = ({ name, title, image, bio, email }: FacultyCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
        <p className="text-primary font-medium mb-3">{title}</p>
        <p className="text-muted-foreground text-sm mb-4">{bio}</p>
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
        >
          <Mail className="h-4 w-4" />
          {email}
        </a>
      </CardContent>
    </Card>
  );
};

export default FacultyCard;
