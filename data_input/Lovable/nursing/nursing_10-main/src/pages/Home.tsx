import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, BookOpen, Stethoscope, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-nursing.jpg";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";

const Home = () => {
  const highlights = [
    {
      icon: Award,
      title: "Accredited Excellence",
      description: "CCNE-accredited program recognized nationally for academic quality",
    },
    {
      icon: Stethoscope,
      title: "Hands-On Experience",
      description: "800+ clinical hours in leading healthcare facilities",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from experienced practitioners and PhD-prepared educators",
    },
    {
      icon: GraduationCap,
      title: "Career Success",
      description: "95% job placement rate within 6 months of graduation",
    },
  ];

  const testimonials = [
    {
      image: student1,
      name: "Sarah Martinez",
      quote: "The simulation labs and clinical rotations gave me real-world experience that made me confident on day one of my nursing career.",
      year: "Class of 2023",
    },
    {
      image: student2,
      name: "James Chen",
      quote: "The supportive faculty and collaborative environment helped me develop not just as a nurse, but as a compassionate healthcare professional.",
      year: "Class of 2024",
    },
    {
      image: student3,
      name: "Maya Patel",
      quote: "This program prepared me to make a real difference in patients' lives. The combination of theory and practice is unmatched.",
      year: "Class of 2023",
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
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transform Lives Through Nursing
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Earn your Bachelor of Science in Nursing and join a rewarding profession that makes a difference every day
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/admissions">
              <Button variant="hero" size="lg">
                Apply Today
              </Button>
            </a>
            <a href="/about">
              <Button variant="outline" size="lg" className="bg-background/10 border-primary-foreground text-primary-foreground hover:bg-background/20">
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our BSN Program?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive nursing program combines rigorous academics, extensive clinical experience, and personalized mentorship to prepare you for a successful career in healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight) => (
              <Card key={highlight.title} className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <highlight.icon size={32} />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-lg opacity-90">NCLEX Pass Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">800+</div>
              <div className="text-lg opacity-90">Clinical Hours</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15:1</div>
              <div className="text-lg opacity-90">Student-Faculty Ratio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Hear From Our Students</h2>
            <p className="text-xl text-muted-foreground">
              Discover what makes our nursing program exceptional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover mb-4"
                    />
                    <Heart className="text-accent mb-4" size={24} />
                    <p className="text-muted-foreground italic mb-4">
                      "{testimonial.quote}"
                    </p>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.year}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Nursing Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of dedicated nursing students and launch your career in healthcare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/admissions">
              <Button variant="hero" size="lg">
                Apply Now
              </Button>
            </a>
            <a href="/contact">
              <Button variant="outline" size="lg">
                Request Information
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
