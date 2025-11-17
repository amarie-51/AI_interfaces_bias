import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Clock, BookOpen, Award, TrendingUp, Users } from "lucide-react";
import programVisual from "@/assets/program-visual.jpg";

const About = () => {
  const keyInfo = [
    { icon: Clock, label: "Duration", value: "4 Years" },
    { icon: Award, label: "Degree", value: "Bachelor of Science" },
    { icon: BookOpen, label: "Credits", value: "120 Credits" },
    { icon: Users, label: "Class Size", value: "Average 25 Students" },
  ];

  const learningOutcomes = [
    "Master fundamental and advanced programming concepts",
    "Design and implement complex software systems",
    "Apply algorithms and data structures to solve real-world problems",
    "Understand computer architecture and operating systems",
    "Develop secure and scalable web and mobile applications",
    "Work effectively in teams using industry-standard tools",
  ];

  const careerOpportunities = [
    "Software Engineer",
    "Full-Stack Developer",
    "Data Scientist",
    "Machine Learning Engineer",
    "Cybersecurity Analyst",
    "Systems Architect",
    "Mobile App Developer",
    "DevOps Engineer",
  ];

  const curriculum = {
    year1: [
      "Introduction to Programming",
      "Discrete Mathematics",
      "Computer Systems Fundamentals",
      "Calculus I & II",
      "General Education Requirements",
    ],
    year2: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Systems",
      "Computer Organization",
      "Statistics for CS",
    ],
    year3: [
      "Software Engineering",
      "Operating Systems",
      "Computer Networks",
      "Web Development",
      "Elective Courses",
    ],
    year4: [
      "Artificial Intelligence",
      "Cybersecurity",
      "Capstone Project",
      "Advanced Electives",
      "Professional Development",
    ],
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-hero-start to-hero-end text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About Our Program</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            A comprehensive, industry-aligned curriculum designed to prepare you for success in the 
            rapidly evolving field of computer science.
          </p>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
              <p className="text-muted-foreground mb-4">
                Our Bachelor of Science in Computer Science program provides a solid foundation in 
                computer science theory while emphasizing practical, hands-on experience with the 
                latest technologies and industry practices.
              </p>
              <p className="text-muted-foreground mb-4">
                Through a combination of rigorous coursework, collaborative projects, and internship 
                opportunities, students develop the technical expertise and problem-solving skills 
                needed to excel in today's technology-driven world.
              </p>
              <p className="text-muted-foreground">
                Our program is accredited by ABET and regularly updated to reflect current industry 
                trends and emerging technologies, ensuring our graduates are well-prepared for their careers.
              </p>
            </div>
            <div>
              <img
                src={programVisual}
                alt="Students working on CS projects"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Program Details</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {keyInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <info.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  <p className="text-xl font-bold">{info.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Learning Outcomes</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {learningOutcomes.map((outcome, index) => (
              <div key={index} className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Curriculum by Year</h2>
          <Tabs defaultValue="year1" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="year1">Year 1</TabsTrigger>
              <TabsTrigger value="year2">Year 2</TabsTrigger>
              <TabsTrigger value="year3">Year 3</TabsTrigger>
              <TabsTrigger value="year4">Year 4</TabsTrigger>
            </TabsList>
            {Object.entries(curriculum).map(([year, courses]) => (
              <TabsContent key={year} value={year}>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {year === "year1" && "Foundation Year"}
                      {year === "year2" && "Core Concepts"}
                      {year === "year3" && "Specialization"}
                      {year === "year4" && "Advanced Topics"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {courses.map((course, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <BookOpen className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Career Opportunities</h2>
              <p className="text-muted-foreground">
                Our graduates pursue diverse and rewarding careers in technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {careerOpportunities.map((career, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <p className="font-semibold">{career}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8 p-6 bg-accent-light rounded-lg">
              <p className="text-center">
                <span className="font-bold text-2xl">95%</span> of our graduates secure employment 
                within 6 months of graduation, with an average starting salary of{" "}
                <span className="font-bold">$75,000+</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
