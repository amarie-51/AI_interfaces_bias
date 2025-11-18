import { Mail, Linkedin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

interface FacultyPageProps {
  onOpenModal: (type: "general" | "visit" | "info") => void;
}

export function FacultyPage({ onOpenModal }: FacultyPageProps) {
  const faculty = [
    {
      name: "Dr. Patricia Anderson",
      title: "Program Director & Professor",
      image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MXx8fHwxNzYzNDY5NDU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      credentials: "PhD, RN, CNE, FAAN",
      bio: "Dr. Anderson brings over 25 years of nursing experience to her role as Program Director. She has published extensively in nursing education journals and is a nationally recognized expert in evidence-based practice. Her research focuses on innovative teaching strategies in nursing education and clinical competency development.",
      email: "p.anderson@university.edu",
      specialization: "Nursing Education, Evidence-Based Practice",
    },
    {
      name: "Dr. Michael Chen",
      title: "Associate Professor",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwaHlzaWNpYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM0NzkyOTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      credentials: "DNP, RN, ACNP-BC",
      bio: "Dr. Chen is board-certified as an Acute Care Nurse Practitioner with extensive experience in critical care and emergency nursing. He teaches advanced pathophysiology and clinical assessment, bringing real-world clinical expertise to the classroom. His research interests include sepsis management and early warning systems in acute care.",
      email: "m.chen@university.edu",
      specialization: "Critical Care, Advanced Practice Nursing",
    },
    {
      name: "Dr. Jennifer Williams",
      title: "Associate Professor",
      image: "https://images.unsplash.com/photo-1757125736482-328a3cdd9743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZSUyMGVkdWNhdG9yJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzQ3OTI5MHww&ixlib=rb-4.1.0&q=80&w=1080",
      credentials: "PhD, RN, CNM",
      bio: "Dr. Williams is a certified nurse-midwife who has dedicated her career to maternal-child health. She coordinates our maternal-newborn nursing courses and clinical rotations. Her research focuses on reducing maternal health disparities and improving outcomes for underserved populations. She has received multiple teaching excellence awards.",
      email: "j.williams@university.edu",
      specialization: "Maternal-Child Health, Community Health",
    },
    {
      name: "Dr. Robert Martinez",
      title: "Assistant Professor",
      image: "https://images.unsplash.com/photo-1758685734511-4f49ce9a382b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzb3IlMjB0ZWFjaGVyJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzQ3OTI4OXww&ixlib=rb-4.1.0&q=80&w=1080",
      credentials: "DNP, RN, PMHNP-BC",
      bio: "Dr. Martinez is a board-certified Psychiatric-Mental Health Nurse Practitioner specializing in mental health and substance abuse treatment. He teaches psychiatric nursing and leads innovative initiatives integrating mental health awareness throughout the curriculum. His clinical practice focuses on trauma-informed care and cultural competency.",
      email: "r.martinez@university.edu",
      specialization: "Psychiatric-Mental Health, Trauma-Informed Care",
    },
    {
      name: "Dr. Sarah Thompson",
      title: "Assistant Professor & Simulation Coordinator",
      image: "https://images.unsplash.com/photo-1576894051889-983bd22bc012?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZmFjdWx0eSUyMHN0YWZmfGVufDF8fHx8MTc2MzQ3OTI5MXww&ixlib=rb-4.1.0&q=80&w=1080",
      credentials: "PhD, RN, CHSE",
      bio: "Dr. Thompson oversees our state-of-the-art simulation laboratory and integrates high-fidelity simulation experiences throughout the curriculum. She is a certified healthcare simulation educator with expertise in debriefing techniques and assessment methods. Her research examines the impact of simulation on clinical competency and student confidence.",
      email: "s.thompson@university.edu",
      specialization: "Simulation Education, Pediatric Nursing",
    },
    {
      name: "Professor Lisa Johnson",
      title: "Clinical Instructor",
      image: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3R1ZGVudCUyMGRpdmVyc2V8ZW58MXx8fHwxNzYzNDc5Mjg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      credentials: "MSN, RN, CCRN",
      bio: "Professor Johnson brings 20 years of bedside nursing experience to her role as a clinical instructor. She is board-certified in critical care nursing and supervises students during their medical-surgical and critical care rotations. Her passion is helping students develop clinical judgment and confidence in patient care settings.",
      email: "l.johnson@university.edu",
      specialization: "Medical-Surgical Nursing, Clinical Education",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4">Our Faculty</h1>
          <p className="text-xl max-w-3xl">
            Learn from experienced nursing educators and practitioners who are committed to your success
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Expert Educators, Compassionate Mentors</h2>
          <p className="text-gray-700 mb-4">
            Our faculty members are accomplished scholars, researchers, and practitioners who bring a wealth of real-world experience to the classroom. With advanced degrees and specialized certifications, they are dedicated to preparing the next generation of nursing leaders.
          </p>
          <p className="text-gray-700">
            Beyond their academic credentials, our faculty are passionate mentors who invest in student success through personalized guidance, innovative teaching methods, and a commitment to excellence in nursing education.
          </p>
        </div>
      </section>

      {/* Faculty Directory */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faculty.map((member, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-sm overflow-hidden ${
                  index % 2 === 0 ? "" : ""
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  {/* Photo and Contact */}
                  <div className="lg:col-span-1">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 lg:h-80 object-cover rounded-lg mb-4"
                    />
                    <div className="space-y-2">
                      <h3 className="text-gray-900">{member.name}</h3>
                      <p className="text-blue-600">{member.title}</p>
                      <p className="text-gray-600">{member.credentials}</p>
                      <div className="pt-4 space-y-2">
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          <Mail className="h-4 w-4 mr-2" />
                          <span>{member.email}</span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          <Linkedin className="h-4 w-4 mr-2" />
                          <span>LinkedIn Profile</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Bio and Specialization */}
                  <div className="lg:col-span-2">
                    <div className="mb-4">
                      <h4 className="text-gray-900 mb-2">About</h4>
                      <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-2">Areas of Expertise</h4>
                      <p className="text-gray-600">{member.specialization}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Faculty Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">Hold Advanced Degrees (PhD or DNP)</p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 mb-2">15+ Years</div>
              <p className="text-gray-600">Average Clinical Experience</p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Published Research Articles</p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 mb-2">Multiple</div>
              <p className="text-gray-600">National Teaching Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Learn from the Best</h2>
          <p className="text-xl mb-8">
            Join a program where expert faculty members are dedicated to your academic and professional success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => onOpenModal("general")}
              className="bg-white text-blue-900 hover:bg-gray-100"
            >
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onOpenModal("visit")}
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
