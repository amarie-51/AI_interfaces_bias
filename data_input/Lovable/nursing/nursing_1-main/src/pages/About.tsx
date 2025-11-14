import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Clock, Award, BookOpen, Users, Stethoscope } from "lucide-react";
import aboutImage from "@/assets/about-program.jpg";

const About = () => {
  const keyInfo = [
    { icon: Clock, label: "Duration", value: "4 years (8 semesters)" },
    { icon: Award, label: "Degree", value: "Bachelor of Science in Nursing" },
    { icon: BookOpen, label: "Credits", value: "120 credit hours" },
    { icon: Users, label: "Study Mode", value: "Full-time & Part-time options" },
  ];

  const outcomes = [
    "Provide safe, quality, patient-centered care across the lifespan",
    "Apply evidence-based practice and clinical reasoning to nursing decisions",
    "Communicate effectively with patients, families, and healthcare teams",
    "Demonstrate professionalism and ethical practice in all settings",
    "Lead and collaborate within interprofessional healthcare teams",
    "Advocate for patients and promote health equity in diverse communities",
  ];

  const careerPaths = [
    { title: "Registered Nurse (RN)", setting: "Hospitals, clinics, community health" },
    { title: "Pediatric Nurse", setting: "Children's hospitals, pediatric units" },
    { title: "Critical Care Nurse", setting: "ICU, emergency departments" },
    { title: "Public Health Nurse", setting: "Community health centers, schools" },
    { title: "Nurse Educator", setting: "Healthcare facilities, academic institutions" },
    { title: "Advanced Practice (with graduate degree)", setting: "Nurse Practitioner, Clinical Nurse Specialist" },
  ];

  const reasons = [
    {
      title: "CCNE Accredited Excellence",
      description: "Our program is accredited by the Commission on Collegiate Nursing Education, ensuring the highest quality standards.",
    },
    {
      title: "Experienced Faculty",
      description: "Learn from nursing professionals with decades of combined clinical and academic experience.",
    },
    {
      title: "State-of-the-Art Facilities",
      description: "Practice in our advanced simulation labs with high-fidelity mannequins and modern medical equipment.",
    },
    {
      title: "Strong Clinical Partnerships",
      description: "Gain hands-on experience at leading healthcare facilities through our extensive clinical network.",
    },
    {
      title: "High NCLEX Pass Rates",
      description: "Our graduates consistently exceed national averages on the NCLEX-RN licensure examination.",
    },
    {
      title: "Career Support",
      description: "Benefit from dedicated career services, job placement assistance, and alumni networking opportunities.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutImage})` }}
        >
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Program</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-95">
            Comprehensive nursing education that prepares you for a fulfilling healthcare career
          </p>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Program Overview</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Our Bachelor of Science in Nursing (BSN) program is designed to prepare students to become
              skilled, compassionate registered nurses who can meet the evolving healthcare needs of diverse
              communities. Through a combination of classroom instruction, laboratory practice, and supervised
              clinical experiences, students develop the knowledge, skills, and professional values essential
              for nursing practice.
            </p>
            <p className="text-lg text-muted-foreground">
              The curriculum emphasizes evidence-based practice, critical thinking, cultural competence, and
              interprofessional collaboration. Students engage in both simulated and real-world clinical settings,
              gaining experience across various healthcare environments including acute care hospitals, community
              health centers, long-term care facilities, and specialty units.
            </p>
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Program Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {keyInfo.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-semibold text-foreground">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Learning Outcomes</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Upon successful completion of the BSN program, graduates will be able to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Curriculum by Year</h2>
            <Tabs defaultValue="year1" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="year1">Year 1</TabsTrigger>
                <TabsTrigger value="year2">Year 2</TabsTrigger>
                <TabsTrigger value="year3">Year 3</TabsTrigger>
                <TabsTrigger value="year4">Year 4</TabsTrigger>
              </TabsList>
              <TabsContent value="year1" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Foundational Studies</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Anatomy & Physiology I & II</li>
                      <li>• General Chemistry</li>
                      <li>• Introduction to Psychology</li>
                      <li>• English Composition</li>
                      <li>• Introduction to Nursing Profession</li>
                      <li>• Health Assessment & Physical Examination</li>
                      <li>• Nursing Fundamentals & Clinical Lab</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="year2" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Core Nursing Concepts</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Microbiology</li>
                      <li>• Pathophysiology</li>
                      <li>• Pharmacology</li>
                      <li>• Nutrition for Health Professionals</li>
                      <li>• Adult Health Nursing I & Clinical</li>
                      <li>• Psychiatric Mental Health Nursing & Clinical</li>
                      <li>• Research & Evidence-Based Practice</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="year3" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Advanced Clinical Practice</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Adult Health Nursing II & Clinical</li>
                      <li>• Maternal-Newborn Nursing & Clinical</li>
                      <li>• Pediatric Nursing & Clinical</li>
                      <li>• Community Health Nursing & Clinical</li>
                      <li>• Nursing Leadership & Management</li>
                      <li>• Ethics in Healthcare</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="year4" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Professional Integration</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Critical Care Nursing & Clinical</li>
                      <li>• Complex Health Alterations & Clinical</li>
                      <li>• Population Health & Public Policy</li>
                      <li>• Professional Issues in Nursing</li>
                      <li>• Senior Capstone Practicum</li>
                      <li>• NCLEX-RN Preparation</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Career Opportunities</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Graduates of our BSN program pursue diverse and rewarding careers in healthcare:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {careerPaths.map((career, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex gap-3">
                      <Stethoscope className="h-6 w-6 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{career.title}</h4>
                        <p className="text-sm text-muted-foreground">{career.setting}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Program</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                  <p className="opacity-90">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
