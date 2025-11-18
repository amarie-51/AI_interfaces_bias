import { GraduationCap, Code, Users, Award, TrendingUp, Globe } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: '100% Job Placement',
      description: 'Our graduates secure positions at leading tech companies within 6 months of graduation',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Faculty',
      description: 'Learn from industry professionals with decades of combined experience',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'ABET Accredited',
      description: 'Nationally recognized program meeting the highest educational standards',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Research Opportunities',
      description: 'Engage in cutting-edge research projects in AI, cybersecurity, and more',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Network',
      description: 'Join our alumni network of 5,000+ graduates working worldwide',
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Hands-On Learning',
      description: 'Real-world projects, internships, and co-op opportunities',
    },
  ];

  const studentStories = [
    {
      name: 'Sarah Chen',
      photo: 'https://images.unsplash.com/photo-1543061519-faf415012534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBzdHVkZW50JTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzYzNDc1NzY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      quote: 'The CS program gave me the skills and confidence to land my dream job at Google. The faculty support and hands-on projects were invaluable.',
      year: 'Class of 2024',
      position: 'Software Engineer at Google',
    },
    {
      name: 'Michael Rodriguez',
      photo: 'https://images.unsplash.com/photo-1556636530-6b7482d80e3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwc3R1ZGVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjM0NzU3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      quote: 'From day one, I was coding real applications. The curriculum is cutting-edge and prepared me perfectly for the tech industry.',
      year: 'Class of 2023',
      position: 'Full Stack Developer at Microsoft',
    },
    {
      name: 'Emily Johnson',
      photo: 'https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHN0dWRlbnQlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjM0NzU3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      quote: 'The research opportunities and mentorship from professors helped me discover my passion for artificial intelligence and machine learning.',
      year: 'Class of 2024',
      position: 'AI Research Engineer at IBM',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1681171575028-16aa7a6f063e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBzdHVkZW50cyUyMGNhbXB1c3xlbnwxfHx8fDE3NjM0NzI0Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Computer Science Students"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <h1 className="mb-6">Bachelor of Science in Computer Science</h1>
          <p className="mb-8 text-xl">
            Transform your passion for technology into a rewarding career. Join our community of innovators and problem solvers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate('admissions')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Apply Now
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose Our Program?</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Our Bachelor's in Computer Science combines rigorous academics with practical experience, 
              preparing you for success in the rapidly evolving tech industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-blue-600 mb-4">
                  {highlight.icon}
                </div>
                <h3 className="mb-2">{highlight.title}</h3>
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
            <h2 className="mb-4">Student Success Stories</h2>
            <p className="text-gray-600">
              Hear from our graduates who are making their mark in the tech world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentStories.map((story, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="mb-6">
                  <ImageWithFallback
                    src={story.photo}
                    alt={story.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-center mb-1">{story.name}</h3>
                  <p className="text-center text-sm text-gray-600">{story.year}</p>
                </div>
                <p className="text-gray-700 mb-4 italic">"{story.quote}"</p>
                <p className="text-sm text-blue-600">{story.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Ready to Start Your Journey?</h2>
          <p className="mb-8 text-xl">
            Applications are now open for Fall 2026. Take the first step toward an exciting career in technology.
          </p>
          <button 
            onClick={() => onNavigate('admissions')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            View Admissions
          </button>
        </div>
      </section>
    </div>
  );
}
