import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Code, Database, Cpu, Globe, Shield, BookOpen } from "lucide-react";
import aboutImage from "@/assets/about-program.jpg";

const AboutProgram = () => {
  const programInfo = [
    { label: "Duration", value: "4 Years (8 Semesters)" },
    { label: "Degree", value: "Bachelor of Science (B.S.)" },
    { label: "Total Credits", value: "120 Credit Hours" },
    { label: "Study Mode", value: "Full-time / Part-time" },
  ];

  const learningOutcomes = [
    "Design, implement, and evaluate computing solutions using modern software development practices",
    "Apply mathematical foundations and algorithmic principles to solve complex computational problems",
    "Analyze security implications and apply best practices in software systems",
    "Communicate effectively in both technical and non-technical contexts",
    "Work effectively in teams to accomplish common goals",
    "Apply ethical principles and professional responsibility in computing practice",
  ];

  const curriculum = [
    {
      year: "First Year",
      courses: ["Introduction to Programming", "Discrete Mathematics", "Computer Systems", "Data Structures", "Calculus I & II"],
    },
    {
      year: "Second Year",
      courses: ["Object-Oriented Programming", "Algorithms", "Computer Architecture", "Database Systems", "Linear Algebra"],
    },
    {
      year: "Third Year",
      courses: ["Operating Systems", "Software Engineering", "Networks & Security", "Artificial Intelligence", "Web Development"],
    },
    {
      year: "Fourth Year",
      courses: ["Machine Learning", "Cloud Computing", "Capstone Project", "Electives", "Professional Development"],
    },
  ];

  const careers = [
    { icon: Code, title: "Software Developer", description: "Design and build applications for various platforms" },
    { icon: Database, title: "Data Scientist", description: "Analyze complex data sets to drive business decisions" },
    { icon: Cpu, title: "Systems Engineer", description: "Design and maintain computing infrastructure" },
    { icon: Globe, title: "Web Developer", description: "Create responsive and interactive web applications" },
    { icon: Shield, title: "Cybersecurity Analyst", description: "Protect systems and networks from security threats" },
    { icon: BookOpen, title: "Research Scientist", description: "Advance the field through innovative research" },
  ];

  const reasons = [
    "State-of-the-art computing facilities and labs",
    "Distinguished faculty with industry and research experience",
    "Strong industry partnerships for internships and employment",
    "Active student organizations and coding competitions",
    "Flexible curriculum with diverse elective options",
    "98% job placement rate within 6 months of graduation",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-hero-gradient-start to-hero-gradient-end text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">About the Program</h1>
          <p className="text-xl max-w-3xl text-primary-foreground/90">
            Our Bachelor of Science in Computer Science provides comprehensive training in computing fundamentals,
            software development, and emerging technologies to prepare you for a successful career in tech.
          </p>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Transform Your Passion Into Expertise</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our program combines rigorous theoretical foundations with practical, hands-on experience. You'll learn
                from leading faculty members who are actively engaged in cutting-edge research and maintain strong
                connections with the technology industry.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Through a balanced curriculum of core courses, specialized electives, and real-world projects, you'll
                develop the technical skills and problem-solving abilities needed to excel in today's rapidly evolving
                tech landscape.
              </p>

              {/* Key Program Info */}
              <div className="grid grid-cols-2 gap-4">
                {programInfo.map((info, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="pt-6">
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="font-semibold text-foreground">{info.value}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <img
                src={aboutImage}
                alt="Students collaborating on computer science projects"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-section-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Learning Outcomes</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-border">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {learningOutcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground">{outcome}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Curriculum by Year</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculum.map((year, index) => (
              <Card key={index} className="border-border hover-scale">
                <CardHeader>
                  <CardTitle className="text-primary">{year.year}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {year.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {course}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-section-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Career Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careers.map((career, index) => (
              <Card key={index} className="border-border hover-scale">
                <CardContent className="pt-6">
                  <career.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{career.title}</h3>
                  <p className="text-muted-foreground">{career.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Why Choose Our Program?</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-foreground text-lg">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutProgram;
