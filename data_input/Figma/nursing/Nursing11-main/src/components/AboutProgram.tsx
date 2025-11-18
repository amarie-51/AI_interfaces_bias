import { ImageWithFallback } from './figma/ImageWithFallback';
import { Clock, BookOpen, GraduationCap, Award, Briefcase, Heart } from 'lucide-react';

export function AboutProgram() {
  const keyInfo = [
    { icon: <Clock className="w-6 h-6" />, label: 'Duration', value: '4 Years (8 Semesters)' },
    { icon: <GraduationCap className="w-6 h-6" />, label: 'Degree', value: 'Bachelor of Science in Nursing (BSN)' },
    { icon: <BookOpen className="w-6 h-6" />, label: 'Credits', value: '128 Credit Hours' },
    { icon: <Award className="w-6 h-6" />, label: 'Study Mode', value: 'Full-time, On-Campus' },
  ];

  const learningOutcomes = [
    'Provide evidence-based, patient-centered care across diverse populations and settings',
    'Apply critical thinking and clinical reasoning in complex healthcare situations',
    'Demonstrate effective communication and collaboration with interdisciplinary teams',
    'Integrate leadership principles and quality improvement strategies in practice',
    'Uphold ethical and legal standards in professional nursing practice',
    'Utilize technology and informatics to enhance patient care and safety',
  ];

  const curriculum = [
    {
      year: 'Year 1 - Foundation',
      courses: [
        'Anatomy & Physiology I & II',
        'Introduction to Nursing Practice',
        'Microbiology for Health Sciences',
        'General Psychology',
        'English Composition',
        'Introduction to Healthcare Ethics',
      ],
    },
    {
      year: 'Year 2 - Core Nursing',
      courses: [
        'Health Assessment',
        'Fundamentals of Nursing',
        'Pharmacology for Nurses',
        'Pathophysiology',
        'Nutrition for Nurses',
        'Medical-Surgical Nursing I',
      ],
    },
    {
      year: 'Year 3 - Specialization',
      courses: [
        'Medical-Surgical Nursing II',
        'Pediatric Nursing',
        'Maternal-Child Nursing',
        'Mental Health Nursing',
        'Community Health Nursing',
        'Nursing Research',
      ],
    },
    {
      year: 'Year 4 - Advanced Practice',
      courses: [
        'Critical Care Nursing',
        'Nursing Leadership & Management',
        'Complex Care Nursing',
        'Professional Issues in Nursing',
        'Senior Capstone & Practicum',
        'NCLEX Preparation',
      ],
    },
  ];

  const careerOpportunities = [
    {
      title: 'Registered Nurse (RN)',
      description: 'Work in hospitals, clinics, or community health settings providing direct patient care.',
    },
    {
      title: 'Clinical Nurse Specialist',
      description: 'Focus on specialized areas like cardiac care, oncology, or pediatrics.',
    },
    {
      title: 'Nurse Educator',
      description: 'Teach the next generation of nurses in academic or clinical settings.',
    },
    {
      title: 'Healthcare Administrator',
      description: 'Lead nursing teams and manage healthcare facilities and departments.',
    },
    {
      title: 'Public Health Nurse',
      description: 'Promote community health through education and preventive care programs.',
    },
    {
      title: 'Advanced Practice Pathway',
      description: 'Continue education toward Nurse Practitioner, Nurse Anesthetist, or other advanced roles.',
    },
  ];

  const reasons = [
    {
      title: 'Clinical Excellence',
      description: 'Over 800 clinical hours in top-rated hospitals and healthcare facilities',
      icon: <Heart className="w-8 h-8" />,
    },
    {
      title: 'State-of-the-Art Facilities',
      description: 'High-fidelity simulation labs that replicate real-world clinical environments',
      icon: <Award className="w-8 h-8" />,
    },
    {
      title: 'Experienced Faculty',
      description: 'Learn from practicing nurses and healthcare leaders with decades of experience',
      icon: <GraduationCap className="w-8 h-8" />,
    },
    {
      title: 'Career Success',
      description: '95% job placement rate and 98% first-time NCLEX pass rate',
      icon: <Briefcase className="w-8 h-8" />,
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white mb-4">About Our BSN Program</h1>
          <p className="text-xl max-w-3xl">
            Our Bachelor of Science in Nursing program is designed to prepare compassionate, 
            skilled nurses ready to meet the challenges of modern healthcare.
          </p>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Transform Your Future in Healthcare</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our BSN program offers a comprehensive education that combines theoretical knowledge 
                  with extensive hands-on clinical experience. From your first semester, you'll engage 
                  in meaningful patient care experiences that prepare you for the realities of nursing practice.
                </p>
                <p>
                  Accredited by the Commission on Collegiate Nursing Education (CCNE), our program maintains 
                  the highest standards of nursing education. We're committed to developing nurses who are 
                  not only clinically competent but also compassionate leaders in healthcare.
                </p>
                <p>
                  With partnerships across multiple healthcare systems and specialty hospitals, our students 
                  gain exposure to diverse patient populations and clinical settings, ensuring they graduate 
                  with the confidence and skills to excel in any healthcare environment.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758206523705-666590ae0a66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2MzQ3ODIxMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Medical Classroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Program Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-blue-600 flex justify-center mb-4">{info.icon}</div>
                <p className="text-sm text-gray-600 mb-2">{info.label}</p>
                <p className="text-gray-900">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8">Program Learning Outcomes</h2>
          <p className="text-lg text-gray-600 mb-8">
            Upon graduation, BSN students will be able to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningOutcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-4 bg-blue-50 p-6 rounded-lg">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                  {index + 1}
                </div>
                <p className="text-gray-700">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-4">Curriculum by Year</h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            A progressive curriculum designed to build your knowledge and skills
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curriculum.map((year, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-blue-900 mb-6">{year.year}</h3>
                <ul className="space-y-3">
                  {year.courses.map((course, courseIndex) => (
                    <li key={courseIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-4">Career Opportunities</h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            Your BSN degree opens doors to diverse and rewarding career paths
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerOpportunities.map((career, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-blue-900 mb-3">{career.title}</h3>
                <p className="text-gray-600">{career.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose This Program */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-white mb-12">Why Choose Our Program?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="flex gap-6">
                <div className="text-blue-300 flex-shrink-0">{reason.icon}</div>
                <div>
                  <h3 className="text-white mb-2">{reason.title}</h3>
                  <p className="text-blue-100">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Experience Our Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1620063487586-c3f97749bb84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NjM0NzgyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white">Collaborative Learning Environment</p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1734002886107-168181bcd6a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwY2xpbmljYWwlMjBwcmFjdGljZXxlbnwxfHx8fDE3NjM0NzgyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Clinical practice"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white">Hands-On Clinical Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
