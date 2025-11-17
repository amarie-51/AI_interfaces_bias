import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, BookOpen, Code, Briefcase } from "lucide-react";
import classroomImage from "@/assets/program-classroom.jpg";
import collaborationImage from "@/assets/program-collaboration.jpg";

const About = () => {
  const programInfo = [
    { label: "Duration", value: "4 Years (8 Semesters)" },
    { label: "Degree", value: "Bachelor of Science (B.S.)" },
    { label: "Credits", value: "120 Credit Hours" },
    { label: "Study Mode", value: "Full-time / Part-time" },
    { label: "Start Dates", value: "Fall & Spring" },
  ];

  const learningOutcomes = [
    "Design and implement efficient algorithms and data structures",
    "Develop full-stack web and mobile applications",
    "Apply software engineering principles to real-world projects",
    "Understand computer systems architecture and operating systems",
    "Work with databases and data management systems",
    "Implement cybersecurity best practices",
    "Collaborate effectively in team-based development environments",
    "Analyze and solve complex computational problems",
  ];

  const curriculum = [
    {
      year: "Year 1",
      courses: [
        "Introduction to Programming",
        "Discrete Mathematics",
        "Computer Organization",
        "Calculus I & II",
        "General Education Requirements",
      ],
    },
    {
      year: "Year 2",
      courses: [
        "Data Structures",
        "Object-Oriented Programming",
        "Linear Algebra",
        "Digital Logic Design",
        "Ethics in Computing",
      ],
    },
    {
      year: "Year 3",
      courses: [
        "Algorithms",
        "Database Systems",
        "Operating Systems",
        "Software Engineering",
        "Computer Networks",
      ],
    },
    {
      year: "Year 4",
      courses: [
        "Artificial Intelligence",
        "Cybersecurity",
        "Capstone Project",
        "Electives (Web Dev, Mobile Dev, etc.)",
        "Professional Development",
      ],
    },
  ];

  const careers = [
    "Software Developer/Engineer",
    "Full-Stack Web Developer",
    "Mobile App Developer",
    "Data Scientist/Analyst",
    "DevOps Engineer",
    "Cybersecurity Specialist",
    "Machine Learning Engineer",
    "Systems Architect",
  ];

  const reasons = [
    {
      icon: BookOpen,
      title: "Industry-Relevant Curriculum",
      description: "Learn the skills that employers are actively seeking in today's job market.",
    },
    {
      icon: Code,
      title: "Hands-On Learning",
      description: "Work on real projects and build a portfolio that showcases your abilities.",
    },
    {
      icon: Briefcase,
      title: "Career Support",
      description: "Access internship opportunities, career counseling, and job placement assistance.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in">About the Program</h1>
            <p className="text-xl opacity-95 max-w-3xl animate-slide-up">
              Comprehensive education in computer science designed to prepare you for a successful career in technology
            </p>
          </div>
        </section>

        {/* Program Description */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Our Bachelor of Science in Computer Science provides a rigorous and comprehensive education 
                  in both the theoretical foundations and practical applications of computing.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Students gain proficiency in programming, software development, algorithms, and computer 
                  systems while developing critical thinking and problem-solving skills essential for 
                  success in the technology industry.
                </p>
                <p className="text-lg text-muted-foreground">
                  Through hands-on projects, collaborative learning, and industry partnerships, graduates 
                  are well-prepared to innovate and lead in an ever-evolving technological landscape.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img src={classroomImage} alt="Computer Science Classroom" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Key Program Information */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Program Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    <p className="text-xl font-bold">{info.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Learning Outcomes</h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Upon completion of the program, graduates will be able to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {learningOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Curriculum by Year</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {curriculum.map((year, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{year.year}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {year.courses.map((course, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-accent mr-2">•</span>
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
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
                <img src={collaborationImage} alt="Students Collaborating" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6">Career Opportunities</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our graduates pursue diverse and rewarding careers in the technology sector:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {careers.map((career, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{career}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose This Program */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Program?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reasons.map((reason, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-8">
                    <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <reason.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
