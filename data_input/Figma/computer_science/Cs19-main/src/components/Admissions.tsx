import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle, Calendar, FileText, Users, GraduationCap, Award } from 'lucide-react';
import { ApplyModal } from './ApplyModal';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Admissions() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const requirements = [
    {
      category: 'Academic Requirements',
      items: [
        'High school diploma or equivalent',
        'Minimum GPA of 3.0 on a 4.0 scale',
        'Strong performance in mathematics (Algebra II or higher)',
        'Completed coursework in science subjects',
      ],
    },
    {
      category: 'Required Documents',
      items: [
        'Completed application form',
        'Official high school transcripts',
        'Two letters of recommendation',
        'Personal statement (500-750 words)',
        'SAT/ACT scores (optional for Fall 2025)',
        'Proof of English proficiency (international students)',
      ],
    },
    {
      category: 'Preferred Qualifications',
      items: [
        'Prior programming or computer science coursework',
        'Participation in STEM activities or competitions',
        'Relevant extracurricular activities',
        'Demonstrated leadership experience',
      ],
    },
  ];

  const deadlines = [
    {
      term: 'Fall 2025',
      dates: [
        { label: 'Early Action', date: 'November 1, 2024', status: 'closed' },
        { label: 'Regular Decision', date: 'January 15, 2025', status: 'open' },
        { label: 'Rolling Admissions', date: 'March 1, 2025', status: 'upcoming' },
        { label: 'Final Deadline', date: 'May 1, 2025', status: 'upcoming' },
      ],
    },
    {
      term: 'Spring 2026',
      dates: [
        { label: 'Early Action', date: 'July 1, 2025', status: 'upcoming' },
        { label: 'Regular Decision', date: 'September 15, 2025', status: 'upcoming' },
        { label: 'Final Deadline', date: 'November 1, 2025', status: 'upcoming' },
      ],
    },
  ];

  const steps = [
    {
      number: 1,
      title: 'Submit Application',
      description: 'Complete the online application form with your personal information and academic history.',
      icon: FileText,
    },
    {
      number: 2,
      title: 'Upload Documents',
      description: 'Submit all required documents including transcripts, recommendations, and personal statement.',
      icon: GraduationCap,
    },
    {
      number: 3,
      title: 'Application Review',
      description: 'Our admissions committee will review your application. This typically takes 4-6 weeks.',
      icon: Users,
    },
    {
      number: 4,
      title: 'Receive Decision',
      description: 'You will be notified of your admission decision via email and through the application portal.',
      icon: Award,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'text-green-600 bg-green-50';
      case 'upcoming':
        return 'text-blue-600 bg-blue-50';
      case 'closed':
        return 'text-gray-600 bg-gray-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'open':
        return 'Open';
      case 'upcoming':
        return 'Upcoming';
      case 'closed':
        return 'Closed';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-blue-900/90 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1675887923978-d7079d2e2ca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBoYXBweXxlbnwxfHx8fDE3NjM0NTg4MTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Graduation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <h1 className="mb-4">Admissions</h1>
          <p className="text-xl text-gray-100 mb-6">
            Start your journey to becoming a computer science professional
          </p>
          <Button size="lg" onClick={() => setIsApplyModalOpen(true)}>
            Apply Now
          </Button>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Admission Requirements</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We seek motivated students who demonstrate academic excellence and a passion for technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{req.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {req.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deadlines */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Application Deadlines</h2>
            <p className="text-gray-600">
              Mark your calendar with these important dates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deadlines.map((deadline, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-blue-600" />
                    {deadline.term}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {deadline.dates.map((date, dateIndex) => (
                      <div key={dateIndex} className="flex justify-between items-center pb-3 border-b border-gray-200 last:border-0">
                        <div>
                          <p className="text-gray-900">{date.label}</p>
                          <p className="text-sm text-gray-600">{date.date}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(date.status)}`}>
                          {getStatusText(date.status)}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Application Process</h2>
            <p className="text-gray-600">
              Follow these simple steps to complete your application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="text-center relative">
                <CardContent className="pt-6">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                    {step.number}
                  </div>
                  <step.icon className="h-12 w-12 text-blue-600 mx-auto mb-4 mt-4" />
                  <h3 className="mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Aid Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="mb-4">Financial Aid & Scholarships</h2>
              <p className="text-gray-700 mb-4">
                We believe that financial constraints should not prevent talented students from pursuing their education. Our program offers various financial aid options and scholarships to qualified students.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Merit-based scholarships up to full tuition</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Need-based financial aid packages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Work-study opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Industry-sponsored scholarships</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600">
                Complete the FAFSA to be considered for financial aid. Scholarship applications are automatically reviewed with your admission application.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760629863094-5b1e8d1aae74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGZ1dHVyZXxlbnwxfHx8fDE3NjMzODg2Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Innovation"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="mb-4">Ready to Apply?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Take the first step toward your future in computer science
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" onClick={() => setIsApplyModalOpen(true)}>
              Start Your Application
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Apply Modal */}
      <ApplyModal open={isApplyModalOpen} onOpenChange={setIsApplyModalOpen} />
    </div>
  );
}
