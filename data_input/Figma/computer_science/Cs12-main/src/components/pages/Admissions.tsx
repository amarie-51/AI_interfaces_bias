import { Button } from '../ui/button';
import { ApplicationModal } from '../ApplicationModal';
import { useState } from 'react';
import { CheckCircle, Calendar, FileText, Users, DollarSign, Clock } from 'lucide-react';

export function Admissions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const requirements = [
    {
      title: 'Academic Requirements',
      items: [
        'High school diploma or equivalent',
        'Minimum GPA of 3.0 (on 4.0 scale)',
        'Strong performance in mathematics (Algebra II, Pre-Calculus recommended)',
        'Coursework in science (Physics, Chemistry)',
        'English proficiency (TOEFL/IELTS for international students)',
      ],
    },
    {
      title: 'Application Materials',
      items: [
        'Completed online application form',
        'Official high school transcripts',
        'SAT/ACT scores (optional but recommended)',
        'Two letters of recommendation',
        'Personal statement (500-750 words)',
        'Resume or list of extracurricular activities',
      ],
    },
    {
      title: 'Recommended Preparation',
      items: [
        'Prior programming experience (helpful but not required)',
        'Participation in STEM activities or clubs',
        'Completion of AP Computer Science (if available)',
        'Demonstration of problem-solving skills',
        'Strong analytical and logical thinking abilities',
      ],
    },
  ];

  const deadlines = [
    {
      term: 'Fall 2025',
      priority: 'December 1, 2024',
      regular: 'February 1, 2025',
      decision: 'April 1, 2025',
    },
    {
      term: 'Spring 2026',
      priority: 'August 1, 2025',
      regular: 'October 1, 2025',
      decision: 'November 15, 2025',
    },
  ];

  const steps = [
    {
      number: 1,
      title: 'Submit Application',
      description: 'Complete and submit your online application with all required materials before the deadline.',
      icon: FileText,
    },
    {
      number: 2,
      title: 'Application Review',
      description: 'Our admissions committee carefully reviews your academic achievements and potential.',
      icon: Users,
    },
    {
      number: 3,
      title: 'Decision Notification',
      description: 'Receive your admissions decision via email and through the application portal.',
      icon: CheckCircle,
    },
    {
      number: 4,
      title: 'Accept & Enroll',
      description: 'Accept your offer, pay the enrollment deposit, and register for orientation.',
      icon: Calendar,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl mb-6">Admissions</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Begin your journey to becoming a computer science professional. We're here to guide you
            through every step of the application process.
          </p>
          <Button
            size="lg"
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-blue-900 hover:bg-gray-100"
          >
            Apply Now
          </Button>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <DollarSign className="text-blue-600 mx-auto mb-3" size={40} />
              <h3 className="text-2xl text-gray-900 mb-2">$50</h3>
              <p className="text-gray-600">Application Fee</p>
              <p className="text-sm text-gray-500 mt-1">(Waiver available)</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Users className="text-blue-600 mx-auto mb-3" size={40} />
              <h3 className="text-2xl text-gray-900 mb-2">150</h3>
              <p className="text-gray-600">Students per Class</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Clock className="text-blue-600 mx-auto mb-3" size={40} />
              <h3 className="text-2xl text-gray-900 mb-2">4-6 Weeks</h3>
              <p className="text-gray-600">Decision Timeline</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <CheckCircle className="text-blue-600 mx-auto mb-3" size={40} />
              <h3 className="text-2xl text-gray-900 mb-2">45%</h3>
              <p className="text-gray-600">Acceptance Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">Admission Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-2xl text-gray-900 mb-4">{req.title}</h3>
                <ul className="space-y-3">
                  {req.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deadlines */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">Application Deadlines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {deadlines.map((deadline, index) => (
              <div key={index} className="border-2 border-blue-200 rounded-lg p-6 hover:border-blue-400 transition-colors">
                <h3 className="text-2xl text-blue-600 mb-4">{deadline.term}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Priority Deadline:</span>
                    <span className="text-gray-900">{deadline.priority}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Regular Deadline:</span>
                    <span className="text-gray-900">{deadline.regular}</span>
                  </div>
                  <div className="flex justify-between items-center border-t pt-3">
                    <span className="text-gray-700">Decision Date:</span>
                    <span className="text-gray-900">{deadline.decision}</span>
                  </div>
                </div>
                <Button
                  className="w-full mt-4"
                  onClick={() => setIsModalOpen(true)}
                >
                  Apply for {deadline.term}
                </Button>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            <strong>Note:</strong> Priority deadline applicants receive early decision notifications and priority consideration for scholarships.
          </p>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-gray-900 mb-12 text-center">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {step.number}
                </div>
                <step.icon className="text-blue-600 mx-auto mb-3" size={32} />
                <h3 className="text-xl text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Aid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-blue-50 rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <DollarSign className="text-blue-600 mx-auto mb-4" size={48} />
              <h2 className="text-3xl text-gray-900 mb-4">Financial Aid & Scholarships</h2>
              <p className="text-gray-700 mb-6">
                We're committed to making our program accessible to qualified students regardless of
                financial circumstances. Over 70% of our students receive some form of financial assistance.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded p-4">
                  <p className="text-2xl text-blue-600 mb-1">$15K</p>
                  <p className="text-sm text-gray-600">Average Merit Scholarship</p>
                </div>
                <div className="bg-white rounded p-4">
                  <p className="text-2xl text-blue-600 mb-1">$8M</p>
                  <p className="text-sm text-gray-600">Annual Aid Awarded</p>
                </div>
                <div className="bg-white rounded p-4">
                  <p className="text-2xl text-blue-600 mb-1">70%</p>
                  <p className="text-sm text-gray-600">Students Receive Aid</p>
                </div>
              </div>
              <Button variant="outline" size="lg">
                Learn About Financial Aid
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Transfer Students */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-gray-900 mb-6 text-center">Transfer Students Welcome</h2>
          <p className="text-gray-700 mb-6 text-center">
            We welcome transfer students who have completed coursework at other accredited institutions.
            Credits are evaluated on a case-by-case basis.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl text-gray-900 mb-3">Transfer Requirements</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1 mr-2" size={16} />
                  <span className="text-sm">Minimum 2.5 GPA in college coursework</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1 mr-2" size={16} />
                  <span className="text-sm">Official transcripts from all institutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1 mr-2" size={16} />
                  <span className="text-sm">Completed at least 12 transferable credits</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl text-gray-900 mb-3">Credit Transfer</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1 mr-2" size={16} />
                  <span className="text-sm">Up to 60 credits may transfer</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1 mr-2" size={16} />
                  <span className="text-sm">Courses must align with our curriculum</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1 mr-2" size={16} />
                  <span className="text-sm">Grade of C or better required for transfer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-gray-900 mb-6">Ready to Apply?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Take the first step toward your future in computer science. Our admissions team is here
            to support you throughout the application process.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" onClick={() => setIsModalOpen(true)}>
              Start Your Application
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Campus Visit
            </Button>
            <Button size="lg" variant="outline">
              Contact Admissions
            </Button>
          </div>
        </div>
      </section>

      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
