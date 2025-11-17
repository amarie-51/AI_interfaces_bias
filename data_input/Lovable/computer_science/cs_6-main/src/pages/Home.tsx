import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Code, Users, Award, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-cs-lab.jpg";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";

const Home = () => {
  const highlights = [
    {
      icon: Code,
      title: "Cutting-Edge Curriculum",
      description: "Learn the latest programming languages, frameworks, and technologies used in industry.",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from experienced professors with real-world industry experience.",
    },
    {
      icon: Award,
      title: "Career Success",
      description: "95% employment rate within 6 months of graduation with top tech companies.",
    },
  ];

  const studentStories = [
    {
      name: "Sarah Chen",
      image: student1,
      quote: "This program transformed my passion for technology into a thriving career. The hands-on projects and supportive faculty made all the difference.",
      role: "Software Engineer at Google",
    },
    {
      name: "Marcus Johnson",
      image: student2,
      quote: "The CS program gave me the skills and confidence to pursue my dreams in tech. I learned not just to code, but to think like a problem solver.",
      role: "Full-Stack Developer",
    },
    {
      name: "Elena Rodriguez",
      image: student3,
      quote: "From day one, I felt welcomed and challenged. The collaborative environment helped me grow both technically and personally.",
      role: "AI Research Assistant",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Bachelor of Science in<br />Computer Science
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-95 animate-slide-up">
              Launch your tech career with a degree designed for the future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to="/admissions">Apply Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
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
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our Bachelor of Science in Computer Science prepares you for success in the rapidly evolving tech industry.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="bg-accent/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                      <highlight.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Student Stories */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Student Success Stories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from our graduates who are making their mark in the tech industry.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {studentStories.map((story, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4 italic">"{story.quote}"</p>
                    <div>
                      <p className="font-bold">{story.name}</p>
                      <p className="text-sm text-muted-foreground">{story.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
              Join hundreds of students who are building their future in computer science.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/admissions">Apply Today <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
