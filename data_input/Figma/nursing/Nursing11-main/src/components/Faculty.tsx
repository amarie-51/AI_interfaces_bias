import { ImageWithFallback } from './figma/ImageWithFallback';
import { Mail, Award } from 'lucide-react';

export function Faculty() {
  const facultyMembers = [
    {
      name: 'Dr. Elizabeth Morrison',
      title: 'Program Director & Professor of Nursing',
      image: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MXx8fHwxNzYzNDc4MjEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Morrison brings over 25 years of nursing experience, including 15 years in academia. She holds a PhD in Nursing Education and is board-certified in Medical-Surgical Nursing. Her research focuses on clinical education pedagogy and patient safety. She has published numerous articles in leading nursing journals and serves on several national nursing education committees.',
      email: 'e.morrison@university.edu',
      specialization: 'Nursing Education, Patient Safety',
    },
    {
      name: 'Dr. Michael Chen',
      title: 'Associate Professor of Nursing',
      image: 'https://images.unsplash.com/photo-1645066928295-2506defde470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc29yJTIwbWFufGVufDF8fHx8MTc2MzQ3ODIxMHww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Chen is a Family Nurse Practitioner with extensive experience in primary care and community health. He earned his DNP from Johns Hopkins University and has practiced in underserved communities for over 20 years. His teaching areas include health assessment, pharmacology, and community health nursing. He is passionate about addressing health disparities and social determinants of health.',
      email: 'm.chen@university.edu',
      specialization: 'Primary Care, Community Health',
    },
    {
      name: 'Dr. Amanda Rodriguez',
      title: 'Assistant Professor of Nursing',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzQ1Mjk2OHww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Rodriguez specializes in pediatric nursing and has worked in children\'s hospitals for 18 years. She holds certifications in Pediatric Nursing and Neonatal Resuscitation. Her clinical expertise includes neonatal intensive care and pediatric emergency care. She teaches pediatric nursing, maternal-child health, and conducts research on family-centered care in pediatric settings.',
      email: 'a.rodriguez@university.edu',
      specialization: 'Pediatric Nursing, Neonatal Care',
    },
    {
      name: 'Professor James Williams',
      title: 'Clinical Instructor & Nurse Educator',
      image: 'https://images.unsplash.com/photo-1690192435264-f5ff74cc999b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwcHJvZmVzc29yJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzYzNDc4MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Professor Williams has 30 years of critical care nursing experience and has been teaching for the past 10 years. He holds an MSN in Critical Care Nursing and is certified in Critical Care Nursing (CCRN) and as a Clinical Nurse Specialist. He coordinates the critical care nursing rotation and teaches medical-surgical nursing courses, bringing real-world ICU experience to the classroom.',
      email: 'j.williams@university.edu',
      specialization: 'Critical Care, Medical-Surgical Nursing',
    },
    {
      name: 'Dr. Sarah Thompson',
      title: 'Associate Professor of Nursing',
      image: 'https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwbnVyc2luZyUyMHN0dWRlbnR8ZW58MXx8fHwxNzYzNDc4MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Thompson is a Psychiatric-Mental Health Nurse Practitioner with expertise in mental health nursing education. She earned her PhD in Nursing Science with a focus on psychiatric nursing. With 22 years of clinical experience in psychiatric hospitals and outpatient settings, she teaches mental health nursing and coordinates psychiatric clinical rotations. Her research interests include mental health stigma reduction and trauma-informed care.',
      email: 's.thompson@university.edu',
      specialization: 'Mental Health, Psychiatric Nursing',
    },
    {
      name: 'Professor David Park',
      title: 'Clinical Instructor & Simulation Coordinator',
      image: 'https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwbnVyc2luZyUyMHN0dWRlbnR8ZW58MXx8fHwxNzYzNDc4MTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Professor Park oversees our state-of-the-art simulation lab and brings 15 years of emergency nursing experience. He holds an MSN in Nursing Education and is a Certified Healthcare Simulation Educator. He designs and implements high-fidelity simulation scenarios that prepare students for real-world clinical situations. His innovative teaching methods have been recognized with multiple teaching excellence awards.',
      email: 'd.park@university.edu',
      specialization: 'Simulation Education, Emergency Nursing',
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white mb-4">Meet Our Faculty</h1>
          <p className="text-xl max-w-3xl">
            Learn from experienced nurses, educators, and healthcare leaders who are dedicated 
            to your success and passionate about nursing education.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Excellence in Nursing Education</h2>
            <p className="text-lg text-gray-700">
              Our faculty are accomplished professionals who combine extensive clinical experience 
              with advanced academic credentials. They are committed to mentoring students, 
              advancing nursing science, and preparing the next generation of nursing leaders.
            </p>
          </div>

          {/* Faculty Grid */}
          <div className="space-y-12">
            {facultyMembers.map((faculty, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-start bg-white rounded-lg shadow-lg overflow-hidden`}
              >
                <div className="w-full lg:w-1/3 h-80 lg:h-auto flex-shrink-0">
                  <ImageWithFallback
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-8">
                  <div className="mb-4">
                    <h3 className="text-blue-900 mb-2">{faculty.name}</h3>
                    <p className="text-blue-600 mb-2">{faculty.title}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Award className="w-4 h-4" />
                      <span>{faculty.specialization}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{faculty.bio}</p>
                  <div className="flex items-center gap-2 text-blue-600">
                    <Mail className="w-4 h-4" />
                    <a
                      href={`mailto:${faculty.email}`}
                      className="hover:underline"
                    >
                      {faculty.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Ready to Learn from the Best?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Our faculty are here to support your journey from student to professional nurse. 
            Reach out to learn more about our program or schedule a campus visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/admissions"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
            >
              View Admissions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
