import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. James Anderson",
      title: "Professor of Computer Science",
      image: faculty1,
      email: "j.anderson@university.edu",
      bio: "Dr. Anderson specializes in artificial intelligence and machine learning. With over 20 years of experience in academia and industry, he has published more than 50 research papers and holds several patents in deep learning algorithms. His current research focuses on ethical AI and explainable machine learning systems."
    },
    {
      name: "Dr. Sarah Mitchell",
      title: "Associate Professor of Software Engineering",
      image: faculty2,
      email: "s.mitchell@university.edu",
      bio: "Dr. Mitchell's expertise lies in software architecture and systems design. She previously worked as a senior architect at major tech companies and brings extensive industry experience to the classroom. Her research interests include cloud computing, microservices, and DevOps practices."
    },
    {
      name: "Dr. Michael Chen",
      title: "Assistant Professor of Cybersecurity",
      image: faculty3,
      email: "m.chen@university.edu",
      bio: "Dr. Chen is an expert in network security and cryptography. His research focuses on developing secure communication protocols and defending against cyber threats. Before joining academia, he worked as a security consultant for government agencies and Fortune 500 companies."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Our Faculty</h1>
            <p className="text-xl max-w-3xl">
              Learn from distinguished educators and researchers who are leaders in their fields 
              and dedicated to your success.
            </p>
          </div>
        </section>

        {/* Faculty Introduction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">World-Class Educators</h2>
              <p className="text-lg text-muted-foreground">
                Our faculty members combine deep academic knowledge with real-world experience. 
                They're not just teachers—they're mentors, researchers, and industry experts committed 
                to helping you achieve your goals. With small class sizes and an open-door policy, 
                you'll have unprecedented access to guidance and support throughout your academic journey.
              </p>
            </div>

            {/* Faculty Grid */}
            <div className="space-y-12">
              {facultyMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-[300px_1fr] gap-6">
                      <div className="bg-section-bg p-8 flex flex-col items-center justify-center">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-48 h-48 rounded-full object-cover mb-4 shadow-md"
                        />
                        <h3 className="text-2xl font-bold text-center mb-2">{member.name}</h3>
                        <p className="text-primary font-medium text-center mb-3">{member.title}</p>
                        <a 
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Mail size={16} />
                          {member.email}
                        </a>
                      </div>
                      <div className="p-8 flex items-center">
                        <div>
                          <h4 className="text-xl font-semibold mb-4 text-primary">About</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {member.bio}
                          </p>
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
        <section className="py-16 bg-section-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8">Beyond the Classroom</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary mb-2">15:1</div>
                    <p className="text-muted-foreground">Student-Faculty Ratio</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary mb-2">98%</div>
                    <p className="text-muted-foreground">Have Industry Experience</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-primary mb-2">200+</div>
                    <p className="text-muted-foreground">Research Publications</p>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-12 text-center">
                <p className="text-lg text-muted-foreground mb-4">
                  Our faculty are actively engaged in cutting-edge research, publish regularly in top-tier 
                  journals, and maintain strong connections with industry leaders. They bring the latest 
                  developments in computer science directly into the classroom, ensuring you're learning 
                  the most relevant and up-to-date material.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Faculty;
