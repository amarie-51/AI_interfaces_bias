import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Mail, Book } from 'lucide-react';

export function Faculty() {
  const facultyMembers = [
    {
      name: 'Dr. Sarah Mitchell',
      title: 'Professor & Department Chair',
      specialization: 'Artificial Intelligence, Machine Learning',
      image: 'https://images.unsplash.com/photo-1758270704587-43339a801396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwcm9mZXNzb3IlMjBhY2FkZW1pY3xlbnwxfHx8fDE3NjMzNTc4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Mitchell is a leading researcher in artificial intelligence and machine learning, with over 15 years of experience. Her work focuses on deep learning applications in computer vision and natural language processing. She has published over 50 peer-reviewed papers and serves on the editorial board of several prestigious AI journals.',
      email: 's.mitchell@university.edu',
    },
    {
      name: 'Dr. James Anderson',
      title: 'Associate Professor',
      specialization: 'Cybersecurity, Network Security',
      image: 'https://images.unsplash.com/photo-1758685848208-e108b6af94cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzb3IlMjB0ZWFjaGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNjM0NzIzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Anderson specializes in cybersecurity and network protection systems. Before joining academia, he spent 10 years as a security consultant for Fortune 500 companies. His research interests include intrusion detection systems, cryptographic protocols, and secure software development. He has authored two textbooks on network security.',
      email: 'j.anderson@university.edu',
    },
    {
      name: 'Dr. Maria Rodriguez',
      title: 'Associate Professor',
      specialization: 'Software Engineering, Human-Computer Interaction',
      image: 'https://images.unsplash.com/photo-1758685733987-54952cd1c8c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3NvciUyMHRlYWNoaW5nfGVufDF8fHx8MTc2MzQ3NzM1MHww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Rodriguez brings extensive expertise in software engineering methodologies and user experience design. Her research explores how to create more intuitive and accessible software systems. She has led several NSF-funded projects on improving software development practices and has collaborated with major tech companies on UX research.',
      email: 'm.rodriguez@university.edu',
    },
    {
      name: 'Dr. David Chen',
      title: 'Assistant Professor',
      specialization: 'Data Science, Big Data Analytics',
      image: 'https://images.unsplash.com/photo-1736939561648-bafddedd9f5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHByb2Zlc3NvciUyMGFjYWRlbWljfGVufDF8fHx8MTc2MzQ3NzM0MXww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Chen is an expert in data science and big data analytics, with a focus on distributed computing systems and real-time data processing. His work has been applied in healthcare analytics, financial modeling, and social network analysis. He regularly teaches courses on data mining, machine learning, and cloud computing.',
      email: 'd.chen@university.edu',
    },
    {
      name: 'Dr. Emily Thompson',
      title: 'Professor',
      specialization: 'Algorithms, Computational Theory',
      image: 'https://images.unsplash.com/photo-1758685734511-4f49ce9a382b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBwcm9mZXNzb3IlMjBhY2FkZW1pY3xlbnwxfHx8fDE3NjM0NzczNDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Thompson is a renowned expert in algorithm design and computational complexity theory. Her research focuses on developing efficient algorithms for optimization problems and graph theory applications. She has received multiple teaching awards and mentors students in competitive programming competitions.',
      email: 'e.thompson@university.edu',
    },
    {
      name: 'Dr. Michael Kim',
      title: 'Assistant Professor',
      specialization: 'Cloud Computing, Distributed Systems',
      image: 'https://images.unsplash.com/photo-1758270704587-43339a801396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcHJvZmVzc29yJTIwYWNhZGVtaWN8ZW58MXx8fHwxNzYzNDc3MzQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Kim specializes in cloud computing architectures and distributed systems. Before joining our faculty, he worked as a senior engineer at a major cloud services provider. His research addresses scalability, fault tolerance, and performance optimization in cloud environments. He actively collaborates with industry partners on cutting-edge cloud technologies.',
      email: 'm.kim@university.edu',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white mb-6">Our Faculty</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Learn from distinguished professors and researchers who are leaders in their fields, dedicated to student success and advancing the frontiers of computer science.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-gray-900 mb-6">World-Class Educators</h2>
            <p className="text-gray-600 text-lg">
              Our faculty members bring a unique blend of academic excellence and industry experience. They are committed to providing personalized mentorship, fostering innovation, and preparing students for successful careers in technology.
            </p>
          </div>

          {/* Faculty Grid */}
          <div className="space-y-12">
            {facultyMembers.map((faculty, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow`}
              >
                <div className="w-full lg:w-1/3">
                  <div className="aspect-square">
                    <ImageWithFallback
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-2/3 p-8">
                  <h3 className="text-gray-900 mb-2">{faculty.name}</h3>
                  <p className="text-blue-600 mb-2">{faculty.title}</p>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Book className="w-4 h-4" />
                    <span className="text-sm">{faculty.specialization}</span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{faculty.bio}</p>
                  <div className="flex items-center gap-2 text-blue-600">
                    <Mail className="w-4 h-4" />
                    <a
                      href={`mailto:${faculty.email}`}
                      className="hover:underline text-sm"
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

      {/* Research Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-6">Research Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our faculty members are actively engaged in cutting-edge research across various domains of computer science.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Artificial Intelligence & Machine Learning',
              'Cybersecurity & Privacy',
              'Data Science & Analytics',
              'Cloud & Distributed Computing',
              'Software Engineering',
              'Human-Computer Interaction',
              'Computer Vision',
              'Natural Language Processing',
              'Algorithms & Theory',
            ].map((area, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600"
              >
                <p className="text-gray-900">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-900 mb-6">Interested in Working with Our Faculty?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our faculty members mentor students on research projects, internships, and career development. Join our program to work alongside these experts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/admissions"
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Apply Now
            </a>
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-md border border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Contact Faculty
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
