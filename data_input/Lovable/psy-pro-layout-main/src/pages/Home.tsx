import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { Brain, Users, BookOpen, TrendingUp, Award, Microscope } from "lucide-react";
import heroImage from "@/assets/hero-psychology.jpg";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";

const Home = () => {
  const highlights = [
    {
      icon: Brain,
      title: "Research-Driven",
      description: "Engage in cutting-edge psychological research with renowned faculty"
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Personalized attention with an average student-to-faculty ratio of 15:1"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Study all major areas of psychology from clinical to cognitive science"
    },
    {
      icon: TrendingUp,
      title: "Career Success",
      description: "95% of graduates employed or in graduate school within 6 months"
    },
    {
      icon: Award,
      title: "Accredited Excellence",
      description: "Fully accredited program recognized nationally for academic quality"
    },
    {
      icon: Microscope,
      title: "Hands-On Learning",
      description: "Access to state-of-the-art psychology labs and clinical facilities"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Martinez",
      image: student1,
      quote: "The psychology program transformed my understanding of human behavior. The faculty's mentorship was invaluable in preparing me for graduate school.",
      program: "Class of 2023"
    },
    {
      name: "James Chen",
      image: student2,
      quote: "I loved the research opportunities and the practical experience I gained. The program gave me the skills I needed to excel in my career as a clinical therapist.",
      program: "Class of 2024"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 z-10" />
        <img
          src={heroImage}
          alt="Psychology students collaborating in study space"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Bachelor of Arts in Psychology
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Unlock the mysteries of the human mind and prepare for a rewarding career in psychology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button size="lg" variant="secondary" asChild>
              <NavLink to="/admissions">Apply Now</NavLink>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <NavLink to="/about">Learn More</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Program?
            </h2>
            <p className="text-lg text-muted-foreground">
              Our Bachelor of Arts in Psychology offers a comprehensive education that combines rigorous academic training 
              with practical experience, preparing you for diverse career paths or advanced study.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-none shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Student Success Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-[var(--shadow-card)]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name} - Psychology student`}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.program}</p>
                    </div>
                  </div>
                  <p className="text-foreground/80 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join our community of passionate learners and experienced educators dedicated to understanding the human mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <NavLink to="/admissions">Apply Today</NavLink>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <NavLink to="/contact">Request Information</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
