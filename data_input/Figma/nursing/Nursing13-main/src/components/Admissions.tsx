import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ApplicationModal } from './ApplicationModal';
import { 
  GraduationCap, 
  FileText, 
  Calendar, 
  CheckCircle2, 
  AlertCircle,
  ClipboardList,
  Upload,
  UserCheck,
  BookOpen
} from 'lucide-react';

export function Admissions() {
  const [modalOpen, setModalOpen] = useState(false);
  const [applicationType, setApplicationType] = useState<'fall' | 'spring' | 'info'>('fall');

  const handleApplyClick = (type: 'fall' | 'spring' | 'info') => {
    setApplicationType(type);
    setModalOpen(true);
  };

  const requirements = [
    {
      category: 'Academic Requirements',
      items: [
        'High school diploma or GED with minimum 3.0 GPA',
        'Completion of prerequisite courses: Biology, Chemistry, Anatomy & Physiology, Psychology',
        'Minimum grades of B- in all science prerequisites',
        'SAT/ACT scores (optional for 2025-2026)',
      ],
    },
    {
      category: 'Application Materials',
      items: [
        'Completed online application form',
        'Official high school and/or college transcripts',
        'Personal statement (500-750 words)',
        'Two letters of recommendation (one from science teacher preferred)',
        'Resume or list of extracurricular activities',
      ],
    },
    {
      category: 'Additional Requirements',
      items: [
        'Background check (after acceptance)',
        'Health clearance and immunization records',
        'CPR certification (can be completed during first semester)',
        'Drug screening (after acceptance)',
        'TEAS exam (Test of Essential Academic Skills) - minimum composite score of 65%',
      ],
    },
  ];

  const deadlines = [
    {
      term: 'Fall 2025 Admission',
      date: 'February 1, 2025',
      status: 'Priority Deadline',
      note: 'Applications accepted on rolling basis until June 1, 2025',
      type: 'fall' as const,
    },
    {
      term: 'Spring 2026 Admission',
      date: 'October 1, 2025',
      status: 'Priority Deadline',
      note: 'Applications accepted on rolling basis until December 1, 2025',
      type: 'spring' as const,
    },
  ];

  const applicationSteps = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Complete the online application form with your personal information and academic history.',
      icon: ClipboardList,
    },
    {
      step: 2,
      title: 'Upload Documents',
      description: 'Submit all required documents including transcripts, letters of recommendation, and personal statement.',
      icon: Upload,
    },
    {
      step: 3,
      title: 'Take TEAS Exam',
      description: 'Schedule and complete the Test of Essential Academic Skills (TEAS). We accept scores from the past 2 years.',
      icon: BookOpen,
    },
    {
      step: 4,
      title: 'Interview',
      description: 'Selected applicants will be invited for an interview with faculty members (in-person or virtual).',
      icon: UserCheck,
    },
    {
      step: 5,
      title: 'Receive Decision',
      description: 'Admissions decisions are typically sent within 4-6 weeks of completed application.',
      icon: FileText,
    },
    {
      step: 6,
      title: 'Accept & Enroll',
      description: 'Submit your enrollment deposit and complete health clearance requirements to secure your spot.',
      icon: GraduationCap,
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="mb-4">Admissions</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Start your journey to becoming a registered nurse. We're here to guide you through every step 
            of the application process.
          </p>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Application Deadlines</h2>
            <p className="text-lg text-gray-700">
              We offer two start terms each year. Apply early for the best chance of admission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {deadlines.map((deadline, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-50 to-white border-blue-200">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-6">
                    <Calendar className="h-8 w-8 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="mb-1">{deadline.term}</h3>
                      <p className="text-2xl text-blue-600 mb-2">{deadline.date}</p>
                      <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                        {deadline.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{deadline.note}</p>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => handleApplyClick(deadline.type)}
                  >
                    Apply for {deadline.term.split(' ')[0]}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Admission Requirements</h2>
            <p className="text-lg text-gray-700">
              Review the requirements below to ensure you're prepared for the application process
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    {req.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {req.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-lg max-w-4xl mx-auto">
            <div className="flex gap-3">
              <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-amber-900 mb-2">Transfer Students</h3>
                <p className="text-amber-800 text-sm">
                  Transfer students must have completed prerequisite courses with grades of B- or higher and 
                  maintain a minimum cumulative GPA of 3.0. Up to 60 credits may transfer. Contact our admissions 
                  team for a transcript evaluation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Steps */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Application Process</h2>
            <p className="text-lg text-gray-700">
              Follow these steps to complete your application to the BSN program
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {applicationSteps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white flex-shrink-0">
                      {step.step}
                    </div>
                    {index < applicationSteps.length - 1 && (
                      <div className="w-0.5 h-full bg-blue-200 mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-start gap-4">
                      <step.icon className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="mb-2">{step.title}</h3>
                        <p className="text-gray-700">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financial Information */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Tuition & Financial Aid</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <h3 className="mb-4">Cost of Attendance</h3>
                <div className="space-y-3">
                  <div className="flex justify-between pb-2 border-b">
                    <span className="text-gray-700">Tuition (per year)</span>
                    <span>$32,000</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b">
                    <span className="text-gray-700">Fees</span>
                    <span>$2,500</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b">
                    <span className="text-gray-700">Books & Supplies</span>
                    <span>$1,800</span>
                  </div>
                  <div className="flex justify-between pt-2">
                    <span>Total Estimated Cost</span>
                    <span>$36,300/year</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <h3 className="mb-4">Financial Aid Options</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Federal student loans and grants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Merit-based scholarships up to $15,000/year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Need-based financial aid</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Work-study opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Payment plans available</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Questions About Admissions?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Our admissions team is here to help you navigate the application process and answer 
            any questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => handleApplyClick('info')}
            >
              Request Information
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-blue-700"
              onClick={() => window.location.href = 'mailto:admissions@university.edu'}
            >
              Contact Admissions
            </Button>
          </div>
        </div>
      </section>

      <ApplicationModal 
        open={modalOpen} 
        onOpenChange={setModalOpen}
        applicationType={applicationType}
      />
    </div>
  );
}
