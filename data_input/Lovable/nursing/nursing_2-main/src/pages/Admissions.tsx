import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Calendar, FileText, GraduationCap } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Admissions = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const requirements = [
    "High school diploma or equivalent with minimum 3.0 GPA",
    "Completion of prerequisite courses: Biology, Chemistry, Anatomy & Physiology",
    "SAT score of 1100+ or ACT score of 22+ (or GPA waiver for 3.5+)",
    "Two letters of recommendation from teachers or healthcare professionals",
    "Personal statement (500-750 words) describing your nursing career goals",
    "Background check and health clearance",
  ];

  const deadlines = [
    { term: "Fall Admission", deadline: "March 1st", notification: "April 15th" },
    { term: "Spring Admission", deadline: "October 1st", notification: "November 15th" },
  ];

  const steps = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Complete the online application and pay the $50 application fee",
    },
    {
      icon: GraduationCap,
      title: "Provide Transcripts",
      description: "Submit official high school and college transcripts",
    },
    {
      icon: Calendar,
      title: "Interview",
      description: "Selected applicants will be invited for an in-person or virtual interview",
    },
    {
      icon: CheckCircle,
      title: "Receive Decision",
      description: "Admissions decisions are sent by email and postal mail",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We've received your application. You'll hear from us within 2-3 business days.",
    });
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Admissions</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Start your journey to becoming a registered nurse. We review applications on a rolling basis.
          </p>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Apply Now
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>BSN Application</DialogTitle>
                <DialogDescription>
                  Start your application to our Bachelor of Science in Nursing program
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" placeholder="John Doe" required />
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
                  <Label htmlFor="term">Preferred Start Term</Label>
                  <select
                    id="term"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    required
                  >
                    <option value="">Select term</option>
                    <option value="fall">Fall 2025</option>
                    <option value="spring">Spring 2026</option>
                  </select>
                </div>
                <Button type="submit" className="w-full">Submit Application</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Admission Requirements</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  To be considered for admission to our BSN program, applicants must meet the following requirements:
                </p>
                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex gap-3">
                      <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Deadlines */}
      <section className="py-20 bg-soft-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Application Deadlines</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {deadlines.map((deadline) => (
              <Card key={deadline.term} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">{deadline.term}</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Application Deadline</p>
                      <p className="text-xl font-semibold">{deadline.deadline}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Decision Notification</p>
                      <p className="text-xl font-semibold">{deadline.notification}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Application Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4 text-2xl font-bold">
                  {index + 1}
                </div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the next step toward your nursing career. Our admissions team is here to help you through the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  Start Application
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>BSN Application</DialogTitle>
                  <DialogDescription>
                    Start your application to our Bachelor of Science in Nursing program
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="fullName2">Full Name</Label>
                    <Input id="fullName2" placeholder="John Doe" required />
                  </div>
                  <div>
                    <Label htmlFor="email2">Email</Label>
                    <Input id="email2" type="email" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <Label htmlFor="phone2">Phone Number</Label>
                    <Input id="phone2" type="tel" placeholder="(555) 123-4567" required />
                  </div>
                  <div>
                    <Label htmlFor="gpa2">High School GPA</Label>
                    <Input id="gpa2" type="number" step="0.01" min="0" max="4" placeholder="3.5" required />
                  </div>
                  <div>
                    <Label htmlFor="term2">Preferred Start Term</Label>
                    <select
                      id="term2"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      required
                    >
                      <option value="">Select term</option>
                      <option value="fall">Fall 2025</option>
                      <option value="spring">Spring 2026</option>
                    </select>
                  </div>
                  <Button type="submit" className="w-full">Submit Application</Button>
                </form>
              </DialogContent>
            </Dialog>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <a href="mailto:nursing@university.edu">Contact Admissions</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
