import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Code, Users, Trophy, Briefcase, BookOpen, Rocket } from "lucide-react";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Cutting-Edge Curriculum",
      description: "Learn the latest programming languages, frameworks, and technologies used by industry leaders."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Expert Faculty",
      description: "Learn from experienced professors and industry professionals dedicated to your success."
    },
    {
      icon: <Trophy className="w-8 h-8 text-blue-600" />,
      title: "Award-Winning Program",
      description: "Nationally recognized for excellence in computer science education and research."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "Career Support",
      description: "Strong industry partnerships and dedicated career services for internships and job placement."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "Hands-On Learning",
      description: "Work on real-world projects, participate in hackathons, and build your portfolio."
    },
    {
      icon: <Rocket className="w-8 h-8 text-blue-600" />,
      title: "Innovation Labs",
      description: "Access state-of-the-art facilities including AI labs, robotics centers, and maker spaces."
    }
  ];

  const studentStories = [
    {
      name: "Sarah Chen",
      quote: "The CS program gave me the skills and confidence to land my dream job at a top tech company. The faculty mentorship and hands-on projects were invaluable.",
      role: "Class of 2024, Software Engineer at Google",
      image: "https://images.unsplash.com/photo-1757876506562-0b0087ab3dcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBjb2xsZWdlJTIwc3R1ZGVudHxlbnwxfHx8fDE3NjM0NzU3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Marcus Johnson",
      quote: "I came in knowing nothing about programming. Four years later, I've developed multiple apps and started my own tech startup. This program transforms lives.",
      role: "Class of 2023, Startup Founder",
      image: "https://images.unsplash.com/photo-1594077841990-3909f3a482a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwc3R1ZGVudCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzNDc1NzI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Priya Patel",
      quote: "The collaborative environment and diverse student body enriched my learning experience. I gained technical skills and lifelong friendships.",
      role: "Class of 2024, Data Scientist at Microsoft",
      image: "https://images.unsplash.com/photo-1543689604-6fe8dbcd1f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzM3NzgyNHww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center justify-center">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1632834380561-d1e05839a33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzNDAwNjU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="University Campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/80"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl mb-6">Bachelor of Science in Computer Science</h1>
          <p className="text-xl md:text-2xl mb-8">Transform your passion for technology into a rewarding career</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100"
              onClick={() => onNavigate("admissions")}
            >
              Apply Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
              onClick={() => onNavigate("about")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Program Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-blue-900 mb-4">Why Choose Our Program?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our Bachelor of Science in Computer Science prepares you for a successful career in technology 
            with a comprehensive curriculum, world-class faculty, and unparalleled industry connections.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">{highlight.icon}</div>
              <h3 className="text-xl text-blue-900 mb-2">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl text-blue-600 mb-2">95%</div>
              <div className="text-gray-700">Employment Rate</div>
            </div>
            <div>
              <div className="text-4xl text-blue-600 mb-2">$85K</div>
              <div className="text-gray-700">Average Starting Salary</div>
            </div>
            <div>
              <div className="text-4xl text-blue-600 mb-2">15:1</div>
              <div className="text-gray-700">Student-Faculty Ratio</div>
            </div>
            <div>
              <div className="text-4xl text-blue-600 mb-2">200+</div>
              <div className="text-gray-700">Industry Partners</div>
            </div>
          </div>
        </div>

        {/* Student Stories */}
        <div className="mb-16">
          <h2 className="text-4xl text-blue-900 text-center mb-4">Student Success Stories</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Hear from our graduates about how the Computer Science program shaped their careers
          </p>
          
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
                <div className="p-6">
                  <p className="text-gray-700 mb-4 italic">"{story.quote}"</p>
                  <div>
                    <div className="text-blue-900">{story.name}</div>
                    <div className="text-sm text-gray-600">{story.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of students who are building the future of technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-blue-900 hover:bg-gray-100"
              onClick={() => onNavigate("admissions")}
            >
              Apply Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
              onClick={() => onNavigate("contact")}
            >
              Request Information
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
