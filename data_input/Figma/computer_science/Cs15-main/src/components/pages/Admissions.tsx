import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  CheckCircle,
  Calendar,
  FileText,
  Send,
  GraduationCap,
  ClipboardCheck,
} from "lucide-react";

export function Admissions() {
  const [applicationOpen, setApplicationOpen] = useState(false);
  const [transcriptOpen, setTranscriptOpen] = useState(false);

  const requirements = [
    {
      title: "Academic Requirements",
      items: [
        "High school diploma or equivalent",
        "Minimum GPA of 3.0 on a 4.0 scale",
        "Strong performance in mathematics (Algebra II and above)",
        "Completed high school courses in science",
      ],
    },
    {
      title: "Standardized Tests",
      items: [
        "SAT: Minimum 1200 (recommended 1300+)",
        "ACT: Minimum 24 (recommended 28+)",
        "Test-optional policy available for eligible students",
      ],
    },
    {
      title: "Application Materials",
      items: [
        "Completed application form",
        "Official high school transcripts",
        "Two letters of recommendation",
        "Personal statement (500-750 words)",
        "Resume/CV (optional but recommended)",
      ],
    },
    {
      title: "Additional Considerations",
      items: [
        "Demonstrated interest in computer science",
        "Extracurricular activities and leadership",
        "Prior coding or programming experience (helpful but not required)",
        "Portfolio of projects (if applicable)",
      ],
    },
  ];

  const deadlines = [
    {
      semester: "Fall 2025",
      items: [
        { label: "Early Decision", date: "November 1, 2024" },
        { label: "Early Action", date: "December 1, 2024" },
        { label: "Regular Decision", date: "February 1, 2025" },
        { label: "Decision Notification", date: "March 15, 2025" },
      ],
    },
    {
      semester: "Spring 2026",
      items: [
        { label: "Application Deadline", date: "October 1, 2025" },
        { label: "Decision Notification", date: "November 15, 2025" },
      ],
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Submit Application",
      description:
        "Complete the online application form and pay the application fee ($60, waiver available).",
      icon: FileText,
    },
    {
      number: 2,
      title: "Submit Documents",
      description:
        "Send official transcripts, test scores, and letters of recommendation.",
      icon: Send,
    },
    {
      number: 3,
      title: "Review Process",
      description:
        "Our admissions committee will carefully review your complete application.",
      icon: ClipboardCheck,
    },
    {
      number: 4,
      title: "Receive Decision",
      description:
        "You'll be notified of your admission decision by email and through the applicant portal.",
      icon: GraduationCap,
    },
  ];

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest! This is a demo form. Your application would be submitted in the live system.");
    setApplicationOpen(false);
  };

  const handleTranscriptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! This is a demo form. Your transcript request would be submitted in the live system.");
    setTranscriptOpen(false);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6">Admissions</h1>
          <p className="text-xl max-w-3xl">
            Join our community of innovators and problem-solvers. We welcome
            students who are passionate about technology and ready to make an
            impact.
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center">Admission Requirements</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            We use a holistic review process to evaluate each applicant. Here's
            what we look for:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {requirements.map((req, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="mb-4 text-blue-600">{req.title}</h3>
                <ul className="space-y-2">
                  {req.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calendar className="h-8 w-8 text-blue-600" />
            <h2 className="text-center">Important Deadlines</h2>
          </div>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Mark your calendar with these important dates. We recommend applying
            early to maximize scholarship opportunities.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {deadlines.map((deadline, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6"
              >
                <h3 className="mb-6 text-center text-blue-600">
                  {deadline.semester}
                </h3>
                <div className="space-y-4">
                  {deadline.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex justify-between items-center pb-3 border-b last:border-b-0"
                    >
                      <span className="text-gray-700">{item.label}</span>
                      <span className="text-gray-900">{item.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center">Application Process</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Follow these simple steps to complete your application.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="mb-2 text-sm text-gray-500">Step {step.number}</div>
                <h3 className="mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action with Modals */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">Ready to Apply?</h2>
          <p className="text-xl mb-8">
            Take the first step toward your future in computer science. Our
            admissions team is here to support you throughout the process.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {/* Apply Now Dialog */}
            <Dialog open={applicationOpen} onOpenChange={setApplicationOpen}>
              <DialogTrigger asChild>
                <Button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-6">
                  Apply Now
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Application Form</DialogTitle>
                  <DialogDescription>
                    Fill out this form to start your application. This is a demo
                    form for demonstration purposes.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleApplicationSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                  <div>
                    <Label htmlFor="gpa">High School GPA *</Label>
                    <Input id="gpa" type="number" step="0.01" min="0" max="4" required />
                  </div>
                  <div>
                    <Label htmlFor="term">Intended Start Term *</Label>
                    <select id="term" className="w-full border border-gray-300 rounded-md p-2" required>
                      <option value="">Select...</option>
                      <option value="fall2025">Fall 2025</option>
                      <option value="spring2026">Spring 2026</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="statement">Personal Statement *</Label>
                    <Textarea
                      id="statement"
                      rows={4}
                      placeholder="Tell us why you want to study computer science..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            {/* Request Transcript Dialog */}
            <Dialog open={transcriptOpen} onOpenChange={setTranscriptOpen}>
              <DialogTrigger asChild>
                <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6 border border-white">
                  Request Transcript Info
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Request Transcript Information</DialogTitle>
                  <DialogDescription>
                    Get details about submitting your transcripts. This is a demo
                    form for demonstration purposes.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleTranscriptSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="transcriptName">Full Name *</Label>
                    <Input id="transcriptName" required />
                  </div>
                  <div>
                    <Label htmlFor="transcriptEmail">Email *</Label>
                    <Input id="transcriptEmail" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="schoolName">High School Name *</Label>
                    <Input id="schoolName" required />
                  </div>
                  <div>
                    <Label htmlFor="graduationYear">Graduation Year *</Label>
                    <Input id="graduationYear" type="number" min="2020" max="2030" required />
                  </div>
                  <div>
                    <Label htmlFor="transcriptNotes">Additional Notes</Label>
                    <Textarea
                      id="transcriptNotes"
                      rows={3}
                      placeholder="Any questions or special circumstances..."
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Request
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <p className="mt-8 text-sm">
            Questions? Contact our admissions office at{" "}
            <a href="mailto:admissions@university.edu" className="underline">
              admissions@university.edu
            </a>{" "}
            or call (555) 123-4567
          </p>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-blue-600 mb-4">
                <GraduationCap className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="mb-2">Scholarships Available</h3>
              <p className="text-gray-600">
                Merit-based scholarships up to full tuition for qualified
                students. Financial aid packages available.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-blue-600 mb-4">
                <Calendar className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="mb-2">Campus Visits</h3>
              <p className="text-gray-600">
                Schedule a campus tour and meet with faculty and current
                students to learn more about the program.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-blue-600 mb-4">
                <CheckCircle className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="mb-2">Transfer Students</h3>
              <p className="text-gray-600">
                We welcome transfer students and offer credit evaluation for
                previously completed coursework.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
