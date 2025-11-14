import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Calendar, FileText, Send } from "lucide-react";
import { toast } from "sonner";

const Admissions = () => {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isRequestOpen, setIsRequestOpen] = useState(false);

  const requirements = [
    "High school diploma or equivalent",
    "Minimum GPA of 3.0 on a 4.0 scale",
    "Completed application form",
    "Official high school transcripts",
    "SAT/ACT scores (optional)",
    "Two letters of recommendation",
    "Personal statement (500-750 words)",
    "Resume or list of activities",
  ];

  const deadlines = [
    { term: "Fall 2025 (Priority)", date: "January 15, 2025", status: "Open" },
    { term: "Fall 2025 (Regular)", date: "March 1, 2025", status: "Open" },
    { term: "Spring 2026", date: "October 15, 2025", status: "Future" },
  ];

  const steps = [
    {
      title: "Complete Online Application",
      description: "Fill out the application form with your personal and academic information.",
      icon: FileText,
    },
    {
      title: "Submit Required Documents",
      description: "Upload transcripts, test scores, letters of recommendation, and personal statement.",
      icon: Send,
    },
    {
      title: "Application Review",
      description: "Our admissions committee carefully reviews all applications.",
      icon: CheckCircle,
    },
    {
      title: "Receive Decision",
      description: "Decisions are typically released 4-6 weeks after the application deadline.",
      icon: Calendar,
    },
  ];

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted successfully! We'll be in touch soon.");
    setIsApplyOpen(false);
  };

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Request received! Check your email for information.");
    setIsRequestOpen(false);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl max-w-3xl">
            Join our community of innovative thinkers and future technology leaders.
          </p>
        </div>
      </section>

      {/* Application Deadlines */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Application Deadlines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {deadlines.map((deadline, index) => (
              <Card key={index} className={deadline.status === "Open" ? "border-accent" : ""}>
                <CardHeader>
                  <CardTitle className="text-accent">{deadline.term}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <p className="font-semibold text-foreground">{deadline.date}</p>
                  </div>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      deadline.status === "Open"
                        ? "bg-accent/10 text-accent"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {deadline.status}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Admission Requirements</h2>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-foreground">{requirement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-sm font-bold text-accent mb-2">Step {index + 1}</div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Apply?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Take the first step towards your future in computer science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog open={isApplyOpen} onOpenChange={setIsApplyOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-cta hover:bg-cta/90">
                    Apply Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Application Form</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleApplySubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                    </div>
                    <div>
                      <Label htmlFor="gpa">High School GPA</Label>
                      <Input id="gpa" type="number" step="0.01" min="0" max="4" placeholder="3.5" required />
                    </div>
                    <div>
                      <Label htmlFor="statement">Why Computer Science? (Brief)</Label>
                      <Textarea id="statement" placeholder="Tell us about your interest..." rows={3} required />
                    </div>
                    <Button type="submit" className="w-full bg-cta hover:bg-cta/90">
                      Submit Application
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>

              <Dialog open={isRequestOpen} onOpenChange={setIsRequestOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline">
                    Request Information
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Request Information</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleRequestSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="req-name">Full Name</Label>
                      <Input id="req-name" placeholder="John Doe" required />
                    </div>
                    <div>
                      <Label htmlFor="req-email">Email</Label>
                      <Input id="req-email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div>
                      <Label htmlFor="interests">Areas of Interest</Label>
                      <Textarea id="interests" placeholder="AI, Web Development, Cybersecurity..." rows={3} />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Send Request
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
