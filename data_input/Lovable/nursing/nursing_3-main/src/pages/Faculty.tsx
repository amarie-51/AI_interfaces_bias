import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FacultyCard from "@/components/FacultyCard";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Margaret Thompson",
      title: "Program Director & Professor of Nursing",
      bio: "Dr. Thompson brings over 25 years of nursing experience, including 15 years in nursing education. She holds a PhD in Nursing Science and specializes in curriculum development and adult learning theory. Her research focuses on innovative teaching methods in nursing education.",
      image: faculty1,
      email: "m.thompson@university.edu",
    },
    {
      name: "Dr. Michael Rodriguez",
      title: "Associate Professor of Nursing",
      bio: "Dr. Rodriguez is a certified emergency nurse practitioner with extensive experience in critical care and trauma nursing. He earned his DNP from Johns Hopkins and teaches advanced pathophysiology and critical care nursing. He actively practices in the ER while teaching.",
      image: faculty2,
      email: "m.rodriguez@university.edu",
    },
    {
      name: "Professor Jennifer Williams",
      title: "Clinical Coordinator & Assistant Professor",
      bio: "Professor Williams coordinates all clinical placements and oversees student clinical experiences. With a Master's in Nursing Education and certifications in maternal-child health, she teaches pediatric and OB nursing. She maintains clinical practice in labor and delivery.",
      image: faculty3,
      email: "j.williams@university.edu",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Faculty</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Learn from experienced nurse educators who are passionate about preparing the next generation of healthcare professionals.
          </p>
        </div>
      </section>

      {/* Faculty Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Excellence in Nursing Education</h2>
            <p className="text-foreground/80">
              Our faculty members are accomplished nursing professionals who bring a wealth of clinical expertise,
              research experience, and dedication to student success. They maintain active clinical practice while
              teaching, ensuring you receive the most current and relevant nursing education.
            </p>
          </div>

          {/* Faculty Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty, index) => (
              <FacultyCard key={index} {...faculty} />
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Expertise */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Areas of Faculty Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "Critical Care Nursing",
              "Maternal-Child Health",
              "Community Health",
              "Psychiatric Nursing",
              "Nursing Leadership",
              "Evidence-Based Practice",
              "Simulation Education",
              "Advanced Pathophysiology",
            ].map((area, index) => (
              <div
                key={index}
                className="bg-background p-4 rounded-lg text-center font-medium border border-border hover:shadow-md transition-shadow"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Support */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Committed to Your Success</h2>
            <p className="text-foreground/80 mb-6">
              Our faculty members are dedicated to supporting students throughout their nursing education journey.
              Beyond classroom instruction, they serve as mentors, advisors, and advocates for student success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Academic Advising</h3>
                <p className="text-sm text-foreground/70">
                  Regular one-on-one meetings to discuss academic progress, career goals, and course planning.
                </p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Clinical Mentorship</h3>
                <p className="text-sm text-foreground/70">
                  Personalized guidance during clinical rotations to develop practical nursing skills.
                </p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Research Opportunities</h3>
                <p className="text-sm text-foreground/70">
                  Collaborate with faculty on nursing research projects and evidence-based practice initiatives.
                </p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">Career Counseling</h3>
                <p className="text-sm text-foreground/70">
                  Support in exploring nursing specialties and preparing for professional certification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-lg mb-6 text-primary-foreground/90 max-w-2xl mx-auto">
            Our faculty members maintain regular office hours and are always available to answer your questions
            about the program, nursing career paths, or student life.
          </p>
          <p className="text-primary-foreground/90">
            Contact us at{" "}
            <a href="mailto:nursing@university.edu" className="underline hover:text-primary-foreground">
              nursing@university.edu
            </a>{" "}
            to schedule a meeting.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Faculty;
