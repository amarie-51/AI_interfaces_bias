import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";

const Faculty = () => {
  const facultyMembers = [
    {
      image: faculty1,
      name: "Dr. Margaret Thompson",
      title: "Program Director & Professor of Nursing",
      bio: "Dr. Thompson brings over 25 years of nursing experience to our program. She holds a PhD in Nursing Education from Johns Hopkins University and specializes in curriculum development and clinical education. Prior to joining academia, she worked as a critical care nurse and nurse manager. Her research focuses on innovative teaching methods and student success in nursing education.",
      email: "m.thompson@university.edu",
    },
    {
      image: faculty2,
      name: "Dr. James Rodriguez",
      title: "Associate Professor of Medical-Surgical Nursing",
      bio: "Dr. Rodriguez earned his DNP from Duke University and has 15 years of experience in medical-surgical and emergency nursing. He is passionate about evidence-based practice and has published extensively on patient safety and quality improvement. His clinical expertise includes trauma care and complex wound management. He serves as the coordinator for our simulation lab program.",
      email: "j.rodriguez@university.edu",
    },
    {
      image: faculty3,
      name: "Dr. Emily Chen",
      title: "Assistant Professor & Clinical Coordinator",
      bio: "Dr. Chen completed her PhD in Nursing Science at the University of Pennsylvania. With 12 years of clinical experience in maternal-child health and pediatrics, she brings real-world insights to the classroom. She coordinates all clinical placements and maintains partnerships with leading healthcare facilities. Her research interests include family-centered care and pediatric pain management.",
      email: "e.chen@university.edu",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Meet Our Faculty
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Learn from experienced nurse educators who are dedicated to your success and passionate about advancing the nursing profession.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our faculty members are accomplished scholars, researchers, and clinicians who bring a wealth of real-world experience to the classroom. They are committed to fostering an engaging learning environment where students can develop the knowledge, skills, and values needed to excel in nursing practice. With advanced degrees and clinical expertise across various specialties, our faculty provide mentorship and guidance throughout your educational journey.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Profiles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="overflow-hidden border-border hover:shadow-lg transition-all duration-300">
                <div className="grid md:grid-cols-[300px,1fr] gap-6">
                  <div className="relative h-[400px] md:h-auto">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="pt-6 md:py-8">
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      {faculty.name}
                    </h2>
                    <p className="text-primary font-medium mb-4">{faculty.title}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {faculty.bio}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4 text-primary" />
                      <a
                        href={`mailto:${faculty.email}`}
                        className="hover:text-primary transition-colors"
                      >
                        {faculty.email}
                      </a>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-12 border border-border">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Questions About Our Faculty?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our faculty members are always happy to connect with prospective students. Feel free to reach out with any questions about the program, courses, or clinical experiences.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
