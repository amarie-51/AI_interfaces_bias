import { Mail, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Faculty() {
  const facultyMembers = [
    {
      name: "Dr. Emily Rodriguez",
      title: "Professor & Department Chair",
      specialization: "Artificial Intelligence & Machine Learning",
      image: "https://images.unsplash.com/photo-1726618069974-c1d5d27f612b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3NvciUyMHdvbWFufGVufDF8fHx8MTc2MzQ3NzM4MHww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Dr. Rodriguez earned her Ph.D. from Stanford University and has over 15 years of experience in AI research. She has published more than 50 papers in top-tier conferences and journals. Her research focuses on deep learning, natural language processing, and ethical AI. Before joining academia, she worked as a senior researcher at Google AI.",
      email: "e.rodriguez@university.edu",
    },
    {
      name: "Dr. Michael Chen",
      title: "Associate Professor",
      specialization: "Cybersecurity & Network Systems",
      image: "https://images.unsplash.com/photo-1562693313-2ef8cef483a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzb3IlMjBtYW4lMjBhY2FkZW1pY3xlbnwxfHx8fDE3NjM0NzczOTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Dr. Chen specializes in cybersecurity, cryptography, and secure system design. He received his Ph.D. from MIT and has consulted for Fortune 500 companies on security architecture. His research has been funded by NSF and DARPA, focusing on blockchain security and zero-trust architectures. He holds multiple patents in secure communication protocols.",
      email: "m.chen@university.edu",
    },
    {
      name: "Dr. Sarah Johnson",
      title: "Assistant Professor",
      specialization: "Data Science & Big Data Analytics",
      image: "https://images.unsplash.com/photo-1633381182794-01b10764b431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzNDEwNDc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Dr. Johnson brings expertise in data mining, statistical learning, and large-scale data processing. She completed her Ph.D. at UC Berkeley and previously worked at Amazon Web Services on big data infrastructure. Her research interests include distributed computing, data visualization, and machine learning applications in healthcare. She teaches advanced courses in data science and analytics.",
      email: "s.johnson@university.edu",
    },
    {
      name: "Dr. James Martinez",
      title: "Professor",
      specialization: "Software Engineering & System Design",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzb3IlMjB0ZWFjaGluZ3xlbnwxfHx8fDE3NjM0MDE1MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Dr. Martinez is an expert in software engineering methodologies, distributed systems, and cloud computing. With a Ph.D. from Carnegie Mellon University, he spent 10 years at Microsoft leading development teams before transitioning to academia. He is passionate about teaching best practices in software development and has authored two textbooks on modern software engineering.",
      email: "j.martinez@university.edu",
    },
    {
      name: "Dr. Priya Patel",
      title: "Associate Professor",
      specialization: "Computer Vision & Robotics",
      image: "https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudCUyMHN0dWR5aW5nfGVufDF8fHx8MTc2MzQ3NzM2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Dr. Patel's research focuses on computer vision, autonomous systems, and human-robot interaction. She earned her Ph.D. from Georgia Tech and has collaborated with Tesla on autonomous vehicle technology. Her work has been featured in leading robotics conferences, and she directs the university's Robotics and AI Lab. She is also active in promoting diversity in STEM fields.",
      email: "p.patel@university.edu",
    },
    {
      name: "Dr. David Kim",
      title: "Assistant Professor",
      specialization: "Algorithms & Theoretical Computer Science",
      image: "https://images.unsplash.com/photo-1729697967428-5b98d11486a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzQwODg2NHww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Dr. Kim specializes in algorithm design, computational complexity, and graph theory. He received his Ph.D. from Princeton University and has made significant contributions to approximation algorithms. His research has applications in optimization problems across various domains including social networks and bioinformatics. He is known for his engaging teaching style and mentorship of undergraduate researchers.",
      email: "d.kim@university.edu",
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl mb-6">Our Faculty</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Learn from world-class educators and researchers who are leaders in their fields and passionate about student success.
          </p>
        </div>
      </section>

      {/* Faculty Introduction */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl text-gray-900 mb-6">Meet Our Expert Faculty</h2>
            <p className="text-lg text-gray-600">
              Our faculty members are not just teachers—they're active researchers, industry professionals, and mentors dedicated to your success. With expertise spanning artificial intelligence, cybersecurity, software engineering, and more, they bring real-world experience and cutting-edge knowledge to the classroom.
            </p>
          </div>

          {/* Faculty Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <ImageWithFallback
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-gray-900 mb-1">{faculty.name}</h3>
                  <p className="text-blue-600 mb-2">{faculty.title}</p>
                  <p className="text-sm text-gray-500 mb-4">{faculty.specialization}</p>
                  <p className="text-gray-600 mb-4 line-clamp-4">{faculty.bio}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Mail className="h-4 w-4" />
                    <a href={`mailto:${faculty.email}`} className="hover:text-blue-600 transition-colors">
                      {faculty.email}
                    </a>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Profile
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Stats */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Faculty Members</div>
            </div>
            <div>
              <div className="text-4xl text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Published Papers</div>
            </div>
            <div>
              <div className="text-4xl text-blue-600 mb-2">15:1</div>
              <div className="text-gray-600">Student-Faculty Ratio</div>
            </div>
            <div>
              <div className="text-4xl text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Industry Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-12 text-center">Research Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Artificial Intelligence",
              "Machine Learning",
              "Cybersecurity",
              "Data Science",
              "Software Engineering",
              "Computer Vision",
              "Robotics",
              "Cloud Computing",
              "Blockchain",
              "Natural Language Processing",
              "Distributed Systems",
              "Human-Computer Interaction",
            ].map((area, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow">
                <p className="text-gray-700">{area}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
