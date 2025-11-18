import { ArrowRight, Award, Users, BookOpen, Heart, Stethoscope, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenModal: (type: "general" | "visit" | "info") => void;
}

export function HomePage({ onNavigate, onOpenModal }: HomePageProps) {
  const highlights = [
    {
      icon: Award,
      title: "CCNE Accredited",
      description: "Our program is fully accredited by the Commission on Collegiate Nursing Education",
    },
    {
      icon: Users,
      title: "98% Job Placement",
      description: "Graduates secure positions within 6 months of completing the program",
    },
    {
      icon: BookOpen,
      title: "Expert Faculty",
      description: "Learn from experienced nurses and healthcare professionals",
    },
    {
      icon: Heart,
      title: "Clinical Excellence",
      description: "Over 800 hours of hands-on clinical experience in top healthcare facilities",
    },
  ];

  const studentStories = [
    {
      name: "Sarah Mitchell",
      image: "https://images.unsplash.com/photo-1654027879796-b9dee8caabb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMzNzUwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "The BSN program gave me the perfect balance of theoretical knowledge and practical skills. The clinical rotations prepared me exceptionally well for my career as a pediatric nurse.",
      year: "Class of 2024",
    },
    {
      name: "Marcus Johnson",
      image: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3R1ZGVudCUyMGRpdmVyc2V8ZW58MXx8fHwxNzYzNDc5Mjg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "What sets this program apart is the faculty's dedication to student success. They mentored me through every challenge and helped me discover my passion for emergency nursing.",
      year: "Class of 2023",
    },
    {
      name: "Emily Chen",
      image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MXx8fHwxNzYzNDY5NDU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      quote: "The small class sizes and personalized attention made all the difference. I felt supported throughout my journey and graduated confident in my abilities as a nurse.",
      year: "Class of 2024",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1620063487586-c3f97749bb84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NjM0NzgyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Nursing students studying"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="mb-6">Bachelor of Science in Nursing</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Transform your passion for caring into a rewarding healthcare career. Join our comprehensive BSN program and become the nurse leader of tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => onOpenModal("general")}
              className="bg-white text-blue-900 hover:bg-gray-100"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onOpenModal("visit")}
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Your Journey to Nursing Excellence</h2>
            <p className="text-gray-600">
              Our Bachelor of Science in Nursing program combines rigorous academic coursework with extensive clinical experience to prepare you for a successful career in healthcare. With state-of-the-art facilities, experienced faculty, and partnerships with leading medical centers, we provide an education that goes beyond the classroom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="mb-2">
                <Stethoscope className="h-12 w-12 mx-auto mb-2" />
              </div>
              <div className="mb-1">800+ Hours</div>
              <p className="text-blue-100">Clinical Experience</p>
            </div>
            <div>
              <div className="mb-2">
                <Users className="h-12 w-12 mx-auto mb-2" />
              </div>
              <div className="mb-1">15:1 Ratio</div>
              <p className="text-blue-100">Student-to-Faculty</p>
            </div>
            <div>
              <div className="mb-2">
                <GraduationCap className="h-12 w-12 mx-auto mb-2" />
              </div>
              <div className="mb-1">95% Pass Rate</div>
              <p className="text-blue-100">NCLEX First-Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Hear From Our Students</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how our BSN program has transformed the lives and careers of our graduates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentStories.map((student, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <ImageWithFallback
                    src={student.image}
                    alt={student.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="text-gray-900">{student.name}</div>
                    <p className="text-gray-600">{student.year}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{student.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Ready to Start Your Nursing Journey?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the first step toward a fulfilling career in healthcare. Our admissions team is here to guide you through the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate("admissions")}>
              View Admissions Requirements
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onOpenModal("info")}
            >
              Request Information
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
