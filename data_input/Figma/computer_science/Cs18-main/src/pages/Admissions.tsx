import { useState } from 'react';
import { Calendar, CheckCircle, FileText, Users, GraduationCap } from 'lucide-react';
import { ApplicationModal } from '../components/ApplicationModal';

export function Admissions() {
  const [modalOpen, setModalOpen] = useState(false);
  const [applicationType, setApplicationType] = useState<'undergraduate' | 'transfer' | 'international'>('undergraduate');

  const openModal = (type: 'undergraduate' | 'transfer' | 'international') => {
    setApplicationType(type);
    setModalOpen(true);
  };

  const requirements = {
    undergraduate: [
      'High school diploma or equivalent',
      'Minimum GPA of 3.0 (on a 4.0 scale)',
      'SAT score of 1200+ or ACT score of 25+',
      'Completed high school courses: 4 years English, 4 years Math (including Calculus), 3 years Science',
      'Two letters of recommendation',
      'Personal statement (500-750 words)',
      'Transcripts from all high schools attended',
    ],
    transfer: [
      'Minimum of 30 transferable college credits',
      'College GPA of 3.0 or higher',
      'Completed prerequisite courses: Calculus I & II, Introduction to Programming',
      'College transcripts from all institutions attended',
      'Personal statement explaining transfer motivation',
      'One letter of recommendation from a college professor',
      'Good academic standing at current institution',
    ],
    international: [
      'All undergraduate or transfer requirements',
      'TOEFL score of 90+ (iBT) or IELTS score of 7.0+',
      'Credential evaluation of foreign transcripts',
      'Financial documentation showing ability to cover tuition and living expenses',
      'Valid passport',
      'Student visa eligibility documentation',
      'English proficiency demonstration',
    ],
  };

  const deadlines = [
    { term: 'Fall 2025 - Early Decision', date: 'November 15, 2024', status: 'closed' },
    { term: 'Fall 2025 - Regular Decision', date: 'February 1, 2025', status: 'open' },
    { term: 'Spring 2026 - Regular Decision', date: 'October 15, 2025', status: 'upcoming' },
    { term: 'Fall 2026 - Early Decision', date: 'November 15, 2025', status: 'upcoming' },
  ];

  const steps = [
    {
      number: 1,
      title: 'Submit Application',
      description: 'Complete the online application form with your personal information, academic history, and essay.',
      icon: <FileText className="w-8 h-8" />,
    },
    {
      number: 2,
      title: 'Submit Documents',
      description: 'Upload transcripts, test scores, letters of recommendation, and any additional required materials.',
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      number: 3,
      title: 'Application Review',
      description: 'Our admissions committee will carefully review your application. This process typically takes 4-6 weeks.',
      icon: <Users className="w-8 h-8" />,
    },
    {
      number: 4,
      title: 'Admission Decision',
      description: 'You will receive an admission decision via email. Accepted students will receive enrollment instructions.',
      icon: <GraduationCap className="w-8 h-8" />,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white mb-6">Admissions</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Start your journey toward a Bachelor of Science in Computer Science. We're here to guide you through every step of the application process.
          </p>
        </div>
      </section>

      {/* Application Deadlines */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="w-8 h-8 text-blue-600" />
              <h2 className="text-gray-900">Application Deadlines</h2>
            </div>
            <p className="text-xl text-gray-600">
              Mark your calendar with these important dates
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deadlines.map((deadline, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg border-2 ${
                  deadline.status === 'open'
                    ? 'border-green-500 bg-green-50'
                    : deadline.status === 'upcoming'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 bg-gray-50'
                }`}
              >
                <p className="text-gray-900 mb-2">{deadline.term}</p>
                <p className="text-gray-600 mb-3">{deadline.date}</p>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs ${
                    deadline.status === 'open'
                      ? 'bg-green-200 text-green-800'
                      : deadline.status === 'upcoming'
                      ? 'bg-blue-200 text-blue-800'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {deadline.status.charAt(0).toUpperCase() + deadline.status.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-gray-900 mb-12 text-center">Admission Requirements</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Undergraduate */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-600 text-white px-6 py-4">
                <h3 className="text-white">Undergraduate Students</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {requirements.undergraduate.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openModal('undergraduate')}
                  className="w-full mt-6 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Apply as Undergraduate
                </button>
              </div>
            </div>

            {/* Transfer */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-purple-600 text-white px-6 py-4">
                <h3 className="text-white">Transfer Students</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {requirements.transfer.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openModal('transfer')}
                  className="w-full mt-6 bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors"
                >
                  Apply as Transfer
                </button>
              </div>
            </div>

            {/* International */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-green-600 text-white px-6 py-4">
                <h3 className="text-white">International Students</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {requirements.international.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openModal('international')}
                  className="w-full mt-6 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
                >
                  Apply as International
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600">
              Follow these simple steps to complete your application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute top-8 left-1/2 w-full h-0.5 bg-blue-200 -z-10 hidden lg:block" 
                       style={{ display: index === steps.length - 1 ? 'none' : 'block' }} />
                  <div className="mb-2 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    {step.number}
                  </div>
                  <h3 className="text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Aid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-gray-900 mb-6">Financial Aid & Scholarships</h2>
              <p className="text-gray-600 mb-4">
                We are committed to making quality education accessible. We offer a variety of financial aid options including:
              </p>
              <ul className="space-y-3">
                {[
                  'Merit-based scholarships for outstanding academic achievement',
                  'Need-based financial aid packages',
                  'Research assistantships and teaching assistantships',
                  'Work-study programs',
                  'External scholarship opportunities',
                  'Payment plans and tuition assistance',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <h3 className="text-gray-900 mb-4">Tuition & Costs</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-blue-200">
                  <span className="text-gray-600">Tuition (per year)</span>
                  <span className="text-gray-900">$28,500</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-blue-200">
                  <span className="text-gray-600">Fees (per year)</span>
                  <span className="text-gray-900">$1,800</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-blue-200">
                  <span className="text-gray-600">Books & Supplies (est.)</span>
                  <span className="text-gray-900">$1,200</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-gray-900">Total (per year)</span>
                  <span className="text-gray-900">$31,500</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                * Costs shown are estimates and subject to change. Financial aid can significantly reduce out-of-pocket expenses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Apply?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step toward your future in computer science. Our admissions team is here to help you through the process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openModal('undergraduate')}
              className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Start Application
            </button>
            <a
              href="/contact"
              className="bg-blue-700 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors border border-blue-500"
            >
              Contact Admissions
            </a>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <ApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={applicationType}
      />
    </div>
  );
}
