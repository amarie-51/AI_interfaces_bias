import { Card, CardContent } from './ui/card';
import { Mail, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Faculty() {
  const facultyMembers = [
    {
      name: 'Dr. Sarah Williams',
      title: 'Program Director & Professor',
      image: 'https://images.unsplash.com/photo-1755189118414-14c8dacdb082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZSUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzQ3OTIzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      credentials: 'PhD, RN, FAAN',
      email: 's.williams@university.edu',
      bio: 'Dr. Williams has over 20 years of experience in nursing education and clinical practice. Her research focuses on evidence-based practice implementation and nursing leadership. She has published extensively in peer-reviewed journals and serves on the editorial board of the Journal of Nursing Education.',
      specialization: 'Nursing Leadership, Evidence-Based Practice',
    },
    {
      name: 'Dr. Michael Chen',
      title: 'Associate Professor',
      image: 'https://images.unsplash.com/photo-1645066928295-2506defde470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwcm9mZXNzb3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM0NzkyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      credentials: 'DNP, RN, ACNP-BC',
      email: 'm.chen@university.edu',
      bio: 'Dr. Chen is a board-certified acute care nurse practitioner with expertise in critical care nursing. He has worked in intensive care units for 15 years and now dedicates his time to educating future nurses in advanced assessment and critical thinking skills. His clinical expertise enriches the classroom experience.',
      specialization: 'Critical Care, Advanced Practice',
    },
    {
      name: 'Dr. Jennifer Martinez',
      title: 'Assistant Professor',
      image: 'https://images.unsplash.com/photo-1678940805950-73f2127f9d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZmFjdWx0eSUyMHByb2Zlc3NvcnxlbnwxfHx8fDE3NjM0NzkyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      credentials: 'PhD, RN, CNE',
      email: 'j.martinez@university.edu',
      bio: 'Dr. Martinez specializes in maternal-child nursing and has a passion for teaching obstetric and pediatric nursing courses. As a certified nurse educator, she employs innovative teaching strategies including simulation and case-based learning. Her research examines cultural competence in maternal-child health.',
      specialization: 'Maternal-Child Health, Nursing Education',
    },
    {
      name: 'Dr. Robert Thompson',
      title: 'Associate Professor',
      image: 'https://images.unsplash.com/photo-1698795635777-09ddc4efbecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzQ3OTIzMHww&ixlib=rb-4.1.0&q=80&w=1080',
      credentials: 'PhD, RN, PMHCNS-BC',
      email: 'r.thompson@university.edu',
      bio: 'Dr. Thompson is a board-certified psychiatric-mental health clinical nurse specialist with extensive experience in mental health nursing. He teaches courses in psychiatric nursing and therapeutic communication. His research focuses on mental health stigma reduction and trauma-informed care in nursing practice.',
      specialization: 'Psychiatric-Mental Health, Trauma-Informed Care',
    },
    {
      name: 'Dr. Lisa Anderson',
      title: 'Assistant Professor',
      image: 'https://images.unsplash.com/photo-1676552055618-22ec8cde399a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG51cnNlJTIwc21pbGluZ3xlbnwxfHx8fDE3NjM0NzgyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      credentials: 'DNP, RN, FNP-BC',
      email: 'l.anderson@university.edu',
      bio: 'Dr. Anderson is a family nurse practitioner who brings real-world primary care experience to the classroom. She coordinates the community health nursing course and supervises students in community clinical rotations. Her work focuses on health promotion and disease prevention in underserved populations.',
      specialization: 'Community Health, Primary Care',
    },
    {
      name: 'Dr. David Park',
      title: 'Professor',
      image: 'https://images.unsplash.com/photo-1651804810223-6997a7d3fe7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3R1ZGVudCUyMHN0dWR5aW5nfGVufDF8fHx8MTc2MzQ3OTI2OXww&ixlib=rb-4.1.0&q=80&w=1080',
      credentials: 'PhD, RN, NEA-BC',
      email: 'd.park@university.edu',
      bio: 'Dr. Park has extensive experience in nursing administration and healthcare quality improvement. He teaches nursing leadership, management, and healthcare systems courses. Prior to joining academia, he served as Chief Nursing Officer at a major medical center. His research examines nursing workforce development and retention.',
      specialization: 'Nursing Administration, Healthcare Quality',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-white">Our Faculty</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Learn from experienced nursing professionals and dedicated educators who are 
            committed to your success and growth as a future healthcare leader.
          </p>
        </div>
      </section>

      {/* Faculty Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Expert Educators & Mentors</h2>
            <p className="text-gray-600">
              Our faculty members are nationally recognized experts who combine advanced 
              academic credentials with extensive clinical experience. They are dedicated to 
              fostering a supportive learning environment and preparing students for excellence 
              in nursing practice.
            </p>
          </div>

          {/* Faculty Members */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
                  <div className="sm:col-span-1">
                    <div className="aspect-square rounded-lg overflow-hidden mb-4">
                      <ImageWithFallback
                        src={faculty.image}
                        alt={faculty.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <h3 className="text-blue-600 mb-1">{faculty.name}</h3>
                    <p className="text-gray-900 mb-1">{faculty.title}</p>
                    <p className="text-sm text-gray-600 mb-3">{faculty.credentials}</p>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                      <Mail className="w-4 h-4" />
                      <a href={`mailto:${faculty.email}`} className="hover:text-blue-600">
                        {faculty.email}
                      </a>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-start gap-2 mb-2">
                        <Award className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Specialization:</span> {faculty.specialization}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600">{faculty.bio}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center">Faculty Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl text-blue-600 mb-2">100%</div>
                <p className="text-gray-900 mb-2">Doctorally Prepared</p>
                <p className="text-sm text-gray-600">
                  All core faculty hold doctoral degrees (PhD or DNP)
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl text-blue-600 mb-2">15+</div>
                <p className="text-gray-900 mb-2">Average Years Experience</p>
                <p className="text-sm text-gray-600">
                  Extensive clinical and teaching expertise
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl text-blue-600 mb-2">50+</div>
                <p className="text-gray-900 mb-2">Research Publications</p>
                <p className="text-sm text-gray-600">
                  Contributing to nursing knowledge and practice
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Support */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Committed to Your Success</h2>
          <p className="text-gray-600 mb-8">
            Our faculty are dedicated to providing personalized support and mentorship throughout 
            your academic journey. They maintain regular office hours, offer academic advising, 
            and serve as preceptors during clinical rotations. Many faculty members also mentor 
            students in research projects and professional development activities.
          </p>
          <p className="text-gray-600">
            With small class sizes and an accessible faculty, you'll receive the individualized 
            attention you need to achieve your goals and become a confident, competent nursing 
            professional.
          </p>
        </div>
      </section>
    </div>
  );
}
