import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Code, Users, Award, TrendingUp, BookOpen, Laptop } from "lucide-react";
import heroImage from "@/assets/hero-campus.jpg";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";

const Home = () => {
  const highlights = [
    { icon: Code, title: "Modern Curriculum", description: "Learn cutting-edge programming languages and frameworks" },
    { icon: Users, title: "Expert Faculty", description: "Learn from industry professionals and researchers" },
    { icon: Award, title: "Accredited Program", description: "Nationally recognized computer science degree" },
    { icon: TrendingUp, title: "Career Success", description: "95% job placement rate within 6 months" },
    { icon: BookOpen, title: "Research Opportunities", description: "Participate in groundbreaking CS research" },
    { icon: Laptop, title: "State-of-the-Art Labs", description: "Access to modern computing facilities" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      image: student1,
      quote: "The CS program prepared me for my dream job at a top tech company. The hands-on projects and supportive faculty made all the difference.",
      year: "Class of 2023",
    },
    {
      name: "Michael Chen",
      image: student2,
      quote: "I love the collaborative learning environment and the diverse range of courses offered. The curriculum stays current with industry trends.",
      year: "Class of 2024",
    },
    {
      name: "Emily Rodriguez",
      image: student3,
      quote: "The research opportunities and internship connections opened doors I never imagined. This program truly invests in student success.",
      year: "Class of 2023",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Computer Science Students"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Bachelor of Science in Computer Science
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Shape the Future of Technology with a World-Class Education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions">
              <Button size="lg" className="bg-cta hover:bg-cta/90 text-lg">
                Apply Now
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="text-lg bg-background/10 hover:bg-background/20 border-primary-foreground text-primary-foreground">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Program Overview</h2>
            <p className="text-lg text-muted-foreground">
              Our Bachelor of Science in Computer Science program equips students with the knowledge, skills, and experience needed to excel in the rapidly evolving tech industry. Through a balanced curriculum of theory and practice, students develop expertise in software development, algorithms, data structures, artificial intelligence, cybersecurity, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Program Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <highlight.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Student Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-1 text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-accent mb-4">{testimonial.year}</p>
                    <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our community of innovative thinkers and future technology leaders.
          </p>
          <Link to="/admissions">
            <Button size="lg" className="bg-cta hover:bg-cta/90">
              Apply Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
