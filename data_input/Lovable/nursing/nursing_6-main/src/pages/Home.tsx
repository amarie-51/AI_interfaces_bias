import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, BookOpen, Heart, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-nursing.jpg";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";

const Home = () => {
  const highlights = [
    {
      icon: Award,
      title: "Accredited Excellence",
      description: "CCNE-accredited program with a 95% NCLEX pass rate",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from experienced nurses with advanced degrees",
    },
    {
      icon: BookOpen,
      title: "Hands-On Learning",
      description: "State-of-the-art simulation labs and clinical partnerships",
    },
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Focus on patient-centered, evidence-based practice",
    },
  ];

  const testimonials = [
    {
      image: student1,
      name: "Sarah Martinez",
      quote: "The BSN program prepared me exceptionally well for my career. The hands-on clinical experience and supportive faculty made all the difference.",
      year: "Class of 2023",
    },
    {
      image: student2,
      name: "Michael Chen",
      quote: "I appreciated the diverse clinical placements and the emphasis on critical thinking. This program truly shaped me into a confident nurse.",
      year: "Class of 2023",
    },
    {
      image: student3,
      name: "Priya Patel",
      quote: "The simulation labs are incredible. I felt prepared for real clinical situations from day one. The program exceeded all my expectations.",
      year: "Class of 2024",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Bachelor of Science in Nursing
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Transform your passion for caring into a rewarding healthcare career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions">
              <Button size="lg" variant="secondary" className="group">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our BSN Program?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive program combines rigorous academics with hands-on clinical experience to prepare you for a successful nursing career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border">
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <highlight.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hear From Our Students
            </h2>
            <p className="text-lg text-muted-foreground">
              Real stories from students who have walked this path
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-primary/10"
                    />
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-primary mb-4">{testimonial.year}</p>
                    <p className="text-muted-foreground italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Nursing Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join our community of dedicated healthcare professionals and make a difference in patients' lives.
          </p>
          <Link to="/admissions">
            <Button size="lg" variant="secondary">
              Begin Your Application
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
