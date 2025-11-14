import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { Code, Users, Briefcase, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";
import programLab from "@/assets/program-lab.jpg";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Bachelor of Science in Computer Science
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Shape the future of technology with cutting-edge education and hands-on experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-accent text-lg px-8">
              <NavLink to="/admissions">Apply Now</NavLink>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <NavLink to="/about">Learn More</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Program?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code,
                title: "Cutting-Edge Curriculum",
                description: "Learn the latest technologies and programming languages used in industry",
              },
              {
                icon: Users,
                title: "Expert Faculty",
                description: "Learn from renowned professors with real-world industry experience",
              },
              {
                icon: Briefcase,
                title: "Career Success",
                description: "95% employment rate within 6 months of graduation",
              },
              {
                icon: Award,
                title: "Accredited Program",
                description: "Nationally recognized and ABET-accredited degree program",
              },
            ].map((item, index) => (
              <Card key={index} className="shadow-card hover:shadow-card-hover transition-all">
                <CardContent className="p-6 text-center">
                  <item.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">World-Class Education</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our Bachelor of Science in Computer Science program provides a comprehensive foundation in computer science theory and practice. Students gain expertise in software development, algorithms, data structures, and emerging technologies.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Through hands-on projects, internships, and research opportunities, our students develop the skills and experience needed to excel in the rapidly evolving tech industry.
              </p>
              <Button asChild className="bg-gradient-accent">
                <NavLink to="/about">Explore Curriculum</NavLink>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-card-hover">
              <img
                src={programLab}
                alt="Students working in modern computer lab"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Student Stories */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Student Success Stories</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Hear from our students about their experiences and achievements in the program
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Senior, Class of 2024",
                image: student1,
                quote: "The CS program's focus on both theory and practical application prepared me perfectly for my internship at a top tech company. The faculty support has been incredible.",
              },
              {
                name: "Marcus Rodriguez",
                role: "Junior, Class of 2025",
                image: student2,
                quote: "I love the collaborative environment and the challenging projects. The program has helped me discover my passion for AI and machine learning.",
              },
              {
                name: "Emily Nguyen",
                role: "Senior, Class of 2024",
                image: student3,
                quote: "The research opportunities and mentorship from faculty have been game-changing. I'm now pursuing graduate studies at a prestigious university.",
              },
            ].map((student, index) => (
              <Card key={index} className="shadow-card hover:shadow-card-hover transition-all">
                <CardContent className="p-6">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <p className="text-muted-foreground italic mb-4">"{student.quote}"</p>
                  <div className="text-center">
                    <p className="font-semibold">{student.name}</p>
                    <p className="text-sm text-muted-foreground">{student.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of innovative thinkers and future tech leaders
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
            <NavLink to="/admissions">Apply Today</NavLink>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;
