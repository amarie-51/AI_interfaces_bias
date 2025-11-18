import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { GraduationCap, Users, Award, TrendingUp, Heart, BookOpen, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ApplicationModal } from '../ApplicationModal';

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const highlights = [
    {
      icon: Award,
      title: '98% NCLEX Pass Rate',
      description: 'Our graduates consistently exceed national averages on licensure exams',
    },
    {
      icon: Users,
      title: 'Small Class Sizes',
      description: 'Average 12:1 student-to-faculty ratio ensures personalized attention',
    },
    {
      icon: Stethoscope,
      title: 'Clinical Excellence',
      description: 'Partner with top-rated hospitals and healthcare facilities',
    },
    {
      icon: TrendingUp,
      title: '95% Job Placement',
      description: 'Graduates secure positions within 6 months of graduation',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Martinez',
      image: 'https://images.unsplash.com/photo-1676552055618-22ec8cde399a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBudXJzaW5nJTIwc3R1ZGVudHxlbnwxfHx8fDE3NjM0NzgxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: "The BSN program gave me the clinical skills and confidence I needed to excel as a nurse. The faculty truly care about your success and go above and beyond to support students.",
      year: 'Class of 2024',
    },
    {
      name: 'James Chen',
      image: 'https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwbnVyc2luZyUyMHN0dWRlbnR8ZW58MXx8fHwxNzYzNDc4MTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: "I chose this program because of the hands-on clinical experience and simulation labs. The education I received prepared me to make a real difference in patients' lives from day one.",
      year: 'Class of 2023',
    },
    {
      name: 'Aisha Patel',
      image: 'https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwbnVyc2luZyUyMHN0dWRlbnR8ZW58MXx8fHwxNzYzNDc4MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: "The supportive community and comprehensive curriculum helped me transition from student to professional nurse. I'm now working in my dream specialty thanks to this program.",
      year: 'Class of 2024',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1676046261150-063cf0de59dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwc3R1ZGVudHMlMjBjbGFzc3Jvb218ZW58MXx8fHwxNzYzNDI1NDUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Nursing students in classroom"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="mb-4 bg-white/20 backdrop-blur-sm border-white/30">
            <GraduationCap className="w-4 h-4 mr-1" />
            ACCREDITED BSN PROGRAM
          </Badge>
          <h1 className="mb-6 text-white">
            Transform Your Future in Nursing
          </h1>
          <p className="mb-8 text-xl text-white/90 max-w-2xl mx-auto">
            Join our prestigious Bachelor of Science in Nursing program and become part of the next generation of healthcare leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => setIsModalOpen(true)} className="bg-white text-blue-600 hover:bg-gray-100">
              Apply Now
            </Button>
            <Link to="/about">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Explore Program
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-4">Why Choose Our BSN Program?</h2>
              <p className="mb-6 text-gray-600">
                Our Bachelor of Science in Nursing program is designed to prepare you for a rewarding career in healthcare. With a curriculum that combines rigorous academic study with extensive clinical practice, you'll graduate ready to provide exceptional patient care.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <Heart className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-1">Patient-Centered Care</h3>
                    <p className="text-gray-600">
                      Learn to deliver compassionate, evidence-based care that puts patients first.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-1">Comprehensive Curriculum</h3>
                    <p className="text-gray-600">
                      Master essential nursing theory while gaining practical skills in state-of-the-art simulation labs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-1">Career Success</h3>
                    <p className="text-gray-600">
                      Graduate prepared for immediate employment in diverse healthcare settings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1734002886107-168181bcd6a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwY2xpbmljYWwlMjBwcmFjdGljZXxlbnwxfHx8fDE3NjM0NzgyMDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Clinical nursing practice"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Program Highlights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our program stands out for its commitment to excellence, innovation, and student success.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Student Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our graduates who are making a difference in healthcare every day.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="mb-0">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.year}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-white">Ready to Start Your Nursing Journey?</h2>
          <p className="mb-8 text-blue-100 text-xl">
            Take the first step toward a fulfilling career in healthcare. Our admissions team is here to guide you through the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => setIsModalOpen(true)} className="bg-white text-blue-600 hover:bg-gray-100">
              Apply Now
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ApplicationModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
