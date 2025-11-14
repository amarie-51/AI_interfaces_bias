import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, FileText, GraduationCap, Laptop, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import studentsStudying from "@/assets/students-studying.jpg";
import campusBuilding from "@/assets/campus-building.jpg";

const About = () => {
  const keyInfo = [
    { icon: Clock, label: "Duration", value: "4 Years Full-Time" },
    { icon: GraduationCap, label: "Degree", value: "Bachelor of Science" },
    { icon: FileText, label: "Credits", value: "120 Credit Hours" },
    { icon: Laptop, label: "Study Mode", value: "On-Campus" },
  ];

  const learningOutcomes = [
    "Design, implement, and evaluate computer-based solutions to complex problems",
    "Apply computer science theory and software development fundamentals",
    "Function effectively as a member or leader of development teams",
    "Analyze the impact of computing on individuals, organizations, and society",
    "Apply ethical principles and professional responsibilities in computing practice",
    "Communicate effectively with diverse audiences about technical information",
  ];

  const curriculum = [
    {
      year: "First Year",
      courses: [
        "Introduction to Programming",
        "Computer Organization",
        "Discrete Mathematics",
        "Calculus I & II",
        "General Education Requirements"
      ]
    },
    {
      year: "Second Year",
      courses: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Systems",
        "Computer Architecture",
        "Statistics & Probability"
      ]
    },
    {
      year: "Third Year",
      courses: [
        "Operating Systems",
        "Software Engineering",
        "Computer Networks",
        "Web Development",
        "Elective Courses"
      ]
    },
    {
      year: "Fourth Year",
      courses: [
        "Artificial Intelligence",
        "Cybersecurity Fundamentals",
        "Mobile App Development",
        "Senior Capstone Project",
        "Advanced Electives"
      ]
    }
  ];

  const careers = [
    "Software Developer/Engineer",
    "Full-Stack Web Developer",
    "Data Scientist",
    "Systems Analyst",
    "Database Administrator",
    "Mobile App Developer",
    "Cybersecurity Analyst",
    "Machine Learning Engineer",
    "Cloud Solutions Architect",
    "DevOps Engineer",
  ];

  const reasons = [
    "ABET-accredited program recognized worldwide",
    "97% job placement rate within 6 months of graduation",
    "Average starting salary of $75,000+",
    "Small class sizes with personalized attention",
    "Internship opportunities with top tech companies",
    "Modern facilities and cutting-edge technology",
    "Active student organizations and hackathons",
    "Research opportunities with faculty members",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">About the Program</h1>
            <p className="text-xl max-w-3xl">
              Our Bachelor's in Computer Science provides comprehensive education in computing theory, 
              software development, and practical applications.
            </p>
          </div>
        </section>

        {/* Program Description */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Excellence in Computer Science Education</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Our program combines rigorous academic coursework with hands-on experience, preparing 
                  students for successful careers in technology. From foundational programming to advanced 
                  topics like artificial intelligence and cybersecurity, you'll gain the skills needed to 
                  thrive in today's digital world.
                </p>
                <p className="text-lg text-muted-foreground">
                  With a focus on problem-solving, critical thinking, and innovation, our graduates are 
                  equipped to tackle the challenges of tomorrow and make meaningful contributions to society.
                </p>
              </div>
              <div>
                <img 
                  src={studentsStudying} 
                  alt="Students studying" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Information */}
        <section className="py-16 bg-section-bg">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Program Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyInfo.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-lg font-semibold">{item.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Learning Outcomes</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-8 text-center">
                Upon completion of the program, graduates will be able to:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-16 bg-section-bg">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Curriculum by Year</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {curriculum.map((yearData, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-primary mb-4">{yearData.year}</h3>
                    <ul className="space-y-2">
                      {yearData.courses.map((course, courseIndex) => (
                        <li key={courseIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{course}</span>
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
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={campusBuilding} 
                  alt="Campus building" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6">Career Opportunities</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our graduates pursue diverse career paths in technology and beyond. The demand for 
                  computer science professionals continues to grow across all industries.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {careers.map((career, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-accent" />
                      <span className="text-foreground">{career}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose This Program */}
        <section className="py-16 bg-section-bg">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose This Program?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {reasons.map((reason, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <CheckCircle className="w-8 h-8 text-accent mb-3" />
                    <p className="text-foreground">{reason}</p>
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
