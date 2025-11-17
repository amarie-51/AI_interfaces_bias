import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";

const Faculty = () => {
  const facultyMembers = [
    {
      image: faculty1,
      name: "Dr. Michael Thompson",
      title: "Professor & Department Chair",
      specialization: "Artificial Intelligence & Machine Learning",
      bio: "Dr. Thompson has over 20 years of experience in AI research and has published extensively in leading journals. Prior to academia, he worked at Google Research developing neural network architectures. His current research focuses on explainable AI and ethical machine learning systems.",
      email: "m.thompson@csuni.edu",
      linkedin: "https://linkedin.com",
    },
    {
      image: faculty2,
      name: "Dr. Sarah Martinez",
      title: "Associate Professor",
      specialization: "Software Engineering & Cloud Computing",
      bio: "Dr. Martinez brings a unique blend of industry and academic experience, having worked as a lead architect at Amazon Web Services before joining academia. She specializes in distributed systems, microservices architecture, and DevOps practices. Her research interests include cloud-native application design and infrastructure automation.",
      email: "s.martinez@csuni.edu",
      linkedin: "https://linkedin.com",
    },
    {
      image: faculty3,
      name: "Dr. Raj Patel",
      title: "Assistant Professor",
      specialization: "Cybersecurity & Network Systems",
      bio: "Dr. Patel is a certified ethical hacker and cybersecurity expert with a background in penetration testing and security auditing. He has consulted for Fortune 500 companies on security infrastructure and incident response. His teaching focuses on practical security skills and defensive programming techniques.",
      email: "r.patel@csuni.edu",
      linkedin: "https://linkedin.com",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 text-center">
            Meet Our Faculty
          </h1>
          <p className="text-xl text-primary-foreground/90 text-center max-w-3xl mx-auto">
            Learn from experienced professors who are leaders in their fields
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our distinguished faculty members combine academic excellence with real-world industry experience. 
              They are committed to providing personalized mentorship and creating an engaging learning environment 
              that prepares students for successful careers in technology.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Members */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 max-w-6xl mx-auto">
            {facultyMembers.map((member, index) => (
              <Card key={index} className="border-border hover:shadow-medium transition-all duration-300">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {/* Image Section */}
                    <div className="md:col-span-1">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover md:rounded-l-lg"
                      />
                    </div>
                    
                    {/* Content Section */}
                    <div className="md:col-span-2 p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {member.name}
                      </h3>
                      <p className="text-primary font-semibold mb-1">{member.title}</p>
                      <p className="text-muted-foreground text-sm mb-4">
                        Specialization: {member.specialization}
                      </p>
                      <p className="text-foreground leading-relaxed mb-6">
                        {member.bio}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href={`mailto:${member.email}`}
                          className="inline-flex items-center text-sm text-primary hover:text-primary-dark transition-colors"
                        >
                          <Mail className="h-4 w-4 mr-2" />
                          {member.email}
                        </a>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-primary hover:text-primary-dark transition-colors"
                        >
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Faculty Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border bg-gradient-subtle">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Join Our Academic Community
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our faculty members are actively involved in cutting-edge research, industry collaborations, 
                  and student mentorship. They maintain office hours for personalized academic advising and 
                  are committed to helping every student achieve their full potential.
                </p>
                <p className="text-sm text-muted-foreground">
                  In addition to our core faculty, we regularly host guest lectures from industry leaders 
                  and maintain partnerships with leading tech companies to provide students with real-world insights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
