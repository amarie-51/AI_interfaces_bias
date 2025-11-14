import { Link } from "react-router-dom";
import { ArrowRight, Heart, Award, Users, BookOpen, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/hero-nursing.jpg";
import student1 from "@/assets/student1.jpg";
import student2 from "@/assets/student2.jpg";
import student3 from "@/assets/student3.jpg";

const highlights = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Learn to deliver compassionate, evidence-based care that prioritizes patient well-being and dignity.",
  },
  {
    icon: Award,
    title: "CCNE Accredited",
    description: "Our program meets the highest standards of nursing education excellence and quality.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Learn from experienced nurses and educators who are leaders in their fields.",
  },
  {
    icon: BookOpen,
    title: "Hands-On Learning",
    description: "Gain practical experience through state-of-the-art simulation labs and clinical rotations.",
  },
];

const studentStories = [
  {
    name: "Emily Rodriguez",
    image: student1,
    quote: "The BSN program prepared me not just academically, but gave me the confidence and skills to make a real difference in patients' lives every single day.",
    role: "Class of 2023, Pediatric Nurse",
  },
  {
    name: "Marcus Chen",
    image: student2,
    quote: "The clinical experiences and supportive faculty helped me discover my passion for emergency nursing. I felt ready from day one on the job.",
    role: "Class of 2024, Emergency Department RN",
  },
  {
    name: "Sarah Mitchell",
    image: student3,
    quote: "This program challenged me to grow professionally and personally. The combination of rigorous academics and compassionate mentorship was transformative.",
    role: "Class of 2023, ICU Nurse",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-90 z-10" />
        <img
          src={heroImage}
          alt="Nursing students in clinical setting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl text-white animate-fade-in">
            <h1 className="text-balance mb-6">
              Transform Your Future in Nursing
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/95">
              Become a compassionate, skilled healthcare leader with our comprehensive Bachelor of Science in Nursing program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link to="/admissions">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg bg-white/10 hover:bg-white/20 border-white text-white">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
            <h2 className="mb-4">Why Choose Our BSN Program?</h2>
            <p className="text-lg text-muted-foreground">
              Our accredited Bachelor of Science in Nursing program combines rigorous academics with hands-on clinical experience to prepare you for a rewarding career in healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="card-shadow hover:elevated-shadow transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <highlight.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 md:py-24 section-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">4 Years</div>
              <div className="text-lg text-muted-foreground">Program Duration</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">128</div>
              <div className="text-lg text-muted-foreground">Credit Hours</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "200ms" }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-lg text-muted-foreground">Job Placement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Stories */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="mb-4">Student Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our graduates who are making a difference in healthcare every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {studentStories.map((story, index) => (
              <Card 
                key={index} 
                className="card-shadow hover:elevated-shadow transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <p className="text-muted-foreground italic mb-4">"{story.quote}"</p>
                  <div className="text-center">
                    <p className="font-semibold">{story.name}</p>
                    <p className="text-sm text-muted-foreground">{story.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="mb-4 text-white">Ready to Start Your Nursing Journey?</h2>
          <p className="text-xl mb-8 text-white/95 max-w-2xl mx-auto">
            Join our community of dedicated nursing students and become part of the next generation of healthcare leaders.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link to="/admissions">
              Apply Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
