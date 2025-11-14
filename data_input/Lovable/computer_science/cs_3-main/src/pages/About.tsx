import { Card, CardContent } from "@/components/ui/card";
import { Check, BookOpen, Code, Lightbulb, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import programImage from "@/assets/program-overview.jpg";

const About = () => {
  const keyInfo = [
    { label: "Duration", value: "4 Years" },
    { label: "Degree", value: "Bachelor of Science (B.S.)" },
    { label: "Credits", value: "120 Credit Hours" },
    { label: "Study Mode", value: "Full-time / Part-time" },
  ];

  const outcomes = [
    "Design, implement, and evaluate computing solutions",
    "Apply computer science theory and software development fundamentals",
    "Communicate effectively with diverse audiences",
    "Function effectively as a member or leader of a team",
    "Recognize professional responsibilities and make informed judgments",
    "Apply security principles and practices to maintain operations"
  ];

  const curriculum = [
    {
      year: "Year 1",
      courses: ["Introduction to Programming", "Calculus I & II", "Discrete Mathematics", "Computer Systems", "Data Structures", "Physics for Computing"]
    },
    {
      year: "Year 2",
      courses: ["Algorithms", "Computer Architecture", "Database Systems", "Object-Oriented Programming", "Statistics", "Linear Algebra"]
    },
    {
      year: "Year 3",
      courses: ["Operating Systems", "Software Engineering", "Computer Networks", "Artificial Intelligence", "Web Development", "Mobile App Development"]
    },
    {
      year: "Year 4",
      courses: ["Capstone Project", "Cybersecurity", "Machine Learning", "Cloud Computing", "Electives", "Professional Internship"]
    }
  ];

  const careers = [
    "Software Engineer / Developer",
    "Data Scientist / Analyst",
    "Cybersecurity Specialist",
    "Machine Learning Engineer",
    "Full Stack Developer",
    "DevOps Engineer",
    "Database Administrator",
    "Systems Architect",
    "AI Research Scientist",
    "Product Manager"
  ];

  const reasons = [
    { icon: BookOpen, title: "Comprehensive Curriculum", description: "Cover everything from fundamentals to cutting-edge technologies" },
    { icon: Code, title: "Hands-on Experience", description: "Real-world projects and internships throughout your studies" },
    { icon: Lightbulb, title: "Innovation Focus", description: "Emphasis on creative problem-solving and entrepreneurship" },
    { icon: Briefcase, title: "Career Support", description: "Dedicated career services and strong industry connections" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About the Program</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            A comprehensive education in computer science that prepares you for the challenges and opportunities of tomorrow
          </p>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Program Overview</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our Bachelor's in Computer Science is designed to provide students with a strong foundation in computing principles, programming, and problem-solving. The program balances theoretical knowledge with practical skills, ensuring graduates are well-prepared for the rapidly evolving tech industry.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Students engage in collaborative projects, research opportunities, and internships that bridge the gap between classroom learning and real-world application. Our curriculum is regularly updated to reflect industry trends and employer needs.
              </p>
              <p className="text-lg text-muted-foreground">
                With state-of-the-art facilities, expert faculty, and a supportive learning community, we empower students to become innovative thinkers and leaders in technology.
              </p>
            </div>
            <div>
              <img src={programImage} alt="Students collaborating on coding project" className="rounded-lg shadow-hover w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Program Details</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {keyInfo.map((info, index) => (
              <Card key={index} className="text-center border-border shadow-card">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{info.label}</p>
                  <p className="text-xl font-bold text-primary">{info.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Learning Outcomes</h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Curriculum by Year</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculum.map((year, index) => (
              <Card key={index} className="border-border shadow-card hover:shadow-hover transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-4">{year.year}</h3>
                  <ul className="space-y-2">
                    {year.courses.map((course, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary">•</span>
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Career Opportunities</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Our graduates pursue diverse and rewarding careers across the technology industry
          </p>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {careers.map((career, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50">
                <Briefcase className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="font-medium">{career}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Program?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <Card key={index} className="border-border shadow-card hover:shadow-hover transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <reason.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
