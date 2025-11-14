import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { StudentTestimonial } from "@/components/StudentTestimonial";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Code, Users, Briefcase, Award } from "lucide-react";

import heroImage from "@/assets/hero-home.jpg";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          title="Shape the Future with Computer Science"
          subtitle="Join a community of innovators, problem-solvers, and tech leaders. Our Bachelor's program prepares you for a rewarding career in technology."
          backgroundImage={heroImage}
          primaryCTA={{ label: "Apply Now", to: "/admissions" }}
          secondaryCTA={{ label: "Learn More", to: "/about" }}
        />

        {/* Program Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Study Computer Science?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Develop cutting-edge skills, work on real-world projects, and prepare for high-demand careers in technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Cutting-Edge Curriculum</CardTitle>
                  <CardDescription>
                    Learn the latest technologies and programming languages from industry experts.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Expert Faculty</CardTitle>
                  <CardDescription>
                    Learn from accomplished professors with extensive research and industry experience.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Career Ready</CardTitle>
                  <CardDescription>
                    96% employment rate within 6 months of graduation with top tech companies.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Award-Winning</CardTitle>
                  <CardDescription>
                    Nationally recognized program with accreditation from leading organizations.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">120</div>
                <p className="text-muted-foreground">Credit Hours</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">4 Years</div>
                <p className="text-muted-foreground">Program Duration</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">$85k+</div>
                <p className="text-muted-foreground">Average Starting Salary</p>
              </div>
            </div>
          </div>
        </section>

        {/* Student Stories */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Hear from Our Students
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover what makes our Computer Science program exceptional through the eyes of those who experience it daily.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StudentTestimonial
                name="Sarah Chen"
                year="Senior, Class of 2025"
                quote="The hands-on projects and supportive faculty have prepared me incredibly well for my software engineering career. I already have multiple job offers!"
                image={student1}
              />
              <StudentTestimonial
                name="Marcus Rodriguez"
                year="Junior, Class of 2026"
                quote="What I love most is the collaborative environment. We work on real-world problems and learn from each other as much as from our professors."
                image={student2}
              />
              <StudentTestimonial
                name="Alex Patel"
                year="Sophomore, Class of 2027"
                quote="The curriculum perfectly balances theory and practice. I'm already building applications and contributing to open-source projects in my second year!"
                image={student3}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Join our next cohort and become part of a community that's shaping the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/admissions">Apply for Fall 2025</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/contact">Request Information</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
