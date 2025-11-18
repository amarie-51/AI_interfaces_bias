import { useState } from 'react';
import { CheckCircle, Calendar, FileText, DollarSign, GraduationCap } from 'lucide-react';
import { Modal } from '../components/Modal';

export function Admissions() {
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [isFinancialAidModalOpen, setIsFinancialAidModalOpen] = useState(false);
  const [applicationFormData, setApplicationFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    highSchool: '',
    gpa: '',
    testScores: '',
    intendedTerm: '',
  });
  const [financialAidFormData, setFinancialAidFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    financialNeed: '',
    message: '',
  });

  const requirements = [
    {
      category: 'Academic Requirements',
      items: [
        'High school diploma or equivalent (GED)',
        'Minimum GPA of 3.0 on a 4.0 scale',
        'Completion of prerequisite courses: Algebra II, Pre-Calculus, and Physics or Chemistry',
        'Strong performance in mathematics and science courses',
      ],
    },
    {
      category: 'Standardized Tests',
      items: [
        'SAT score of 1200+ (Evidence-Based Reading & Writing + Math) OR',
        'ACT score of 24+ (Composite)',
        'Test-optional policy available for qualified applicants',
        'International students: TOEFL (80+) or IELTS (6.5+)',
      ],
    },
    {
      category: 'Application Materials',
      items: [
        'Completed online application form',
        'Official high school transcripts',
        'Personal statement (500-750 words)',
        'Two letters of recommendation (one from math/science teacher)',
        'Resume or list of extracurricular activities',
        'Application fee: $60 (fee waivers available)',
      ],
    },
  ];

  const deadlines = [
    { type: 'Early Action', date: 'November 1, 2025', decision: 'December 15, 2025', notes: 'Non-binding; increased scholarship consideration' },
    { type: 'Regular Decision', date: 'January 15, 2026', decision: 'March 31, 2026', notes: 'Standard admission track' },
    { type: 'Rolling Admission', date: 'Through May 1, 2026', decision: 'Within 4-6 weeks', notes: 'Space permitting; apply early recommended' },
    { type: 'Transfer Students', date: 'March 1, 2026 (Fall) / October 1, 2025 (Spring)', decision: 'Within 6-8 weeks', notes: 'Minimum 24 transferable credits required' },
  ];

  const applicationSteps = [
    {
      step: 1,
      title: 'Create an Account',
      description: 'Register on our admissions portal to begin your application',
      icon: <FileText className="w-8 h-8" />,
    },
    {
      step: 2,
      title: 'Complete Application',
      description: 'Fill out the online application form with your personal and academic information',
      icon: <GraduationCap className="w-8 h-8" />,
    },
    {
      step: 3,
      title: 'Submit Materials',
      description: 'Upload or request transcripts, test scores, recommendations, and personal statement',
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      step: 4,
      title: 'Pay Application Fee',
      description: 'Submit the $60 application fee or request a fee waiver if eligible',
      icon: <DollarSign className="w-8 h-8" />,
    },
    {
      step: 5,
      title: 'Track Your Application',
      description: 'Monitor your application status and respond to any requests for additional information',
      icon: <Calendar className="w-8 h-8" />,
    },
  ];

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Application submitted successfully! You will receive a confirmation email shortly.');
    setIsApplicationModalOpen(false);
    setApplicationFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      highSchool: '',
      gpa: '',
      testScores: '',
      intendedTerm: '',
    });
  };

  const handleFinancialAidSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Financial aid inquiry submitted! Our financial aid office will contact you within 2-3 business days.');
    setIsFinancialAidModalOpen(false);
    setFinancialAidFormData({
      name: '',
      email: '',
      studentId: '',
      financialNeed: '',
      message: '',
    });
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4">Admissions</h1>
          <p className="text-xl max-w-3xl">
            Join our community of future tech leaders. We're looking for motivated students 
            with a passion for technology and problem-solving.
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <button
              onClick={() => setIsApplicationModalOpen(true)}
              className="bg-blue-600 text-white p-8 rounded-lg hover:bg-blue-700 transition-colors text-center shadow-lg"
            >
              <FileText className="w-12 h-12 mx-auto mb-4" />
              <h3 className="mb-2">Start Application</h3>
              <p className="text-blue-100">Begin your journey to a CS degree</p>
            </button>
            <button
              onClick={() => setIsFinancialAidModalOpen(true)}
              className="bg-green-600 text-white p-8 rounded-lg hover:bg-green-700 transition-colors text-center shadow-lg"
            >
              <DollarSign className="w-12 h-12 mx-auto mb-4" />
              <h3 className="mb-2">Financial Aid</h3>
              <p className="text-green-100">Explore scholarships and aid options</p>
            </button>
            <a
              href="#steps"
              className="bg-purple-600 text-white p-8 rounded-lg hover:bg-purple-700 transition-colors text-center shadow-lg"
            >
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <h3 className="mb-2">Application Guide</h3>
              <p className="text-purple-100">Learn about the application process</p>
            </a>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Admission Requirements</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="mb-6 text-blue-600">{req.category}</h3>
                <ul className="space-y-3">
                  {req.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mr-3 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deadlines */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-4">Application Deadlines</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We offer multiple application options to accommodate different schedules and situations. 
            Apply early for best consideration for scholarships and housing.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Application Type</th>
                  <th className="px-6 py-4 text-left">Deadline</th>
                  <th className="px-6 py-4 text-left">Decision Date</th>
                  <th className="px-6 py-4 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {deadlines.map((deadline, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <span className="text-blue-600">{deadline.type}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{deadline.date}</td>
                    <td className="px-6 py-4 text-gray-700">{deadline.decision}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{deadline.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section id="steps" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">How to Apply</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {applicationSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{step.step}</span>
                </div>
                <div className="text-blue-600 mb-3 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => setIsApplicationModalOpen(true)}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Begin Your Application
            </button>
          </div>
        </div>
      </section>

      {/* Financial Aid Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Financial Aid & Scholarships</h2>
            <div className="bg-blue-50 p-8 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                We believe that financial circumstances should never be a barrier to quality education. 
                Over 85% of our students receive some form of financial aid, including scholarships, 
                grants, work-study, and loans.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="mb-3 text-blue-600">Merit Scholarships</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Presidential Scholarship: Full tuition</li>
                    <li>• Dean's Scholarship: $15,000/year</li>
                    <li>• Achievement Award: $10,000/year</li>
                    <li>• STEM Excellence Award: $8,000/year</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 text-blue-600">Need-Based Aid</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Federal Pell Grants</li>
                    <li>• State grants and scholarships</li>
                    <li>• University need-based grants</li>
                    <li>• Federal work-study programs</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={() => setIsFinancialAidModalOpen(true)}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Inquire About Financial Aid
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <Modal
        isOpen={isApplicationModalOpen}
        onClose={() => setIsApplicationModalOpen(false)}
        title="Start Your Application"
      >
        <form onSubmit={handleApplicationSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block mb-2 text-sm">First Name *</label>
              <input
                type="text"
                id="firstName"
                required
                value={applicationFormData.firstName}
                onChange={(e) => setApplicationFormData({ ...applicationFormData, firstName: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-2 text-sm">Last Name *</label>
              <input
                type="text"
                id="lastName"
                required
                value={applicationFormData.lastName}
                onChange={(e) => setApplicationFormData({ ...applicationFormData, lastName: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">Email Address *</label>
            <input
              type="email"
              id="email"
              required
              value={applicationFormData.email}
              onChange={(e) => setApplicationFormData({ ...applicationFormData, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm">Phone Number *</label>
            <input
              type="tel"
              id="phone"
              required
              value={applicationFormData.phone}
              onChange={(e) => setApplicationFormData({ ...applicationFormData, phone: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="highSchool" className="block mb-2 text-sm">High School *</label>
            <input
              type="text"
              id="highSchool"
              required
              value={applicationFormData.highSchool}
              onChange={(e) => setApplicationFormData({ ...applicationFormData, highSchool: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="gpa" className="block mb-2 text-sm">GPA *</label>
              <input
                type="text"
                id="gpa"
                required
                placeholder="3.5"
                value={applicationFormData.gpa}
                onChange={(e) => setApplicationFormData({ ...applicationFormData, gpa: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="testScores" className="block mb-2 text-sm">SAT/ACT Score</label>
              <input
                type="text"
                id="testScores"
                placeholder="Optional"
                value={applicationFormData.testScores}
                onChange={(e) => setApplicationFormData({ ...applicationFormData, testScores: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="intendedTerm" className="block mb-2 text-sm">Intended Start Term *</label>
            <select
              id="intendedTerm"
              required
              value={applicationFormData.intendedTerm}
              onChange={(e) => setApplicationFormData({ ...applicationFormData, intendedTerm: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a term</option>
              <option value="Fall 2026">Fall 2026</option>
              <option value="Spring 2027">Spring 2027</option>
              <option value="Fall 2027">Fall 2027</option>
            </select>
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors"
            >
              Submit Application
            </button>
          </div>
          <p className="text-xs text-gray-600 text-center">
            This is a preliminary form. You'll receive an email with instructions to complete your full application.
          </p>
        </form>
      </Modal>

      {/* Financial Aid Modal */}
      <Modal
        isOpen={isFinancialAidModalOpen}
        onClose={() => setIsFinancialAidModalOpen(false)}
        title="Financial Aid Inquiry"
      >
        <form onSubmit={handleFinancialAidSubmit} className="space-y-4">
          <div>
            <label htmlFor="aidName" className="block mb-2 text-sm">Full Name *</label>
            <input
              type="text"
              id="aidName"
              required
              value={financialAidFormData.name}
              onChange={(e) => setFinancialAidFormData({ ...financialAidFormData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="aidEmail" className="block mb-2 text-sm">Email Address *</label>
            <input
              type="email"
              id="aidEmail"
              required
              value={financialAidFormData.email}
              onChange={(e) => setFinancialAidFormData({ ...financialAidFormData, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="studentId" className="block mb-2 text-sm">Student ID (if applicable)</label>
            <input
              type="text"
              id="studentId"
              value={financialAidFormData.studentId}
              onChange={(e) => setFinancialAidFormData({ ...financialAidFormData, studentId: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="financialNeed" className="block mb-2 text-sm">Type of Aid Interested In *</label>
            <select
              id="financialNeed"
              required
              value={financialAidFormData.financialNeed}
              onChange={(e) => setFinancialAidFormData({ ...financialAidFormData, financialNeed: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select an option</option>
              <option value="Merit Scholarships">Merit Scholarships</option>
              <option value="Need-Based Aid">Need-Based Aid</option>
              <option value="Work-Study">Work-Study Programs</option>
              <option value="Loans">Student Loans</option>
              <option value="General Information">General Information</option>
            </select>
          </div>
          <div>
            <label htmlFor="aidMessage" className="block mb-2 text-sm">Questions or Additional Information</label>
            <textarea
              id="aidMessage"
              rows={4}
              value={financialAidFormData.message}
              onChange={(e) => setFinancialAidFormData({ ...financialAidFormData, message: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition-colors"
            >
              Submit Inquiry
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
