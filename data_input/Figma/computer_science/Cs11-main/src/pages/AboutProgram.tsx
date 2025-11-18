import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { 
  BookOpen, 
  Clock, 
  GraduationCap, 
  Users, 
  Monitor, 
  CheckCircle,
  TrendingUp,
  Award
} from 'lucide-react';

export function AboutProgram() {
  const keyInfo = [
    { icon: Clock, label: 'Duration', value: '4 Years Full-Time' },
    { icon: GraduationCap, label: 'Degree', value: 'Bachelor of Science' },
    { icon: BookOpen, label: 'Credits', value: '120 Credit Hours' },
    { icon: Monitor, label: 'Study Mode', value: 'On-Campus & Hybrid' },
  ];

  const learningOutcomes = [
    'Design, implement, and evaluate computer-based systems and software solutions',
    'Apply mathematical foundations, algorithmic principles, and computer science theory',
    'Work effectively in teams to accomplish common goals in diverse environments',
    'Analyze complex computing problems and apply computing principles to solutions',
    'Communicate effectively with technical and non-technical audiences',
    'Recognize professional responsibilities and make informed judgments in computing practice',
  ];

  const curriculum = [
    {
      year: 'First Year',
      courses: [
        'Introduction to Computer Science',
        'Programming Fundamentals',
        'Discrete Mathematics',
        'Calculus I & II',
        'Introduction to Web Development',
        'Computer Organization',
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
      ],
    },
    {
      year: 'Third Year',
      courses: [
        'Operating Systems',
        'Software Engineering',
        'Computer Networks',
        'Artificial Intelligence',
        'Theory of Computation',
        'Elective Specialization Courses',
      ],
    },
    {
      year: 'Fourth Year',
      courses: [
        'Cybersecurity',
        'Machine Learning',
        'Capstone Project',
        'Cloud Computing',
        'Advanced Electives',
        'Professional Development',
      ],
    },
  ];

  const careers = [
    { title: 'Software Developer', salary: '$70k - $120k' },
    { title: 'Data Scientist', salary: '$80k - $150k' },
    { title: 'Systems Analyst', salary: '$65k - $110k' },
    { title: 'Cybersecurity Specialist', salary: '$75k - $130k' },
    { title: 'AI/ML Engineer', salary: '$90k - $160k' },
    { title: 'Full-Stack Developer', salary: '$75k - $125k' },
    { title: 'DevOps Engineer', salary: '$80k - $140k' },
    { title: 'Mobile App Developer', salary: '$70k - $115k' },
  ];

  const reasons = [
    {
      title: 'Industry-Aligned Curriculum',
      description: 'Our courses are designed in collaboration with tech industry leaders to ensure you learn the most relevant and in-demand skills.',
    },
    {
      title: 'Hands-On Learning',
      description: 'Work on real-world projects, participate in hackathons, and gain practical experience through internships with top companies.',
    },
    {
      title: 'Research Opportunities',
      description: 'Collaborate with faculty on cutting-edge research in AI, cybersecurity, quantum computing, and more.',
    },
    {
      title: 'State-of-the-Art Facilities',
      description: 'Access modern computer labs, maker spaces, and technology resources that support innovative learning.',
    },
    {
      title: 'Career Support',
      description: 'Dedicated career services team providing resume reviews, interview prep, and direct connections to hiring partners.',
    },
    {
      title: 'Flexible Specializations',
      description: 'Choose from tracks in AI/ML, Cybersecurity, Software Engineering, Data Science, or create your own path.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl mb-6">About the Program</h1>
          <p className="text-xl max-w-3xl">
            Our Bachelor of Science in Computer Science prepares students to become innovative problem solvers and technology leaders in an ever-evolving digital landscape.
          </p>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6 text-gray-900">A Comprehensive Education in Computing</h2>
              <p className="text-lg text-gray-700 mb-4">
                Our program offers a rigorous, well-rounded education that combines theoretical foundations with practical applications. You'll develop expertise in programming, algorithms, software development, and emerging technologies while building critical thinking and problem-solving skills.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                With small class sizes, personalized attention from expert faculty, and numerous opportunities for hands-on learning, you'll be well-prepared for a successful career in technology or further graduate studies.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're interested in artificial intelligence, cybersecurity, software engineering, or data science, our flexible curriculum allows you to tailor your education to your career goals.
              </p>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758685848208-e108b6af94cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwcm9mZXNzb3IlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYzNDcyMzY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students in computer lab"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center text-gray-900">Program Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-sm text-gray-600 mb-2">{info.label}</div>
                <div className="text-xl text-gray-900">{info.value}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl mb-6 text-gray-900">Learning Outcomes</h2>
              <p className="text-lg text-gray-700 mb-8">
                Upon completion of this program, graduates will be able to:
              </p>
              <div className="space-y-4">
                {learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1731816803705-54ab8fbd6a8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzYzMzY1NjA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students collaborating"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">Curriculum by Year</h2>
            <p className="text-xl text-gray-600">
              A carefully designed progression from fundamentals to advanced topics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curriculum.map((year, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
                    {index + 1}
                  </div>
                  <h3 className="text-2xl text-gray-900">{year.year}</h3>
                </div>
                <ul className="space-y-2">
                  {year.courses.map((course, courseIndex) => (
                    <li key={courseIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">{course}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">Career Opportunities</h2>
            <p className="text-xl text-gray-600">
              Our graduates pursue diverse and rewarding careers in technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careers.map((career, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <TrendingUp className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="text-lg mb-2 text-gray-900">{career.title}</h3>
                <p className="text-gray-600">{career.salary}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl mb-2 text-gray-900">95% Employment Rate</h3>
            <p className="text-gray-700">
              Our graduates find employment within 6 months of graduation, with an average starting salary of $75,000
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose This Program */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">Why Choose Our Program?</h2>
            <p className="text-xl text-gray-600">
              Discover what sets our CS program apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl mb-3 text-gray-900">{reason.title}</h3>
                <p className="text-gray-700">{reason.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center text-gray-900">Campus Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758685848208-e108b6af94cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwcm9mZXNzb3IlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYzNDcyMzY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Computer science lab"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1652696290920-ee4c836c711e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBsYXB0b3B8ZW58MXx8fHwxNzYzNDAwNjEyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Programming workspace"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1603958956194-cf9718dba4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWJyYXJ5JTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzNDcyMzc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Study spaces"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
