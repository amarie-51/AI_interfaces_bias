import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Mail, Award } from 'lucide-react';

export function FacultyPage() {
  const facultyMembers = [
    {
      name: 'Dr. Jennifer Williams',
      title: 'Program Director & Associate Professor',
      image: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBudXJzZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjM0NzgyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      credentials: 'PhD, RN, CNE',
      email: 'j.williams@university.edu',
      bio: 'Dr. Williams brings over 20 years of nursing experience to the BSN program, with specializations in critical care and nursing education. She earned her PhD in Nursing from Johns Hopkins University and has published extensively on evidence-based nursing practices. Her research focuses on improving patient outcomes through nurse-led interventions and educational innovations. As Program Director, she is committed to fostering excellence in nursing education and mentoring the next generation of nurse leaders.',
    },
    {
      name: 'Dr. Robert Chen',
      title: 'Associate Professor of Medical-Surgical Nursing',
      image: 'https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzMzg4NzcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      credentials: 'DNP, RN, ACNP-BC',
      email: 'r.chen@university.edu',
      bio: 'Dr. Chen is a board-certified Acute Care Nurse Practitioner with 15 years of clinical experience in medical-surgical and critical care settings. He completed his Doctor of Nursing Practice at Columbia University, focusing on advanced practice nursing and healthcare leadership. His clinical expertise includes complex wound care, perioperative nursing, and acute care management. Dr. Chen is passionate about bridging the gap between clinical practice and academic preparation, ensuring students gain practical skills alongside theoretical knowledge.',
    },
    {
      name: 'Prof. Maria Garcia',
      title: 'Clinical Instructor & Pediatric Nursing Specialist',
      image: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MXx8fHwxNzYzNDY5NDU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      credentials: 'MSN, RN, CPNP',
      email: 'm.garcia@university.edu',
      bio: 'Professor Garcia is a Certified Pediatric Nurse Practitioner who has dedicated her career to pediatric nursing and family-centered care. With a Master of Science in Nursing from the University of Pennsylvania, she has worked in various pediatric settings including NICUs, pediatric ICUs, and community health clinics. Her teaching philosophy emphasizes hands-on learning and compassionate care for children and families. She coordinates the pediatric nursing curriculum and clinical rotations, bringing real-world pediatric expertise to the classroom.',
    },
    {
      name: 'Dr. Michael Thompson',
      title: 'Assistant Professor of Mental Health Nursing',
      image: 'https://images.unsplash.com/photo-1698795635777-09ddc4efbecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzQ3OTI1MHww&ixlib=rb-4.1.0&q=80&w=1080',
      credentials: 'PhD, RN, PMHNP-BC',
      email: 'm.thompson@university.edu',
      bio: 'Dr. Thompson is a board-certified Psychiatric-Mental Health Nurse Practitioner with expertise in psychiatric nursing, mental health assessment, and therapeutic interventions. He earned his PhD in Nursing Science from the University of Washington, where his dissertation focused on mental health stigma reduction in healthcare settings. With 12 years of experience in psychiatric and community mental health nursing, he brings valuable insights into integrated behavioral health care. Dr. Thompson is dedicated to preparing students to address the growing mental health needs of diverse populations.',
    },
    {
      name: 'Dr. Sarah Anderson',
      title: 'Professor of Community Health Nursing',
      image: 'https://images.unsplash.com/photo-1758685848561-3658f433e6a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc29yJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzYzNDc4MjE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      credentials: 'PhD, RN, PHNA-BC',
      email: 's.anderson@university.edu',
      bio: 'Dr. Anderson is a nationally recognized expert in public health nursing and community health promotion. She holds a PhD in Public Health Nursing from the University of Michigan and is board-certified as a Public Health Nurse. Her research focuses on health equity, social determinants of health, and community-based interventions. With over 18 years of experience in community health settings, she has led numerous initiatives to improve health outcomes in underserved populations. Dr. Anderson is passionate about teaching students to address population health and advocate for vulnerable communities.',
    },
    {
      name: 'Prof. David Lee',
      title: 'Clinical Coordinator & Simulation Lab Director',
      image: 'https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzMzg4NzcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      credentials: 'MSN, RN, CHSE',
      email: 'd.lee@university.edu',
      bio: 'Professor Lee is a Certified Healthcare Simulation Educator who oversees all simulation-based learning experiences in the BSN program. With a Master of Science in Nursing from Duke University and 14 years of emergency department nursing experience, he brings practical expertise to simulation education. He has designed innovative simulation scenarios that replicate high-acuity clinical situations, helping students develop critical thinking and clinical decision-making skills in a safe environment. Professor Lee also coordinates clinical placements and ensures students receive diverse, high-quality clinical experiences throughout the program.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-blue-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="mb-4 text-white">Our Faculty</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Learn from experienced nurse educators, clinicians, and researchers who are dedicated to
            your success
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="mb-6">Expert Educators & Practitioners</h2>
          <p className="text-gray-600 mb-4">
            Our distinguished faculty members combine academic excellence with extensive clinical
            experience. They are committed to providing high-quality education, mentorship, and
            support to help you achieve your nursing career goals.
          </p>
          <p className="text-gray-600">
            With diverse specializations and backgrounds, our faculty bring real-world insights into
            the classroom, ensuring you receive a well-rounded education that prepares you for the
            complexities of modern healthcare.
          </p>
        </div>
      </section>

      {/* Faculty Members */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Photo Section */}
                  <div className="lg:col-span-1 relative">
                    <ImageWithFallback
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-full object-cover min-h-[300px] lg:min-h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden">
                      <h3 className="text-white mb-1">{faculty.name}</h3>
                      <p className="text-blue-200 text-sm">{faculty.credentials}</p>
                    </div>
                  </div>

                  {/* Info Section */}
                  <CardContent className="lg:col-span-2 p-8">
                    <div className="hidden lg:block mb-4">
                      <h3 className="mb-2">{faculty.name}</h3>
                      <p className="text-blue-600">{faculty.credentials}</p>
                    </div>
                    
                    <p className="text-gray-900 mb-4">{faculty.title}</p>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{faculty.bio}</p>
                    
                    <div className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                      <Mail className="w-4 h-4" />
                      <a href={`mailto:${faculty.email}`} className="text-sm">
                        {faculty.email}
                      </a>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4 text-white">Join Our Learning Community</h2>
          <p className="text-xl mb-8 text-blue-100">
            Our faculty are here to support your journey from student to professional nurse
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/admissions">
              <button className="px-8 py-3 bg-white text-blue-900 rounded-md hover:bg-blue-50 transition-colors">
                Apply Now
              </button>
            </a>
            <a href="/contact">
              <button className="px-8 py-3 border-2 border-white text-white rounded-md hover:bg-white/10 transition-colors">
                Contact Faculty
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
