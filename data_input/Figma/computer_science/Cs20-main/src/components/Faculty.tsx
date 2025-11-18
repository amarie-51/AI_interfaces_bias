import { Card, CardContent } from './ui/card';
import { Mail, BookOpen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Faculty() {
  const facultyMembers = [
    {
      name: 'Dr. Michael Anderson',
      title: 'Professor & Department Chair',
      photo: 'https://images.unsplash.com/photo-1622169804256-0eb6873ff441?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzb3IlMjBoZWFkc2hvdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjM0NzczNTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Anderson brings over 20 years of experience in artificial intelligence and machine learning. His research focuses on deep learning applications in healthcare and autonomous systems. He has published over 100 peer-reviewed papers and holds several patents in AI technologies. Prior to academia, he worked as a research scientist at leading tech companies.',
      specialization: 'Artificial Intelligence, Machine Learning',
      email: 'm.anderson@cs.edu',
    },
    {
      name: 'Dr. Sarah Chen',
      title: 'Associate Professor',
      photo: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90fGVufDF8fHx8MTc2MzQzMTY1NHww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Chen specializes in cybersecurity and network systems. Her groundbreaking work in cryptography and secure communications has received international recognition. She leads multiple research projects funded by government agencies and collaborates with industry partners on critical security infrastructure. She is passionate about mentoring students in security research.',
      specialization: 'Cybersecurity, Cryptography',
      email: 's.chen@cs.edu',
    },
    {
      name: 'Dr. James Rodriguez',
      title: 'Professor',
      photo: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzQyOTc3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Rodriguez is an expert in software engineering and distributed systems. With 15 years of industry experience before joining academia, he brings real-world insights into the classroom. His research on cloud computing architectures and microservices has influenced industry practices. He actively advises startups and serves on technical advisory boards.',
      specialization: 'Software Engineering, Cloud Computing',
      email: 'j.rodriguez@cs.edu',
    },
    {
      name: 'Dr. Emily Thompson',
      title: 'Assistant Professor',
      photo: 'https://images.unsplash.com/photo-1758685734511-4f49ce9a382b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzM3NTkwOXww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Thompson focuses on human-computer interaction and user experience design. Her research explores how technology can be made more accessible and intuitive for diverse user populations. She has won multiple teaching awards for her innovative course designs and student engagement strategies. Her work has been featured in top HCI conferences.',
      specialization: 'Human-Computer Interaction, UX Design',
      email: 'e.thompson@cs.edu',
    },
    {
      name: 'Dr. David Park',
      title: 'Associate Professor',
      photo: 'https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzNDUzNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Park is a leading researcher in data science and big data analytics. His work on scalable data processing algorithms has been adopted by major tech companies. He teaches popular courses on machine learning and data mining, and supervises numerous graduate research projects. He maintains strong connections with the data science industry.',
      specialization: 'Data Science, Big Data Analytics',
      email: 'd.park@cs.edu',
    },
    {
      name: 'Dr. Rachel Williams',
      title: 'Assistant Professor',
      photo: 'https://images.unsplash.com/photo-1758685845906-6f705cde4fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcHJvZmVzc29yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzNDc3MzU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Williams specializes in computer graphics and visualization. Her research combines artistic vision with technical expertise to create stunning visual experiences. She has worked on projects ranging from medical visualization to entertainment graphics. She encourages students to explore the creative side of computer science through innovative projects.',
      specialization: 'Computer Graphics, Visualization',
      email: 'r.williams@cs.edu',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl mb-6">Our Faculty</h1>
            <p className="text-xl">
              Learn from world-class researchers and educators who are passionate about your success
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-6">
              Our faculty members are leaders in their fields, combining cutting-edge research with 
              exceptional teaching. They bring diverse expertise spanning artificial intelligence, 
              cybersecurity, software engineering, data science, and more. With small class sizes and 
              accessible faculty, you'll have ample opportunities for mentorship, research collaboration, 
              and personalized guidance throughout your academic journey.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <ImageWithFallback
                    src={faculty.photo}
                    alt={faculty.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl mb-1">{faculty.name}</h3>
                    <p className="text-blue-600 mb-3">{faculty.title}</p>
                    <div className="flex items-start space-x-2 mb-4">
                      <BookOpen size={16} className="mt-1 flex-shrink-0 text-gray-500" />
                      <p className="text-sm text-gray-600">{faculty.specialization}</p>
                    </div>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">{faculty.bio}</p>
                    <div className="flex items-center space-x-2 text-sm text-blue-600">
                      <Mail size={16} />
                      <a href={`mailto:${faculty.email}`} className="hover:underline">
                        {faculty.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-blue-50 p-12 rounded-lg">
            <h2 className="text-3xl mb-4">Interested in Research?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our faculty welcome undergraduate students to participate in research projects. 
              Gain hands-on experience and contribute to cutting-edge discoveries in computer science.
            </p>
            <p className="text-gray-600">
              Contact faculty members directly to learn about current research opportunities and how you can get involved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
