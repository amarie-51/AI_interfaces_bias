import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, BookOpen, Users, Laptop, TrendingUp } from "lucide-react";
import aboutImage from "@/assets/about-program.jpg";

const About = () => {
  const keyInfo = [
    { label: "Duration", value: "4 Years" },
    { label: "Degree", value: "Bachelor of Science" },
    { label: "Credits", value: "120 Credits" },
    { label: "Study Mode", value: "Full-time / Part-time" },
  ];

  const learningOutcomes = [
    "Master fundamental and advanced programming concepts in multiple languages",
    "Design and implement complex software systems using industry best practices",
    "Apply algorithmic thinking and data structures to solve real-world problems",
    "Collaborate effectively in team-based development environments",
    "Understand cybersecurity principles and ethical computing practices",
    "Develop innovative solutions using artificial intelligence and machine learning",
  ];

  const curriculum = [
    {
      year: "Year 1",
      courses: [
        "Introduction to Programming",
        "Discrete Mathematics",
        "Computer Systems",
        "Calculus I & II",
        "English Composition",
        "Physics for Computing",
      ],
    },
    {
      year: "Year 2",
      courses: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Systems",
        "Computer Architecture",
        "Linear Algebra",
        "Technical Writing",
      ],
    },
    {
      year: "Year 3",
      courses: [
        "Software Engineering",
        "Operating Systems",
        "Web Development",
        "Computer Networks",
        "Artificial Intelligence",
        "Professional Ethics",
      ],
    },
    {
      year: "Year 4",
      courses: [
        "Capstone Project",
        "Cloud Computing",
        "Cybersecurity",
        "Mobile App Development",
        "Machine Learning",
        "Elective Specializations",
      ],
    },
  ];

  const careerPaths = [
    "Software Developer / Engineer",
    "Full-Stack Web Developer",
    "Data Scientist / Analyst",
    "Machine Learning Engineer",
    "Cloud Solutions Architect",
    "Cybersecurity Specialist",
    "Mobile App Developer",
    "DevOps Engineer",
  ];

  const reasons = [
    {
      icon: BookOpen,
      title: "Industry-Relevant Curriculum",
      description: "Our courses are constantly updated to reflect the latest industry trends and technologies.",
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Benefit from personalized attention with an average student-to-faculty ratio of 15:1.",
    },
    {
      icon: Laptop,
      title: "State-of-the-Art Facilities",
      description: "Access modern computer labs, maker spaces, and collaborative learning environments.",
    },
    {
      icon: TrendingUp,
      title: "Strong Industry Connections",
      description: "Internship opportunities with leading tech companies and startup partnerships.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 text-center">
            About Our Program
          </h1>
          <p className="text-xl text-primary-foreground/90 text-center max-w-3xl mx-auto">
            Comprehensive computer science education designed for the next generation of tech leaders
          </p>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                A Foundation for Success
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our Bachelor of Science in Computer Science program provides a comprehensive education that combines 
                theoretical foundations with practical, hands-on experience. Students learn to think critically, 
                solve complex problems, and develop innovative software solutions.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The curriculum is designed in collaboration with industry partners to ensure graduates possess the 
                skills and knowledge demanded by today's employers. From fundamental programming to advanced topics 
                like artificial intelligence and cloud computing, our program prepares students for diverse career paths.
              </p>
            </div>
            <div>
              <img
                src={aboutImage}
                alt="Students in computer lab"
                className="rounded-lg shadow-medium w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Program Overview
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {keyInfo.map((info, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6 text-center">
                  <p className="text-sm text-muted-foreground mb-2">{info.label}</p>
                  <p className="text-xl font-bold text-foreground">{info.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Learning Outcomes
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6">
                  Upon completion of the program, graduates will be able to:
                </p>
                <ul className="space-y-4">
                  {learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
            Curriculum by Year
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A progressive learning path that builds from fundamentals to advanced specializations
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {curriculum.map((year, index) => (
              <Card key={index} className="border-border hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-4">{year.year}</h3>
                  <ul className="space-y-2">
                    {year.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="flex items-center text-foreground">
                        <div className="h-2 w-2 bg-primary rounded-full mr-3 flex-shrink-0" />
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
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
            Career Opportunities
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Our graduates pursue diverse and rewarding careers in technology
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {careerPaths.map((career, index) => (
              <Card key={index} className="border-border hover:shadow-soft transition-all duration-300 hover:border-primary">
                <CardContent className="p-4 text-center">
                  <p className="text-foreground font-medium">{career}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons to Choose */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Why Choose Our Program?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {reasons.map((reason, index) => (
              <Card key={index} className="border-border hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <reason.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground">{reason.description}</p>
                    </div>
                  </div>
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
