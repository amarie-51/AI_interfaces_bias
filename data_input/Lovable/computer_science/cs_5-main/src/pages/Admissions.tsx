import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ApplicationModal from "@/components/ApplicationModal";
import { CheckCircle, Calendar, FileText, Users } from "lucide-react";

const Admissions = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (title: string) => {
    setModalTitle(title);
    setModalOpen(true);
  };

  const requirements = [
    "High school diploma or equivalent",
    "Minimum GPA of 3.0 on a 4.0 scale",
    "SAT score of 1200+ or ACT score of 25+ (optional)",
    "Strong foundation in mathematics (completed Calculus recommended)",
    "Two letters of recommendation",
    "Personal statement (500-750 words)",
    "Official high school transcripts",
    "Resume or list of extracurricular activities",
  ];

  const deadlines = [
    { semester: "Fall 2025", priority: "December 1, 2024", regular: "March 1, 2025" },
    { semester: "Spring 2026", priority: "August 1, 2025", regular: "November 1, 2025" },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
            <p className="text-xl text-primary-foreground/90">
              Begin your journey to becoming a computer science professional
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-4">
          <Button
            onClick={() => openModal("Submit Application")}
            size="lg"
            className="h-auto py-6"
          >
            <FileText className="mr-2 h-5 w-5" />
            Apply Now
          </Button>
          <Button
            onClick={() => openModal("Request Information")}
            variant="outline"
            size="lg"
            className="h-auto py-6"
          >
            <Users className="mr-2 h-5 w-5" />
            Request Info
          </Button>
          <Button
            onClick={() => openModal("Schedule Campus Visit")}
            variant="outline"
            size="lg"
            className="h-auto py-6"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Visit Campus
          </Button>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-foreground mb-8">Admission Requirements</h2>
        <Card className="p-8">
          <p className="text-muted-foreground mb-6">
            We seek motivated students with strong academic backgrounds and a passion for
            technology. Our holistic review process considers your entire application.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {requirements.map((requirement, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{requirement}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Application Deadlines */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-foreground mb-8">Application Deadlines</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {deadlines.map((deadline, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">{deadline.semester}</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Priority Deadline</div>
                  <div className="text-lg font-medium text-primary">{deadline.priority}</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Early consideration & scholarship priority
                  </div>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="text-sm text-muted-foreground mb-1">Regular Deadline</div>
                  <div className="text-lg font-medium text-primary">{deadline.regular}</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Standard admission review
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Application Steps */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-foreground mb-8">Application Steps</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "1",
              title: "Submit Application",
              description: "Complete online application form with personal information",
            },
            {
              step: "2",
              title: "Submit Documents",
              description: "Upload transcripts, test scores, and letters of recommendation",
            },
            {
              step: "3",
              title: "Application Review",
              description: "Our admissions committee reviews your complete application",
            },
            {
              step: "4",
              title: "Receive Decision",
              description: "Get your admission decision via email and student portal",
            },
          ].map((item, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Financial Aid */}
      <section className="container mx-auto px-4 py-8 mb-12">
        <Card className="bg-muted p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Financial Aid & Scholarships
          </h2>
          <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
            We're committed to making our program accessible. Over 80% of our students receive
            some form of financial assistance through scholarships, grants, or work-study programs.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$2M+</div>
              <div className="text-sm text-muted-foreground">Annual Scholarship Awards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">80%</div>
              <div className="text-sm text-muted-foreground">Students Receive Aid</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">$15K</div>
              <div className="text-sm text-muted-foreground">Average Scholarship Amount</div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button onClick={() => openModal("Financial Aid Information")} size="lg">
              Learn About Financial Aid
            </Button>
          </div>
        </Card>
      </section>

      <ApplicationModal open={modalOpen} onOpenChange={setModalOpen} title={modalTitle} />
    </div>
  );
};

export default Admissions;
