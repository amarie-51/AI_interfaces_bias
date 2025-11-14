import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, BookOpen, Briefcase, Target } from "lucide-react";
import programImage from "@/assets/program-lab.jpg";

const AboutProgram = () => {
  const learningOutcomes = [
    "Master core programming languages including Java, Python, C++, and JavaScript",
    "Design and implement complex software systems and applications",
    "Apply algorithms and data structures to solve computational problems",
    "Understand computer architecture and operating systems",
    "Develop secure and scalable web applications",
    "Analyze and design databases for efficient data management",
    "Apply machine learning and AI techniques to real-world problems",
    "Work effectively in teams using modern software development practices",
  ];

  const careerPaths = [
    "Software Engineer / Developer",
    "Full-Stack Web Developer",
    "Data Scientist / Analyst",
    "Machine Learning Engineer",
    "Cybersecurity Analyst",
    "Cloud Solutions Architect",
    "Mobile App Developer",
    "DevOps Engineer",
    "Systems Administrator",
    "UI/UX Developer",
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Program</h1>
            <p className="text-xl text-primary-foreground/90">
              A comprehensive computer science education designed for the future of technology
            </p>
          </div>
        </div>
      </section>

      {/* Program Description */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Excellence in Computer Science Education
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Our Bachelor of Computer Science program is designed to provide students with a
                strong foundation in computer science theory while emphasizing practical,
                hands-on experience with the latest technologies and industry practices.
              </p>
              <p>
                Through a combination of rigorous coursework, collaborative projects, and real-world
                internships, our students graduate with the skills and knowledge needed to excel in
                diverse technology careers or pursue advanced studies.
              </p>
              <p>
                We offer specialized tracks in Software Engineering, Artificial Intelligence,
                Cybersecurity, and Data Science, allowing students to tailor their education to
                their career goals while maintaining a strong core computer science foundation.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-elegant-xl">
            <img
              src={programImage}
              alt="Computer Science Lab"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Key Information */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="p-6">
            <div className="text-primary text-3xl font-bold mb-2">4 Years</div>
            <div className="text-sm text-muted-foreground">Program Duration</div>
          </Card>
          <Card className="p-6">
            <div className="text-primary text-3xl font-bold mb-2">120</div>
            <div className="text-sm text-muted-foreground">Credit Hours</div>
          </Card>
          <Card className="p-6">
            <div className="text-primary text-3xl font-bold mb-2">B.S.</div>
            <div className="text-sm text-muted-foreground">Degree Type</div>
          </Card>
          <Card className="p-6">
            <div className="text-primary text-3xl font-bold mb-2">Full/Part</div>
            <div className="text-sm text-muted-foreground">Study Mode</div>
          </Card>
        </div>

        {/* Learning Outcomes */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <Target className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Learning Outcomes</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Upon completing our program, graduates will be able to:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {learningOutcomes.map((outcome, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Curriculum Overview</h2>
          </div>
          <Tabs defaultValue="year1" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="year1">Year 1</TabsTrigger>
              <TabsTrigger value="year2">Year 2</TabsTrigger>
              <TabsTrigger value="year3">Year 3</TabsTrigger>
              <TabsTrigger value="year4">Year 4</TabsTrigger>
            </TabsList>
            <TabsContent value="year1" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Foundation Year - Core Concepts
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Introduction to Programming (Python)</li>
                  <li>• Computer Science Fundamentals</li>
                  <li>• Discrete Mathematics</li>
                  <li>• Calculus I & II</li>
                  <li>• Introduction to Computer Systems</li>
                  <li>• Data Structures and Algorithms I</li>
                  <li>• Web Development Basics</li>
                  <li>• General Education Requirements</li>
                </ul>
              </Card>
            </TabsContent>
            <TabsContent value="year2" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Intermediate - Building Skills
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Object-Oriented Programming (Java)</li>
                  <li>• Data Structures and Algorithms II</li>
                  <li>• Computer Architecture</li>
                  <li>• Operating Systems</li>
                  <li>• Database Management Systems</li>
                  <li>• Software Engineering Principles</li>
                  <li>• Probability and Statistics</li>
                  <li>• Elective Course I</li>
                </ul>
              </Card>
            </TabsContent>
            <TabsContent value="year3" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Advanced - Specialization Begins
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Advanced Algorithms</li>
                  <li>• Computer Networks</li>
                  <li>• Machine Learning Fundamentals</li>
                  <li>• Cybersecurity Principles</li>
                  <li>• Cloud Computing</li>
                  <li>• Mobile Application Development</li>
                  <li>• Track Specialization Courses (2)</li>
                  <li>• Professional Development & Ethics</li>
                </ul>
              </Card>
            </TabsContent>
            <TabsContent value="year4" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Senior Year - Capstone & Career Prep
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Senior Capstone Project (2 semesters)</li>
                  <li>• Advanced Track Courses (3-4)</li>
                  <li>• Industry Internship or Research Project</li>
                  <li>• Elective Courses (2-3)</li>
                  <li>• Career Preparation Workshop</li>
                  <li>• Technical Writing & Communication</li>
                  <li>• Seminar: Emerging Technologies</li>
                </ul>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Career Opportunities */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <Briefcase className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Career Opportunities</h2>
          </div>
          <p className="text-muted-foreground mb-6">
            Our graduates are well-prepared for diverse career paths in technology:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {careerPaths.map((career, index) => (
              <Card key={index} className="p-4 hover:shadow-elegant transition-shadow">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground font-medium">{career}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <Card className="bg-muted p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Why Choose Our Program?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Industry Partnerships</h3>
              <p className="text-sm text-muted-foreground">
                Strong connections with leading tech companies for internships and career
                opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Modern Facilities</h3>
              <p className="text-sm text-muted-foreground">
                State-of-the-art computer labs, maker spaces, and collaborative learning
                environments
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Expert Faculty</h3>
              <p className="text-sm text-muted-foreground">
                Learn from accomplished professors with industry experience and research expertise
              </p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default AboutProgram;
