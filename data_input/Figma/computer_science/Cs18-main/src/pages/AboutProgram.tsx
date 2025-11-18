import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Check, Clock, BookOpen, Globe, Award, TrendingUp } from 'lucide-react';

export function AboutProgram() {
  const keyInfo = [
    { label: 'Duration', value: '4 Years (8 Semesters)', icon: <Clock className="w-5 h-5" /> },
    { label: 'Degree', value: 'Bachelor of Science (B.S.)', icon: <Award className="w-5 h-5" /> },
    { label: 'Total Credits', value: '120 Credit Hours', icon: <BookOpen className="w-5 h-5" /> },
    { label: 'Study Mode', value: 'Full-time / Part-time', icon: <Globe className="w-5 h-5" /> },
  ];

  const learningOutcomes = [
    'Design, implement, and evaluate computing solutions using modern programming languages and development tools',
    'Apply fundamental computer science theories and algorithms to solve complex computational problems',
    'Develop software systems using industry-standard methodologies and best practices',
    'Analyze and evaluate the ethical, legal, and social implications of computing technologies',
    'Work effectively in teams on large-scale software development projects',
    'Communicate technical concepts clearly to both technical and non-technical audiences',
    'Apply security principles and practices to protect data and computing systems',
    'Demonstrate proficiency in specialized areas such as AI, cybersecurity, or web development',
  ];

  const curriculum = [
    {
      year: 'Year 1',
      courses: [
        'Introduction to Computer Science',
        'Programming Fundamentals',
        'Discrete Mathematics',
        'Calculus I & II',
        'Physics for Engineers',
        'Technical Writing',
      ],
    },
    {
      year: 'Year 2',
      courses: [
        'Data Structures and Algorithms',
        'Object-Oriented Programming',
        'Computer Organization',
        'Linear Algebra',
        'Probability and Statistics',
        'Database Systems',
      ],
    },
    {
      year: 'Year 3',
      courses: [
        'Operating Systems',
        'Software Engineering',
        'Computer Networks',
        'Artificial Intelligence',
        'Theory of Computation',
        'Elective Courses',
      ],
    },
    {
      year: 'Year 4',
      courses: [
        'Cybersecurity Fundamentals',
        'Machine Learning',
        'Cloud Computing',
        'Senior Capstone Project',
        'Advanced Electives',
        'Professional Development',
      ],
    },
  ];

  const careers = [
    'Software Engineer',
    'Full-Stack Developer',
    'Data Scientist',
    'Machine Learning Engineer',
    'DevOps Engineer',
    'Cloud Solutions Architect',
    'Cybersecurity Analyst',
    'Mobile App Developer',
    'AI Research Scientist',
    'Database Administrator',
    'Systems Analyst',
    'Product Manager (Technical)',
  ];

  const reasons = [
    {
      title: 'Industry-Aligned Curriculum',
      description: 'Our courses are designed in collaboration with tech industry leaders to ensure relevance and employability.',
    },
    {
      title: 'Experienced Faculty',
      description: 'Learn from professors with extensive industry experience and active research in cutting-edge technologies.',
    },
    {
      title: 'State-of-the-Art Facilities',
      description: 'Access modern computing labs, AI research centers, and collaborative workspaces equipped with the latest technology.',
    },
    {
      title: 'Strong Industry Connections',
      description: 'Benefit from partnerships with leading tech companies offering internships, mentorship, and recruitment opportunities.',
    },
    {
      title: 'Research Opportunities',
      description: 'Participate in groundbreaking research projects in AI, cybersecurity, data science, and more.',
    },
    {
      title: 'Career Support',
      description: 'Dedicated career services team providing resume reviews, interview prep, and job placement assistance.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white mb-6">About the Program</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Our Bachelor of Science in Computer Science is designed to prepare you for a successful career in the dynamic field of technology through comprehensive education, hands-on experience, and industry partnerships.
          </p>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-6">Program Overview</h2>
              <p className="text-gray-600 mb-4">
                The Bachelor of Science in Computer Science provides a comprehensive foundation in computing principles, software development, and emerging technologies. Our program combines theoretical knowledge with practical application, preparing students for diverse careers in the technology sector.
              </p>
              <p className="text-gray-600 mb-4">
                Students engage in hands-on projects, collaborative learning experiences, and real-world problem-solving from their first semester. The curriculum is regularly updated to reflect current industry trends and technological advancements.
              </p>
              <p className="text-gray-600">
                With a focus on innovation, critical thinking, and ethical computing practices, our graduates are equipped to become leaders in creating technology solutions that positively impact society.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1680264341897-6c4f620627bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBjbGFzc3Jvb218ZW58MXx8fHwxNzYzNDcyMzY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Computer Science classroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-12 text-center">Key Program Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 mb-3">{info.icon}</div>
                <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                <p className="text-gray-900">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-12 text-center">Learning Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningOutcomes.map((outcome, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-gray-600">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Curriculum by Year</h2>
            <p className="text-xl text-gray-600">
              A structured path through your computer science education
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculum.map((yearData, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-600 text-white px-6 py-4">
                  <h3 className="text-white">{yearData.year}</h3>
                </div>
                <ul className="p-6 space-y-3">
                  {yearData.courses.map((course, courseIndex) => (
                    <li key={courseIndex} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{course}</span>
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
            <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1753613648137-602c669cbe07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvZGluZyUyMGNvbXB1dGVyc3xlbnwxfHx8fDE3NjMzNjkzOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students coding"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-blue-600" />
                <h2 className="text-gray-900">Career Opportunities</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Our graduates pursue diverse and rewarding careers in technology. With a strong foundation in computer science principles and hands-on experience, you'll be prepared for positions such as:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {careers.map((career, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{career}</span>
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
          <h2 className="text-gray-900 mb-12 text-center">Why Choose Our Program?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
