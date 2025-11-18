import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { CheckCircle, Calendar, FileText, Send, GraduationCap } from "lucide-react";

export function Admissions() {
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [transcriptModalOpen, setTranscriptModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    gpa: "",
    testScores: "",
    essay: ""
  });

  const requirements = [
    {
      category: "Academic Requirements",
      items: [
        "High school diploma or equivalent",
        "Minimum GPA of 3.0 on a 4.0 scale",
        "Completion of prerequisite courses: Algebra II, Pre-Calculus, and one science course",
        "Strong academic performance in mathematics and science courses"
      ]
    },
    {
      category: "Standardized Tests",
      items: [
        "SAT score of 1200+ (or ACT score of 25+) - Test optional for 2025",
        "International students: TOEFL iBT 80+ or IELTS 6.5+",
        "AP Computer Science or Calculus credits considered (optional)"
      ]
    },
    {
      category: "Application Materials",
      items: [
        "Completed online application form",
        "Official high school transcripts",
        "Personal statement (500-750 words)",
        "Two letters of recommendation",
        "Resume or list of extracurricular activities",
        "$75 application fee (fee waivers available)"
      ]
    }
  ];

  const deadlines = [
    {
      type: "Early Action",
      date: "November 1, 2025",
      notification: "December 15, 2025",
      description: "Non-binding early application with earlier admission decision"
    },
    {
      type: "Regular Decision",
      date: "January 15, 2026",
      notification: "March 31, 2026",
      description: "Standard application deadline for Fall 2026 admission"
    },
    {
      type: "Rolling Admission",
      date: "Until May 1, 2026",
      notification: "Within 4-6 weeks",
      description: "Applications reviewed on a rolling basis (subject to availability)"
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Create an Account",
      description: "Register on our online application portal with your email and basic information"
    },
    {
      step: 2,
      title: "Complete Application",
      description: "Fill out the application form with your academic history, activities, and personal information"
    },
    {
      step: 3,
      title: "Submit Documents",
      description: "Upload transcripts, test scores, letters of recommendation, and personal statement"
    },
    {
      step: 4,
      title: "Pay Application Fee",
      description: "Submit the $75 application fee (or request a fee waiver if eligible)"
    },
    {
      step: 5,
      title: "Track Your Application",
      description: "Monitor your application status and ensure all materials are received"
    },
    {
      step: 6,
      title: "Receive Decision",
      description: "Get your admission decision by the notification date for your application type"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Application form submitted! This is a placeholder - in a real application, this would be sent to a server.");
    setApplicationModalOpen(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      gpa: "",
      testScores: "",
      essay: ""
    });
  };

  const handleTranscriptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Transcript request submitted! This is a placeholder.");
    setTranscriptModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl text-blue-900 mb-4">Admissions</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join our community of innovative thinkers and future technology leaders
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <Card className="p-6 text-center">
          <div className="text-3xl text-blue-600 mb-2">30%</div>
          <div className="text-gray-700 text-sm">Acceptance Rate</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-3xl text-blue-600 mb-2">3.5</div>
          <div className="text-gray-700 text-sm">Average GPA</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-3xl text-blue-600 mb-2">1280</div>
          <div className="text-gray-700 text-sm">Average SAT</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-3xl text-blue-600 mb-2">450</div>
          <div className="text-gray-700 text-sm">Class Size</div>
        </Card>
      </div>

      {/* Requirements */}
      <div className="mb-16">
        <h2 className="text-3xl text-blue-900 mb-8">Admission Requirements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {requirements.map((req, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl text-blue-900 mb-4">{req.category}</h3>
              <ul className="space-y-3">
                {req.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      {/* Deadlines */}
      <div className="mb-16">
        <h2 className="text-3xl text-blue-900 mb-8">Application Deadlines</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deadlines.map((deadline, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl text-blue-900">{deadline.type}</h3>
              </div>
              <div className="mb-2">
                <div className="text-sm text-gray-600">Application Deadline</div>
                <div className="text-blue-600">{deadline.date}</div>
              </div>
              <div className="mb-3">
                <div className="text-sm text-gray-600">Decision Notification</div>
                <div className="text-blue-600">{deadline.notification}</div>
              </div>
              <p className="text-sm text-gray-700">{deadline.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Application Steps */}
      <div className="mb-16">
        <h2 className="text-3xl text-blue-900 mb-8">How to Apply</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applicationSteps.map((step, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                  {step.step}
                </div>
                <h3 className="text-lg text-blue-900">{step.title}</h3>
              </div>
              <p className="text-gray-700 text-sm">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mb-16">
        <Card className="p-8 bg-gradient-to-r from-blue-50 to-blue-100">
          <h2 className="text-3xl text-blue-900 mb-6 text-center">Ready to Take the Next Step?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 h-auto py-6 flex-col gap-2"
              onClick={() => setApplicationModalOpen(true)}
            >
              <Send className="w-6 h-6" />
              <span>Start Application</span>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="h-auto py-6 flex-col gap-2 border-blue-600 text-blue-600 hover:bg-blue-50"
              onClick={() => setTranscriptModalOpen(true)}
            >
              <FileText className="w-6 h-6" />
              <span>Request Transcripts</span>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="h-auto py-6 flex-col gap-2 border-blue-600 text-blue-600 hover:bg-blue-50"
              onClick={() => window.open('mailto:admissions@university.edu')}
            >
              <GraduationCap className="w-6 h-6" />
              <span>Contact Admissions</span>
            </Button>
          </div>
        </Card>
      </div>

      {/* Financial Aid Info */}
      <Card className="p-8 bg-blue-900 text-white">
        <h2 className="text-3xl mb-4">Financial Aid & Scholarships</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl mb-3">Merit Scholarships</h3>
            <p className="mb-4">
              We offer competitive merit-based scholarships ranging from $5,000 to full tuition for 
              exceptional students. All applicants are automatically considered for merit scholarships.
            </p>
          </div>
          <div>
            <h3 className="text-xl mb-3">Need-Based Aid</h3>
            <p className="mb-4">
              Complete the FAFSA to be considered for federal and institutional need-based financial aid. 
              We are committed to making education accessible to all qualified students.
            </p>
          </div>
        </div>
      </Card>

      {/* Application Modal */}
      <Dialog open={applicationModalOpen} onOpenChange={setApplicationModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Start Your Application</DialogTitle>
            <DialogDescription>
              This is a placeholder application form. In a real application, this would connect to an admissions system.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleApplicationSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input 
                  id="firstName" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input 
                  id="lastName" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required 
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input 
                id="email" 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input 
                id="phone" 
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div>
              <Label htmlFor="address">Address *</Label>
              <Input 
                id="address" 
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div>
              <Label htmlFor="gpa">Current GPA *</Label>
              <Input 
                id="gpa" 
                name="gpa"
                type="number"
                step="0.01"
                min="0"
                max="4"
                value={formData.gpa}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div>
              <Label htmlFor="testScores">SAT/ACT Scores (Optional)</Label>
              <Input 
                id="testScores" 
                name="testScores"
                value={formData.testScores}
                onChange={handleInputChange}
                placeholder="e.g., SAT: 1280"
              />
            </div>
            <div>
              <Label htmlFor="essay">Personal Statement (500-750 words) *</Label>
              <Textarea 
                id="essay" 
                name="essay"
                value={formData.essay}
                onChange={handleInputChange}
                rows={6}
                required 
                placeholder="Tell us about yourself and why you want to study Computer Science..."
              />
            </div>
            <div className="flex gap-4">
              <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                Submit Application
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setApplicationModalOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Transcript Request Modal */}
      <Dialog open={transcriptModalOpen} onOpenChange={setTranscriptModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request Transcripts</DialogTitle>
            <DialogDescription>
              Request your official transcripts to be sent to our admissions office.
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
              <Input id="graduationYear" type="number" required />
            </div>
            <div className="flex gap-4">
              <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                Submit Request
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setTranscriptModalOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
