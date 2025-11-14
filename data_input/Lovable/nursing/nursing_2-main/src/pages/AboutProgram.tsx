import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Briefcase, GraduationCap, Calendar } from "lucide-react";
import classroomImage from "@/assets/about-classroom.jpg";

const AboutProgram = () => {
  const learningOutcomes = [
    "Apply evidence-based practice to patient care across diverse healthcare settings",
    "Demonstrate clinical competence in assessment, diagnosis, and intervention",
    "Communicate effectively with patients, families, and interprofessional teams",
    "Integrate leadership principles and professional ethics into nursing practice",
    "Utilize critical thinking and clinical reasoning to make sound clinical judgments",
    "Advocate for health promotion and disease prevention in communities",
  ];

  const curriculumByYear = [
    {
      year: "Year 1",
      courses: ["Anatomy & Physiology", "Introduction to Nursing", "Health Assessment", "Pharmacology I", "Microbiology"],
    },
    {
      year: "Year 2",
      courses: ["Medical-Surgical Nursing I", "Mental Health Nursing", "Pharmacology II", "Pathophysiology", "Clinical Practice I"],
    },
    {
      year: "Year 3",
      courses: ["Medical-Surgical Nursing II", "Maternal-Child Nursing", "Pediatric Nursing", "Community Health", "Clinical Practice II"],
    },
    {
      year: "Year 4",
      courses: ["Critical Care Nursing", "Leadership in Nursing", "Evidence-Based Practice", "Clinical Capstone", "NCLEX Preparation"],
    },
  ];

  const careerOpportunities = [
    "Registered Nurse (Hospital)",
    "ICU/Critical Care Nurse",
    "Emergency Department Nurse",
    "Pediatric Nurse",
    "Community Health Nurse",
    "Nurse Educator",
    "Case Manager",
    "Nurse Administrator",
  ];

  const reasons = [
    {
      icon: GraduationCap,
      title: "Nationally Accredited",
      description: "CCNE accredited program recognized for excellence in nursing education",
    },
    {
      icon: CheckCircle,
      title: "High Success Rate",
      description: "98% NCLEX-RN pass rate and 95% graduate employment within 6 months",
    },
    {
      icon: Briefcase,
      title: "Clinical Excellence",
      description: "Partner with leading healthcare facilities for diverse clinical experiences",
    },
    {
      icon: Calendar,
      title: "Flexible Options",
      description: "Full-time and part-time study options to fit your schedule",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Bachelor of Science in Nursing</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A comprehensive program designed to prepare compassionate, competent nurses for diverse healthcare environments
          </p>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Our Program</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Our Bachelor of Science in Nursing program combines rigorous academic coursework with extensive hands-on clinical experience. You'll learn from expert faculty, develop critical thinking skills, and gain the confidence needed to excel in today's complex healthcare environment.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The curriculum is designed to meet the evolving needs of healthcare, emphasizing patient-centered care, interprofessional collaboration, and evidence-based practice. Our graduates are well-prepared to pass the NCLEX-RN and launch successful nursing careers.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={classroomImage}
                alt="Nursing classroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-20 bg-soft-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Program Details</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">Duration</p>
                <p className="text-2xl font-bold text-primary">4 Years</p>
                <p className="text-sm text-muted-foreground mt-2">Full-time</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">Degree</p>
                <p className="text-2xl font-bold text-primary">BSN</p>
                <p className="text-sm text-muted-foreground mt-2">Bachelor of Science</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">Credits</p>
                <p className="text-2xl font-bold text-primary">120</p>
                <p className="text-sm text-muted-foreground mt-2">Semester hours</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">Study Mode</p>
                <p className="text-2xl font-bold text-primary">On-Campus</p>
                <p className="text-sm text-muted-foreground mt-2">With clinical rotations</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Learning Outcomes</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Upon completion of the BSN program, graduates will be able to:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {learningOutcomes.map((outcome, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <p className="text-muted-foreground">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-soft-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Curriculum by Year</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {curriculumByYear.map((year) => (
              <Card key={year.year} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-4">{year.year}</h3>
                  <ul className="space-y-2">
                    {year.courses.map((course, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{course}</span>
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Career Opportunities</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Our BSN graduates pursue diverse and rewarding careers across the healthcare spectrum
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {careerOpportunities.map((career, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <Briefcase className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-medium text-sm">{career}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-soft-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Program?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason) => (
              <div key={reason.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <reason.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutProgram;
