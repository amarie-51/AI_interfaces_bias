import { ArrowRight, CheckCircle2, GraduationCap, Users, Award } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { images, programHighlights, studentStories } from '../../data/mockData';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={images.heroImage}
            alt="Nursing students in hospital setting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/70" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="mb-6">Bachelor of Science in Nursing</h1>
          <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto">
            Transform your passion for healthcare into a rewarding career. Join our CCNE-accredited nursing program and become a leader in patient care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate('admissions')} className="bg-white text-blue-600 hover:bg-gray-100">
              Apply Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate('about')} className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-4">Why Choose Our BSN Program?</h2>
            <p className="text-gray-600">
              Our Bachelor of Science in Nursing program combines rigorous academic coursework with extensive hands-on clinical experience, preparing you for a successful career in healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="mb-2">CCNE Accredited</h3>
                <p className="text-gray-600 text-sm">
                  Nationally recognized accreditation ensuring quality education and broad career opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="mb-2">Expert Faculty</h3>
                <p className="text-gray-600 text-sm">
                  Learn from experienced nurses and healthcare professionals dedicated to your success.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="mb-2">95% NCLEX Pass Rate</h3>
                <p className="text-gray-600 text-sm">
                  Our graduates consistently exceed national averages on the licensing examination.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-12">Program Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programHighlights.map((highlight) => (
              <Card key={highlight.id}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="mb-2">{highlight.title}</h3>
                      <p className="text-gray-600 text-sm">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-4">Student Success Stories</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Hear from our graduates about their experiences and how the program prepared them for successful nursing careers.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentStories.map((story) => (
              <Card key={story.id} className="overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 italic mb-4">"{story.quote}"</p>
                  <div>
                    <p>{story.name}</p>
                    <p className="text-sm text-gray-500">{story.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4">Ready to Start Your Nursing Journey?</h2>
          <p className="mb-8 text-lg">
            Join our community of compassionate healthcare professionals and make a difference in people's lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => onNavigate('admissions')} className="bg-white text-blue-600 hover:bg-gray-100">
              View Admissions Requirements
            </Button>
            <Button size="lg" variant="outline" onClick={() => onNavigate('contact')} className="text-white border-white hover:bg-white/10">
              Request Information
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
