import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Mail, Linkedin } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Faculty() {
  const facultyMembers = [
    {
      name: "Dr. Elizabeth Morrison, PhD, RN",
      title: "Program Director & Professor",
      image: "https://images.unsplash.com/photo-1632054226752-b1b40867f7a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYzNDM0NTMzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      email: "e.morrison@university.edu",
      specializations: ["Healthcare Leadership", "Nursing Education", "Policy Development"],
      bio: "Dr. Morrison brings over 25 years of experience in nursing education and healthcare administration. She holds a PhD in Nursing from Johns Hopkins University and has published extensively on nursing pedagogy and healthcare policy. Her research focuses on innovative teaching methods and leadership development in nursing education. Prior to joining our faculty, she served as Associate Dean at a leading nursing school and worked as a critical care nurse for 10 years.",
    },
    {
      name: "Dr. James Patterson, DNP, RN, FNP-C",
      title: "Associate Professor of Clinical Nursing",
      image: "https://images.unsplash.com/photo-1758206523685-6e69f80a11ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwbnVyc2UlMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc2MzQ3OTIzNHww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "j.patterson@university.edu",
      specializations: ["Family Practice", "Primary Care", "Men's Health"],
      bio: "Dr. Patterson is a board-certified Family Nurse Practitioner with a Doctor of Nursing Practice degree. He has 15 years of clinical experience in primary care and community health settings. His clinical expertise includes chronic disease management, preventive care, and population health. Dr. Patterson maintains an active clinical practice while teaching, bringing real-world experience into the classroom. He is passionate about increasing diversity in nursing and serves as a mentor to male nursing students.",
    },
    {
      name: "Dr. Maria Rodriguez, PhD, RN, CNE",
      title: "Professor of Medical-Surgical Nursing",
      image: "https://images.unsplash.com/photo-1758653500363-53bced03c683?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZSUyMGhvc3BpdGFsJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzQ3OTIzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "m.rodriguez@university.edu",
      specializations: ["Medical-Surgical Nursing", "Evidence-Based Practice", "Patient Safety"],
      bio: "Dr. Rodriguez is a Certified Nurse Educator with extensive experience in acute care nursing. She earned her PhD in Nursing Science and has dedicated her career to improving patient outcomes through evidence-based practice. Her research on patient safety and quality improvement has been published in top-tier nursing journals. Dr. Rodriguez coordinates the medical-surgical nursing courses and oversees clinical placements in acute care settings. She received the Excellence in Teaching award three consecutive years.",
    },
    {
      name: "Dr. Sarah Kim, DNP, RN, CPNP",
      title: "Assistant Professor of Pediatric Nursing",
      image: "https://images.unsplash.com/photo-1651804810223-6997a7d3fe7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwc3R1ZGVudCUyMHN0dWR5aW5nfGVufDF8fHx8MTc2MzQyODk4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      email: "s.kim@university.edu",
      specializations: ["Pediatric Care", "Child Development", "Family-Centered Care"],
      bio: "Dr. Kim is a certified Pediatric Nurse Practitioner with a passion for child health and family-centered care. She completed her Doctor of Nursing Practice at Duke University with a focus on pediatric primary care. With 12 years of experience working with children and families, she brings valuable clinical insights to her teaching. Dr. Kim's research interests include childhood obesity prevention and improving healthcare access for underserved pediatric populations. She maintains a clinical practice at a local children's hospital.",
    },
    {
      name: "Professor Michael Thompson, MSN, RN, CCRN",
      title: "Clinical Instructor - Critical Care",
      image: "https://images.unsplash.com/photo-1758691463569-66de91d76452?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZWR1Y2F0aW9uJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzYzNDA1ODAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      email: "m.thompson@university.edu",
      specializations: ["Critical Care", "Emergency Nursing", "Advanced Life Support"],
      bio: "Professor Thompson is a Critical Care Registered Nurse with over 18 years of experience in intensive care units and emergency departments. He holds multiple certifications including CCRN, ACLS, and PALS. His clinical expertise in managing critically ill patients provides students with invaluable insights into complex care situations. Professor Thompson developed our simulation lab scenarios for critical care nursing and leads hands-on clinical instruction in ICU settings. He is known for his practical approach to teaching and his ability to help students develop critical thinking skills.",
    },
    {
      name: "Dr. Jennifer Lee, PhD, RN, PMHNP-BC",
      title: "Associate Professor of Mental Health Nursing",
      image: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwc3R1ZGVudCUyMGRpdmVyc2V8ZW58MXx8fHwxNzYzNDc5MjM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      email: "j.lee@university.edu",
      specializations: ["Psychiatric Nursing", "Mental Health", "Substance Abuse"],
      bio: "Dr. Lee is a board-certified Psychiatric-Mental Health Nurse Practitioner with a PhD in Nursing. She has dedicated her career to mental health nursing and has 20 years of experience working with diverse populations in various mental health settings. Her research focuses on reducing stigma in mental health care and improving access to psychiatric services. Dr. Lee teaches mental health nursing courses and coordinates clinical experiences in psychiatric facilities. She also maintains a private practice specializing in anxiety and mood disorders.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6">Our Faculty</h1>
            <p className="text-xl text-blue-100">
              Learn from experienced nurse educators and practitioners who are dedicated to your success. Our faculty bring decades of combined clinical experience and academic excellence to the classroom.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="mb-6">Expert Educators, Compassionate Mentors</h2>
            <p className="text-gray-600 text-lg">
              Our distinguished faculty members are leaders in nursing education and practice. They combine academic expertise with extensive clinical experience to provide you with a comprehensive, real-world nursing education. Each faculty member is committed to mentoring students and fostering a supportive learning environment.
            </p>
          </div>

          {/* Faculty Grid */}
          <div className="space-y-12">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-blue-200 transition-colors">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Photo */}
                  <div className="lg:col-span-1">
                    <div className="aspect-[3/4] overflow-hidden">
                      <ImageWithFallback
                        src={faculty.image}
                        alt={faculty.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 p-6">
                    <div className="mb-4">
                      <h3 className="mb-2">{faculty.name}</h3>
                      <p className="text-blue-600 mb-3">{faculty.title}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {faculty.specializations.map((spec, specIndex) => (
                          <Badge key={specIndex} variant="secondary">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {faculty.bio}
                    </p>

                    <div className="flex gap-4">
                      <a
                        href={`mailto:${faculty.email}`}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        {faculty.email}
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center">Faculty Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">Doctorally Prepared or Certified</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-blue-600 mb-2">15:1</div>
              <p className="text-gray-600">Student-Faculty Ratio</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-blue-600 mb-2">180+</div>
              <p className="text-gray-600">Combined Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Published Research Articles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Staff Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-center">Additional Support</h2>
            <p className="text-gray-600 text-center mb-12">
              In addition to our core faculty, our program is supported by experienced clinical instructors, simulation lab coordinators, and academic advisors who are dedicated to your success throughout the program.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="mb-2">Clinical Instructors</h3>
                  <p className="text-gray-600">
                    Experienced nurses who guide you through hands-on clinical experiences
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="mb-2">Academic Advisors</h3>
                  <p className="text-gray-600">
                    Dedicated support for course planning and academic success
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="mb-2">Lab Coordinators</h3>
                  <p className="text-gray-600">
                    Experts in simulation technology and skills training
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
