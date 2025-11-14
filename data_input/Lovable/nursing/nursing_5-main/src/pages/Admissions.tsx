import { useState } from "react";
import { CheckCircle2, Calendar, FileText, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const requirements = [
  "High school diploma or equivalent (GED) with minimum 3.0 GPA",
  "Completed prerequisite courses: Biology, Chemistry, Anatomy & Physiology",
  "Minimum SAT score of 1100 or ACT score of 22 (or equivalent)",
  "Strong performance in science and mathematics courses",
  "Letters of recommendation (2 required, preferably from science teachers)",
  "Personal statement (500-750 words) explaining your interest in nursing",
  "Background check and health clearance upon acceptance",
  "Current CPR certification (Basic Life Support) before clinical rotations",
];

const deadlines = [
  { term: "Fall Semester", priority: "December 1", regular: "March 1", decision: "April 15" },
  { term: "Spring Semester", priority: "August 1", regular: "October 1", decision: "November 15" },
];

const applicationSteps = [
  {
    step: 1,
    title: "Submit Online Application",
    description: "Complete the online application form and pay the $50 application fee. Provide all required personal and academic information.",
  },
  {
    step: 2,
    title: "Submit Transcripts",
    description: "Request official transcripts from all previously attended high schools and colleges to be sent directly to our admissions office.",
  },
  {
    step: 3,
    title: "Standardized Test Scores",
    description: "Submit SAT or ACT scores. Use institution code 4567 when requesting score reports.",
  },
  {
    step: 4,
    title: "Letters of Recommendation",
    description: "Provide two letters of recommendation from teachers, preferably in science subjects, or academic advisors.",
  },
  {
    step: 5,
    title: "Personal Statement",
    description: "Write and submit a compelling personal statement explaining your passion for nursing and career goals.",
  },
  {
    step: 6,
    title: "Interview (if selected)",
    description: "Selected candidates will be invited for an interview with faculty members. This is an opportunity to demonstrate your commitment and fit for the program.",
  },
];

const Admissions = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application Request Received!",
        description: "We'll send you application instructions within 24 hours.",
      });
    }, 1500);
  };

  const handleInfoRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Information Request Sent!",
        description: "We'll send you detailed program information shortly.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="mb-6 text-white">Admissions</h1>
            <p className="text-xl text-white/95 mb-8">
              Begin your journey to becoming a skilled, compassionate nurse. We're excited to help you take the next step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="secondary" className="text-lg">
                    Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Start Your Application</DialogTitle>
                    <DialogDescription>
                      Fill out this form and we'll send you a link to begin your application.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleApplicationSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="app-name">Full Name</Label>
                      <Input id="app-name" placeholder="John Doe" required />
                    </div>
                    <div>
                      <Label htmlFor="app-email">Email Address</Label>
                      <Input id="app-email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div>
                      <Label htmlFor="app-phone">Phone Number</Label>
                      <Input id="app-phone" type="tel" placeholder="(555) 123-4567" required />
                    </div>
                    <div>
                      <Label htmlFor="app-term">Intended Start Term</Label>
                      <select
                        id="app-term"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                        required
                      >
                        <option value="">Select a term</option>
                        <option value="fall-2025">Fall 2025</option>
                        <option value="spring-2026">Spring 2026</option>
                        <option value="fall-2026">Fall 2026</option>
                      </select>
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Application Link"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="text-lg bg-white/10 hover:bg-white/20 border-white text-white">
                    Request Information
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Request Program Information</DialogTitle>
                    <DialogDescription>
                      Get detailed information about our BSN program delivered to your inbox.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleInfoRequestSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="info-name">Full Name</Label>
                      <Input id="info-name" placeholder="Jane Smith" required />
                    </div>
                    <div>
                      <Label htmlFor="info-email">Email Address</Label>
                      <Input id="info-email" type="email" placeholder="jane@example.com" required />
                    </div>
                    <div>
                      <Label htmlFor="info-interest">Area of Interest</Label>
                      <select
                        id="info-interest"
                        className="w-full px-3 py-2 border border-input rounded-md bg-background"
                      >
                        <option value="general">General Program Information</option>
                        <option value="curriculum">Curriculum Details</option>
                        <option value="financial">Financial Aid & Scholarships</option>
                        <option value="clinical">Clinical Experiences</option>
                      </select>
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Request Information"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-center animate-fade-in">Admission Requirements</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              To be considered for admission to our BSN program, applicants must meet the following requirements:
            </p>
            <div className="space-y-4">
              {requirements.map((requirement, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-accent/50 rounded-lg animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p>{requirement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deadlines */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-6 text-center animate-fade-in">Application Deadlines</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              We offer two admission cycles each year. Plan ahead to ensure you meet all deadlines.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deadlines.map((deadline, index) => (
                <Card
                  key={index}
                  className="card-shadow animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-primary">
                      <Calendar className="h-6 w-6" />
                      <span>{deadline.term}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Priority Deadline</p>
                      <p className="font-semibold text-lg">{deadline.priority}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Regular Deadline</p>
                      <p className="font-semibold text-lg">{deadline.regular}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Decision Notification</p>
                      <p className="font-semibold text-lg">{deadline.decision}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-6 text-center animate-fade-in">Application Process</h2>
            <p className="text-lg text-muted-foreground mb-12 text-center">
              Follow these steps to complete your application to our BSN program.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applicationSteps.map((item, index) => (
                <Card
                  key={index}
                  className="card-shadow hover:elevated-shadow transition-shadow duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {item.step}
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="mb-4 text-white">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 text-white/95 max-w-2xl mx-auto">
            Have questions about the application process? Our admissions team is here to help guide you through every step.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <a href="/contact">
              Contact Admissions <Send className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;
