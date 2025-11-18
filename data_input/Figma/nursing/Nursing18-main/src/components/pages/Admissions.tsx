import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { CheckCircle2, Calendar, FileText, UserCheck, Award, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { ApplicationModal } from '../ApplicationModal';

export function Admissions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const requirements = [
    {
      category: 'Academic Requirements',
      items: [
        'High school diploma or GED equivalent',
        'Minimum cumulative GPA of 3.0 on a 4.0 scale',
        'Completion of prerequisite courses: Biology, Chemistry, Anatomy & Physiology',
        'SAT score of 1100+ or ACT score of 22+ (optional for Fall 2025)',
      ],
    },
    {
      category: 'Application Materials',
      items: [
        'Completed online application form',
        'Official high school and college transcripts',
        'Two letters of recommendation',
        'Personal statement (500-750 words)',
        'Resume or CV highlighting relevant experience',
      ],
    },
    {
      category: 'Additional Requirements',
      items: [
        'Criminal background check',
        'Health immunization records',
        'CPR certification (required before clinical rotations)',
        'Interview with admissions committee (by invitation)',
      ],
    },
  ];

  const deadlines = [
    {
      term: 'Fall 2025',
      applicationDeadline: 'March 1, 2025',
      decisionDate: 'April 15, 2025',
      depositDeadline: 'May 1, 2025',
      status: 'Open',
    },
    {
      term: 'Spring 2026',
      applicationDeadline: 'October 1, 2025',
      decisionDate: 'November 15, 2025',
      depositDeadline: 'December 1, 2025',
      status: 'Open',
    },
  ];

  const steps = [
    {
      number: 1,
      icon: FileText,
      title: 'Submit Application',
      description: 'Complete and submit the online application form along with the $50 application fee.',
    },
    {
      number: 2,
      icon: FileText,
      title: 'Send Transcripts',
      description: 'Request official transcripts from all previously attended institutions to be sent directly to our admissions office.',
    },
    {
      number: 3,
      icon: UserCheck,
      title: 'Provide References',
      description: 'Submit two letters of recommendation from teachers, counselors, or healthcare professionals.',
    },
    {
      number: 4,
      icon: FileText,
      title: 'Write Personal Statement',
      description: 'Share your passion for nursing and career goals in a 500-750 word personal statement.',
    },
    {
      number: 5,
      icon: UserCheck,
      title: 'Interview',
      description: 'Selected candidates will be invited for an interview with our admissions committee.',
    },
    {
      number: 6,
      icon: Award,
      title: 'Receive Decision',
      description: 'Admissions decisions will be sent by email and available in your application portal.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4 text-white">Admissions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Begin your journey to becoming a skilled nursing professional. We're here to guide you through every step of the application process.
          </p>
          <Button size="lg" onClick={() => setIsModalOpen(true)} className="bg-white text-blue-600 hover:bg-gray-100">
            Start Your Application
          </Button>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Admission Requirements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We seek motivated students who demonstrate academic excellence, compassion, and a commitment to healthcare.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {requirements.map((section, index) => (
              <Card key={index} className="p-6">
                <h3 className="mb-4 text-blue-600">{section.category}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Important Note */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <div className="flex gap-3">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="mb-2">Important Information</h3>
                <p className="text-gray-700">
                  Meeting minimum requirements does not guarantee admission. Our admissions committee reviews applications holistically, considering academic performance, personal qualities, experience, and potential for success in nursing. We encourage applicants from diverse backgrounds to apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deadlines */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="w-8 h-8 text-blue-600" />
              <h2 className="mb-0">Application Deadlines</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Plan ahead and submit your application by the deadline for your intended start term.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {deadlines.map((deadline, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="mb-0">{deadline.term}</h3>
                  <Badge className="bg-green-600">{deadline.status}</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Application Deadline:</span>
                    <span className="text-gray-900">{deadline.applicationDeadline}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Decision Date:</span>
                    <span className="text-gray-900">{deadline.decisionDate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Deposit Deadline:</span>
                    <span className="text-gray-900">{deadline.depositDeadline}</span>
                  </div>
                </div>
                <Button onClick={() => setIsModalOpen(true)} className="w-full mt-6">
                  Apply for {deadline.term}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Application Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow these six steps to complete your application to the BSN program.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <Card key={index} className="p-6">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-start gap-3 mb-2">
                        <step.icon className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h3 className="mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financial Aid Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-center">Financial Aid & Scholarships</h2>
            <p className="text-gray-600 mb-8 text-center">
              We're committed to making nursing education accessible. Over 85% of our students receive some form of financial assistance.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="mb-3 text-blue-600">Merit Scholarships</h3>
                <p className="text-gray-600 mb-4">
                  Academic scholarships ranging from $2,000 to $10,000 per year based on GPA and test scores.
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Card>
              <Card className="p-6">
                <h3 className="mb-3 text-blue-600">Federal Aid</h3>
                <p className="text-gray-600 mb-4">
                  Apply for federal grants, loans, and work-study programs by completing the FAFSA.
                </p>
                <Button variant="outline" className="w-full">
                  FAFSA Information
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Ready to Apply?</h2>
          <p className="text-gray-600 mb-8 text-xl">
            Take the first step toward your nursing career. Our admissions team is here to help you through the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => setIsModalOpen(true)}>
              Start Your Application
            </Button>
            <a href="/contact">
              <Button size="lg" variant="outline">
                Contact Admissions
              </Button>
            </a>
          </div>
        </div>
      </section>

      <ApplicationModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
