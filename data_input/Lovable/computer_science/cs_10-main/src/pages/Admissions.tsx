import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Calendar, FileText, Users, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Admissions = () => {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const requirements = [
    "High school diploma or equivalent with minimum 3.0 GPA",
    "Strong background in mathematics (Algebra II, Pre-Calculus or higher)",
    "Official transcripts from all previously attended institutions",
    "SAT/ACT scores (optional for 2024-2025 academic year)",
    "Two letters of recommendation from teachers or counselors",
    "Personal statement (500-750 words)",
    "Resume or list of activities and achievements",
  ];

  const deadlines = [
    { term: "Fall Semester", priority: "November 1", regular: "February 1", decision: "April 1" },
    { term: "Spring Semester", priority: "August 1", regular: "November 1", decision: "December 15" },
  ];

  const steps = [
    {
      icon: FileText,
      title: "1. Complete Application",
      description: "Submit your online application through our admissions portal with required documents.",
    },
    {
      icon: Users,
      title: "2. Submit Materials",
      description: "Upload transcripts, test scores (if applicable), and letters of recommendation.",
    },
    {
      icon: Calendar,
      title: "3. Application Review",
      description: "Our admissions committee carefully reviews all submitted materials.",
    },
    {
      icon: CheckCircle2,
      title: "4. Admission Decision",
      description: "Receive your admission decision and financial aid package information.",
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll review your application and contact you soon.",
    });
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-hero-gradient-start to-hero-gradient-end text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Admissions</h1>
          <p className="text-xl max-w-3xl text-primary-foreground/90">
            Begin your journey to becoming a computer science professional. We're excited to help you take the next
            step toward your future.
          </p>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <Card key={index} className="border-border hover-scale">
                <CardContent className="pt-6 text-center">
                  <step.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg">
                  Start Your Application <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Application Form</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                  <div>
                    <Label htmlFor="gpa">High School GPA *</Label>
                    <Input id="gpa" type="number" step="0.01" min="0" max="4" required />
                  </div>
                  <div>
                    <Label htmlFor="statement">Personal Statement (500-750 words) *</Label>
                    <Textarea
                      id="statement"
                      rows={6}
                      placeholder="Tell us about your interest in computer science..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                    Submit Application
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-section-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Admission Requirements</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground">{requirement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Deadlines */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Application Deadlines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {deadlines.map((deadline, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-primary">{deadline.term}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="text-muted-foreground">Priority Deadline:</span>
                    <span className="font-semibold text-foreground">{deadline.priority}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border pb-2">
                    <span className="text-muted-foreground">Regular Deadline:</span>
                    <span className="font-semibold text-foreground">{deadline.regular}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Decision Notification:</span>
                    <span className="font-semibold text-foreground">{deadline.decision}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Aid CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Financial Aid Available</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Over 85% of our students receive some form of financial aid. Scholarships, grants, and work-study programs
            are available to help make your education affordable.
          </p>
          <Button size="lg" variant="secondary" className="text-lg">
            Learn About Financial Aid
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;
