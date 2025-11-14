import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Mail, MapPin } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { facultyMembers } from '../../data/mockData';

export function Faculty() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4">Our Faculty</h1>
          <p className="text-lg">
            Learn from experienced nursing professionals dedicated to your success
          </p>
        </div>
      </section>

      {/* Faculty Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4">Meet Our Expert Team</h2>
          <p className="text-gray-700 mb-8">
            Our faculty members bring a wealth of clinical experience, research expertise, and a passion for teaching. 
            They are committed to mentoring the next generation of nurses and preparing them for successful careers in healthcare.
          </p>
        </div>
      </section>

      {/* Course Coordinator */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-8 text-center">Course Coordinator</h2>
          {facultyMembers
            .filter(member => member.title.includes('Coordinator'))
            .map((faculty) => (
              <Card key={faculty.id} className="overflow-hidden">
                <div className="grid md:grid-cols-[300px_1fr] gap-6">
                  <div className="aspect-[3/4] md:aspect-auto">
                    <ImageWithFallback
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="mb-1">{faculty.name}</h3>
                      <p className="text-blue-600 mb-2">{faculty.title}</p>
                      <Badge variant="secondary">{faculty.credentials}</Badge>
                    </div>
                    
                    <p className="text-gray-700 mb-6">{faculty.bio}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${faculty.email}`} className="hover:text-blue-600">
                          {faculty.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{faculty.office}</span>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
        </div>
      </section>

      {/* Key Faculty */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-8 text-center">Key Faculty Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers
              .filter(member => !member.title.includes('Coordinator'))
              .map((faculty) => (
                <Card key={faculty.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/5] overflow-hidden">
                    <ImageWithFallback
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="mb-1">{faculty.name}</h3>
                      <p className="text-blue-600 text-sm mb-2">{faculty.title}</p>
                      <Badge variant="secondary" className="text-xs">{faculty.credentials}</Badge>
                    </div>
                    
                    <p className="text-gray-700 text-sm mb-4">{faculty.bio}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${faculty.email}`} className="hover:text-blue-600 text-sm">
                          {faculty.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{faculty.office}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

            {/* Placeholder for More Faculty */}
            <Card className="border-dashed border-2 border-gray-300 bg-gray-50">
              <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-4" />
                <h3 className="mb-2">More Faculty</h3>
                <p className="text-gray-600 text-sm">
                  Meet our full team of dedicated nursing educators and clinical instructors.
                </p>
                <p className="text-blue-600 text-sm mt-4">Coming Soon</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Faculty Expertise */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-center">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Critical Care Nursing',
              'Pediatric Nursing',
              'Mental Health Nursing',
              'Community Health',
              'Maternal-Child Health',
              'Nursing Education',
              'Evidence-Based Practice',
              'Healthcare Simulation',
            ].map((area, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <p className="text-gray-700">{area}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
