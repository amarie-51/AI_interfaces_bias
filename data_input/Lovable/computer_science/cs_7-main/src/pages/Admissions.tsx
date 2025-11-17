import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, FileText, Send } from "lucide-react";
import ApplicationModal from "@/components/ApplicationModal";

const Admissions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const requirements = [
    "High school diploma or equivalent",
    "Minimum 3.0 GPA",
    "SAT scores (Math: 600+, Evidence-Based Reading: 550+) or ACT composite score of 24+",
    "Two letters of recommendation",
    "Personal statement (500-750 words)",
    "Official high school transcripts",
    "Application fee ($50)",
  ];

  const deadlines = [
    { type: "Early Decision", date: "November 1", notification: "December 15" },
    { type: "Regular Decision", date: "January 15", notification: "March 31" },
    { type: "Rolling Admission", date: "Until May 1", notification: "4-6 weeks after application" },
  ];

  const steps = [
    {
      number: 1,
      title: "Submit Application",
      description: "Complete our online application form and pay the application fee.",
    },
    {
      number: 2,
      title: "Send Supporting Documents",
      description: "Submit transcripts, test scores, letters of recommendation, and personal statement.",
    },
    {
      number: 3,
      title: "Review Process",
      description: "Our admissions committee carefully reviews all applications.",
    },
    {
      number: 4,
      title: "Decision Notification",
      description: "Receive your admission decision via email and online portal.",
    },
    {
      number: 5,
      title: "Accept & Enroll",
      description: "Accept your offer and complete enrollment procedures to secure your spot.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-hero-start to-hero-end text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Start your journey towards a rewarding career in computer science. We're here to guide 
            you through every step of the application process.
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Admission Requirements</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                      <p>{requirement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Deadlines */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">Application Deadlines</h2>
              <p className="text-muted-foreground">
                Choose the application timeline that works best for you
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {deadlines.map((deadline, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{deadline.type}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm text-muted-foreground">Deadline</p>
                        <p className="font-semibold">{deadline.date}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Notification</p>
                        <p className="font-semibold">{deadline.notification}</p>
                      </div>
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Application Process</h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl">
                        {step.number}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <FileText className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Start your application today and take the first step towards your future in computer science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="bg-accent hover:bg-accent/90"
              >
                <Send className="mr-2 h-5 w-5" />
                Start Application
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-background/20 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-background/30"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ApplicationModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};

export default Admissions;
