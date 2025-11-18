import { CheckCircle, Calendar, FileText, UserCheck, Send, Download } from 'lucide-react';

interface AdmissionsProps {
  onOpenModal: (type: 'apply' | 'request-info') => void;
}

export function Admissions({ onOpenModal }: AdmissionsProps) {
  const requirements = [
    {
      category: 'Academic Requirements',
      items: [
        'High school diploma or equivalent with minimum 3.0 GPA',
        'Completion of prerequisite courses: Biology, Chemistry, Anatomy & Physiology',
        'Minimum grade of B in all science prerequisites',
        'SAT score of 1150+ or ACT score of 24+ (test-optional available)',
      ],
    },
    {
      category: 'Application Materials',
      items: [
        'Completed online application form',
        'Official high school and college transcripts',
        'Two letters of recommendation (one from a science teacher)',
        'Personal statement (500-750 words)',
        'Resume or list of activities and experiences',
      ],
    },
    {
      category: 'Additional Requirements',
      items: [
        'Background check and health screening upon acceptance',
        'Current CPR certification before clinical courses',
        'Proof of immunizations and TB test',
        'Health insurance coverage',
      ],
    },
  ];

  const deadlines = [
    {
      term: 'Fall 2025 Admission',
      priority: 'December 1, 2024',
      regular: 'February 1, 2025',
      notification: 'April 1, 2025',
    },
    {
      term: 'Spring 2026 Admission',
      priority: 'August 1, 2025',
      regular: 'October 1, 2025',
      notification: 'November 15, 2025',
    },
  ];

  const steps = [
    {
      number: 1,
      icon: FileText,
      title: 'Submit Application',
      description: 'Complete and submit your online application with all required materials and the $50 application fee.',
    },
    {
      number: 2,
      icon: Send,
      title: 'Send Transcripts',
      description: 'Request official transcripts from all high schools and colleges attended to be sent directly to our admissions office.',
    },
    {
      number: 3,
      icon: UserCheck,
      title: 'Interview Process',
      description: 'Selected applicants will be invited for a virtual or in-person interview with faculty and admissions committee.',
    },
    {
      number: 4,
      icon: CheckCircle,
      title: 'Receive Decision',
      description: 'Admission decisions are sent via email and applicant portal. Accepted students receive enrollment information.',
    },
    {
      number: 5,
      icon: Calendar,
      title: 'Enroll & Attend Orientation',
      description: 'Submit your enrollment deposit, complete health forms, and attend new student orientation before classes begin.',
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white mb-4">Admissions</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Start your journey to becoming a registered nurse. Learn about our admission requirements and application process.
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button
            onClick={() => onOpenModal('apply')}
            className="bg-blue-600 text-white p-6 rounded-lg hover:bg-blue-700 transition-colors text-left"
          >
            <h3 className="text-white mb-2">Apply Now</h3>
            <p className="text-blue-100">Submit your application for the BSN program</p>
          </button>
          <button
            onClick={() => onOpenModal('request-info')}
            className="bg-white border-2 border-blue-600 text-blue-900 p-6 rounded-lg hover:bg-blue-50 transition-colors text-left"
          >
            <h3 className="text-blue-900 mb-2">Request Information</h3>
            <p className="text-gray-600">Get more details about the program</p>
          </button>
          <button className="bg-white border-2 border-gray-300 text-gray-900 p-6 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <h3 className="text-gray-900 mb-2">Schedule Campus Visit</h3>
            <p className="text-gray-600">Tour our facilities and meet faculty</p>
          </button>
        </div>
      </div>

      {/* Admission Requirements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-center text-blue-900 mb-12">Admission Requirements</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {requirements.map((req, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-blue-900 mb-4">{req.category}</h3>
              <ul className="space-y-3">
                {req.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Application Deadlines */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-blue-900 mb-4">Application Deadlines</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We offer rolling admissions with priority consideration for early applications
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {deadlines.map((deadline, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-blue-900 mb-6 text-center">{deadline.term}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">Priority Deadline:</span>
                    <span className="text-blue-600">{deadline.priority}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-700">Regular Deadline:</span>
                    <span className="text-blue-600">{deadline.regular}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Notification Date:</span>
                    <span className="text-blue-600">{deadline.notification}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-center text-blue-900 mb-4">Application Process</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Follow these five steps to complete your application to the BSN program
        </p>
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-blue-200" style={{ width: '80%', marginLeft: '10%' }} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto relative z-10">
                      <Icon className="text-white" size={32} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white z-20">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-blue-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Financial Aid & Scholarships */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-blue-900 mb-6">Financial Aid & Scholarships</h2>
              <p className="text-gray-700 mb-4">
                We are committed to making nursing education accessible. Over 85% of our students receive some form of financial assistance.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Merit-based scholarships up to $15,000 per year</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Need-based financial aid packages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Federal and state grant programs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Work-study opportunities in healthcare settings</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Loan forgiveness programs for public service nurses</span>
                </li>
              </ul>
              <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                <Download size={20} />
                Download Financial Aid Guide
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-blue-900 mb-4">Estimated Cost of Attendance</h3>
              <div className="space-y-4">
                <div className="flex justify-between pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Tuition (per year):</span>
                  <span className="text-blue-900">$28,500</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Fees & Books:</span>
                  <span className="text-blue-900">$2,800</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Room & Board:</span>
                  <span className="text-blue-900">$12,400</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-gray-200">
                  <span className="text-gray-700">Personal Expenses:</span>
                  <span className="text-blue-900">$3,000</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-blue-900">Total (per year):</span>
                  <span className="text-blue-900">$46,700</span>
                </div>
              </div>
              <p className="text-gray-600 mt-6 text-sm">
                * Costs are estimates and subject to change. Financial aid can significantly reduce out-of-pocket expenses.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-center text-blue-900 mb-12">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-blue-900 mb-2">Is the program test-optional?</h3>
            <p className="text-gray-700">Yes, SAT/ACT scores are optional. We review applications holistically, considering GPA, coursework, and other factors.</p>
          </div>
          <div>
            <h3 className="text-blue-900 mb-2">Can I transfer credits?</h3>
            <p className="text-gray-700">Yes, we accept transfer credits from accredited institutions. Each transcript is evaluated individually during the application review.</p>
          </div>
          <div>
            <h3 className="text-blue-900 mb-2">What is the acceptance rate?</h3>
            <p className="text-gray-700">Our program is competitive with an acceptance rate of approximately 35%. We admit around 100 students each year.</p>
          </div>
          <div>
            <h3 className="text-blue-900 mb-2">Are international students accepted?</h3>
            <p className="text-gray-700">Yes, we welcome international students. Additional requirements include TOEFL/IELTS scores and credential evaluation.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Ready to Apply?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step toward your nursing career. Our admissions team is here to support you through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onOpenModal('apply')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Application
            </button>
            <button
              onClick={() => onOpenModal('request-info')}
              className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Contact Admissions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
