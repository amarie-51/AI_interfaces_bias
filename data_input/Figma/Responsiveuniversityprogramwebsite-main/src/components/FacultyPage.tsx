import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Mail, User } from "lucide-react";
import { faculty } from "../data/mockData";

export function FacultyPage() {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="mb-4">Our Faculty</h1>
        <p className="text-gray-600 text-lg max-w-3xl">
          Learn from experienced professors and industry professionals who are dedicated to 
          your success. Our faculty members bring a wealth of knowledge from both academia 
          and the tech industry.
        </p>
      </div>

      {/* Course Coordinator */}
      <section className="mb-16">
        <h2 className="mb-8">Course Coordinator</h2>
        <Card className="overflow-hidden max-w-4xl hover:shadow-lg transition-shadow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1 h-80 md:h-auto overflow-hidden">
              <ImageWithFallback
                src={faculty[0].image}
                alt={faculty[0].name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-2 p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-2xl">{faculty[0].name}</CardTitle>
                <CardDescription className="text-lg">{faculty[0].title}</CardDescription>
                <Badge className="w-fit mt-2 bg-blue-600">
                  {faculty[0].role}
                </Badge>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <p className="text-gray-600">{faculty[0].bio}</p>
                
                <div>
                  <p className="mb-2">Specializations:</p>
                  <div className="flex flex-wrap gap-2">
                    {faculty[0].specialization.map((spec, index) => (
                      <Badge key={index} variant="outline" className="text-blue-600 border-blue-600">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <Mail size={16} />
                  <a href={`mailto:${faculty[0].email}`} className="hover:text-blue-600">
                    {faculty[0].email}
                  </a>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </section>

      {/* Key Faculty Members */}
      <section className="mb-16">
        <h2 className="mb-8">Key Faculty Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.slice(1).map((member) => (
            <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.title}</CardDescription>
                <Badge className="w-fit mt-2 bg-blue-600">
                  {member.role}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                
                <div className="mb-4">
                  <p className="text-sm mb-2">Specializations:</p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialization.map((spec, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Mail size={14} />
                  <a href={`mailto:${member.email}`} className="hover:text-blue-600">
                    {member.email}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* More Faculty Placeholder */}
      <section className="bg-gray-50 rounded-lg p-8 text-center">
        <User size={48} className="mx-auto mb-4 text-gray-400" />
        <h3 className="mb-3">Meet More of Our Faculty</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Our program features over 20 dedicated faculty members, each bringing unique expertise 
          and experience to the classroom. Visit our full faculty directory to learn more about 
          all of our professors and their research interests.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Badge variant="outline" className="text-lg px-4 py-2">15+ Full-Time Professors</Badge>
          <Badge variant="outline" className="text-lg px-4 py-2">10+ Industry Adjuncts</Badge>
          <Badge variant="outline" className="text-lg px-4 py-2">5+ Research Fellows</Badge>
        </div>
      </section>

      {/* Office Hours & Support */}
      <section className="mt-16">
        <h2 className="mb-8">Academic Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Office Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Faculty members maintain regular office hours throughout the week. 
                Schedule appointments through the student portal or email directly.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Academic Advising</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Each student is assigned a faculty advisor to guide them through course 
                selection, career planning, and academic success.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Research Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Work alongside faculty on cutting-edge research projects in AI, 
                cybersecurity, and software engineering.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
