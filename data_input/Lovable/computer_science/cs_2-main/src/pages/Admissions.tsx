import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, FileText, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ApplicationModal from "@/components/ApplicationModal";

const Admissions = () => {
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  const requirements = [
    "High school diploma or equivalent",
    "Minimum GPA of 3.0 on a 4.0 scale",
    "SAT score of 1200+ or ACT score of 24+",
    "Mathematics: Algebra II, Geometry, Pre-Calculus",
    "Two letters of recommendation",
    "Personal statement (500-750 words)",
    "Official transcripts from all schools attended",
    "English proficiency test (for international students)",
  ];

  const deadlines = [
    { semester: "Fall 2025", earlyAction: "November 1, 2024", regularDecision: "February 1, 2025", notificationDate: "March 15, 2025" },
    { semester: "Spring 2026", earlyAction: "July 1, 2025", regularDecision: "October 1, 2025", notificationDate: "November 15, 2025" },
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Submit Online Application",
      description: "Complete the online application form with your personal information and academic history."
    },
    {
      step: 2,
      title: "Send Required Documents",
      description: "Submit transcripts, test scores, letters of recommendation, and personal statement."
    },
    {
      step: 3,
      title: "Application Review",
      description: "Our admissions committee will carefully review your application and all supporting materials."
    },
    {
      step: 4,
      title: "Admission Decision",
      description: "Receive your admission decision via email and access your applicant portal for next steps."
    },
    {
      step: 5,
      title: "Accept Offer & Enroll",
      description: "Accept your admission offer, submit enrollment deposit, and register for courses."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Admissions</h1>
            <p className="text-xl max-w-3xl">
              Join our community of innovative thinkers and future tech leaders. 
              We're excited to review your application!
            </p>
          </div>
        </section>

        {/* Quick Apply CTA */}
        <section className="py-12 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Start your application today and take the first step toward an exciting career in computer science.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => setShowApplicationModal(true)}
            >
              Start Application
            </Button>
          </div>
        </section>

        {/* Admission Requirements */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Admission Requirements</h2>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <FileText className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">What You Need to Apply</h3>
                      <p className="text-muted-foreground mb-6">
                        We seek students who demonstrate academic excellence, passion for technology, 
                        and the potential to thrive in our rigorous program.
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {requirements.map((requirement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <p className="text-foreground">{requirement}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Deadlines */}
        <section className="py-16 bg-section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-4xl font-bold mb-4">Important Deadlines</h2>
                <p className="text-lg text-muted-foreground">
                  Plan ahead and submit your application by these key dates
                </p>
              </div>
              <div className="space-y-6">
                {deadlines.map((deadline, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-primary mb-4">{deadline.semester}</h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <p className="font-semibold mb-1">Early Action</p>
                          <p className="text-muted-foreground">{deadline.earlyAction}</p>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Regular Decision</p>
                          <p className="text-muted-foreground">{deadline.regularDecision}</p>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Notification Date</p>
                          <p className="text-muted-foreground">{deadline.notificationDate}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-4">Application Process</h2>
              <p className="text-lg text-muted-foreground">
                Follow these steps to complete your application
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {applicationSteps.map((item) => (
                <Card key={item.step} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-6 items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Questions About Admissions?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Our admissions team is here to help you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => setShowApplicationModal(true)}
              >
                Apply Now
              </Button>
              <a href="/contact">
                <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Contact Admissions
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ApplicationModal open={showApplicationModal} onOpenChange={setShowApplicationModal} />
    </div>
  );
};

export default Admissions;
