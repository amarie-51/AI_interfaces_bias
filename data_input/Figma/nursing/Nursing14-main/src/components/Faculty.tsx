import { Mail, Linkedin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Faculty() {
  const facultyMembers = [
    {
      name: 'Dr. Jennifer Matthews',
      title: 'Dean of Nursing & Professor',
      image: 'https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3J8ZW58MXx8fHwxNzYzMzkxMzE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Matthews brings over 25 years of nursing experience, including 15 years in nursing education. She holds a PhD in Nursing Science from Johns Hopkins University and is a Fellow of the American Academy of Nursing. Her research focuses on patient safety and quality improvement in acute care settings. Dr. Matthews has published extensively in peer-reviewed journals and serves on several national nursing education committees.',
      email: 'j.matthews@university.edu',
      specialization: 'Patient Safety & Quality Improvement',
    },
    {
      name: 'Dr. Robert Chen',
      title: 'Associate Professor of Adult Health Nursing',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwbnVyc2V8ZW58MXx8fHwxNzYzNDc4MjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Chen is a nationally recognized expert in critical care nursing with 20 years of clinical and academic experience. He earned his DNP from Duke University and maintains active clinical practice in a Level 1 trauma center. His research interests include sepsis management, nurse-physician collaboration, and simulation-based education. Dr. Chen has received numerous teaching awards and mentors students in advanced practice nursing.',
      email: 'r.chen@university.edu',
      specialization: 'Critical Care & Emergency Nursing',
    },
    {
      name: 'Dr. Maria Rodriguez',
      title: 'Professor of Community Health Nursing',
      image: 'https://images.unsplash.com/photo-1562673462-877b3612cbea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjMzODgzMDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Rodriguez specializes in public health nursing and health disparities. With a PhD in Public Health from the University of California, Berkeley, she has led numerous community-based health initiatives addressing chronic disease prevention and health equity. Her work has been funded by the National Institutes of Health and the Robert Wood Johnson Foundation. She is passionate about preparing nurses to serve diverse populations and underserved communities.',
      email: 'm.rodriguez@university.edu',
      specialization: 'Public Health & Health Equity',
    },
    {
      name: 'Dr. Emily Thompson',
      title: 'Assistant Professor of Pediatric Nursing',
      image: 'https://images.unsplash.com/photo-1712782390367-6d9a2843d893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYzNDc4MjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Thompson completed her PhD in Nursing at the University of Pennsylvania with a focus on pediatric oncology nursing. She has worked as a pediatric nurse for 12 years, including 7 years in pediatric intensive care. Her research examines family-centered care, pain management in children, and the psychosocial needs of children with chronic illnesses. Dr. Thompson is known for her engaging teaching style and dedication to student success.',
      email: 'e.thompson@university.edu',
      specialization: 'Pediatric & Family Nursing',
    },
    {
      name: 'Dr. James Williams',
      title: 'Associate Professor of Mental Health Nursing',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwbnVyc2V8ZW58MXx8fHwxNzYzNDc4MjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Williams is a board-certified psychiatric-mental health nurse practitioner with expertise in trauma-informed care and addiction nursing. He holds a PhD in Nursing from the University of Washington and has published research on mental health stigma, crisis intervention, and integrative mental health treatments. Dr. Williams actively practices in an outpatient psychiatric clinic and brings current clinical expertise to the classroom.',
      email: 'j.williams@university.edu',
      specialization: 'Psychiatric-Mental Health Nursing',
    },
    {
      name: 'Dr. Sarah Park',
      title: 'Assistant Professor of Maternal-Child Nursing',
      image: 'https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3J8ZW58MXx8fHwxNzYzMzkxMzE3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Park earned her DNP from Emory University with a focus on women\'s health and obstetric nursing. She has 15 years of experience in labor and delivery, high-risk obstetrics, and neonatal care. Her scholarly work focuses on maternal mental health, postpartum care, and promoting positive birth experiences. Dr. Park is certified as a nurse-midwife and maintains an active clinical practice alongside her teaching responsibilities.',
      email: 's.park@university.edu',
      specialization: 'Maternal-Child & Women\'s Health',
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white mb-4">Our Faculty</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Learn from distinguished nurse educators, researchers, and practitioners who are leaders in their fields
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-blue-900 mb-6">Excellence in Nursing Education</h2>
          <p className="text-gray-700 mb-4">
            Our faculty members are accomplished scholars, skilled clinicians, and passionate educators committed to preparing the next generation of nursing leaders. They bring extensive clinical expertise, cutting-edge research, and a genuine dedication to student success.
          </p>
          <p className="text-gray-700">
            With an average of 18 years of combined clinical and academic experience, our faculty maintain active clinical practice and research programs while providing personalized mentorship to students.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="space-y-12">
          {facultyMembers.map((faculty, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-start ${
                index % 2 === 0 ? '' : 'lg:grid-flow-dense'
              }`}
            >
              <div className={`${index % 2 === 0 ? '' : 'lg:col-start-3'}`}>
                <div className="sticky top-24">
                  <div className="relative h-[400px] mb-4">
                    <ImageWithFallback
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-blue-900 mb-1">{faculty.name}</h3>
                    <p className="text-blue-600 mb-3">{faculty.title}</p>
                    <div className="text-gray-600 mb-4">
                      <span className="block mb-1">Specialization:</span>
                      <span className="text-gray-800">{faculty.specialization}</span>
                    </div>
                    <div className="flex items-center gap-3 pt-3 border-t border-gray-200">
                      <a
                        href={`mailto:${faculty.email}`}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <Mail size={18} />
                        <span>Email</span>
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <Linkedin size={18} />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`lg:col-span-2 ${index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                <div className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-blue-900 mb-4">About {faculty.name.split(' ')[1]}</h3>
                  <p className="text-gray-700 leading-relaxed">{faculty.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Faculty Achievements */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-blue-900 mb-12">Faculty Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-2">100%</div>
              <p className="text-gray-700">Doctorate Degrees</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-2">18</div>
              <p className="text-gray-700">Average Years Experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-2">45+</div>
              <p className="text-gray-700">Research Publications</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-2">12:1</div>
              <p className="text-gray-700">Student-Faculty Ratio</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-blue-900 mb-4">Learn from the Best</h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          Join a program where faculty are committed to your success and passionate about shaping the future of nursing
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Schedule a Faculty Meeting
        </button>
      </div>
    </div>
  );
}
