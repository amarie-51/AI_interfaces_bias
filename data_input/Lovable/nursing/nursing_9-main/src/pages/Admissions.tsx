import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, FileText, Calendar, UserCheck, Send } from "lucide-react";
import { ApplicationModal } from "@/components/ApplicationModal";

const requirements = [
  {
    category: "Academic Requirements",
    items: [
      "High school diploma or equivalent (GED)",
      "Minimum 3.0 GPA on a 4.0 scale",
      "Completion of prerequisite courses: Biology, Chemistry, Anatomy & Physiology",
      "SAT score of 1100+ or ACT score of 22+ (optional for some applicants)",
    ],
  },
  {
    category: "Application Materials",
    items: [
      "Completed online application form",
      "Official high school transcripts",
      "Official college transcripts (if applicable)",
      "Two letters of recommendation",
      "Personal statement (500-750 words)",
      "Resume or CV highlighting healthcare experience",
    ],
  },
  {
    category: "Additional Requirements",
    items: [
      "Background check and drug screening",
      "Current CPR certification (or obtain before program start)",
      "Immunization records (MMR, Hepatitis B, Varicella, Tdap, TB test)",
      "Health insurance coverage",
      "Attend an admissions interview (if selected)",
    ],
  },
];

const deadlines = [
  {
    term: "Fall Admission",
    priority: "December 1",
    regular: "February 15",
    decision: "March 31",
  },
  {
    term: "Spring Admission",
    priority: "August 1",
    regular: "October 15",
    decision: "November 30",
  },
];

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "Submit Application",
    description: "Complete and submit your online application along with all required documents and application fee.",
  },
  {
    number: 2,
    icon: UserCheck,
    title: "Application Review",
    description: "Our admissions committee will review your application materials and academic qualifications.",
  },
  {
    number: 3,
    icon: Calendar,
    title: "Interview (if selected)",
    description: "Selected applicants will be invited for an interview with faculty members and current students.",
  },
  {
    number: 4,
    icon: Send,
    title: "Admission Decision",
    description: "Receive your admission decision and enrollment instructions to begin your nursing journey.",
  },
];

export default function Admissions() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"apply" | "info">("apply");

  const handleOpenModal = (type: "apply" | "info") => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Admissions
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Start your journey to becoming a registered nurse
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => handleOpenModal("apply")}
            >
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleOpenModal("info")}
            >
              Request Information
            </Button>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Admission Requirements
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            To be considered for admission to our BSN program, applicants must meet the following requirements:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    {req.category}
                  </h3>
                  <ul className="space-y-3">
                    {req.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 w-5 h-5 bg-success rounded-full flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-success-foreground" />
                        </div>
                        <span className="ml-3 text-muted-foreground text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deadlines */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Application Deadlines
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            We accept applications twice a year for fall and spring admission. Early application is encouraged as spaces are limited.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {deadlines.map((deadline, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Badge className="text-lg px-4 py-1">
                      {deadline.term}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                      <span className="text-muted-foreground">Priority Deadline</span>
                      <span className="font-semibold text-foreground">
                        {deadline.priority}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                      <span className="text-muted-foreground">Regular Deadline</span>
                      <span className="font-semibold text-foreground">
                        {deadline.regular}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Decision Notification</span>
                      <span className="font-semibold text-primary">
                        {deadline.decision}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Application Process
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Follow these simple steps to complete your application to the BSN program
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border-border h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 -mt-8 relative z-10">
                      <span className="text-xl font-bold text-primary">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                    <div className="w-8 h-0.5 bg-border"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Application?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Take the first step toward your nursing career today. Our admissions team is here to support you throughout the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              onClick={() => handleOpenModal("apply")}
            >
              Start Your Application
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => handleOpenModal("info")}
            >
              Have Questions? Contact Us
            </Button>
          </div>
        </div>
      </section>

      <ApplicationModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        type={modalType}
      />
    </>
  );
}
