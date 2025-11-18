import { ArrowRight, Award, Users, Briefcase, TrendingUp, Globe, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const highlights = [
    {
      icon: Award,
      title: 'Top-Ranked Program',
      description: 'Nationally recognized for academic excellence and innovation',
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Learn from industry leaders and renowned researchers',
    },
    {
      icon: Briefcase,
      title: '95% Job Placement',
      description: 'Outstanding career outcomes within 6 months of graduation',
    },
    {
      icon: TrendingUp,
      title: 'Cutting-Edge Curriculum',
      description: 'Stay ahead with AI, machine learning, and emerging technologies',
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Connect with alumni and companies worldwide',
    },
    {
      icon: BookOpen,
      title: 'Research Opportunities',
      description: 'Engage in groundbreaking research from day one',
    },
  ];

  const studentStories = [
    {
      name: 'Sarah Johnson',
      photo: 'https://images.unsplash.com/photo-1657446969218-499fb1599584?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXQlMjBzbWlsaW5nfGVufDF8fHx8MTc2MzQ3NzM1MXww&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'The CS program transformed my passion for technology into a career. The hands-on projects and supportive faculty prepared me perfectly for my role at a leading tech company.',
      major: 'Class of 2024',
    },
    {
      name: 'Marcus Chen',
      photo: 'https://images.unsplash.com/photo-1704748082614-8163a88e56b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHN0dWRlbnQlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NjM0NzczNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'The research opportunities and collaboration with professors helped me publish papers and land internships at top companies. This program exceeded all my expectations.',
      major: 'Class of 2023',
    },
    {
      name: 'Emily Rodriguez',
      photo: 'https://images.unsplash.com/photo-1715808123833-eecb6547ef8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY29sbGVnZSUyMHN0dWRlbnR8ZW58MXx8fHwxNzYzNDc3MzUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      quote: 'From day one, I felt welcomed and challenged. The diverse community and innovative curriculum made learning exciting, and I graduated with skills that employers value.',
      major: 'Class of 2024',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/90 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1723697869417-207cc22b0884?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwaGVyb3xlbnwxfHx8fDE3NjM0NzczNTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-5xl md:text-6xl mb-6">
            Bachelor of Science in Computer Science
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Transform Your Future with Cutting-Edge Technology Education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => onNavigate('admissions')}
            >
              Apply Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10"
              onClick={() => onNavigate('about')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl mb-6">Why Choose Our Computer Science Program?</h2>
            <p className="text-xl text-gray-600 mb-12">
              Our Bachelor of Science in Computer Science program prepares you for success in the rapidly evolving tech industry. 
              With a perfect blend of theoretical foundations and practical applications, you'll graduate ready to tackle real-world challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                    <h3 className="text-xl mb-2">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Student Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600">
              Hear from our graduates about their transformative experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentStories.map((story, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <ImageWithFallback
                      src={story.photo}
                      alt={story.name}
                      className="w-32 h-32 rounded-full object-cover mb-4"
                    />
                    <h3 className="text-xl mb-2">{story.name}</h3>
                    <p className="text-sm text-blue-600 mb-4">{story.major}</p>
                    <p className="text-gray-600 italic">"{story.quote}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of innovators and shape the future of technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => onNavigate('admissions')}
            >
              Apply Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10"
              onClick={() => onNavigate('contact')}
            >
              Request Information
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
