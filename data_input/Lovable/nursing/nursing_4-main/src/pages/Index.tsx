import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ApplicationModal } from "@/components/ApplicationModal";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Award, BookOpen, Users, Heart, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-nursing.jpg";
import student1 from "@/assets/student1.jpg";
import student2 from "@/assets/student2.jpg";
import student3 from "@/assets/student3.jpg";

const Index = () => {
  const [applicationOpen, setApplicationOpen] = useState(false);

  const highlights = [
    {
      icon: Award,
      title: "CCNE Accredited",
      description: "Our program meets the highest standards of nursing education quality.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "120 credits combining theory, clinical practice, and hands-on learning.",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from experienced nurses with decades of clinical expertise.",
    },
    {
      icon: Heart,
      title: "95% Job Placement",
      description: "Our graduates secure positions in top healthcare facilities nationwide.",
    },
  ];

  const testimonials = [
    {
      image: student1,
      name: "Sarah Chen",
      quote: "The BSN program prepared me not just academically, but emotionally for the challenges of nursing. The clinical rotations were invaluable in building my confidence.",
    },
    {
      image: student2,
      name: "Marcus Johnson",
      quote: "I chose this program for its strong focus on evidence-based practice. The faculty's mentorship helped me discover my passion for pediatric nursing.",
    },
    {
      image: student3,
      name: "Priya Patel",
      quote: "The simulation labs provided realistic scenarios that made my transition to actual patient care seamless. I felt truly prepared for my first day as an RN.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Bachelor of Science in Nursing
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Transform your passion for caring into a rewarding healthcare career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setApplicationOpen(true)}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/about">
              <Button
                size="lg"
                variant="outline"
                className="bg-background/20 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-background/30 text-lg px-8"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Choose Our BSN Program?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our comprehensive nursing education combines cutting-edge theory with extensive clinical experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="shadow-medium hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-primary/10 rounded-full mb-4">
                      <highlight.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{highlight.title}</h3>
                    <p className="text-muted-foreground text-sm">{highlight.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4 Years</div>
              <div className="text-muted-foreground">Program Duration</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">120</div>
              <div className="text-muted-foreground">Credit Hours</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">750+</div>
              <div className="text-muted-foreground">Clinical Hours</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">12:1</div>
              <div className="text-muted-foreground">Student-Faculty Ratio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Hear From Our Students
            </h2>
            <p className="text-muted-foreground text-lg">
              Real experiences from current students and recent graduates
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-medium">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover mb-4 shadow-soft"
                    />
                    <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">BSN Student</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join hundreds of students who have launched successful nursing careers through our program
          </p>
          <Button
            size="lg"
            onClick={() => setApplicationOpen(true)}
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
          >
            Apply Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
      <ApplicationModal open={applicationOpen} onOpenChange={setApplicationOpen} />
    </div>
  );
};

export default Index;
