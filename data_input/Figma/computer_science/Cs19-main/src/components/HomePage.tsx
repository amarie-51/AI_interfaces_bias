import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Code, Brain, Users, Rocket, Award, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HomePage() {
  const highlights = [
    {
      icon: Code,
      title: 'Hands-On Learning',
      description: 'Work on real-world projects and build a portfolio that showcases your skills to future employers.',
    },
    {
      icon: Brain,
      title: 'Cutting-Edge Curriculum',
      description: 'Learn the latest technologies in AI, machine learning, cloud computing, and software development.',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from industry professionals and researchers who are leaders in their fields.',
    },
    {
      icon: Rocket,
      title: 'Career Support',
      description: '95% job placement rate with dedicated career services and industry partnerships.',
    },
    {
      icon: Award,
      title: 'Accredited Program',
      description: 'Nationally recognized program that meets the highest standards of computer science education.',
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Join a diverse community of students and alumni from around the world.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Class of 2024',
      quote: 'The hands-on projects and mentorship from faculty helped me land my dream job at a top tech company. The program exceeded all my expectations.',
      image: 'https://images.unsplash.com/photo-1753613648137-602c669cbe07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBzdHVkZW50JTIwY29kaW5nfGVufDF8fHx8MTc2MzQ3NzMyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Michael Chen',
      role: 'Class of 2023',
      quote: "The curriculum's focus on both theory and practical application prepared me perfectly for the tech industry. I'm now working as a software engineer at a startup I love.",
      image: 'https://images.unsplash.com/photo-1758270704262-ecc82b23dc37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY29sbGVnZSUyMHN0dWRlbnRzJTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzYzNDc3MzI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Current Student',
      quote: 'The supportive community and access to state-of-the-art facilities have made my learning experience incredible. I feel prepared to tackle any challenge.',
      image: 'https://images.unsplash.com/photo-1762522921456-cdfe882d36c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzQwMTY4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1632834380561-d1e05839a33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNjM0MDA2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="University Campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <h1 className="mb-6">Bachelor of Science in Computer Science</h1>
          <p className="text-xl mb-8 text-gray-100">
            Transform your passion for technology into a rewarding career. Join our world-class program and become the innovator of tomorrow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/admissions">
              <Button size="lg" variant="default">
                Apply Now
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose Our Program?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our Bachelor's in Computer Science offers a comprehensive education that combines theoretical knowledge with practical skills, preparing you for success in the ever-evolving tech industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-2 hover:border-blue-500 transition-colors">
                <CardContent className="pt-6">
                  <highlight.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="mb-2">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Student Success Stories</h2>
            <p className="text-gray-600">
              Hear from our students about their experiences in the program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                  <p className="text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of students who are building their future in technology
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/admissions">
              <Button size="lg" variant="secondary">
                View Admissions
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
