import { Card, CardContent } from './ui/card';
import { Mail, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Faculty() {
  const facultyMembers = [
    {
      name: 'Dr. Sarah Mitchell',
      title: 'Professor & Program Director',
      image: 'https://images.unsplash.com/photo-1762522921456-cdfe882d36c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzQwMTY4NHww&ixlib=rb-4.1.0&q=80&w=1080',
      email: 's.mitchell@csuniversity.edu',
      bio: 'Dr. Mitchell has over 15 years of experience in computer science education and research. Her research focuses on artificial intelligence and machine learning applications in healthcare. She has published over 50 peer-reviewed papers and led numerous industry-funded research projects. Prior to joining academia, she worked as a senior software engineer at a Fortune 500 technology company.',
      specializations: ['Artificial Intelligence', 'Machine Learning', 'Data Science'],
    },
    {
      name: 'Dr. James Chen',
      title: 'Associate Professor',
      image: 'https://images.unsplash.com/photo-1736066330610-c102cab4e942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwcHJvZmVzc29yJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzYzNDc3MzI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      email: 'j.chen@csuniversity.edu',
      bio: 'Dr. Chen specializes in cybersecurity and network systems. He has worked with government agencies and private companies on critical infrastructure protection and has received multiple teaching excellence awards. His research in intrusion detection systems has been widely cited in the security community. He brings real-world experience from his consulting work with major financial institutions.',
      specializations: ['Cybersecurity', 'Network Systems', 'Cryptography'],
    },
    {
      name: 'Dr. Maria Rodriguez',
      title: 'Assistant Professor',
      image: 'https://images.unsplash.com/photo-1753613648137-602c669cbe07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBzdHVkZW50JTIwY29kaW5nfGVufDF8fHx8MTc2MzQ3NzMyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      email: 'm.rodriguez@csuniversity.edu',
      bio: 'Dr. Rodriguez is an expert in software engineering and human-computer interaction. She earned her Ph.D. from MIT and has worked at leading tech companies including Google and Microsoft. Her research focuses on improving developer productivity through better tools and methodologies. She is passionate about making technology more accessible and inclusive.',
      specializations: ['Software Engineering', 'HCI', 'UX Design'],
    },
    {
      name: 'Dr. David Park',
      title: 'Professor',
      image: 'https://images.unsplash.com/photo-1758270704262-ecc82b23dc37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY29sbGVnZSUyMHN0dWRlbnRzJTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzYzNDc3MzI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      email: 'd.park@csuniversity.edu',
      bio: 'Dr. Park is a renowned researcher in distributed systems and cloud computing. He has published extensively in top-tier conferences and journals and holds several patents in cloud infrastructure. His courses on scalable systems are among the most popular in the department. He regularly collaborates with industry partners on cutting-edge cloud technologies.',
      specializations: ['Cloud Computing', 'Distributed Systems', 'Big Data'],
    },
    {
      name: 'Dr. Emily Thompson',
      title: 'Associate Professor',
      image: 'https://images.unsplash.com/photo-1689236673934-66f8e9d9279b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvbXB1dGVyJTIwbGFifGVufDF8fHx8MTc2MzQ3NzMyOHww&ixlib=rb-4.1.0&q=80&w=1080',
      email: 'e.thompson@csuniversity.edu',
      bio: 'Dr. Thompson focuses on database systems and data mining. She has over a decade of experience in both academia and industry, having worked as a data architect for several startups. Her research on efficient query processing has won multiple best paper awards. She is dedicated to helping students develop strong analytical and problem-solving skills.',
      specializations: ['Database Systems', 'Data Mining', 'Information Retrieval'],
    },
    {
      name: 'Dr. Robert Kim',
      title: 'Assistant Professor',
      image: 'https://images.unsplash.com/photo-1760629863094-5b1e8d1aae74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGZ1dHVyZXxlbnwxfHx8fDE3NjMzODg2Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      email: 'r.kim@csuniversity.edu',
      bio: 'Dr. Kim is an emerging leader in the field of mobile and web application development. With a background in full-stack development from Silicon Valley startups, he brings contemporary industry practices into the classroom. His research explores new paradigms in mobile computing and progressive web applications. He is known for his engaging teaching style and practical approach.',
      specializations: ['Mobile Development', 'Web Technologies', 'App Architecture'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1632834380561-d1e05839a33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNjM0MDA2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <h1 className="mb-4">Our Faculty</h1>
          <p className="text-xl text-gray-100">
            Learn from industry experts and leading researchers in computer science
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-gray-700 text-lg">
              Our faculty members are distinguished scholars, experienced educators, and industry professionals who are committed to student success. They bring a wealth of knowledge from both academic research and real-world industry experience, ensuring that students receive a comprehensive and current education in computer science.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    <ImageWithFallback
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-40 h-40 rounded-full object-cover mx-auto mb-4 border-4 border-blue-100"
                    />
                    <h3 className="mb-1">{faculty.name}</h3>
                    <p className="text-blue-600 mb-3">{faculty.title}</p>
                    <a
                      href={`mailto:${faculty.email}`}
                      className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      {faculty.email}
                    </a>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <p className="text-sm text-gray-700 mb-4">{faculty.bio}</p>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-4 w-4 text-blue-600" />
                        <span className="text-sm text-gray-900">Specializations</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {faculty.specializations.map((spec, specIndex) => (
                          <span
                            key={specIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="mb-4">Want to Learn More?</h2>
          <p className="text-gray-700 text-lg mb-8">
            Our faculty members are always happy to speak with prospective students about the program, research opportunities, and career paths in computer science.
          </p>
          <a href="mailto:info@csuniversity.edu">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Contact Faculty
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
