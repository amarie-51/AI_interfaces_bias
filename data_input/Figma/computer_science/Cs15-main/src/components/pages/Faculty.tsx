import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Mail, Award, BookOpen } from "lucide-react";

export function Faculty() {
  const facultyMembers = [
    {
      name: "Dr. Michael Chen",
      title: "Professor & Department Chair",
      image:
        "https://images.unsplash.com/photo-1758685848208-e108b6af94cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBwcm9mZXNzb3J8ZW58MXx8fHwxNzYzNDc1ODMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      email: "m.chen@university.edu",
      specialization: "Artificial Intelligence, Machine Learning",
      bio: "Dr. Chen has over 20 years of experience in AI research and has published more than 100 papers in top-tier conferences. He received his Ph.D. from MIT and previously worked at Google Research. His current research focuses on deep learning applications in computer vision and natural language processing.",
      education: [
        "Ph.D. in Computer Science, MIT",
        "M.S. in Computer Science, Stanford University",
        "B.S. in Computer Engineering, UC Berkeley",
      ],
      achievements: [
        "NSF CAREER Award Recipient",
        "Best Paper Award at NeurIPS 2022",
        "ACM Distinguished Member",
      ],
    },
    {
      name: "Dr. Sarah Martinez",
      title: "Associate Professor",
      image:
        "https://images.unsplash.com/photo-1565828052994-aa2276b131a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwcm9mZXNzb3IlMjBvZmZpY2V8ZW58MXx8fHwxNzYzNDc1ODMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      email: "s.martinez@university.edu",
      specialization: "Cybersecurity, Network Security",
      bio: "Dr. Martinez is a leading expert in cybersecurity with extensive experience in both academia and industry. She has consulted for major tech companies and government agencies on security infrastructure. Her research addresses emerging threats in cloud security and IoT security, with a focus on developing practical defense mechanisms.",
      education: [
        "Ph.D. in Computer Science, Carnegie Mellon University",
        "M.S. in Information Security, Johns Hopkins University",
        "B.S. in Computer Science, University of Texas at Austin",
      ],
      achievements: [
        "IEEE Security & Privacy Top Cited Researcher",
        "Department of Defense Research Grant",
        "Women in Cybersecurity Leadership Award",
      ],
    },
    {
      name: "Dr. James Anderson",
      title: "Professor",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzb3IlMjB0ZWFjaGluZ3xlbnwxfHx8fDE3NjM0MDE1MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      email: "j.anderson@university.edu",
      specialization: "Software Engineering, Distributed Systems",
      bio: "With a background spanning both academia and industry, Dr. Anderson brings real-world software engineering practices to the classroom. He spent 10 years at Microsoft before joining academia, where he led teams building large-scale distributed systems. His research interests include software architecture, microservices, and cloud computing.",
      education: [
        "Ph.D. in Computer Science, University of Washington",
        "M.S. in Software Engineering, Carnegie Mellon University",
        "B.S. in Computer Science, University of Illinois",
      ],
      achievements: [
        "ACM SIGSOFT Distinguished Service Award",
        "Microsoft Technical Achievement Award",
        "Author of 'Modern Software Architecture' textbook",
      ],
    },
    {
      name: "Dr. Emily Wang",
      title: "Assistant Professor",
      image:
        "https://images.unsplash.com/photo-1758685734614-63fe30c18b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbGVjdHVyZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM0NzU4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      email: "e.wang@university.edu",
      specialization: "Data Science, Big Data Analytics",
      bio: "Dr. Wang is an emerging leader in data science and big data analytics. Her research combines statistical methods with machine learning to extract insights from massive datasets. She has collaborated with healthcare organizations and environmental agencies to apply data science techniques to solve real-world problems, particularly in predictive modeling and data visualization.",
      education: [
        "Ph.D. in Computer Science, Georgia Tech",
        "M.S. in Statistics, University of Michigan",
        "B.S. in Mathematics, UCLA",
      ],
      achievements: [
        "Google Faculty Research Award",
        "Rising Star in Data Science Award",
        "Published in Nature Machine Intelligence",
      ],
    },
    {
      name: "Dr. Robert Thompson",
      title: "Associate Professor",
      image:
        "https://images.unsplash.com/photo-1758685848208-e108b6af94cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBwcm9mZXNzb3J8ZW58MXx8fHwxNzYzNDc1ODMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      email: "r.thompson@university.edu",
      specialization: "Computer Graphics, Virtual Reality",
      bio: "Dr. Thompson specializes in computer graphics, visualization, and virtual/augmented reality. His work bridges the gap between theoretical computer graphics and practical applications in gaming, medical imaging, and architectural visualization. Before academia, he worked at Pixar Animation Studios, contributing to rendering technologies used in several award-winning films.",
      education: [
        "Ph.D. in Computer Graphics, Cornell University",
        "M.S. in Computer Science, University of Utah",
        "B.S. in Computer Science, Brown University",
      ],
      achievements: [
        "SIGGRAPH Technical Achievement Award",
        "Academy Award for Technical Achievement",
        "Co-founder of VR Education Initiative",
      ],
    },
    {
      name: "Dr. Lisa Patel",
      title: "Assistant Professor",
      image:
        "https://images.unsplash.com/photo-1565828052994-aa2276b131a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwcm9mZXNzb3IlMjBvZmZpY2V8ZW58MXx8fHwxNzYzNDc1ODMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      email: "l.patel@university.edu",
      specialization: "Human-Computer Interaction, UX Design",
      bio: "Dr. Patel's research focuses on human-computer interaction and user experience design. She is passionate about creating technology that is accessible, intuitive, and empowering for all users. Her work includes developing novel interaction techniques for mobile devices, studying user behavior in social media platforms, and designing accessible interfaces for people with disabilities.",
      education: [
        "Ph.D. in Human-Computer Interaction, University of Washington",
        "M.S. in Computer Science, Stanford University",
        "B.S. in Cognitive Science, UC San Diego",
      ],
      achievements: [
        "CHI Best Paper Award",
        "NSF Research Grant for Accessibility",
        "UX Design Innovation Award",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6">Our Faculty</h1>
          <p className="text-xl max-w-3xl">
            Learn from distinguished professors who are leaders in their fields,
            combining cutting-edge research with exceptional teaching.
          </p>
        </div>
      </section>

      {/* Faculty Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-4">World-Class Educators & Researchers</h2>
            <p className="text-gray-600">
              Our faculty members are accomplished researchers, experienced
              educators, and industry veterans who bring real-world expertise
              into the classroom. They are committed to mentoring students and
              fostering an environment of innovation and academic excellence.
            </p>
          </div>

          {/* Faculty Members */}
          <div className="space-y-16">
            {facultyMembers.map((faculty, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-start ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image and Contact */}
                <div
                  className={`${index % 2 === 1 ? "md:order-2" : ""} space-y-4`}
                >
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <ImageWithFallback
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-700 mb-2">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <a
                        href={`mailto:${faculty.email}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {faculty.email}
                      </a>
                    </div>
                    <p className="text-sm text-gray-600">
                      <strong>Specialization:</strong> {faculty.specialization}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <h3 className="mb-2">{faculty.name}</h3>
                  <p className="text-blue-600 mb-4">{faculty.title}</p>
                  <p className="text-gray-700 mb-6">{faculty.bio}</p>

                  {/* Education */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                      <h4 className="text-gray-900">Education</h4>
                    </div>
                    <ul className="space-y-1">
                      {faculty.education.map((edu, eduIndex) => (
                        <li key={eduIndex} className="text-gray-700 text-sm">
                          • {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="h-5 w-5 text-blue-600" />
                      <h4 className="text-gray-900">Notable Achievements</h4>
                    </div>
                    <ul className="space-y-1">
                      {faculty.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="text-gray-700 text-sm"
                        >
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Learn from the Best</h2>
          <p className="text-gray-700 mb-8">
            Our faculty are dedicated to your success. They offer office hours,
            mentorship opportunities, and research positions to help you achieve
            your academic and career goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-colors"
          >
            Contact Us to Learn More
          </a>
        </div>
      </section>
    </div>
  );
}
