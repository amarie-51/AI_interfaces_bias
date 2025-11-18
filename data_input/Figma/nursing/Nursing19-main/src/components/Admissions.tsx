import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle2, Calendar, FileText, UserCheck, Mail, FileCheck } from 'lucide-react';
import { ApplicationModal } from './ApplicationModal';
import { useState } from 'react';

export function Admissions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const requirements = [
    {
      category: 'Academic Requirements',
      items: [
        'High school diploma or equivalent (GED)',
        'Minimum GPA of 3.0 on a 4.0 scale',
        'Completion of prerequisite courses: Biology, Chemistry, Anatomy & Physiology',
        'SAT/ACT scores (optional for recent high school graduates)',
      ],
    },
    {
      category: 'Additional Requirements',
      items: [
        'Completed application form with personal statement',
        'Official high school and college transcripts (if applicable)',
        'Two letters of recommendation',
        'Background check and drug screening (upon acceptance)',
        'Current CPR certification (before clinical courses)',
        'Proof of immunizations and health clearance',
      ],
    },
  ];

  const deadlines = [
    {
      term: 'Fall Semester',
      priority: 'February 1',
      regular: 'April 15',
      notification: 'May 1',
    },
    {
      term: 'Spring Semester',
      priority: 'October 1',
      regular: 'November 15',
      notification: 'December 1',
    },
  ];

  const steps = [
    {
      icon: FileText,
      title: 'Submit Application',
      description: 'Complete and submit the online application form along with your personal statement explaining your interest in nursing.',
    },
    {
      icon: FileCheck,
      title: 'Send Transcripts',
      description: 'Request official transcripts from all previously attended institutions to be sent directly to our admissions office.',
    },
    {
      icon: Mail,
      title: 'Provide Recommendations',
      description: 'Arrange for two letters of recommendation from teachers, counselors, or healthcare professionals who can speak to your abilities.',
    },
    {
      icon: UserCheck,
      title: 'Complete Interview',
      description: 'Qualified applicants will be invited for an interview with faculty members to discuss your goals and readiness for the program.',
    },
    {
      icon: CheckCircle2,
      title: 'Receive Decision',
      description: 'Admission decisions are sent by the notification date. Accepted students will receive enrollment instructions and next steps.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-white">Admissions</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Take the first step toward your nursing career. Learn about our admission requirements 
            and application process.
          </p>
        </div>
      </section>

      {/* Quick Apply CTA */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 text-center">
            <h2 className="mb-4">Ready to Apply?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Start your application today and join our community of future nursing professionals.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => setIsModalOpen(true)}
            >
              Start Your Application
            </Button>
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center">Admission Requirements</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {requirements.map((req, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-blue-600">{req.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {req.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
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

      {/* Application Deadlines */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center">Application Deadlines</h2>
          <div className="max-w-4xl mx-auto">
            {deadlines.map((deadline, index) => (
              <Card key={index} className={index > 0 ? 'mt-6' : ''}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-blue-600" />
                    <CardTitle>{deadline.term}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Priority Deadline</p>
                      <p className="text-gray-900">{deadline.priority}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Regular Deadline</p>
                      <p className="text-gray-900">{deadline.regular}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Notification Date</p>
                      <p className="text-gray-900">{deadline.notification}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-sm text-gray-600 mt-6">
            Priority applicants receive early consideration for admission and scholarships
          </p>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center">Application Process</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Follow these steps to complete your application to the BSN program
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-center mb-2">
                        <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm mb-3">
                          Step {index + 1}
                        </span>
                      </div>
                      <h3 className="text-center mb-3">{step.title}</h3>
                      <p className="text-sm text-gray-600 text-center">{step.description}</p>
                    </CardContent>
                  </Card>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transfer Students */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100">
            <CardHeader>
              <CardTitle className="text-center">Transfer Students</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                We welcome transfer students! If you have completed college-level coursework, 
                you may be eligible to transfer credits toward your BSN degree. Transfer credits 
                are evaluated on a case-by-case basis.
              </p>
              <div className="space-y-2 text-left max-w-2xl mx-auto mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Transfer up to 60 credits from previous institutions</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Credits must be from regionally accredited institutions</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Minimum grade of C required for transfer credits</span>
                </div>
              </div>
              <Button
                variant="outline"
                onClick={() => setIsModalOpen(true)}
              >
                Apply as Transfer Student
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Financial Aid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center">Financial Aid & Scholarships</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Federal Aid</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Complete the FAFSA to determine eligibility for federal grants, loans, 
                  and work-study programs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Scholarships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Merit-based and need-based scholarships are available. All applicants 
                  are automatically considered for scholarship opportunities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Payment Plans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Flexible payment plans are available to help make your education more 
                  affordable. Contact our financial aid office for details.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-white">Questions About Admissions?</h2>
          <p className="mb-8 text-xl text-blue-100">
            Our admissions team is here to help guide you through the application process.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => setIsModalOpen(true)}
            >
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-blue-700"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Admissions
            </Button>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <ApplicationModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
