import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";
import faculty1 from "@/assets/faculty1.jpg";
import faculty2 from "@/assets/faculty2.jpg";
import faculty3 from "@/assets/faculty3.jpg";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Jennifer Martinez",
      title: "Program Director, Associate Professor",
      image: faculty1,
      email: "j.martinez@university.edu",
      bio: "Dr. Martinez has over 20 years of experience in nursing education and clinical practice. She specializes in medical-surgical nursing and evidence-based practice. Her research focuses on improving patient outcomes through nurse-led interventions. Dr. Martinez earned her PhD in Nursing from Johns Hopkins University and is passionate about mentoring the next generation of nursing leaders."
    },
    {
      name: "Dr. Robert Thompson",
      title: "Associate Professor of Nursing",
      image: faculty2,
      email: "r.thompson@university.edu",
      bio: "Dr. Thompson brings extensive emergency and critical care nursing experience to the classroom. With 15 years in the ER before transitioning to academia, he teaches advanced clinical skills and critical care nursing. His research interests include trauma care and emergency preparedness. Dr. Thompson holds a DNP from Yale University and maintains active clinical practice at a local teaching hospital."
    },
    {
      name: "Dr. Patricia Lee",
      title: "Assistant Professor, Clinical Coordinator",
      image: faculty3,
      email: "p.lee@university.edu",
      bio: "Dr. Lee coordinates all clinical placements and oversees simulation lab activities. She has 12 years of experience in maternal-child health and pediatric nursing. Her teaching philosophy emphasizes hands-on learning and cultural competency in patient care. Dr. Lee completed her PhD at the University of Pennsylvania and has published extensively on maternal health disparities and pediatric care innovations."
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-6 text-foreground">Meet Our Faculty</h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            Learn from experienced nursing professionals dedicated to your academic and professional success
          </p>
        </div>
      </section>

      {/* Faculty Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-muted-foreground">
              Our faculty members are accomplished nursing professionals who bring decades of combined clinical experience and academic expertise to the classroom. They are committed to providing personalized mentorship, fostering critical thinking, and preparing students for excellence in nursing practice. Each faculty member maintains active involvement in clinical practice, research, and professional organizations, ensuring that our curriculum reflects the latest advances in healthcare.
            </p>
          </div>

          {/* Faculty Grid */}
          <div className="space-y-12 max-w-5xl mx-auto">
            {facultyMembers.map((faculty) => (
              <Card key={faculty.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center md:items-start">
                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        className="w-48 h-48 rounded-lg object-cover shadow-md mb-4"
                      />
                      <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-foreground mb-1">{faculty.name}</h3>
                        <p className="text-primary font-medium mb-4">{faculty.title}</p>
                        <div className="flex gap-3 justify-center md:justify-start">
                          <a
                            href={`mailto:${faculty.email}`}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="Email"
                          >
                            <Mail className="h-5 w-5" />
                          </a>
                          <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-muted-foreground leading-relaxed">{faculty.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Committed to Your Success</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Beyond teaching, our faculty members serve as academic advisors, research mentors, and career counselors. They maintain an open-door policy and are dedicated to supporting students throughout their educational journey and beyond.
            </p>
            <p className="text-lg text-muted-foreground">
              Our student-to-faculty ratio of 10:1 ensures personalized attention and meaningful mentorship relationships that extend well into your professional career.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
