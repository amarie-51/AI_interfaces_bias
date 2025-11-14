import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Code, Users, Award, TrendingUp } from "lucide-react";
import { programHighlights, studentStories } from "../data/mockData";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1590579491624-f98f36d4c763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDF8fHx8MTc2MTc2ODc0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="University Campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="mb-6 text-white">
            Bachelor of Computer Science
          </h1>
          <p className="mb-8 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Shape the future of technology with a comprehensive education in computer science.
            Learn from industry experts and build real-world applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => onNavigate('admissions')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Apply Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('about')}
              className="bg-white/10 border-white text-white hover:bg-white/20"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Why Choose Our Program?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our Bachelor of Computer Science program combines rigorous academic training with
            practical, hands-on experience to prepare you for a successful career in technology.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Code className="text-blue-600" size={32} />
            </div>
            <div className="text-blue-600">120+</div>
            <p className="text-gray-600">Credits</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="text-blue-600" size={32} />
            </div>
            <div className="text-blue-600">15:1</div>
            <p className="text-gray-600">Student-Faculty Ratio</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Award className="text-blue-600" size={32} />
            </div>
            <div className="text-blue-600">95%</div>
            <p className="text-gray-600">Job Placement</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="text-blue-600" size={32} />
            </div>
            <div className="text-blue-600">$75K+</div>
            <p className="text-gray-600">Starting Salary</p>
          </div>
        </div>

        {/* Program Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programHighlights.map((highlight, index) => (
            <Card key={index} className="border-2 hover:border-blue-600 transition-colors">
              <CardHeader>
                <div className="text-4xl mb-2">{highlight.icon}</div>
                <CardTitle>{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Student Stories Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Student Success Stories</h2>
            <p className="text-gray-600">
              Hear from our students about their experiences and achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentStories.map((story) => (
              <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{story.name}</CardTitle>
                  <CardDescription>{story.year}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{story.story}</p>
                  <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700">
                    "{story.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4 text-white">Ready to Start Your Journey?</h2>
          <p className="mb-8 text-lg text-blue-100">
            Join hundreds of students who have launched successful careers in technology.
            Applications are now open for the next academic year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => onNavigate('admissions')}
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('contact')}
              className="border-white text-white hover:bg-blue-700"
            >
              Request Information
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
