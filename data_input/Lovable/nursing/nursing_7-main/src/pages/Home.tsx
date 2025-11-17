import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-nursing.jpg";
import student1 from "@/assets/student1.jpg";
import student2 from "@/assets/student2.jpg";
import student3 from "@/assets/student3.jpg";

const Home = () => {
  const highlights = [
    { icon: Award, title: "Accredited Program", description: "CCNE accredited BSN program" },
    { icon: Users, title: "Expert Faculty", description: "Learn from experienced nursing professionals" },
    { icon: CheckCircle, title: "95% Pass Rate", description: "NCLEX-RN first-time pass rate" },
    { icon: Clock, title: "4-Year Program", description: "Complete your BSN in 4 years" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      image: student1,
      quote: "This program prepared me not just academically, but emotionally for the challenges of nursing. The hands-on clinical experience was invaluable.",
      class: "Class of 2023"
    },
    {
      name: "Michael Chen",
      image: student2,
      quote: "The faculty genuinely care about your success. The simulation labs gave me confidence before entering real clinical settings.",
      class: "Class of 2024"
    },
    {
      name: "Emily Rodriguez",
      image: student3,
      quote: "I appreciate the holistic approach to nursing education. We learned not just skills, but how to provide compassionate, patient-centered care.",
      class: "Class of 2023"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Bachelor of Science in Nursing
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Transform your passion for caring into a rewarding healthcare career
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" variant="secondary">
              <Link to="/admissions">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-background/10 border-primary-foreground text-primary-foreground hover:bg-background/20">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Your Path to Nursing Excellence
            </h2>
            <p className="text-lg text-muted-foreground">
              Our comprehensive BSN program combines rigorous academic coursework with extensive clinical experience to prepare you for a successful nursing career. Join a community of dedicated students and experienced faculty committed to healthcare excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight) => (
              <Card key={highlight.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <highlight.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold text-lg mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Student Success Stories
          </h2>
          
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
                    <p className="text-muted-foreground italic mb-4">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.class}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step toward a rewarding career in nursing. Our admissions team is here to help you every step of the way.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/admissions">Apply Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
