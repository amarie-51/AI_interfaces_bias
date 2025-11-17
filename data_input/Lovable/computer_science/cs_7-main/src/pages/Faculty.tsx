import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Michael Anderson",
      title: "Professor & Department Chair",
      image: faculty1,
      bio: "Dr. Anderson specializes in artificial intelligence and machine learning. With over 20 years of teaching experience and numerous published papers, he leads our research initiatives in deep learning and neural networks. His work has been featured in top-tier conferences including NeurIPS and ICML.",
      email: "m.anderson@university.edu",
    },
    {
      name: "Dr. Sarah Chen",
      title: "Associate Professor",
      image: faculty2,
      bio: "Dr. Chen's research focuses on cybersecurity and network security protocols. She has received multiple NSF grants and collaborates with industry partners on developing secure systems. Prior to academia, she worked as a security engineer at leading tech companies.",
      email: "s.chen@university.edu",
    },
    {
      name: "Dr. Omar Hassan",
      title: "Assistant Professor",
      image: faculty3,
      bio: "Dr. Hassan specializes in software engineering and human-computer interaction. His work on improving developer tools and creating intuitive user interfaces has won several awards. He brings valuable industry experience from his time at major software companies.",
      email: "o.hassan@university.edu",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-hero-start to-hero-end text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Faculty</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Learn from experienced professors who are leaders in their fields and dedicated to 
            student success.
          </p>
        </div>
      </section>

      {/* Faculty Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Expert Educators & Researchers</h2>
            <p className="text-muted-foreground">
              Our faculty members combine deep academic expertise with real-world experience. 
              They are committed to mentoring students and advancing the field through cutting-edge 
              research and industry collaboration.
            </p>
          </div>

          <div className="space-y-12">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[300px,1fr] gap-6">
                    <div className="bg-secondary/30">
                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        className="w-full h-full object-cover min-h-[300px]"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{faculty.name}</h3>
                      <p className="text-accent font-semibold mb-4">{faculty.title}</p>
                      <p className="text-muted-foreground mb-4">{faculty.bio}</p>
                      <a
                        href={`mailto:${faculty.email}`}
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        {faculty.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-accent mb-2">15+</p>
              <p className="text-muted-foreground">Faculty Members</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent mb-2">12:1</p>
              <p className="text-muted-foreground">Student-to-Faculty Ratio</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent mb-2">100+</p>
              <p className="text-muted-foreground">Research Publications</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
