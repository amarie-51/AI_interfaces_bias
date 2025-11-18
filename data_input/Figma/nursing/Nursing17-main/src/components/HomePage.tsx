import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle, Users, Award, Heart, Stethoscope, BookOpen } from 'lucide-react';
import { ApplicationModal } from './ApplicationModal';

export function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const highlights = [
    {
      icon: Award,
      title: 'Accredited Program',
      description: 'CCNE-accredited curriculum ensuring the highest quality nursing education',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from experienced nurses and healthcare professionals',
    },
    {
      icon: Stethoscope,
      title: 'Clinical Excellence',
      description: 'Hands-on experience in top-tier healthcare facilities',
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: '120 credits covering all aspects of modern nursing practice',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Martinez',
      image: 'https://images.unsplash.com/photo-1698795635777-09ddc4efbecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzQ3OTI1MHww&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'The BSN program gave me the knowledge and confidence to provide exceptional patient care. The faculty support and clinical opportunities were invaluable.',
      year: 'Class of 2024',
    },
    {
      name: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzMzg4NzcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'As a second-career student, I appreciated the program\'s flexibility and rigor. I felt prepared from day one in my nursing career.',
      year: 'Class of 2023',
    },
    {
      name: 'Emily Thompson',
      image: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBudXJzZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjM0NzgyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'The simulation labs and real-world clinical rotations prepared me for the challenges of modern healthcare. I couldn\'t have asked for better preparation.',
      year: 'Class of 2024',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1650225554926-b70324a698ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwc3R1ZGVudHMlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYzNDc5MjUwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Nursing students in clinical setting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/60"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="mb-6">Bachelor of Science in Nursing</h1>
          <p className="text-xl mb-8 text-blue-50">
            Transform lives through compassionate care. Join our nationally recognized BSN program
            and become the nurse leader of tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50"
              onClick={() => setIsModalOpen(true)}
            >
              Apply Now
            </Button>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Why Choose Our BSN Program?</h2>
            <p className="text-gray-600">
              Our Bachelor of Science in Nursing program prepares you for a rewarding career in
              healthcare through a combination of rigorous academic coursework, state-of-the-art
              simulation training, and extensive clinical experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-2 hover:border-blue-600 transition-all">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <highlight.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="mb-2">{highlight.title}</h3>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl text-blue-600 mb-2">98%</div>
              <p className="text-gray-700">NCLEX Pass Rate</p>
            </div>
            <div>
              <div className="text-4xl text-blue-600 mb-2">95%</div>
              <p className="text-gray-700">Job Placement</p>
            </div>
            <div>
              <div className="text-4xl text-blue-600 mb-2">120</div>
              <p className="text-gray-700">Credit Hours</p>
            </div>
            <div>
              <div className="text-4xl text-blue-600 mb-2">4</div>
              <p className="text-gray-700">Years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Stories */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Student Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our graduates about their transformative experience in our BSN program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover mb-4"
                    />
                    <h3 className="mb-1">{testimonial.name}</h3>
                    <p className="text-sm text-blue-600">{testimonial.year}</p>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 text-blue-300" />
          <h2 className="mb-4 text-white">Ready to Start Your Nursing Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join a community of passionate healthcare professionals dedicated to making a difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50"
              onClick={() => setIsModalOpen(true)}
            >
              Apply Today
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} type="apply" />
    </div>
  );
}
