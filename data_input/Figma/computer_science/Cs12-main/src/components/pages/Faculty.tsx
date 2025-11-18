import { FacultyCard } from '../FacultyCard';

export function Faculty() {
  const facultyMembers = [
    {
      name: 'Dr. James Anderson',
      title: 'Professor & Department Chair',
      specialization: 'Artificial Intelligence & Machine Learning',
      image: 'https://images.unsplash.com/photo-1758598304704-8dc72fe16003?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzQzMjMxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Anderson has over 20 years of experience in AI research and has published more than 80 papers in leading journals. His current research focuses on deep learning applications in healthcare and natural language processing. He holds a Ph.D. in Computer Science from MIT.',
      email: 'j.anderson@university.edu',
    },
    {
      name: 'Dr. Maria Rodriguez',
      title: 'Associate Professor',
      specialization: 'Cybersecurity & Network Security',
      image: 'https://images.unsplash.com/photo-1573495804669-ec82ad00f327?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHRlY2h8ZW58MXx8fHwxNzYzMzg5MzM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Rodriguez is a leading expert in cybersecurity with extensive industry experience at major tech companies. She specializes in network security, cryptography, and secure systems design. Her research has been instrumental in developing new encryption protocols. Ph.D. from Stanford University.',
      email: 'm.rodriguez@university.edu',
    },
    {
      name: 'Dr. Michael Chen',
      title: 'Professor',
      specialization: 'Software Engineering & Systems Design',
      image: 'https://images.unsplash.com/photo-1758685848208-e108b6af94cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzb3IlMjB0ZWFjaGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzNDcyMzczfDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Chen brings a unique blend of academic rigor and industry experience, having worked as a senior architect at Google before joining academia. He specializes in large-scale distributed systems, software architecture, and agile methodologies. Ph.D. from Carnegie Mellon University.',
      email: 'm.chen@university.edu',
    },
    {
      name: 'Dr. Sarah Williams',
      title: 'Assistant Professor',
      specialization: 'Data Science & Big Data Analytics',
      image: 'https://images.unsplash.com/photo-1758685734511-4f49ce9a382b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzb3IlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjM0NzI0NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Williams is an emerging leader in data science research, focusing on machine learning applications for big data analytics. Her work on predictive modeling and data visualization has been recognized with several awards. She earned her Ph.D. from UC Berkeley.',
      email: 's.williams@university.edu',
    },
    {
      name: 'Dr. David Thompson',
      title: 'Associate Professor',
      specialization: 'Algorithms & Theory of Computation',
      image: 'https://images.unsplash.com/photo-1729697967428-5b98d11486a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzQwODg2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Thompson is renowned for his work in computational complexity and algorithm design. His research on approximation algorithms has contributed to solving real-world optimization problems. He is passionate about making theoretical computer science accessible to students. Ph.D. from Princeton University.',
      email: 'd.thompson@university.edu',
    },
    {
      name: 'Dr. Lisa Patel',
      title: 'Assistant Professor',
      specialization: 'Human-Computer Interaction & UX Design',
      image: 'https://images.unsplash.com/photo-1633381182794-01b10764b431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzNDEwNDc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Dr. Patel specializes in human-computer interaction and user experience design. Her research explores how technology can be designed to be more inclusive and accessible. She has collaborated with industry leaders to improve user interface design. Ph.D. from University of Washington.',
      email: 'l.patel@university.edu',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl mb-6">Meet Our Faculty</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn from world-class educators and researchers who are leaders in their fields
            and dedicated to your success
          </p>
        </div>
      </section>

      {/* Faculty Introduction */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-6">World-Class Education</h2>
            <p className="text-gray-700">
              Our distinguished faculty members are accomplished researchers, experienced educators,
              and industry professionals who bring real-world expertise into the classroom. They are
              committed to mentoring students, advancing the field of computer science, and fostering
              innovation through cutting-edge research.
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-8 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl text-blue-600 mb-2">25+</div>
                <p className="text-gray-700">Faculty Members</p>
              </div>
              <div>
                <div className="text-4xl text-blue-600 mb-2">500+</div>
                <p className="text-gray-700">Research Publications</p>
              </div>
              <div>
                <div className="text-4xl text-blue-600 mb-2">15:1</div>
                <p className="text-gray-700">Student-Faculty Ratio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Members */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">Our Faculty Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((faculty, index) => (
              <FacultyCard key={index} {...faculty} />
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Artificial Intelligence',
              'Machine Learning',
              'Cybersecurity',
              'Data Science',
              'Software Engineering',
              'Human-Computer Interaction',
              'Algorithms & Theory',
              'Computer Networks',
              'Cloud Computing',
              'Robotics',
              'Computer Vision',
              'Natural Language Processing',
            ].map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors">
                <p className="text-gray-900">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-gray-900 mb-6">Collaborate with Leading Researchers</h2>
          <p className="text-xl text-gray-700 mb-8">
            As a student in our program, you'll have the opportunity to work directly with faculty members
            on research projects, independent studies, and your senior capstone. Many students co-author
            publications and present at conferences.
          </p>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl text-gray-900 mb-4">Research Opportunities for Students</h3>
            <ul className="text-left space-y-3 text-gray-700 max-w-2xl mx-auto">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Undergraduate research assistantships with stipends</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Summer research programs and fellowships</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Opportunities to present at national conferences</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Access to state-of-the-art research facilities and equipment</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
