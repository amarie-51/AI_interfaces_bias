import { Card, CardContent } from "@/components/ui/card";
import { Mail, Award } from "lucide-react";
import faculty1 from "@/assets/faculty1.jpg";
import faculty2 from "@/assets/faculty2.jpg";
import faculty3 from "@/assets/faculty3.jpg";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Robert Anderson",
      title: "Professor of Computer Science, Program Director",
      image: faculty1,
      email: "r.anderson@csuni.edu",
      bio: "Dr. Anderson has over 20 years of experience in computer science education and research. His areas of expertise include artificial intelligence, machine learning, and natural language processing. He has published over 50 peer-reviewed papers and has received multiple teaching excellence awards. Dr. Anderson leads several research projects in AI applications and serves as the program director for the Bachelor's in Computer Science.",
      specializations: ["Artificial Intelligence", "Machine Learning", "Natural Language Processing"],
    },
    {
      name: "Dr. Emily Chen",
      title: "Associate Professor of Software Engineering",
      image: faculty2,
      email: "e.chen@csuni.edu",
      bio: "Dr. Chen brings extensive industry experience from her 10 years at leading tech companies before joining academia. She specializes in software engineering, agile methodologies, and human-computer interaction. Her research focuses on improving software development processes and user experience design. Dr. Chen has won the Excellence in Teaching award three times and actively mentors students in their capstone projects.",
      specializations: ["Software Engineering", "Agile Development", "Human-Computer Interaction"],
    },
    {
      name: "Dr. Michael Thompson",
      title: "Professor of Cybersecurity and Networks",
      image: faculty3,
      email: "m.thompson@csuni.edu",
      bio: "Dr. Thompson is a renowned expert in cybersecurity with 25 years of combined industry and academic experience. He has worked with government agencies and Fortune 500 companies on security solutions. His research interests include network security, cryptography, and ethical hacking. Dr. Thompson directs the Cybersecurity Research Lab and has secured multiple grants for cutting-edge security research. He regularly publishes in top-tier security conferences and journals.",
      specializations: ["Cybersecurity", "Network Security", "Cryptography"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Distinguished Faculty</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95">
            Learn from experienced professors who are leaders in their fields, combining cutting-edge research with exceptional teaching.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-foreground">World-Class Educators</h2>
            <p className="text-lg text-muted-foreground">
              Our faculty members are accomplished researchers, experienced educators, and industry veterans who are passionate about student success. They bring real-world expertise into the classroom and mentor students through innovative projects and research opportunities.
            </p>
          </div>

          {/* Faculty Members */}
          <div className="space-y-12 max-w-5xl mx-auto">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="pt-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {/* Photo */}
                    <div className="md:col-span-1 flex justify-center md:justify-start">
                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        className="w-40 h-40 rounded-lg object-cover shadow-md"
                      />
                    </div>

                    {/* Info */}
                    <div className="md:col-span-3 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-card-foreground mb-1">
                          {faculty.name}
                        </h3>
                        <p className="text-accent font-medium mb-3">{faculty.title}</p>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Mail className="h-4 w-4" />
                          <a
                            href={`mailto:${faculty.email}`}
                            className="hover:text-accent transition-colors"
                          >
                            {faculty.email}
                          </a>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{faculty.bio}</p>

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="h-5 w-5 text-accent" />
                          <h4 className="font-semibold text-card-foreground">Areas of Expertise</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {faculty.specializations.map((spec, idx) => (
                            <span
                              key={idx}
                              className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Join Our Academic Community</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our faculty members are committed to providing personalized attention and mentorship to help you achieve your academic and career goals. They maintain active office hours and are always available to support your learning journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-4xl font-bold text-accent mb-2">20+</p>
                  <p className="text-muted-foreground">Faculty Members</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-4xl font-bold text-accent mb-2">15:1</p>
                  <p className="text-muted-foreground">Student-Faculty Ratio</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-4xl font-bold text-accent mb-2">100+</p>
                  <p className="text-muted-foreground">Research Publications Annually</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
