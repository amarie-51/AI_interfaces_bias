import { Mail, Award, BookOpen } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Faculty() {
  const facultyMembers = [
    {
      name: 'Dr. Jennifer Martinez',
      title: 'Professor & Department Chair',
      photo: 'https://images.unsplash.com/photo-1694726556005-d3bdff7b2746?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwcm9mZXNzb3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM0NzU3Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      email: 'j.martinez@university.edu',
      specialization: 'Artificial Intelligence & Machine Learning',
      bio: 'Dr. Martinez has over 20 years of experience in AI research and education. She holds a Ph.D. from MIT and has published over 50 peer-reviewed papers in leading journals. Her current research focuses on deep learning applications in natural language processing and computer vision. Before joining academia, she worked as a senior research scientist at IBM Research.',
      education: ['Ph.D. Computer Science, MIT', 'M.S. Electrical Engineering, Stanford', 'B.S. Computer Science, UC Berkeley'],
      achievements: ['NSF CAREER Award Recipient', 'ACM Distinguished Scientist', 'Best Paper Award, ICML 2022'],
    },
    {
      name: 'Dr. Robert Chen',
      title: 'Associate Professor',
      photo: 'https://images.unsplash.com/photo-1615712278090-a935af124081?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcHJvZmVzc29yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzNDU3MzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      email: 'r.chen@university.edu',
      specialization: 'Cybersecurity & Network Security',
      bio: 'Dr. Chen is an expert in cybersecurity with extensive experience in both industry and academia. He received his Ph.D. from Carnegie Mellon University and previously worked as a security architect at Cisco Systems. His research interests include cryptography, network security protocols, and secure software development. He has consulted for government agencies on cybersecurity policy.',
      education: ['Ph.D. Computer Science, Carnegie Mellon', 'M.S. Information Security, Georgia Tech', 'B.S. Computer Engineering, Purdue'],
      achievements: ['IEEE Senior Member', 'CISSP Certified', 'Outstanding Teaching Award 2023'],
    },
    {
      name: 'Dr. Sarah Williams',
      title: 'Assistant Professor',
      photo: 'https://images.unsplash.com/photo-1694726556005-d3bdff7b2746?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwcm9mZXNzb3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM0NzU3Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      email: 's.williams@university.edu',
      specialization: 'Software Engineering & Human-Computer Interaction',
      bio: 'Dr. Williams specializes in software engineering methodologies and user experience design. She earned her Ph.D. from the University of Washington and has industry experience at Microsoft and Amazon. Her research focuses on improving developer productivity through better tools and processes, as well as designing accessible and inclusive software interfaces.',
      education: ['Ph.D. Computer Science, University of Washington', 'M.S. Software Engineering, UT Austin', 'B.S. Computer Science, UCLA'],
      achievements: ['Google Faculty Research Award', 'CHI Best Paper Award', 'Early Career Researcher Award'],
    },
    {
      name: 'Dr. Michael Thompson',
      title: 'Associate Professor',
      photo: 'https://images.unsplash.com/photo-1615712278090-a935af124081?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcHJvZmVzc29yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzNDU3MzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      email: 'm.thompson@university.edu',
      specialization: 'Data Science & Big Data Analytics',
      bio: 'Dr. Thompson is a leading researcher in data science and analytics, with expertise in distributed computing and large-scale data processing. He completed his Ph.D. at Stanford University and has collaborated with leading tech companies on big data projects. His work focuses on developing scalable algorithms for data mining, predictive analytics, and visualization.',
      education: ['Ph.D. Computer Science, Stanford', 'M.S. Statistics, UC Berkeley', 'B.S. Mathematics & CS, Cornell'],
      achievements: ['ACM Distinguished Member', 'Best Instructor Award 2022', 'KDD Service Award'],
    },
    {
      name: 'Dr. Lisa Patel',
      title: 'Professor',
      photo: 'https://images.unsplash.com/photo-1694726556005-d3bdff7b2746?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwcm9mZXNzb3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM0NzU3Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      email: 'l.patel@university.edu',
      specialization: 'Computer Graphics & Virtual Reality',
      bio: 'Dr. Patel is an internationally recognized expert in computer graphics, visualization, and virtual reality. She earned her Ph.D. from the University of Illinois and has worked with leading animation studios and game companies. Her research explores real-time rendering techniques, 3D modeling, and immersive VR/AR experiences for education and entertainment.',
      education: ['Ph.D. Computer Science, UIUC', 'M.S. Computer Graphics, Cornell', 'B.S. Computer Science, IIT Bombay'],
      achievements: ['SIGGRAPH Distinguished Artist', 'Outstanding Research Award', 'NSF Grant Recipient'],
    },
    {
      name: 'Dr. James Anderson',
      title: 'Assistant Professor',
      photo: 'https://images.unsplash.com/photo-1615712278090-a935af124081?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcHJvZmVzc29yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzNDU3MzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      email: 'j.anderson@university.edu',
      specialization: 'Cloud Computing & Distributed Systems',
      bio: 'Dr. Anderson specializes in cloud computing architectures, containerization, and distributed systems. He received his Ph.D. from UC San Diego and previously worked as a cloud solutions architect at Amazon Web Services. His research focuses on optimizing cloud resource allocation, serverless computing, and edge computing for IoT applications.',
      education: ['Ph.D. Computer Science, UC San Diego', 'M.S. Distributed Systems, MIT', 'B.S. Computer Engineering, Virginia Tech'],
      achievements: ['AWS Certified Solutions Architect', 'IEEE Cloud Computing Rising Star', 'Excellence in Teaching Award'],
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4">Our Faculty</h1>
          <p className="text-xl max-w-3xl">
            Learn from world-class educators and researchers who are passionate about teaching 
            and committed to your success. Our faculty bring cutting-edge knowledge and 
            real-world experience to the classroom.
          </p>
        </div>
      </section>

      {/* Faculty Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="mb-6">Excellence in Teaching & Research</h2>
            <p className="text-gray-700 mb-4">
              Our distinguished faculty members are leaders in their fields, bringing decades of 
              combined experience in both academia and industry. They are actively engaged in 
              groundbreaking research while maintaining a strong commitment to undergraduate education.
            </p>
            <p className="text-gray-700">
              With an average class size of 25 students, you'll receive personalized attention and 
              mentorship throughout your academic journey. Our faculty serve as advisors, research 
              supervisors, and career mentors, helping you achieve your goals.
            </p>
          </div>

          {/* Faculty Grid */}
          <div className="space-y-12">
            {facultyMembers.map((faculty, index) => (
              <div 
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-start bg-gray-50 p-8 rounded-lg`}
              >
                {/* Photo */}
                <div className="flex-shrink-0 w-full lg:w-64">
                  <ImageWithFallback
                    src={faculty.photo}
                    alt={faculty.name}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                  <div className="mt-4 space-y-2">
                    <a 
                      href={`mailto:${faculty.email}`}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">{faculty.email}</span>
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h2 className="mb-2">{faculty.name}</h2>
                  <p className="text-blue-600 mb-2">{faculty.title}</p>
                  <p className="text-gray-600 mb-6 italic">{faculty.specialization}</p>
                  
                  <p className="text-gray-700 mb-6">{faculty.bio}</p>

                  {/* Education */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                      <h3>Education</h3>
                    </div>
                    <ul className="space-y-1 ml-7">
                      {faculty.education.map((edu, eduIndex) => (
                        <li key={eduIndex} className="text-gray-700 text-sm">
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Award className="w-5 h-5 text-blue-600" />
                      <h3>Notable Achievements</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-7">
                      {faculty.achievements.map((achievement, achIndex) => (
                        <span 
                          key={achIndex}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Our Teaching Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="mb-3">Active Learning</h3>
                <p className="text-gray-700">
                  We emphasize hands-on projects and real-world applications to reinforce 
                  theoretical concepts.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="mb-3">Mentorship</h3>
                <p className="text-gray-700">
                  Faculty serve as mentors, guiding students through academic challenges and 
                  career decisions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="mb-3">Accessibility</h3>
                <p className="text-gray-700">
                  Open office hours and responsive communication ensure students get the 
                  support they need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
