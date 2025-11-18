import { Code, Users, Briefcase, Award, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const highlights = [
    {
      icon: Code,
      title: "Cutting-Edge Curriculum",
      description: "Learn the latest technologies and programming languages used in industry today.",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from experienced professors with real-world industry experience.",
    },
    {
      icon: Briefcase,
      title: "Career Ready",
      description: "Graduate with the skills and portfolio to land your dream tech job.",
    },
    {
      icon: Award,
      title: "Accredited Program",
      description: "Nationally recognized degree that opens doors to endless opportunities.",
    },
  ];

  const studentStories = [
    {
      name: "Sarah Johnson",
      quote: "The hands-on projects and internship opportunities prepared me perfectly for my career at Google. The faculty truly care about student success.",
      role: "Class of 2024",
      image: "https://images.unsplash.com/photo-1633381182794-01b10764b431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzNDEwNDc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Marcus Chen",
      quote: "I came in knowing nothing about programming. Now I'm developing mobile apps and contributing to open-source projects. This program transformed my life.",
      role: "Class of 2023",
      image: "https://images.unsplash.com/photo-1729697967428-5b98d11486a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzQwODg2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Aisha Patel",
      quote: "The collaborative learning environment and state-of-the-art labs made learning to code exciting and accessible. I graduated with multiple job offers.",
      role: "Class of 2024",
      image: "https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudCUyMHN0dWR5aW5nfGVufDF8fHx8MTc2MzQ3NzM2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1681171575028-16aa7a6f063e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjb21wdXRlciUyMHNjaWVuY2V8ZW58MXx8fHwxNzYzNDc3MzY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Computer Science Students"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl mb-6">
              Shape the Future with Computer Science
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              Earn your Bachelor's degree in Computer Science and join the innovators, creators, and problem-solvers building tomorrow's technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100" onClick={() => onNavigate("admissions")}>
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => onNavigate("about")}>
                Explore Program
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">
                Why Choose Our Program?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our Bachelor's in Computer Science program combines rigorous academic theory with practical, hands-on experience. You'll learn from industry experts, work on real-world projects, and graduate with the skills companies are looking for.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">ABET-accredited program recognized nationwide</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">95% job placement rate within 6 months of graduation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Average starting salary of $85,000</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Partnerships with leading tech companies</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 lg:h-auto">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1605781231474-f60dea478e8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBsYWIlMjBzdHVkZW50c3xlbnwxfHx8fDE3NjM0NzczNjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students in Computer Lab"
                className="rounded-lg shadow-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Program Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes our Computer Science program stand out from the rest.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <highlight.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Stories */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our graduates about their journey and success in the tech industry.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {studentStories.map((story, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-6">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-xl text-gray-900 mb-1">{story.name}</h3>
                    <p className="text-sm text-gray-500">{story.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 italic">
                  "{story.quote}"
                </blockquote>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of students who are already building their future in technology. Applications are now open for Fall 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" onClick={() => onNavigate("admissions")}>
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => onNavigate("contact")}>
              Request Information
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
