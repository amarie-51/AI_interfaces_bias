import { useState } from 'react';
import { ApplicationModal } from './ApplicationModal';
import { Button } from './ui/button';
import { CheckCircle, Calendar, FileText, Users, GraduationCap } from 'lucide-react';

export function Admissions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const requirements = [
    {
      category: 'Academic Requirements',
      items: [
        'High school diploma or equivalent (GED)',
        'Minimum GPA of 3.0 on a 4.0 scale',
        'Completion of prerequisite courses: Biology, Chemistry, Anatomy & Physiology',
        'SAT or ACT scores (optional for students with 3.5+ GPA)',
      ],
    },
    {
      category: 'Application Materials',
      items: [
        'Completed online application',
        'Official high school and/or college transcripts',
        'Two letters of recommendation',
        'Personal statement (500-750 words)',
        'Resume or CV highlighting healthcare experience',
      ],
    },
    {
      category: 'Additional Requirements',
      items: [
        'Background check and drug screening',
        'Current immunization records',
        'CPR certification (can be completed after admission)',
        'Interview with admissions committee',
      ],
    },
  ];

  const deadlines = [
    {
      term: 'Fall 2024',
      priority: 'February 1, 2024',
      regular: 'April 15, 2024',
      notification: 'May 15, 2024',
    },
    {
      term: 'Spring 2025',
      priority: 'September 1, 2024',
      regular: 'November 1, 2024',
      notification: 'December 1, 2024',
    },
    {
      term: 'Fall 2025',
      priority: 'February 1, 2025',
      regular: 'April 15, 2025',
      notification: 'May 15, 2025',
    },
  ];

  const steps = [
    {
      number: 1,
      title: 'Submit Application',
      description: 'Complete the online application and pay the $50 application fee.',
      icon: <FileText className="w-8 h-8" />,
    },
    {
      number: 2,
      title: 'Submit Documents',
      description: 'Send all required documents including transcripts and letters of recommendation.',
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      number: 3,
      title: 'Interview',
      description: 'Selected candidates will be invited for an interview with the admissions committee.',
      icon: <Users className="w-8 h-8" />,
    },
    {
      number: 4,
      title: 'Decision',
      description: 'Receive your admission decision and enrollment information.',
      icon: <GraduationCap className="w-8 h-8" />,
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white mb-4">Admissions</h1>
          <p className="text-xl max-w-3xl">
            Take the first step toward a rewarding career in nursing. Learn about our admission 
            requirements and application process.
          </p>
        </div>
      </section>

      {/* Quick Apply CTA */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="mb-2">Ready to Apply?</h2>
              <p className="text-gray-600">
                Start your application today and join our community of future healthcare leaders.
              </p>
            </div>
            <Button size="lg" onClick={() => setIsModalOpen(true)}>
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Admission Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-blue-900 mb-6">{req.category}</h3>
                <ul className="space-y-3">
                  {req.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Deadlines */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Application Deadlines</h2>
            <p className="text-lg text-gray-600">
              We offer multiple entry points throughout the year. Priority consideration is given 
              to applications received by the priority deadline.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md overflow-hidden">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Term</th>
                  <th className="px-6 py-4 text-left">Priority Deadline</th>
                  <th className="px-6 py-4 text-left">Regular Deadline</th>
                  <th className="px-6 py-4 text-left">Notification Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {deadlines.map((deadline, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-600" />
                        <span>{deadline.term}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{deadline.priority}</td>
                    <td className="px-6 py-4 text-gray-700">{deadline.regular}</td>
                    <td className="px-6 py-4 text-gray-700">{deadline.notification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 text-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Aid Info */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-blue-900 mb-4">Financial Aid & Scholarships</h3>
              <p className="text-gray-700 mb-4">
                We offer various financial aid options including federal student loans, grants, 
                and nursing-specific scholarships. Over 80% of our students receive some form 
                of financial assistance.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Merit-based scholarships up to $10,000/year</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Need-based grants and aid</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Work-study opportunities</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-blue-900 mb-4">Transfer Students</h3>
              <p className="text-gray-700 mb-4">
                We welcome transfer students and will evaluate your previous coursework for 
                credit transfer. Our advisors will work with you to create a personalized 
                degree completion plan.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Transfer up to 64 credits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Articulation agreements with community colleges</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Dedicated transfer student advisor</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-blue-900 mb-2">Is the program accredited?</h3>
              <p className="text-gray-700">
                Yes, our BSN program is accredited by the Commission on Collegiate Nursing 
                Education (CCNE) and approved by the State Board of Nursing.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-blue-900 mb-2">What is the acceptance rate?</h3>
              <p className="text-gray-700">
                Our program is competitive with an acceptance rate of approximately 35%. We 
                carefully review each application holistically, considering academic performance, 
                healthcare experience, and personal qualities.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-blue-900 mb-2">Can I work while in the program?</h3>
              <p className="text-gray-700">
                While the program is demanding, many students work part-time. We recommend 
                limiting work to 15-20 hours per week, especially during clinical semesters. 
                We also offer flexible scheduling for some courses.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-blue-900 mb-2">What are the clinical requirements?</h3>
              <p className="text-gray-700">
                Students complete over 800 hours of supervised clinical practice in various 
                healthcare settings including hospitals, community health centers, and specialty 
                clinics. Clinical rotations begin in the second year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Have Questions?</h2>
          <p className="text-xl mb-8">
            Our admissions team is here to help you through the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-blue-900 hover:bg-gray-100"
            >
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white/10"
            >
              <a href="/contact">Contact Admissions</a>
            </Button>
          </div>
        </div>
      </section>

      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
