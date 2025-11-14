import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Users, Award, TrendingUp, Globe, Cpu } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-campus.jpg";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";

const Home = () => {
  const highlights = [
    { icon: Code2, title: "Cutting-Edge Curriculum", description: "Learn the latest technologies and programming languages" },
    { icon: Users, title: "Expert Faculty", description: "Learn from industry professionals and PhD holders" },
    { icon: Award, title: "Industry Recognition", description: "Accredited program recognized by top tech companies" },
    { icon: TrendingUp, title: "98% Job Placement", description: "Outstanding career outcomes for our graduates" },
    { icon: Globe, title: "Global Opportunities", description: "International partnerships and exchange programs" },
    { icon: Cpu, title: "State-of-the-Art Labs", description: "Access to modern computing facilities and resources" },
  ];

  const testimonials = [
    {
      image: student1,
      name: "Sarah Chen",
      quote: "The Computer Science program transformed my career. The hands-on projects and supportive faculty gave me the skills to land my dream job at a top tech company.",
      role: "Class of 2023, Software Engineer at TechCorp"
    },
    {
      image: student2,
      name: "Marcus Johnson",
      quote: "What sets this program apart is the perfect balance between theory and practice. I graduated with real-world experience that employers actually value.",
      role: "Class of 2022, Full Stack Developer"
    },
    {
      image: student3,
      name: "Jamie Lee",
      quote: "The collaborative environment and diverse student body enriched my learning experience. I built lasting friendships and a professional network that continues to support my growth.",
      role: "Class of 2023, AI Research Assistant"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Students collaborating in computer lab" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Bachelor's in Computer Science</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Shape the future of technology with a comprehensive education in computing, programming, and innovation</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="bg-accent-gradient hover:opacity-90 text-lg h-12 px-8">
              <Link to="/admissions">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-background/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-background/20 text-lg h-12 px-8">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Program?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our Bachelor's in Computer Science combines rigorous academics with practical experience to prepare you for a successful career in technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-border shadow-card hover:shadow-hover transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Stories */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-xl text-muted-foreground">Hear from our graduates who are making an impact in the tech industry</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border shadow-card hover:shadow-hover transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-primary/20"
                    />
                    <blockquote className="text-muted-foreground mb-4 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our community of innovators and problem-solvers. Applications are now open for the next academic year.
          </p>
          <Button asChild size="lg" className="bg-accent-gradient hover:opacity-90 text-lg h-12 px-8">
            <Link to="/admissions">Apply Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
