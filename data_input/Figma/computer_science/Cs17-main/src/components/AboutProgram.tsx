import { Calendar, Award, BookOpen, Users, Clock, Monitor } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutProgram() {
  const keyInfo = [
    { icon: <Clock className="w-6 h-6" />, label: 'Duration', value: '4 Years (8 Semesters)' },
    { icon: <Award className="w-6 h-6" />, label: 'Degree', value: 'Bachelor of Science in Computer Science' },
    { icon: <BookOpen className="w-6 h-6" />, label: 'Credits', value: '120 Credit Hours' },
    { icon: <Users className="w-6 h-6" />, label: 'Class Size', value: 'Average 25 Students' },
    { icon: <Monitor className="w-6 h-6" />, label: 'Study Mode', value: 'On-Campus / Hybrid Options' },
    { icon: <Calendar className="w-6 h-6" />, label: 'Start Dates', value: 'Fall & Spring Semesters' },
  ];

  const learningOutcomes = [
    'Design, develop, and deploy robust software applications using modern programming languages and frameworks',
    'Apply fundamental principles of algorithms, data structures, and computational theory to solve complex problems',
    'Demonstrate proficiency in database design, management, and optimization for data-driven applications',
    'Implement secure coding practices and understand cybersecurity principles to protect systems and data',
    'Collaborate effectively in teams using industry-standard development tools and methodologies',
    'Analyze ethical implications of technology and make responsible decisions in professional contexts',
    'Communicate technical concepts clearly to both technical and non-technical audiences',
    'Adapt to emerging technologies and engage in lifelong learning in the rapidly evolving tech industry',
  ];

  const curriculum = [
    {
      year: 'First Year',
      courses: [
        'Introduction to Programming (Python)',
        'Discrete Mathematics',
        'Computer Systems & Architecture',
        'Web Development Fundamentals',
        'Calculus I & II',
        'English Composition',
        'Physics for Engineers',
      ],
    },
    {
      year: 'Second Year',
      courses: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming (Java)',
        'Database Systems',
        'Computer Networks',
        'Linear Algebra',
        'Statistics & Probability',
        'Technical Writing',
      ],
    },
    {
      year: 'Third Year',
      courses: [
        'Software Engineering',
        'Operating Systems',
        'Artificial Intelligence',
        'Mobile Application Development',
        'Cybersecurity Fundamentals',
        'Human-Computer Interaction',
        'Elective Courses',
      ],
    },
    {
      year: 'Fourth Year',
      courses: [
        'Machine Learning',
        'Cloud Computing',
        'Senior Capstone Project',
        'Advanced Electives',
        'Professional Ethics in Computing',
        'Internship / Co-op Experience',
        'Career Preparation Seminar',
      ],
    },
  ];

  const careers = [
    {
      title: 'Software Engineer',
      description: 'Design and develop applications for web, mobile, and desktop platforms',
      salary: '$85,000 - $150,000',
    },
    {
      title: 'Data Scientist',
      description: 'Analyze complex data sets to drive business decisions and insights',
      salary: '$90,000 - $160,000',
    },
    {
      title: 'Cybersecurity Analyst',
      description: 'Protect organizations from cyber threats and security breaches',
      salary: '$80,000 - $140,000',
    },
    {
      title: 'AI/ML Engineer',
      description: 'Build intelligent systems using machine learning and artificial intelligence',
      salary: '$95,000 - $175,000',
    },
    {
      title: 'Full Stack Developer',
      description: 'Create complete web applications from database to user interface',
      salary: '$80,000 - $145,000',
    },
    {
      title: 'DevOps Engineer',
      description: 'Bridge development and operations for efficient software delivery',
      salary: '$90,000 - $155,000',
    },
  ];

  const reasons = [
    {
      title: 'Industry Partnerships',
      description: 'Strong connections with leading tech companies provide internship and job opportunities for our students.',
    },
    {
      title: 'Modern Curriculum',
      description: 'Stay ahead with courses on AI, machine learning, cloud computing, and other cutting-edge technologies.',
    },
    {
      title: 'Research Opportunities',
      description: 'Engage in groundbreaking research alongside faculty on projects that push the boundaries of technology.',
    },
    {
      title: 'State-of-the-Art Facilities',
      description: 'Access to modern computer labs, maker spaces, and technology resources for hands-on learning.',
    },
    {
      title: 'Career Support',
      description: 'Dedicated career services team helps with resume building, interview prep, and job placement.',
    },
    {
      title: 'Diverse Community',
      description: 'Learn alongside students from around the world in an inclusive and collaborative environment.',
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-4">About the Program</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            A comprehensive education that prepares you for success in the ever-evolving world of technology
          </p>
        </div>
      </div>

      {/* Program Description */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-6">Transform Your Future</h2>
              <p className="text-gray-600 mb-4">
                Our Bachelor of Computer Science program is designed to provide students with 
                a solid foundation in computer science principles while preparing them for the 
                rapidly changing technology landscape. Through a combination of theoretical 
                knowledge and practical application, students develop the skills needed to 
                excel in various technology careers.
              </p>
              <p className="text-gray-600 mb-4">
                The program emphasizes critical thinking, problem-solving, and innovation. 
                Students work on real-world projects, collaborate with industry partners, 
                and have opportunities to specialize in areas such as artificial intelligence, 
                cybersecurity, data science, and software engineering.
              </p>
              <p className="text-gray-600">
                With small class sizes, dedicated faculty, and state-of-the-art facilities, 
                our program offers personalized attention and resources to help every student succeed.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1753613648137-602c669cbe07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBzdHVkZW50JTIwY29kaW5nfGVufDF8fHx8MTc2MzQ3NzMyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Student Coding"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Key Information */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 text-center mb-12">Program Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4"
              >
                <div className="text-blue-600 mt-1">{info.icon}</div>
                <div>
                  <p className="text-gray-900 mb-1">{info.label}</p>
                  <p className="text-gray-600">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Outcomes */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 text-center mb-12">Learning Outcomes</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 mb-8">
              Upon completion of the program, graduates will be able to:
            </p>
            <div className="space-y-4">
              {learningOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 text-center mb-4">Curriculum</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our curriculum is carefully structured to build your knowledge progressively, 
            from foundational concepts to advanced specializations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curriculum.map((year, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  {year.year}
                </h3>
                <ul className="space-y-3">
                  {year.courses.map((course, courseIndex) => (
                    <li key={courseIndex} className="flex items-start space-x-2">
                      <span className="text-blue-600 mt-1">•</span>
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
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 text-center mb-4">Career Opportunities</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our graduates are prepared for diverse and rewarding careers in the technology sector.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careers.map((career, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-gray-900 mb-2">{career.title}</h3>
                <p className="text-gray-600 mb-4">{career.description}</p>
                <p className="text-blue-600">
                  Average Salary: {career.salary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 text-center mb-12">Why Choose Our Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Students in Action */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 text-center mb-12">Our Students in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1637855195094-992d3d578f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHdvcmtpbmclMjBjb21wdXRlciUyMGxhYnxlbnwxfHx8fDE3NjM0NzczNDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students Working in Lab"
                className="w-full h-80 object-cover"
              />
              <div className="p-6 bg-gray-50">
                <h3 className="text-gray-900 mb-2">Collaborative Learning</h3>
                <p className="text-gray-600">
                  Students work together on projects in our modern computer labs, 
                  developing teamwork and communication skills essential for tech careers.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1652766399415-aa89236590fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjM0NzczNDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Programming Classroom"
                className="w-full h-80 object-cover"
              />
              <div className="p-6 bg-gray-50">
                <h3 className="text-gray-900 mb-2">Hands-On Experience</h3>
                <p className="text-gray-600">
                  From day one, students engage in practical coding exercises and 
                  real-world projects that prepare them for professional environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
