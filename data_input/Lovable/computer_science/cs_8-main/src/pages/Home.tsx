import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Briefcase, ArrowRight, Award, BookOpen, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-cs.jpg";
import student1 from "@/assets/student1.jpg";
import student2 from "@/assets/student2.jpg";
import student3 from "@/assets/student3.jpg";

const Home = () => {
  const highlights = [
    {
      icon: Code,
      title: "Cutting-Edge Curriculum",
      description: "Learn latest programming languages, frameworks, and technologies used in industry.",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from experienced professors with both academic and industry backgrounds.",
    },
    {
      icon: Briefcase,
      title: "Career Support",
      description: "Access internship opportunities and career services for job placement.",
    },
    {
      icon: Award,
      title: "Accredited Program",
      description: "Nationally recognized degree from an accredited institution.",
    },
    {
      icon: BookOpen,
      title: "Hands-On Learning",
      description: "Work on real-world projects and build a professional portfolio.",
    },
    {
      icon: TrendingUp,
      title: "High Employability",
      description: "95% of graduates secure jobs within 6 months of graduation.",
    },
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "Class of 2023",
      image: student1,
      quote: "This program gave me the skills and confidence to land my dream job at a top tech company. The hands-on projects were invaluable.",
    },
    {
      name: "Sarah Martinez",
      role: "Class of 2022",
      image: student2,
      quote: "The supportive faculty and collaborative environment helped me grow both technically and professionally. I couldn't have asked for a better experience.",
    },
    {
      name: "James Wilson",
      role: "Class of 2024",
      image: student3,
      quote: "From day one, I felt prepared for the industry. The curriculum is modern, relevant, and taught by professors who truly care about student success.",
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
          <div className="absolute inset-0 bg-hero-gradient opacity-80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Shape the Future with Computer Science
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            Join our innovative Bachelor's program and become a leader in technology, innovation, and digital transformation.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/admissions">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-background/10 hover:bg-background/20 text-primary-foreground border-primary-foreground" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose Our Program?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive education that combines theoretical knowledge with practical skills to prepare you for a successful career in technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <highlight.icon className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Student Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our graduates about their experiences and achievements in our program.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                  <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-hero-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Take the first step towards an exciting career in computer science. Applications are now open for the upcoming semester.
          </p>
          <Button size="lg" variant="secondary" asChild>
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
