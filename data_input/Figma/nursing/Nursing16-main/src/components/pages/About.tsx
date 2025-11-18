import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { CheckCircle2, Calendar, Award, Book, Users, Briefcase } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function About() {
  const programInfo = [
    { label: "Duration", value: "4 years (8 semesters)", icon: Calendar },
    { label: "Degree", value: "Bachelor of Science in Nursing (BSN)", icon: Award },
    { label: "Total Credits", value: "120 credit hours", icon: Book },
    { label: "Study Mode", value: "Full-time / Part-time", icon: Users },
  ];

  const learningOutcomes = [
    "Apply evidence-based nursing practice to provide safe, quality patient care across diverse healthcare settings",
    "Demonstrate clinical reasoning and critical thinking skills in assessing, planning, implementing, and evaluating patient outcomes",
    "Communicate effectively with patients, families, and interdisciplinary healthcare teams using therapeutic techniques",
    "Integrate leadership principles and professional values into nursing practice and healthcare delivery",
    "Utilize technology and informatics to enhance patient care quality and safety",
    "Practice within legal, ethical, and professional standards of nursing",
    "Engage in health promotion, disease prevention, and population health initiatives",
    "Demonstrate cultural competence and respect for diversity in all aspects of nursing care",
  ];

  const curriculum = [
    {
      year: "First Year",
      courses: [
        "Introduction to Nursing Practice",
        "Anatomy and Physiology I & II",
        "Microbiology for Health Sciences",
        "Psychology for Healthcare Professionals",
        "Chemistry for Health Sciences",
        "Communication in Healthcare",
        "Health Assessment Fundamentals",
        "Nursing Informatics",
      ],
    },
    {
      year: "Second Year",
      courses: [
        "Medical-Surgical Nursing I",
        "Pharmacology for Nurses",
        "Pathophysiology",
        "Nutrition in Health and Disease",
        "Mental Health Nursing",
        "Professional Nursing Ethics",
        "Clinical Skills Laboratory",
        "Research Methods in Nursing",
      ],
    },
    {
      year: "Third Year",
      courses: [
        "Medical-Surgical Nursing II",
        "Maternal and Child Health Nursing",
        "Pediatric Nursing",
        "Community Health Nursing",
        "Nursing Leadership and Management",
        "Advanced Clinical Practice",
        "Healthcare Policy and Economics",
        "Evidence-Based Practice",
      ],
    },
    {
      year: "Fourth Year",
      courses: [
        "Critical Care Nursing",
        "Complex Health Alterations",
        "Population Health and Epidemiology",
        "Professional Nursing Capstone",
        "Clinical Practicum and Preceptorship",
        "Transition to Professional Practice",
        "NCLEX-RN Preparation",
        "Senior Synthesis Seminar",
      ],
    },
  ];

  const careerOpportunities = [
    {
      title: "Acute Care Nurse",
      description: "Provide direct patient care in hospitals, emergency departments, and intensive care units",
    },
    {
      title: "Community Health Nurse",
      description: "Work in public health settings, promoting wellness and disease prevention",
    },
    {
      title: "Pediatric Nurse",
      description: "Specialize in caring for children from infancy through adolescence",
    },
    {
      title: "Mental Health Nurse",
      description: "Support patients with mental health conditions in various treatment settings",
    },
    {
      title: "Nurse Educator",
      description: "Teach and mentor future nurses in academic and clinical settings",
    },
    {
      title: "Clinical Research Coordinator",
      description: "Facilitate clinical trials and research studies in healthcare institutions",
    },
  ];

  const reasons = [
    {
      title: "State-of-the-Art Simulation Labs",
      description: "Practice skills in realistic clinical scenarios using advanced simulation technology before entering real patient care settings.",
    },
    {
      title: "Diverse Clinical Partnerships",
      description: "Gain experience at leading hospitals, community health centers, long-term care facilities, and specialized care units.",
    },
    {
      title: "Small Class Sizes",
      description: "Benefit from personalized attention with a 15:1 student-to-faculty ratio ensuring individualized support.",
    },
    {
      title: "Dedicated Student Support",
      description: "Access academic advising, tutoring, counseling services, and NCLEX preparation resources throughout your program.",
    },
    {
      title: "Research Opportunities",
      description: "Participate in faculty-led research projects and present at regional and national nursing conferences.",
    },
    {
      title: "Career Services",
      description: "Receive assistance with resume writing, interview preparation, and job placement from our dedicated career counselors.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6">About the BSN Program</h1>
            <p className="text-xl text-blue-100">
              Our Bachelor of Science in Nursing program prepares compassionate, competent, and confident nurses ready to meet the healthcare challenges of today and tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Comprehensive Nursing Education</h2>
              <p className="text-gray-600 mb-4">
                Our BSN program combines theoretical knowledge with extensive hands-on clinical experience, preparing graduates to excel in diverse healthcare environments. Students develop critical thinking, clinical judgment, and leadership skills essential for modern nursing practice.
              </p>
              <p className="text-gray-600 mb-4">
                Accredited by the Commission on Collegiate Nursing Education (CCNE), our program meets the highest standards of nursing education. Graduates are eligible to sit for the NCLEX-RN examination and pursue licensure as registered nurses.
              </p>
              <p className="text-gray-600">
                With a curriculum grounded in evidence-based practice, our students learn to integrate the latest research findings into patient care, ensuring they provide the most effective and current nursing interventions.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1697603899079-52bd018e1e79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2MzQ3OTIzMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nursing classroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Program Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center">Program at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programInfo.map((info, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-sm text-gray-500 mb-1">{info.label}</div>
                  <div className="text-gray-900">{info.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6">Program Learning Outcomes</h2>
          <p className="text-gray-600 mb-8">
            Upon successful completion of the BSN program, graduates will be able to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {learningOutcomes.map((outcome, index) => (
              <div key={index} className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Curriculum by Year</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our carefully designed curriculum progresses from foundational sciences to advanced nursing practice, ensuring a comprehensive education.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {curriculum.map((year, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-blue-600">{year.year}</Badge>
                  </div>
                  <ul className="space-y-2">
                    {year.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="flex gap-2">
                        <span className="text-blue-600">•</span>
                        <span className="text-gray-700">{course}</span>
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Career Opportunities</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A BSN degree opens doors to diverse career paths in healthcare. Our graduates work in various settings including:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerOpportunities.map((career, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="mb-2">{career.title}</h3>
                  <p className="text-gray-600">{career.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons to Choose */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose Our Program?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide the resources, support, and opportunities you need to succeed as a nursing student and professional.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <h3 className="mb-3">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Visual Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1651804810223-6997a7d3fe7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwc3R1ZGVudCUyMHN0dWR5aW5nfGVufDF8fHx8MTc2MzQyODk4MXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Student studying"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691463569-66de91d76452?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZWR1Y2F0aW9uJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzYzNDA1ODAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Clinical training"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwc3R1ZGVudCUyMGRpdmVyc2V8ZW58MXx8fHwxNzYzNDc5MjM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Diverse students"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
