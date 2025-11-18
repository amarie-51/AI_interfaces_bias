import { Clock, BookOpen, Users, Award, CheckCircle, Briefcase } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

interface AboutProgramPageProps {
  onOpenModal: (type: "general" | "visit" | "info") => void;
}

export function AboutProgramPage({ onOpenModal }: AboutProgramPageProps) {
  const programInfo = [
    { icon: Clock, label: "Duration", value: "4 Years (8 Semesters)" },
    { icon: Award, label: "Degree", value: "Bachelor of Science in Nursing (BSN)" },
    { icon: BookOpen, label: "Total Credits", value: "120 Credit Hours" },
    { icon: Users, label: "Study Mode", value: "Full-time, On-Campus" },
  ];

  const learningOutcomes = [
    "Provide compassionate, evidence-based nursing care across the lifespan",
    "Demonstrate clinical competence in assessment, diagnosis, and intervention",
    "Apply critical thinking and clinical judgment in complex healthcare situations",
    "Communicate effectively with patients, families, and interdisciplinary teams",
    "Practice within legal, ethical, and professional standards of nursing",
    "Integrate research and evidence-based practice into nursing care",
    "Advocate for patients and promote health equity in diverse populations",
    "Demonstrate leadership skills in healthcare delivery systems",
  ];

  const curriculum = [
    {
      year: "Year 1: Foundation",
      courses: [
        "Anatomy and Physiology I & II",
        "Introduction to Nursing",
        "Microbiology for Health Sciences",
        "Psychology and Human Development",
        "Chemistry for Health Sciences",
        "Nutrition and Health",
        "General Education Requirements",
      ],
    },
    {
      year: "Year 2: Core Nursing Concepts",
      courses: [
        "Fundamentals of Nursing Practice",
        "Health Assessment",
        "Pathophysiology",
        "Pharmacology for Nursing",
        "Medical-Surgical Nursing I",
        "Statistics for Healthcare",
        "Clinical Skills Laboratory",
      ],
    },
    {
      year: "Year 3: Clinical Specialties",
      courses: [
        "Medical-Surgical Nursing II",
        "Maternal and Newborn Nursing",
        "Pediatric Nursing",
        "Mental Health Nursing",
        "Community Health Nursing",
        "Nursing Research Methods",
        "Clinical Rotations in Specialty Areas",
      ],
    },
    {
      year: "Year 4: Advanced Practice & Leadership",
      courses: [
        "Leadership and Management in Nursing",
        "Critical Care Nursing",
        "Complex Patient Care",
        "Healthcare Policy and Ethics",
        "Evidence-Based Practice Capstone",
        "NCLEX Preparation",
        "Preceptorship and Advanced Clinical Experience",
      ],
    },
  ];

  const careerOpportunities = [
    {
      title: "Hospital Nurse",
      description: "Work in medical-surgical, ICU, emergency, or specialty units in hospitals and medical centers",
    },
    {
      title: "Community Health Nurse",
      description: "Provide care in community health centers, schools, and public health departments",
    },
    {
      title: "Pediatric Nurse",
      description: "Specialize in caring for infants, children, and adolescents in various healthcare settings",
    },
    {
      title: "Nurse Educator",
      description: "Teach and mentor future nurses in academic institutions and clinical settings",
    },
    {
      title: "Clinical Nurse Specialist",
      description: "Pursue advanced practice roles in specialized areas of healthcare",
    },
    {
      title: "Nurse Manager",
      description: "Take on leadership roles managing nursing units and healthcare teams",
    },
  ];

  const whyChooseUs = [
    "CCNE-accredited program recognized for academic excellence",
    "State-of-the-art simulation labs with high-fidelity mannequins",
    "Partnerships with top-ranked hospitals and healthcare facilities",
    "Small class sizes ensuring personalized attention and mentorship",
    "Diverse clinical rotations across multiple specialty areas",
    "Dedicated NCLEX preparation and career support",
    "Opportunities for research and community engagement",
    "Strong alumni network in healthcare leadership positions",
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4">About Our BSN Program</h1>
          <p className="text-xl max-w-3xl">
            A comprehensive, accredited nursing education that prepares you for excellence in patient care and healthcare leadership
          </p>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-4">Program Overview</h2>
              <p className="text-gray-700 mb-4">
                Our Bachelor of Science in Nursing program is designed to prepare students for professional nursing practice through a comprehensive curriculum that integrates theoretical knowledge, clinical skills, and evidence-based practice.
              </p>
              <p className="text-gray-700 mb-4">
                Students engage in over 800 hours of clinical experience in diverse healthcare settings, working alongside experienced nurses and healthcare professionals. Our program emphasizes critical thinking, patient-centered care, and professional development.
              </p>
              <p className="text-gray-700">
                Graduates are prepared to sit for the NCLEX-RN examination and enter the nursing profession as competent, compassionate, and ethical practitioners ready to meet the evolving needs of healthcare.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1734002886107-168181bcd6a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwY2xpbmljYWwlMjBwcmFjdGljZXxlbnwxfHx8fDE3NjM0NzgyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nursing clinical practice"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Program Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Program Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-gray-600 mb-2">{info.label}</div>
                <div className="text-gray-900">{info.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-4">Learning Outcomes</h2>
            <p className="text-center text-gray-600 mb-12">
              Upon completion of the BSN program, graduates will be able to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {learningOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Curriculum by Year</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curriculum.map((year, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="mb-4 text-blue-900">{year.year}</h3>
                <ul className="space-y-2">
                  {year.courses.map((course, courseIndex) => (
                    <li key={courseIndex} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Students Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758206523705-666590ae0a66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xhc3Nyb29tJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzQ3OTI5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Medical classroom education"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1620063487586-c3f97749bb84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NjM0NzgyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Nursing students collaborating"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-4">Career Opportunities</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            A BSN degree opens doors to diverse and rewarding career paths in healthcare
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerOpportunities.map((career, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2">{career.title}</h3>
                <p className="text-gray-600">{career.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Why Choose Our BSN Program?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Ready to Transform Your Future?</h2>
          <p className="text-xl mb-8">
            Join a program that will equip you with the skills, knowledge, and confidence to excel in nursing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => onOpenModal("general")}
              className="bg-white text-blue-900 hover:bg-gray-100"
            >
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onOpenModal("info")}
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              Request Information
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
