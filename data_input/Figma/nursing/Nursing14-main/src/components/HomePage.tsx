import { GraduationCap, Users, Award, BookOpen, Clock, Building2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenModal: (type: 'apply' | 'request-info') => void;
}

export function HomePage({ onNavigate, onOpenModal }: HomePageProps) {
  const highlights = [
    {
      icon: GraduationCap,
      title: '98% Pass Rate',
      description: 'NCLEX-RN first-time pass rate exceeds national average',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from experienced practitioners and researchers',
    },
    {
      icon: Award,
      title: 'Top Ranked',
      description: 'Nationally recognized nursing program',
    },
    {
      icon: BookOpen,
      title: 'Clinical Excellence',
      description: 'Over 700 hours of hands-on clinical experience',
    },
    {
      icon: Clock,
      title: 'Flexible Options',
      description: 'Traditional and accelerated pathways available',
    },
    {
      icon: Building2,
      title: 'Modern Facilities',
      description: 'State-of-the-art simulation labs and learning centers',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      quote: 'The hands-on clinical experience and supportive faculty prepared me exceptionally well for my career. I felt confident on my first day as a registered nurse.',
      image: 'https://images.unsplash.com/photo-1712782390367-6d9a2843d893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzNDc4MjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      year: 'Class of 2024',
    },
    {
      name: 'Michael Chen',
      quote: 'The curriculum is rigorous but incredibly rewarding. The balance of theory and practice is perfect, and the faculty genuinely care about student success.',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwbnVyc2V8ZW58MXx8fHwxNzYzNDc4MjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      year: 'Class of 2023',
    },
    {
      name: 'Emily Rodriguez',
      quote: 'From day one, I knew I made the right choice. The program has exceeded my expectations in every way, from clinical placements to research opportunities.',
      image: 'https://images.unsplash.com/photo-1562673462-877b3612cbea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjMzODgzMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      year: 'Class of 2024',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1676313496173-e3b325353087?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MzQyNjgyOXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Nursing students"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-white mb-6">
            Bachelor of Science in Nursing
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Empower your future in healthcare with a comprehensive nursing education that combines cutting-edge knowledge, hands-on clinical experience, and compassionate care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onOpenModal('apply')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Apply Now
            </button>
            <button
              onClick={() => onOpenModal('request-info')}
              className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Request Information
            </button>
          </div>
        </div>
      </div>

      {/* Program Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-blue-900 mb-6">Why Choose Our BSN Program?</h2>
            <p className="text-gray-700 mb-4">
              Our Bachelor of Science in Nursing program is designed to prepare compassionate, competent, and confident nurses ready to meet the challenges of modern healthcare. With a focus on evidence-based practice, clinical excellence, and patient-centered care, our graduates are highly sought after by top healthcare institutions.
            </p>
            <p className="text-gray-700 mb-4">
              We offer a comprehensive curriculum that integrates theory with extensive clinical practice, providing students with real-world experience in diverse healthcare settings. Our state-of-the-art simulation labs and partnerships with leading hospitals ensure you graduate career-ready.
            </p>
            <button
              onClick={() => onNavigate('about')}
              className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
            >
              Learn More About Our Program
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="relative h-[400px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758101512269-660feabf64fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2MzQ3ODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Nursing education"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-blue-900 mb-12">Program Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-blue-900 mb-2">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Student Stories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-center text-blue-900 mb-4">Student Stories</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Hear from our students about their experiences in the BSN program
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="text-blue-900">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Ready to Start Your Nursing Journey?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our community of passionate healthcare professionals and begin your path to becoming a registered nurse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onOpenModal('apply')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Apply Now
            </button>
            <button
              onClick={() => onNavigate('admissions')}
              className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors"
            >
              View Admissions Requirements
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
