import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { CheckCircle, Calendar, FileText, UserCheck, Award } from "lucide-react";

interface AdmissionsProps {
  onApplyClick: () => void;
}

export function Admissions({ onApplyClick }: AdmissionsProps) {
  const requirements = [
    {
      category: "Academic Requirements",
      items: [
        "High school diploma or equivalent (GED)",
        "Minimum 3.0 GPA (on 4.0 scale)",
        "Completion of prerequisite courses: Biology, Chemistry, Anatomy",
        "SAT/ACT scores (optional for applicants with 3.5+ GPA)",
      ],
    },
    {
      category: "Application Materials",
      items: [
        "Completed online application form",
        "Official high school and college transcripts",
        "Two letters of recommendation",
        "Personal statement (500-750 words)",
        "Resume or CV highlighting relevant experience",
      ],
    },
    {
      category: "Additional Requirements",
      items: [
        "Background check clearance",
        "Current immunization records",
        "CPR certification (can be completed after admission)",
        "Health insurance coverage",
        "Drug screening (prior to clinical placement)",
      ],
    },
  ];

  const deadlines = [
    {
      semester: "Fall 2025",
      applicationDeadline: "March 1, 2025",
      decisionNotification: "April 15, 2025",
      enrollmentDeposit: "May 15, 2025",
      programStart: "August 25, 2025",
    },
    {
      semester: "Spring 2026",
      applicationDeadline: "October 1, 2025",
      decisionNotification: "November 15, 2025",
      enrollmentDeposit: "December 15, 2025",
      programStart: "January 15, 2026",
    },
  ];

  const steps = [
    {
      number: 1,
      icon: FileText,
      title: "Submit Application",
      description:
        "Complete the online application form and pay the $50 application fee. Provide your academic history and personal information.",
    },
    {
      number: 2,
      icon: Award,
      title: "Submit Supporting Documents",
      description:
        "Upload official transcripts, letters of recommendation, and your personal statement. Ensure all materials are received by the deadline.",
    },
    {
      number: 3,
      icon: UserCheck,
      title: "Application Review",
      description:
        "Our admissions committee will carefully review your application. Selected candidates may be invited for an interview.",
    },
    {
      number: 4,
      icon: CheckCircle,
      title: "Admission Decision",
      description:
        "Receive your admission decision by the notification date. Accepted students will receive detailed enrollment instructions.",
    },
    {
      number: 5,
      icon: Calendar,
      title: "Enroll & Register",
      description:
        "Submit your enrollment deposit to secure your spot. Complete orientation and register for your first semester courses.",
    },
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4">Admissions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your journey to becoming a registered nurse. Review our
            requirements and deadlines to prepare your application.
          </p>
        </div>

        {/* CTA Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl mb-4">Ready to Apply?</h2>
              <p className="text-xl mb-6 opacity-90">
                Applications are now open for Fall 2025 and Spring 2026
              </p>
              <Button
                size="lg"
                onClick={onApplyClick}
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Start Your Application
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Admission Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8 text-center">Admission Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {requirements.map((req, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl text-gray-900 mb-4">{req.category}</h3>
                  <ul className="space-y-3">
                    {req.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Important Deadlines */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8 text-center">Important Deadlines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {deadlines.map((deadline, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar className="w-6 h-6 text-blue-600" />
                    <h3 className="text-2xl text-gray-900">
                      {deadline.semester}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-600">Application Deadline</span>
                      <span className="text-gray-900">
                        {deadline.applicationDeadline}
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-600">Decision Notification</span>
                      <span className="text-gray-900">
                        {deadline.decisionNotification}
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <span className="text-gray-600">Enrollment Deposit Due</span>
                      <span className="text-gray-900">
                        {deadline.enrollmentDeposit}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Program Start</span>
                      <span className="text-gray-900">
                        {deadline.programStart}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Application Process Steps */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8 text-center">Application Process</h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <step.icon className="w-6 h-6 text-blue-600" />
                        <h3 className="text-xl text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Information */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl text-gray-900 mb-4">
                  Transfer Students
                </h3>
                <p className="text-gray-700 mb-4">
                  We welcome transfer students! If you've completed college
                  coursework at another institution, we'll evaluate your credits
                  for transfer. A minimum of 30 credits must be completed at our
                  institution to earn the BSN degree.
                </p>
                <p className="text-gray-700">
                  Transfer applicants should submit official transcripts from all
                  previously attended institutions along with course descriptions
                  for nursing courses.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl text-gray-900 mb-4">
                  Financial Aid & Scholarships
                </h3>
                <p className="text-gray-700 mb-4">
                  Financial assistance is available through federal student aid,
                  scholarships, and grants. Complete the FAFSA to be considered
                  for federal aid. Our nursing program offers several merit-based
                  scholarships ranging from $1,000 to $5,000.
                </p>
                <p className="text-gray-700">
                  Contact our financial aid office at finaid@university.edu to
                  learn more about funding opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg text-gray-900 mb-2">
                  What is the acceptance rate?
                </h3>
                <p className="text-gray-700">
                  Our BSN program is selective, with an acceptance rate of
                  approximately 35%. We review applications holistically,
                  considering academic performance, personal qualities, and
                  commitment to nursing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg text-gray-900 mb-2">
                  Can I work while enrolled in the program?
                </h3>
                <p className="text-gray-700">
                  While it's possible to work part-time, the program is rigorous
                  and requires significant time commitment for classes, labs, and
                  clinical rotations. Many students work 10-15 hours per week
                  during the academic year.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg text-gray-900 mb-2">
                  Do you offer campus tours?
                </h3>
                <p className="text-gray-700">
                  Yes! We offer campus tours and information sessions throughout
                  the year. Tours include visits to our simulation labs and
                  opportunities to meet current students and faculty. Contact us to
                  schedule your visit.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section>
          <Card className="bg-blue-50">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl mb-4">Have Questions?</h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Our admissions team is here to help you through every step of the
                application process. Don't hesitate to reach out!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={onApplyClick}>
                  Apply Now
                </Button>
                <Button size="lg" variant="outline">
                  Contact Admissions
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
