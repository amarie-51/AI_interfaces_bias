import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ApplicationModal from "@/components/ApplicationModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Calendar, FileText, Send } from "lucide-react";

const Admissions = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const requirements = [
    "High school diploma or equivalent (GED)",
    "Minimum GPA of 3.0 on a 4.0 scale",
    "Completed application form",
    "Official high school transcripts",
    "SAT/ACT scores (optional for recent applicants)",
    "Two letters of recommendation",
    "Personal statement (500-750 words)",
    "Prior coursework in mathematics (Algebra II or higher)",
  ];

  const deadlines = [
    { term: "Fall Semester", priority: "December 1", regular: "March 15", notification: "April 1" },
    { term: "Spring Semester", priority: "August 1", regular: "October 15", notification: "November 1" },
  ];

  const applicationSteps = [
    {
      icon: FileText,
      title: "Step 1: Complete Application",
      description: "Fill out the online application form with your personal and academic information.",
    },
    {
      icon: Send,
      title: "Step 2: Submit Documents",
      description: "Upload transcripts, test scores (if applicable), and letters of recommendation.",
    },
    {
      icon: FileText,
      title: "Step 3: Write Statement",
      description: "Craft a personal statement explaining your interest in computer science and career goals.",
    },
    {
      icon: Calendar,
      title: "Step 4: Review & Decision",
      description: "Our admissions committee reviews applications and sends decisions by the notification date.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in">Admissions</h1>
            <p className="text-xl opacity-95 max-w-3xl animate-slide-up">
              Start your journey in computer science. We're here to guide you through the application process.
            </p>
          </div>
        </section>

        {/* Admission Requirements */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Admission Requirements</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {requirements.map((requirement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                        <p className="text-muted-foreground">{requirement}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Deadlines */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Application Deadlines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {deadlines.map((deadline, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{deadline.term}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Priority Deadline</p>
                      <p className="text-lg font-semibold">{deadline.priority}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Regular Deadline</p>
                      <p className="text-lg font-semibold">{deadline.regular}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Decision Notification</p>
                      <p className="text-lg font-semibold">{deadline.notification}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto">
              Priority applicants receive early consideration for merit scholarships and housing preferences.
            </p>
          </div>
        </section>

        {/* Application Steps */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Application Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applicationSteps.map((step, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-8">
                    <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Aid */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Financial Aid & Scholarships</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We're committed to making education accessible. Our financial aid office can help you 
                explore scholarships, grants, loans, and work-study opportunities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <p className="text-3xl font-bold text-accent mb-2">$5M+</p>
                    <p className="text-sm text-muted-foreground">In Scholarships Awarded Annually</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <p className="text-3xl font-bold text-accent mb-2">85%</p>
                    <p className="text-sm text-muted-foreground">Of Students Receive Financial Aid</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <p className="text-3xl font-bold text-accent mb-2">100+</p>
                    <p className="text-sm text-muted-foreground">Scholarship Opportunities</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
              Take the first step toward your future in computer science.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => setModalOpen(true)}
            >
              Start Your Application
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <ApplicationModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
};

export default Admissions;
