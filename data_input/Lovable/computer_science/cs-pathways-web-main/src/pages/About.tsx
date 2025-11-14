import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const courses = [
    "Data Structures & Algorithms",
    "Software Engineering",
    "Database Systems",
    "Computer Architecture",
    "Operating Systems",
    "Artificial Intelligence",
    "Machine Learning",
    "Web Development",
    "Cybersecurity",
    "Computer Networks",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">About Our Program</h1>
          <p className="text-xl max-w-3xl">
            A comprehensive, ABET-accredited curriculum designed to prepare students for successful careers in technology and innovation.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Program Overview</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Our Bachelor of Science in Computer Science is a rigorous four-year program that combines theoretical foundations with practical applications. Students develop proficiency in programming, algorithm design, software development, and emerging technologies.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              The curriculum emphasizes problem-solving, critical thinking, and collaboration—skills essential for success in the modern tech industry. Through a blend of lectures, labs, and hands-on projects, students gain real-world experience that prepares them for immediate impact in their careers.
            </p>
            <p className="text-lg text-muted-foreground">
              With small class sizes and dedicated faculty mentorship, students receive personalized attention and support throughout their academic journey.
            </p>
          </div>
        </div>
      </section>

      {/* Core Curriculum */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Core Curriculum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {courses.map((course, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-4 flex items-center gap-3">
                  <CheckCircle2 className="text-accent flex-shrink-0" size={24} />
                  <span className="font-medium">{course}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Outcomes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Student Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-card hover:shadow-card-hover transition-all">
              <CardContent className="p-6 text-center">
                <div className="text-5xl font-bold text-accent mb-2">95%</div>
                <p className="font-semibold mb-2">Employment Rate</p>
                <p className="text-muted-foreground">Within 6 months of graduation</p>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-card-hover transition-all">
              <CardContent className="p-6 text-center">
                <div className="text-5xl font-bold text-accent mb-2">$85K</div>
                <p className="font-semibold mb-2">Average Starting Salary</p>
                <p className="text-muted-foreground">For recent graduates</p>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-card-hover transition-all">
              <CardContent className="p-6 text-center">
                <div className="text-5xl font-bold text-accent mb-2">100+</div>
                <p className="font-semibold mb-2">Industry Partners</p>
                <p className="text-muted-foreground">For internships and recruitment</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Accreditation & Recognition</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Our Computer Science program is accredited by ABET (Accreditation Board for Engineering and Technology), ensuring that our curriculum meets the highest standards of quality and rigor.
            </p>
            <p className="text-lg text-muted-foreground">
              This accreditation demonstrates our commitment to preparing students for professional practice and provides recognition that is valued by employers worldwide.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
