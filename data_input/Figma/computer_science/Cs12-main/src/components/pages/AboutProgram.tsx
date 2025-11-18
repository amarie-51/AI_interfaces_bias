import { ImageWithFallback } from '../figma/ImageWithFallback';
import { CheckCircle, Calendar, Award, BookOpen, Users, Laptop } from 'lucide-react';

export function AboutProgram() {
  const keyInfo = [
    { label: 'Duration', value: '4 Years (8 Semesters)', icon: Calendar },
    { label: 'Degree', value: 'Bachelor of Science (BS)', icon: Award },
    { label: 'Total Credits', value: '120 Credit Hours', icon: BookOpen },
    { label: 'Study Mode', value: 'Full-time / Part-time', icon: Users },
  ];

  const learningOutcomes = [
    'Design, implement, and evaluate computer-based systems and applications',
    'Apply theoretical foundations of computing to solve complex problems',
    'Analyze computational problems and devise algorithmic solutions',
    'Work effectively in teams to develop large-scale software systems',
    'Communicate technical concepts clearly to both technical and non-technical audiences',
    'Apply ethical principles and professional standards in computing practice',
    'Adapt to emerging technologies and continue professional development',
    'Apply software engineering principles to design scalable systems',
  ];

  const curriculum = [
    {
      year: 'First Year',
      courses: [
        'Introduction to Computer Science',
        'Programming Fundamentals',
        'Discrete Mathematics',
        'Calculus I & II',
        'Physics for Engineers',
        'English Composition',
      ],
    },
    {
      year: 'Second Year',
      courses: [
        'Data Structures and Algorithms',
        'Computer Organization',
        'Object-Oriented Programming',
        'Linear Algebra',
        'Statistics for Computing',
        'Technical Communication',
      ],
    },
    {
      year: 'Third Year',
      courses: [
        'Operating Systems',
        'Database Systems',
        'Software Engineering',
        'Computer Networks',
        'Theory of Computation',
        'Elective Courses',
      ],
    },
    {
      year: 'Fourth Year',
      courses: [
        'Artificial Intelligence',
        'Machine Learning',
        'Cybersecurity',
        'Senior Capstone Project',
        'Advanced Electives',
        'Professional Development',
      ],
    },
  ];

  const careers = [
    'Software Engineer',
    'Data Scientist',
    'Web Developer',
    'Mobile App Developer',
    'DevOps Engineer',
    'Machine Learning Engineer',
    'Cybersecurity Analyst',
    'Database Administrator',
    'Systems Architect',
    'Cloud Solutions Engineer',
    'AI Research Scientist',
    'Full-Stack Developer',
  ];

  const reasons = [
    {
      title: 'Cutting-Edge Curriculum',
      description: 'Stay ahead with courses covering the latest technologies including AI, machine learning, cloud computing, and cybersecurity.',
    },
    {
      title: 'Hands-On Experience',
      description: 'Work on real-world projects, participate in hackathons, and collaborate with industry partners on meaningful challenges.',
    },
    {
      title: 'Research Opportunities',
      description: 'Engage in groundbreaking research alongside faculty in areas like artificial intelligence, robotics, and data science.',
    },
    {
      title: 'Industry Connections',
      description: 'Benefit from our partnerships with leading tech companies offering internships, mentorship, and job opportunities.',
    },
    {
      title: 'State-of-the-Art Facilities',
      description: 'Access modern computer labs, maker spaces, and specialized equipment for your coursework and projects.',
    },
    {
      title: 'Supportive Community',
      description: 'Join a diverse, collaborative environment with dedicated advisors, peer tutoring, and active student organizations.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl mb-6">Bachelor of Science in Computer Science</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A comprehensive program designed to prepare you for leadership in the technology sector through
            rigorous academics, hands-on experience, and innovative research opportunities.
          </p>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl text-gray-900 mb-6">About the Program</h2>
              <p className="text-gray-700 mb-4">
                Our Bachelor of Science in Computer Science program is designed to provide students with a solid
                foundation in both theoretical and practical aspects of computing. The curriculum emphasizes
                problem-solving, critical thinking, and hands-on application of computer science principles.
              </p>
              <p className="text-gray-700 mb-4">
                Students gain expertise in software development, algorithms, data structures, computer systems,
                and emerging technologies. The program balances core computer science fundamentals with specialized
                electives, allowing students to tailor their education to their career goals.
              </p>
              <p className="text-gray-700">
                Through collaborative projects, internships, and research opportunities, students develop the
                technical skills and professional competencies needed to excel in the rapidly evolving tech industry.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1681171575028-16aa7a6f063e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBzdHVkZW50cyUyMGNhbXB1c3xlbnwxfHx8fDE3NjM0NzI0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students on campus"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">Program Key Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
                <info.icon className="text-blue-600 mx-auto mb-4" size={48} />
                <p className="text-sm text-gray-600 mb-2">{info.label}</p>
                <p className="text-gray-900">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">Learning Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningOutcomes.map((outcome, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum by Year */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">Curriculum Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curriculum.map((year, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl text-blue-600 mb-4">{year.year}</h3>
                <ul className="space-y-2">
                  {year.courses.map((course, courseIndex) => (
                    <li key={courseIndex} className="flex items-start space-x-2">
                      <Laptop className="text-gray-400 flex-shrink-0 mt-1" size={18} />
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1695066964145-245927509533?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvZGluZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc2MzQ0MTg5NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students coding together"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl text-gray-900 mb-6">Career Opportunities</h2>
              <p className="text-gray-700 mb-6">
                Our graduates are prepared for diverse and rewarding careers in the technology sector.
                With a strong foundation in computer science principles and practical experience, they pursue
                roles including but not limited to:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {careers.map((career, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="text-blue-600 flex-shrink-0" size={18} />
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
          <h2 className="text-4xl text-gray-900 mb-12 text-center">Why Choose Our Program?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Visuals */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">Student Life & Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1680264341897-6c4f620627bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBjbGFzc3Jvb218ZW58MXx8fHwxNzYzNDcyMzY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Computer Science Classroom"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1605781231474-f60dea478e8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwbGFiJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzNDcyNDczfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Technology Lab"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
