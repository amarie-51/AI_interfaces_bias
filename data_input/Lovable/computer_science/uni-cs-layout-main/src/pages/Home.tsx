import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Lightbulb, Users, Trophy } from "lucide-react";
import InfoCard from "@/components/InfoCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bg.jpg";
import studentsImage from "@/assets/students-collaboration.jpg";

const Home = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Cutting-Edge Curriculum",
      description: "Learn the latest technologies including AI, machine learning, cloud computing, and software engineering practices."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Faculty",
      description: "Study under renowned professors who are active researchers and industry professionals with real-world experience."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation Labs",
      description: "Access state-of-the-art facilities including AI labs, robotics workshops, and collaborative project spaces."
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Career Success",
      description: "95% placement rate with graduates working at top tech companies and innovative startups worldwide."
    }
  ];

  const stories = [
    {
      name: "Sarah Chen",
      role: "Senior Student",
      quote: "The CS program has transformed my understanding of technology. The hands-on projects and mentorship prepared me for my dream job at a leading tech company.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
      name: "Michael Rodriguez",
      role: "Recent Graduate",
      quote: "What sets this program apart is the perfect balance of theory and practice. I graduated with not just knowledge, but real-world skills.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="font-serif font-bold text-5xl md:text-6xl mb-6 animate-fade-in">
            Bachelor of Science in<br />Computer Science
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Shape the future of technology. Join a program that combines rigorous academics with hands-on innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/admissions">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-4xl mb-4">Why Choose Our Program?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our Bachelor's in Computer Science offers a comprehensive education designed to prepare you for success in the tech industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <InfoCard
                key={index}
                icon={highlight.icon}
                title={highlight.title}
                description={highlight.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Program Highlights with Image */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif font-bold text-4xl mb-6">Excellence in Education</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-xl mb-2">Comprehensive Curriculum</h3>
                  <p className="text-muted-foreground">
                    4-year program covering algorithms, data structures, software engineering, AI, cybersecurity, and more. Flexible electives let you specialize in your areas of interest.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Industry Partnerships</h3>
                  <p className="text-muted-foreground">
                    Collaborate with leading tech companies through internships, co-op programs, and sponsored projects. Build your professional network before graduation.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Research Opportunities</h3>
                  <p className="text-muted-foreground">
                    Work alongside faculty on cutting-edge research projects. Publish papers, attend conferences, and contribute to advancing the field.
                  </p>
                </div>
              </div>
              <Button asChild className="mt-6" size="lg">
                <Link to="/about">
                  Explore Curriculum <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div>
              <img 
                src={studentsImage} 
                alt="Students collaborating on computer science projects" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Student Stories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-4xl mb-4">Student Success Stories</h2>
            <p className="text-xl text-muted-foreground">Hear from our students about their journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {stories.map((story, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{story.name}</h4>
                    <p className="text-sm text-muted-foreground">{story.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{story.quote}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif font-bold text-4xl mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join our next cohort of innovative students. Applications are now open for Fall 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/admissions">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
              <Link to="/contact">Request Information</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
