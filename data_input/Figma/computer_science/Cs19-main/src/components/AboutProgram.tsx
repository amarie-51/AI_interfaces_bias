import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Clock, BookOpen, Award, Users, GraduationCap, Briefcase } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutProgram() {
  const keyInfo = [
    { icon: Clock, label: 'Duration', value: '4 Years' },
    { icon: Award, label: 'Degree', value: 'Bachelor of Science' },
    { icon: BookOpen, label: 'Credits', value: '120 Credit Hours' },
    { icon: Users, label: 'Study Mode', value: 'Full-time / Part-time' },
  ];

  const learningOutcomes = [
    'Design, implement, and evaluate computer-based systems and applications',
    'Apply mathematical foundations, algorithmic principles, and computer science theory',
    'Analyze complex computing problems and develop innovative solutions',
    'Function effectively as a member or leader of development teams',
    'Communicate effectively with diverse audiences about technical information',
    'Apply security principles and practices to maintain operations in a networked environment',
    'Demonstrate ethical and professional responsibilities in computing',
    'Recognize the need for continuous learning and professional development',
  ];

  const curriculum = [
    {
      year: 'Year 1',
      courses: [
        'Introduction to Programming',
        'Discrete Mathematics',
        'Computer Systems & Architecture',
        'Data Structures & Algorithms',
        'Web Development Fundamentals',
        'General Education Requirements',
      ],
    },
    {
      year: 'Year 2',
      courses: [
        'Object-Oriented Programming',
        'Database Systems',
        'Operating Systems',
        'Software Engineering',
        'Computer Networks',
        'Statistics for Computer Science',
      ],
    },
    {
      year: 'Year 3',
      courses: [
        'Artificial Intelligence',
        'Machine Learning',
        'Cybersecurity Fundamentals',
        'Cloud Computing',
        'Mobile Application Development',
        'Algorithm Design & Analysis',
      ],
    },
    {
      year: 'Year 4',
      courses: [
        'Capstone Project',
        'Advanced Topics in AI/ML',
        'Distributed Systems',
        'Software Architecture',
        'Professional Electives',
        'Industry Internship',
      ],
    },
  ];

  const careers = [
    { title: 'Software Engineer', salary: '$85,000 - $150,000' },
    { title: 'Full-Stack Developer', salary: '$80,000 - $140,000' },
    { title: 'Data Scientist', salary: '$90,000 - $160,000' },
    { title: 'Machine Learning Engineer', salary: '$100,000 - $180,000' },
    { title: 'DevOps Engineer', salary: '$85,000 - $155,000' },
    { title: 'Cybersecurity Analyst', salary: '$75,000 - $135,000' },
    { title: 'Cloud Solutions Architect', salary: '$95,000 - $170,000' },
    { title: 'Mobile App Developer', salary: '$80,000 - $145,000' },
  ];

  const reasons = [
    {
      title: 'Industry-Relevant Curriculum',
      description: 'Learn the most in-demand technologies and programming languages used by leading tech companies.',
    },
    {
      title: 'State-of-the-Art Facilities',
      description: 'Access cutting-edge computer labs, maker spaces, and research centers equipped with the latest technology.',
    },
    {
      title: 'Strong Industry Connections',
      description: 'Benefit from partnerships with major tech companies offering internships, mentorship, and job opportunities.',
    },
    {
      title: 'Research Opportunities',
      description: 'Engage in groundbreaking research projects in AI, machine learning, cybersecurity, and more.',
    },
    {
      title: 'Flexible Learning Options',
      description: 'Choose between full-time and part-time study modes to fit your lifestyle and goals.',
    },
    {
      title: 'Global Recognition',
      description: 'Earn a degree from an accredited program recognized worldwide by employers and universities.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/90 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1689236673934-66f8e9d9279b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvbXB1dGVyJTIwbGFifGVufDF8fHx8MTc2MzQ3NzMyOHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Students in Computer Lab"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <h1 className="mb-4">About Our Program</h1>
          <p className="text-xl text-gray-100">
            A comprehensive computer science education designed for the digital age
          </p>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Program Overview</h2>
            <p className="text-gray-700 mb-4">
              Our Bachelor of Science in Computer Science program provides a rigorous and comprehensive education in computing fundamentals, software development, and emerging technologies. Designed to prepare students for successful careers in the rapidly evolving tech industry, our curriculum combines theoretical knowledge with hands-on practical experience.
            </p>
            <p className="text-gray-700 mb-4">
              Through a blend of core courses, specialized electives, and real-world projects, students develop the technical skills, problem-solving abilities, and professional competencies needed to excel as software engineers, data scientists, system architects, and technology leaders.
            </p>
            <p className="text-gray-700">
              Our program is taught by experienced faculty who are active researchers and industry professionals, ensuring that students learn the most current and relevant practices in computer science.
            </p>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center">Program Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyInfo.map((info, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <info.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <p className="text-sm text-gray-600 mb-1">{info.label}</p>
                  <p className="text-gray-900">{info.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Learning Outcomes</h2>
            <p className="text-gray-600 mb-8">
              Upon completion of the program, graduates will be able to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {learningOutcomes.map((outcome, index) => (
                <div key={index} className="flex gap-3">
                  <GraduationCap className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
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
          <h2 className="mb-8 text-center">Curriculum by Year</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {curriculum.map((year, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="default">{year.year}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {year.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="flex items-start gap-2">
                        <BookOpen className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
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
              Our graduates are highly sought after by top companies across various industries. Here are some of the career paths available to you:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careers.map((career, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Briefcase className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="mb-2">{career.title}</h3>
                  <p className="text-sm text-gray-600">{career.salary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Program */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center">Why Choose Our Program?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-blue-600">{reason.title}</h3>
                  <p className="text-gray-700">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Visual */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="mb-4">Experiential Learning</h2>
              <p className="text-gray-700 mb-4">
                Our program emphasizes hands-on learning through lab work, projects, internships, and research opportunities. Students work with the latest technologies and tools used in industry, gaining practical experience that makes them job-ready upon graduation.
              </p>
              <p className="text-gray-700">
                From day one, you'll be writing code, building applications, and solving real-world problems. Our state-of-the-art computer labs provide 24/7 access to high-performance computing resources.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758270704262-ecc82b23dc37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY29sbGVnZSUyMHN0dWRlbnRzJTIwc3R1ZHlpbmd8ZW58MXx8fHwxNjM0NzczMjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students Learning"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
