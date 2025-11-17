import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Calendar, FileText, UserCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Admissions = () => {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [isInfoRequestOpen, setIsInfoRequestOpen] = useState(false);
  const { toast } = useToast();

  const requirements = [
    "High school diploma or equivalent (GED)",
    "Minimum cumulative GPA of 3.0",
    "Completed prerequisite courses: Biology, Chemistry, Anatomy & Physiology",
    "Official transcripts from all institutions attended",
    "Three letters of recommendation",
    "Personal statement (500-750 words)",
    "Background check and drug screening",
    "Current CPR certification (can be obtained after acceptance)",
  ];

  const deadlines = [
    { term: "Fall Semester", priority: "December 1", regular: "February 15", decision: "April 1" },
    { term: "Spring Semester", priority: "August 1", regular: "October 15", decision: "December 1" },
  ];

  const steps = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Complete the online application form and pay the application fee ($50).",
    },
    {
      icon: UserCheck,
      title: "Provide Documents",
      description: "Submit transcripts, letters of recommendation, and personal statement.",
    },
    {
      icon: Calendar,
      title: "Interview Process",
      description: "Selected candidates will be invited for an interview with faculty.",
    },
    {
      icon: CheckCircle2,
      title: "Admission Decision",
      description: "Receive your admission decision and enrollment instructions.",
    },
  ];

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll review your application and contact you soon.",
    });
    setIsApplicationOpen(false);
  };

  const handleInfoRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Received!",
      description: "We'll send you more information about our BSN program shortly.",
    });
    setIsInfoRequestOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Admissions
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Begin your journey to becoming a registered nurse. Review our requirements and application process.
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Admission Requirements</h2>
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{requirement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Deadlines */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Application Deadlines</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {deadlines.map((deadline, index) => (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-primary">{deadline.term}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-foreground">Priority Deadline</span>
                        <Badge variant="secondary">{deadline.priority}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Early consideration for admission
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-foreground">Regular Deadline</span>
                        <Badge variant="outline">{deadline.regular}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Final application deadline
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-foreground">Decision Notification</span>
                        <Badge>{deadline.decision}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Admission decisions sent by this date
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Application Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <Card key={index} className="border-border text-center">
                  <CardContent className="pt-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="mb-2">
                      <Badge variant="secondary" className="mb-2">
                        Step {index + 1}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Apply?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Start your application today or request more information about our program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={() => setIsApplicationOpen(true)}
              >
                Start Application
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => setIsInfoRequestOpen(true)}
              >
                Request Information
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <Dialog open={isApplicationOpen} onOpenChange={setIsApplicationOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>BSN Program Application</DialogTitle>
            <DialogDescription>
              Complete the form below to begin your application. This is a simplified form for demonstration purposes.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleApplicationSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
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
              <Label htmlFor="gpa">Current GPA *</Label>
              <Input id="gpa" type="number" step="0.01" min="0" max="4" required />
            </div>
            <div>
              <Label htmlFor="statement">Personal Statement (500-750 words) *</Label>
              <Textarea
                id="statement"
                rows={6}
                placeholder="Tell us why you want to pursue a BSN and what makes you a strong candidate..."
                required
              />
            </div>
            <div className="flex gap-2 justify-end">
              <Button type="button" variant="outline" onClick={() => setIsApplicationOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Submit Application</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Info Request Modal */}
      <Dialog open={isInfoRequestOpen} onOpenChange={setIsInfoRequestOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request Program Information</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll send you detailed information about our BSN program.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleInfoRequestSubmit} className="space-y-4">
            <div>
              <Label htmlFor="reqName">Full Name *</Label>
              <Input id="reqName" required />
            </div>
            <div>
              <Label htmlFor="reqEmail">Email Address *</Label>
              <Input id="reqEmail" type="email" required />
            </div>
            <div>
              <Label htmlFor="reqPhone">Phone Number</Label>
              <Input id="reqPhone" type="tel" />
            </div>
            <div>
              <Label htmlFor="reqMessage">Questions or Comments</Label>
              <Textarea
                id="reqMessage"
                rows={4}
                placeholder="What would you like to know about our program?"
              />
            </div>
            <div className="flex gap-2 justify-end">
              <Button type="button" variant="outline" onClick={() => setIsInfoRequestOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Send Request</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admissions;
