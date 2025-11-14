import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, BookOpen, Users } from "lucide-react";
import programImage from "@/assets/program-overview.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our BSN Program</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            A comprehensive nursing education that prepares you for the challenges and rewards of modern healthcare.
          </p>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
              <p className="text-foreground/80 mb-4">
                Our Bachelor of Science in Nursing program is designed to prepare compassionate, competent, and
                evidence-based nursing professionals who are ready to meet the evolving demands of healthcare.
              </p>
              <p className="text-foreground/80 mb-4">
                Through a combination of rigorous classroom instruction, advanced simulation experiences, and extensive
                clinical practice, you'll develop the critical thinking skills and clinical expertise needed to provide
                exceptional patient care across diverse healthcare settings.
              </p>
              <p className="text-foreground/80">
                Our curriculum integrates the latest nursing research, technology, and best practices, ensuring you graduate
                with the knowledge and skills to excel in your nursing career and adapt to the continuously changing
                healthcare landscape.
              </p>
            </div>
            <div>
              <img
                src={programImage}
                alt="Nursing students in simulation lab"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Program Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <Clock className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Duration</h3>
              <p className="text-foreground/70">4 years (8 semesters)</p>
            </Card>
            <Card className="p-6">
              <BookOpen className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Degree</h3>
              <p className="text-foreground/70">Bachelor of Science in Nursing (BSN)</p>
            </Card>
            <Card className="p-6">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Credits</h3>
              <p className="text-foreground/70">120 total credit hours</p>
            </Card>
            <Card className="p-6">
              <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">Study Mode</h3>
              <p className="text-foreground/70">Full-time, on-campus</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Learning Outcomes</h2>
          <p className="text-foreground/70 mb-8 max-w-3xl">
            Upon completion of our BSN program, graduates will be able to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Provide safe, patient-centered care using evidence-based practice and clinical reasoning",
              "Demonstrate professional values including compassion, integrity, and ethical decision-making",
              "Communicate effectively with patients, families, and interprofessional healthcare teams",
              "Utilize healthcare technology and information systems to improve patient outcomes",
              "Apply quality improvement principles and participate in healthcare system enhancement",
              "Integrate nursing science, humanities, and behavioral concepts in professional practice",
              "Lead and collaborate within diverse healthcare settings and communities",
              "Pursue lifelong learning and professional development in nursing practice",
            ].map((outcome, index) => (
              <div key={index} className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground/80">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Curriculum by Year</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Year 1 */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-primary">Year 1</Badge>
                <h3 className="text-xl font-semibold">Foundation & Prerequisites</h3>
              </div>
              <div className="space-y-2 text-foreground/80">
                <p>• Anatomy & Physiology I & II</p>
                <p>• General Chemistry</p>
                <p>• Introduction to Psychology</p>
                <p>• English Composition</p>
                <p>• Microbiology</p>
                <p>• Nutrition</p>
                <p>• Introduction to Nursing Profession</p>
                <p>• Health Assessment</p>
              </div>
            </Card>

            {/* Year 2 */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-primary">Year 2</Badge>
                <h3 className="text-xl font-semibold">Core Nursing Concepts</h3>
              </div>
              <div className="space-y-2 text-foreground/80">
                <p>• Fundamentals of Nursing Practice</p>
                <p>• Pathophysiology</p>
                <p>• Pharmacology I</p>
                <p>• Adult Health Nursing I</p>
                <p>• Research & Evidence-Based Practice</p>
                <p>• Clinical Practicum: Medical-Surgical</p>
                <p>• Statistics for Healthcare</p>
                <p>• Developmental Psychology</p>
              </div>
            </Card>

            {/* Year 3 */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-primary">Year 3</Badge>
                <h3 className="text-xl font-semibold">Advanced Practice & Specialties</h3>
              </div>
              <div className="space-y-2 text-foreground/80">
                <p>• Adult Health Nursing II</p>
                <p>• Maternal-Child Nursing</p>
                <p>• Pediatric Nursing</p>
                <p>• Mental Health Nursing</p>
                <p>• Pharmacology II</p>
                <p>• Clinical Practicum: OB/Pediatrics</p>
                <p>• Clinical Practicum: Psychiatric</p>
                <p>• Community Health Nursing</p>
              </div>
            </Card>

            {/* Year 4 */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-primary">Year 4</Badge>
                <h3 className="text-xl font-semibold">Leadership & Integration</h3>
              </div>
              <div className="space-y-2 text-foreground/80">
                <p>• Critical Care Nursing</p>
                <p>• Nursing Leadership & Management</p>
                <p>• Population Health</p>
                <p>• Professional Issues in Nursing</p>
                <p>• Clinical Practicum: Critical Care</p>
                <p>• Clinical Practicum: Leadership</p>
                <p>• Capstone Project</p>
                <p>• NCLEX Preparation</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Career Opportunities</h2>
          <p className="text-foreground/70 mb-8 max-w-3xl">
            A BSN degree opens doors to diverse nursing career paths across multiple healthcare settings:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Hospital Nursing",
                description: "Work in medical-surgical, ICU, emergency, or specialized units",
              },
              {
                title: "Community Health",
                description: "Public health nursing, school nursing, and community clinics",
              },
              {
                title: "Pediatric Care",
                description: "Children's hospitals, pediatric clinics, and neonatal units",
              },
              {
                title: "Women's Health",
                description: "Labor & delivery, postpartum care, and reproductive health",
              },
              {
                title: "Mental Health",
                description: "Psychiatric hospitals, counseling centers, and behavioral health",
              },
              {
                title: "Advanced Practice",
                description: "Pursue master's degrees for NP, CNS, or nurse anesthesia roles",
              },
            ].map((career, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2">{career.title}</h3>
                <p className="text-sm text-foreground/70">{career.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-primary-foreground/90">First-time NCLEX pass rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">800+</div>
              <p className="text-primary-foreground/90">Clinical hours of hands-on experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-primary-foreground/90">Job placement within 6 months</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
