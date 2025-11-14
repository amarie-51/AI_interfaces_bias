import { Button } from "@/components/ui/button";
import { StudentTestimonial } from "@/components/StudentTestimonial";
import { Award, BookOpen, Heart, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-nursing.jpg";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";

const Home = () => {
  const navigate = useNavigate();

  const highlights = [
    {
      icon: Award,
      title: "Accredited Excellence",
      description: "CCNE accredited program with 98% NCLEX pass rate",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Evidence-based coursework with hands-on clinical experience",
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Focus on patient-centered care and ethical practice",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from experienced nurses and healthcare professionals",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Martinez",
      year: "Class of 2024",
      quote: "The BSN program gave me the confidence and skills I needed to excel in my nursing career. The clinical rotations were invaluable.",
      image: student1,
    },
    {
      name: "Michael Chen",
      year: "Class of 2023",
      quote: "I appreciated the supportive faculty and the emphasis on critical thinking. This program prepared me for real-world challenges.",
      image: student2,
    },
    {
      name: "Emma Williams",
      year: "Current Student",
      quote: "The hands-on learning experience and diverse clinical placements have been incredible. I feel ready to make a difference.",
      image: student3,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Nursing students"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Lives Through Nursing
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Earn your Bachelor of Science in Nursing and join a profession dedicated to compassionate, evidence-based care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
              onClick={() => navigate("/admissions")}
            >
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary"
              onClick={() => navigate("/about")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our BSN Program?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our Bachelor of Science in Nursing program prepares you for a rewarding career in healthcare with comprehensive education and real-world experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="text-center p-6 rounded-lg hover:bg-soft-bg transition-colors"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <highlight.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-20 bg-soft-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary mb-2">4 Years</p>
              <p className="text-muted-foreground">Program Duration</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">120</p>
              <p className="text-muted-foreground">Credit Hours</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">98%</p>
              <p className="text-muted-foreground">NCLEX Pass Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary mb-2">750+</p>
              <p className="text-muted-foreground">Clinical Hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from our students about their experiences in the BSN program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <StudentTestimonial key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Nursing Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step toward a fulfilling career in healthcare. Apply today and join our community of dedicated nursing professionals.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-6"
            onClick={() => navigate("/admissions")}
          >
            Apply Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
