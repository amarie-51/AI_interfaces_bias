import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Code, Cpu, Globe, Users, Award, Briefcase, ChevronRight } from "lucide-react";
import { useNavigation } from "../../App";

export function Home() {
  const { navigate } = useNavigation();

  const highlights = [
    {
      icon: Code,
      title: "Cutting-Edge Curriculum",
      description:
        "Learn the latest technologies and programming languages used in industry today.",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description:
        "Learn from experienced professors with real-world industry experience.",
    },
    {
      icon: Cpu,
      title: "Hands-On Labs",
      description:
        "State-of-the-art computer labs and equipment for practical learning.",
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description:
        "International internships and exchange programs with partner universities.",
    },
    {
      icon: Award,
      title: "ABET Accredited",
      description:
        "Nationally recognized program meeting the highest standards of quality.",
    },
    {
      icon: Briefcase,
      title: "Career Support",
      description:
        "Dedicated career services and strong connections with top tech companies.",
    },
  ];

  const studentStories = [
    {
      name: "Sarah Chen",
      image:
        "https://images.unsplash.com/photo-1633381182794-01b10764b431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzNDEwNDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote:
        "The CS program gave me both the theoretical foundation and practical skills I needed. I landed my dream job at a leading tech company before graduation!",
      year: "Class of 2024",
    },
    {
      name: "Marcus Johnson",
      image:
        "https://images.unsplash.com/photo-1729697967428-5b98d11486a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzQwODg2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote:
        "What I love most is the supportive community. Professors are always available, and collaboration with peers made learning enjoyable and effective.",
      year: "Junior",
    },
    {
      name: "Priya Patel",
      image:
        "https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudCUyMHNtaWxpbmd8ZW58MXx8fHwxNzYzNDc1ODI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote:
        "The research opportunities are incredible. I've been working on AI projects since sophomore year, which really sets this program apart.",
      year: "Senior",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1681171575028-16aa7a6f063e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjb21wdXRlcnxlbnwxfHx8fDE3NjM0NzU4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Students working together"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center max-w-4xl px-4">
          <h1 className="mb-6">
            Bachelor of Science in Computer Science
          </h1>
          <p className="text-xl mb-8">
            Shape the future of technology with a world-class education that
            combines rigorous academics with hands-on experience.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate("/admissions")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-colors inline-flex items-center gap-2"
            >
              Apply Now
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => navigate("/about")}
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-md transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Why Choose Our Program?</h2>
            <p className="text-gray-600">
              Our Bachelor of Science in Computer Science program provides a
              comprehensive education that prepares you for success in the
              ever-evolving tech industry. With a perfect blend of theory and
              practice, you'll graduate ready to tackle real-world challenges.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
              >
                <highlight.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Student Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our students about their experiences in the program and
              how it's shaping their futures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-gray-700 italic mb-4">"{story.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="text-gray-900">{story.name}</p>
                    <p className="text-gray-500 text-sm">{story.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">
            Join hundreds of students who have launched successful careers in
            technology. Applications are now open for Fall 2025.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate("/admissions")}
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-md transition-colors"
            >
              View Admissions
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-md transition-colors border border-white"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
