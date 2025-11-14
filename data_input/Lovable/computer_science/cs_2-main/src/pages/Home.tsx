import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Award, Code, Database, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ApplicationModal from "@/components/ApplicationModal";
import heroImage from "@/assets/hero-image.jpg";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";

const Home = () => {
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  const highlights = [
    {
      icon: GraduationCap,
      title: "Industry-Ready Curriculum",
      description: "Learn cutting-edge technologies and methodologies used in top tech companies worldwide."
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from professors with extensive industry experience and research backgrounds."
    },
    {
      icon: Award,
      title: "Career Support",
      description: "Access career counseling, internship opportunities, and a strong alumni network."
    },
    {
      icon: Code,
      title: "Hands-On Projects",
      description: "Build real-world applications and collaborate on innovative software solutions."
    },
    {
      icon: Database,
      title: "Modern Labs",
      description: "State-of-the-art computer labs with the latest hardware and software tools."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "International partnerships and opportunities for study abroad programs."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      image: student1,
      quote: "This program transformed my passion for coding into a successful career. The hands-on projects and supportive faculty made all the difference."
    },
    {
      name: "Marcus Rodriguez",
      image: student2,
      quote: "The curriculum is perfectly balanced between theory and practice. I landed my dream job at a tech giant even before graduation!"
    },
    {
      name: "Alex Patel",
      image: student3,
      quote: "The collaborative environment and cutting-edge research opportunities helped me grow both academically and professionally."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center text-primary-foreground overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})` 
            }}
          />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bachelor of Science in Computer Science
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Launch your career in technology with a world-class education that prepares you for the future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => setShowApplicationModal(true)}
              >
                Apply Now
              </Button>
              <Link to="/about">
                <Button variant="secondary" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Choose Our Program?</h2>
              <p className="text-lg text-muted-foreground">
                Our Bachelor's in Computer Science combines rigorous academics with practical experience, 
                preparing you for success in the rapidly evolving tech industry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <highlight.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Student Stories */}
        <section className="py-16 bg-section-bg">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Student Success Stories</h2>
              <p className="text-lg text-muted-foreground">
                Hear from our students about their experiences in the program
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">CS Student</p>
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
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join our community of innovative thinkers and future tech leaders. 
              Applications are now open for the upcoming semester.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => setShowApplicationModal(true)}
            >
              Apply Today
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <ApplicationModal open={showApplicationModal} onOpenChange={setShowApplicationModal} />
    </div>
  );
};

export default Home;
