import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle, Briefcase, GraduationCap, TrendingUp } from "lucide-react";
import { careerOutcomes, keyFacts } from "../data/mockData";

export function AboutPage() {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      {/* Program Overview */}
      <section className="mb-16">
        <h1 className="mb-6">About Our Program</h1>
        <div className="prose max-w-none">
          <p className="text-gray-600 text-lg mb-6">
            The Bachelor of Computer Science program is designed to provide students with a 
            comprehensive education in computing fundamentals, software development, and emerging 
            technologies. Our curriculum combines theoretical knowledge with practical skills, 
            preparing graduates for successful careers in the rapidly evolving tech industry.
          </p>
          <p className="text-gray-600 text-lg">
            Through a combination of rigorous coursework, hands-on projects, and industry 
            partnerships, students gain expertise in programming, algorithms, data structures, 
            artificial intelligence, cybersecurity, and more. Our graduates are equipped to 
            tackle complex technical challenges and drive innovation in their chosen fields.
          </p>
        </div>
      </section>

      {/* Key Facts */}
      <section className="mb-16">
        <h2 className="mb-8">Program at a Glance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyFacts.map((fact, index) => (
            <Card key={index} className="text-center border-2">
              <CardHeader>
                <CardTitle className="text-lg">{fact.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-600">{fact.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Program Features */}
      <section className="mb-16">
        <h2 className="mb-8">What Sets Us Apart</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="text-blue-600" size={24} />
                <CardTitle>Comprehensive Curriculum</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600">Core computer science fundamentals and theory</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600">Specialization tracks in AI, Security, and Web Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600">Capstone projects with real-world applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600">Elective courses to match your career goals</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="text-blue-600" size={24} />
                <CardTitle>Industry Connections</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600">Internship opportunities with leading tech companies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600">Guest lectures from industry professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600">Career fairs and networking events</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600">Alumni mentorship program</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="text-blue-600" size={24} />
                <CardTitle>Cutting-Edge Research</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600">Research opportunities in AI and machine learning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600">Access to state-of-the-art computing facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600">Collaborative projects with faculty researchers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600">Publication opportunities in academic journals</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="text-blue-600" size={24} />
                <CardTitle>Student Support</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600">Academic advising and mentorship</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600">Tutoring and study groups</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600">Career counseling and resume workshops</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600">Technical interview preparation</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="mb-16">
        <h2 className="mb-4">Career Prospects</h2>
        <p className="text-gray-600 mb-8">
          Our graduates pursue diverse and rewarding careers in technology. Here are some of the 
          most common career paths and their average salary ranges:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerOutcomes.map((career, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{career.title}</CardTitle>
                <Badge className="w-fit bg-green-100 text-green-800">
                  {career.averageSalary}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{career.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Diversity & Inclusion */}
      <section className="mb-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
        <h2 className="mb-4">Diversity & Inclusion</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="mb-3">Inclusive Community</h3>
            <p className="text-gray-600">
              We are committed to creating an inclusive environment where students of all genders, 
              backgrounds, and identities can thrive. Our program actively supports diversity in 
              tech through mentorship programs, scholarship opportunities, and student organizations.
            </p>
          </div>
          <div>
            <h3 className="mb-3">Equal Opportunity</h3>
            <p className="text-gray-600">
              We believe that diverse perspectives drive innovation. Our faculty and staff work 
              to ensure all students have equal access to opportunities, resources, and support 
              throughout their academic journey and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="bg-blue-50 rounded-lg p-8">
        <h2 className="mb-4">Accreditation & Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="mb-3">Program Accreditation</h3>
            <p className="text-gray-600">
              Our Computer Science program is accredited by the Computing Accreditation 
              Commission of ABET, ensuring the highest quality education standards.
            </p>
          </div>
          <div>
            <h3 className="mb-3">Industry Recognition</h3>
            <p className="text-gray-600">
              Ranked among the top 50 computer science programs nationally, with strong 
              partnerships with leading technology companies including Google, Microsoft, and Amazon.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
