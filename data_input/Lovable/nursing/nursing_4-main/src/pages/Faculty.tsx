import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";
import faculty1 from "@/assets/faculty1.jpg";
import faculty2 from "@/assets/faculty2.jpg";
import faculty3 from "@/assets/faculty3.jpg";

const Faculty = () => {
  const facultyMembers = [
    {
      image: faculty1,
      name: "Dr. Emily Rodriguez, PhD, RN",
      title: "Program Director & Associate Professor",
      bio: "Dr. Rodriguez brings over 20 years of nursing experience, including 15 years in critical care and 10 years in nursing education. She holds a PhD in Nursing Science and is nationally recognized for her research in patient safety and quality improvement. Dr. Rodriguez is passionate about developing the next generation of nurse leaders and maintains active clinical practice to stay connected to bedside nursing.",
      email: "e.rodriguez@university.edu",
      specializations: ["Critical Care", "Patient Safety", "Leadership Development"],
    },
    {
      image: faculty2,
      name: "Professor Michael Chen, MSN, RN, CNE",
      title: "Clinical Coordinator & Assistant Professor",
      bio: "Professor Chen has dedicated his 18-year career to nursing education and pediatric care. As a Certified Nurse Educator (CNE), he oversees all clinical placements and ensures students receive diverse, high-quality clinical experiences. His expertise in simulation-based learning has transformed our clinical skills laboratories into state-of-the-art learning environments. Professor Chen is known for his innovative teaching methods and unwavering support of student success.",
      email: "m.chen@university.edu",
      specializations: ["Pediatric Nursing", "Simulation Education", "Clinical Assessment"],
    },
    {
      image: faculty3,
      name: "Dr. Margaret Thompson, DNP, RN, FNP-BC",
      title: "Senior Faculty & Community Health Specialist",
      bio: "Dr. Thompson earned her Doctor of Nursing Practice (DNP) with a focus on community health and health disparities. With 25 years of experience spanning public health nursing, family practice, and academia, she brings a wealth of real-world knowledge to the classroom. Dr. Thompson's research focuses on improving healthcare access for underserved populations. She maintains an active practice as a Family Nurse Practitioner and serves on multiple community health boards.",
      email: "m.thompson@university.edu",
      specializations: ["Community Health", "Health Equity", "Family Practice"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Page Header */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Faculty</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn from experienced nurse educators who are dedicated to your success
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our distinguished faculty members are accomplished nurses, researchers, and educators who bring
              decades of combined clinical experience to the classroom. They are committed to providing
              personalized mentorship and creating an engaging learning environment that prepares students
              for excellence in nursing practice.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Profiles */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {facultyMembers.map((member, index) => (
              <Card key={index} className="shadow-medium hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="grid md:grid-cols-[300px_1fr] gap-8">
                    {/* Faculty Image */}
                    <div className="flex flex-col items-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-64 h-64 rounded-lg object-cover shadow-soft mb-4"
                      />
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <a
                          href={`mailto:${member.email}`}
                          className="text-sm hover:text-primary transition-colors"
                        >
                          {member.email}
                        </a>
                      </div>
                    </div>

                    {/* Faculty Details */}
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">{member.name}</h2>
                      <p className="text-primary font-semibold mb-4">{member.title}</p>
                      
                      <div className="mb-4">
                        <h3 className="font-semibold text-foreground mb-2">Areas of Expertise</h3>
                        <div className="flex flex-wrap gap-2">
                          {member.specializations.map((spec, specIndex) => (
                            <Badge key={specIndex} variant="secondary">
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Biography</h3>
                        <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
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
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
              Our Commitment to Excellence
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-3 text-foreground">Student-Centered Teaching</h3>
                  <p className="text-muted-foreground text-sm">
                    Our faculty employ evidence-based teaching strategies that accommodate diverse learning
                    styles. With a 12:1 student-faculty ratio, every student receives individualized attention
                    and support throughout their academic journey.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-3 text-foreground">Active Clinical Practice</h3>
                  <p className="text-muted-foreground text-sm">
                    Our faculty members maintain active clinical practice alongside their teaching roles,
                    ensuring that classroom instruction reflects current healthcare trends, technologies,
                    and best practices from real-world settings.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-3 text-foreground">Mentorship & Advising</h3>
                  <p className="text-muted-foreground text-sm">
                    Every student is assigned a faculty advisor who provides academic guidance, career
                    counseling, and personal support. Our open-door policy encourages students to connect
                    with faculty beyond scheduled class times.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-3 text-foreground">Research & Scholarship</h3>
                  <p className="text-muted-foreground text-sm">
                    Our faculty are active researchers and scholars who contribute to advancing nursing
                    knowledge. Students are encouraged to participate in faculty research projects and
                    present at regional and national conferences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Faculty;
