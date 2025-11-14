import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle, Calendar, FileText, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Admissions = () => {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

  const requirements = [
    {
      title: "Academic Requirements",
      items: [
        "High school diploma or equivalent",
        "Minimum GPA of 3.0 (on 4.0 scale)",
        "Strong background in mathematics",
        "Completed coursework in calculus and physics (preferred)"
      ]
    },
    {
      title: "Application Materials",
      items: [
        "Completed application form",
        "Official high school transcripts",
        "Two letters of recommendation",
        "Personal statement (500-750 words)",
        "Standardized test scores (SAT/ACT)"
      ]
    },
    {
      title: "Additional Requirements",
      items: [
        "Application fee ($75)",
        "English proficiency test (for international students)",
        "Portfolio of projects (optional but recommended)",
        "Interview (selected applicants)"
      ]
    }
  ];

  const timeline = [
    { date: "November 1", event: "Early Decision Deadline", icon: <Calendar className="h-6 w-6" /> },
    { date: "January 15", event: "Regular Decision Deadline", icon: <Calendar className="h-6 w-6" /> },
    { date: "March 15", event: "Admission Decisions Released", icon: <CheckCircle className="h-6 w-6" /> },
    { date: "May 1", event: "Enrollment Deposit Due", icon: <FileText className="h-6 w-6" /> },
    { date: "August 15", event: "Orientation Begins", icon: <Users className="h-6 w-6" /> }
  ];

  const steps = [
    {
      number: "1",
      title: "Create an Account",
      description: "Register on our admissions portal to begin your application."
    },
    {
      number: "2",
      title: "Complete Application",
      description: "Fill out the online application form with your personal and academic information."
    },
    {
      number: "3",
      title: "Submit Materials",
      description: "Upload all required documents including transcripts and recommendations."
    },
    {
      number: "4",
      title: "Pay Application Fee",
      description: "Submit the $75 application fee or request a fee waiver if eligible."
    },
    {
      number: "5",
      title: "Track Your Application",
      description: "Monitor your application status through the admissions portal."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif font-bold text-5xl mb-6">Admissions</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90 mb-8">
            Start your journey to becoming a computer science professional. We're looking for passionate students ready to innovate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => setShowApplyModal(true)}
            >
              Apply Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => setShowInfoModal(true)}
            >
              Request Information
            </Button>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-4xl mb-4">Admission Requirements</h2>
            <p className="text-xl text-muted-foreground">What you need to apply</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-serif font-bold text-xl mb-4 text-primary">{req.title}</h3>
                <ul className="space-y-3">
                  {req.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-sm">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-4xl mb-4">Important Deadlines</h2>
            <p className="text-xl text-muted-foreground">Mark your calendar</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <Card key={index} className="p-6 flex items-center hover:shadow-[var(--shadow-hover)] transition-shadow">
                  <div className="text-primary mr-4">
                    {item.icon}
                  </div>
                  <div className="flex-grow">
                    <p className="font-semibold">{item.event}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{item.date}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-4xl mb-4">Application Steps</h2>
            <p className="text-xl text-muted-foreground">How to apply in 5 easy steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="bg-primary text-primary-foreground rounded-full h-12 w-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Modal */}
      <Dialog open={showApplyModal} onOpenChange={setShowApplyModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Apply to the Computer Science Program</DialogTitle>
            <DialogDescription>
              You will be redirected to our secure admissions portal to complete your application.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Before you begin, make sure you have:
            </p>
            <ul className="text-sm space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Your academic transcripts ready</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Contact information for recommenders</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Personal statement prepared</span>
              </li>
            </ul>
            <Button className="w-full" onClick={() => setShowApplyModal(false)}>
              Continue to Application Portal
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Request Info Modal */}
      <Dialog open={showInfoModal} onOpenChange={setShowInfoModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request Information</DialogTitle>
            <DialogDescription>
              We'll send you detailed information about our Computer Science program.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Learn more about:
            </p>
            <ul className="text-sm space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Detailed curriculum and course descriptions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Financial aid and scholarship opportunities</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5" />
                <span>Campus life and student resources</span>
              </li>
            </ul>
            <Button className="w-full" onClick={() => setShowInfoModal(false)}>
              Submit Request
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Admissions;
