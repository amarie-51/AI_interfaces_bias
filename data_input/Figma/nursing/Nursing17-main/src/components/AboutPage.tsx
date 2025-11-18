import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { CheckCircle, Clock, GraduationCap, BookOpen, Calendar, Users } from 'lucide-react';

export function AboutPage() {
  const keyInfo = [
    { label: 'Duration', value: '4 Years (8 Semesters)', icon: Clock },
    { label: 'Degree', value: 'Bachelor of Science in Nursing (BSN)', icon: GraduationCap },
    { label: 'Total Credits', value: '120 Credit Hours', icon: BookOpen },
    { label: 'Study Mode', value: 'Full-time / Part-time Available', icon: Calendar },
  ];

  const learningOutcomes = [
    'Provide evidence-based, patient-centered care across the lifespan',
    'Demonstrate clinical reasoning and critical thinking in complex healthcare situations',
    'Communicate effectively with patients, families, and interdisciplinary teams',
    'Practice nursing within legal, ethical, and regulatory frameworks',
    'Utilize technology and informatics to enhance patient care and outcomes',
    'Promote health equity and advocate for diverse populations',
    'Engage in continuous professional development and lifelong learning',
    'Lead quality improvement initiatives in healthcare settings',
  ];

  const curriculum = [
    {
      year: 'Year 1',
      focus: 'Foundation & Prerequisites',
      courses: [
        'Anatomy & Physiology I & II',
        'Microbiology',
        'Chemistry',
        'Psychology',
        'Introduction to Nursing',
        'Health Assessment',
        'General Education Requirements',
      ],
    },
    {
      year: 'Year 2',
      focus: 'Core Nursing Concepts',
      courses: [
        'Fundamentals of Nursing',
        'Pharmacology',
        'Pathophysiology',
        'Nursing Informatics',
        'Adult Health Nursing I',
        'Nutrition',
        'Medical-Surgical Nursing',
      ],
    },
    {
      year: 'Year 3',
      focus: 'Specialized Care',
      courses: [
        'Maternal-Newborn Nursing',
        'Pediatric Nursing',
        'Mental Health Nursing',
        'Adult Health Nursing II',
        'Community Health Nursing',
        'Research in Nursing',
        'Professional Ethics',
      ],
    },
    {
      year: 'Year 4',
      focus: 'Advanced Practice & Leadership',
      courses: [
        'Critical Care Nursing',
        'Leadership & Management',
        'Evidence-Based Practice',
        'Capstone Project',
        'Nursing Practicum',
        'NCLEX Preparation',
        'Professional Development',
      ],
    },
  ];

  const careerOpportunities = [
    'Registered Nurse (RN) in Hospitals',
    'Critical Care / ICU Nurse',
    'Emergency Department Nurse',
    'Pediatric Nurse',
    'Surgical Nurse',
    'Community Health Nurse',
    'School Nurse',
    'Home Health Nurse',
    'Nurse Educator',
    'Case Manager',
    'Travel Nurse',
    'Military Nurse',
  ];

  const reasons = [
    {
      title: 'State-of-the-Art Facilities',
      description: 'Train in our advanced simulation labs with high-fidelity mannequins and realistic clinical scenarios.',
    },
    {
      title: 'Clinical Partnerships',
      description: 'Gain hands-on experience at leading hospitals and healthcare facilities in the region.',
    },
    {
      title: 'Small Class Sizes',
      description: 'Benefit from personalized attention with a student-to-faculty ratio of 10:1.',
    },
    {
      title: 'High NCLEX Pass Rates',
      description: 'Our graduates consistently achieve a 98% first-time pass rate on the NCLEX-RN exam.',
    },
    {
      title: 'Flexible Learning Options',
      description: 'Choose from traditional or accelerated pathways to fit your schedule and goals.',
    },
    {
      title: 'Career Support',
      description: 'Access job placement assistance, resume reviews, and interview preparation services.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-blue-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="mb-4 text-white">About Our BSN Program</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            A comprehensive, accredited program designed to prepare compassionate, competent nurses
            for the challenges of modern healthcare
          </p>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Excellence in Nursing Education</h2>
              <p className="text-gray-600 mb-4">
                Our Bachelor of Science in Nursing program is designed to provide students with a
                solid foundation in nursing theory, clinical skills, and professional practice. We
                combine rigorous academic coursework with extensive hands-on clinical experiences to
                prepare graduates for successful careers in diverse healthcare settings.
              </p>
              <p className="text-gray-600 mb-4">
                Accredited by the Commission on Collegiate Nursing Education (CCNE), our program
                meets the highest standards of nursing education. Our curriculum integrates
                evidence-based practice, cultural competence, and patient-centered care principles
                throughout all four years of study.
              </p>
              <p className="text-gray-600">
                Students benefit from small class sizes, dedicated faculty mentorship, and access to
                state-of-the-art simulation laboratories that replicate real-world clinical
                environments. Our partnerships with premier healthcare facilities ensure diverse and
                comprehensive clinical experiences.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1690192435264-f5ff74cc999b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwY2xhc3Nyb29tJTIwc2ltdWxhdGlvbnxlbnwxfHx8fDE3NjM0NzkyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nursing simulation lab"
                className="w-full h-64 object-cover rounded-lg"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NjM0Mjk5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students studying"
                className="w-full h-64 object-cover rounded-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-12">Program At A Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyInfo.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{item.label}</p>
                  <p className="text-gray-900">{item.value}</p>
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
            <p className="text-gray-600 max-w-2xl mx-auto">
              Upon completion of the BSN program, graduates will be able to:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {learningOutcomes.map((outcome, index) => (
              <div key={index} className="flex gap-3 items-start">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Curriculum Overview</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our carefully designed curriculum progresses from foundational knowledge to advanced
              clinical practice
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculum.map((year, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-blue-600 text-white">
                  <CardTitle>{year.year}</CardTitle>
                  <p className="text-sm text-blue-100">{year.focus}</p>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    {year.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="text-sm text-gray-700 flex gap-2">
                        <span className="text-blue-600">•</span>
                        <span>{course}</span>
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1660128357991-713518efae48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGlicmFyeSUyMHN0dWRlbnRzfGVufDF8fHx8MTc2MzQ3OTI2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nursing students in library"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="mb-6">Career Opportunities</h2>
              <p className="text-gray-600 mb-6">
                A BSN degree opens doors to diverse and rewarding career paths in healthcare. Our
                graduates work in various settings and specialties, including:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {careerOpportunities.map((career, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{career}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons to Choose */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose Our Program?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover what sets our BSN program apart and makes it the right choice for your
              nursing career
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-blue-900">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
