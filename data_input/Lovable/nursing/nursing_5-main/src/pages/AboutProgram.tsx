import { CheckCircle2, Clock, BookOpen, GraduationCap, Stethoscope, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import clinicalImage from "@/assets/clinical-practice.jpg";

const programInfo = [
  { label: "Duration", value: "4 Years", icon: Clock },
  { label: "Degree", value: "Bachelor of Science in Nursing (BSN)", icon: GraduationCap },
  { label: "Credits", value: "128 Credit Hours", icon: BookOpen },
  { label: "Study Mode", value: "Full-time, On-campus", icon: Users },
];

const learningOutcomes = [
  "Provide safe, patient-centered, evidence-based nursing care across diverse populations",
  "Demonstrate clinical reasoning and critical thinking in complex healthcare situations",
  "Communicate effectively with patients, families, and interprofessional teams",
  "Apply leadership principles to improve healthcare quality and patient outcomes",
  "Utilize informatics and healthcare technology to enhance patient care delivery",
  "Advocate for patients and promote health equity in diverse communities",
  "Practice within legal, ethical, and professional nursing standards",
  "Engage in lifelong learning and professional development",
];

const curriculum = [
  {
    year: "Year 1: Foundation",
    courses: [
      "Anatomy & Physiology I & II",
      "Introduction to Nursing Practice",
      "Health Assessment",
      "Fundamentals of Nursing",
      "Pharmacology Basics",
      "General Education Requirements",
    ],
  },
  {
    year: "Year 2: Core Concepts",
    courses: [
      "Medical-Surgical Nursing I",
      "Pathophysiology",
      "Pharmacology for Nurses",
      "Nursing Research & Evidence-Based Practice",
      "Mental Health Nursing",
      "Clinical Practicum I",
    ],
  },
  {
    year: "Year 3: Specialized Care",
    courses: [
      "Medical-Surgical Nursing II",
      "Maternal-Newborn Nursing",
      "Pediatric Nursing",
      "Community Health Nursing",
      "Leadership in Nursing",
      "Clinical Practicum II",
    ],
  },
  {
    year: "Year 4: Advanced Practice",
    courses: [
      "Critical Care Nursing",
      "Complex Medical-Surgical Nursing",
      "Nursing Management & Leadership",
      "Capstone Project",
      "Clinical Immersion Experience",
      "NCLEX-RN Preparation",
    ],
  },
];

const careerPaths = [
  "Registered Nurse (RN) in Hospitals",
  "Community Health Nurse",
  "Pediatric Nurse Specialist",
  "Emergency Department Nurse",
  "Intensive Care Unit (ICU) Nurse",
  "Surgical Nurse",
  "Psychiatric/Mental Health Nurse",
  "School Nurse",
  "Public Health Nurse",
  "Graduate Study (MSN, DNP programs)",
];

const reasons = [
  {
    title: "CCNE Accreditation",
    description: "Our program is accredited by the Commission on Collegiate Nursing Education, ensuring the highest quality education.",
  },
  {
    title: "Clinical Excellence",
    description: "Gain hands-on experience in top-tier hospitals and healthcare facilities throughout your education.",
  },
  {
    title: "Expert Faculty",
    description: "Learn from experienced nurses and educators who are dedicated to your success.",
  },
  {
    title: "State-of-the-Art Facilities",
    description: "Train in modern simulation labs with cutting-edge technology before entering clinical settings.",
  },
  {
    title: "High Pass Rates",
    description: "Our students consistently achieve above-average NCLEX-RN pass rates.",
  },
  {
    title: "Career Support",
    description: "Receive comprehensive career counseling and job placement assistance from our dedicated team.",
  },
];

const AboutProgram = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="mb-6 text-white">Bachelor of Science in Nursing</h1>
            <p className="text-xl text-white/95">
              A comprehensive program designed to prepare you for excellence in nursing practice and healthcare leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 animate-fade-in">Program Overview</h2>
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
              Our Bachelor of Science in Nursing (BSN) program is a rigorous four-year degree that combines 
              theoretical knowledge with extensive clinical practice. Students develop the skills, knowledge, 
              and professional values necessary to provide high-quality, patient-centered care across diverse 
              healthcare settings. Our curriculum emphasizes evidence-based practice, critical thinking, and 
              collaborative care delivery.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {programInfo.map((info, index) => (
                <Card key={index} className="card-shadow animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
                  <CardContent className="p-6 flex items-center space-x-4">
                    <info.icon className="h-10 w-10 text-primary flex-shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-semibold text-lg">{info.value}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <img
              src={clinicalImage}
              alt="Nursing students in clinical practice"
              className="w-full rounded-lg card-shadow mb-8 animate-fade-in"
            />
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-center animate-fade-in">Learning Outcomes</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Upon completion of the BSN program, graduates will be able to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {learningOutcomes.map((outcome, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3 animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-6 text-center animate-fade-in">Curriculum by Year</h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              Our carefully structured curriculum builds your knowledge and skills progressively, 
              preparing you for success as a registered nurse.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {curriculum.map((year, index) => (
                <Card 
                  key={index} 
                  className="card-shadow animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="text-primary">{year.year}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {year.courses.map((course, courseIndex) => (
                        <li key={courseIndex} className="flex items-start space-x-2">
                          <Stethoscope className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
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
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-center animate-fade-in">Career Opportunities</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Our BSN graduates pursue diverse and rewarding careers in healthcare, including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {careerPaths.map((career, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 p-4 bg-background rounded-lg card-shadow animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{career}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-12 text-center animate-fade-in">Why Choose Our Program?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((reason, index) => (
                <Card 
                  key={index} 
                  className="card-shadow hover:elevated-shadow transition-shadow duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutProgram;
