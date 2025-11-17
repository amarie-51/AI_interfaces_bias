import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Calendar, FileText, Users, Award } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Admissions = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const requirements = [
    "High school diploma or equivalent with minimum 3.0 GPA",
    "Completion of prerequisite courses: Biology, Chemistry, Anatomy & Physiology",
    "Minimum SAT score of 1100 or ACT score of 22",
    "Two letters of recommendation from teachers or professionals",
    "Personal statement (500-750 words)",
    "Current healthcare CPR certification (can be obtained after admission)",
    "Criminal background check and drug screening",
    "Interview with admissions committee",
  ];

  const deadlines = [
    { term: "Fall 2025", priority: "January 15, 2025", regular: "March 1, 2025" },
    { term: "Spring 2026", priority: "August 1, 2025", regular: "October 1, 2025" },
  ];

  const steps = [
    {
      icon: FileText,
      title: "1. Submit Application",
      description: "Complete the online application and pay the $50 application fee",
    },
    {
      icon: Award,
      title: "2. Send Transcripts",
      description: "Request official transcripts from all previous institutions",
    },
    {
      icon: Users,
      title: "3. Letters & Essay",
      description: "Submit letters of recommendation and personal statement",
    },
    {
      icon: CheckCircle,
      title: "4. Interview",
      description: "Complete interview with faculty (by invitation only)",
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Application submitted! We'll contact you within 2-3 business days.");
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-6">Admissions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Begin your journey toward a rewarding nursing career. We're committed to finding students 
            who are passionate about healthcare and dedicated to making a difference.
          </p>
        </section>

        {/* Application Deadlines */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Application Deadlines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deadlines.map((deadline) => (
              <Card key={deadline.term} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Calendar className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-xl mb-2">{deadline.term}</h3>
                      <div className="space-y-1">
                        <p className="text-sm">
                          <span className="font-semibold">Priority Deadline:</span> {deadline.priority}
                        </p>
                        <p className="text-sm">
                          <span className="font-semibold">Regular Deadline:</span> {deadline.regular}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Priority applications receive first consideration for admission and scholarships
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Admission Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Admission Requirements</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-6">
                To be considered for admission to our BSN program, applicants must meet the following requirements:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                    <p>{requirement}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Application Steps */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">How to Apply</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <Card key={step.title} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <step.icon size={32} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-12 text-center text-primary-foreground">
          <h2 className="text-4xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Take the first step toward your nursing career. Our admissions team is here to guide you through the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="hero" size="lg">
                  Start Application
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Start Your Application</DialogTitle>
                  <DialogDescription>
                    Fill out this form to begin your nursing program application. Our team will contact you with next steps.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="term">Intended Start Term *</Label>
                    <select
                      id="term"
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      required
                    >
                      <option value="">Select a term</option>
                      <option value="fall-2025">Fall 2025</option>
                      <option value="spring-2026">Spring 2026</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gpa">High School GPA</Label>
                    <Input id="gpa" placeholder="3.5" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your interest in nursing</Label>
                    <Textarea
                      id="message"
                      placeholder="Share what inspired you to pursue a career in nursing..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" variant="hero" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <a href="/contact">
              <Button variant="outline" size="lg" className="bg-background/10 border-primary-foreground text-primary-foreground hover:bg-background/20">
                Request Information
              </Button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admissions;
