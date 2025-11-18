import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Users, Globe, BookOpen, Heart, TrendingUp } from 'lucide-react';

export function Home() {
  const highlights = [
    {
      icon: Award,
      title: 'CCNE Accredited',
      description: 'Nationally recognized program ensuring the highest quality education',
    },
    {
      icon: Users,
      title: '98% Employment Rate',
      description: 'Graduates find rewarding careers within 6 months of graduation',
    },
    {
      icon: Globe,
      title: 'Clinical Partnerships',
      description: 'Access to 50+ premier healthcare facilities for hands-on training',
    },
    {
      icon: BookOpen,
      title: 'Expert Faculty',
      description: 'Learn from experienced nurses and healthcare professionals',
    },
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'Focus on compassionate, evidence-based nursing practice',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Strong foundation for advanced practice and leadership roles',
    },
  ];

  const studentStories = [
    {
      name: 'Sarah Mitchell',
      photo: 'https://images.unsplash.com/photo-1676552055618-22ec8cde399a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG51cnNlJTIwc21pbGluZ3xlbnwxfHx8fDE3NjM0NzgyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      year: 'Class of 2024',
      quote: 'The BSN program not only taught me clinical skills but also shaped me into a compassionate healthcare professional. The hands-on experience in top hospitals was invaluable.',
    },
    {
      name: 'Michael Chen',
      photo: 'https://images.unsplash.com/photo-1632054224659-280be3239aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwbWFsZXxlbnwxfHx8fDE3NjM0NzgyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      year: 'Class of 2023',
      quote: 'The faculty truly care about your success. From simulation labs to real-world clinical rotations, every experience prepared me for my career as a pediatric nurse.',
    },
    {
      name: 'Emily Rodriguez',
      photo: 'https://images.unsplash.com/photo-1698795635777-09ddc4efbecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3R1ZGVudCUyMHdvbWFufGVufDF8fHx8MTc2MzQ3ODIxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      year: 'Class of 2025',
      quote: 'Choosing this BSN program was the best decision I made. The curriculum is challenging yet supportive, and I feel confident entering the healthcare field.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1658227658336-f7354bc5a568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwc3R1ZGVudCUyMGhvc3BpdGFsfGVufDF8fHx8MTc2MzQ3ODIxMnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Nursing students in hospital setting"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl mb-6">
            Begin Your Nursing Journey
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Transform lives through compassionate care and clinical excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                Apply Now
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white/20">
                Explore Program
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-6">Bachelor of Science in Nursing</h2>
            <p className="text-lg text-gray-700">
              Our comprehensive BSN program combines rigorous academic coursework with extensive clinical experience 
              to prepare you for a rewarding career in nursing. Through evidence-based practice, cutting-edge simulation 
              technology, and partnerships with premier healthcare facilities, you'll develop the skills, knowledge, and 
              compassion needed to excel in today's dynamic healthcare environment.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
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

      {/* Student Stories */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Student Success Stories</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Hear from our students and alumni about their experiences in the BSN program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentStories.map((story, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                      <ImageWithFallback
                        src={story.photo}
                        alt={story.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="mb-1">{story.name}</h3>
                    <p className="text-sm text-blue-600 mb-4">{story.year}</p>
                    <p className="text-gray-700 italic">"{story.quote}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Ready to Start Your Nursing Career?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join our community of dedicated nursing students and begin your journey to making a difference in healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Apply for Admission
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                Request Information
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
