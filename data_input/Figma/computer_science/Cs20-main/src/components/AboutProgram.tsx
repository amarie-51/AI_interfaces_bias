import { Clock, Award, BookOpen, GraduationCap, Code, Database, Cpu, Shield, Cloud, Rocket } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutProgram() {
  const keyInfo = [
    { icon: Clock, label: 'Duration', value: '4 Years (8 Semesters)' },
    { icon: Award, label: 'Degree', value: 'Bachelor of Science (B.S.)' },
    { icon: BookOpen, label: 'Total Credits', value: '120 Credits' },
    { icon: GraduationCap, label: 'Study Mode', value: 'Full-time / Part-time' },
  ];

  const learningOutcomes = [
    'Design, implement, and evaluate computer-based solutions to complex computing problems',
    'Apply computer science theory and software development fundamentals to produce computing-based solutions',
    'Communicate effectively with a range of audiences about technical information',
    'Recognize professional responsibilities and make informed judgments in computing practice based on legal and ethical principles',
    'Function effectively as a member or leader of a team engaged in activities appropriate to the discipline',
    'Apply security principles and practices to maintain operations in the presence of risks and threats',
  ];

  const curriculum = [
    {
      year: 'Year 1',
      courses: [
        'Introduction to Programming',
        'Discrete Mathematics',
        'Computer Systems & Architecture',
        'Data Structures',
        'Calculus I & II',
        'General Education Requirements',
      ],
    },
    {
      year: 'Year 2',
      courses: [
        'Algorithms & Complexity',
        'Object-Oriented Programming',
        'Database Systems',
        'Operating Systems',
        'Linear Algebra',
        'Statistics for Computer Science',
      ],
    },
    {
      year: 'Year 3',
      courses: [
        'Software Engineering',
        'Computer Networks',
        'Artificial Intelligence',
        'Machine Learning',
        'Web Development',
        'Technical Electives',
      ],
    },
    {
      year: 'Year 4',
      courses: [
        'Cybersecurity',
        'Cloud Computing',
        'Mobile App Development',
        'Capstone Project',
        'Advanced Electives',
        'Professional Development',
      ],
    },
  ];

  const careers = [
    {
      icon: Code,
      title: 'Software Engineer',
      description: 'Develop applications and systems for web, mobile, and enterprise',
    },
    {
      icon: Database,
      title: 'Data Scientist',
      description: 'Analyze complex data and build predictive models',
    },
    {
      icon: Cpu,
      title: 'Machine Learning Engineer',
      description: 'Design and implement AI-powered solutions',
    },
    {
      icon: Shield,
      title: 'Cybersecurity Analyst',
      description: 'Protect systems and data from security threats',
    },
    {
      icon: Cloud,
      title: 'Cloud Architect',
      description: 'Design and manage scalable cloud infrastructure',
    },
    {
      icon: Rocket,
      title: 'Product Manager',
      description: 'Lead product development with technical expertise',
    },
  ];

  const reasons = [
    {
      title: 'Industry Partnerships',
      description: 'Collaborate with leading tech companies through internships and projects',
    },
    {
      title: 'State-of-the-Art Labs',
      description: 'Access cutting-edge equipment and software for hands-on learning',
    },
    {
      title: 'Research Opportunities',
      description: 'Participate in faculty research across AI, security, and more',
    },
    {
      title: 'Flexible Learning',
      description: 'Choose from full-time, part-time, or hybrid study options',
    },
    {
      title: 'Career Support',
      description: 'Dedicated career services, resume reviews, and interview preparation',
    },
    {
      title: 'Global Perspective',
      description: 'Study abroad programs and international research collaborations',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl mb-6">About Our Program</h1>
            <p className="text-xl">
              A comprehensive education that combines theoretical foundations with practical skills, preparing you for a successful career in technology
            </p>
          </div>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">Program Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our Bachelor of Science in Computer Science program offers a rigorous, well-rounded education 
                that prepares students for the dynamic and rapidly evolving field of computing. The curriculum 
                balances theoretical knowledge with practical application, ensuring graduates are equipped with 
                both fundamental principles and current industry skills.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Students engage in hands-on projects, collaborative learning, and research opportunities from 
                the very first semester. Our program emphasizes problem-solving, critical thinking, and innovation, 
                preparing you to tackle complex challenges in software development, artificial intelligence, 
                cybersecurity, and emerging technologies.
              </p>
              <p className="text-lg text-gray-600">
                With small class sizes, dedicated faculty mentorship, and strong industry connections, our 
                program provides a supportive environment where every student can thrive and reach their full potential.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1669101283985-ab2b293923df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBsYWJ8ZW58MXx8fHwxNzYzNDMyOTgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Computer Science Lab"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1695066964145-245927509533?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvZGluZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc2MzQ0MTg5NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students Collaborating"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-12 text-center">Program Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                    <h3 className="mb-2">{info.label}</h3>
                    <p className="text-gray-600">{info.value}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-6 text-center">Learning Outcomes</h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Upon completion of the program, graduates will be able to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {learningOutcomes.map((outcome, index) => (
                <Card key={index} className="border-l-4 border-l-blue-600">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{outcome}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-12 text-center">Curriculum by Year</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculum.map((year, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                      {index + 1}
                    </div>
                    <h3 className="text-xl">{year.year}</h3>
                  </div>
                  <ul className="space-y-3">
                    {year.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{course}</span>
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
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Career Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our graduates pursue diverse and rewarding careers in technology and beyond
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careers.map((career, index) => {
              const Icon = career.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                    <h3 className="text-xl mb-2">{career.title}</h3>
                    <p className="text-gray-600">{career.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reasons to Choose */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-12 text-center">Why Choose Our Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Section with Students */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1654366698665-e6d611a9aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2MzQ0MTA2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Students Learning"
            className="w-full h-96 object-cover rounded-lg shadow-xl"
          />
        </div>
      </section>
    </div>
  );
}
