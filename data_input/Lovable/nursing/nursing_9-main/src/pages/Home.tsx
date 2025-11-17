import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Users, Award, Clock, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-nursing.jpg";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";
import { ApplicationModal } from "@/components/ApplicationModal";

const highlights = [
  {
    icon: GraduationCap,
    title: "Accredited Program",
    description: "Our BSN program is fully accredited by the Commission on Collegiate Nursing Education (CCNE).",
  },
  {
    icon: Heart,
    title: "Clinical Excellence",
    description: "Gain hands-on experience in top-tier healthcare facilities with over 800 clinical hours.",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Learn from experienced nursing professionals with decades of combined clinical experience.",
  },
  {
    icon: Award,
    title: "High NCLEX Pass Rate",
    description: "97% of our graduates pass the NCLEX-RN exam on their first attempt.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Choose from full-time or part-time study options to fit your lifestyle.",
  },
  {
    icon: BookOpen,
    title: "Modern Curriculum",
    description: "Evidence-based curriculum aligned with current healthcare needs and innovations.",
  },
];

const testimonials = [
  {
    name: "Sarah Martinez",
    image: student1,
    year: "Class of 2023",
    quote: "The BSN program gave me the confidence and skills I needed to excel in my nursing career. The hands-on clinical experience was invaluable.",
  },
  {
    name: "Michael Chen",
    image: student2,
    year: "Class of 2024",
    quote: "The faculty's dedication to student success is remarkable. They truly care about preparing us to become compassionate, competent nurses.",
  },
  {
    name: "Emily Rodriguez",
    image: student3,
    year: "Class of 2023",
    quote: "This program transformed my understanding of healthcare. The simulation labs and real-world clinical rotations prepared me for any challenge.",
  },
];

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"apply" | "info">("apply");

  const handleOpenModal = (type: "apply" | "info") => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary-dark/95"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Bachelor of Science in Nursing
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
            Empowering compassionate leaders in healthcare through excellence in nursing education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => handleOpenModal("apply")}>
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-background/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-background/20"
              onClick={() => handleOpenModal("info")}
            >
              Request Information
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our BSN Program?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our Bachelor of Science in Nursing program prepares students to become skilled, compassionate registered nurses ready to meet the healthcare challenges of tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Student Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from our graduates about their transformative experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-primary/20"
                    />
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-4">
                      {testimonial.year}
                    </p>
                    <p className="text-muted-foreground italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Nursing Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join our next cohort of aspiring healthcare professionals and make a difference in people's lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <Link to="/admissions">View Admissions Requirements</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/about">Learn More About the Program</Link>
            </Button>
          </div>
        </div>
      </section>

      <ApplicationModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        type={modalType}
      />
    </>
  );
}
