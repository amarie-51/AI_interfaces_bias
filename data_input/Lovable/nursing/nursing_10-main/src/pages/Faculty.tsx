import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";

const Faculty = () => {
  const facultyMembers = [
    {
      image: faculty1,
      name: "Dr. Michael Anderson",
      title: "Program Director & Professor",
      credentials: "PhD, RN, CNE",
      bio: "Dr. Anderson brings over 25 years of nursing experience and educational leadership to our program. His research focuses on innovative teaching methods in nursing education and improving clinical outcomes through evidence-based practice. He has published extensively in peer-reviewed journals and presents regularly at national nursing conferences.",
      email: "m.anderson@university.edu",
      specialization: "Nursing Education, Critical Care",
    },
    {
      image: faculty2,
      name: "Dr. James Rodriguez",
      title: "Associate Professor",
      credentials: "DNP, RN, ACNP-BC",
      bio: "Dr. Rodriguez specializes in acute care nursing and serves as our clinical coordinator. With a Doctor of Nursing Practice degree and board certification as an Acute Care Nurse Practitioner, he bridges the gap between advanced practice and nursing education. His expertise includes simulation-based learning and clinical skills development.",
      email: "j.rodriguez@university.edu",
      specialization: "Acute Care, Clinical Practice",
    },
    {
      image: faculty3,
      name: "Prof. Rebecca Thompson",
      title: "Assistant Professor",
      credentials: "MSN, RN, CNM",
      bio: "Professor Thompson is a certified nurse-midwife who teaches our maternal-child health courses. She has extensive clinical experience in women's health and obstetrics, and is passionate about preparing students for compassionate, family-centered care. She also coordinates our community health partnerships and clinical placements.",
      email: "r.thompson@university.edu",
      specialization: "Maternal-Child Health, Women's Health",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Distinguished Faculty</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from experienced educators and practitioners who are dedicated to your success. 
            Our faculty bring decades of combined clinical experience and academic expertise to prepare 
            you for a rewarding nursing career.
          </p>
        </section>

        {/* Faculty Profiles */}
        <section className="space-y-12">
          {facultyMembers.map((faculty, index) => (
            <Card key={faculty.name} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-start`}>
                  {/* Photo */}
                  <div className="w-full md:w-1/3 flex-shrink-0">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <h2 className="text-3xl font-bold mb-2">{faculty.name}</h2>
                      <p className="text-lg text-primary font-semibold">{faculty.title}</p>
                      <p className="text-muted-foreground">{faculty.credentials}</p>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-semibold mb-1">Areas of Specialization</h3>
                      <p className="text-muted-foreground">{faculty.specialization}</p>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {faculty.bio}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <a
                        href={`mailto:${faculty.email}`}
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <Mail size={18} />
                        <span className="text-sm">{faculty.email}</span>
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                        aria-label={`${faculty.name} LinkedIn profile`}
                      >
                        <Linkedin size={18} />
                        <span className="text-sm">LinkedIn Profile</span>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Additional Info */}
        <section className="mt-16 bg-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Academic Community</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our faculty are committed to mentoring students through their academic journey. 
            With a 15:1 student-faculty ratio, you'll receive personalized attention and guidance 
            every step of the way.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
          >
            Contact us to learn more about our faculty →
          </a>
        </section>
      </div>
    </div>
  );
};

export default Faculty;
