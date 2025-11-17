import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Calendar, FileText, Send } from "lucide-react";
import ApplicationModal from "@/components/ApplicationModal";

const Admissions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const handleOpenModal = (title: string) => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const requirements = [
    "High school diploma or equivalent with a minimum GPA of 3.0",
    "Strong foundation in mathematics (Algebra II, Trigonometry, or higher)",
    "Official transcripts from all secondary schools attended",
    "Two letters of recommendation (academic or professional)",
    "Personal statement (500-750 words)",
    "SAT/ACT scores (optional but recommended)",
    "English proficiency test (TOEFL/IELTS) for international students",
  ];

  const deadlines = [
    { term: "Fall Semester", priority: "December 1", regular: "March 1", decision: "April 15" },
    { term: "Spring Semester", priority: "August 1", regular: "October 1", decision: "November 15" },
  ];

  const steps = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Complete the online application form and pay the application fee.",
    },
    {
      icon: Send,
      title: "Send Documents",
      description: "Submit all required documents including transcripts and recommendations.",
    },
    {
      icon: CheckCircle2,
      title: "Application Review",
      description: "Our admissions team will review your complete application package.",
    },
    {
      icon: Calendar,
      title: "Receive Decision",
      description: "You'll receive an admission decision by the notification date.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 text-center">
            Admissions
          </h1>
          <p className="text-xl text-primary-foreground/90 text-center max-w-3xl mx-auto">
            Start your journey to becoming a computer science professional
          </p>
        </div>
      </section>

      {/* Quick Apply CTA */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-border max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Ready to Apply?
              </h2>
              <p className="text-muted-foreground mb-6">
                Take the first step toward your computer science degree. Apply now or request more information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => handleOpenModal("Apply Now")}>
                  Start Application
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => handleOpenModal("Request Information")}
                >
                  Request Information
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Admission Requirements
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6">
                  To be considered for admission, applicants must meet the following requirements:
                </p>
                <ul className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Deadlines */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
            Application Deadlines
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Plan ahead with our application timeline
          </p>
          <div className="max-w-5xl mx-auto space-y-6">
            {deadlines.map((deadline, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h3 className="text-xl font-bold text-primary">{deadline.term}</h3>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">Priority Deadline</p>
                      <p className="font-semibold text-foreground">{deadline.priority}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">Regular Deadline</p>
                      <p className="font-semibold text-foreground">{deadline.regular}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">Decision Date</p>
                      <p className="font-semibold text-foreground">{deadline.decision}</p>
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Application Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <Card key={index} className="border-border hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="text-sm font-bold text-primary mb-2">Step {index + 1}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Aid */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
                  Financial Aid & Scholarships
                </h2>
                <p className="text-muted-foreground mb-6 text-center">
                  We believe that financial constraints should not prevent talented students from pursuing their 
                  education. Our financial aid office offers various scholarships, grants, and work-study programs.
                </p>
                <div className="flex justify-center">
                  <Button onClick={() => handleOpenModal("Financial Aid Information")}>
                    Learn About Financial Aid
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Questions About Admissions?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Our admissions team is here to help you through every step of the process
          </p>
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            onClick={() => handleOpenModal("Contact Admissions")}
          >
            Contact Admissions Team
          </Button>
        </div>
      </section>

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
      />
    </div>
  );
};

export default Admissions;
