import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";

const facultyMembers = [
  {
    name: "Dr. Jennifer Williams",
    title: "Program Director & Professor",
    image: faculty1,
    email: "j.williams@university.edu",
    bio: "Dr. Williams brings over 20 years of nursing experience, including 15 years in critical care and 8 years in nursing education. She holds a Ph.D. in Nursing Education from Johns Hopkins University and is certified in Critical Care Nursing (CCRN). Her research focuses on simulation-based learning and clinical competency development. Dr. Williams has published numerous peer-reviewed articles and presents regularly at national nursing conferences.",
  },
  {
    name: "Prof. Michael Thompson",
    title: "Associate Professor, Medical-Surgical Nursing",
    image: faculty2,
    email: "m.thompson@university.edu",
    bio: "Professor Thompson has 18 years of clinical nursing experience in medical-surgical and emergency departments. He earned his Master of Science in Nursing from the University of Pennsylvania and is board-certified in Medical-Surgical Nursing (RN-BC). His teaching expertise includes pharmacology, pathophysiology, and adult health nursing. Professor Thompson is passionate about mentoring students and has received multiple teaching excellence awards.",
  },
  {
    name: "Dr. Sarah Martinez",
    title: "Assistant Professor, Maternal & Child Health",
    image: faculty3,
    email: "s.martinez@university.edu",
    bio: "Dr. Martinez specializes in maternal and child health nursing with 12 years of clinical experience in labor and delivery, postpartum care, and neonatal intensive care. She holds a Doctor of Nursing Practice (DNP) from Duke University and is certified as a Neonatal Nurse Practitioner (NNP-BC). Her research interests include maternal mental health and family-centered care. Dr. Martinez is actively involved in community health initiatives supporting new mothers.",
  },
  {
    name: "Prof. David Lee",
    title: "Assistant Professor, Community Health Nursing",
    image: faculty2,
    email: "d.lee@university.edu",
    bio: "Professor Lee has extensive experience in community and public health nursing, having worked with underserved populations for over 15 years. He earned his Master of Public Health and Master of Science in Nursing from Columbia University. His clinical expertise includes health promotion, disease prevention, and health equity. Professor Lee coordinates our community health partnerships and leads service-learning initiatives that connect students with local healthcare organizations.",
  },
  {
    name: "Dr. Emily Chen",
    title: "Associate Professor, Mental Health Nursing",
    image: faculty1,
    email: "e.chen@university.edu",
    bio: "Dr. Chen is a board-certified Psychiatric-Mental Health Nurse Practitioner (PMHNP-BC) with 16 years of experience in psychiatric nursing and mental health care. She holds a Ph.D. in Nursing Science from the University of Washington. Her research focuses on mental health stigma reduction and integrative approaches to psychiatric care. Dr. Chen has developed innovative curriculum materials for mental health nursing education and advocates for mental health awareness in healthcare settings.",
  },
  {
    name: "Prof. Robert Anderson",
    title: "Clinical Instructor, Fundamentals of Nursing",
    image: faculty2,
    email: "r.anderson@university.edu",
    bio: "Professor Anderson brings 14 years of diverse clinical nursing experience across medical-surgical, geriatrics, and rehabilitation settings. He earned his Master of Science in Nursing from New York University with a focus on nursing education. Professor Anderson specializes in teaching fundamental nursing skills and health assessment. His patient-centered teaching approach emphasizes hands-on learning in our state-of-the-art simulation laboratories, helping students build confidence before clinical rotations.",
  },
];

export default function Faculty() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our Faculty
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Learn from experienced nursing professionals dedicated to your success
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our distinguished faculty members are experienced registered nurses, nurse practitioners, and healthcare professionals who bring decades of combined clinical expertise to the classroom. They are committed to providing exceptional education, mentorship, and support to help you achieve your nursing career goals.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {facultyMembers.map((member, index) => (
              <Card key={index} className="border-border overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Image Section */}
                    <div className="lg:col-span-1">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover min-h-[300px]"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-2 p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mb-4">
                        {member.title}
                      </p>
                      
                      <div className="flex items-center space-x-2 mb-6 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <a
                          href={`mailto:${member.email}`}
                          className="hover:text-primary transition-colors"
                        >
                          {member.email}
                        </a>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Learn from the Best?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our faculty members are here to guide you through your nursing education journey. Connect with us to learn more about mentorship opportunities and how we can support your academic success.
          </p>
        </div>
      </section>
    </>
  );
}
