import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, FileText, Users, ArrowRight } from "lucide-react";
import ApplicationModal from "@/components/ApplicationModal";

const Admissions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const requirements = [
    {
      title: "Academic Requirements",
      items: [
        "High school diploma or equivalent (GED)",
        "Minimum GPA of 3.0 on a 4.0 scale",
        "Completion of prerequisite courses: Algebra II, Pre-Calculus, and one science course",
        "Strong performance in mathematics and analytical subjects",
      ],
    },
    {
      title: "Application Materials",
      items: [
        "Completed online application form",
        "Official high school transcripts",
        "Two letters of recommendation (academic or professional)",
        "Personal statement (500-750 words)",
        "Resume or CV highlighting achievements and activities",
      ],
    },
    {
      title: "Optional Materials",
      items: [
        "SAT/ACT scores (test-optional policy in effect)",
        "Portfolio of programming projects or technical work",
        "Proof of relevant certifications or courses",
        "TOEFL/IELTS scores for international students",
      ],
    },
  ];

  const deadlines = [
    { term: "Fall Semester", deadline: "June 1", startDate: "September" },
    { term: "Spring Semester", deadline: "November 1", startDate: "January" },
    { term: "Summer Session", deadline: "March 1", startDate: "June" },
  ];

  const steps = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Complete the online application and submit required documents.",
    },
    {
      icon: Users,
      title: "Application Review",
      description: "Our admissions team reviews your application within 2-3 weeks.",
    },
    {
      icon: CheckCircle,
      title: "Receive Decision",
      description: "Get your admission decision via email and postal mail.",
    },
    {
      icon: Calendar,
      title: "Enroll & Register",
      description: "Accept your offer and register for classes before the deadline.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95 mb-8">
            Take the first step toward an exciting career in computer science. We're here to guide you through every stage of the application process.
          </p>
          <Button size="lg" variant="secondary" onClick={() => setIsModalOpen(true)}>
            Start Your Application <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Application Requirements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
              Admission Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {requirements.map((req, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                      {req.title}
                    </h3>
                    <ul className="space-y-3">
                      {req.items.map((item, idx) => (
                        <li key={idx} className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Deadlines */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
              Application Deadlines
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {deadlines.map((deadline, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                      {deadline.term}
                    </h3>
                    <p className="text-muted-foreground mb-1">
                      <strong>Application Deadline:</strong>
                    </p>
                    <p className="text-accent font-bold text-lg mb-2">{deadline.deadline}</p>
                    <p className="text-sm text-muted-foreground">
                      Classes start in {deadline.startDate}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8">
              We recommend submitting your application at least one month before the deadline to ensure timely processing.
            </p>
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
              Application Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h3 className="font-semibold mb-2 text-card-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Join our community of innovative thinkers and future tech leaders. Start your application today and take the first step toward your computer science degree.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary" onClick={() => setIsModalOpen(true)}>
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-background/10 hover:bg-background/20 text-primary-foreground border-primary-foreground"
              asChild
            >
              <a href="mailto:admissions@csuni.edu">Contact Admissions</a>
            </Button>
          </div>
        </div>
      </section>

      <ApplicationModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
};

export default Admissions;
