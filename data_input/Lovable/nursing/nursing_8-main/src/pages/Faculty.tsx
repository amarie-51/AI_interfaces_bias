import { Card, CardContent } from "@/components/ui/card";
import { Mail, GraduationCap } from "lucide-react";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Emily Rodriguez",
      title: "Professor & Program Director",
      image: faculty1,
      email: "e.rodriguez@bsnprogram.edu",
      credentials: "PhD, MSN, RN",
      bio: "Dr. Rodriguez brings over 20 years of nursing experience and educational leadership to our program. She specializes in medical-surgical nursing and curriculum development. Her research focuses on nursing education innovation and clinical competency assessment. Prior to joining academia, she spent 15 years in critical care nursing and has published extensively in peer-reviewed journals.",
    },
    {
      name: "Dr. James Patel",
      title: "Associate Professor",
      image: faculty2,
      email: "j.patel@bsnprogram.edu",
      credentials: "DNP, MSN, RN, CCRN",
      bio: "Dr. Patel is a board-certified critical care nurse with expertise in advanced clinical practice and emergency medicine. He teaches advanced medical-surgical nursing and pharmacology. His clinical practice spans emergency departments and intensive care units, and he maintains an active clinical role while teaching. He is passionate about preparing students for high-acuity nursing environments.",
    },
    {
      name: "Dr. Maria Thompson",
      title: "Assistant Professor",
      image: faculty3,
      email: "m.thompson@bsnprogram.edu",
      credentials: "PhD, MSN, RN, CNE",
      bio: "Dr. Thompson specializes in community health nursing and maternal-child health. She is certified as a nurse educator and brings a wealth of experience from public health and obstetric nursing. Her research interests include health disparities and community-based interventions. She is committed to preparing students for culturally competent care and community health practice.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Our Faculty
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto opacity-90">
            Meet the experienced educators and nursing professionals dedicated to your success
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our faculty members are accomplished nurses, educators, and researchers who bring extensive clinical experience and academic expertise to the classroom. They are committed to fostering student success through mentorship, innovative teaching methods, and evidence-based practice. Each faculty member maintains active involvement in nursing practice and scholarship, ensuring that our curriculum reflects current healthcare trends and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Profiles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="space-y-12 max-w-6xl mx-auto">
            {facultyMembers.map((member, index) => (
              <Card
                key={index}
                className="border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Image Section */}
                  <div className="md:col-span-1">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:col-span-2 p-6">
                    <div className="mb-4">
                      <h2 className="text-2xl font-bold text-foreground mb-1">
                        {member.name}
                      </h2>
                      <p className="text-primary font-semibold mb-2">{member.title}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <GraduationCap size={16} className="text-primary" />
                        <span>{member.credentials}</span>
                      </div>
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        <Mail size={16} />
                        <span>{member.email}</span>
                      </a>
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Biography</h3>
                      <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Faculty Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Faculty Excellence & Support
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Our faculty members hold advanced degrees in nursing and related fields, with many maintaining active clinical practices alongside their teaching responsibilities. This dual commitment ensures that students receive instruction grounded in both theoretical knowledge and real-world application.
                  </p>
                  <p>
                    Faculty are accessible to students through office hours, email communication, and academic advising appointments. They serve as mentors throughout your educational journey, providing guidance on academic matters, career planning, and professional development.
                  </p>
                  <p>
                    Beyond the classroom, our faculty contribute to the nursing profession through research, publications, conference presentations, and service to professional organizations. Students have opportunities to collaborate with faculty on research projects and scholarly activities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
