import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. James Anderson",
      title: "Professor & Department Chair",
      image: faculty1,
      email: "j.anderson@university.edu",
      bio: "Dr. Anderson brings over 20 years of experience in computer science education and research. His expertise includes distributed systems, cloud computing, and software architecture. He has published over 50 peer-reviewed papers and holds several patents in distributed computing. Prior to academia, he worked as a senior architect at major tech companies, bringing real-world industry experience to the classroom.",
    },
    {
      name: "Dr. Maria Santos",
      title: "Associate Professor of Computer Science",
      image: faculty2,
      email: "m.santos@university.edu",
      bio: "Dr. Santos specializes in artificial intelligence, machine learning, and data science. She earned her Ph.D. from MIT and has been instrumental in developing the university's AI curriculum. Her research focuses on ethical AI and explainable machine learning models. She has received multiple teaching awards and actively mentors students in research projects. Dr. Santos regularly collaborates with industry partners on cutting-edge AI applications.",
    },
    {
      name: "Dr. David Chen",
      title: "Assistant Professor of Computer Science",
      image: faculty3,
      email: "d.chen@university.edu",
      bio: "Dr. Chen's research interests include cybersecurity, cryptography, and network security. He completed his doctorate at Stanford University and worked for several years in the cybersecurity industry before joining academia. Dr. Chen teaches courses in information security, ethical hacking, and secure software development. He maintains strong industry connections and helps students secure internships at leading cybersecurity firms.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in">Our Faculty</h1>
            <p className="text-xl opacity-95 max-w-3xl animate-slide-up">
              Learn from experienced professors who are leaders in computer science education and research
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">World-Class Education</h2>
              <p className="text-lg text-muted-foreground">
                Our faculty members are not only accomplished researchers and educators but also 
                dedicated mentors committed to your success. They bring a wealth of industry experience, 
                cutting-edge research, and a passion for teaching that creates an exceptional learning environment.
              </p>
            </div>
          </div>
        </section>

        {/* Faculty Members */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {facultyMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    <div className="lg:col-span-1 aspect-square lg:aspect-auto">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="lg:col-span-2">
                      <CardContent className="p-8">
                        <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                        <p className="text-accent font-semibold mb-4">{member.title}</p>
                        <div className="flex items-center space-x-2 mb-6 text-muted-foreground">
                          <Mail className="h-4 w-4" />
                          <a href={`mailto:${member.email}`} className="hover:text-accent transition-colors">
                            {member.email}
                          </a>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {member.bio}
                        </p>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Faculty Excellence</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our computer science faculty members are actively engaged in cutting-edge research, 
                  regularly publish in top-tier conferences and journals, and maintain strong connections 
                  with industry leaders.
                </p>
                <p>
                  Beyond the classroom, faculty members serve as advisors for student organizations, 
                  supervise capstone projects and research initiatives, and provide mentorship to help 
                  students achieve their academic and career goals.
                </p>
                <p>
                  Students benefit from small class sizes that foster close interaction with faculty, 
                  opportunities to participate in research projects, and personalized guidance throughout 
                  their academic journey.
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
