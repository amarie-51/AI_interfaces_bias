import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { CheckCircle2, Calendar, Award, BookOpen, GraduationCap, Building2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutProgram() {
  const programInfo = [
    { icon: Calendar, label: 'Duration', value: '4 Years (8 Semesters)' },
    { icon: Award, label: 'Degree', value: 'Bachelor of Science in Nursing (BSN)' },
    { icon: BookOpen, label: 'Total Credits', value: '120 Credit Hours' },
    { icon: Building2, label: 'Study Mode', value: 'Full-time, On-campus' },
  ];

  const learningOutcomes = [
    'Provide safe, patient-centered care using evidence-based practice',
    'Demonstrate clinical reasoning and critical thinking in complex situations',
    'Communicate effectively with patients, families, and healthcare teams',
    'Apply principles of leadership and management in healthcare settings',
    'Integrate research findings into clinical practice',
    'Advocate for patients and promote health equity',
    'Practice within legal, ethical, and professional standards',
    'Utilize healthcare technology and informatics effectively',
  ];

  const curriculumByYear = [
    {
      year: 'Year 1: Foundation',
      courses: [
        'Anatomy & Physiology I & II',
        'Introduction to Nursing',
        'Microbiology',
        'Psychology',
        'Chemistry',
        'Medical Terminology',
        'Nursing Fundamentals',
        'Health Assessment',
      ],
    },
    {
      year: 'Year 2: Core Concepts',
      courses: [
        'Pathophysiology',
        'Pharmacology',
        'Medical-Surgical Nursing I',
        'Maternal-Child Nursing',
        'Nutrition',
        'Statistics',
        'Mental Health Nursing',
        'Clinical Practicum I',
      ],
    },
    {
      year: 'Year 3: Advanced Practice',
      courses: [
        'Medical-Surgical Nursing II',
        'Pediatric Nursing',
        'Community Health Nursing',
        'Nursing Research',
        'Gerontological Nursing',
        'Critical Care Nursing',
        'Clinical Practicum II',
        'Healthcare Ethics',
      ],
    },
    {
      year: 'Year 4: Leadership & Integration',
      courses: [
        'Nursing Leadership & Management',
        'Complex Care Nursing',
        'Evidence-Based Practice',
        'Healthcare Policy',
        'Capstone Project',
        'Clinical Preceptorship',
        'NCLEX-RN Preparation',
        'Professional Development',
      ],
    },
  ];

  const careerOpportunities = [
    {
      title: 'Registered Nurse (RN)',
      description: 'Work in hospitals, clinics, or community health settings providing direct patient care',
    },
    {
      title: 'Clinical Nurse Specialist',
      description: 'Specialize in areas such as critical care, pediatrics, or oncology',
    },
    {
      title: 'Nurse Educator',
      description: 'Teach and mentor the next generation of nurses in academic or clinical settings',
    },
    {
      title: 'Public Health Nurse',
      description: 'Focus on community health, disease prevention, and health promotion',
    },
    {
      title: 'Nurse Manager',
      description: 'Lead nursing teams and manage healthcare units or departments',
    },
    {
      title: 'Case Manager',
      description: 'Coordinate patient care across healthcare settings and services',
    },
  ];

  const reasons = [
    {
      icon: Award,
      title: 'CCNE Accreditation',
      description: 'Our program is accredited by the Commission on Collegiate Nursing Education, ensuring the highest standards of nursing education.',
    },
    {
      icon: GraduationCap,
      title: 'Outstanding NCLEX Pass Rates',
      description: 'Our graduates consistently achieve above-average first-time NCLEX-RN pass rates, demonstrating program excellence.',
    },
    {
      icon: Building2,
      title: 'State-of-the-Art Facilities',
      description: 'Learn in modern simulation labs with high-fidelity mannequins and cutting-edge technology.',
    },
    {
      icon: CheckCircle2,
      title: 'Clinical Partnerships',
      description: 'Gain experience at top-tier healthcare facilities through our extensive network of clinical partners.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-white">About Our Program</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Our Bachelor of Science in Nursing program prepares students to become 
            competent, compassionate, and ethical nursing professionals equipped to 
            meet the evolving healthcare needs of diverse populations.
          </p>
        </div>
      </section>

      {/* Program Overview with Image */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Program Description</h2>
              <p className="text-gray-600 mb-4">
                The Bachelor of Science in Nursing (BSN) is a comprehensive four-year program 
                that integrates theoretical knowledge with extensive clinical practice. Our curriculum 
                is designed to develop critical thinking, clinical reasoning, and evidence-based 
                practice skills essential for professional nursing.
              </p>
              <p className="text-gray-600 mb-4">
                Students engage in progressive clinical experiences beginning in the first year, 
                working alongside experienced nurses in diverse healthcare settings. Our program 
                emphasizes patient-centered care, interprofessional collaboration, and quality 
                improvement.
              </p>
              <p className="text-gray-600">
                Graduates are prepared to provide care across the lifespan and in various settings, 
                from acute care hospitals to community health centers, and are well-positioned for 
                advanced practice and leadership roles in nursing.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1676046261150-063cf0de59dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwc3R1ZGVudHMlMjBjbGFzc3Jvb218ZW58MXx8fHwxNzYzNDI1NDUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nursing students in classroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Program Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center">Program at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{info.label}</p>
                    <p className="text-gray-900">{info.value}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8 text-center">Learning Outcomes</h2>
            <p className="text-gray-600 mb-8 text-center">
              Upon completion of the BSN program, graduates will be able to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {learningOutcomes.map((outcome, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum by Year */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center">Curriculum Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {curriculumByYear.map((year, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-blue-600">{year.year}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {year.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
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

      {/* Clinical Experience Image */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg order-2 lg:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1734002886107-168181bcd6a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwY2xpbmljYWwlMjBwcmFjdGljZXxlbnwxfHx8fDE3NjM0NzgyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Clinical nursing practice"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-6">Hands-On Clinical Experience</h2>
              <p className="text-gray-600 mb-4">
                Our program includes over 750 hours of supervised clinical practice in various 
                healthcare settings. Students work with patients across the lifespan in:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Acute care hospitals and emergency departments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Community health centers and public health agencies</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Long-term care and rehabilitation facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Mental health and behavioral health settings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center">Career Opportunities</h2>
          <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            A BSN degree opens doors to diverse and rewarding career paths in healthcare
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerOpportunities.map((career, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{career.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{career.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Program */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center">Why Choose Our Program?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-2">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Student Photo Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center">Our Students</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg aspect-[4/3]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1589104759909-e355f8999f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFiJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzNDc5MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students in medical lab"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg aspect-[4/3]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1676046261150-063cf0de59dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwc3R1ZGVudHMlMjBjbGFzc3Jvb218ZW58MXx8fHwxNzYzNDI1NDUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nursing students collaborating"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg aspect-[4/3]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1651804810223-6997a7d3fe7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3R1ZGVudCUyMHN0dWR5aW5nfGVufDF8fHx8MTc2MzQ3OTI2OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Student studying"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
