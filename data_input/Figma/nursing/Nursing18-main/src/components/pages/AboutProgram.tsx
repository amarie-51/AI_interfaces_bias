import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Clock, GraduationCap, BookOpen, Calendar, Users, CheckCircle2, Briefcase } from 'lucide-react';

export function AboutProgram() {
  const keyInfo = [
    { icon: Clock, label: 'Duration', value: '4 Years (8 Semesters)' },
    { icon: GraduationCap, label: 'Degree', value: 'Bachelor of Science in Nursing (BSN)' },
    { icon: BookOpen, label: 'Credits', value: '120 Credit Hours' },
    { icon: Calendar, label: 'Study Mode', value: 'Full-Time, On-Campus' },
  ];

  const learningOutcomes = [
    'Demonstrate clinical competence in delivering safe, evidence-based patient care across diverse healthcare settings',
    'Apply critical thinking and clinical reasoning to make sound nursing judgments',
    'Communicate effectively with patients, families, and interdisciplinary healthcare teams',
    'Integrate ethical principles and professional values into nursing practice',
    'Utilize health informatics and technology to enhance patient outcomes',
    'Advocate for health promotion, disease prevention, and patient safety',
    'Practice cultural competence and provide patient-centered care to diverse populations',
    'Demonstrate leadership skills and commitment to lifelong learning',
  ];

  const curriculum = [
    {
      year: 'Year 1',
      focus: 'Foundations',
      courses: [
        'Introduction to Professional Nursing',
        'Anatomy and Physiology I & II',
        'Microbiology',
        'Chemistry for Health Sciences',
        'Psychology',
        'English Composition',
        'Basic Health Assessment',
        'Fundamentals of Nursing',
      ],
    },
    {
      year: 'Year 2',
      focus: 'Core Nursing Concepts',
      courses: [
        'Pathophysiology',
        'Pharmacology I',
        'Medical-Surgical Nursing I',
        'Mental Health Nursing',
        'Nutrition',
        'Statistics',
        'Nursing Research',
        'Clinical Practicum I',
      ],
    },
    {
      year: 'Year 3',
      focus: 'Advanced Practice',
      courses: [
        'Medical-Surgical Nursing II',
        'Pharmacology II',
        'Maternal-Child Health Nursing',
        'Pediatric Nursing',
        'Community Health Nursing',
        'Health Assessment',
        'Clinical Practicum II & III',
      ],
    },
    {
      year: 'Year 4',
      focus: 'Leadership & Specialty',
      courses: [
        'Critical Care Nursing',
        'Nursing Leadership & Management',
        'Evidence-Based Practice',
        'Healthcare Policy & Ethics',
        'Senior Capstone',
        'Preceptorship',
        'NCLEX-RN Preparation',
      ],
    },
  ];

  const careers = [
    'Registered Nurse (Hospital Settings)',
    'Critical Care Nurse',
    'Emergency Room Nurse',
    'Pediatric Nurse',
    'Labor and Delivery Nurse',
    'Community Health Nurse',
    'School Nurse',
    'Case Manager',
    'Nurse Educator',
    'Clinical Nurse Specialist',
    'Healthcare Administrator',
    'Research Nurse',
  ];

  const reasons = [
    {
      title: 'CCNE Accreditation',
      description: 'Our program is accredited by the Commission on Collegiate Nursing Education, ensuring the highest educational standards.',
    },
    {
      title: 'State-of-the-Art Facilities',
      description: 'Train in our advanced simulation labs featuring high-fidelity mannequins and realistic clinical scenarios.',
    },
    {
      title: 'Expert Faculty',
      description: 'Learn from experienced nurse educators who are leaders in their specialties and dedicated to your success.',
    },
    {
      title: 'Clinical Partnerships',
      description: 'Gain hands-on experience at leading hospitals, clinics, and healthcare facilities in the region.',
    },
    {
      title: 'Small Class Sizes',
      description: 'Benefit from personalized attention with our 12:1 student-to-faculty ratio in clinical settings.',
    },
    {
      title: 'Career Support',
      description: 'Access dedicated career services, job placement assistance, and professional networking opportunities.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYzNDc5MjM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Campus building"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/80" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="mb-4 text-white">About Our BSN Program</h1>
          <p className="text-xl text-white/90">
            Excellence in Nursing Education Since 1985
          </p>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="mb-6">Program Overview</h2>
            <p className="mb-4 text-gray-600">
              Our Bachelor of Science in Nursing program prepares students to become skilled, compassionate registered nurses who are ready to meet the complex healthcare needs of today's diverse patient populations. Through a combination of rigorous classroom instruction, advanced simulation experiences, and extensive clinical rotations, students develop the knowledge, skills, and professional values essential for nursing excellence.
            </p>
            <p className="text-gray-600">
              Accredited by the Commission on Collegiate Nursing Education (CCNE), our program maintains the highest standards of nursing education. We are committed to fostering critical thinking, clinical competence, and ethical practice while preparing graduates to pass the NCLEX-RN examination and excel in their nursing careers.
            </p>
          </div>

          {/* Key Information */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {keyInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600 mb-1">{info.label}</p>
                <p className="text-gray-900">{info.value}</p>
              </Card>
            ))}
          </div>

          {/* Learning Outcomes */}
          <div className="mb-16">
            <h2 className="mb-8">Program Learning Outcomes</h2>
            <p className="mb-6 text-gray-600">
              Upon completion of the BSN program, graduates will be able to:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {learningOutcomes.map((outcome, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{outcome}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum */}
          <div className="mb-16">
            <h2 className="mb-8">Curriculum by Year</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {curriculum.map((year, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-blue-600">{year.year}</Badge>
                    <h3 className="mb-0">{year.focus}</h3>
                  </div>
                  <ul className="space-y-2">
                    {year.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="flex items-start gap-2 text-gray-700">
                        <span className="text-blue-600 mt-1.5">•</span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Photos Section */}
          <div className="mb-16">
            <h2 className="mb-8">Campus Life & Learning</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1676046261150-063cf0de59dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwc3R1ZGVudHMlMjBjbGFzc3Jvb218ZW58MXx8fHwxNzYzNDI1NDUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Nursing students in classroom"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white">Interactive Learning</p>
                </div>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1734002886107-168181bcd6a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwY2xpbmljYWwlMjBwcmFjdGljZXxlbnwxfHx8fDE3NjM0NzgyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Clinical practice"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white">Clinical Experience</p>
                </div>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwbnVyc2luZyUyMHN0dWRlbnR8ZW58MXx8fHwxNzYzNDc4MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Nursing student"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white">Hands-On Training</p>
                </div>
              </div>
            </div>
          </div>

          {/* Career Opportunities */}
          <div className="mb-16 bg-gray-50 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-8 h-8 text-blue-600" />
              <h2 className="mb-0">Career Opportunities</h2>
            </div>
            <p className="mb-6 text-gray-600">
              A BSN degree opens doors to diverse and rewarding career paths in healthcare. Our graduates work in various settings including:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {careers.map((career, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{career}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reasons to Choose */}
          <div>
            <h2 className="mb-8 text-center">Why Choose Our Program?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((reason, index) => (
                <Card key={index} className="p-6">
                  <h3 className="mb-3 text-blue-600">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
