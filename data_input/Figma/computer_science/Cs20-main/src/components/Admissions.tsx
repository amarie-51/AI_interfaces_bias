import { useState } from 'react';
import { CheckCircle, Calendar, FileText, Send, GraduationCap, FileCheck, UserCheck, DollarSign } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export function Admissions() {
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const requirements = [
    {
      icon: GraduationCap,
      title: 'Academic Requirements',
      items: [
        'High school diploma or equivalent',
        'Minimum GPA of 3.0 on a 4.0 scale',
        'Strong background in mathematics (Algebra, Geometry, Pre-Calculus)',
        'Recommended: Prior programming experience (not required)',
      ],
    },
    {
      icon: FileCheck,
      title: 'Required Documents',
      items: [
        'Completed application form',
        'Official high school transcripts',
        'Two letters of recommendation',
        'Personal statement (500-750 words)',
        'Standardized test scores (SAT/ACT)',
      ],
    },
    {
      icon: UserCheck,
      title: 'Additional Materials',
      items: [
        'Resume or CV (optional but recommended)',
        'Portfolio of projects or coding samples (if available)',
        'Proof of English proficiency (for international students)',
        'Application fee: $75 (fee waivers available)',
      ],
    },
  ];

  const deadlines = [
    {
      title: 'Early Decision',
      date: 'November 1, 2025',
      notification: 'December 15, 2025',
      description: 'Binding commitment for admitted students',
    },
    {
      title: 'Early Action',
      date: 'December 1, 2025',
      notification: 'January 31, 2026',
      description: 'Non-binding early consideration',
    },
    {
      title: 'Regular Decision',
      date: 'February 1, 2026',
      notification: 'March 31, 2026',
      description: 'Standard application deadline',
    },
    {
      title: 'Transfer Students',
      date: 'March 15, 2026',
      notification: 'May 1, 2026',
      description: 'For students transferring from other institutions',
    },
  ];

  const steps = [
    {
      number: 1,
      title: 'Create an Account',
      description: 'Register on our admissions portal to begin your application',
    },
    {
      number: 2,
      title: 'Complete Application',
      description: 'Fill out the application form with your personal and academic information',
    },
    {
      number: 3,
      title: 'Submit Documents',
      description: 'Upload all required documents including transcripts and recommendations',
    },
    {
      number: 4,
      title: 'Pay Application Fee',
      description: 'Submit the $75 application fee (fee waivers available for eligible students)',
    },
    {
      number: 5,
      title: 'Track Your Application',
      description: 'Monitor your application status through the portal',
    },
    {
      number: 6,
      title: 'Receive Decision',
      description: 'Get notified of your admission decision via email and portal',
    },
  ];

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setApplicationModalOpen(false);
      setFormSubmitted(false);
    }, 2000);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setInquiryModalOpen(false);
      setFormSubmitted(false);
    }, 2000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl mb-6">Admissions</h1>
            <p className="text-xl mb-8">
              Join our community of innovators and start your journey in computer science
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => setApplicationModalOpen(true)}
              >
                Start Application
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10"
                onClick={() => setInquiryModalOpen(true)}
              >
                Request Information
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-12 text-center">Admission Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {requirements.map((requirement, index) => {
              const Icon = requirement.icon;
              return (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                    <CardTitle>{requirement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {requirement.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deadlines */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-12 text-center">Important Deadlines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deadlines.map((deadline, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <Calendar className="text-blue-600 mb-4" size={32} />
                  <h3 className="text-xl mb-3">{deadline.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Application Due</p>
                      <p className="text-blue-600">{deadline.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Decision By</p>
                      <p className="text-blue-600">{deadline.notification}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{deadline.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl mb-12 text-center">Application Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <Card key={index} className="border-l-4 border-l-blue-600 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financial Aid */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <DollarSign className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-4xl mb-6">Financial Aid & Scholarships</h2>
            <p className="text-lg text-gray-700 mb-8">
              We're committed to making education accessible. Over 80% of our students receive some form of financial aid. 
              We offer merit-based scholarships, need-based grants, work-study programs, and assistance with external funding opportunities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl mb-3">Merit Scholarships</h3>
                <p className="text-gray-600 text-sm">Up to full tuition for exceptional students based on academic achievement</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl mb-3">Need-Based Aid</h3>
                <p className="text-gray-600 text-sm">Grants and loans available based on demonstrated financial need</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl mb-3">Work-Study</h3>
                <p className="text-gray-600 text-sm">Part-time employment opportunities to help cover educational expenses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white p-12 rounded-lg">
            <h2 className="text-3xl mb-4">Ready to Apply?</h2>
            <p className="text-lg mb-8">
              Start your application today and take the first step toward an exciting career in technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => setApplicationModalOpen(true)}
              >
                <FileText className="mr-2" size={20} />
                Apply Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10"
                onClick={() => setInquiryModalOpen(true)}
              >
                <Send className="mr-2" size={20} />
                Get Information
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <Dialog open={applicationModalOpen} onOpenChange={setApplicationModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Start Your Application</DialogTitle>
            <DialogDescription>
              Fill out the form below to begin your application to the Computer Science program.
            </DialogDescription>
          </DialogHeader>
          {formSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl mb-2">Application Started!</h3>
              <p className="text-gray-600">We'll send you an email with next steps shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleApplicationSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" required />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" required />
              </div>
              <div>
                <Label htmlFor="applicationType">Application Type</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select application type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="freshman">Freshman</SelectItem>
                    <SelectItem value="transfer">Transfer Student</SelectItem>
                    <SelectItem value="international">International Student</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="expectedStart">Expected Start Term</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select term" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fall2026">Fall 2026</SelectItem>
                    <SelectItem value="spring2027">Spring 2027</SelectItem>
                    <SelectItem value="fall2027">Fall 2027</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="comments">Additional Comments (Optional)</Label>
                <Textarea id="comments" rows={3} />
              </div>
              <Button type="submit" className="w-full">
                Begin Application
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Inquiry Modal */}
      <Dialog open={inquiryModalOpen} onOpenChange={setInquiryModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Request Information</DialogTitle>
            <DialogDescription>
              Let us know what you'd like to learn more about, and we'll send you detailed information.
            </DialogDescription>
          </DialogHeader>
          {formSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl mb-2">Request Received!</h3>
              <p className="text-gray-600">We'll send you the information you requested within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="inquiryFirstName">First Name</Label>
                  <Input id="inquiryFirstName" required />
                </div>
                <div>
                  <Label htmlFor="inquiryLastName">Last Name</Label>
                  <Input id="inquiryLastName" required />
                </div>
              </div>
              <div>
                <Label htmlFor="inquiryEmail">Email Address</Label>
                <Input id="inquiryEmail" type="email" required />
              </div>
              <div>
                <Label htmlFor="interest">What are you interested in learning about?</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="program">Program Details</SelectItem>
                    <SelectItem value="admissions">Admissions Process</SelectItem>
                    <SelectItem value="financial">Financial Aid</SelectItem>
                    <SelectItem value="campus">Campus Life</SelectItem>
                    <SelectItem value="career">Career Opportunities</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="inquiryMessage">Questions or Comments</Label>
                <Textarea id="inquiryMessage" rows={4} />
              </div>
              <Button type="submit" className="w-full">
                Send Request
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
