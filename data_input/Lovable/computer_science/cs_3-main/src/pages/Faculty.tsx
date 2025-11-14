import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";
import faculty4 from "@/assets/faculty-4.jpg";
import faculty5 from "@/assets/faculty-5.jpg";
import faculty6 from "@/assets/faculty-6.jpg";

const Faculty = () => {
  const facultyMembers = [
    {
      image: faculty1,
      name: "Dr. Emily Rodriguez",
      title: "Professor & Department Chair",
      email: "emily.rodriguez@csuniversity.edu",
      phone: "(555) 123-4501",
      bio: "Dr. Rodriguez brings over 20 years of experience in computer science education and research. Her work focuses on artificial intelligence and machine learning, with particular emphasis on ethical AI development. She has published over 50 papers in top-tier conferences and journals."
    },
    {
      image: faculty2,
      name: "Dr. Michael Thompson",
      title: "Associate Professor",
      email: "michael.thompson@csuniversity.edu",
      phone: "(555) 123-4502",
      bio: "Specializing in software engineering and distributed systems, Dr. Thompson has extensive industry experience at major tech companies. He leads our software engineering track and maintains strong connections with industry partners to ensure curriculum relevance."
    },
    {
      image: faculty3,
      name: "Dr. Lisa Chen",
      title: "Assistant Professor",
      email: "lisa.chen@csuniversity.edu",
      phone: "(555) 123-4503",
      bio: "Dr. Chen's research interests include cybersecurity and cryptography. She holds multiple patents in security technologies and actively consults for government agencies on security protocols. Her courses are known for their practical, hands-on approach."
    },
    {
      image: faculty4,
      name: "Dr. James Williams",
      title: "Assistant Professor",
      email: "james.williams@csuniversity.edu",
      phone: "(555) 123-4504",
      bio: "An expert in human-computer interaction and user experience design, Dr. Williams bridges the gap between technology and people. His innovative teaching methods have won several awards, and his students consistently produce outstanding capstone projects."
    },
    {
      image: faculty5,
      name: "Dr. Maria Garcia",
      title: "Associate Professor",
      email: "maria.garcia@csuniversity.edu",
      phone: "(555) 123-4505",
      bio: "Dr. Garcia leads our data science and analytics initiatives. With a background in computational biology, she brings interdisciplinary perspectives to teaching. She has secured multiple NSF grants and mentors numerous undergraduate research projects."
    },
    {
      image: faculty6,
      name: "Dr. Robert Anderson",
      title: "Professor",
      email: "robert.anderson@csuniversity.edu",
      phone: "(555) 123-4506",
      bio: "A pioneer in computer networks and cloud computing, Dr. Anderson has contributed to several Internet standards and protocols. His practical experience includes founding two successful tech startups, bringing valuable entrepreneurial insights to students."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Faculty</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Learn from world-class educators, researchers, and industry experts committed to your success
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((member, index) => (
              <Card key={index} className="border-border shadow-card hover:shadow-hover transition-shadow overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden bg-secondary/20">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.title}</p>
                    <p className="text-muted-foreground text-sm mb-6 line-clamp-4">{member.bio}</p>
                    <div className="space-y-2 border-t border-border pt-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                        <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors truncate">
                          {member.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                        <a href={`tel:${member.phone}`} className="hover:text-primary transition-colors">
                          {member.phone}
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

      {/* Faculty Commitment */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Our Commitment to Excellence</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our faculty members are not just educators—they are active researchers, published authors, and industry consultants who bring real-world experience into the classroom. They are dedicated to mentoring students, fostering innovation, and maintaining the highest standards of academic excellence.
            </p>
            <p className="text-lg text-muted-foreground">
              With an average class size of 25 students and extensive office hours, our faculty ensure personalized attention and support throughout your academic journey.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Faculty;
