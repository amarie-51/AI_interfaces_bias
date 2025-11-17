import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, BookOpen, Clock, Award, Briefcase, Target } from "lucide-react";
import simulationImage from "@/assets/program-simulation.jpg";
import clinicalImage from "@/assets/program-clinical.jpg";

const About = () => {
  const keyInfo = [
    { label: "Duration", value: "4 years (8 semesters)" },
    { label: "Degree", value: "Bachelor of Science in Nursing (BSN)" },
    { label: "Total Credits", value: "120 semester hours" },
    { label: "Study Mode", value: "Full-time, on-campus with clinical rotations" },
    { label: "Accreditation", value: "CCNE Accredited" },
  ];

  const outcomes = [
    "Apply evidence-based practice and nursing theory to provide safe, quality patient care",
    "Demonstrate clinical competence across diverse healthcare settings and patient populations",
    "Communicate effectively with patients, families, and interprofessional healthcare teams",
    "Integrate ethical principles and professional values in nursing practice",
    "Utilize critical thinking and clinical reasoning to make sound nursing judgments",
    "Advocate for patients and promote health equity in diverse communities",
  ];

  const curriculum = [
    {
      year: "Year 1",
      focus: "Foundation Sciences",
      courses: [
        "Anatomy & Physiology I & II",
        "Microbiology",
        "General Chemistry",
        "Introduction to Nursing",
        "Health Assessment",
        "General Education Requirements",
      ],
    },
    {
      year: "Year 2",
      focus: "Core Nursing Fundamentals",
      courses: [
        "Fundamentals of Nursing Care",
        "Pharmacology",
        "Pathophysiology",
        "Nutrition for Nursing",
        "Medical-Surgical Nursing I",
        "Clinical Practicum I",
      ],
    },
    {
      year: "Year 3",
      focus: "Specialized Practice",
      courses: [
        "Medical-Surgical Nursing II",
        "Maternal-Child Nursing",
        "Pediatric Nursing",
        "Mental Health Nursing",
        "Community Health Nursing",
        "Clinical Practicum II & III",
      ],
    },
    {
      year: "Year 4",
      focus: "Advanced Practice & Leadership",
      courses: [
        "Critical Care Nursing",
        "Nursing Leadership & Management",
        "Evidence-Based Practice & Research",
        "Professional Nursing Capstone",
        "Clinical Immersion Experience",
        "NCLEX-RN Preparation",
      ],
    },
  ];

  const careers = [
    "Registered Nurse (Hospital, Clinic, or Private Practice)",
    "Critical Care/ICU Nurse",
    "Emergency Department Nurse",
    "Pediatric or Neonatal Nurse",
    "Operating Room Nurse",
    "Public Health Nurse",
    "Nurse Educator",
    "Nurse Manager/Administrator",
  ];

  const reasons = [
    {
      icon: Award,
      title: "National Recognition",
      description: "CCNE-accredited program ranked among the top nursing schools in the region",
    },
    {
      icon: Clock,
      title: "Extensive Clinical Hours",
      description: "Over 800 hours of hands-on clinical experience in diverse healthcare settings",
    },
    {
      icon: BookOpen,
      title: "State-of-the-Art Facilities",
      description: "Modern simulation labs equipped with high-fidelity patient simulators",
    },
    {
      icon: Target,
      title: "Personalized Support",
      description: "Small class sizes and dedicated faculty mentorship throughout your journey",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Program Overview */}
        <section className="mb-16">
          <h1 className="text-5xl font-bold mb-6">About Our BSN Program</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl">
            Our Bachelor of Science in Nursing program prepares students to become competent, compassionate, 
            and ethical professional nurses. Through a comprehensive curriculum that integrates classroom instruction, 
            laboratory practice, and extensive clinical experiences, students develop the knowledge, skills, and 
            professional values necessary for excellence in nursing practice.
          </p>
        </section>

        {/* Key Program Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Key Program Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {keyInfo.map((info) => (
              <Card key={info.label}>
                <CardContent className="pt-6">
                  <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                  <div className="font-semibold text-lg">{info.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Learning Outcomes</h2>
          <p className="text-muted-foreground mb-6">
            Upon completion of the BSN program, graduates will be able to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {outcomes.map((outcome, index) => (
              <div key={index} className="flex gap-3">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                <p>{outcome}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Curriculum by Year */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Curriculum Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {curriculum.map((year) => (
              <Card key={year.year} className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{year.year}</Badge>
                    <h3 className="font-bold text-lg">{year.focus}</h3>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {year.courses.map((course) => (
                      <li key={course} className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span className="text-sm">{course}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Program Images */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <img
                src={simulationImage}
                alt="Nursing simulation lab"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white p-6 font-semibold text-lg">
                  State-of-the-Art Simulation Labs
                </p>
              </div>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <img
                src={clinicalImage}
                alt="Clinical experience"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <p className="text-white p-6 font-semibold text-lg">
                  Real-World Clinical Experience
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="mb-16 bg-secondary/20 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Career Opportunities</h2>
          <p className="text-muted-foreground mb-6">
            A BSN degree opens doors to diverse career paths in healthcare:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {careers.map((career) => (
              <div key={career} className="flex items-center gap-2 bg-background p-4 rounded-lg">
                <Briefcase className="text-primary flex-shrink-0" size={20} />
                <span className="text-sm">{career}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose This Program */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Program?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason) => (
              <Card key={reason.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <reason.icon className="text-primary" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
                      <p className="text-muted-foreground">{reason.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
