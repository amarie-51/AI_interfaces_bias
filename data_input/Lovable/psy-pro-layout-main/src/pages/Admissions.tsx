import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Calendar, FileText, Send } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Admissions = () => {
  const [applyDialogOpen, setApplyDialogOpen] = useState(false);
  const [infoDialogOpen, setInfoDialogOpen] = useState(false);

  const requirements = [
    "High school diploma or equivalent (GED)",
    "Minimum GPA of 3.0 on a 4.0 scale",
    "SAT score of 1200+ or ACT score of 24+ (optional for some applicants)",
    "Two letters of recommendation from teachers or counselors",
    "Personal statement (500-750 words)",
    "Official high school transcripts",
    "Completed application form with non-refundable $50 fee"
  ];

  const importantDates = [
    { label: "Early Decision Deadline", date: "November 1, 2024" },
    { label: "Regular Decision Deadline", date: "February 1, 2025" },
    { label: "Transfer Application Deadline", date: "March 15, 2025" },
    { label: "Decision Notifications", date: "April 1, 2025" },
    { label: "Enrollment Deposit Due", date: "May 1, 2025" },
    { label: "Fall Semester Begins", date: "August 25, 2025" }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Create an Account",
      description: "Register on our online application portal to begin your application"
    },
    {
      step: 2,
      title: "Complete Application",
      description: "Fill out all required fields including personal information, educational history, and essay"
    },
    {
      step: 3,
      title: "Submit Documents",
      description: "Upload transcripts, test scores (if applicable), and letters of recommendation"
    },
    {
      step: 4,
      title: "Pay Application Fee",
      description: "Submit the $50 non-refundable application fee (fee waivers available)"
    },
    {
      step: 5,
      title: "Track Your Application",
      description: "Monitor your application status through the online portal"
    },
    {
      step: 6,
      title: "Receive Decision",
      description: "Admissions decisions are sent via email and available in your portal"
    }
  ];

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplyDialogOpen(false);
    toast.success("Application submitted successfully! We'll be in touch soon.");
  };

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInfoDialogOpen(false);
    toast.success("Thank you! We'll send you more information via email.");
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mb-8">
            Join our vibrant community of psychology students. We're here to guide you through every step 
            of the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Dialog open={applyDialogOpen} onOpenChange={setApplyDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" variant="secondary">
                  Apply Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Start Your Application</DialogTitle>
                  <DialogDescription>
                    Fill out this form to begin your application to the Psychology BA program.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleApplySubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="apply-name">Full Name</Label>
                    <Input id="apply-name" placeholder="John Doe" required />
                  </div>
                  <div>
                    <Label htmlFor="apply-email">Email Address</Label>
                    <Input id="apply-email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <Label htmlFor="apply-phone">Phone Number</Label>
                    <Input id="apply-phone" type="tel" placeholder="(555) 123-4567" required />
                  </div>
                  <div>
                    <Label htmlFor="apply-gpa">Current GPA</Label>
                    <Input id="apply-gpa" type="number" step="0.01" min="0" max="4" placeholder="3.5" required />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Submit Application
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            <Dialog open={infoDialogOpen} onOpenChange={setInfoDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Request Info
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Request More Information</DialogTitle>
                  <DialogDescription>
                    Let us know what you'd like to learn about our program.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleInfoSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="info-name">Full Name</Label>
                    <Input id="info-name" placeholder="Jane Smith" required />
                  </div>
                  <div>
                    <Label htmlFor="info-email">Email Address</Label>
                    <Input id="info-email" type="email" placeholder="jane@example.com" required />
                  </div>
                  <div>
                    <Label htmlFor="info-interest">Areas of Interest</Label>
                    <Textarea 
                      id="info-interest" 
                      placeholder="What aspects of psychology interest you most?"
                      className="min-h-20"
                      required 
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Request Information
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Admission Requirements</h2>
          <Card className="max-w-4xl mx-auto border-none shadow-[var(--shadow-card)]">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-6">
                To be considered for admission to our Bachelor of Arts in Psychology program, applicants must meet 
                the following requirements:
              </p>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{requirement}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Note:</strong> International students must also demonstrate 
                  English proficiency (TOEFL iBT 80+ or IELTS 6.5+) and submit additional documentation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Important Deadlines</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {importantDates.map((item, index) => (
              <Card key={index} className="border-none shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Application Process</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applicationSteps.map((item) => (
                <Card key={item.step} className="border-none shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mb-2">
                      {item.step}
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financial Aid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-none shadow-[var(--shadow-card)] bg-gradient-to-br from-card to-accent/5">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Financial Aid & Scholarships</h2>
                  <p className="text-muted-foreground mb-4">
                    We're committed to making quality education accessible. Over 80% of our students receive 
                    financial assistance through scholarships, grants, work-study programs, and loans.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Merit-based scholarships ranging from $5,000 to full tuition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Need-based grants for eligible students</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>On-campus work-study opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Federal and state financial aid programs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Admissions?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Our admissions counselors are here to help you navigate the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="mailto:admissions@psychology.edu">Email Admissions</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="tel:+15551234567">Call (555) 123-4567</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
