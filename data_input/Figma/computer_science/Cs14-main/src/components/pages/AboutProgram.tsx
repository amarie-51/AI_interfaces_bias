import { Card } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { CheckCircle, GraduationCap, Calendar, BookOpen, Monitor, Award } from "lucide-react";

export function AboutProgram() {
  const learningOutcomes = [
    "Design, implement, and evaluate computing-based solutions to complex problems",
    "Apply computer science theory and software development fundamentals to produce computing solutions",
    "Communicate effectively in professional contexts with diverse audiences",
    "Recognize professional responsibilities and make informed judgments in computing practice",
    "Function effectively as a member or leader of a team engaged in computing activities",
    "Apply security principles and practices to maintain operations in the presence of risks and threats"
  ];

  const curriculumByYear = [
    {
      year: "First Year",
      courses: [
        "Introduction to Programming (Python/Java)",
        "Discrete Mathematics",
        "Computer Systems Fundamentals",
        "Calculus I & II",
        "General Education Requirements"
      ]
    },
    {
      year: "Second Year",
      courses: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming",
        "Computer Organization",
        "Linear Algebra",
        "Database Systems",
        "Web Development"
      ]
    },
    {
      year: "Third Year",
      courses: [
        "Operating Systems",
        "Software Engineering",
        "Computer Networks",
        "Artificial Intelligence",
        "Theory of Computation",
        "Elective Courses"
      ]
    },
    {
      year: "Fourth Year",
      courses: [
        "Senior Capstone Project",
        "Advanced Electives (Machine Learning, Cybersecurity, etc.)",
        "Professional Development",
        "Industry Internship",
        "Technical Electives"
      ]
    }
  ];

  const careerOpportunities = [
    {
      title: "Software Engineer",
      description: "Design and develop software applications for various platforms and industries",
      salary: "$75K - $120K"
    },
    {
      title: "Data Scientist",
      description: "Analyze complex data sets to drive business decisions and insights",
      salary: "$85K - $130K"
    },
    {
      title: "Cybersecurity Analyst",
      description: "Protect organizations from cyber threats and ensure data security",
      salary: "$80K - $125K"
    },
    {
      title: "Full-Stack Developer",
      description: "Build complete web applications from front-end to back-end",
      salary: "$70K - $115K"
    },
    {
      title: "AI/ML Engineer",
      description: "Develop intelligent systems and machine learning models",
      salary: "$90K - $140K"
    },
    {
      title: "Systems Architect",
      description: "Design and oversee complex computing infrastructure",
      salary: "$95K - $150K"
    }
  ];

  const reasons = [
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: "Accredited Excellence",
      description: "Our program is accredited by ABET, ensuring the highest educational standards and recognition by employers worldwide."
    },
    {
      icon: <Monitor className="w-12 h-12 text-blue-600" />,
      title: "Modern Facilities",
      description: "State-of-the-art computer labs, AI research centers, and collaborative learning spaces equipped with the latest technology."
    },
    {
      icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
      title: "Research Opportunities",
      description: "Participate in cutting-edge research projects alongside faculty in areas like AI, cybersecurity, and quantum computing."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-blue-600" />,
      title: "Flexible Learning",
      description: "Choose from various specializations and electives to tailor your education to your career goals and interests."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl text-blue-900 mb-4">About Our Program</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A comprehensive education that prepares you for the dynamic world of technology
        </p>
      </div>

      {/* Program Description */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl text-blue-900 mb-4">Program Overview</h2>
          <p className="text-gray-700 mb-4">
            Our Bachelor of Science in Computer Science provides a strong foundation in both theoretical 
            and practical aspects of computing. The program emphasizes problem-solving, critical thinking, 
            and hands-on experience with modern technologies.
          </p>
          <p className="text-gray-700 mb-4">
            Students learn to design and implement software systems, analyze algorithms, and develop 
            innovative solutions to real-world challenges. Through a combination of rigorous coursework, 
            laboratory exercises, and collaborative projects, graduates emerge ready to make immediate 
            contributions in their careers.
          </p>
          <p className="text-gray-700">
            Our curriculum is regularly updated to reflect the latest industry trends and technological 
            advancements, ensuring that our graduates possess the most relevant and in-demand skills.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1669101283985-ab2b293923df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBsYWJ8ZW58MXx8fHwxNzYzNDMyOTgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Computer Science Lab"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Key Information */}
      <Card className="p-8 mb-16 bg-blue-50">
        <h2 className="text-3xl text-blue-900 mb-6">Program Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <div className="text-blue-900 mb-1">Duration</div>
              <div className="text-gray-700">4 years (8 semesters)</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <GraduationCap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <div className="text-blue-900 mb-1">Degree</div>
              <div className="text-gray-700">Bachelor of Science (B.S.)</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <div className="text-blue-900 mb-1">Total Credits</div>
              <div className="text-gray-700">120 credit hours</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Monitor className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <div className="text-blue-900 mb-1">Study Mode</div>
              <div className="text-gray-700">Full-time, On-campus</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <div className="text-blue-900 mb-1">Accreditation</div>
              <div className="text-gray-700">ABET Accredited</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Award className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <div className="text-blue-900 mb-1">Class Size</div>
              <div className="text-gray-700">Average 25-30 students</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Learning Outcomes */}
      <div className="mb-16">
        <h2 className="text-3xl text-blue-900 mb-6">Learning Outcomes</h2>
        <p className="text-gray-700 mb-6">
          Upon completion of the program, graduates will be able to:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {learningOutcomes.map((outcome, index) => (
            <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{outcome}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Curriculum */}
      <div className="mb-16">
        <h2 className="text-3xl text-blue-900 mb-6">Curriculum by Year</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {curriculumByYear.map((yearData, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-2xl text-blue-900 mb-4">{yearData.year}</h3>
              <ul className="space-y-2">
                {yearData.courses.map((course, courseIndex) => (
                  <li key={courseIndex} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{course}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      {/* Visual Section */}
      <div className="mb-16 rounded-lg overflow-hidden shadow-lg">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1695066964145-245927509533?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvZGluZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc2MzQ0MTg5NXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Students Coding Together"
          className="w-full h-96 object-cover"
        />
      </div>

      {/* Career Opportunities */}
      <div className="mb-16">
        <h2 className="text-3xl text-blue-900 mb-4">Career Opportunities</h2>
        <p className="text-gray-700 mb-8">
          Our graduates pursue exciting careers across various sectors of the technology industry:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerOpportunities.map((career, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl text-blue-900 mb-2">{career.title}</h3>
              <p className="text-gray-600 mb-3">{career.description}</p>
              <div className="text-green-600">{career.salary}</div>
            </Card>
          ))}
        </div>
      </div>

      {/* Reasons to Choose */}
      <div>
        <h2 className="text-3xl text-blue-900 mb-8 text-center">Why Choose Our Program?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">{reason.icon}</div>
              <div>
                <h3 className="text-xl text-blue-900 mb-2">{reason.title}</h3>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
