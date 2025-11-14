import { FacultyCard } from "@/components/FacultyCard";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Elizabeth Thompson",
      title: "Program Director & Professor of Nursing",
      bio: "Dr. Thompson brings over 25 years of nursing experience with expertise in critical care and nursing education. She holds a PhD in Nursing Science and is passionate about developing the next generation of nurse leaders.",
      image: faculty1,
    },
    {
      name: "Dr. James Anderson",
      title: "Associate Professor of Clinical Nursing",
      bio: "With 18 years of emergency department and trauma nursing experience, Dr. Anderson specializes in acute care nursing and simulation-based learning. He holds dual certifications in Emergency and Critical Care Nursing.",
      image: faculty2,
    },
    {
      name: "Professor Maria Rodriguez, MSN, RN",
      title: "Clinical Instructor & Coordinator",
      bio: "Professor Rodriguez has 15 years of clinical nursing experience in pediatrics and maternal-child health. She coordinates our clinical rotations and ensures students receive exceptional hands-on learning experiences.",
      image: faculty3,
    },
    {
      name: "Dr. Robert Chen",
      title: "Assistant Professor of Nursing",
      bio: "Dr. Chen's research focuses on community health and health disparities. With a background in public health nursing, he brings valuable insights into population health and preventive care to the curriculum.",
      image: faculty2,
    },
    {
      name: "Dr. Sarah Mitchell",
      title: "Associate Professor of Nursing",
      bio: "Specializing in mental health nursing and psychiatric care, Dr. Mitchell has worked in both inpatient and community mental health settings. She is committed to reducing stigma and improving mental health care.",
      image: faculty1,
    },
    {
      name: "Professor David Williams, DNP, RN",
      title: "Clinical Assistant Professor",
      bio: "Professor Williams combines clinical expertise in medical-surgical nursing with a passion for teaching. His focus on evidence-based practice helps students bridge the gap between theory and practice.",
      image: faculty2,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Meet Our Faculty</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn from experienced nursing professionals dedicated to your success and professional development
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our faculty members are accomplished nursing professionals who bring extensive clinical experience, 
              advanced degrees, and a genuine passion for teaching. They are committed to providing personalized 
              mentorship and creating an engaging learning environment that prepares you for a successful nursing career.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-12 bg-soft-bg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty) => (
              <FacultyCard key={faculty.name} {...faculty} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Beyond the Classroom</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our faculty members are actively engaged in nursing research, professional organizations, and community 
              service. They publish in peer-reviewed journals, present at conferences, and maintain clinical practice 
              to stay current with the latest developments in healthcare.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With low student-to-faculty ratios, you'll receive individualized attention and mentorship throughout 
              your academic journey. Our open-door policy ensures you always have support when you need it.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
