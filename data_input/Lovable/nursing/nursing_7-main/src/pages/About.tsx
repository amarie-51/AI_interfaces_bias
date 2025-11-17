import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, BookOpen, Users, Award, Briefcase } from "lucide-react";
import aboutImage from "@/assets/about-program.jpg";

const About = () => {
  const programInfo = [
    { icon: Calendar, label: "Duration", value: "4 Years" },
    { icon: GraduationCap, label: "Degree", value: "Bachelor of Science in Nursing" },
    { icon: BookOpen, label: "Credits", value: "120 Credits" },
    { icon: Users, label: "Study Mode", value: "Full-time / Part-time" },
  ];

  const learningOutcomes = [
    "Provide safe, evidence-based, and compassionate patient care across the lifespan",
    "Apply critical thinking and clinical reasoning in complex healthcare situations",
    "Demonstrate leadership skills and professional accountability in nursing practice",
    "Integrate knowledge from liberal arts, sciences, and nursing to promote health",
    "Collaborate effectively within interprofessional healthcare teams",
    "Advocate for patients, families, and communities with diverse backgrounds",
  ];

  const curriculum = [
    {
      year: "Year 1",
      courses: ["Anatomy & Physiology", "Chemistry for Health Sciences", "Introduction to Nursing", "Psychology", "Nutrition", "Medical Terminology"]
    },
    {
      year: "Year 2",
      courses: ["Pathophysiology", "Pharmacology", "Health Assessment", "Microbiology", "Nursing Ethics", "Patient Care Fundamentals"]
    },
    {
      year: "Year 3",
      courses: ["Medical-Surgical Nursing", "Mental Health Nursing", "Maternal-Child Nursing", "Pediatric Nursing", "Community Health", "Research Methods"]
    },
    {
      year: "Year 4",
      courses: ["Critical Care Nursing", "Leadership & Management", "Population Health", "Advanced Clinical Practice", "Capstone Project", "NCLEX Preparation"]
    }
  ];

  const careers = [
    "Registered Nurse (Hospital, Clinic, or Community Settings)",
    "Critical Care Nurse",
    "Pediatric Nurse",
    "Emergency Room Nurse",
    "Nurse Educator",
    "Public Health Nurse",
    "Case Manager",
    "Clinical Research Nurse",
  ];

  const reasons = [
    {
      title: "CCNE Accreditation",
      description: "Our program is fully accredited by the Commission on Collegiate Nursing Education"
    },
    {
      title: "State-of-the-Art Facilities",
      description: "Practice in our advanced simulation labs with the latest medical technology"
    },
    {
      title: "Clinical Partnerships",
      description: "Gain experience at top-tier healthcare facilities throughout the region"
    },
    {
      title: "Small Class Sizes",
      description: "Benefit from personalized attention with a 10:1 student-faculty ratio"
    },
    {
      title: "Strong Alumni Network",
      description: "Join thousands of successful BSN graduates working across the country"
    },
    {
      title: "Career Support",
      description: "Receive job placement assistance and career counseling throughout and after your studies"
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-6 text-foreground">About Our Program</h1>
          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            A comprehensive nursing education that combines academic excellence with hands-on clinical experience
          </p>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Program Overview</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our Bachelor of Science in Nursing (BSN) program prepares students to become compassionate, competent, and ethical nursing professionals. Through a blend of classroom instruction, laboratory practice, and clinical experiences, students develop the knowledge and skills necessary to excel in diverse healthcare settings.
              </p>
              <p className="text-lg text-muted-foreground">
                The program emphasizes evidence-based practice, patient-centered care, and interprofessional collaboration. Our graduates are prepared to pass the NCLEX-RN examination and begin their careers as registered nurses, making a positive impact on patient outcomes and healthcare delivery.
              </p>
            </div>
            <div>
              <img
                src={aboutImage}
                alt="Nursing students studying"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Program Information */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Key Program Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programInfo.map((info) => (
              <Card key={info.label}>
                <CardContent className="pt-6 text-center">
                  <info.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  <p className="font-bold text-lg text-foreground">{info.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Learning Outcomes</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg mb-6 text-muted-foreground">
                  Upon completion of the BSN program, graduates will be able to:
                </p>
                <ul className="space-y-3">
                  {learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Curriculum by Year</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {curriculum.map((year) => (
              <Card key={year.year}>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">{year.year}</h3>
                  <ul className="space-y-2">
                    {year.courses.map((course) => (
                      <li key={course} className="flex items-start gap-2">
                        <BookOpen className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                        <span className="text-foreground">{course}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6 text-foreground">Career Opportunities</h2>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our BSN graduates are prepared for diverse career paths in healthcare. With the growing demand for registered nurses, opportunities abound in various specialties and settings.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {careers.map((career) => (
              <Card key={career}>
                <CardContent className="pt-6 flex items-center gap-3">
                  <Briefcase className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{career}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Program */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Why Choose Our Program?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reasons.map((reason) => (
              <Card key={reason.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
