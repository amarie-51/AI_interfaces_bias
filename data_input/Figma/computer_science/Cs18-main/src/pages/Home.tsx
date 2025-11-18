import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Award, Users, Briefcase, Code, Database, Brain } from 'lucide-react';

export function Home() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      year: 'Class of 2024',
      quote: 'The Computer Science program equipped me with both theoretical knowledge and practical skills. I landed my dream job at a top tech company before graduation.',
      image: 'https://images.unsplash.com/photo-1633381182794-01b10764b431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzNDEwNDc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Marcus Thompson',
      year: 'Class of 2024',
      quote: 'The collaborative environment and dedicated faculty made my learning experience incredible. The hands-on projects prepared me for real-world challenges.',
      image: 'https://images.unsplash.com/photo-1729697967428-5b98d11486a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzQwODg2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Emma Rodriguez',
      year: 'Class of 2025',
      quote: 'From AI research to web development, the program offers diverse opportunities. The internship connections are invaluable for career preparation.',
      image: 'https://images.unsplash.com/photo-1654027879796-b9dee8caabb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMzNzUwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const highlights = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: '98% Placement Rate',
      description: 'Graduates secure positions at leading tech companies',
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Expert Faculty',
      description: 'Learn from industry professionals and research leaders',
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: 'Industry Partnerships',
      description: 'Access to internships at top technology companies',
    },
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: 'Hands-on Learning',
      description: 'Work on real projects from day one',
    },
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: 'Cutting-edge Labs',
      description: 'State-of-the-art computing facilities and resources',
    },
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: 'Research Opportunities',
      description: 'Participate in groundbreaking AI and ML research',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px] bg-gray-900">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1632834380561-d1e05839a33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzNDAwNjU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="University campus"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-white mb-6 max-w-3xl">
              Bachelor of Science in Computer Science
            </h1>
            <p className="text-xl mb-8 max-w-2xl text-gray-200">
              Transform your passion for technology into a rewarding career. Join a community of innovators shaping the future of computing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/admissions"
                className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Apply Now
              </Link>
              <Link
                to="/about"
                className="bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Why Choose Our Program?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Bachelor of Science in Computer Science prepares you for success in the rapidly evolving tech industry with comprehensive curriculum and real-world experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{highlight.icon}</div>
                <h3 className="text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Student Stories</h2>
            <p className="text-xl text-gray-600">
              Hear from our students about their experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="aspect-square">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our next cohort of computer science students and begin building your future in technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/admissions"
              className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              View Admissions
            </Link>
            <Link
              to="/contact"
              className="bg-blue-700 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors border border-blue-500"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
