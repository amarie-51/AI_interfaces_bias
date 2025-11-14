import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ApplicationModal from "@/components/ApplicationModal";
import { useState } from "react";
import { CheckCircle, Calendar, FileText, Users, ClipboardCheck } from "lucide-react";

const Admissions = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"apply" | "info">("apply");

  const openModal = (type: "apply" | "info") => {
    setModalType(type);
    setModalOpen(true);
  };

  const requirements = [
    "High school diploma or GED equivalent",
    "Minimum 3.0 cumulative GPA (on 4.0 scale)",
    "Completion of prerequisite courses: Biology, Chemistry, Anatomy & Physiology",
    "SAT score of 1200+ or ACT score of 24+ (or equivalent)",
    "Two letters of recommendation (academic or professional)",
    "Personal statement (500-750 words)",
    "Healthcare experience or volunteer work (preferred but not required)",
    "Background check and drug screening upon acceptance",
    "Current BLS/CPR certification (must be obtained before clinical placement)",
  ];

  const deadlines = [
    { term: "Fall Semester", priority: "November 1", regular: "February 1", notification: "March 15" },
    { term: "Spring Semester", priority: "June 1", regular: "September 1", notification: "October 15" },
  ];

  const steps = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Complete the online application form and pay the $50 application fee.",
    },
    {
      icon: ClipboardCheck,
      title: "Submit Documents",
      description: "Upload transcripts, test scores, recommendations, and personal statement.",
    },
    {
      icon: Users,
      title: "Interview",
      description: "Selected candidates will be invited for a virtual or in-person interview.",
    },
    {
      icon: CheckCircle,
      title: "Receive Decision",
      description: "Admissions decisions are sent by email and through the applicant portal.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-95 mb-8">
            Join our community of future healthcare leaders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90" onClick={() => openModal("apply")}>
              Start Your Application
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground"
              onClick={() => openModal("info")}
            >
              Request Information
            </Button>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Admission Requirements</h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  To be considered for admission to the BSN program, applicants must meet the following
                  criteria:
                </p>
                <div className="space-y-3">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{req}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Deadlines */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Application Deadlines</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deadlines.map((deadline, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4">{deadline.term}</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-muted-foreground">Priority Deadline</p>
                        <p className="font-semibold text-primary">{deadline.priority}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Regular Deadline</p>
                        <p className="font-semibold text-foreground">{deadline.regular}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Notification Date</p>
                        <p className="font-semibold text-foreground">{deadline.notification}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6 text-center">
              * Priority deadline applicants receive early consideration and scholarship priority
            </p>
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Application Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <Card key={index} className="relative">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                      <step.icon className="h-8 w-8" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financial Aid Info */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Financial Aid & Scholarships</h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground mb-6">
                  We believe that financial constraints should not prevent qualified students from pursuing
                  their nursing education. Our program offers various financial aid options:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Merit Scholarships</h3>
                    <p className="text-sm text-muted-foreground">
                      Awarded based on academic achievement, ranging from $5,000 to full tuition
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Federal Financial Aid</h3>
                    <p className="text-sm text-muted-foreground">
                      Complete FAFSA to determine eligibility for grants, loans, and work-study programs
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Nursing Grants</h3>
                    <p className="text-sm text-muted-foreground">
                      Special grants for students committed to working in underserved communities
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Payment Plans</h3>
                    <p className="text-sm text-muted-foreground">
                      Flexible payment options available to help manage tuition costs
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Take the first step toward your nursing career today
          </p>
          <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90" onClick={() => openModal("apply")}>
            Begin Application
          </Button>
        </div>
      </section>

      <ApplicationModal open={modalOpen} onOpenChange={setModalOpen} type={modalType} />
    </div>
  );
};

export default Admissions;
