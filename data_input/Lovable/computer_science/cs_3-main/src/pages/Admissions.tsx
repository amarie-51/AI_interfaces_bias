import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Calendar, FileText, UserCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplicationModal from "@/components/ApplicationModal";

const Admissions = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const requirements = [
    "High school diploma or equivalent",
    "Minimum GPA of 3.0 on a 4.0 scale",
    "SAT score of 1200+ or ACT score of 25+",
    "Completed prerequisite courses in mathematics (including Calculus)",
    "Two letters of recommendation",
    "Personal statement (500-750 words)",
    "Official high school transcripts",
    "English proficiency test (for international students)"
  ];

  const deadlines = [
    { term: "Fall Admission", deadline: "January 15", notification: "April 1" },
    { term: "Spring Admission", deadline: "September 15", notification: "November 1" },
    { term: "Early Decision", deadline: "November 1", notification: "December 15" }
  ];

  const steps = [
    {
      icon: FileText,
      title: "1. Submit Application",
      description: "Complete the online application form with your personal information and academic history"
    },
    {
      icon: UserCheck,
      title: "2. Required Documents",
      description: "Upload transcripts, test scores, letters of recommendation, and personal statement"
    },
    {
      icon: Calendar,
      title: "3. Application Review",
      description: "Our admissions committee reviews your application holistically"
    },
    {
      icon: Check,
      title: "4. Decision & Enrollment",
      description: "Receive your decision and complete enrollment if accepted"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Admissions</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 mb-8">
            Take the first step toward an exciting career in computer science
          </p>
          <Button 
            onClick={() => setModalOpen(true)}
            size="lg" 
            className="bg-accent-gradient hover:opacity-90 text-lg h-12 px-8"
          >
            Apply Now
          </Button>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Admission Requirements</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="border-border shadow-card">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
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
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Application Deadlines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {deadlines.map((item, index) => (
              <Card key={index} className="border-border shadow-card hover:shadow-hover transition-shadow">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4">{item.term}</h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm text-muted-foreground">Application Deadline</p>
                      <p className="font-semibold text-primary">{item.deadline}</p>
                    </div>
                    <div className="border-t border-border pt-2">
                      <p className="text-sm text-muted-foreground">Decision By</p>
                      <p className="font-semibold">{item.notification}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <Card key={index} className="border-border shadow-card hover:shadow-hover transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your application today and join our community of future tech leaders
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              onClick={() => setModalOpen(true)}
              size="lg" 
              className="bg-accent-gradient hover:opacity-90 text-lg h-12 px-8"
            >
              Start Application
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg h-12 px-8">
              <a href="mailto:admissions@csuniversity.edu">Contact Admissions</a>
            </Button>
          </div>
        </div>
      </section>

      <ApplicationModal open={modalOpen} onOpenChange={setModalOpen} />
      
      <Footer />
    </div>
  );
};

export default Admissions;
