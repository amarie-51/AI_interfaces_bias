import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { CheckCircle2, Calendar, FileText, Send, AlertCircle } from "lucide-react";

export function Admissions() {
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [transcriptModalOpen, setTranscriptModalOpen] = useState(false);
  const [infoModalOpen, setInfoModalOpen] = useState(false);

  const requirements = [
    {
      category: "Academic Requirements",
      items: [
        "High school diploma or equivalent with minimum 3.0 GPA",
        "Completion of prerequisite courses: Biology, Chemistry, Anatomy & Physiology",
        "Minimum C+ grade in all prerequisite science courses",
        "Cumulative GPA of 3.0 or higher in prerequisite courses",
      ],
    },
    {
      category: "Standardized Tests",
      items: [
        "SAT score of 1100+ or ACT score of 22+ (for recent high school graduates)",
        "TEAS (Test of Essential Academic Skills) - minimum composite score of 65%",
        "Official test scores must be sent directly from testing agency",
      ],
    },
    {
      category: "Application Materials",
      items: [
        "Completed online application form",
        "Official high school and college transcripts",
        "Two letters of recommendation (preferably from science teachers or healthcare professionals)",
        "Personal statement (500-750 words) explaining your interest in nursing",
        "Resume or CV highlighting relevant experience",
      ],
    },
    {
      category: "Additional Requirements",
      items: [
        "Background check clearance",
        "Current CPR/BLS certification (or obtained before clinical courses)",
        "Health examination and immunization records",
        "Drug screening (completed after admission)",
        "Personal interview (for selected candidates)",
      ],
    },
  ];

  const deadlines = [
    {
      intake: "Fall 2025",
      deadline: "March 1, 2025",
      notification: "April 15, 2025",
      status: "Open",
    },
    {
      intake: "Spring 2026",
      deadline: "October 1, 2025",
      notification: "November 15, 2025",
      status: "Future",
    },
    {
      intake: "Fall 2026",
      deadline: "March 1, 2026",
      notification: "April 15, 2026",
      status: "Future",
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Submit Application",
      description: "Complete and submit your online application along with the application fee of $75.",
      action: "Apply Now",
      modalType: "application",
    },
    {
      number: 2,
      title: "Submit Transcripts",
      description: "Request official transcripts from all previously attended institutions to be sent directly to our admissions office.",
      action: "Transcript Request",
      modalType: "transcript",
    },
    {
      number: 3,
      title: "Take Required Tests",
      description: "Complete the TEAS exam at an approved testing center and have scores sent to our institution.",
      action: "Register for TEAS",
      modalType: null,
    },
    {
      number: 4,
      title: "Submit Supporting Documents",
      description: "Upload your personal statement, resume, and letters of recommendation through the application portal.",
      action: "Upload Documents",
      modalType: null,
    },
    {
      number: 5,
      title: "Interview (If Selected)",
      description: "Selected applicants will be invited for a personal interview with faculty members and admissions staff.",
      action: "Schedule Interview",
      modalType: null,
    },
    {
      number: 6,
      title: "Receive Decision",
      description: "Admissions decisions are sent by email and through the application portal. Check your status regularly.",
      action: "Check Status",
      modalType: null,
    },
  ];

  const handleModalOpen = (modalType: string | null) => {
    if (modalType === "application") {
      setApplicationModalOpen(true);
    } else if (modalType === "transcript") {
      setTranscriptModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6">Admissions</h1>
            <p className="text-xl text-blue-100 mb-8">
              Begin your journey to becoming a registered nurse. We welcome motivated students who are passionate about healthcare and committed to making a difference.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
              onClick={() => setInfoModalOpen(true)}
            >
              Request Information
            </Button>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center">Application Deadlines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deadlines.map((deadline, index) => (
              <Card key={index} className={deadline.status === "Open" ? "border-2 border-blue-600" : ""}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle>{deadline.intake}</CardTitle>
                    <Badge variant={deadline.status === "Open" ? "default" : "secondary"}>
                      {deadline.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm text-gray-500">Application Deadline</div>
                        <div className="text-gray-900">{deadline.deadline}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Send className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm text-gray-500">Decision Notification</div>
                        <div className="text-gray-900">{deadline.notification}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Admission Requirements</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our admissions process is holistic, considering your academic achievements, personal experiences, and commitment to nursing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requirements.map((requirement, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    {requirement.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {requirement.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Application Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Follow these steps to complete your application to the BSN program. Our admissions team is here to support you throughout the process.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {steps.map((step, index) => (
              <Card key={index} className="border-l-4 border-l-blue-600">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <Button
                        variant={step.modalType ? "default" : "outline"}
                        onClick={() => handleModalOpen(step.modalType)}
                      >
                        {step.action}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Aid Info */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-blue-200">
              <CardContent className="p-8">
                <div className="flex gap-4 items-start">
                  <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="mb-3">Financial Aid Available</h3>
                    <p className="text-gray-600 mb-4">
                      We are committed to making nursing education accessible. Various financial aid options are available including federal loans, institutional scholarships, nursing-specific grants, and work-study programs. Over 85% of our students receive some form of financial assistance.
                    </p>
                    <Button variant="outline">Learn About Financial Aid</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <Dialog open={applicationModalOpen} onOpenChange={setApplicationModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Start Your Application</DialogTitle>
            <DialogDescription>
              Complete this form to begin your application to the BSN program. Required fields are marked with an asterisk (*).
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input id="firstName" placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input id="lastName" placeholder="Enter your last name" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" type="email" placeholder="your.email@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" type="tel" placeholder="(555) 123-4567" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="intake">Desired Start Term *</Label>
              <select id="intake" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option>Fall 2025</option>
                <option>Spring 2026</option>
                <option>Fall 2026</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="gpa">Current GPA *</Label>
              <Input id="gpa" type="number" step="0.01" placeholder="3.75" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="statement">Why do you want to become a nurse? *</Label>
              <Textarea
                id="statement"
                placeholder="Tell us about your motivation to pursue nursing..."
                rows={4}
              />
            </div>
            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1">Submit Application</Button>
              <Button type="button" variant="outline" onClick={() => setApplicationModalOpen(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Transcript Request Modal */}
      <Dialog open={transcriptModalOpen} onOpenChange={setTranscriptModalOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Request Transcript Submission</DialogTitle>
            <DialogDescription>
              Provide your information and we'll send transcript request instructions to your institutions.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="transcriptName">Full Name *</Label>
              <Input id="transcriptName" placeholder="Enter your full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="transcriptEmail">Email Address *</Label>
              <Input id="transcriptEmail" type="email" placeholder="your.email@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="institution">Previous Institution(s) *</Label>
              <Textarea
                id="institution"
                placeholder="List all colleges/universities attended..."
                rows={3}
              />
            </div>
            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1">Send Request</Button>
              <Button type="button" variant="outline" onClick={() => setTranscriptModalOpen(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Information Request Modal */}
      <Dialog open={infoModalOpen} onOpenChange={setInfoModalOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Request Program Information</DialogTitle>
            <DialogDescription>
              Get detailed information about our BSN program, admissions, and financial aid options.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="infoFirstName">First Name *</Label>
                <Input id="infoFirstName" placeholder="First name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="infoLastName">Last Name *</Label>
                <Input id="infoLastName" placeholder="Last name" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="infoEmail">Email Address *</Label>
              <Input id="infoEmail" type="email" placeholder="your.email@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="infoPhone">Phone Number</Label>
              <Input id="infoPhone" type="tel" placeholder="(555) 123-4567" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="interest">Areas of Interest</Label>
              <Textarea
                id="interest"
                placeholder="What would you like to know more about?"
                rows={3}
              />
            </div>
            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1">Request Information</Button>
              <Button type="button" variant="outline" onClick={() => setInfoModalOpen(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
