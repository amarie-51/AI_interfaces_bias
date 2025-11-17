import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, GraduationCap, Clock, MapPin, Award } from "lucide-react";
import programLab from "@/assets/program-lab.jpg";
import programClassroom from "@/assets/program-classroom.jpg";

const AboutProgram = () => {
  const programInfo = [
    { icon: Calendar, label: "Duration", value: "4 years (8 semesters)" },
    { icon: GraduationCap, label: "Degree", value: "Bachelor of Science in Nursing (BSN)" },
    { icon: BookOpen, label: "Credits", value: "120 credit hours" },
    { icon: Clock, label: "Study Mode", value: "Full-time / Part-time" },
    { icon: MapPin, label: "Clinical Sites", value: "15+ partner hospitals" },
    { icon: Award, label: "Accreditation", value: "CCNE Accredited" },
  ];

  const learningOutcomes = [
    "Provide patient-centered care across the lifespan using evidence-based practice",
    "Demonstrate clinical judgment and critical thinking in complex healthcare situations",
    "Collaborate effectively with interdisciplinary healthcare teams",
    "Apply principles of quality improvement and patient safety",
    "Integrate informatics and technology in nursing practice",
    "Advocate for patients and populations in diverse healthcare settings",
  ];

  const curriculum = [
    {
      year: "Year 1: Foundation",
      courses: [
        "Anatomy & Physiology I & II",
        "Microbiology",
        "Introduction to Nursing",
        "Health Assessment",
        "Pharmacology Fundamentals",
      ],
    },
    {
      year: "Year 2: Building Skills",
      courses: [
        "Medical-Surgical Nursing I",
        "Pathophysiology",
        "Nursing Research",
        "Pharmacology Applications",
        "Clinical Practice I",
      ],
    },
    {
      year: "Year 3: Specialization",
      courses: [
        "Medical-Surgical Nursing II",
        "Maternal-Child Nursing",
        "Psychiatric Mental Health Nursing",
        "Community Health Nursing",
        "Clinical Practice II & III",
      ],
    },
    {
      year: "Year 4: Advanced Practice",
      courses: [
        "Advanced Medical-Surgical Nursing",
        "Nursing Leadership & Management",
        "Professional Issues in Nursing",
        "Capstone Project",
        "Comprehensive Clinical Practicum",
      ],
    },
  ];

  const careerOpportunities = [
    "Registered Nurse (Hospital Settings)",
    "Emergency Room Nurse",
    "Intensive Care Unit Nurse",
    "Pediatric Nurse",
    "Operating Room Nurse",
    "Community Health Nurse",
    "Nurse Educator",
    "Clinical Research Nurse",
    "Nurse Manager/Administrator",
    "Travel Nurse",
  ];

  const reasons = [
    {
      title: "Exceptional Faculty",
      description: "Learn from experienced nurses with advanced degrees and real-world expertise.",
    },
    {
      title: "State-of-the-Art Facilities",
      description: "Practice in high-fidelity simulation labs that mirror actual clinical environments.",
    },
    {
      title: "Strong Clinical Network",
      description: "Gain experience at premier healthcare facilities through our extensive partnerships.",
    },
    {
      title: "High Employment Rate",
      description: "95% of graduates secure employment within 6 months of graduation.",
    },
    {
      title: "NCLEX Preparation",
      description: "Comprehensive review courses and support for licensure exam success.",
    },
    {
      title: "Supportive Community",
      description: "Join a diverse, collaborative learning environment with dedicated student support services.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            About Our BSN Program
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto opacity-90">
            A comprehensive nursing education designed to prepare you for a successful career in healthcare
          </p>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our Bachelor of Science in Nursing program is a rigorous, comprehensive four-year curriculum that combines theoretical knowledge with extensive hands-on clinical experience. We prepare students to become compassionate, competent registered nurses who are ready to meet the evolving needs of healthcare.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through a blend of classroom instruction, laboratory practice, and clinical rotations at leading healthcare facilities, students develop the critical thinking, technical skills, and professional values essential for nursing excellence. Our program is accredited by the Commission on Collegiate Nursing Education (CCNE) and prepares graduates to sit for the NCLEX-RN examination.
            </p>
          </div>
        </div>
      </section>

      {/* Program Info Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            Program at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {programInfo.map((info, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="font-semibold text-foreground">{info.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
              Learning Outcomes
            </h2>
            <Card className="border-border">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  Upon completion of our BSN program, graduates will be able to:
                </p>
                <ul className="space-y-3">
                  {learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 shrink-0">
                        {index + 1}
                      </Badge>
                      <span className="text-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center text-foreground">
            Curriculum Overview
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our curriculum progresses systematically from foundational sciences to advanced clinical practice
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {curriculum.map((year, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-primary">{year.year}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {year.courses.map((course, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 shrink-0">•</span>
                        <span className="text-foreground">{course}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Section with Images */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={programLab}
                alt="Nursing simulation lab"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={programClassroom}
                alt="Nursing classroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-foreground">
              Career Opportunities
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Our graduates pursue diverse and rewarding careers in healthcare
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {careerOpportunities.map((career, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
                >
                  <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                  <span className="text-foreground">{career}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            Why Choose Our Program?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reasons.map((reason, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutProgram;
