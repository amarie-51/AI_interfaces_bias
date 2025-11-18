import { ImageWithFallback } from '../figma/ImageWithFallback';
import { StudentStoryCard } from '../StudentStoryCard';
import { Button } from '../ui/button';
import { GraduationCap, Briefcase, Users, Award, TrendingUp, Globe } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const highlights = [
    {
      icon: GraduationCap,
      title: '4-Year Program',
      description: 'Comprehensive curriculum designed to prepare you for a successful career in technology.',
    },
    {
      icon: Briefcase,
      title: '95% Employment Rate',
      description: 'Our graduates secure positions at leading tech companies within 6 months of graduation.',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from industry professionals and renowned researchers in computer science.',
    },
    {
      icon: Award,
      title: 'ABET Accredited',
      description: 'Our program meets the highest standards of quality and excellence in CS education.',
    },
    {
      icon: TrendingUp,
      title: 'Industry Partnerships',
      description: 'Collaborate with leading tech companies through internships and research projects.',
    },
    {
      icon: Globe,
      title: 'Global Opportunities',
      description: 'Study abroad programs and international research collaborations available.',
    },
  ];

  const studentStories = [
    {
      name: 'Sarah Martinez',
      image: 'https://images.unsplash.com/photo-1633381182794-01b10764b431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzNDEwNDc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'The CS program here has given me the skills and confidence to pursue my dream of becoming a software engineer. The hands-on projects and supportive faculty made all the difference.',
      year: 'Class of 2024',
    },
    {
      name: 'Marcus Chen',
      image: 'https://images.unsplash.com/photo-1729697967428-5b98d11486a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzQwODg2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'What sets this program apart is the emphasis on real-world applications. I landed an internship at a Fortune 500 company thanks to the skills I developed here.',
      year: 'Class of 2025',
    },
    {
      name: 'Emily Thompson',
      image: 'https://images.unsplash.com/photo-1654027879796-b9dee8caabb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMzNzUwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'The collaborative environment and cutting-edge curriculum prepared me for graduate school at MIT. I couldn\'t have asked for a better foundation.',
      year: 'Class of 2023',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1663535067514-66386c117b6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY29tcHV0ZXIlMjBzY2llbmNlJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzNDcyNDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Computer Science Students"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/70" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl mb-6">Shape the Future with Computer Science</h1>
          <p className="text-xl md:text-2xl mb-8">
            Join our innovative Bachelor's program and become a leader in technology and innovation
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate('admissions')} className="bg-white text-blue-900 hover:bg-gray-100">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate('about')} className="bg-transparent border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4">Why Choose Our Program?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Bachelor of Science in Computer Science combines rigorous academics with practical experience,
              preparing you for a successful career in the ever-evolving tech industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <highlight.icon className="text-blue-600 mb-4" size={40} />
                <h3 className="text-xl text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-700">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl mb-2">500+</div>
              <p className="text-blue-200">Current Students</p>
            </div>
            <div>
              <div className="text-5xl mb-2">95%</div>
              <p className="text-blue-200">Job Placement</p>
            </div>
            <div>
              <div className="text-5xl mb-2">$85K</div>
              <p className="text-blue-200">Average Starting Salary</p>
            </div>
            <div>
              <div className="text-5xl mb-2">30+</div>
              <p className="text-blue-200">Industry Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Stories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600">
              Hear from our students about their experiences in the program
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentStories.map((story, index) => (
              <StudentStoryCard key={index} {...story} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-gray-900 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of students who have transformed their careers through our Computer Science program.
            Applications are now open for Fall 2025.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate('admissions')}>
              View Admissions
            </Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate('contact')}>
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
