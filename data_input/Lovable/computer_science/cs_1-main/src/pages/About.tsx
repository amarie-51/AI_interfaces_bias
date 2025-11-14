import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Award, BookOpen, Globe, Target } from "lucide-react";
import programImage from "@/assets/program-students.jpg";

const About = () => {
  const keyInfo = [
    { label: "Duration", value: "4 Years (8 Semesters)", icon: Clock },
    { label: "Degree", value: "Bachelor of Science", icon: Award },
    { label: "Total Credits", value: "120 Credit Hours", icon: BookOpen },
    { label: "Study Mode", value: "Full-time / Part-time", icon: Globe },
  ];

  const learningOutcomes = [
    "Design, implement, and evaluate computer-based systems and software solutions",
    "Apply fundamental concepts of algorithms, data structures, and computational theory",
    "Develop proficiency in multiple programming languages and paradigms",
    "Demonstrate understanding of software engineering principles and methodologies",
    "Analyze complex problems and design appropriate computational solutions",
    "Work effectively in teams to complete complex software projects",
    "Communicate technical concepts clearly to diverse audiences",
    "Apply ethical and professional standards in computing practice",
  ];

  const curriculum = [
    {
      year: "First Year",
      courses: [
        "Introduction to Computer Science",
        "Programming Fundamentals",
        "Discrete Mathematics",
        "Calculus I & II",
        "General Education Courses",
      ],
    },
    {
      year: "Second Year",
      courses: [
        "Data Structures and Algorithms",
        "Computer Organization",
        "Object-Oriented Programming",
        "Database Systems",
        "Linear Algebra",
      ],
    },
    {
      year: "Third Year",
      courses: [
        "Operating Systems",
        "Software Engineering",
        "Computer Networks",
        "Artificial Intelligence",
        "Web Development",
      ],
    },
    {
      year: "Fourth Year",
      courses: [
        "Cybersecurity Fundamentals",
        "Machine Learning",
        "Capstone Project",
        "Elective Specializations",
        "Professional Practice",
      ],
    },
  ];

  const careerPaths = [
    "Software Developer/Engineer",
    "Data Scientist/Analyst",
    "Machine Learning Engineer",
    "Cybersecurity Specialist",
    "Cloud Solutions Architect",
    "Full Stack Developer",
    "DevOps Engineer",
    "Mobile Application Developer",
    "AI/Robotics Engineer",
    "Database Administrator",
  ];

  const reasons = [
    {
      title: "Industry-Aligned Curriculum",
      description: "Our courses are designed with input from leading tech companies to ensure graduates are job-ready.",
      icon: Target,
    },
    {
      title: "Hands-On Learning",
      description: "Work on real-world projects, participate in hackathons, and build a professional portfolio.",
      icon: CheckCircle,
    },
    {
      title: "Career Support",
      description: "Dedicated career services, internship opportunities, and strong industry partnerships.",
      icon: Award,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About the Program</h1>
          <p className="text-xl max-w-3xl">
            A comprehensive computer science education designed to prepare you for success in the digital age.
          </p>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Comprehensive Education</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our Bachelor of Science in Computer Science offers a rigorous, well-rounded education that balances theoretical foundations with practical applications. Students engage with cutting-edge technologies while developing critical thinking and problem-solving skills essential for the tech industry.
              </p>
              <p className="text-lg text-muted-foreground">
                Through a combination of lectures, labs, projects, and research opportunities, students gain deep expertise in software development, algorithms, data science, artificial intelligence, and more. Our program emphasizes collaboration, innovation, and ethical computing practices.
              </p>
            </div>
            <div>
              <img
                src={programImage}
                alt="Students collaborating"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Key Program Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <info.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-sm text-muted-foreground mb-2">{info.label}</h3>
                  <p className="text-lg font-bold text-foreground">{info.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Learning Outcomes</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Upon completion of the program, graduates will be able to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {learningOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Curriculum Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculum.map((year, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-accent">{year.year}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {year.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="text-sm text-foreground">
                        • {course}
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
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Career Opportunities</h2>
          <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
            Our graduates pursue diverse and rewarding careers in technology sectors worldwide.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {careerPaths.map((career, index) => (
              <Card key={index}>
                <CardContent className="p-4 text-center">
                  <p className="text-sm font-medium text-foreground">{career}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Why Choose Our Program?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <reason.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
