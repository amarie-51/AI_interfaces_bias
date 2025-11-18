import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Mail, Award } from 'lucide-react';
import { Button } from './ui/button';

export function Faculty() {
  const facultyMembers = [
    {
      name: 'Dr. Catherine Williams',
      title: 'Program Director & Professor of Nursing',
      photo: 'https://images.unsplash.com/photo-1632054226752-b1b40867f7a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYzNDM0NTMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      email: 'c.williams@university.edu',
      bio: 'Dr. Williams brings over 20 years of nursing experience to her role as Program Director. She earned her PhD in Nursing from Johns Hopkins University and has specialized in critical care and nursing education. Her research focuses on clinical simulation effectiveness and student learning outcomes. She has published numerous peer-reviewed articles and served on national nursing education committees.',
      credentials: ['PhD, RN', 'CCRN', 'CNE'],
    },
    {
      name: 'Dr. Marcus Thompson',
      title: 'Associate Professor of Medical-Surgical Nursing',
      photo: 'https://images.unsplash.com/photo-1659353887804-fc7f9313021a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZmFjdWx0eSUyMGRvY3RvcnxlbnwxfHx8fDE3NjM0NzgyMTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      email: 'm.thompson@university.edu',
      bio: 'Dr. Thompson has dedicated his career to advancing medical-surgical nursing education. With a DNP from Duke University and 15 years of clinical experience in acute care settings, he brings real-world expertise to the classroom. His teaching philosophy emphasizes evidence-based practice and patient-centered care. He actively mentors students through their clinical rotations and capstone projects.',
      credentials: ['DNP, RN', 'CMSRN', 'ACLS'],
    },
    {
      name: 'Prof. Jennifer Lee',
      title: 'Assistant Professor of Pediatric Nursing',
      photo: 'https://images.unsplash.com/photo-1746513534315-caa52d3f462c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZSUyMHByb2Zlc3NvciUyMHRlYWNoaW5nfGVufDF8fHx8MTc2MzQ3ODIxNHww&ixlib=rb-4.1.0&q=80&w=1080',
      email: 'j.lee@university.edu',
      bio: 'Professor Lee is a passionate advocate for pediatric nursing and child health. She holds a Master\'s degree in Pediatric Nursing from the University of Pennsylvania and has worked in children\'s hospitals for over 12 years. Her clinical expertise includes neonatal intensive care and pediatric emergency nursing. She is dedicated to preparing nurses who can provide compassionate, family-centered care to children and adolescents.',
      credentials: ['MSN, RN', 'CPNP-AC', 'PALS'],
    },
    {
      name: 'Dr. Robert Chen',
      title: 'Professor of Community Health Nursing',
      photo: 'https://images.unsplash.com/photo-1632054224659-280be3239aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwbWFsZXxlbnwxfHx8fDE3NjM0NzgyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      email: 'r.chen@university.edu',
      bio: 'Dr. Chen\'s expertise lies in public health nursing and community-based care. He earned his PhD in Public Health from Harvard University and has extensive experience working with underserved populations. His research examines health disparities and community health interventions. Dr. Chen is committed to preparing nurses who can address population health needs and promote health equity in diverse communities.',
      credentials: ['PhD, MPH, RN', 'PHNA-BC'],
    },
    {
      name: 'Dr. Sarah Martinez',
      title: 'Associate Professor of Mental Health Nursing',
      photo: 'https://images.unsplash.com/photo-1676552055618-22ec8cde399a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG51cnNlJTIwc21pbGluZ3xlbnwxfHx8fDE3NjM0NzgyMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      email: 's.martinez@university.edu',
      bio: 'Dr. Martinez is a board-certified psychiatric-mental health nurse with a passion for mental health education. She holds a PhD in Nursing from Yale University and has worked in various psychiatric settings including inpatient units, crisis intervention, and community mental health. Her teaching focuses on therapeutic communication, mental health assessment, and trauma-informed care. She actively advocates for mental health awareness and stigma reduction.',
      credentials: ['PhD, RN', 'PMHNP-BC', 'EMDR'],
    },
    {
      name: 'Prof. David Anderson',
      title: 'Clinical Instructor & Simulation Lab Coordinator',
      photo: 'https://images.unsplash.com/photo-1698795635777-09ddc4efbecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3R1ZGVudCUyMHdvbWFufGVufDF8fHx8MTc2MzQ3ODIxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      email: 'd.anderson@university.edu',
      bio: 'Professor Anderson oversees our state-of-the-art simulation lab and clinical skills training. With an MSN in Nursing Education from Emory University and 10 years of emergency department experience, he excels at creating realistic clinical scenarios. He is certified in simulation education and uses innovative teaching methods to enhance student learning. His hands-on approach ensures students gain confidence before entering real clinical settings.',
      credentials: ['MSN, RN', 'CHSE', 'CEN'],
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="mb-4">Meet Our Faculty</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Learn from experienced nursing professionals who are dedicated to your success and passionate 
            about advancing nursing education
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Expert Educators, Dedicated Mentors</h2>
          <p className="text-lg text-gray-700 mb-4">
            Our faculty members are accomplished nurses, researchers, and educators who bring decades of 
            combined clinical experience to the classroom. They are committed to fostering a supportive 
            learning environment where students can develop into confident, competent nursing professionals.
          </p>
          <p className="text-lg text-gray-700">
            With expertise spanning all nursing specialties, our faculty provide personalized mentorship, 
            innovative teaching methods, and real-world insights that prepare you for the challenges and 
            rewards of modern nursing practice.
          </p>
        </div>
      </section>

      {/* Faculty Members */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {/* Photo */}
                    <div className="relative h-[300px] md:h-auto">
                      <ImageWithFallback
                        src={faculty.photo}
                        alt={faculty.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="md:col-span-2 p-6 md:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="mb-1">{faculty.name}</h3>
                          <p className="text-blue-600 mb-2">{faculty.title}</p>
                          <div className="flex flex-wrap gap-2">
                            {faculty.credentials.map((cred, credIndex) => (
                              <span
                                key={credIndex}
                                className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                              >
                                <Award className="h-3 w-3" />
                                {cred}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {faculty.bio}
                      </p>
                      
                      <Button
                        variant="outline"
                        className="gap-2"
                        onClick={() => window.location.href = `mailto:${faculty.email}`}
                      >
                        <Mail className="h-4 w-4" />
                        {faculty.email}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-8">Faculty Office Hours & Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <h3 className="mb-4">Academic Advising</h3>
                <p className="text-gray-700 mb-4">
                  Each student is assigned a faculty advisor who provides guidance on course selection, 
                  academic progress, and career planning throughout your BSN journey.
                </p>
                <p className="text-sm text-gray-600">
                  Schedule an appointment through the student portal or visit during posted office hours.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <h3 className="mb-4">Research Opportunities</h3>
                <p className="text-gray-700 mb-4">
                  Interested students can collaborate with faculty on research projects, gaining valuable 
                  experience in evidence-based practice and scholarly inquiry.
                </p>
                <p className="text-sm text-gray-600">
                  Contact individual faculty members to learn about current research opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
