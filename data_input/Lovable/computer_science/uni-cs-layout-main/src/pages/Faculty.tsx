import { Card } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Emily Chen",
      title: "Professor of Computer Science",
      specialization: "Artificial Intelligence & Machine Learning",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      bio: "Dr. Chen specializes in deep learning and neural networks. She has published over 50 papers in top-tier conferences and led numerous industry-sponsored AI research projects.",
      email: "e.chen@university.edu"
    },
    {
      name: "Dr. Marcus Thompson",
      title: "Associate Professor",
      specialization: "Cybersecurity & Network Systems",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
      bio: "With 15 years of industry experience at leading security firms, Dr. Thompson brings real-world expertise to cybersecurity education and research.",
      email: "m.thompson@university.edu"
    },
    {
      name: "Dr. Sarah Kim",
      title: "Assistant Professor",
      specialization: "Software Engineering & Cloud Computing",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=SarahK",
      bio: "Dr. Kim's research focuses on distributed systems and scalable cloud architectures. She previously worked as a senior engineer at a major cloud provider.",
      email: "s.kim@university.edu"
    },
    {
      name: "Dr. James Rodriguez",
      title: "Professor",
      specialization: "Data Science & Algorithms",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      bio: "An expert in algorithmic complexity and big data analytics, Dr. Rodriguez has consulted for Fortune 500 companies on data-driven decision making.",
      email: "j.rodriguez@university.edu"
    },
    {
      name: "Dr. Amara Patel",
      title: "Associate Professor",
      specialization: "Human-Computer Interaction",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amara",
      bio: "Dr. Patel's work in UX design and accessibility has influenced how we design inclusive technology. She leads our HCI research lab.",
      email: "a.patel@university.edu"
    },
    {
      name: "Dr. David Wu",
      title: "Assistant Professor",
      specialization: "Computer Vision & Robotics",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      bio: "Dr. Wu's research in computer vision has applications in autonomous vehicles and medical imaging. He brings cutting-edge robotics research to the classroom.",
      email: "d.wu@university.edu"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif font-bold text-5xl mb-6">Our Faculty</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Learn from world-class educators and researchers who are passionate about shaping the next generation of computer scientists.
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-[var(--shadow-hover)] transition-shadow">
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <img 
                      src={faculty.image} 
                      alt={faculty.name}
                      className="h-32 w-32 rounded-full bg-muted"
                    />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-serif font-bold text-xl mb-1">{faculty.name}</h3>
                    <p className="text-sm text-primary font-medium mb-2">{faculty.title}</p>
                    <p className="text-sm text-muted-foreground">{faculty.specialization}</p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {faculty.bio}
                  </p>
                  <div className="flex justify-center space-x-4 pt-4 border-t border-border">
                    <a 
                      href={`mailto:${faculty.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a 
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Excellence */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif font-bold text-4xl mb-8 text-center">Faculty Excellence</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Published Research Papers Annually</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15:1</div>
                <p className="text-muted-foreground">Student to Faculty Ratio</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">PhDs from Top Universities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Faculty;
