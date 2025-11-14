import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ApplicationModal from "@/components/ApplicationModal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Calendar, FileText, User } from "lucide-react";

const Admissions = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"apply" | "request-info">("apply");

  const openModal = (type: "apply" | "request-info") => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Start your journey toward becoming a registered nurse. We're here to guide you through every step of the application process.
          </p>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Admission Requirements</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-6">
              <h3 className="text-xl font-semibold mb-4">Academic Requirements</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">High School Diploma or Equivalent</p>
                    <p className="text-sm text-foreground/70">Accredited high school diploma, GED, or equivalent credential</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Minimum GPA: 3.0</p>
                    <p className="text-sm text-foreground/70">Cumulative GPA of 3.0 or higher on a 4.0 scale</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Prerequisite Courses</p>
                    <p className="text-sm text-foreground/70">Biology, Chemistry, and Math (Algebra or higher) with grade of C or better</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Standardized Test Scores</p>
                    <p className="text-sm text-foreground/70">SAT, ACT, or TEAS (Test of Essential Academic Skills) scores</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-4">Additional Requirements</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Personal Statement</p>
                    <p className="text-sm text-foreground/70">Essay describing your interest in nursing and career goals (500-750 words)</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Letters of Recommendation</p>
                    <p className="text-sm text-foreground/70">Two letters from teachers, counselors, or healthcare professionals</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Background Check</p>
                    <p className="text-sm text-foreground/70">Criminal background check required before clinical placement</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Health Requirements</p>
                    <p className="text-sm text-foreground/70">Current immunizations, health physical, and TB screening</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Deadlines */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Application Deadlines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6">
              <Calendar className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fall Admission</h3>
              <div className="space-y-2 text-foreground/80">
                <p className="text-sm">
                  <span className="font-medium">Priority Deadline:</span> February 1
                </p>
                <p className="text-sm">
                  <span className="font-medium">Regular Deadline:</span> April 15
                </p>
                <p className="text-sm">
                  <span className="font-medium">Classes Begin:</span> Late August
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <Calendar className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Spring Admission</h3>
              <div className="space-y-2 text-foreground/80">
                <p className="text-sm">
                  <span className="font-medium">Priority Deadline:</span> October 1
                </p>
                <p className="text-sm">
                  <span className="font-medium">Regular Deadline:</span> November 15
                </p>
                <p className="text-sm">
                  <span className="font-medium">Classes Begin:</span> Mid-January
                </p>
              </div>
            </Card>
          </div>
          <p className="text-center text-foreground/70 mt-6">
            Applications received by the priority deadline receive first consideration for admission and merit scholarships.
          </p>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">How to Apply</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-6 flex gap-4 items-start hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Submit Online Application</h3>
                <p className="text-foreground/70 mb-3">
                  Complete our online application form with your personal information, academic history, and program preferences.
                </p>
                <Button onClick={() => openModal("apply")}>Start Application</Button>
              </div>
            </Card>

            <Card className="p-6 flex gap-4 items-start hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Submit Required Documents</h3>
                <p className="text-foreground/70 mb-3">
                  Upload official transcripts, test scores, personal statement, and letters of recommendation through the application portal.
                </p>
                <Button variant="outline" onClick={() => openModal("request-info")}>
                  <FileText className="h-4 w-4 mr-2" />
                  Document Checklist
                </Button>
              </div>
            </Card>

            <Card className="p-6 flex gap-4 items-start hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Complete Interview (if selected)</h3>
                <p className="text-foreground/70">
                  Selected candidates will be invited for a personal interview with faculty members to discuss their goals and readiness for nursing education.
                </p>
              </div>
            </Card>

            <Card className="p-6 flex gap-4 items-start hover:shadow-lg transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">4</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Receive Admission Decision</h3>
                <p className="text-foreground/70">
                  Admission decisions are sent within 4-6 weeks of application completion. Admitted students receive enrollment information and next steps.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Financial Aid */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Financial Aid & Scholarships</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-foreground/80 mb-6 text-center">
              We're committed to making nursing education accessible. Financial aid options include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3">Merit Scholarships</h3>
                <p className="text-sm text-foreground/70">
                  Academic scholarships based on GPA and test scores, ranging from $2,000 to full tuition
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3">Need-Based Aid</h3>
                <p className="text-sm text-foreground/70">
                  Federal grants, work-study programs, and institutional aid for students with financial need
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3">Nursing Scholarships</h3>
                <p className="text-sm text-foreground/70">
                  Specialty scholarships from nursing organizations and healthcare foundations
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3">Loan Programs</h3>
                <p className="text-sm text-foreground/70">
                  Federal student loans and loan forgiveness programs for nurses serving in underserved areas
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <User className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Application?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Take the first step toward your nursing career today. Our admissions team is here to help you through the process.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => openModal("apply")}>
              Start Your Application
            </Button>
            <Button size="lg" variant="outline" onClick={() => openModal("request-info")} className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Request More Information
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ApplicationModal open={modalOpen} onOpenChange={setModalOpen} type={modalType} />
    </div>
  );
};

export default Admissions;
