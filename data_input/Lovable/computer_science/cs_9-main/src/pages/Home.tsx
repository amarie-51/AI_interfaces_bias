import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Users, Award, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";

const Home = () => {
  const highlights = [
    {
      icon: Code,
      title: "Cutting-Edge Curriculum",
      description: "Learn the latest technologies and programming languages in demand by top tech companies.",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from industry professionals with real-world experience in software development.",
    },
    {
      icon: Award,
      title: "Accredited Program",
      description: "Earn a nationally recognized degree that opens doors to prestigious career opportunities.",
    },
    {
      icon: Briefcase,
      title: "Career Support",
      description: "Access internship opportunities and career guidance to launch your tech career.",
    },
  ];

  const testimonials = [
    {
      image: student1,
      name: "Sarah Chen",
      quote: "The hands-on projects and supportive faculty helped me land my dream job at a top tech company.",
    },
    {
      image: student2,
      name: "Marcus Rodriguez",
      quote: "The curriculum is perfectly balanced between theory and practical skills. I felt prepared from day one.",
    },
    {
      image: student3,
      name: "Alex Kim",
      quote: "Best decision I ever made. The collaborative environment and modern facilities are outstanding.",
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
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Bachelor of Science in Computer Science
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in">
            Transform your passion for technology into a rewarding career with our comprehensive CS program
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/admissions">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-background/10 border-primary-foreground text-primary-foreground hover:bg-background/20">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Program?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide a world-class education that prepares you for success in the rapidly evolving tech industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <highlight.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Students Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from students who have experienced our program firsthand
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-primary/20"
                    />
                    <p className="text-muted-foreground italic mb-4">
                      "{testimonial.quote}"
                    </p>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">CS Student</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of students who are building their future in technology
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/admissions">
              Apply Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
