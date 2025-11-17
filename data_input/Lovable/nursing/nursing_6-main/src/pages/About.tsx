import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, Users, Target, Award, Briefcase } from "lucide-react";
import clinicalPractice from "@/assets/clinical-practice.jpg";
import careerOpportunities from "@/assets/career-opportunities.jpg";

const About = () => {
  const programInfo = [
    { icon: Clock, label: "Duration", value: "4 Years (8 Semesters)" },
    { icon: Award, label: "Degree", value: "Bachelor of Science in Nursing (BSN)" },
    { icon: BookOpen, label: "Total Credits", value: "120 Credit Hours" },
    { icon: Users, label: "Study Mode", value: "Full-time, On-campus" },
  ];

  const learningOutcomes = [
    "Demonstrate clinical competence in providing safe, evidence-based patient care across diverse settings",
    "Apply critical thinking and clinical reasoning to make sound nursing judgments",
    "Communicate effectively with patients, families, and interprofessional healthcare teams",
    "Integrate research findings and evidence-based practice into clinical decision-making",
    "Demonstrate cultural competence and respect for diversity in healthcare delivery",
    "Practice within legal, ethical, and professional standards of nursing",
  ];

  const curriculum = [
    {
      year: "Year 1",
      courses: [
        "Foundations of Nursing Practice",
        "Anatomy & Physiology I & II",
        "Introduction to Health Assessment",
        "Pharmacology Fundamentals",
        "General Education Requirements",
      ],
    },
    {
      year: "Year 2",
      courses: [
        "Medical-Surgical Nursing I",
        "Pathophysiology",
        "Nursing Research & Evidence-Based Practice",
        "Mental Health Nursing",
        "Clinical Practicum I",
      ],
    },
    {
      year: "Year 3",
      courses: [
        "Medical-Surgical Nursing II",
        "Maternal-Child Nursing",
        "Pediatric Nursing",
        "Community Health Nursing",
        "Clinical Practicum II",
      ],
    },
    {
      year: "Year 4",
      courses: [
        "Advanced Medical-Surgical Nursing",
        "Leadership & Management in Nursing",
        "Complex Care & Critical Thinking",
        "Nursing Capstone",
        "Preceptorship Experience",
      ],
    },
  ];

  const careers = [
    "Registered Nurse (Hospital Settings)",
    "Community Health Nurse",
    "Pediatric Nurse",
    "Cardiac Care Nurse",
    "Oncology Nurse",
    "Emergency Department Nurse",
    "Operating Room Nurse",
    "Nurse Educator",
    "Research Nurse",
    "Public Health Nurse",
  ];

  const reasons = [
    {
      title: "CCNE Accredited",
      description: "Our program maintains the highest standards recognized by the Commission on Collegiate Nursing Education",
    },
    {
      title: "95% NCLEX Pass Rate",
      description: "Our graduates consistently exceed national averages on the NCLEX-RN licensing examination",
    },
    {
      title: "State-of-the-Art Facilities",
      description: "Train in modern simulation labs that replicate real-world clinical environments",
    },
    {
      title: "Clinical Partnerships",
      description: "Gain hands-on experience at prestigious hospitals and healthcare facilities",
    },
    {
      title: "Small Class Sizes",
      description: "Benefit from personalized attention with student-to-faculty ratios that support your success",
    },
    {
      title: "Career Support",
      description: "Access career counseling, job placement assistance, and professional development resources",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            About Our BSN Program
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            A comprehensive nursing education that combines academic excellence with practical experience to prepare you for a rewarding healthcare career.
          </p>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Program Overview</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Our Bachelor of Science in Nursing (BSN) program is designed to prepare compassionate, competent, and confident nurses who are ready to meet the complex healthcare needs of diverse populations. Through a combination of rigorous coursework, hands-on simulation training, and extensive clinical experiences, students develop the knowledge, skills, and professional values essential for excellence in nursing practice.
              </p>
              <p>
                The program emphasizes evidence-based practice, critical thinking, cultural competence, and interprofessional collaboration. Students learn to provide holistic, patient-centered care while developing leadership skills that prepare them for evolving roles in healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Program Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {programInfo.map((info, index) => (
              <Card key={index} className="text-center border-border">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">{info.label}</h3>
                  <p className="text-lg font-semibold text-foreground">{info.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Learning Outcomes</h2>
            </div>
            <p className="text-muted-foreground mb-8">
              Upon completion of the BSN program, graduates will be able to:
            </p>
            <div className="space-y-4">
              {learningOutcomes.map((outcome, index) => (
                <div key={index} className="flex gap-3">
                  <Badge variant="outline" className="mt-1 flex-shrink-0">
                    {index + 1}
                  </Badge>
                  <p className="text-muted-foreground">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Practice Image */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <img
              src={clinicalPractice}
              alt="Students practicing in clinical simulation lab"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Curriculum by Year</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {curriculum.map((year, index) => (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-primary">{year.year}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {year.courses.map((course, courseIndex) => (
                        <li key={courseIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{course}</span>
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

      {/* Career Opportunities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">Career Opportunities</h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Our BSN graduates are prepared for diverse career paths in healthcare. Many opportunities include:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {careers.map((career, index) => (
                    <Badge key={index} variant="secondary" className="justify-start p-3">
                      {career}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src={careerOpportunities}
                  alt="Nursing graduates celebrating"
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Program */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Why Choose Our Program?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((reason, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
