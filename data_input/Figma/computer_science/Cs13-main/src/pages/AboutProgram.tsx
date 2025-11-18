import { Clock, BookOpen, Calendar, Monitor, CheckCircle, Briefcase } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutProgram() {
  const keyInfo = [
    { icon: <Clock className="w-6 h-6" />, label: 'Duration', value: '4 Years (8 Semesters)' },
    { icon: <BookOpen className="w-6 h-6" />, label: 'Degree', value: 'Bachelor of Science (B.S.)' },
    { icon: <Calendar className="w-6 h-6" />, label: 'Credits', value: '120 Credit Hours' },
    { icon: <Monitor className="w-6 h-6" />, label: 'Study Mode', value: 'On-Campus / Hybrid Options' },
  ];

  const learningOutcomes = [
    'Design, develop, and test software applications using modern programming languages and frameworks',
    'Apply algorithmic thinking and data structures to solve complex computational problems',
    'Understand computer architecture, operating systems, and network fundamentals',
    'Implement secure coding practices and cybersecurity principles',
    'Work effectively in teams using industry-standard development tools and methodologies',
    'Communicate technical concepts clearly to both technical and non-technical audiences',
    'Apply ethical reasoning to technology-related issues and professional situations',
    'Adapt to emerging technologies and continue learning throughout their careers',
  ];

  const curriculum = [
    {
      year: 'First Year',
      courses: [
        'Introduction to Programming (Python/Java)',
        'Discrete Mathematics',
        'Computer Systems Fundamentals',
        'Web Development Basics',
        'Calculus I & II',
        'English Composition',
        'General Education Electives',
      ],
    },
    {
      year: 'Second Year',
      courses: [
        'Data Structures and Algorithms',
        'Object-Oriented Programming',
        'Database Systems',
        'Computer Architecture',
        'Linear Algebra',
        'Statistics for Computer Science',
        'Technical Writing',
      ],
    },
    {
      year: 'Third Year',
      courses: [
        'Operating Systems',
        'Software Engineering',
        'Computer Networks',
        'Theory of Computation',
        'Artificial Intelligence',
        'Mobile Application Development',
        'Elective Courses',
      ],
    },
    {
      year: 'Fourth Year',
      courses: [
        'Cybersecurity Fundamentals',
        'Cloud Computing',
        'Machine Learning',
        'Senior Capstone Project',
        'Professional Ethics in Computing',
        'Advanced Electives',
        'Internship/Co-op',
      ],
    },
  ];

  const careers = [
    { title: 'Software Engineer', salary: '$95,000 - $150,000' },
    { title: 'Full Stack Developer', salary: '$85,000 - $140,000' },
    { title: 'Data Scientist', salary: '$100,000 - $160,000' },
    { title: 'Cybersecurity Analyst', salary: '$90,000 - $145,000' },
    { title: 'AI/ML Engineer', salary: '$110,000 - $180,000' },
    { title: 'Cloud Solutions Architect', salary: '$120,000 - $190,000' },
    { title: 'DevOps Engineer', salary: '$95,000 - $155,000' },
    { title: 'Mobile App Developer', salary: '$85,000 - $135,000' },
  ];

  const reasons = [
    {
      title: 'Industry Partnerships',
      description: 'Strong connections with leading tech companies provide internship and job opportunities',
    },
    {
      title: 'State-of-the-Art Facilities',
      description: 'Modern computer labs, maker spaces, and collaboration areas equipped with latest technology',
    },
    {
      title: 'Research Excellence',
      description: 'Opportunity to work on funded research projects in AI, robotics, and cybersecurity',
    },
    {
      title: 'Small Class Sizes',
      description: 'Average class size of 25 students ensures personalized attention and mentorship',
    },
    {
      title: 'Career Services',
      description: 'Dedicated career counseling, resume workshops, and interview preparation',
    },
    {
      title: 'Global Perspective',
      description: 'Study abroad programs and international collaboration opportunities',
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4">About the Program</h1>
          <p className="text-xl max-w-3xl">
            Our Bachelor of Science in Computer Science program is designed to provide you with 
            the technical skills, theoretical knowledge, and practical experience needed to thrive 
            in today's technology-driven world.
          </p>
        </div>
      </section>

      {/* Program Description with Image */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">A Comprehensive Education</h2>
              <p className="mb-4 text-gray-700">
                Our program combines rigorous coursework in computer science fundamentals with 
                hands-on experience in cutting-edge technologies. You'll learn from faculty who 
                are active researchers and industry professionals, ensuring that your education 
                is both current and relevant.
              </p>
              <p className="mb-4 text-gray-700">
                We emphasize problem-solving, critical thinking, and collaborative skills that 
                employers value. Through team projects, internships, and capstone experiences, 
                you'll build a portfolio that showcases your abilities to potential employers.
              </p>
              <p className="text-gray-700">
                Our graduates are prepared for immediate employment or graduate study, with the 
                adaptability to grow throughout their careers as technology evolves.
              </p>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1689236673934-66f8e9d9279b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvbGxhYm9yYXRpbmclMjBjb21wdXRlciUyMGxhYnxlbnwxfHx8fDE3NjM0NzU3Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students collaborating"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Program Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="mb-2">{info.label}</h3>
                <p className="text-gray-600">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4">Learning Outcomes</h2>
          <p className="text-gray-600 mb-8">
            Upon successful completion of the program, graduates will be able to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {learningOutcomes.map((outcome, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Curriculum by Year</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curriculum.map((year, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="mb-6 text-blue-600">{year.year}</h3>
                <ul className="space-y-3">
                  {year.courses.map((course, courseIndex) => (
                    <li key={courseIndex} className="flex items-start">
                      <span className="text-blue-600 mr-3">•</span>
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1753715613457-63127ec40824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMHdvcmtzcGFjZSUyMG1vZGVybnxlbnwxfHx8fDE3NjM0NzU3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Programming workspace"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Briefcase className="w-8 h-8 text-blue-600" />
                <h2>Career Opportunities</h2>
              </div>
              <p className="mb-6 text-gray-700">
                Our graduates pursue diverse careers in technology, with strong earning potential 
                and excellent job growth prospects. Here are some common career paths:
              </p>
              <div className="space-y-4">
                {careers.map((career, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-900">{career.title}</span>
                    <span className="text-blue-600">{career.salary}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons to Choose */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Why Choose Our Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="mb-3 text-blue-600">{reason.title}</h3>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Experience Image */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-8">Student Experience</h2>
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1631599143424-5bc234fbebf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYzNDUyMzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Campus building"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="mb-2">World-Class Campus</h3>
                <p className="max-w-2xl">
                  Study in modern facilities designed to foster collaboration, creativity, and innovation. 
                  Our campus provides everything you need to succeed academically and socially.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
