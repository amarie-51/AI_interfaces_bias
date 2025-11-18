import { Calendar, CheckCircle, FileText, Users, Clock, DollarSign } from 'lucide-react';
import { useState } from 'react';
import { ApplicationModal } from './ApplicationModal';

export function Admissions() {
  const [modalOpen, setModalOpen] = useState(false);
  const [applicationType, setApplicationType] = useState<'undergraduate' | 'international' | 'transfer'>('undergraduate');

  const requirements = {
    undergraduate: [
      'High school diploma or equivalent with minimum 3.0 GPA',
      'Strong foundation in mathematics (Algebra II, Pre-Calculus recommended)',
      'Official high school transcripts',
      'SAT (1200+) or ACT (26+) scores',
      'Two letters of recommendation',
      'Personal statement (500-750 words)',
      'Resume or list of activities and achievements',
      'Application fee: $75 (waived for eligible students)',
    ],
    international: [
      'Equivalent of U.S. high school diploma',
      'Minimum GPA of 3.0 (or equivalent)',
      'TOEFL (80+ iBT) or IELTS (6.5+) for non-native English speakers',
      'Evaluation of foreign transcripts by approved agencies',
      'Financial documentation showing ability to cover tuition and expenses',
      'Passport copy and visa documentation',
      'SAT/ACT scores (recommended but not required)',
      'Personal statement and letters of recommendation',
    ],
    transfer: [
      'Minimum of 12 transferable college credits',
      'College GPA of 2.5 or higher',
      'Official transcripts from all colleges attended',
      'High school transcripts if fewer than 30 credits completed',
      'Course descriptions for transfer credit evaluation',
      'Personal statement explaining reason for transfer',
      'Good standing at previous institution(s)',
      'Application fee: $75',
    ],
  };

  const deadlines = [
    {
      semester: 'Fall 2025',
      earlyAction: 'November 15, 2024',
      regularDecision: 'February 1, 2025',
      international: 'December 15, 2024',
      decision: 'Rolling (4-6 weeks)',
    },
    {
      semester: 'Spring 2026',
      earlyAction: 'N/A',
      regularDecision: 'October 1, 2025',
      international: 'September 1, 2025',
      decision: 'Rolling (4-6 weeks)',
    },
  ];

  const applicationSteps = [
    {
      number: 1,
      title: 'Submit Application',
      description: 'Complete the online application form with personal information, academic history, and essay.',
      icon: <FileText className="w-8 h-8" />,
    },
    {
      number: 2,
      title: 'Submit Documents',
      description: 'Upload transcripts, test scores, letters of recommendation, and supporting materials.',
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      number: 3,
      title: 'Application Review',
      description: 'Our admissions committee carefully reviews all materials to assess your fit for the program.',
      icon: <Users className="w-8 h-8" />,
    },
    {
      number: 4,
      title: 'Receive Decision',
      description: 'Get notified of your admission decision via email and online portal within 4-6 weeks.',
      icon: <Calendar className="w-8 h-8" />,
    },
  ];

  const tuitionInfo = [
    { label: 'In-State Tuition', value: '$12,000 per year', icon: <DollarSign className="w-6 h-6" /> },
    { label: 'Out-of-State Tuition', value: '$28,000 per year', icon: <DollarSign className="w-6 h-6" /> },
    { label: 'International Tuition', value: '$32,000 per year', icon: <DollarSign className="w-6 h-6" /> },
    { label: 'Average Financial Aid', value: '$8,500 per year', icon: <DollarSign className="w-6 h-6" /> },
  ];

  const handleApplyClick = (type: 'undergraduate' | 'international' | 'transfer') => {
    setApplicationType(type);
    setModalOpen(true);
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-4">Admissions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Start your journey to becoming a technology leader. We're excited to learn more about you.
          </p>
        </div>
      </div>

      {/* Application Buttons */}
      <div className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button
              onClick={() => handleApplyClick('undergraduate')}
              className="p-6 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-left"
            >
              <h3 className="text-gray-900 mb-2">Undergraduate Application</h3>
              <p className="text-gray-600 mb-4">For first-year students applying directly from high school</p>
              <span className="text-blue-600">Apply Now →</span>
            </button>
            <button
              onClick={() => handleApplyClick('international')}
              className="p-6 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-left"
            >
              <h3 className="text-gray-900 mb-2">International Application</h3>
              <p className="text-gray-600 mb-4">For students applying from outside the United States</p>
              <span className="text-blue-600">Apply Now →</span>
            </button>
            <button
              onClick={() => handleApplyClick('transfer')}
              className="p-6 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-left"
            >
              <h3 className="text-gray-900 mb-2">Transfer Application</h3>
              <p className="text-gray-600 mb-4">For students transferring from other institutions</p>
              <span className="text-blue-600">Apply Now →</span>
            </button>
          </div>
        </div>
      </div>

      {/* Admission Requirements */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 text-center mb-12">Admission Requirements</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-gray-900 mb-6 pb-3 border-b border-gray-200">
                Undergraduate Students
              </h3>
              <ul className="space-y-3">
                {requirements.undergraduate.map((req, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-gray-900 mb-6 pb-3 border-b border-gray-200">
                International Students
              </h3>
              <ul className="space-y-3">
                {requirements.international.map((req, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-gray-900 mb-6 pb-3 border-b border-gray-200">
                Transfer Students
              </h3>
              <ul className="space-y-3">
                {requirements.transfer.map((req, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Application Deadlines */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 text-center mb-12">Application Deadlines</h2>
          <div className="max-w-5xl mx-auto space-y-6">
            {deadlines.map((deadline, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-gray-900 mb-6">{deadline.semester}</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <p className="text-gray-700">Early Action</p>
                    </div>
                    <p className="text-gray-900">{deadline.earlyAction}</p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <p className="text-gray-700">Regular Decision</p>
                    </div>
                    <p className="text-gray-900">{deadline.regularDecision}</p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <p className="text-gray-700">International</p>
                    </div>
                    <p className="text-gray-900">{deadline.international}</p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <p className="text-gray-700">Decision Timeline</p>
                    </div>
                    <p className="text-gray-900">{deadline.decision}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Steps */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 text-center mb-12">Application Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {applicationSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="inline-block w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                        {step.number}
                      </span>
                      <h3 className="text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tuition & Financial Aid */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 text-center mb-4">Tuition & Financial Aid</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We're committed to making quality education accessible. Over 70% of our students 
            receive some form of financial assistance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tuitionInfo.map((info, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-blue-600 flex justify-center mb-3">{info.icon}</div>
                <p className="text-gray-700 mb-2">{info.label}</p>
                <p className="text-gray-900">{info.value}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h3 className="text-gray-900 mb-4">Financial Aid Available</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Scholarships, grants, work-study programs, and loans are available. 
              Complete the FAFSA to be considered for federal and institutional aid. 
              Merit scholarships are automatically considered with your application.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Learn More About Financial Aid
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Questions About Admissions?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our admissions team is here to help guide you through the application process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:cs.admissions@university.edu"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Email Admissions
            </a>
            <a
              href="tel:+15551234567"
              className="px-8 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
            >
              Call Us: (555) 123-4567
            </a>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      <ApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={applicationType}
      />
    </div>
  );
}
