import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, GraduationCap, Clock, BookOpen } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import heroImage from "@/assets/hero-nursing.jpg";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";

const Home = () => {
  const highlights = [
    {
      icon: Heart,
      title: "Hands-On Clinical Experience",
      description: "Gain practical skills in state-of-the-art simulation labs and partner hospitals.",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from experienced nurses and healthcare professionals dedicated to your success.",
    },
    {
      icon: Award,
      title: "NCLEX Excellence",
      description: "97% first-time NCLEX pass rate with comprehensive exam preparation.",
    },
    {
      icon: GraduationCap,
      title: "Career Ready",
      description: "Graduate prepared for diverse nursing roles in various healthcare settings.",
    },
    {
      icon: Clock,
      title: "Flexible Schedules",
      description: "Full-time and part-time options to fit your lifestyle and commitments.",
    },
    {
      icon: BookOpen,
      title: "Evidence-Based Curriculum",
      description: "Stay current with the latest in nursing research and best practices.",
    },
  ];

  const studentStories = [
    {
      name: "Sarah Johnson",
      year: "Class of 2024",
      image: student1,
      quote: "The BSN program gave me the confidence and skills to excel in my nursing career. The faculty support and clinical experiences were invaluable.",
    },
    {
      name: "Michael Chen",
      year: "Class of 2023",
      image: student2,
      quote: "From day one, I felt prepared for real-world nursing. The simulation labs and hospital rotations provided exceptional hands-on learning.",
    },
    {
      name: "Aisha Williams",
      year: "Class of 2024",
      image: student3,
      quote: "This program challenged me to grow both professionally and personally. I'm proud to be part of such a supportive nursing community.",
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
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Bachelor of Science in Nursing
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Transform your passion for caring into a rewarding healthcare career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" variant="secondary">
              <NavLink to="/admissions">Apply Now</NavLink>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-background/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <NavLink to="/about">Learn More</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Your Path to Nursing Excellence
            </h2>
            <p className="text-lg text-muted-foreground">
              Our Bachelor of Science in Nursing program combines rigorous academic coursework with extensive clinical practice, preparing you to become a compassionate, competent registered nurse ready to make a difference in healthcare.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Stories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Student Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our graduates about their journey through our BSN program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentStories.map((student, index) => (
              <Card key={index} className="border-border overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <h3 className="font-bold text-lg text-foreground">{student.name}</h3>
                    <p className="text-sm text-muted-foreground">{student.year}</p>
                  </div>
                  <blockquote className="text-sm text-muted-foreground italic">
                    "{student.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Nursing Journey?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join our community of dedicated nursing students and take the first step toward a meaningful healthcare career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <NavLink to="/admissions">Apply Now</NavLink>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <NavLink to="/contact">Contact Admissions</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
