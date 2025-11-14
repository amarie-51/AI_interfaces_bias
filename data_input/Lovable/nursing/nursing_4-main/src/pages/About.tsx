import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Target, BookOpen, Stethoscope, Heart, Briefcase } from "lucide-react";
import programImage from "@/assets/program-overview.jpg";

const About = () => {
  const programInfo = [
    { label: "Duration", value: "4 Years (8 Semesters)" },
    { label: "Degree Awarded", value: "Bachelor of Science in Nursing (BSN)" },
    { label: "Total Credits", value: "120 Credit Hours" },
    { label: "Clinical Hours", value: "750+ Hours" },
    { label: "Study Mode", value: "Full-time, On-campus" },
    { label: "Accreditation", value: "CCNE Accredited" },
  ];

  const learningOutcomes = [
    "Demonstrate clinical competence in providing patient-centered nursing care across diverse settings",
    "Apply evidence-based practice and nursing research to improve patient outcomes",
    "Communicate effectively with patients, families, and interdisciplinary healthcare teams",
    "Practice ethical decision-making and professional accountability in healthcare delivery",
    "Utilize technology and informatics to enhance patient safety and care quality",
    "Provide culturally competent care that respects diversity and promotes health equity",
  ];

  const curriculum = [
    {
      year: "First Year",
      courses: [
        "Introduction to Nursing Practice",
        "Anatomy & Physiology I & II",
        "Chemistry for Health Sciences",
        "Psychology in Healthcare",
        "Nursing Fundamentals",
        "Health Assessment",
      ],
    },
    {
      year: "Second Year",
      courses: [
        "Pathophysiology",
        "Pharmacology",
        "Adult Health Nursing I",
        "Nutrition in Healthcare",
        "Medical-Surgical Nursing",
        "Mental Health Nursing",
      ],
    },
    {
      year: "Third Year",
      courses: [
        "Maternal-Child Nursing",
        "Pediatric Nursing",
        "Community Health Nursing",
        "Adult Health Nursing II",
        "Research in Nursing Practice",
        "Leadership in Healthcare",
      ],
    },
    {
      year: "Fourth Year",
      courses: [
        "Complex Patient Care",
        "Critical Care Nursing",
        "Professional Nursing Practice",
        "Healthcare Policy & Ethics",
        "Capstone Clinical Experience",
        "NCLEX-RN Preparation",
      ],
    },
  ];

  const careers = [
    { title: "Registered Nurse (RN)", setting: "Hospitals, Clinics, Community Health Centers" },
    { title: "Clinical Nurse Specialist", setting: "Specialized Care Units, Research Facilities" },
    { title: "Nurse Educator", setting: "Academic Institutions, Healthcare Training Centers" },
    { title: "Public Health Nurse", setting: "Government Agencies, Non-profit Organizations" },
    { title: "Pediatric Nurse", setting: "Children's Hospitals, Pediatric Clinics" },
    { title: "Emergency Room Nurse", setting: "Emergency Departments, Trauma Centers" },
  ];

  const reasons = [
    {
      icon: Target,
      title: "State-of-the-Art Facilities",
      description: "Learn in modern simulation labs equipped with the latest medical technology and mannequins.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Our curriculum integrates theory, practice, and research to develop well-rounded nurses.",
    },
    {
      icon: Stethoscope,
      title: "Extensive Clinical Experience",
      description: "Gain hands-on experience in diverse clinical settings across the healthcare spectrum.",
    },
    {
      icon: Heart,
      title: "Caring Faculty",
      description: "Learn from experienced nurse educators dedicated to your success and professional growth.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Page Header */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our BSN Program</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A comprehensive nursing education that prepares compassionate, competent healthcare professionals
          </p>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Program Overview</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our Bachelor of Science in Nursing program is designed to prepare students for the complexities
                and challenges of modern healthcare. Through a carefully structured curriculum that balances
                theoretical knowledge with practical clinical experience, students develop the critical thinking,
                clinical skills, and professional values essential for nursing practice.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Accredited by the Commission on Collegiate Nursing Education (CCNE), our program maintains the
                highest standards of nursing education. We prepare graduates to excel on the NCLEX-RN examination
                and succeed in diverse healthcare environments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Students benefit from small class sizes, personalized mentorship, and state-of-the-art simulation
                laboratories that replicate real-world clinical scenarios.
              </p>
            </div>
            <div>
              <img
                src={programImage}
                alt="Nursing students in clinical practice"
                className="rounded-lg shadow-medium w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Information */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Program Details</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programInfo.map((info, index) => (
              <Card key={index} className="shadow-soft">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">{info.label}</p>
                    <p className="text-lg font-bold text-foreground">{info.value}</p>
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
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Learning Outcomes</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Upon completion of the BSN program, graduates will be able to:
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {learningOutcomes.map((outcome, index) => (
              <div key={index} className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Curriculum by Year</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {curriculum.map((year, index) => (
              <Card key={index} className="shadow-medium">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-primary">{year.year}</h3>
                  <ul className="space-y-2">
                    {year.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span className="text-muted-foreground">{course}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Career Opportunities</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our BSN graduates pursue rewarding careers in diverse healthcare settings
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careers.map((career, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-2">
                    <Briefcase className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{career.title}</h3>
                      <p className="text-sm text-muted-foreground">{career.setting}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            Why Choose Our Program?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <Card key={index} className="shadow-medium hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-primary/10 rounded-full mb-4">
                      <reason.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
