import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Clock, 
  GraduationCap, 
  BookOpen, 
  Calendar,
  Monitor,
  CheckCircle2,
  Briefcase,
  Award 
} from 'lucide-react';

export function AboutProgram() {
  const programInfo = [
    { icon: Clock, label: 'Duration', value: '4 Years (8 Semesters)' },
    { icon: GraduationCap, label: 'Degree', value: 'Bachelor of Science in Nursing (BSN)' },
    { icon: BookOpen, label: 'Total Credits', value: '120 Credit Hours' },
    { icon: Calendar, label: 'Start Terms', value: 'Fall & Spring' },
    { icon: Monitor, label: 'Study Mode', value: 'Full-time, On-campus with Clinical Rotations' },
  ];

  const learningOutcomes = [
    'Provide safe, patient-centered care based on evidence-based practice',
    'Demonstrate clinical judgment and critical thinking in complex healthcare situations',
    'Communicate effectively with patients, families, and interdisciplinary healthcare teams',
    'Apply quality improvement principles to enhance patient outcomes',
    'Practice nursing with cultural competence and respect for diversity',
    'Integrate informatics and technology in healthcare delivery',
    'Demonstrate professional values, ethics, and accountability',
    'Lead and collaborate in healthcare teams to improve population health',
  ];

  const curriculumByYear = [
    {
      year: 'Year 1: Foundation',
      courses: [
        'Anatomy & Physiology I & II',
        'Introduction to Nursing Practice',
        'Health Assessment',
        'Medical Terminology',
        'Chemistry for Health Sciences',
        'Psychology',
        'English Composition',
      ],
    },
    {
      year: 'Year 2: Core Concepts',
      courses: [
        'Fundamentals of Nursing',
        'Pharmacology',
        'Pathophysiology',
        'Nutrition',
        'Microbiology',
        'Medical-Surgical Nursing I',
        'Clinical Practicum I',
      ],
    },
    {
      year: 'Year 3: Clinical Specialties',
      courses: [
        'Medical-Surgical Nursing II',
        'Maternal-Newborn Nursing',
        'Pediatric Nursing',
        'Mental Health Nursing',
        'Community Health Nursing',
        'Clinical Practicum II & III',
      ],
    },
    {
      year: 'Year 4: Advanced Practice',
      courses: [
        'Leadership & Management in Nursing',
        'Complex Care Nursing',
        'Evidence-Based Practice & Research',
        'Professional Issues in Nursing',
        'Senior Clinical Capstone',
        'NCLEX-RN Preparation',
      ],
    },
  ];

  const careerOpportunities = [
    {
      title: 'Registered Nurse (RN)',
      settings: 'Hospitals, Clinics, Long-term Care',
      salary: '$70,000 - $95,000/year',
    },
    {
      title: 'Critical Care Nurse',
      settings: 'ICU, Emergency Department, Trauma Centers',
      salary: '$80,000 - $105,000/year',
    },
    {
      title: 'Pediatric Nurse',
      settings: 'Children\'s Hospitals, Pediatric Clinics',
      salary: '$72,000 - $98,000/year',
    },
    {
      title: 'Nurse Educator',
      settings: 'Academic Institutions, Healthcare Organizations',
      salary: '$75,000 - $100,000/year',
    },
    {
      title: 'Public Health Nurse',
      settings: 'Community Health Centers, Government Agencies',
      salary: '$68,000 - $90,000/year',
    },
    {
      title: 'Nurse Manager',
      settings: 'Healthcare Facilities, Administrative Roles',
      salary: '$85,000 - $120,000/year',
    },
  ];

  const reasons = [
    {
      title: 'Hands-On Clinical Experience',
      description: 'Over 1,000 hours of supervised clinical practice in diverse healthcare settings',
    },
    {
      title: 'State-of-the-Art Simulation Labs',
      description: 'Practice complex procedures in our high-fidelity simulation center before working with real patients',
    },
    {
      title: 'Small Class Sizes',
      description: 'Personalized attention with a 10:1 student-to-faculty ratio in clinical settings',
    },
    {
      title: 'NCLEX-RN Excellence',
      description: 'Our graduates achieve a 95% first-time pass rate on the NCLEX-RN exam',
    },
    {
      title: 'Flexible Pathways',
      description: 'Options for traditional students, accelerated tracks, and RN-to-BSN completion',
    },
    {
      title: 'Career Support',
      description: 'Dedicated career services, job placement assistance, and strong alumni network',
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="mb-4">About Our BSN Program</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            A comprehensive nursing education that prepares you to deliver exceptional patient care 
            and advance your career in healthcare
          </p>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Transform Your Future in Healthcare</h2>
              <p className="text-gray-700 mb-4">
                Our Bachelor of Science in Nursing program is designed to prepare you for a dynamic and 
                rewarding career in healthcare. Through a blend of rigorous coursework, hands-on clinical 
                experiences, and mentorship from expert faculty, you'll develop the knowledge, skills, 
                and professional values essential for nursing excellence.
              </p>
              <p className="text-gray-700 mb-4">
                Accredited by the Commission on Collegiate Nursing Education (CCNE), our program meets 
                the highest national standards and prepares you to sit for the NCLEX-RN examination. 
                You'll learn in our cutting-edge simulation labs and gain real-world experience through 
                clinical rotations at premier healthcare facilities.
              </p>
              <p className="text-gray-700">
                Whether you're pursuing your first degree or advancing your nursing career, our program 
                offers the foundation you need to become a compassionate, competent, and confident 
                healthcare professional.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1583736902682-f00149bbf526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwY2xhc3Nyb29tJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzNDc4MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nursing students in classroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Program Information */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-12">Program Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programInfo.map((info, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <info.icon className="h-8 w-8 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{info.label}</p>
                      <p className="text-gray-900">{info.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Program Learning Outcomes</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Upon completion of the BSN program, graduates will be able to:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {learningOutcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum by Year */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Curriculum Overview</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A progressive curriculum that builds your nursing knowledge and skills year by year
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curriculumByYear.map((yearData, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge className="bg-blue-600">{index + 1}</Badge>
                    {yearData.year}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {yearData.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
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

      {/* Visual Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-12">Experience Hands-On Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763294905880-6caf7e585241?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc2ltdWxhdGlvbiUyMHRyYWluaW5nfGVufDF8fHx8MTc2MzQzMTA2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Medical simulation training"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white mb-2">Simulation Labs</h3>
                <p className="text-gray-200">Practice with high-fidelity manikins and medical equipment</p>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1633488781325-d36e6818d0c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZSUyMHBhdGllbnQlMjBjYXJlfGVufDF8fHx8MTc2MzQ0NDIwOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nurse providing patient care"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white mb-2">Clinical Rotations</h3>
                <p className="text-gray-200">Real-world experience in diverse healthcare settings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Career Opportunities</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              BSN graduates are in high demand across all healthcare settings with competitive salaries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerOpportunities.map((career, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <Briefcase className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="mb-2">{career.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{career.settings}</p>
                  <p className="text-green-600">{career.salary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Program */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose Our BSN Program?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-2">{reason.title}</h3>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
