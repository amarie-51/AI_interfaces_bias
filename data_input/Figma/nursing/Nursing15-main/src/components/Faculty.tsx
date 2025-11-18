import { Card, CardContent } from "./ui/card";
import { Mail, GraduationCap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Faculty() {
  const facultyMembers = [
    {
      name: "Dr. Jennifer Morrison, PhD, RN",
      title: "Program Director & Professor",
      image: "https://images.unsplash.com/photo-1632054226752-b1b40867f7a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYzNDM0NTMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      email: "j.morrison@university.edu",
      bio: "Dr. Morrison has over 25 years of experience in nursing education and practice. She earned her PhD from Johns Hopkins University and specializes in adult-gerontology nursing. Her research focuses on improving patient outcomes in critical care settings. She has published extensively in peer-reviewed journals and has received multiple teaching excellence awards.",
      specialization: "Critical Care & Nursing Education",
    },
    {
      name: "Dr. Michael Chen, DNP, RN, FNP-BC",
      title: "Associate Professor",
      image: "https://images.unsplash.com/photo-1632054224659-280be3239aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzQzODYzNHww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "m.chen@university.edu",
      bio: "Dr. Chen is a board-certified family nurse practitioner with 18 years of combined clinical and academic experience. He received his DNP from Duke University and has worked in various primary care settings. His teaching interests include pharmacology, health assessment, and primary care. He is passionate about preparing students for advanced practice roles.",
      specialization: "Primary Care & Pharmacology",
    },
    {
      name: "Dr. Patricia Williams, PhD, RN, CNE",
      title: "Professor & Clinical Coordinator",
      image: "https://images.unsplash.com/photo-1758685848587-7bc7487b6e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc29yfGVufDF8fHx8MTc2MzQ3ODIwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "p.williams@university.edu",
      bio: "Dr. Williams coordinates all clinical placements and oversees student clinical experiences. She holds a PhD from the University of Pennsylvania and is a Certified Nurse Educator. With 20 years in maternal-child nursing, she brings extensive clinical expertise to the classroom. She has developed innovative simulation-based learning experiences for obstetric nursing education.",
      specialization: "Maternal-Child Health & Simulation",
    },
    {
      name: "Dr. Robert Thompson, PhD, RN, PMHCNS-BC",
      title: "Associate Professor",
      image: "https://images.unsplash.com/photo-1632054224659-280be3239aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzQzODYzNHww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "r.thompson@university.edu",
      bio: "Dr. Thompson is a board-certified psychiatric-mental health clinical nurse specialist with expertise in behavioral health nursing. He earned his PhD from Yale University and has worked in both inpatient and community mental health settings. His research examines mental health interventions for young adults and he teaches psychiatric nursing and therapeutic communication.",
      specialization: "Psychiatric-Mental Health Nursing",
    },
    {
      name: "Dr. Sarah Patel, DNP, RN, CCRN",
      title: "Assistant Professor",
      image: "https://images.unsplash.com/photo-1632054226752-b1b40867f7a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYzNDM0NTMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      email: "s.patel@university.edu",
      bio: "Dr. Patel brings 15 years of critical care nursing experience to her teaching role. She completed her DNP at Columbia University and maintains certification as a critical care registered nurse. Her clinical practice focuses on cardiovascular intensive care. She teaches medical-surgical nursing and critical care, emphasizing evidence-based practice and clinical reasoning.",
      specialization: "Medical-Surgical & Critical Care",
    },
    {
      name: "Dr. Maria Rodriguez, PhD, RN, PHN",
      title: "Associate Professor",
      image: "https://images.unsplash.com/photo-1758685848587-7bc7487b6e85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc29yfGVufDF8fHx8MTc2MzQ3ODIwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "m.rodriguez@university.edu",
      bio: "Dr. Rodriguez is a public health nurse with expertise in community health and health disparities. She received her PhD from University of California, San Francisco and has extensive experience working with underserved populations. Her research focuses on health equity and social determinants of health. She teaches community health nursing and population health.",
      specialization: "Community & Public Health Nursing",
    },
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4">Meet Our Faculty</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from experienced nursing professionals and educators who are
            dedicated to your success. Our faculty bring a wealth of clinical
            expertise and academic excellence to the classroom.
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <Card className="bg-blue-50">
            <CardContent className="p-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl mb-3">Our Teaching Philosophy</h2>
                  <p className="text-gray-700 mb-3">
                    Our faculty are committed to creating a supportive learning
                    environment that fosters critical thinking, clinical
                    excellence, and professional growth. Each faculty member brings
                    extensive clinical experience and maintains active engagement
                    in nursing practice, research, and scholarship.
                  </p>
                  <p className="text-gray-700">
                    With an average of 18 years of combined clinical and teaching
                    experience, our faculty are dedicated mentors who prepare
                    students to become competent, compassionate nurses ready to
                    meet the challenges of modern healthcare.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Faculty Profiles */}
        <section>
          <div className="grid grid-cols-1 gap-8">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Photo */}
                    <div className="md:col-span-1 h-80 md:h-auto">
                      <ImageWithFallback
                        src={faculty.image}
                        alt={faculty.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="md:col-span-2 p-6">
                      <div className="mb-4">
                        <h3 className="text-2xl text-gray-900 mb-1">
                          {faculty.name}
                        </h3>
                        <p className="text-blue-600 mb-2">{faculty.title}</p>
                        <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {faculty.specialization}
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {faculty.bio}
                      </p>

                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="w-4 h-4" />
                        <a
                          href={`mailto:${faculty.email}`}
                          className="text-blue-600 hover:underline"
                        >
                          {faculty.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Info */}
        <section className="mt-16">
          <Card>
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl mb-4">Questions About the Program?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our faculty are here to help! Feel free to reach out with any
                questions about the curriculum, admissions, or what to expect as a
                nursing student.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:nursing@university.edu"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Contact Faculty
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
