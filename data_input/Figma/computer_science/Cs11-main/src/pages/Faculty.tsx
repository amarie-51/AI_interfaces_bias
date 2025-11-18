import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Mail, Award } from 'lucide-react';

export function Faculty() {
  const faculty = [
    {
      name: 'Dr. Sarah Mitchell',
      title: 'Professor & Department Chair',
      photo: 'https://images.unsplash.com/photo-1758685848208-e108b6af94cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwcm9mZXNzb3IlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYzNDcyMzY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      email: 's.mitchell@university.edu',
      bio: 'Dr. Mitchell is a leading researcher in artificial intelligence and machine learning. With over 20 years of experience, she has published more than 50 papers in top-tier journals and conferences. Her current research focuses on ethical AI and explainable machine learning systems. She holds a Ph.D. in Computer Science from MIT.',
      specializations: ['Artificial Intelligence', 'Machine Learning', 'Ethics in AI'],
    },
    {
      name: 'Dr. James Chen',
      title: 'Associate Professor',
      photo: 'https://images.unsplash.com/photo-1758685734503-58a8accc24e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcHJvZmVzc29yJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzQ3MjM2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      email: 'j.chen@university.edu',
      bio: 'Dr. Chen specializes in cybersecurity and network security. He has worked as a security consultant for Fortune 500 companies and government agencies. His research on blockchain security and cryptographic protocols has been widely recognized. He earned his Ph.D. from Stanford University.',
      specializations: ['Cybersecurity', 'Network Security', 'Blockchain'],
    },
    {
      name: 'Dr. Emily Rodriguez',
      title: 'Associate Professor',
      photo: 'https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHdvbWFufGVufDF8fHx8MTc2MzQ0OTk5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      email: 'e.rodriguez@university.edu',
      bio: 'Dr. Rodriguez is an expert in software engineering and distributed systems. She has led major open-source projects and contributed to industry standards. Her research focuses on cloud computing, microservices architecture, and DevOps practices. She holds a Ph.D. from Carnegie Mellon University.',
      specializations: ['Software Engineering', 'Cloud Computing', 'Distributed Systems'],
    },
    {
      name: 'Dr. Michael Thompson',
      title: 'Assistant Professor',
      photo: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG1hbnxlbnwxfHx8fDE3NjMzOTUwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      email: 'm.thompson@university.edu',
      bio: 'Dr. Thompson specializes in data science and big data analytics. His work bridges the gap between academia and industry, with collaborations involving healthcare analytics and financial modeling. He has extensive experience with modern data processing frameworks. Ph.D. from UC Berkeley.',
      specializations: ['Data Science', 'Big Data', 'Analytics'],
    },
    {
      name: 'Dr. Aisha Patel',
      title: 'Assistant Professor',
      photo: 'https://images.unsplash.com/photo-1756588534346-e8899364757b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpc3QlMjByZXNlYXJjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzNDcyNTUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      email: 'a.patel@university.edu',
      bio: 'Dr. Patel is a rising star in the field of human-computer interaction and user experience design. Her research explores how people interact with AI systems and virtual reality environments. She combines psychology, design, and computer science to create more intuitive interfaces. Ph.D. from Georgia Tech.',
      specializations: ['Human-Computer Interaction', 'UX Design', 'Virtual Reality'],
    },
    {
      name: 'Dr. Robert Williams',
      title: 'Professor',
      photo: 'https://images.unsplash.com/photo-1758685734503-58a8accc24e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHByb2Zlc3NvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzM3OTcwMnww&ixlib=rb-4.1.0&q=80&w=1080',
      email: 'r.williams@university.edu',
      bio: 'Dr. Williams has over 25 years of experience in computer graphics and visualization. He has worked on projects ranging from medical imaging to video game engines. His expertise in rendering algorithms and GPU programming is sought after by both students and industry partners. Ph.D. from Cornell University.',
      specializations: ['Computer Graphics', 'Visualization', 'GPU Programming'],
    },
    {
      name: 'Dr. Lisa Nguyen',
      title: 'Associate Professor',
      photo: 'https://images.unsplash.com/photo-1680983387172-aedb346ba443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzQ3MjM2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      email: 'l.nguyen@university.edu',
      bio: 'Dr. Nguyen specializes in algorithms and computational theory. Her research addresses fundamental questions about computational complexity and algorithm design. She has received multiple awards for teaching excellence and is known for making complex topics accessible. Ph.D. from Princeton University.',
      specializations: ['Algorithms', 'Computational Theory', 'Complexity'],
    },
    {
      name: 'Dr. David Kumar',
      title: 'Assistant Professor',
      photo: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG1hbnxlbnwxfHx8fDE3NjMzOTUwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      email: 'd.kumar@university.edu',
      bio: 'Dr. Kumar focuses on mobile computing and Internet of Things (IoT). His research involves developing efficient algorithms for resource-constrained devices and secure communication protocols for IoT networks. He previously worked as a senior engineer at a major tech company. Ph.D. from University of Washington.',
      specializations: ['Mobile Computing', 'IoT', 'Embedded Systems'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl mb-6">Our Faculty</h1>
          <p className="text-xl max-w-3xl">
            Learn from world-class educators and researchers who are passionate about your success. Our faculty bring decades of industry experience and cutting-edge research to the classroom.
          </p>
        </div>
      </section>

      {/* Faculty Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Faculty Members</div>
            </div>
            <div>
              <div className="text-4xl text-blue-600 mb-2">15:1</div>
              <div className="text-gray-600">Student-Faculty Ratio</div>
            </div>
            <div>
              <div className="text-4xl text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Hold Ph.D. Degrees</div>
            </div>
            <div>
              <div className="text-4xl text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Published Papers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">Meet Our Experts</h2>
            <p className="text-xl text-gray-600">
              Our faculty are committed to excellence in teaching and research
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faculty.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
                  {/* Photo Column */}
                  <div className="sm:col-span-1 aspect-square sm:aspect-auto">
                    <ImageWithFallback
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info Column */}
                  <div className="sm:col-span-2 p-6">
                    <h3 className="text-2xl mb-1 text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 mb-3">{member.title}</p>
                    
                    <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                      <Mail className="h-4 w-4" />
                      <a href={`mailto:${member.email}`} className="hover:text-blue-600">
                        {member.email}
                      </a>
                    </div>

                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                      {member.bio}
                    </p>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-4 w-4 text-blue-600" />
                        <span className="text-sm text-gray-900">Specializations:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {member.specializations.map((spec, specIndex) => (
                          <span
                            key={specIndex}
                            className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">Research Excellence</h2>
            <p className="text-xl text-gray-600">
              Our faculty are conducting groundbreaking research across diverse areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Artificial Intelligence & Machine Learning',
              'Cybersecurity & Privacy',
              'Software Engineering & Systems',
              'Data Science & Analytics',
              'Human-Computer Interaction',
              'Computer Graphics & Visualization',
              'Algorithms & Theory',
              'Mobile & IoT Computing',
              'Cloud & Distributed Systems',
            ].map((area, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-900">{area}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-4 text-gray-900">Join Our Academic Community</h2>
          <p className="text-xl text-gray-700 mb-8">
            Work alongside distinguished faculty who are dedicated to your growth and success. Our small class sizes ensure personalized attention and mentorship.
          </p>
          <div className="bg-white rounded-lg p-6 shadow-md inline-block">
            <p className="text-gray-700 mb-4">
              Interested in research opportunities or want to learn more about our faculty?
            </p>
            <a
              href="mailto:cs@university.edu"
              className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2"
            >
              <Mail className="h-5 w-5" />
              Contact the Department
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
