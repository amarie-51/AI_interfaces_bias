import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Maria Rodriguez",
      title: "Professor of Clinical Psychology",
      image: faculty1,
      email: "m.rodriguez@university.edu",
      phone: "(555) 123-4501",
      bio: "Dr. Rodriguez is a licensed clinical psychologist with over 20 years of experience in cognitive-behavioral therapy and anxiety disorders. She has published extensively on evidence-based treatments for PTSD and leads the university's trauma research lab. Her teaching focuses on clinical assessment and psychotherapy techniques."
    },
    {
      name: "Dr. Michael Thompson",
      title: "Professor of Developmental Psychology",
      image: faculty2,
      email: "m.thompson@university.edu",
      phone: "(555) 123-4502",
      bio: "Dr. Thompson's research examines cognitive development across the lifespan, with particular emphasis on executive function and memory in childhood and aging. He has received numerous teaching awards and directs the Developmental Psychology Lab. His work has been funded by the National Science Foundation and published in leading journals."
    },
    {
      name: "Dr. Aisha Patel",
      title: "Associate Professor of Social Psychology",
      image: faculty3,
      email: "a.patel@university.edu",
      phone: "(555) 123-4503",
      bio: "Dr. Patel specializes in intergroup relations, prejudice reduction, and cultural psychology. Her innovative research on diversity interventions has informed policies at educational institutions nationwide. She mentors undergraduate researchers and teaches courses on social cognition and multicultural psychology."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Faculty</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Learn from distinguished scholars and experienced practitioners who are dedicated to your academic 
            and professional success. Our faculty are leaders in their fields, combining cutting-edge research 
            with exceptional teaching.
          </p>
        </div>
      </section>

      {/* Faculty Members */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12 max-w-5xl mx-auto">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="border-none shadow-[var(--shadow-elegant)] hover:shadow-2xl transition-shadow overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Image */}
                    <div className="md:col-span-1">
                      <img
                        src={faculty.image}
                        alt={`${faculty.name} - ${faculty.title}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="md:col-span-2 p-6">
                      <h2 className="text-2xl font-bold text-foreground mb-1">{faculty.name}</h2>
                      <p className="text-lg text-primary font-semibold mb-4">{faculty.title}</p>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">{faculty.bio}</p>
                      
                      {/* Contact Info */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Mail className="h-4 w-4 text-primary" />
                          <a 
                            href={`mailto:${faculty.email}`}
                            className="hover:text-primary transition-colors"
                          >
                            {faculty.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="h-4 w-4 text-primary" />
                          <a 
                            href={`tel:${faculty.phone.replace(/\D/g, '')}`}
                            className="hover:text-primary transition-colors"
                          >
                            {faculty.phone}
                          </a>
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

      {/* Join Our Team */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-none shadow-[var(--shadow-card)] bg-gradient-to-br from-card to-secondary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Academic Community</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our faculty members are actively engaged in research, publishing, and professional service. 
                They bring real-world expertise into the classroom and provide mentorship to help students 
                achieve their academic and career goals.
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Office Hours:</strong> All faculty maintain regular office hours 
                and are committed to student accessibility. Individual appointments are available by request.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
