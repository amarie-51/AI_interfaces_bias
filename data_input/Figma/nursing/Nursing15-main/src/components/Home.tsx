import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { GraduationCap, Users, Award, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomeProps {
  onApplyClick: () => void;
}

export function Home({ onApplyClick }: HomeProps) {
  const studentStories = [
    {
      name: "Sarah Martinez",
      quote:
        "The BSN program gave me the clinical skills and confidence to excel in my nursing career. The hands-on experience was invaluable.",
      image: "https://images.unsplash.com/photo-1676552055618-22ec8cde399a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBudXJzaW5nJTIwc3R1ZGVudHxlbnwxfHx8fDE3NjM0NzgxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      year: "Class of 2024",
    },
    {
      name: "Marcus Johnson",
      quote:
        "I chose this program because of its reputation and supportive faculty. It's been transformative for my career in pediatric nursing.",
      image: "https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwbnVyc2luZyUyMHN0dWRlbnR8ZW58MXx8fHwxNzYzNDc4MTk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      year: "Class of 2023",
    },
    {
      name: "Emily Chen",
      quote:
        "The curriculum perfectly blends theory with practice. I felt prepared from day one of my clinical rotations.",
      image: "https://images.unsplash.com/photo-1732303105596-4731637ced57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwbnVyc2luZyUyMHN0dWRlbnRzfGVufDF8fHx8MTc2MzQ3ODE5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      year: "Current Student",
    },
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: "CCNE Accredited",
      description: "Nationally recognized program meeting highest standards",
    },
    {
      icon: Clock,
      title: "4-Year Program",
      description: "Complete your BSN in 4 years with clinical rotations",
    },
    {
      icon: Users,
      title: "12:1 Student Ratio",
      description: "Personalized attention in clinical settings",
    },
    {
      icon: Award,
      title: "98% Pass Rate",
      description: "Exceptional NCLEX-RN first-time pass rate",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/90 z-10"></div>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1587497203441-4fd44b43caf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwc3R1ZGVudHMlMjBob3NwaXRhbHxlbnwxfHx8fDE3NjM0NzgxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Nursing students in hospital"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl mb-6">
            Bachelor of Science in Nursing
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Transform Your Passion for Caring into a Rewarding Healthcare Career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={onApplyClick} className="bg-white text-blue-600 hover:bg-gray-100">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Request Information
            </Button>
          </div>
        </div>
      </div>

      {/* Program Overview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Why Choose Our BSN Program?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Bachelor of Science in Nursing program combines rigorous
              academic coursework with extensive clinical experience to prepare
              you for a successful nursing career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">Your Path to Nursing Excellence</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600">1</span>
                  </div>
                  <div>
                    <h3 className="mb-1">Comprehensive Curriculum</h3>
                    <p className="text-gray-600">
                      120 credits covering everything from anatomy to patient care,
                      with cutting-edge simulation labs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600">2</span>
                  </div>
                  <div>
                    <h3 className="mb-1">Clinical Excellence</h3>
                    <p className="text-gray-600">
                      700+ hours of clinical experience at top healthcare facilities
                      in various specialties.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600">3</span>
                  </div>
                  <div>
                    <h3 className="mb-1">Career Support</h3>
                    <p className="text-gray-600">
                      Dedicated career services, job placement assistance, and
                      networking opportunities.
                    </p>
                  </div>
                </div>
              </div>
              <Button size="lg" onClick={onApplyClick} className="mt-8">
                Start Your Application
              </Button>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1583736902682-f00149bbf526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwc3R1ZGVudCUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjM0NzgxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nursing classroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Student Stories */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Student Stories</h2>
            <p className="text-xl text-gray-600">
              Hear from our graduates and current students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentStories.map((story, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4 italic">"{story.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="text-gray-900">{story.name}</p>
                    <p className="text-sm text-gray-600">{story.year}</p>
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
          <h2 className="text-4xl mb-4">Ready to Begin Your Nursing Journey?</h2>
          <p className="text-xl mb-8">
            Join our community of dedicated nursing students and start making a
            difference in healthcare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={onApplyClick} className="bg-white text-blue-600 hover:bg-gray-100">
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a Campus Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
