import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Calendar, FileText, Users, GraduationCap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Admissions = () => {
  const { toast } = useToast();
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const requirements = [
    {
      category: "Academic Requirements",
      items: [
        "High school diploma or equivalent (GED)",
        "Minimum 3.0 GPA in prerequisite courses",
        "Completion of prerequisite coursework (Biology, Chemistry, Anatomy & Physiology)",
        "SAT/ACT scores (optional for recent graduates)",
      ],
    },
    {
      category: "Application Materials",
      items: [
        "Completed online application form",
        "Official transcripts from all institutions attended",
        "Two letters of recommendation (one academic, one professional preferred)",
        "Personal statement (500-750 words)",
        "Resume or curriculum vitae",
      ],
    },
    {
      category: "Additional Requirements",
      items: [
        "Background check and drug screening",
        "Health clearance and immunization records",
        "CPR certification (can be obtained after admission)",
        "TEAS (Test of Essential Academic Skills) exam",
      ],
    },
  ];

  const deadlines = [
    { term: "Fall Admission", priority: "February 1", regular: "April 15", decision: "June 1" },
    { term: "Spring Admission", priority: "September 1", regular: "November 1", decision: "December 15" },
  ];

  const applicationSteps = [
    {
      icon: FileText,
      title: "Complete Application",
      description: "Submit your online application and pay the application fee ($50)",
    },
    {
      icon: GraduationCap,
      title: "Submit Documents",
      description: "Send all required transcripts and supporting materials",
    },
    {
      icon: Users,
      title: "Interview",
      description: "Selected candidates will be invited for an admission interview",
    },
    {
      icon: Calendar,
      title: "Decision",
      description: "Receive your admission decision by the notification date",
    },
  ];

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsApplicationOpen(false);
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll review your application and contact you soon.",
    });
  };

  const handleInfoRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setIsInfoOpen(false);
    toast({
      title: "Information Request Sent!",
      description: "We'll send you detailed program information within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Admissions
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto opacity-90">
            Start your journey to becoming a registered nurse. We're here to guide you through every step of the application process.
          </p>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog open={isApplicationOpen} onOpenChange={setIsApplicationOpen}>
              <DialogTrigger asChild>
                <Button size="lg">Apply Now</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Submit Application</DialogTitle>
                  <DialogDescription>
                    Start your BSN application. This is a preliminary form - full application portal access will be provided.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleApplicationSubmit} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="app-name">Full Name</Label>
                    <Input id="app-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="app-email">Email Address</Label>
                    <Input id="app-email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="app-phone">Phone Number</Label>
                    <Input id="app-phone" type="tel" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="app-term">Intended Start Term</Label>
                    <Input id="app-term" placeholder="e.g., Fall 2025" required />
                  </div>
                  <Button type="submit" className="w-full">Submit Application</Button>
                </form>
              </DialogContent>
            </Dialog>

            <Dialog open={isInfoOpen} onOpenChange={setIsInfoOpen}>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline">Request Information</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Request Program Information</DialogTitle>
                  <DialogDescription>
                    Let us know what you'd like to learn about our BSN program.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleInfoRequest} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="info-name">Full Name</Label>
                    <Input id="info-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="info-email">Email Address</Label>
                    <Input id="info-email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="info-message">What would you like to know?</Label>
                    <Textarea id="info-message" rows={4} required />
                  </div>
                  <Button type="submit" className="w-full">Send Request</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center text-foreground">
            Admission Requirements
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Review the requirements below to ensure you're prepared for application
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {requirements.map((section, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{section.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deadlines */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center text-foreground">
            Application Deadlines
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            We accept applications for both fall and spring admission
          </p>
          <div className="max-w-4xl mx-auto space-y-6">
            {deadlines.map((deadline, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{deadline.term}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Badge variant="secondary" className="mb-2">Priority Deadline</Badge>
                      <p className="text-lg font-semibold text-foreground">{deadline.priority}</p>
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">Regular Deadline</Badge>
                      <p className="text-lg font-semibold text-foreground">{deadline.regular}</p>
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">Decision Date</Badge>
                      <p className="text-lg font-semibold text-foreground">{deadline.decision}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center text-foreground">
            Application Process
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Follow these steps to complete your application
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {applicationSteps.map((step, index) => (
              <Card key={index} className="border-border text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="mb-2 text-sm font-bold text-muted-foreground">
                    Step {index + 1}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Aid Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-foreground">
                  Financial Aid & Scholarships
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We are committed to making nursing education accessible and affordable. Our financial aid office can help you explore various funding options including federal financial aid, state grants, institutional scholarships, and private loans.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Merit Scholarships</h4>
                    <p className="text-sm text-muted-foreground">
                      Up to $10,000 annually for students with exceptional academic records
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Need-Based Aid</h4>
                    <p className="text-sm text-muted-foreground">
                      Financial aid packages tailored to your demonstrated need
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Contact our financial aid office at <span className="text-primary">finaid@bsnprogram.edu</span> or call <span className="text-primary">(555) 123-4568</span> for personalized assistance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
