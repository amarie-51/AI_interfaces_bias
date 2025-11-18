import { Mail, Linkedin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Faculty() {
  const facultyMembers = [
    {
      name: 'Dr. Michael Chen',
      title: 'Professor & Department Chair',
      image: 'https://images.unsplash.com/photo-1758270704587-43339a801396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcHJvZmVzc29yJTIwYWNhZGVtaWN8ZW58MXx8fHwxNzYzNDc3MzQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Chen leads our department with over 20 years of experience in computer science education and research. His research focuses on distributed systems and cloud computing. He has published over 50 papers in top-tier conferences and journals. Prior to academia, he worked as a senior engineer at IBM and holds multiple patents in distributed computing.',
      specialization: 'Cloud Computing, Distributed Systems',
      email: 'm.chen@university.edu',
    },
    {
      name: 'Dr. Sarah Williams',
      title: 'Associate Professor',
      image: 'https://images.unsplash.com/photo-1758685848208-e108b6af94cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwcm9mZXNzb3IlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYzNDcyMzY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Williams specializes in artificial intelligence and machine learning. She received her Ph.D. from Stanford University and has extensive industry experience with Google AI. Her research on neural networks has been widely cited, and she actively mentors students in AI research projects. She is passionate about making AI education accessible to all students.',
      specialization: 'Artificial Intelligence, Machine Learning',
      email: 's.williams@university.edu',
    },
    {
      name: 'Dr. James Rodriguez',
      title: 'Associate Professor',
      image: 'https://images.unsplash.com/photo-1758270704587-43339a801396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcHJvZmVzc29yJTIwYWNhZGVtaWN8ZW58MXx8fHwxNzYzNDc3MzQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Rodriguez brings a wealth of experience in cybersecurity and network security. He previously worked as a security consultant for major financial institutions and government agencies. His research focuses on cryptography and secure system design. He regularly publishes in top security conferences and serves on multiple program committees.',
      specialization: 'Cybersecurity, Cryptography',
      email: 'j.rodriguez@university.edu',
    },
    {
      name: 'Dr. Emily Zhang',
      title: 'Assistant Professor',
      image: 'https://images.unsplash.com/photo-1758685848208-e108b6af94cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwcm9mZXNzb3IlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYzNDcyMzY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Zhang is an expert in data science and big data analytics. She completed her doctorate at MIT and worked as a data scientist at Amazon before joining academia. Her research explores innovative approaches to processing and analyzing massive datasets. She is known for her engaging teaching style and dedication to student success in data-focused courses.',
      specialization: 'Data Science, Big Data Analytics',
      email: 'e.zhang@university.edu',
    },
    {
      name: 'Dr. David Kumar',
      title: 'Assistant Professor',
      image: 'https://images.unsplash.com/photo-1758270704587-43339a801396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcHJvZmVzc29yJTIwYWNhZGVtaWN8ZW58MXx8fHwxNzYzNDc3MzQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Kumar specializes in software engineering and mobile application development. With a background in both iOS and Android development, he has published extensively on software design patterns and mobile UX. Before joining our faculty, he led engineering teams at several successful startups. He brings real-world software development practices into the classroom.',
      specialization: 'Software Engineering, Mobile Development',
      email: 'd.kumar@university.edu',
    },
    {
      name: 'Dr. Rachel Thompson',
      title: 'Associate Professor',
      image: 'https://images.unsplash.com/photo-1758685848208-e108b6af94cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwcm9mZXNzb3IlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYzNDcyMzY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Thompson is a renowned expert in human-computer interaction and user experience design. She earned her Ph.D. from Carnegie Mellon University and has consulted for numerous tech companies on UX design. Her research examines how people interact with emerging technologies. She is committed to teaching students how to create technology that is both powerful and user-friendly.',
      specialization: 'Human-Computer Interaction, UX Design',
      email: 'r.thompson@university.edu',
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-4">Our Faculty</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Learn from distinguished scholars and industry experts who are passionate 
            about teaching and advancing computer science
          </p>
        </div>
      </div>

      {/* Faculty Introduction */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-gray-900 mb-6">World-Class Educators</h2>
            <p className="text-gray-600 mb-4">
              Our faculty members are not just teachers—they are mentors, researchers, 
              and innovators. With extensive academic credentials and real-world industry 
              experience, they bring cutting-edge knowledge directly into the classroom.
            </p>
            <p className="text-gray-600">
              Each professor is dedicated to student success, offering personalized guidance, 
              research opportunities, and career mentorship. Their door is always open for 
              students seeking advice, collaboration, or simply a discussion about the latest 
              developments in technology.
            </p>
          </div>

          {/* Faculty Grid */}
          <div className="space-y-12">
            {facultyMembers.map((faculty, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-3 gap-8 items-start ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:col-span-1">
                  <div className="rounded-lg overflow-hidden shadow-lg sticky top-24">
                    <div className="aspect-square">
                      <ImageWithFallback
                        src={faculty.image}
                        alt={faculty.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 bg-gray-50">
                      <h3 className="text-gray-900 mb-1">{faculty.name}</h3>
                      <p className="text-blue-600 mb-4">{faculty.title}</p>
                      <div className="space-y-2">
                        <a
                          href={`mailto:${faculty.email}`}
                          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          <Mail size={16} />
                          <span>{faculty.email}</span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          <Linkedin size={16} />
                          <span>LinkedIn Profile</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 h-full">
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        {faculty.specialization}
                      </span>
                    </div>
                    <h3 className="text-gray-900 mb-4">About {faculty.name.split(' ')[1]}</h3>
                    <p className="text-gray-600 leading-relaxed">{faculty.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Our Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-900 mb-6">Join Our Academic Community</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Are you a passionate educator or researcher interested in joining our faculty? 
            We're always looking for talented individuals who can contribute to our mission 
            of excellence in computer science education.
          </p>
          <a
            href="mailto:cs.chair@university.edu"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Faculty Positions
          </a>
        </div>
      </div>
    </div>
  );
}
