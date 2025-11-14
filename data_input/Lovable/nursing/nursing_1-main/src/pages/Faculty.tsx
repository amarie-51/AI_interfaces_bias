import FacultyCard from "@/components/FacultyCard";
import faculty1 from "@/assets/faculty1.jpg";
import faculty2 from "@/assets/faculty2.jpg";
import faculty3 from "@/assets/faculty3.jpg";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Patricia Williams, DNP, RN",
      title: "Program Director & Associate Professor",
      image: faculty1,
      bio: "Dr. Williams has over 20 years of experience in nursing education and clinical practice. She specializes in adult health nursing and curriculum development. Her research focuses on improving nursing student clinical competency and patient safety outcomes.",
      email: "p.williams@bsnprogram.edu",
    },
    {
      name: "Dr. Robert Anderson, PhD, RN",
      title: "Associate Professor",
      image: faculty2,
      bio: "Dr. Anderson brings 18 years of critical care nursing experience to the classroom. He teaches pathophysiology and advanced health assessment. His research interests include critical care nursing practice and evidence-based interventions in acute care settings.",
      email: "r.anderson@bsnprogram.edu",
    },
    {
      name: "Dr. Lisa Chen, DNP, FNP-BC",
      title: "Assistant Professor",
      image: faculty3,
      bio: "Dr. Chen is a board-certified Family Nurse Practitioner with expertise in community health and primary care. She coordinates our community health nursing courses and clinical placements. Her scholarship focuses on health disparities and culturally competent care.",
      email: "l.chen@bsnprogram.edu",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Faculty</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-95">
            Learn from experienced nursing professionals dedicated to your success
          </p>
        </div>
      </section>

      {/* Faculty Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Expert Educators, Compassionate Mentors
            </h2>
            <p className="text-lg text-muted-foreground">
              Our faculty members are experienced nurses, scholars, and clinicians who bring real-world
              expertise into the classroom. They are committed to fostering critical thinking, clinical
              excellence, and professional development in every student. With diverse specialties and a
              passion for teaching, our faculty provide personalized mentorship and support throughout
              your nursing education journey.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Cards */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {facultyMembers.map((faculty, index) => (
              <FacultyCard key={index} {...faculty} />
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Support Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Beyond the Classroom
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <span className="text-2xl font-bold">1:10</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Faculty-Student Ratio</h3>
                <p className="text-sm text-muted-foreground">
                  Small class sizes ensure personalized attention and mentorship
                </p>
              </div>
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <span className="text-2xl font-bold">24/7</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Academic Support</h3>
                <p className="text-sm text-muted-foreground">
                  Access to tutoring, office hours, and online resources anytime
                </p>
              </div>
              <div className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <span className="text-2xl font-bold">100%</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Career Guidance</h3>
                <p className="text-sm text-muted-foreground">
                  Every student receives individualized career counseling and support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
