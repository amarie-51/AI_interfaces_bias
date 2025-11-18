import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { GraduationCap, Users, Award, Heart, Clock, BookOpen } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Home() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Accredited Program",
      description: "Fully accredited by the Commission on Collegiate Nursing Education (CCNE)",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from experienced nurses and healthcare professionals",
    },
    {
      icon: Award,
      title: "High Success Rate",
      description: "95% NCLEX pass rate and 98% job placement within 6 months",
    },
    {
      icon: Heart,
      title: "Clinical Experience",
      description: "Over 1000 hours of hands-on clinical training in top healthcare facilities",
    },
    {
      icon: Clock,
      title: "Flexible Options",
      description: "Full-time and part-time study options available",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Evidence-based curriculum covering all aspects of modern nursing",
    },
  ];

  const studentStories = [
    {
      name: "Sarah Martinez",
      quote: "The hands-on clinical experience and supportive faculty prepared me perfectly for my career. I felt confident and ready on my first day as a nurse.",
      image: "https://images.unsplash.com/photo-1651804810223-6997a7d3fe7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwc3R1ZGVudCUyMHN0dWR5aW5nfGVufDF8fHx8MTc2MzQyODk4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      year: "Class of 2024",
    },
    {
      name: "Michael Chen",
      quote: "Coming from a non-healthcare background, I was nervous. But the program's comprehensive approach helped me build both knowledge and confidence.",
      image: "https://images.unsplash.com/photo-1758206523685-6e69f80a11ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwbnVyc2UlMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc2MzQ3OTIzNHww&ixlib=rb-4.1.0&q=80&w=1080",
      year: "Class of 2023",
    },
    {
      name: "Aisha Johnson",
      quote: "The diversity of clinical placements exposed me to different specialties. I discovered my passion for pediatric nursing through this program.",
      image: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwc3R1ZGVudCUyMGRpdmVyc2V8ZW58MXx8fHwxNzYzNDc5MjM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      year: "Class of 2024",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1753487050317-919a2b26a6ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3R1ZGVudCUyMGNsaW5pY2FsfGVufDF8fHx8MTc2MzQ3OTIzMnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Nursing students in clinical setting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="mb-6">Bachelor of Science in Nursing</h1>
          <p className="text-xl mb-8 text-blue-100">
            Transform your passion for healthcare into a rewarding career. Join our comprehensive BSN program and become a leader in patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Apply Now
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
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
            <h2 className="mb-4">Why Choose Our BSN Program?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our Bachelor of Science in Nursing program combines rigorous academic coursework with extensive clinical experience to prepare you for a successful career in healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-2 hover:border-blue-200 transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <highlight.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="mb-2">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl text-blue-600 mb-2">95%</div>
              <p className="text-gray-600">NCLEX Pass Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-blue-600 mb-2">1000+</div>
              <p className="text-gray-600">Clinical Hours</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-blue-600 mb-2">98%</div>
              <p className="text-gray-600">Job Placement</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-blue-600 mb-2">15:1</div>
              <p className="text-gray-600">Student-Faculty Ratio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Student Success Stories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from our graduates about their experiences and how the BSN program prepared them for their nursing careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentStories.map((story, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 italic mb-4">"{story.quote}"</p>
                  <div>
                    <div className="text-gray-900">{story.name}</div>
                    <div className="text-sm text-gray-500">{story.year}</div>
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
          <h2 className="mb-4">Ready to Start Your Nursing Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join us and become part of a community dedicated to excellence in healthcare education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Apply Today
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
