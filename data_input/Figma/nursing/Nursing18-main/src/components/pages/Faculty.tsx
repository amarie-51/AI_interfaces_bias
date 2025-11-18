import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card } from '../ui/card';
import { Mail, Linkedin } from 'lucide-react';

export function Faculty() {
  const facultyMembers = [
    {
      name: 'Dr. Rebecca Morrison',
      title: 'Professor & Program Director',
      image: 'https://images.unsplash.com/photo-1758685848602-09e52ef9c7d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc29yJTIwd29tYW58ZW58MXx8fHwxNzYzNDc5MjMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Morrison brings over 25 years of nursing experience to her role as Program Director. She holds a PhD in Nursing from Johns Hopkins University and specializes in nursing education and healthcare leadership. Her research focuses on innovative teaching methods and improving nursing student outcomes. Prior to joining academia, Dr. Morrison served as Chief Nursing Officer at Metropolitan General Hospital.',
      email: 'r.morrison@university.edu',
    },
    {
      name: 'Dr. Michael Chen',
      title: 'Associate Professor of Medical-Surgical Nursing',
      image: 'https://images.unsplash.com/photo-1632054224659-280be3239aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwbWFufGVufDF8fHx8MTc2MzQ3OTIzNXww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Chen earned his Doctor of Nursing Practice from the University of Pennsylvania. With 18 years of experience in critical care nursing, he specializes in acute care, emergency nursing, and simulation-based education. Dr. Chen has published extensively on patient safety and evidence-based practice. He is certified as a Critical Care Registered Nurse (CCRN) and serves on the board of the American Association of Critical-Care Nurses.',
      email: 'm.chen@university.edu',
    },
    {
      name: 'Dr. Sarah Williams',
      title: 'Assistant Professor of Maternal-Child Health',
      image: 'https://images.unsplash.com/photo-1757125736482-328a3cdd9743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwcHJvZmVzc29yfGVufDF8fHx8MTc2MzQ3OTIzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Williams completed her PhD in Nursing Science at the University of Washington, focusing on maternal-child health and family-centered care. She has 15 years of clinical experience in labor and delivery, postpartum care, and neonatal intensive care. Her research examines health disparities in maternal outcomes and improving access to prenatal care. Dr. Williams is a certified nurse-midwife and passionate about empowering the next generation of maternal-child health nurses.',
      email: 's.williams@university.edu',
    },
    {
      name: 'Dr. James Patterson',
      title: 'Associate Professor of Psychiatric-Mental Health Nursing',
      image: 'https://images.unsplash.com/photo-1659353887804-fc7f9313021a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZWR1Y2F0b3J8ZW58MXx8fHwxNzYzNDc5MjM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Patterson received his Doctor of Philosophy in Nursing from Emory University. He has dedicated his career to advancing mental health nursing and reducing stigma around mental illness. With 20 years of experience in psychiatric nursing, he specializes in trauma-informed care, substance abuse treatment, and community mental health. Dr. Patterson serves as a consultant for several community mental health organizations and is a board-certified psychiatric-mental health nurse practitioner.',
      email: 'j.patterson@university.edu',
    },
    {
      name: 'Professor Linda Martinez',
      title: 'Clinical Associate Professor of Community Health',
      image: 'https://images.unsplash.com/photo-1676552055618-22ec8cde399a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBudXJzaW5nJTIwc3R1ZGVudHxlbnwxfHx8fDE3NjM0NzgxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Professor Martinez holds a Master of Science in Nursing with a focus on public health. She has spent 22 years working in community health settings, including homeless shelters, school nursing, and public health departments. Her expertise includes health promotion, disease prevention, and addressing social determinants of health. Professor Martinez is actively involved in community outreach programs and has received multiple awards for her service to underserved populations.',
      email: 'l.martinez@university.edu',
    },
    {
      name: 'Dr. David Thompson',
      title: 'Assistant Professor of Pharmacology',
      image: 'https://images.unsplash.com/photo-1659353885824-1199aeeebfc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwbnVyc2luZyUyMHN0dWRlbnR8ZW58MXx8fHwxNzYzNDc4MTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Thompson earned his PhD in Pharmacology from Duke University. He brings a unique perspective to nursing education with his background in both pharmacy and nursing. With 12 years of experience as a clinical pharmacist and nurse practitioner, he teaches advanced pharmacology and medication management. His research focuses on medication safety, polypharmacy in older adults, and interprofessional education. Dr. Thompson is board-certified as a family nurse practitioner.',
      email: 'd.thompson@university.edu',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4 text-white">Meet Our Faculty</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Learn from experienced nursing professionals and educators who are dedicated to your success and passionate about advancing the nursing profession.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Expert Educators, Compassionate Mentors</h2>
            <p className="text-gray-600">
              Our distinguished faculty members are leaders in their fields, combining extensive clinical experience with a commitment to excellence in education. They bring real-world expertise into the classroom and serve as mentors, guiding students through their journey to becoming skilled nursing professionals. With an average of 18 years of combined clinical and academic experience, our faculty are dedicated to preparing the next generation of nurses.
            </p>
          </div>

          {/* Faculty Grid */}
          <div className="space-y-12">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-[300px,1fr] gap-8 p-6 md:p-8">
                  {/* Photo */}
                  <div className="relative">
                    <div className="relative h-80 md:h-full rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src={faculty.image}
                        alt={faculty.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Information */}
                  <div className="flex flex-col">
                    <div className="mb-4">
                      <h2 className="mb-2">{faculty.name}</h2>
                      <p className="text-blue-600">{faculty.title}</p>
                    </div>
                    <p className="text-gray-700 mb-6 flex-grow">
                      {faculty.bio}
                    </p>
                    <div className="flex items-center gap-4 pt-4 border-t">
                      <a
                        href={`mailto:${faculty.email}`}
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">{faculty.email}</span>
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                        aria-label={`${faculty.name} LinkedIn profile`}
                      >
                        <Linkedin className="w-4 h-4" />
                        <span className="text-sm">LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
            <h2 className="mb-4">Connect With Our Faculty</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Interested in learning more about our program? Our faculty members are happy to answer your questions and discuss how we can help you achieve your nursing career goals.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
