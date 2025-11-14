import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TestimonialCard from "@/components/TestimonialCard";
import ApplicationModal from "@/components/ApplicationModal";
import { useState } from "react";
import { GraduationCap, Users, Award, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-nursing.jpg";
import student1 from "@/assets/student1.jpg";
import student2 from "@/assets/student2.jpg";
import student3 from "@/assets/student3.jpg";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"apply" | "info">("apply");

  const openModal = (type: "apply" | "info") => {
    setModalType(type);
    setModalOpen(true);
  };

  const highlights = [
    {
      icon: GraduationCap,
      title: "CCNE Accredited",
      description: "Nationally recognized program with excellent pass rates",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from experienced nurses and healthcare professionals",
    },
    {
      icon: Award,
      title: "Clinical Excellence",
      description: "Hands-on training at top healthcare facilities",
    },
    {
      icon: BookOpen,
      title: "Flexible Learning",
      description: "Full-time and part-time options available",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      year: "Class of 2024",
      image: student1,
      quote: "The BSN program prepared me exceptionally well for my career. The hands-on clinical experience and supportive faculty made all the difference.",
    },
    {
      name: "Michael Chen",
      year: "Class of 2023",
      image: student2,
      quote: "I appreciated the balance between theory and practice. The simulation labs gave me confidence before entering real clinical settings.",
    },
    {
      name: "Maria Rodriguez",
      year: "Class of 2024",
      image: student3,
      quote: "The program's focus on patient-centered care and evidence-based practice has shaped me into the nurse I am today. Highly recommend!",
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Bachelor of Science in Nursing
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-95">
            Transform your passion for caring into a rewarding healthcare career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90" onClick={() => openModal("apply")}>
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="bg-background/10 hover:bg-background/20 text-primary-foreground border-primary-foreground" onClick={() => openModal("info")}>
              Request Information
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Path to Nursing Excellence
            </h2>
            <p className="text-lg text-muted-foreground">
              Our Bachelor of Science in Nursing program combines rigorous academic coursework with
              extensive clinical experience to prepare you for a successful career in healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <highlight.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Student Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our graduates about their experiences in the BSN program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Join our community of future healthcare leaders and make a difference in people's lives.
          </p>
          <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90" onClick={() => openModal("apply")}>
            Apply Today
          </Button>
        </div>
      </section>

      <ApplicationModal open={modalOpen} onOpenChange={setModalOpen} type={modalType} />
    </div>
  );
};

export default Home;
