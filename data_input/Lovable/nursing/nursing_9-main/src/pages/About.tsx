import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Clock, GraduationCap, BookOpen, Calendar } from "lucide-react";
import programClinical from "@/assets/program-clinical.jpg";
import programClassroom from "@/assets/program-classroom.jpg";

const programInfo = [
  { label: "Duration", value: "4 years (8 semesters)", icon: Clock },
  { label: "Degree", value: "Bachelor of Science in Nursing (BSN)", icon: GraduationCap },
  { label: "Credits", value: "120 credit hours", icon: BookOpen },
  { label: "Study Mode", value: "Full-time / Part-time options", icon: Calendar },
];

const learningOutcomes = [
  "Provide evidence-based, patient-centered care across the lifespan",
  "Demonstrate clinical reasoning and critical thinking in healthcare settings",
  "Practice within legal, ethical, and professional nursing standards",
  "Utilize effective communication with patients, families, and healthcare teams",
  "Apply leadership principles in diverse healthcare environments",
  "Integrate research and evidence into nursing practice",
  "Advocate for health equity and social justice in patient care",
  "Demonstrate cultural competence in multicultural healthcare settings",
];

const curriculum = [
  {
    year: "Year 1",
    semester1: [
      "Anatomy & Physiology I",
      "Introduction to Nursing",
      "Medical Terminology",
      "Chemistry for Health Sciences",
      "Psychology",
    ],
    semester2: [
      "Anatomy & Physiology II",
      "Fundamentals of Nursing",
      "Microbiology",
      "Nutrition",
      "Sociology",
    ],
  },
  {
    year: "Year 2",
    semester1: [
      "Health Assessment",
      "Pharmacology I",
      "Pathophysiology",
      "Medical-Surgical Nursing I",
      "Clinical Practice I",
    ],
    semester2: [
      "Medical-Surgical Nursing II",
      "Pharmacology II",
      "Maternal & Child Health",
      "Clinical Practice II",
      "Research Methods",
    ],
  },
  {
    year: "Year 3",
    semester1: [
      "Pediatric Nursing",
      "Mental Health Nursing",
      "Community Health Nursing",
      "Clinical Practice III",
      "Leadership in Nursing",
    ],
    semester2: [
      "Adult-Gerontology Nursing",
      "Critical Care Nursing",
      "Nursing Informatics",
      "Clinical Practice IV",
      "Ethics in Healthcare",
    ],
  },
  {
    year: "Year 4",
    semester1: [
      "Advanced Clinical Practice",
      "Healthcare Policy",
      "Capstone Project I",
      "Elective Course",
      "NCLEX Preparation",
    ],
    semester2: [
      "Preceptorship",
      "Professional Development",
      "Capstone Project II",
      "Transition to Practice",
      "Comprehensive Review",
    ],
  },
];

const careerOpportunities = [
  "Registered Nurse (RN) in hospitals, clinics, and healthcare facilities",
  "Specialized nursing roles (ICU, ER, Pediatrics, Oncology, etc.)",
  "Community and public health nursing",
  "School nursing and occupational health",
  "Nurse educator and clinical instructor",
  "Nursing leadership and management positions",
  "Advanced practice preparation (MSN/DNP pathways)",
  "Healthcare administration and policy roles",
];

const reasons = [
  {
    title: "State-of-the-Art Simulation Labs",
    description: "Practice clinical skills in realistic healthcare environments before entering actual clinical settings.",
  },
  {
    title: "Diverse Clinical Partnerships",
    description: "Gain experience in leading hospitals, community health centers, and specialized care facilities.",
  },
  {
    title: "Small Class Sizes",
    description: "Receive personalized attention and mentorship with an average student-faculty ratio of 10:1.",
  },
  {
    title: "Comprehensive Support Services",
    description: "Access tutoring, academic advising, career counseling, and mental health resources.",
  },
  {
    title: "Flexible Learning Options",
    description: "Choose full-time or part-time study tracks to balance education with personal commitments.",
  },
  {
    title: "Professional Development",
    description: "Participate in nursing conferences, research opportunities, and professional organizations.",
  },
];

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Our BSN Program
          </h1>
          <p className="text-xl text-primary-foreground/90">
            A comprehensive nursing education designed to shape the healthcare leaders of tomorrow
          </p>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Program Overview
              </h2>
              <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                Our Bachelor of Science in Nursing program provides a comprehensive education that blends theoretical knowledge with practical clinical experience. Students develop the skills, knowledge, and professional values needed to deliver high-quality patient care in diverse healthcare settings.
              </p>
              <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                The curriculum emphasizes evidence-based practice, critical thinking, cultural competence, and ethical decision-making. Through rigorous coursework and extensive clinical rotations, students gain hands-on experience in various healthcare environments, preparing them for successful careers as registered nurses.
              </p>
            </div>
            <div>
              <img
                src={programClinical}
                alt="Nursing students in clinical setting"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Key Program Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {programInfo.map((info, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{info.label}</p>
                  <p className="font-semibold text-foreground">{info.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Program Learning Outcomes
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Upon completion of the BSN program, graduates will be able to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {learningOutcomes.map((outcome, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-success rounded-full flex items-center justify-center mt-0.5">
                  <Check className="h-4 w-4 text-success-foreground" />
                </div>
                <p className="text-foreground">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Curriculum by Year
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our carefully designed curriculum progresses from foundational sciences to advanced clinical practice
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {curriculum.map((year, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-6">{year.year}</h3>
                  
                  <div className="mb-6">
                    <Badge className="mb-3">Semester 1</Badge>
                    <ul className="space-y-2">
                      {year.semester1.map((course, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-foreground">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <Badge className="mb-3">Semester 2</Badge>
                    <ul className="space-y-2">
                      {year.semester2.map((course, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-foreground">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={programClassroom}
                alt="Nursing students studying"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Career Opportunities
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Our BSN graduates are prepared for diverse career paths in healthcare:
              </p>
              <ul className="space-y-3">
                {careerOpportunities.map((opportunity, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-success rounded-full flex items-center justify-center mt-0.5">
                      <Check className="h-4 w-4 text-success-foreground" />
                    </div>
                    <span className="ml-3 text-foreground">{opportunity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Why Choose Our Program?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
