import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import faculty1 from "@/assets/faculty1.jpg";
import faculty2 from "@/assets/faculty2.jpg";
import faculty3 from "@/assets/faculty3.jpg";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Robert Mitchell",
      title: "Professor & Department Chair",
      image: faculty1,
      email: "r.mitchell@csuniversity.edu",
      bio: "Dr. Mitchell specializes in artificial intelligence and machine learning. He has published over 50 papers in top-tier conferences and journals. His research focuses on deep learning architectures and their applications in computer vision. Prior to academia, he spent 10 years at leading tech companies developing AI systems.",
    },
    {
      name: "Dr. Emily Carter",
      title: "Associate Professor",
      image: faculty2,
      email: "e.carter@csuniversity.edu",
      bio: "Dr. Carter's research interests include cybersecurity, network protocols, and distributed systems. She leads the Secure Systems Lab and has received multiple NSF grants for her work on securing IoT devices. She teaches courses on network security and ethical hacking, bringing real-world experience from her consulting work with Fortune 500 companies.",
    },
    {
      name: "Dr. James Liu",
      title: "Assistant Professor",
      image: faculty3,
      email: "j.liu@csuniversity.edu",
      bio: "Dr. Liu focuses on software engineering methodologies, cloud computing, and DevOps practices. He earned his Ph.D. from Stanford and previously worked as a senior engineer at major tech firms. His teaching emphasizes industry best practices and agile development, preparing students for modern software development careers.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-hero-gradient-start to-hero-gradient-end text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Faculty</h1>
          <p className="text-xl max-w-3xl text-primary-foreground/90">
            Learn from distinguished educators and researchers who are leaders in their fields and passionate about
            student success.
          </p>
        </div>
      </section>

      {/* Faculty Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">World-Class Educators and Researchers</h2>
            <p className="text-lg text-muted-foreground">
              Our faculty members bring a unique blend of academic excellence and industry experience. They are
              committed to providing personalized mentorship, conducting cutting-edge research, and preparing students
              for successful careers in technology.
            </p>
          </div>

          {/* Faculty Profiles */}
          <div className="space-y-12">
            {facultyMembers.map((member, index) => (
              <Card key={index} className="border-border overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Image */}
                    <div className="lg:col-span-1">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover min-h-[300px]"
                      />
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-2 p-8">
                      <div className="mb-4">
                        <h3 className="text-3xl font-bold text-foreground mb-2">{member.name}</h3>
                        <p className="text-lg text-primary font-semibold mb-4">{member.title}</p>
                        <div className="flex items-center text-muted-foreground">
                          <Mail className="h-4 w-4 mr-2" />
                          <a
                            href={`mailto:${member.email}`}
                            className="hover:text-primary transition-colors"
                          >
                            {member.email}
                          </a>
                        </div>
                      </div>
                      <p className="text-foreground leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-section-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Research Excellence</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground text-center mb-8">
              Our faculty conduct groundbreaking research in various areas of computer science, with opportunities for
              undergraduate students to participate in research projects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Artificial Intelligence & Machine Learning",
                "Cybersecurity & Network Security",
                "Software Engineering & DevOps",
                "Computer Vision & Robotics",
                "Cloud Computing & Distributed Systems",
                "Human-Computer Interaction",
              ].map((area, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="pt-6">
                    <p className="text-foreground font-medium">{area}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Faculty;
