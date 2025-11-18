import { GraduationCap, Users, Briefcase, Award, Code, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Home() {
  const highlights = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: '4-Year Program',
      description: 'Comprehensive curriculum designed for success',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Faculty',
      description: 'Learn from industry professionals and researchers',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Hands-On Learning',
      description: 'Real projects with cutting-edge technologies',
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: '95% Job Placement',
      description: 'Strong career outcomes and industry connections',
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Modern Labs',
      description: 'State-of-the-art facilities and equipment',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Accredited',
      description: 'Nationally recognized degree program',
    },
  ];

  const studentStories = [
    {
      name: 'Sarah Chen',
      image: 'https://images.unsplash.com/photo-1645664747204-31fee58898dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc3R1ZGVudCUyMHNtaWxpbmd8ZW58MXx8fHwxNzYzNDc1MDYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'The CS program gave me the skills and confidence to land my dream job at a top tech company. The professors genuinely care about student success.',
      year: 'Class of 2024',
      role: 'Software Engineer at Google',
    },
    {
      name: 'Marcus Johnson',
      image: 'https://images.unsplash.com/photo-1677594332295-affd04f83115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwY29sbGVnZSUyMHN0dWRlbnR8ZW58MXx8fHwxNzYzNDc3MzM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'The hands-on projects and collaborative environment prepared me for real-world challenges. I felt ready from day one of my internship.',
      year: 'Class of 2023',
      role: 'Full Stack Developer at Microsoft',
    },
    {
      name: 'Priya Patel',
      image: 'https://images.unsplash.com/photo-1758270705641-acf09b68a91f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY29sbGVnZSUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM0NzczMzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'Beyond technical skills, I learned critical thinking and problem-solving. The program emphasizes innovation and creativity in everything we do.',
      year: 'Class of 2024',
      role: 'AI Research Engineer at Meta',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px] bg-gray-900">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1632834380561-d1e05839a33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzNDAwNjU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="University Campus"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-white text-5xl md:text-6xl mb-6">
              Shape the Future with Computer Science
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Join a world-class program that combines cutting-edge technology, 
              innovative research, and practical experience to prepare you for a 
              successful career in tech.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/admissions"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Apply Now
              </Link>
              <Link
                to="/about"
                className="px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Program Overview */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Bachelor of Computer Science</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive 4-year program prepares students for successful careers 
              in software development, data science, artificial intelligence, cybersecurity, 
              and more. With a perfect blend of theory and practice, our graduates are 
              sought after by top companies worldwide.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 mb-4">{highlight.icon}</div>
                <h3 className="text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Student Stories */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600">
              Hear from our alumni who are making an impact in the tech industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-square">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-gray-600 italic mb-4">"{story.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="text-gray-900">{story.name}</p>
                    <p className="text-gray-600">{story.year}</p>
                    <p className="text-blue-600">{story.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their passion for 
            technology into rewarding careers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/admissions"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Apply Today
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
