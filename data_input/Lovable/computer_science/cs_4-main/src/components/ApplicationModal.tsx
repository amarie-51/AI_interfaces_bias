import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ApplicationModalProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export const ApplicationModal = ({ children, title, description }: ApplicationModalProps) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Simulate form submission
    console.log("Form submitted:", Object.fromEntries(formData));
    
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll be in touch soon.",
    });
    
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input id="fullName" name="fullName" required placeholder="John Doe" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" name="email" type="email" required placeholder="john@example.com" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" name="phone" type="tel" required placeholder="(555) 123-4567" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="gpa">Current GPA</Label>
            <Input id="gpa" name="gpa" type="number" step="0.01" min="0" max="4" placeholder="3.5" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="statement">Why are you interested in Computer Science?</Label>
            <Textarea
              id="statement"
              name="statement"
              placeholder="Tell us about your interest..."
              rows={4}
            />
          </div>
          
          <Button type="submit" className="w-full">
            Submit Application
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
