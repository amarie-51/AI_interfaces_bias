import { CheckCircle, Calendar, Book, Users, Clock, Monitor } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutProgram() {
  const keyInfo = [
    { icon: Calendar, label: 'Duration', value: '4 Years (8 Semesters)' },
    { icon: Book, label: 'Degree', value: 'Bachelor of Science in Nursing (BSN)' },
    { icon: Users, label: 'Credits', value: '120 Credit Hours' },
    { icon: Clock, label: 'Clinical Hours', value: '700+ Hours' },
    { icon: Monitor, label: 'Study Mode', value: 'On-Campus & Hybrid Options' },
  ];

  const learningOutcomes = [
    'Demonstrate clinical competence in providing safe, evidence-based nursing care across the lifespan',
    'Apply critical thinking and clinical reasoning to complex patient care situations',
    'Communicate effectively with patients, families, and healthcare teams',
    'Practice with cultural competence and respect for diversity in healthcare settings',
    'Integrate leadership skills and collaborate within interprofessional teams',
    'Utilize health informatics and technology to improve patient outcomes',
    'Advocate for patients and promote health equity in communities',
    'Engage in lifelong learning and professional development',
  ];

  const curriculum = [
    {
      year: 'Year 1: Foundation',
      courses: [
        'Anatomy & Physiology I & II',
        'Introduction to Nursing',
        'Microbiology',
        'Nutrition in Health',
        'Psychology',
        'English Composition',
        'Health Assessment',
      ],
    },
    {
      year: 'Year 2: Core Nursing Concepts',
      courses: [
        'Pharmacology for Nurses',
        'Pathophysiology',
        'Adult Health Nursing I',
        'Nursing Research & Evidence-Based Practice',
        'Mental Health Nursing',
        'Community Health Nursing',
      ],
    },
    {
      year: 'Year 3: Advanced Practice',
      courses: [
        'Adult Health Nursing II',
        'Maternal-Child Nursing',
        'Pediatric Nursing',
        'Chronic Illness Management',
        'Healthcare Ethics',
        'Leadership in Nursing',
      ],
    },
    {
      year: 'Year 4: Professional Integration',
      courses: [
        'Critical Care Nursing',
        'Complex Care & Advanced Practice',
        'Nursing Capstone Project',
        'Professional Practice Transition',
        'Healthcare Policy & Advocacy',
        'Clinical Practicum',
      ],
    },
  ];

  const careers = [
    {
      title: 'Registered Nurse (RN)',
      description: 'Provide direct patient care in hospitals, clinics, and healthcare facilities',
      salary: '$70,000 - $90,000',
    },
    {
      title: 'Clinical Nurse Specialist',
      description: 'Specialized care in areas like cardiology, oncology, or pediatrics',
      salary: '$80,000 - $110,000',
    },
    {
      title: 'Nurse Educator',
      description: 'Teach and mentor nursing students in academic or clinical settings',
      salary: '$75,000 - $95,000',
    },
    {
      title: 'Nurse Manager',
      description: 'Oversee nursing staff and coordinate patient care in healthcare units',
      salary: '$85,000 - $115,000',
    },
    {
      title: 'Public Health Nurse',
      description: 'Promote community health and disease prevention programs',
      salary: '$65,000 - $85,000',
    },
    {
      title: 'Nurse Practitioner (with MSN)',
      description: 'Advanced practice with diagnostic and prescriptive authority',
      salary: '$100,000 - $130,000',
    },
  ];

  const reasons = [
    {
      title: 'NCLEX-RN Excellence',
      description: 'Our graduates consistently achieve a 98% first-time pass rate on the NCLEX-RN exam, well above the national average.',
    },
    {
      title: 'Clinical Partnerships',
      description: 'Train at prestigious medical centers and hospitals, gaining experience in diverse healthcare settings.',
    },
    {
      title: 'Small Class Sizes',
      description: 'Personalized attention with a 12:1 student-to-faculty ratio ensures individualized mentorship and support.',
    },
    {
      title: 'Simulation Technology',
      description: 'Practice in our state-of-the-art simulation labs with high-fidelity mannequins and realistic clinical scenarios.',
    },
    {
      title: 'Research Opportunities',
      description: 'Engage in cutting-edge nursing research alongside faculty members and contribute to evidence-based practice.',
    },
    {
      title: 'Career Support',
      description: 'Dedicated career services team with 95% job placement rate within 6 months of graduation.',
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white mb-4">About Our BSN Program</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            A comprehensive nursing education that prepares you for a rewarding career in healthcare
          </p>
        </div>
      </div>

      {/* Program Description */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-blue-900 mb-6">Program Overview</h2>
            <p className="text-gray-700 mb-4">
              Our Bachelor of Science in Nursing program is accredited by the Commission on Collegiate Nursing Education (CCNE) and designed to prepare graduates for professional nursing practice in a variety of healthcare settings.
            </p>
            <p className="text-gray-700 mb-4">
              The curriculum integrates liberal arts and sciences with professional nursing courses, providing a strong foundation in biological, social, and behavioral sciences. Students develop critical thinking, clinical judgment, and leadership skills essential for contemporary nursing practice.
            </p>
            <p className="text-gray-700">
              Through progressive clinical experiences, students work alongside experienced nurses and healthcare professionals, applying theoretical knowledge in real-world settings. Our program emphasizes patient safety, quality improvement, and evidence-based practice.
            </p>
          </div>
          <div className="relative h-[400px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDF8fHx8MTc2MzQyMDA1OXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Campus building"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Key Information */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-blue-900 mb-12">Program Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {keyInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <div className="text-gray-600 mb-2">{info.label}</div>
                  <div className="text-blue-900">{info.value}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Learning Outcomes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative h-[500px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1712782390367-6d9a2843d893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzNDc4MjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Nursing students learning"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-blue-900 mb-6">Learning Outcomes</h2>
            <p className="text-gray-700 mb-6">
              Upon completion of the BSN program, graduates will be able to:
            </p>
            <ul className="space-y-3">
              {learningOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Curriculum */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-blue-900 mb-4">Curriculum by Year</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our comprehensive curriculum builds progressively from foundational sciences to advanced nursing practice
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curriculum.map((year, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-blue-900 mb-4">{year.year}</h3>
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
      </div>

      {/* Career Opportunities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-center text-blue-900 mb-4">Career Opportunities</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Our BSN graduates pursue diverse and rewarding careers in healthcare
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers.map((career, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-blue-900 mb-2">{career.title}</h3>
              <p className="text-gray-700 mb-3">{career.description}</p>
              <div className="text-green-600">{career.salary}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Our Program */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-white mb-12">Why Choose Our Program?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
                <h3 className="text-white mb-3">{reason.title}</h3>
                <p className="text-blue-100">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Supporting Visual Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-[300px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1562673462-877b3612cbea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjMzODgzMDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Nurse in action"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="relative h-[300px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1576670158645-ef7b03134e32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGlicmFyeXxlbnwxfHx8fDE3NjM0NzgyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Study environment"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
