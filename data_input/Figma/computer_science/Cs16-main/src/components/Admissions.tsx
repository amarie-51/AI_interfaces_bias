import { CheckCircle, Calendar, FileText, Send, ClipboardCheck } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function Admissions() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gpa: "",
    testScores: "",
    essay: "",
  });

  const requirements = [
    {
      category: "Academic Requirements",
      items: [
        "High school diploma or equivalent",
        "Minimum GPA of 3.0 on a 4.0 scale",
        "Completion of prerequisites: Algebra II, Pre-Calculus",
        "Strong performance in math and science courses",
      ],
    },
    {
      category: "Test Scores",
      items: [
        "SAT: Minimum 1200 (combined Math and Evidence-Based Reading)",
        "ACT: Minimum composite score of 25",
        "International students: TOEFL iBT 80 or IELTS 6.5",
      ],
    },
    {
      category: "Application Materials",
      items: [
        "Completed online application form",
        "Official high school transcripts",
        "Two letters of recommendation",
        "Personal statement (500-750 words)",
        "$50 non-refundable application fee",
      ],
    },
  ];

  const deadlines = [
    { term: "Fall 2026", priority: "November 15, 2025", regular: "February 1, 2026", decision: "March 15, 2026" },
    { term: "Spring 2027", priority: "August 1, 2026", regular: "October 15, 2026", decision: "November 15, 2026" },
  ];

  const steps = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Complete the online application form and pay the application fee.",
    },
    {
      icon: Send,
      title: "Submit Documents",
      description: "Send official transcripts, test scores, and recommendation letters.",
    },
    {
      icon: ClipboardCheck,
      title: "Application Review",
      description: "Our admissions committee will review your application materials.",
    },
    {
      icon: CheckCircle,
      title: "Receive Decision",
      description: "You'll receive your admission decision by the notification date.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    alert("Application submitted! We'll contact you soon.");
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl mb-6">Admissions</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Start your journey to becoming a technology leader. We're looking for passionate, motivated students ready to make an impact.
          </p>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-12 bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl text-gray-900 mb-2">Ready to Apply?</h2>
              <p className="text-gray-600">Applications for Fall 2026 are now open!</p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Start Your Application
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Application Form</DialogTitle>
                  <DialogDescription>
                    Complete the form below to begin your application to the Computer Science program.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="gpa">High School GPA *</Label>
                      <Input
                        id="gpa"
                        placeholder="e.g., 3.5"
                        value={formData.gpa}
                        onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="testScores">SAT/ACT Score *</Label>
                      <Input
                        id="testScores"
                        placeholder="e.g., SAT 1300"
                        value={formData.testScores}
                        onChange={(e) => setFormData({ ...formData, testScores: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="essay">Personal Statement (500-750 words) *</Label>
                    <Textarea
                      id="essay"
                      placeholder="Tell us why you're interested in computer science and what makes you a great fit for our program..."
                      className="min-h-32"
                      value={formData.essay}
                      onChange={(e) => setFormData({ ...formData, essay: e.target.value })}
                      required
                    />
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Button type="submit" className="flex-1">
                      Submit Application
                    </Button>
                    <DialogTrigger asChild>
                      <Button type="button" variant="outline" className="flex-1">
                        Save Draft
                      </Button>
                    </DialogTrigger>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-12 text-center">Admission Requirements</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl text-gray-900 mb-4">{req.category}</h3>
                <ul className="space-y-3">
                  {req.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deadlines */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-12 text-center">Application Deadlines</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {deadlines.map((deadline, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  <h3 className="text-2xl text-gray-900">{deadline.term}</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Priority Deadline</div>
                    <div className="text-lg text-gray-900">{deadline.priority}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Regular Deadline</div>
                    <div className="text-lg text-gray-900">{deadline.regular}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Decision Notification</div>
                    <div className="text-lg text-gray-900">{deadline.decision}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            * Priority applicants receive early consideration for scholarships and financial aid.
          </p>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-gray-900 mb-12 text-center">Application Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute top-8 left-1/2 -ml-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Aid Info */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-gray-900 mb-6">Financial Aid & Scholarships</h2>
          <p className="text-lg text-gray-600 mb-8">
            We're committed to making our program accessible. Over 80% of our students receive some form of financial aid. Scholarships are available based on academic merit, financial need, and special talents.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <div className="text-3xl text-blue-600 mb-2">$15K</div>
              <div className="text-gray-600">Average Scholarship Award</div>
            </Card>
            <Card className="p-6">
              <div className="text-3xl text-blue-600 mb-2">80%</div>
              <div className="text-gray-600">Students Receive Aid</div>
            </Card>
            <Card className="p-6">
              <div className="text-3xl text-blue-600 mb-2">$2M</div>
              <div className="text-gray-600">Total Aid Awarded Annually</div>
            </Card>
          </div>
          <Button size="lg" variant="outline">
            Learn About Financial Aid
          </Button>
        </div>
      </section>

      {/* Questions CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-6">Have Questions?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our admissions team is here to help you through every step of the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Schedule a Call
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Schedule an Admissions Call</DialogTitle>
                  <DialogDescription>
                    Select a time to speak with an admissions counselor.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="callName">Full Name</Label>
                    <Input id="callName" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="callEmail">Email</Label>
                    <Input id="callEmail" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="callPhone">Phone Number</Label>
                    <Input id="callPhone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredTime">Preferred Time</Label>
                    <Input id="preferredTime" type="datetime-local" />
                  </div>
                  <Button className="w-full" onClick={() => alert("Call scheduled! We'll contact you soon.")}>
                    Schedule Call
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Visit Campus
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
