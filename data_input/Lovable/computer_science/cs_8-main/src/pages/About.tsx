import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Clock, BookOpen, Users, Globe, Laptop } from "lucide-react";
import campusImage from "@/assets/campus-about.jpg";

const About = () => {
  const keyInfo = [
    { label: "Duration", value: "4 Years (8 Semesters)", icon: Clock },
    { label: "Degree", value: "Bachelor of Science in Computer Science", icon: BookOpen },
    { label: "Total Credits", value: "120 Credit Hours", icon: CheckCircle },
    { label: "Study Mode", value: "Full-time / Part-time Available", icon: Users },
    { label: "Campus", value: "On-campus with Online Options", icon: Globe },
  ];

  const learningOutcomes = [
    "Design, implement, and evaluate computer-based systems and software solutions",
    "Apply mathematical foundations, algorithmic principles, and computer science theory",
    "Work effectively in teams to accomplish common goals",
    "Communicate technical information clearly to both technical and non-technical audiences",
    "Analyze complex computing problems and apply principles to identify solutions",
    "Apply security principles and practices to maintain operations in cybersecurity",
  ];

  const careerOpportunities = [
    { title: "Software Developer", description: "Design and develop software applications" },
    { title: "Data Scientist", description: "Analyze complex data to drive business decisions" },
    { title: "Cybersecurity Analyst", description: "Protect systems from security threats" },
    { title: "AI/ML Engineer", description: "Build intelligent systems and algorithms" },
    { title: "Web Developer", description: "Create dynamic websites and web applications" },
    { title: "Systems Architect", description: "Design large-scale computing systems" },
  ];

  const reasons = [
    "Industry-aligned curriculum updated regularly",
    "State-of-the-art labs and computing facilities",
    "Internship and co-op opportunities with leading tech companies",
    "Strong alumni network in the tech industry",
    "Research opportunities with faculty",
    "Career services and job placement support",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${campusImage})` }}
        >
          <div className="absolute inset-0 bg-hero-gradient opacity-85"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl font-bold mb-4">About Our Program</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95">
            A comprehensive computer science education designed to prepare you for the challenges of tomorrow's technology landscape.
          </p>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Program Overview</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our Bachelor of Science in Computer Science program provides a solid foundation in computing theory, programming, and practical application. Students develop critical thinking, problem-solving, and technical skills essential for success in the rapidly evolving tech industry.
            </p>
            <p className="text-lg text-muted-foreground">
              The curriculum balances theoretical computer science concepts with hands-on experience, preparing graduates to design innovative solutions, work in collaborative teams, and adapt to emerging technologies. Through project-based learning, internships, and research opportunities, students build a portfolio that showcases their abilities to future employers.
            </p>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Program Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {keyInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <info.icon className="h-10 w-10 text-accent mb-3" />
                  <h3 className="font-semibold mb-2 text-card-foreground">{info.label}</h3>
                  <p className="text-muted-foreground">{info.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Learning Outcomes</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Upon completion of the program, graduates will be able to:
            </p>
            <div className="space-y-4">
              {learningOutcomes.map((outcome, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum by Year */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Curriculum Structure</h2>
            <Tabs defaultValue="year1" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="year1">Year 1</TabsTrigger>
                <TabsTrigger value="year2">Year 2</TabsTrigger>
                <TabsTrigger value="year3">Year 3</TabsTrigger>
                <TabsTrigger value="year4">Year 4</TabsTrigger>
              </TabsList>
              <TabsContent value="year1" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-4 text-card-foreground">Foundation Year</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Introduction to Computer Science</li>
                      <li>• Programming Fundamentals (Python)</li>
                      <li>• Discrete Mathematics</li>
                      <li>• Calculus I & II</li>
                      <li>• Data Structures</li>
                      <li>• Computer Organization</li>
                      <li>• General Education Requirements</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="year2" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-4 text-card-foreground">Core Development</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Object-Oriented Programming (Java)</li>
                      <li>• Algorithms and Complexity</li>
                      <li>• Database Systems</li>
                      <li>• Computer Architecture</li>
                      <li>• Web Development</li>
                      <li>• Statistics for Computer Science</li>
                      <li>• Technical Communication</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="year3" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-4 text-card-foreground">Advanced Topics</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Operating Systems</li>
                      <li>• Software Engineering</li>
                      <li>• Computer Networks</li>
                      <li>• Artificial Intelligence</li>
                      <li>• Machine Learning</li>
                      <li>• Cybersecurity Fundamentals</li>
                      <li>• Elective Courses (2)</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="year4" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-4 text-card-foreground">Specialization & Capstone</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Senior Capstone Project (I & II)</li>
                      <li>• Cloud Computing</li>
                      <li>• Mobile Application Development</li>
                      <li>• Ethics in Computing</li>
                      <li>• Advanced Elective Courses (4)</li>
                      <li>• Professional Development Seminar</li>
                      <li>• Industry Internship (Optional)</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Career Opportunities</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our graduates pursue diverse and rewarding careers in technology:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {careerOpportunities.map((career, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <Laptop className="h-8 w-8 text-accent mb-3" />
                    <h3 className="font-semibold mb-2 text-card-foreground">{career.title}</h3>
                    <p className="text-sm text-muted-foreground">{career.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Why Choose Our Program?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
