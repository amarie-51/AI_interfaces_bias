import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Code, Brain, Users, Award, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-cs.jpg";
import student1 from "@/assets/student1.jpg";
import student2 from "@/assets/student2.jpg";
import student3 from "@/assets/student3.jpg";

const Index = () => {
  const highlights = [
    {
      icon: Code,
      title: "Industry-Standard Curriculum",
      description: "Learn cutting-edge technologies and programming languages used by leading tech companies.",
    },
    {
      icon: Brain,
      title: "Research Opportunities",
      description: "Engage in groundbreaking research projects with world-renowned faculty members.",
    },
    {
      icon: Users,
      title: "Career Support",
      description: "Access our extensive network of industry partners and career placement services.",
    },
    {
      icon: Award,
      title: "Accredited Program",
      description: "Nationally recognized degree that meets the highest educational standards.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      image: student1,
      quote: "This program gave me the skills and confidence to land my dream job at a top tech company. The hands-on projects and supportive faculty made all the difference.",
    },
    {
      name: "Marcus Johnson",
      image: student2,
      quote: "The collaborative learning environment and state-of-the-art facilities prepared me exceptionally well for a career in software development. Best decision I ever made!",
    },
    {
      name: "Alex Rivera",
      image: student3,
      quote: "From algorithms to AI, the curriculum is comprehensive and challenging. The research opportunities opened doors I never imagined possible in my undergraduate years.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Computer Science students collaborating" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hero-gradient-start/90 to-hero-gradient-end/70" />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Shape the Future of Technology
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Join our Bachelor of Science in Computer Science program and transform your passion for technology into a rewarding career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg">
                <Link to="/admissions">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Program Overview</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive Bachelor's degree in Computer Science provides a solid foundation in computing principles, software development, and emerging technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover-scale border-border">
                <CardContent className="pt-6">
                  <highlight.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 bg-section-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Student Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Hear from our students about their transformative experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-scale border-border">
                <CardContent className="pt-6 text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary">CS Student</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Applications are now open for the upcoming academic year. Join us and become part of the next generation of tech innovators.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg">
            <Link to="/admissions">
              View Admissions Requirements <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
