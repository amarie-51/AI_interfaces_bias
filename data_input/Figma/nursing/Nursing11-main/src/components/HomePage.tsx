import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { ApplicationModal } from './ApplicationModal';
import { Award, Users, Stethoscope, ArrowRight, CheckCircle } from 'lucide-react';

export function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const highlights = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Accredited Program',
      description: 'CCNE accredited with a 98% first-time NCLEX pass rate',
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: 'Clinical Excellence',
      description: '800+ hours of hands-on clinical experience in top healthcare facilities',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Faculty',
      description: 'Learn from experienced nurses and healthcare professionals',
    },
  ];

  const studentStories = [
    {
      name: 'Sarah Mitchell',
      quote: 'The BSN program prepared me with real-world clinical experience and compassionate care skills. I felt confident starting my nursing career.',
      image: 'https://images.unsplash.com/photo-1676552055618-22ec8cde399a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBudXJzaW5nJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzQ3ODIwOHww&ixlib=rb-4.1.0&q=80&w=1080',
      class: 'Class of 2023',
    },
    {
      name: 'Marcus Johnson',
      quote: 'The faculty were incredibly supportive and the curriculum was challenging but rewarding. I highly recommend this program to anyone passionate about nursing.',
      image: 'https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwbnVyc2luZyUyMHN0dWRlbnR8ZW58MXx8fHwxNzYzNDc4MTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      class: 'Class of 2024',
    },
    {
      name: 'Priya Patel',
      quote: 'From day one, I knew I made the right choice. The diverse clinical rotations exposed me to various specialties and helped me find my passion in pediatrics.',
      image: 'https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwbnVyc2luZyUyMHN0dWRlbnR8ZW58MXx8fHwxNzYzNDc4MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      class: 'Class of 2023',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1620063487586-c3f97749bb84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NjM0NzgyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Nursing Students"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-white mb-6">Bachelor of Science in Nursing</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Transform your passion for healthcare into a rewarding career. Join our nationally recognized BSN program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-blue-900 hover:bg-gray-100"
            >
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white/10"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose Our BSN Program?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive 4-year program combines rigorous academic coursework with extensive clinical experience 
              to prepare you for a successful nursing career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">{highlight.icon}</div>
                <h3 className="mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Program at a Glance</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-900">4-year comprehensive program with 128 credit hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-900">State-of-the-art simulation labs and clinical facilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-900">Small class sizes with personalized attention</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-900">95% job placement rate within 6 months of graduation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-900">Partnerships with leading hospitals and healthcare systems</p>
                  </div>
                </div>
              </div>
              <Button asChild className="mt-8">
                <Link to="/about">
                  Explore Full Program Details
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1734002886107-168181bcd6a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwY2xpbmljYWwlMjBwcmFjdGljZXxlbnwxfHx8fDE3NjM0NzgyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Clinical Practice"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Student Stories */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Student Success Stories</h2>
            <p className="text-lg text-gray-600">
              Hear from our graduates about their experiences in the BSN program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64 overflow-hidden">
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
                    <p className="text-sm text-gray-600">{story.class}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Ready to Start Your Nursing Journey?</h2>
          <p className="text-xl mb-8">
            Join our community of dedicated healthcare professionals and make a difference in people's lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-blue-900 hover:bg-gray-100"
            >
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white/10"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
