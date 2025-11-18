import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ApplicationModal } from './ApplicationModal';
import { CheckCircle, Calendar, FileText, Users, ClipboardCheck, GraduationCap } from 'lucide-react';

export function AdmissionsPage() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const requirements = [
    {
      category: 'Academic Requirements',
      icon: GraduationCap,
      items: [
        'High school diploma or equivalent (GED)',
        'Minimum GPA of 3.0 on a 4.0 scale',
        'Completion of prerequisite courses with grade C or better',
        'SAT/ACT scores (optional for some applicants)',
      ],
    },
    {
      category: 'Prerequisite Courses',
      icon: FileText,
      items: [
        'Anatomy & Physiology I & II with lab',
        'Microbiology with lab',
        'General Chemistry with lab',
        'English Composition',
        'Psychology or Sociology',
        'Statistics or College Algebra',
      ],
    },
    {
      category: 'Additional Requirements',
      icon: ClipboardCheck,
      items: [
        'Background check clearance',
        'Health examination and immunization records',
        'CPR certification (Basic Life Support)',
        'Drug screening',
        'Letters of recommendation (2-3)',
        'Personal statement essay',
      ],
    },
  ];

  const deadlines = [
    {
      term: 'Fall 2025',
      applicationDeadline: 'March 1, 2025',
      notificationDate: 'April 15, 2025',
      enrollmentDeposit: 'May 1, 2025',
      programStart: 'August 25, 2025',
    },
    {
      term: 'Spring 2026',
      applicationDeadline: 'October 1, 2025',
      notificationDate: 'November 15, 2025',
      enrollmentDeposit: 'December 1, 2025',
      programStart: 'January 20, 2026',
    },
    {
      term: 'Fall 2026',
      applicationDeadline: 'March 1, 2026',
      notificationDate: 'April 15, 2026',
      enrollmentDeposit: 'May 1, 2026',
      programStart: 'August 24, 2026',
    },
  ];

  const applicationSteps = [
    {
      step: 1,
      title: 'Submit Online Application',
      description: 'Complete and submit the online application form along with the application fee ($50).',
    },
    {
      step: 2,
      title: 'Submit Transcripts',
      description: 'Request official transcripts from all previously attended institutions be sent directly to our admissions office.',
    },
    {
      step: 3,
      title: 'Complete Prerequisites',
      description: 'Ensure all prerequisite courses are completed or in progress by the application deadline.',
    },
    {
      step: 4,
      title: 'Letters of Recommendation',
      description: 'Arrange for 2-3 letters of recommendation from academic or professional references.',
    },
    {
      step: 5,
      title: 'Personal Statement',
      description: 'Write and submit a personal statement (500-750 words) explaining your interest in nursing and career goals.',
    },
    {
      step: 6,
      title: 'Interview (if selected)',
      description: 'Selected applicants will be invited for an interview with faculty members and admissions committee.',
    },
    {
      step: 7,
      title: 'Acceptance & Enrollment',
      description: 'Upon acceptance, submit your enrollment deposit and complete all pre-enrollment requirements.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-blue-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="mb-4 text-white">Admissions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Begin your journey to becoming a registered nurse. We're here to guide you through every
            step of the application process.
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-blue-600">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="mb-4">Ready to Apply?</h3>
                <p className="text-gray-600 mb-6">
                  Start your application today and take the first step toward your nursing career.
                </p>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 w-full"
                  onClick={() => setIsApplyModalOpen(true)}
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-300">
              <CardContent className="p-8 text-center">
                <FileText className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <h3 className="mb-4">Need More Information?</h3>
                <p className="text-gray-600 mb-6">
                  Request additional information about our program, requirements, and opportunities.
                </p>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full"
                  onClick={() => setIsInfoModalOpen(true)}
                >
                  Request Info
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Admission Requirements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Review the requirements below to ensure you're prepared for a successful application
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <req.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>{req.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {req.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex gap-2 items-start">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{item}</span>
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
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Calendar className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="mb-4">Important Deadlines</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mark your calendar with these important dates for upcoming admission cycles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deadlines.map((deadline, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="bg-blue-600 text-white">
                  <CardTitle>{deadline.term}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Application Deadline</p>
                      <p className="text-gray-900">{deadline.applicationDeadline}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Notification Date</p>
                      <p className="text-gray-900">{deadline.notificationDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Enrollment Deposit Due</p>
                      <p className="text-gray-900">{deadline.enrollmentDeposit}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Program Starts</p>
                      <p className="text-gray-900">{deadline.programStart}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Application Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow these steps to complete your application to our BSN program
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {applicationSteps.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                          <span className="text-xl">{item.step}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financial Aid Info */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Financial Aid & Scholarships</h2>
          <p className="text-gray-600 mb-8">
            We offer various financial aid options and scholarships to help make your nursing
            education more affordable. Our financial aid office can help you explore federal aid,
            institutional scholarships, and external funding opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline">
              Explore Financial Aid
            </Button>
            <Button size="lg" variant="outline">
              View Scholarships
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4 text-white">Questions About Admissions?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Our admissions team is here to help you navigate the application process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50"
              onClick={() => setIsApplyModalOpen(true)}
            >
              Start Your Application
            </Button>
            <a href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Admissions
              </Button>
            </a>
          </div>
        </div>
      </section>

      <ApplicationModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        type="apply"
      />
      <ApplicationModal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
        type="request-info"
      />
    </div>
  );
}
