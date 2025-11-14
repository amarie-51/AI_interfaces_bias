import { Card, CardContent } from "@/components/ui/card";

interface FacultyCardProps {
  name: string;
  title: string;
  bio: string;
  image: string;
}

export const FacultyCard = ({ name, title, bio, image }: FacultyCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-bold text-xl mb-1">{name}</h3>
        <p className="text-primary font-medium mb-3">{title}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>
      </CardContent>
    </Card>
  );
};
