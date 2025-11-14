import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

interface FacultyCardProps {
  name: string;
  title: string;
  bio: string;
  image: string;
  email: string;
}

export const FacultyCard = ({ name, title, bio, image, email }: FacultyCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <img
            src={image}
            alt={name}
            className="w-32 h-32 rounded-full object-cover"
          />
          
          <div className="space-y-2">
            <h3 className="font-bold text-xl text-foreground">{name}</h3>
            <p className="text-accent font-medium">{title}</p>
          </div>
          
          <p className="text-muted-foreground text-sm">
            {bio}
          </p>
          
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors text-sm"
          >
            <Mail className="h-4 w-4" />
            <span>{email}</span>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};
