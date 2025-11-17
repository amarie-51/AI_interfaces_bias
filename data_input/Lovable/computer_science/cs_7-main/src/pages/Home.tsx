import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Briefcase, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";
import ApplicationModal from "@/components/ApplicationModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const highlights = [
    {
      icon: Code,
      title: "Cutting-Edge Curriculum",
      description: "Learn modern programming languages, AI, cybersecurity, and software development practices.",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from experienced professors with industry expertise and research backgrounds.",
    },
    {
      icon: Briefcase,
      title: "Career Success",
      description: "95% job placement rate with competitive salaries in top tech companies.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      image: student1,
      quote: "The CS program gave me the skills and confidence to land my dream job at a leading tech company.",
      year: "Class of 2023",
    },
    {
      name: "Marcus Rodriguez",
      image: student2,
      quote: "The hands-on projects and supportive faculty prepared me perfectly for the real-world challenges.",
      year: "Class of 2023",
    },
    {
      name: "Amara Johnson",
      image: student3,
      quote: "I gained not just technical skills, but also critical thinking and problem-solving abilities.",
      year: "Class of 2024",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Computer Science students collaborating"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hero-start/90 to-hero-end/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bachelor of Science in Computer Science
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Build your future in technology. Gain the skills to shape tomorrow's innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => setIsModalOpen(true)} className="bg-accent hover:bg-accent/90">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-background/20 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-background/30">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Program?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive Computer Science program combines rigorous academics with practical experience 
              to prepare you for a successful career in technology.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <highlight.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Hear from our graduates about their experiences
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card">
                <CardContent className="pt-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                  <div className="text-center">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.year}</p>
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
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join our next cohort and launch your career in computer science.
          </p>
          <Button
            size="lg"
            onClick={() => setIsModalOpen(true)}
            className="bg-accent hover:bg-accent/90"
          >
            Apply Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <ApplicationModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
};

export default Home;
