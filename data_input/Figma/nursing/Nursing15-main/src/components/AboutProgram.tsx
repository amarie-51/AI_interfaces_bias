import { Card, CardContent } from "./ui/card";
import { CheckCircle, BookOpen, Award, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutProgram() {
  const keyInfo = [
    { label: "Duration", value: "4 Years (8 Semesters)" },
    { label: "Degree", value: "Bachelor of Science in Nursing (BSN)" },
    { label: "Credits", value: "120 Credit Hours" },
    { label: "Study Mode", value: "Full-time, On-Campus" },
  ];

  const learningOutcomes = [
    "Apply critical thinking and evidence-based practice to deliver safe, quality patient care",
    "Demonstrate clinical competence across diverse healthcare settings and patient populations",
    "Communicate effectively with patients, families, and interdisciplinary healthcare teams",
    "Integrate ethical principles and professional standards in nursing practice",
    "Utilize technology and informatics to support patient care and decision-making",
    "Provide culturally sensitive, patient-centered care respecting diversity",
  ];

  const curriculumByYear = [
    {
      year: "Year 1",
      focus: "Foundation & Prerequisites",
      courses: [
        "Anatomy & Physiology I & II",
        "Introduction to Nursing",
        "Microbiology",
        "Chemistry for Health Sciences",
        "Psychology",
        "English Composition",
      ],
    },
    {
      year: "Year 2",
      focus: "Core Nursing Fundamentals",
      courses: [
        "Fundamentals of Nursing",
        "Pathophysiology",
        "Pharmacology I",
        "Health Assessment",
        "Nutrition for Nurses",
        "Medical-Surgical Nursing I",
      ],
    },
    {
      year: "Year 3",
      focus: "Specialized Clinical Practice",
      courses: [
        "Medical-Surgical Nursing II",
        "Maternal-Child Nursing",
        "Pediatric Nursing",
        "Pharmacology II",
        "Mental Health Nursing",
        "Community Health Nursing",
      ],
    },
    {
      year: "Year 4",
      focus: "Advanced Practice & Leadership",
      courses: [
        "Critical Care Nursing",
        "Nursing Leadership & Management",
        "Evidence-Based Practice & Research",
        "Senior Capstone & Practicum",
        "Professional Issues in Nursing",
        "NCLEX-RN Preparation",
      ],
    },
  ];

  const careerOpportunities = [
    {
      title: "Registered Nurse (RN)",
      description: "Work in hospitals, clinics, or specialty units",
      salary: "$70,000 - $90,000",
    },
    {
      title: "Clinical Nurse Specialist",
      description: "Advanced practice in specific patient populations",
      salary: "$85,000 - $110,000",
    },
    {
      title: "Nurse Educator",
      description: "Teach future nurses in academic or clinical settings",
      salary: "$75,000 - $95,000",
    },
    {
      title: "Public Health Nurse",
      description: "Community health programs and disease prevention",
      salary: "$65,000 - $85,000",
    },
    {
      title: "Nurse Manager",
      description: "Lead nursing teams and manage patient care units",
      salary: "$90,000 - $120,000",
    },
    {
      title: "Case Manager",
      description: "Coordinate patient care across healthcare settings",
      salary: "$70,000 - $90,000",
    },
  ];

  const reasons = [
    {
      icon: Award,
      title: "CCNE Accreditation",
      description:
        "Our program is accredited by the Commission on Collegiate Nursing Education, ensuring the highest educational standards.",
    },
    {
      icon: BookOpen,
      title: "State-of-the-Art Facilities",
      description:
        "Learn in our advanced simulation labs with high-fidelity mannequins and virtual reality training tools.",
    },
    {
      icon: TrendingUp,
      title: "Excellent Job Placement",
      description:
        "95% of our graduates secure employment within 6 months, with many receiving multiple job offers.",
    },
    {
      icon: CheckCircle,
      title: "Comprehensive Clinical Experience",
      description:
        "Gain 700+ hours of clinical practice at top-rated hospitals and healthcare facilities in the region.",
    },
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4">About the BSN Program</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive, accredited program designed to prepare you for a
            successful and rewarding career in nursing.
          </p>
        </div>

        {/* Program Description */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl mb-4">Program Overview</h2>
              <p className="text-gray-700 mb-4">
                Our Bachelor of Science in Nursing (BSN) program provides a
                comprehensive education that prepares students to become
                competent, compassionate, and ethical nurses. The curriculum
                integrates classroom learning with extensive clinical practice,
                ensuring graduates are ready to meet the challenges of modern
                healthcare.
              </p>
              <p className="text-gray-700 mb-4">
                Through hands-on experience in diverse clinical settings,
                students develop the critical thinking skills and clinical
                expertise needed to provide excellent patient care. Our
                dedicated faculty bring real-world experience and are committed
                to student success.
              </p>
              <p className="text-gray-700">
                Graduates of our program are prepared to pass the NCLEX-RN
                examination and enter the nursing profession with confidence,
                ready to make a positive impact on patient outcomes and
                healthcare delivery.
              </p>
            </div>
            <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1734002886107-168181bcd6a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwY2xpbmljYWwlMjBwcmFjdGljZXxlbnwxfHx8fDE3NjM0NzgyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nursing clinical practice"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Key Information */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8 text-center">Program Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {keyInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <p className="text-sm text-gray-600 mb-2">{info.label}</p>
                  <p className="text-gray-900">{info.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="mb-16 bg-blue-50 rounded-xl p-8">
          <h2 className="text-3xl mb-6">Learning Outcomes</h2>
          <p className="text-gray-700 mb-6">
            Upon completion of the BSN program, graduates will be able to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {learningOutcomes.map((outcome, index) => (
              <div key={index} className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{outcome}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Curriculum by Year */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8 text-center">Curriculum by Year</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {curriculumByYear.map((year, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-gray-900">{year.year}</h3>
                      <p className="text-sm text-gray-600">{year.focus}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {year.courses.map((course, courseIndex) => (
                      <li
                        key={courseIndex}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <span className="text-blue-600 mt-1">•</span>
                        {course}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Visual Section with Students */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-64 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1676552055618-22ec8cde399a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBudXJzaW5nJTIwc3R1ZGVudHxlbnwxfHx8fDE3NjM0NzgxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nursing student"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-64 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1660795940125-6d16180752d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMHN0dWRlbnRzfGVufDF8fHx8MTc2MzQ3ODIwNXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students in lab"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-64 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1732303105596-4731637ced57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwbnVyc2luZyUyMHN0dWRlbnRzfGVufDF8fHx8MTc2MzQ3ODE5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Diverse nursing students"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8 text-center">Career Opportunities</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            A BSN degree opens doors to diverse and rewarding career paths in
            healthcare. Here are some of the opportunities available to our
            graduates:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerOpportunities.map((career, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-2">{career.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {career.description}
                  </p>
                  <p className="text-sm text-blue-600">
                    Average Salary: {career.salary}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose This Program */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8 text-center">Why Choose Our Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-2">{reason.title}</h3>
                      <p className="text-gray-600">{reason.description}</p>
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
}
