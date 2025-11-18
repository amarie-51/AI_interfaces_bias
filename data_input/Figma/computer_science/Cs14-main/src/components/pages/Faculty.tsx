import { Card } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Mail, Phone, Award } from "lucide-react";

export function Faculty() {
  const facultyMembers = [
    {
      name: "Dr. Emily Rodriguez",
      title: "Department Chair & Professor",
      specialization: "Artificial Intelligence & Machine Learning",
      image: "https://images.unsplash.com/photo-1758270704587-43339a801396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwcm9mZXNzb3J8ZW58MXx8fHwxNzYzNDE4MDAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Dr. Rodriguez leads our department with over 20 years of experience in AI research. She has published 50+ papers in top-tier conferences and holds 8 patents in machine learning algorithms. Her research focuses on deep learning applications in healthcare and natural language processing.",
      email: "e.rodriguez@university.edu",
      phone: "+1 (555) 123-4501",
      awards: ["IEEE Fellow", "Best Paper Award 2023"]
    },
    {
      name: "Dr. Michael Chen",
      title: "Professor of Computer Science",
      specialization: "Cybersecurity & Network Security",
      image: "https://images.unsplash.com/photo-1615712278090-a935af124081?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcHJvZmVzc29yfGVufDF8fHx8MTc2MzQ3NTcyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Dr. Chen is an internationally recognized expert in cybersecurity with extensive experience in both academia and industry. He previously worked as a security consultant for Fortune 500 companies and now dedicates his time to training the next generation of security professionals.",
      email: "m.chen@university.edu",
      phone: "+1 (555) 123-4502",
      awards: ["ACM Distinguished Scientist", "National Cybersecurity Award"]
    },
    {
      name: "Dr. Sarah Thompson",
      title: "Associate Professor",
      specialization: "Software Engineering & Development",
      image: "https://images.unsplash.com/photo-1758685734408-19dd0cc86d2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBsZWN0dXJlcnxlbnwxfHx8fDE3NjM0NzU3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Dr. Thompson brings real-world software development experience to the classroom. She has led development teams at major tech companies and now focuses on teaching best practices in software architecture, agile methodologies, and DevOps. Her students consistently excel in industry internships.",
      email: "s.thompson@university.edu",
      phone: "+1 (555) 123-4503",
      awards: ["Excellence in Teaching Award", "Industry Partnership Award"]
    },
    {
      name: "Dr. James Patterson",
      title: "Professor of Computer Science",
      specialization: "Data Science & Analytics",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzb3IlMjB0ZWFjaGluZ3xlbnwxfHx8fDE3NjM0MDE1MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Dr. Patterson is a pioneer in the field of big data analytics and visualization. His research on scalable data processing systems has been adopted by several major technology companies. He teaches courses in data mining, statistical learning, and data visualization.",
      email: "j.patterson@university.edu",
      phone: "+1 (555) 123-4504",
      awards: ["NSF CAREER Award", "Data Science Innovation Award"]
    },
    {
      name: "Dr. Lisa Wang",
      title: "Associate Professor",
      specialization: "Human-Computer Interaction & UX Design",
      image: "https://images.unsplash.com/photo-1757876506562-0b0087ab3dcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBjb2xsZWdlJTIwc3R1ZGVudHxlbnwxfHx8fDE3NjM0NzU3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Dr. Wang's research explores how people interact with technology and how to design more intuitive and accessible interfaces. She has collaborated with industry partners on numerous UX research projects and runs the university's Human-Computer Interaction Lab.",
      email: "l.wang@university.edu",
      phone: "+1 (555) 123-4505",
      awards: ["CHI Best Paper Award", "Accessibility Research Grant"]
    },
    {
      name: "Dr. Robert Martinez",
      title: "Assistant Professor",
      specialization: "Cloud Computing & Distributed Systems",
      image: "https://images.unsplash.com/photo-1594077841990-3909f3a482a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwc3R1ZGVudCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzNDc1NzI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      bio: "Dr. Martinez is an emerging leader in cloud computing research. Before joining academia, he worked as a senior engineer at a major cloud services provider. His current research focuses on optimizing resource allocation in distributed systems and edge computing.",
      email: "r.martinez@university.edu",
      phone: "+1 (555) 123-4506",
      awards: ["Rising Star Award", "Cloud Innovation Grant"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl text-blue-900 mb-4">Our Faculty</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn from world-class researchers and educators who are passionate about your success
        </p>
      </div>

      {/* Introduction */}
      <div className="mb-16 max-w-4xl mx-auto">
        <Card className="p-8 bg-blue-50">
          <p className="text-gray-700 text-lg">
            Our faculty members are distinguished scholars, innovative researchers, and dedicated educators. 
            They bring a wealth of industry experience and academic expertise to the classroom, ensuring that 
            you receive a well-rounded education that prepares you for real-world challenges. With a low 
            student-faculty ratio, you'll have ample opportunities for mentorship, collaboration, and 
            personalized guidance throughout your academic journey.
          </p>
        </Card>
      </div>

      {/* Faculty Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {facultyMembers.map((faculty, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 sm:grid-cols-3">
              {/* Photo */}
              <div className="sm:col-span-1 aspect-square sm:aspect-auto">
                <ImageWithFallback
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="sm:col-span-2 p-6">
                <h3 className="text-2xl text-blue-900 mb-1">{faculty.name}</h3>
                <div className="text-blue-600 mb-2">{faculty.title}</div>
                <div className="text-sm text-gray-600 mb-4 italic">{faculty.specialization}</div>
                
                <p className="text-gray-700 text-sm mb-4">{faculty.bio}</p>
                
                {/* Contact Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail size={16} className="text-blue-600" />
                    <a href={`mailto:${faculty.email}`} className="hover:text-blue-600">
                      {faculty.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone size={16} className="text-blue-600" />
                    <span>{faculty.phone}</span>
                  </div>
                </div>
                
                {/* Awards */}
                <div className="flex flex-wrap gap-2">
                  {faculty.awards.map((award, awardIndex) => (
                    <div 
                      key={awardIndex} 
                      className="inline-flex items-center gap-1 bg-yellow-50 text-yellow-800 text-xs px-2 py-1 rounded"
                    >
                      <Award size={12} />
                      {award}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl mb-4">Interested in Our Faculty's Research?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Undergraduate students have opportunities to participate in faculty-led research projects
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="mailto:cs@university.edu"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
          >
            Contact Department
          </a>
        </div>
      </div>
    </div>
  );
}
