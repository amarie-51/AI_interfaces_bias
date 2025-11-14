import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { TrendingUp, Users, Building2, BookOpen } from 'lucide-react';
import { careerOutcomes, keyFacts, careerProspects } from '../../data/mockData';

export function About() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4">About Our BSN Program</h1>
          <p className="text-lg">
            A comprehensive nursing education that prepares you for a dynamic career in healthcare
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6">Program Overview</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Our Bachelor of Science in Nursing (BSN) program is designed to prepare competent, compassionate, and culturally sensitive nurses who are ready to meet the complex healthcare needs of diverse populations. The program integrates liberal arts education with professional nursing knowledge and skills.
            </p>
            <p>
              Through a combination of classroom instruction, simulation laboratory experiences, and clinical practice in various healthcare settings, students develop the critical thinking, clinical reasoning, and leadership skills necessary for professional nursing practice.
            </p>
            <p>
              The curriculum is built on a foundation of evidence-based practice and emphasizes patient-centered care, quality improvement, safety, informatics, and interprofessional collaboration. Graduates are prepared to practice in a variety of settings including hospitals, community health centers, schools, and long-term care facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-12">Career Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerOutcomes.map((outcome) => (
              <Card key={outcome.id} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="mb-2">{outcome.title}</h3>
                  <p className="text-sm text-gray-600">{outcome.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-center">Program at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFacts.map((fact, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      {index % 4 === 0 && <BookOpen className="w-5 h-5 text-blue-600" />}
                      {index % 4 === 1 && <Users className="w-5 h-5 text-blue-600" />}
                      {index % 4 === 2 && <Building2 className="w-5 h-5 text-blue-600" />}
                      {index % 4 === 3 && <TrendingUp className="w-5 h-5 text-blue-600" />}
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{fact.label}</p>
                      <p className="text-blue-600">{fact.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Prospects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-4">Career Prospects</h2>
          <p className="text-gray-700 mb-8">
            Our BSN graduates are prepared for a wide range of career opportunities in healthcare. The nursing profession offers diverse pathways for professional growth and specialization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {careerProspects.map((prospect, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700">{prospect}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Badge className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="mb-2">CCNE Accreditation</h3>
                  <p className="text-gray-700">
                    Our program is accredited by the Commission on Collegiate Nursing Education (CCNE), 
                    ensuring that we meet rigorous national standards for nursing education. This accreditation 
                    demonstrates our commitment to excellence and facilitates professional mobility for our graduates.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
