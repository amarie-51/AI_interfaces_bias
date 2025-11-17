import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, FileText, UserCheck } from "lucide-react";
import ApplicationModal from "@/components/ApplicationModal";

const Admissions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const requirements = [
    "High school diploma or equivalent with minimum 3.0 GPA",
    "Prerequisite courses: Biology, Chemistry, Anatomy & Physiology",
    "SAT (1100+) or ACT (22+) scores",
    "Two letters of recommendation",
    "Personal statement (500-750 words)",
    "Background check and health clearance",
    "Current CPR certification (can be obtained after admission)",
  ];

  const deadlines = [
    { term: "Fall Admission", date: "February 1", notification: "April 15" },
    { term: "Spring Admission", date: "October 1", notification: "December 1" },
  ];

  const steps = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Complete the online application and pay the $50 application fee"
    },
    {
      icon: UserCheck,
      title: "Submit Requirements",
      description: "Upload transcripts, test scores, letters of recommendation, and personal statement"
    },
    {
      icon: Calendar,
      title: "Interview Process",
      description: "Selected candidates will be invited for an interview with faculty"
    },
    {
      icon: CheckCircle,
      title: "Receive Decision",
      description: "Admission decisions are sent by the notification dates listed above"
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-6 text-foreground">Admissions</h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            Start your journey to becoming a registered nurse. We review applications holistically and look for students who demonstrate academic excellence and a passion for nursing.
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Admission Requirements</h2>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Deadlines */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Application Deadlines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {deadlines.map((deadline) => (
              <Card key={deadline.term}>
                <CardHeader>
                  <CardTitle className="text-primary">{deadline.term}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Application Deadline:</span>
                      <span className="font-semibold text-foreground">{deadline.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Decision Notification:</span>
                      <span className="font-semibold text-foreground">{deadline.notification}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <Card key={step.title} className="relative">
                <CardContent className="pt-6 text-center">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <step.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold text-lg mb-2 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Aid Info */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6 text-foreground">Financial Aid</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground mb-4">
                  We believe that financial constraints should not prevent qualified students from pursuing their nursing education. Our financial aid office works with students to explore various funding options:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Merit-based scholarships available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Federal and state financial aid programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">Work-study opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground">External nursing scholarships and grants</span>
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  Contact our financial aid office at financialaid@university.edu or call (555) 123-4567 ext. 200 for personalized assistance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Ready to Apply?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step toward your nursing career. Our admissions team is here to support you through every step of the process.
          </p>
          <Button size="lg" onClick={() => setIsModalOpen(true)}>
            Start Your Application
          </Button>
        </div>
      </section>

      <ApplicationModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};

export default Admissions;
