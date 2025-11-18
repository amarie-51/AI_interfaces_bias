import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { CheckCircle2, Clock, Award, Users, BookOpen, Stethoscope } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Home() {
  const highlights = [
    {
      icon: Clock,
      title: '4-Year Program',
      description: 'Complete your BSN in four years with a comprehensive curriculum',
    },
    {
      icon: Award,
      title: 'CCNE Accredited',
      description: 'Nationally recognized accreditation ensures quality education',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from experienced nursing professionals and educators',
    },
    {
      icon: Stethoscope,
      title: 'Clinical Experience',
      description: 'Gain hands-on experience in top healthcare facilities',
    },
    {
      icon: BookOpen,
      title: 'Evidence-Based',
      description: 'Curriculum grounded in current research and best practices',
    },
    {
      icon: CheckCircle2,
      title: '95% Pass Rate',
      description: 'Outstanding NCLEX-RN first-time pass rate',
    },
  ];

  const studentStories = [
    {
      name: 'Sarah Martinez',
      image: 'https://images.unsplash.com/photo-1698795635777-09ddc4efbecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzQ3OTIzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'The clinical rotations gave me real-world experience that prepared me for my career. The faculty truly care about each student\'s success.',
      year: 'Class of 2024',
    },
    {
      name: 'James Chen',
      image: 'https://images.unsplash.com/photo-1651804810223-6997a7d3fe7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3R1ZGVudCUyMHN0dWR5aW5nfGVufDF8fHx8MTc2MzQ3OTI2OXww&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'This program challenged me to grow both professionally and personally. I feel confident and prepared to make a difference in patients\' lives.',
      year: 'Class of 2023',
    },
    {
      name: 'Emily Johnson',
      image: 'https://images.unsplash.com/photo-1676552055618-22ec8cde399a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG51cnNlJTIwc21pbGluZ3xlbnwxfHx8fDE3NjM0NzgyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'The supportive learning environment and state-of-the-art simulation labs helped me build the skills and confidence needed for nursing.',
      year: 'Class of 2024',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gray-900">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZWR1Y2F0aW9uJTIwaGVyb3xlbnwxfHx8fDE3NjM0NzkyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Nursing students in classroom"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="mb-6 text-white">Shape Your Future in Healthcare</h1>
            <p className="mb-8 text-xl text-gray-200">
              Join our Bachelor of Science in Nursing program and become a compassionate, 
              highly-skilled healthcare professional ready to make a difference.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admissions">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Apply Now
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose Our BSN Program?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our nationally accredited program combines rigorous academic coursework with 
              extensive clinical experience to prepare you for a rewarding career in nursing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="border-2 hover:border-blue-600 transition-colors">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="mb-2">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Student Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Hear From Our Students</h2>
            <p className="text-gray-600">
              Discover what makes our program special through the voices of our graduates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentStories.map((student, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-4 italic">"{student.quote}"</p>
                  <div>
                    <p className="text-gray-900">{student.name}</p>
                    <p className="text-sm text-gray-500">{student.year}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-white">Ready to Start Your Journey?</h2>
          <p className="mb-8 text-xl text-blue-100">
            Take the first step toward a meaningful career in healthcare. 
            Apply today or schedule a campus visit.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/admissions">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Apply Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
