import { Card, CardContent } from "@/components/ui/card";
import { Mail, Book } from "lucide-react";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. James Mitchell",
      title: "Professor of Computer Science",
      image: faculty1,
      email: "j.mitchell@csprogram.edu",
      specialization: "Artificial Intelligence & Machine Learning",
      bio: "Dr. Mitchell brings over 20 years of experience in AI research and development. He has published numerous papers on neural networks and deep learning, and his work has been featured in leading academic journals. Before joining our faculty, he worked as a senior research scientist at a major tech company, leading AI innovation projects.",
    },
    {
      name: "Dr. Sarah Thompson",
      title: "Associate Professor of Software Engineering",
      image: faculty2,
      email: "s.thompson@csprogram.edu",
      specialization: "Software Architecture & Cloud Computing",
      bio: "Dr. Thompson is an expert in distributed systems and cloud-based applications. She holds a Ph.D. in Computer Science and has extensive industry experience working with Fortune 500 companies on large-scale software projects. Her research focuses on microservices architecture and containerization technologies.",
    },
    {
      name: "Dr. Robert Chen",
      title: "Professor of Cybersecurity",
      image: faculty3,
      email: "r.chen@csprogram.edu",
      specialization: "Network Security & Cryptography",
      bio: "Dr. Chen is a renowned expert in cybersecurity with over 15 years of experience protecting critical infrastructure and developing security protocols. He has consulted for government agencies and private organizations on security strategy. His current research explores quantum cryptography and blockchain security applications.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Faculty</h1>
          <p className="text-xl max-w-3xl">
            Learn from distinguished professors and industry experts committed to your success.
          </p>
        </div>
      </section>

      {/* Faculty Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">World-Class Educators</h2>
            <p className="text-lg text-muted-foreground">
              Our faculty members are leaders in their fields, combining cutting-edge research with real-world industry experience. They are dedicated to providing mentorship, guidance, and inspiration to help you achieve your academic and career goals.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Profiles */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {facultyMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Photo Column */}
                    <div className="flex flex-col items-center md:items-start">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-48 h-48 rounded-lg object-cover shadow-lg mb-4"
                      />
                      <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                        <p className="text-accent font-medium mb-3">{member.title}</p>
                        <div className="flex items-center justify-center md:justify-start space-x-2 text-sm text-muted-foreground mb-2">
                          <Mail className="h-4 w-4" />
                          <a href={`mailto:${member.email}`} className="hover:text-accent transition-colors">
                            {member.email}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Bio Column */}
                    <div className="md:col-span-2 space-y-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Book className="h-5 w-5 text-accent" />
                          <h4 className="font-semibold text-lg text-foreground">Specialization</h4>
                        </div>
                        <p className="text-muted-foreground">{member.specialization}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-foreground mb-2">Biography</h4>
                        <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Faculty Note */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Join Our Academic Community</h2>
            <p className="text-lg text-muted-foreground mb-6">
              In addition to our core faculty, students benefit from guest lectures by industry leaders, visiting professors, and opportunities to collaborate on cutting-edge research projects.
            </p>
            <p className="text-muted-foreground">
              Our low student-to-faculty ratio ensures personalized attention and mentorship throughout your academic journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
