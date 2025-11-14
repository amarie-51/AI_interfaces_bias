import { Card } from "@/components/ui/card";
import { BookOpen, Calendar, Globe, Award, Briefcase, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InfoCard from "@/components/InfoCard";
import csLabImage from "@/assets/cs-lab.jpg";

const AboutProgram = () => {
  const programDetails = [
    { label: "Duration", value: "4 Years (8 Semesters)" },
    { label: "Degree", value: "Bachelor of Science (B.S.)" },
    { label: "Credits", value: "120 Credit Hours" },
    { label: "Study Mode", value: "Full-time / Part-time" },
    { label: "Language", value: "English" },
    { label: "Start Date", value: "Fall & Spring Semesters" }
  ];

  const learningOutcomes = [
    "Design and implement efficient algorithms and data structures",
    "Develop full-stack web and mobile applications",
    "Apply machine learning and AI techniques to real-world problems",
    "Ensure software security and system reliability",
    "Work effectively in agile development teams",
    "Communicate technical concepts to diverse audiences"
  ];

  const curriculum = [
    {
      year: "Year 1",
      courses: ["Introduction to Programming", "Discrete Mathematics", "Computer Systems", "Calculus I & II", "Data Structures"]
    },
    {
      year: "Year 2",
      courses: ["Object-Oriented Programming", "Algorithms", "Database Systems", "Computer Architecture", "Linear Algebra"]
    },
    {
      year: "Year 3",
      courses: ["Software Engineering", "Operating Systems", "Computer Networks", "Artificial Intelligence", "Electives"]
    },
    {
      year: "Year 4",
      courses: ["Capstone Project", "Advanced Electives", "Cloud Computing", "Cybersecurity", "Professional Development"]
    }
  ];

  const careerPaths = [
    "Software Engineer / Developer",
    "Data Scientist / Analyst",
    "AI/ML Engineer",
    "Cybersecurity Specialist",
    "Cloud Solutions Architect",
    "Full-Stack Developer",
    "DevOps Engineer",
    "Research Scientist"
  ];

  const reasons = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Accredited Excellence",
      description: "Our program is accredited by ABET, ensuring the highest quality education recognized globally."
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Industry Connections",
      description: "Strong partnerships with tech giants and startups provide internship and job opportunities."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Perspective",
      description: "Study abroad programs and international collaborations broaden your worldview."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Career Growth",
      description: "95% employment rate within 6 months of graduation with competitive starting salaries."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif font-bold text-5xl mb-6">About Our Program</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            A comprehensive computer science education that prepares you for the challenges and opportunities of tomorrow's tech landscape.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif font-bold text-4xl mb-6">Program Overview</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our Bachelor of Science in Computer Science is designed to provide a solid foundation in computing principles while offering flexibility to explore specialized areas of interest. 
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                You'll gain hands-on experience through labs, projects, and internships, learning from faculty who are leaders in their fields. Our curriculum balances theoretical knowledge with practical skills, ensuring you're ready to tackle real-world challenges from day one.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {programDetails.map((detail, index) => (
                  <Card key={index} className="p-4">
                    <p className="text-sm text-muted-foreground mb-1">{detail.label}</p>
                    <p className="font-semibold">{detail.value}</p>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <img 
                src={csLabImage} 
                alt="Computer Science Lab" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="font-serif font-bold text-4xl mb-4">Learning Outcomes</h2>
            <p className="text-xl text-muted-foreground">Skills you'll gain during the program</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {learningOutcomes.map((outcome, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start">
                  <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mr-4">
                    {index + 1}
                  </div>
                  <p className="text-sm">{outcome}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="font-serif font-bold text-4xl mb-4">Curriculum Outline</h2>
            <p className="text-xl text-muted-foreground">Four years of comprehensive computer science education</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculum.map((year, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-serif font-bold text-2xl mb-4 text-primary">{year.year}</h3>
                <ul className="space-y-2">
                  {year.courses.map((course, courseIndex) => (
                    <li key={courseIndex} className="text-sm flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-4xl mb-4">Career Opportunities</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our graduates pursue diverse and rewarding careers in technology
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {careerPaths.map((career, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-[var(--shadow-hover)] transition-shadow">
                <p className="font-medium text-sm">{career}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-4xl mb-4">Why Choose Our Program?</h2>
            <p className="text-xl text-muted-foreground">What makes us stand out</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <InfoCard
                key={index}
                icon={reason.icon}
                title={reason.title}
                description={reason.description}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutProgram;
