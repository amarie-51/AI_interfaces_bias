import { CheckCircle, Calendar, FileText, Users, Award, ClipboardCheck } from "lucide-react";
import { Button } from "./ui/button";

interface AdmissionsPageProps {
  onOpenModal: (type: "general" | "visit" | "info") => void;
}

export function AdmissionsPage({ onOpenModal }: AdmissionsPageProps) {
  const requirements = [
    {
      category: "Academic Requirements",
      items: [
        "High school diploma or equivalent (GED)",
        "Minimum cumulative GPA of 3.0 on a 4.0 scale",
        "Completion of prerequisite courses with grade of C or better:",
        "  • Biology with lab",
        "  • Chemistry with lab",
        "  • Anatomy & Physiology I & II",
        "  • Microbiology",
        "  • Psychology",
        "  • English Composition",
      ],
    },
    {
      category: "Standardized Testing",
      items: [
        "SAT score of 1100+ or ACT score of 22+ (optional for some applicants)",
        "TEAS (Test of Essential Academic Skills) score of 65% or higher",
      ],
    },
    {
      category: "Additional Requirements",
      items: [
        "Completed application form with personal essay",
        "Two letters of recommendation (academic or professional)",
        "Official high school and college transcripts (if applicable)",
        "Current CPR certification (BLS for Healthcare Providers)",
        "Criminal background check clearance",
        "Health requirements: immunizations, TB test, physical exam",
        "Interview with admissions committee (for selected applicants)",
      ],
    },
  ];

  const deadlines = [
    {
      term: "Fall Semester (August Start)",
      priority: "December 1",
      regular: "March 1",
      notification: "April 15",
    },
    {
      term: "Spring Semester (January Start)",
      priority: "August 1",
      regular: "October 1",
      notification: "November 15",
    },
  ];

  const applicationSteps = [
    {
      step: 1,
      icon: FileText,
      title: "Complete Online Application",
      description: "Submit your application through our online portal. Include your personal statement describing your interest in nursing and career goals.",
      action: "Start Application",
    },
    {
      step: 2,
      icon: ClipboardCheck,
      title: "Submit Required Documents",
      description: "Upload official transcripts, letters of recommendation, test scores, and any additional supporting materials.",
      action: "Document Checklist",
    },
    {
      step: 3,
      icon: Award,
      title: "Take TEAS Exam",
      description: "Schedule and complete the Test of Essential Academic Skills (TEAS). Prepare using our recommended study resources.",
      action: "TEAS Information",
    },
    {
      step: 4,
      icon: Users,
      title: "Complete Background & Health Requirements",
      description: "Submit criminal background check results, immunization records, and health clearance documentation.",
      action: "Requirements List",
    },
    {
      step: 5,
      icon: Calendar,
      title: "Interview (If Selected)",
      description: "Selected applicants will be invited for an interview with our admissions committee to discuss their qualifications and goals.",
      action: "Prepare for Interview",
    },
    {
      step: 6,
      icon: CheckCircle,
      title: "Receive Admission Decision",
      description: "Admission decisions are released according to the notification dates. Accepted students will receive enrollment instructions.",
      action: "Decision Timeline",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4">Admissions</h1>
          <p className="text-xl max-w-3xl">
            Start your journey toward a rewarding nursing career. Learn about our admission requirements and application process.
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Button
              size="lg"
              onClick={() => onOpenModal("general")}
              className="h-auto py-6 flex flex-col items-center"
            >
              <FileText className="h-8 w-8 mb-2" />
              <span>Apply Now</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onOpenModal("visit")}
              className="h-auto py-6 flex flex-col items-center"
            >
              <Calendar className="h-8 w-8 mb-2" />
              <span>Schedule Campus Visit</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onOpenModal("info")}
              className="h-auto py-6 flex flex-col items-center"
            >
              <Users className="h-8 w-8 mb-2" />
              <span>Request Information</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-4">Admission Requirements</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We seek students who demonstrate academic excellence, a passion for nursing, and a commitment to compassionate patient care.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="mb-4 text-blue-900">{req.category}</h3>
                <ul className="space-y-2">
                  {req.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-700">
                      {item.startsWith("  •") ? (
                        <span className="ml-6 text-gray-600">{item}</span>
                      ) : (
                        <>
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Deadlines */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-4">Application Deadlines</h2>
          <p className="text-center text-gray-600 mb-12">
            We offer rolling admissions with priority consideration for early applicants
          </p>

          <div className="space-y-6">
            {deadlines.map((deadline, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="mb-4 text-blue-900">{deadline.term}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-gray-600 mb-1">Priority Deadline</div>
                    <div className="text-gray-900">{deadline.priority}</div>
                  </div>
                  <div>
                    <div className="text-gray-600 mb-1">Regular Deadline</div>
                    <div className="text-gray-900">{deadline.regular}</div>
                  </div>
                  <div>
                    <div className="text-gray-600 mb-1">Notification Date</div>
                    <div className="text-gray-900">{deadline.notification}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <p className="text-gray-700">
              <span className="font-semibold">Note:</span> We encourage early application submission. 
              Applications are reviewed on a rolling basis, and admission decisions may be made before the 
              regular deadline. Spaces are limited, so applying early increases your chances of acceptance.
            </p>
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-4">Application Process</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Follow these steps to complete your application to the BSN program
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applicationSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    {step.step}
                  </div>
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <button className="text-blue-600 hover:text-blue-700 transition-colors">
                  {step.action} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Aid */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-4">Financial Aid & Scholarships</h2>
          <p className="text-gray-700 mb-6">
            We believe that financial constraints should not prevent qualified students from pursuing their nursing education. 
            Our financial aid office offers comprehensive support to help you fund your education through:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="mb-3">Merit Scholarships</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Presidential Scholarship (full tuition)</li>
                <li>• Dean's Scholarship (50% tuition)</li>
                <li>• Academic Excellence Award</li>
                <li>• Community Service Award</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="mb-3">Financial Assistance</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Federal student loans (FAFSA)</li>
                <li>• State grants and aid programs</li>
                <li>• Nursing workforce development grants</li>
                <li>• Payment plans and work-study</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline">
              Explore Financial Aid Options
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Admissions */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Questions About Admissions?</h2>
          <p className="text-xl mb-8">
            Our admissions counselors are here to help you navigate the application process and answer any questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => onOpenModal("general")}
              className="bg-white text-blue-900 hover:bg-gray-100"
            >
              Start Your Application
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onOpenModal("info")}
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              Contact Admissions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
