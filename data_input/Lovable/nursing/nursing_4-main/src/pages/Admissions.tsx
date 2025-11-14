import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ApplicationModal } from "@/components/ApplicationModal";
import { useState } from "react";
import { CheckCircle2, Calendar, ClipboardList, FileText, ArrowRight } from "lucide-react";

const Admissions = () => {
  const [applicationOpen, setApplicationOpen] = useState(false);

  const requirements = [
    {
      category: "Academic Requirements",
      items: [
        "High school diploma or equivalent (GED)",
        "Minimum cumulative GPA of 3.0 on a 4.0 scale",
        "Completion of prerequisite courses: Biology, Chemistry, Anatomy & Physiology",
        "SAT score of 1100+ or ACT score of 22+ (optional for applicants with college credits)",
      ],
    },
    {
      category: "Application Materials",
      items: [
        "Completed online application form",
        "Official high school and college transcripts",
        "Two letters of recommendation (one from a science teacher)",
        "Personal statement (500-750 words)",
        "Resume or list of extracurricular activities and volunteer experience",
      ],
    },
    {
      category: "Additional Requirements",
      items: [
        "Background check clearance",
        "Health screening and immunization records",
        "Current CPR/BLS certification (can be completed after acceptance)",
        "Interview with admissions committee (by invitation)",
      ],
    },
  ];

  const deadlines = [
    {
      term: "Fall Semester",
      applicationDeadline: "March 15",
      decisionNotification: "April 30",
      enrollmentDeadline: "June 1",
    },
    {
      term: "Spring Semester",
      applicationDeadline: "October 15",
      decisionNotification: "November 30",
      enrollmentDeadline: "January 5",
    },
  ];

  const steps = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Complete our online application and submit all required materials including transcripts and letters of recommendation.",
    },
    {
      icon: ClipboardList,
      title: "Application Review",
      description: "Our admissions committee carefully reviews your application, academic record, and supporting documents.",
    },
    {
      icon: Calendar,
      title: "Interview (If Selected)",
      description: "Qualified candidates are invited for an interview with faculty and admissions staff to discuss their goals and fit with the program.",
    },
    {
      icon: CheckCircle2,
      title: "Admission Decision",
      description: "Receive your admission decision and begin the enrollment process, including orientation and course registration.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Page Header */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Begin your journey toward becoming a registered nurse
          </p>
          <Button
            size="lg"
            onClick={() => setApplicationOpen(true)}
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Start Your Application
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            Admission Requirements
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            We seek motivated students who demonstrate academic excellence, compassion for others,
            and a commitment to the nursing profession.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {requirements.map((requirement, index) => (
              <Card key={index} className="shadow-medium">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">{requirement.category}</h3>
                  <ul className="space-y-3">
                    {requirement.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Deadlines */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            Application Deadlines
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {deadlines.map((deadline, index) => (
              <Card key={index} className="shadow-medium">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-6 text-primary text-center">
                    {deadline.term}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                      <span className="text-muted-foreground">Application Deadline</span>
                      <span className="font-semibold text-foreground">{deadline.applicationDeadline}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                      <span className="text-muted-foreground">Decision Notification</span>
                      <span className="font-semibold text-foreground">{deadline.decisionNotification}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Enrollment Deadline</span>
                      <span className="font-semibold text-foreground">{deadline.enrollmentDeadline}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            Application Process
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Follow these four steps to complete your application to our BSN program
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="shadow-medium hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-sm font-bold text-muted-foreground mb-2">
                      Step {index + 1}
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tuition & Financial Aid */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            Tuition & Financial Aid
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="shadow-medium">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Estimated Costs</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tuition (per year)</span>
                    <span className="font-semibold">$18,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fees & Materials</span>
                    <span className="font-semibold">$2,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Room & Board</span>
                    <span className="font-semibold">$12,000</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-border">
                    <span className="font-bold">Total (per year)</span>
                    <span className="font-bold text-primary">$32,500</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Financial Aid Options</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">
                      Federal student loans and grants (FAFSA)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">
                      Merit-based scholarships (up to $10,000/year)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">
                      Need-based institutional grants
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">
                      Work-study opportunities
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">
                      External nursing scholarships
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Apply?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step toward your nursing career. Submit your application today.
          </p>
          <Button
            size="lg"
            onClick={() => setApplicationOpen(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Begin Application
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
      <ApplicationModal open={applicationOpen} onOpenChange={setApplicationOpen} />
    </div>
  );
};

export default Admissions;
