import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Code, Users, Award, Briefcase, ChevronRight } from 'lucide-react';
import { useNavigation } from '../App';

export function Home() {
  const { navigate } = useNavigation();
  const highlights = [
    {
      icon: Code,
      title: 'Cutting-Edge Curriculum',
      description: 'Learn the latest programming languages, frameworks, and technologies used in industry.',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Study with professors who are leaders in AI, cybersecurity, and software engineering.',
    },
    {
      icon: Award,
      title: 'Accredited Program',
      description: 'Nationally recognized degree that meets industry standards and employer expectations.',
    },
    {
      icon: Briefcase,
      title: '95% Job Placement',
      description: 'Our graduates secure positions at top tech companies within 6 months of graduation.',
    },
  ];

  const studentStories = [
    {
      name: 'Sarah Chen',
      photo: 'https://images.unsplash.com/photo-1680983387172-aedb346ba443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzQ3MjM2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'The CS program gave me the skills and confidence to land my dream job at Google. The hands-on projects and supportive faculty made all the difference.',
      role: 'Software Engineer at Google',
    },
    {
      name: 'Marcus Johnson',
      photo: 'https://images.unsplash.com/photo-1624918479892-3e5df2910410?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbiUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM0NzIzNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'I came in with no coding experience and graduated with multiple internship offers. The professors genuinely care about student success.',
      role: 'Data Scientist at Microsoft',
    },
    {
      name: 'Priya Sharma',
      photo: 'https://images.unsplash.com/photo-1621962366578-7364ccb3352b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHN0dWRlbnQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMzNjQwODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'The collaborative environment and research opportunities helped me discover my passion for machine learning. I\'m now pursuing my PhD!',
      role: 'PhD Candidate, ML Research',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1631599143424-5bc234fbebf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYzNDUyMzkwfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="University Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-6">Bachelor of Science in Computer Science</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Transform your passion for technology into a rewarding career. Join our innovative program and become a leader in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100" onClick={() => navigate('admissions')}>
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" onClick={() => navigate('about')}>
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">Why Choose Our Program?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Bachelor's in Computer Science combines rigorous academics with practical experience, preparing you for success in the ever-evolving tech industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <highlight.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl mb-2 text-gray-900">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl mb-2">4 Years</div>
              <div className="text-xl opacity-90">Full-Time Study</div>
            </div>
            <div>
              <div className="text-5xl mb-2">120</div>
              <div className="text-xl opacity-90">Credit Hours</div>
            </div>
            <div>
              <div className="text-5xl mb-2">15:1</div>
              <div className="text-xl opacity-90">Student-Faculty Ratio</div>
            </div>
            <div>
              <div className="text-5xl mb-2">$75k</div>
              <div className="text-xl opacity-90">Average Starting Salary</div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">Student Success Stories</h2>
            <p className="text-xl text-gray-600">
              Hear from our graduates who are making an impact in the tech world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentStories.map((student, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={student.photo}
                    alt={student.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{student.quote}"
                  </blockquote>
                  <div>
                    <div className="text-gray-900">{student.name}</div>
                    <div className="text-sm text-gray-600">{student.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-4 text-gray-900">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our community of innovative thinkers and problem solvers. Applications are now open for the upcoming semester.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('admissions')}>
              Apply Now <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('contact')}>
              Request Information
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
