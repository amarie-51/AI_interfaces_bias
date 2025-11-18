import { Calendar, BookOpen, GraduationCap, Clock, MapPin, CheckCircle, Laptop, Lightbulb, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutProgram() {
  const keyInfo = [
    { icon: Calendar, label: "Duration", value: "4 Years (8 Semesters)" },
    { icon: GraduationCap, label: "Degree", value: "Bachelor of Science (B.S.)" },
    { icon: BookOpen, label: "Total Credits", value: "120 Credit Hours" },
    { icon: Clock, label: "Study Mode", value: "Full-time / Part-time" },
    { icon: MapPin, label: "Location", value: "On-Campus & Hybrid Options" },
  ];

  const learningOutcomes = [
    "Design, implement, and evaluate computer-based systems and software solutions",
    "Apply theoretical foundations of computer science to solve complex problems",
    "Work effectively in teams to develop software projects",
    "Communicate technical information clearly to diverse audiences",
    "Analyze security, privacy, and ethical implications of computing solutions",
    "Adapt to emerging technologies and continue professional development",
  ];

  const curriculum = [
    {
      year: "Year 1",
      semester1: [
        "Introduction to Computer Science",
        "Calculus I",
        "English Composition",
        "General Education Elective",
      ],
      semester2: [
        "Data Structures & Algorithms",
        "Calculus II",
        "Physics I",
        "General Education Elective",
      ],
    },
    {
      year: "Year 2",
      semester1: [
        "Computer Organization",
        "Discrete Mathematics",
        "Object-Oriented Programming",
        "General Education Elective",
      ],
      semester2: [
        "Operating Systems",
        "Database Systems",
        "Linear Algebra",
        "General Education Elective",
      ],
    },
    {
      year: "Year 3",
      semester1: [
        "Software Engineering",
        "Computer Networks",
        "Algorithm Analysis",
        "Technical Elective",
      ],
      semester2: [
        "Artificial Intelligence",
        "Web Development",
        "Computer Security",
        "Technical Elective",
      ],
    },
    {
      year: "Year 4",
      semester1: [
        "Machine Learning",
        "Senior Project I",
        "Technical Elective",
        "Technical Elective",
      ],
      semester2: [
        "Cloud Computing",
        "Senior Project II",
        "Technical Elective",
        "Capstone Seminar",
      ],
    },
  ];

  const careerOpportunities = [
    {
      title: "Software Developer",
      salary: "$75,000 - $120,000",
      description: "Design, develop, and maintain software applications",
    },
    {
      title: "Data Scientist",
      salary: "$85,000 - $140,000",
      description: "Analyze and interpret complex data to inform business decisions",
    },
    {
      title: "Cybersecurity Analyst",
      salary: "$80,000 - $130,000",
      description: "Protect systems and networks from digital threats",
    },
    {
      title: "AI/ML Engineer",
      salary: "$90,000 - $150,000",
      description: "Build intelligent systems using artificial intelligence",
    },
    {
      title: "Full Stack Developer",
      salary: "$75,000 - $125,000",
      description: "Develop both front-end and back-end of applications",
    },
    {
      title: "Cloud Architect",
      salary: "$95,000 - $160,000",
      description: "Design and implement cloud computing strategies",
    },
  ];

  const reasons = [
    {
      icon: Laptop,
      title: "State-of-the-Art Facilities",
      description: "Access to cutting-edge computer labs, VR/AR equipment, and research facilities equipped with the latest technology.",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Research",
      description: "Participate in groundbreaking research projects in AI, cybersecurity, and emerging technologies.",
    },
    {
      icon: TrendingUp,
      title: "Industry Connections",
      description: "Benefit from partnerships with tech giants like Microsoft, Google, and Amazon for internships and career opportunities.",
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl mb-6">About the Program</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Our Bachelor of Science in Computer Science provides a comprehensive education that prepares you for a successful career in technology.
          </p>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl text-gray-900 mb-6">Program Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our Computer Science program is designed to equip students with both theoretical knowledge and practical skills needed to excel in the rapidly evolving tech industry. Through a combination of rigorous coursework, hands-on projects, and real-world experiences, you'll develop expertise in software development, algorithms, data structures, artificial intelligence, and more.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                The curriculum emphasizes problem-solving, critical thinking, and innovation. You'll work on team projects, participate in hackathons, and have opportunities to intern at leading technology companies. Our graduates are prepared to tackle complex challenges and make meaningful contributions to the field of computing.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're interested in software engineering, data science, cybersecurity, or artificial intelligence, our program provides a strong foundation and the flexibility to specialize in your area of interest.
              </p>
            </div>
            <div className="relative h-96 lg:h-auto">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1629481317043-16b1343d77d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBjbGFzc3Jvb218ZW58MXx8fHwxNzYzNDc3Mzk3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Coding Classroom"
                className="rounded-lg shadow-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-12 text-center">Program Details</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyInfo.map((info, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{info.label}</div>
                    <div className="text-lg text-gray-900">{info.value}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-gray-900 mb-6 text-center">Learning Outcomes</h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Upon completion of the program, graduates will be able to:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {learningOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-12 text-center">Curriculum by Year</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {curriculum.map((year, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-2xl text-gray-900 mb-6">{year.year}</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Semester 1</Badge>
                    </div>
                    <ul className="space-y-2">
                      {year.semester1.map((course, courseIndex) => (
                        <li key={courseIndex} className="flex items-start gap-2 text-gray-700">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Semester 2</Badge>
                    </div>
                    <ul className="space-y-2">
                      {year.semester2.map((course, courseIndex) => (
                        <li key={courseIndex} className="flex items-start gap-2 text-gray-700">
                          <span className="text-green-600 mt-1">•</span>
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-4 text-center">Career Opportunities</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Our graduates pursue rewarding careers in various technology sectors. Here are some common career paths and salary ranges:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerOpportunities.map((career, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl text-gray-900 mb-2">{career.title}</h3>
                <div className="text-green-600 mb-3">{career.salary}</div>
                <p className="text-gray-600">{career.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons to Choose */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-12 text-center">Why Choose Our Program?</h2>
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {reasons.map((reason, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <reason.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </Card>
            ))}
          </div>
          
          {/* Supporting Visuals */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-64 md:h-80">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1681171575028-16aa7a6f063e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjb21wdXRlciUyMHNjaWVuY2V8ZW58MXx8fHwxNzYzNDc3MzY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students Collaborating"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 md:h-80">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600903308878-bf5e554ab841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjBidWlsZGluZyUyMG1vZGVybnxlbnwxfHx8fDE3NjM0NzczNjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Campus Building"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
