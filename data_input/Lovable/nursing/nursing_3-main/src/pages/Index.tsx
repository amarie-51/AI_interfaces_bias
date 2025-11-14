import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StudentTestimonial from "@/components/StudentTestimonial";
import ApplicationModal from "@/components/ApplicationModal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, Users, Award, TrendingUp, Stethoscope, Heart, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-nursing.jpg";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"apply" | "request-info">("apply");

  const openModal = (type: "apply" | "request-info") => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 to-navy/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-navy-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bachelor of Science in Nursing
            </h1>
            <p className="text-xl mb-8 text-navy-foreground/90">
              Transform your passion for caring into a rewarding healthcare career. Join a program that combines
              cutting-edge education with hands-on clinical experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => openModal("apply")}>
                Apply Now
              </Button>
              <Button size="lg" variant="outline" onClick={() => openModal("request-info")} className="bg-background/10 backdrop-blur-sm border-navy-foreground/30 text-navy-foreground hover:bg-background/20">
                Request Information
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Our BSN Program?
            </h2>
            <p className="text-lg text-foreground/70">
              Our accredited program combines academic excellence with real-world experience, preparing you
              to excel in today's dynamic healthcare environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-tealLight flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Accredited Excellence</h3>
              <p className="text-sm text-foreground/70">
                CCNE accredited program recognized for academic quality
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-coralLight flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Clinical Experience</h3>
              <p className="text-sm text-foreground/70">
                800+ hours of hands-on clinical practice in top facilities
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-tealLight flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Expert Faculty</h3>
              <p className="text-sm text-foreground/70">
                Learn from experienced nurses and healthcare professionals
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-coralLight flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">High Success Rate</h3>
              <p className="text-sm text-foreground/70">
                98% NCLEX pass rate and 95% job placement within 6 months
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Program Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">4-Year Comprehensive Program</h3>
                <p className="text-sm text-foreground/70">
                  120 credit hours including general education, nursing theory, and clinical practice
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Heart className="h-5 w-5 text-secondary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Patient-Centered Care Focus</h3>
                <p className="text-sm text-foreground/70">
                  Develop compassionate care skills through simulation labs and diverse clinical rotations
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Career Growth Opportunities</h3>
                <p className="text-sm text-foreground/70">
                  Foundation for advanced practice roles, leadership positions, and specialized certifications
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Hear From Our Students
          </h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Discover what makes our nursing program special through the voices of those who know it best.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StudentTestimonial
              name="Sarah Martinez"
              image={student1}
              quote="This program gave me the confidence and skills to make a real difference in patients' lives. The clinical experiences were invaluable."
              year="Class of 2024"
            />
            <StudentTestimonial
              name="James Chen"
              image={student2}
              quote="The faculty truly care about your success. Their real-world experience and mentorship prepared me for my nursing career."
              year="Class of 2023"
            />
            <StudentTestimonial
              name="Emily Johnson"
              image={student3}
              quote="From day one, I felt supported. The hands-on learning and state-of-the-art simulation labs made all the difference."
              year="Class of 2024"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Nursing Journey?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Take the first step toward a rewarding career in healthcare. Our admissions team is here to guide you through the process.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => openModal("apply")}>
              Apply Today
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/about">Learn More About the Program</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ApplicationModal open={modalOpen} onOpenChange={setModalOpen} type={modalType} />
    </div>
  );
};

export default Index;
