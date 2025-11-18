import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  Clock,
  GraduationCap,
  BookOpen,
  Calendar,
  Monitor,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

export function AboutProgram() {
  const keyInfo = [
    { icon: Clock, label: "Duration", value: "4 Years (8 Semesters)" },
    { icon: GraduationCap, label: "Degree", value: "Bachelor of Science" },
    { icon: BookOpen, label: "Total Credits", value: "120 Credit Hours" },
    { icon: Monitor, label: "Study Mode", value: "Full-time / Part-time" },
    { icon: Calendar, label: "Start Dates", value: "Fall & Spring" },
  ];

  const learningOutcomes = [
    "Design, implement, and evaluate computing-based solutions to meet specific requirements",
    "Apply computer science theory and software development fundamentals to produce computing-based solutions",
    "Communicate effectively in a variety of professional contexts",
    "Recognize professional responsibilities and make informed judgments in computing practice based on legal and ethical principles",
    "Function effectively as a member or leader of a team engaged in activities appropriate to the program's discipline",
    "Apply security principles and practices to maintain operations in the presence of risks and threats",
  ];

  const curriculum = [
    {
      year: "First Year",
      courses: [
        "Introduction to Computer Science",
        "Programming Fundamentals I & II",
        "Discrete Mathematics",
        "Calculus I & II",
        "Digital Logic Design",
        "General Education Requirements",
      ],
    },
    {
      year: "Second Year",
      courses: [
        "Data Structures and Algorithms",
        "Computer Organization",
        "Object-Oriented Programming",
        "Linear Algebra",
        "Statistics and Probability",
        "Web Development",
      ],
    },
    {
      year: "Third Year",
      courses: [
        "Database Systems",
        "Operating Systems",
        "Software Engineering",
        "Computer Networks",
        "Algorithm Analysis",
        "Elective Courses",
      ],
    },
    {
      year: "Fourth Year",
      courses: [
        "Artificial Intelligence",
        "Cybersecurity",
        "Senior Capstone Project",
        "Advanced Electives",
        "Professional Development",
        "Internship/Co-op",
      ],
    },
  ];

  const careerPaths = [
    "Software Developer/Engineer",
    "Data Scientist/Analyst",
    "Machine Learning Engineer",
    "Cybersecurity Specialist",
    "Cloud Solutions Architect",
    "DevOps Engineer",
    "Full-Stack Developer",
    "Systems Analyst",
    "Database Administrator",
    "Mobile App Developer",
    "AI/ML Researcher",
    "Product Manager (Technical)",
  ];

  const reasons = [
    {
      title: "Industry-Aligned Curriculum",
      description:
        "Our program is regularly updated to reflect the latest industry trends and technologies, ensuring you learn what employers want.",
    },
    {
      title: "Research Opportunities",
      description:
        "Work alongside faculty on cutting-edge research in AI, cybersecurity, data science, and more starting from your sophomore year.",
    },
    {
      title: "Internship Programs",
      description:
        "Partner with leading tech companies for internships and co-op experiences that provide real-world experience and networking.",
    },
    {
      title: "Small Class Sizes",
      description:
        "Average class size of 25 students ensures personalized attention and meaningful interactions with faculty.",
    },
    {
      title: "State-of-the-Art Facilities",
      description:
        "Access to modern computer labs, maker spaces, and specialized equipment for robotics, VR/AR, and IoT development.",
    },
    {
      title: "Strong Alumni Network",
      description:
        "Join a network of over 5,000 alumni working at companies like Google, Microsoft, Amazon, and innovative startups.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6">About the Program</h1>
          <p className="text-xl max-w-3xl">
            Our Bachelor of Science in Computer Science provides a comprehensive
            foundation in computing principles, software development, and
            problem-solving skills essential for success in the technology
            sector.
          </p>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center">Program Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
            {keyInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <info.icon className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-gray-600 text-sm mb-1">{info.label}</p>
                <p className="text-gray-900">{info.value}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="mb-4">Program Description</h3>
              <p className="text-gray-700 mb-4">
                The Bachelor of Science in Computer Science is designed to
                prepare students for professional careers in computing and
                graduate study in computer science or related fields. The
                program emphasizes both theoretical foundations and practical
                applications.
              </p>
              <p className="text-gray-700 mb-4">
                Students gain expertise in programming, algorithms, data
                structures, software engineering, computer architecture, and
                various specialized areas such as artificial intelligence,
                cybersecurity, and data science.
              </p>
              <p className="text-gray-700">
                Through hands-on projects, internships, and research
                opportunities, students develop the critical thinking and
                technical skills needed to solve complex problems and innovate
                in the rapidly evolving field of computer science.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1695066964145-245927509533?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvZGluZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc2MzQ0MTg5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students coding together"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center">Learning Outcomes</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Upon completion of the program, graduates will be able to:
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {learningOutcomes.map((outcome, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center">Curriculum by Year</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our carefully designed curriculum builds your skills progressively,
            from foundational concepts to advanced specializations.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {curriculum.map((year, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="mb-4 text-blue-600">{year.year}</h3>
                <ul className="space-y-2">
                  {year.courses.map((course, courseIndex) => (
                    <li
                      key={courseIndex}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="text-blue-600 mt-1">•</span>
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1741528804373-2bedeb308ce1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGlicmFyeSUyMHN0dWRlbnRzfGVufDF8fHx8MTc2MzQ1NDU1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students in library"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
                <h2>Career Opportunities</h2>
              </div>
              <p className="text-gray-700 mb-6">
                Graduates of our program are well-prepared for diverse and
                high-demand careers in the technology industry. Our alumni work
                in various roles including:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {careerPaths.map((career, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    {career}
                  </div>
                ))}
              </div>
              <p className="text-gray-700 mt-6">
                <strong>Average starting salary:</strong> $75,000 - $95,000
                <br />
                <strong>Job placement rate:</strong> 94% within 6 months of
                graduation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center">Why Choose Our Program?</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Discover what sets our Computer Science program apart from others.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h3 className="mb-3 text-blue-600">{reason.title}</h3>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Visual */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-4">Experience Innovation</h2>
              <p className="text-gray-300 mb-4">
                Our state-of-the-art computer labs are equipped with the latest
                hardware and software, providing you with the tools you need to
                bring your ideas to life.
              </p>
              <p className="text-gray-300">
                From high-performance computing clusters for AI research to
                dedicated spaces for mobile development and cybersecurity labs,
                you'll have access to professional-grade facilities that mirror
                real-world tech environments.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGxhYiUyMHVuaXZlcnNpdHl8ZW58MXx8fHwxNzYzMzg5NDU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Computer lab"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
