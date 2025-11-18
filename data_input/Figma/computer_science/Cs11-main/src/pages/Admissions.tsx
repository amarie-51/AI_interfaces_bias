import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { 
  CheckCircle, 
  Calendar, 
  FileText, 
  Users, 
  Send, 
  GraduationCap,
  DollarSign,
  Award
} from 'lucide-react';

export function Admissions() {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [isScholarshipOpen, setIsScholarshipOpen] = useState(false);

  const requirements = [
    {
      title: 'High School Diploma or Equivalent',
      description: 'Official transcripts showing completion of secondary education with a minimum GPA of 3.0',
    },
    {
      title: 'Mathematics Background',
      description: 'Completion of Algebra II, Geometry, and Pre-Calculus or equivalent courses',
    },
    {
      title: 'Standardized Tests',
      description: 'SAT (minimum 1200) or ACT (minimum 26) scores from the past 5 years',
    },
    {
      title: 'Letters of Recommendation',
      description: 'Two letters from teachers, counselors, or academic mentors',
    },
    {
      title: 'Personal Statement',
      description: 'Essay (500-750 words) describing your interest in computer science and career goals',
    },
    {
      title: 'English Proficiency (International)',
      description: 'TOEFL (minimum 80) or IELTS (minimum 6.5) for non-native English speakers',
    },
  ];

  const deadlines = [
    { semester: 'Fall Semester', priority: 'November 1, 2024', regular: 'January 15, 2025', decision: 'March 31, 2025' },
    { semester: 'Spring Semester', priority: 'June 1, 2025', regular: 'September 1, 2025', decision: 'October 15, 2025' },
  ];

  const steps = [
    {
      number: 1,
      title: 'Submit Online Application',
      description: 'Complete the application form with your personal information, academic history, and program preferences.',
    },
    {
      number: 2,
      title: 'Upload Required Documents',
      description: 'Submit transcripts, test scores, letters of recommendation, and personal statement.',
    },
    {
      number: 3,
      title: 'Pay Application Fee',
      description: '$50 non-refundable application fee (fee waivers available for eligible students).',
    },
    {
      number: 4,
      title: 'Interview (Selected Applicants)',
      description: 'Top candidates may be invited for a virtual or in-person interview with faculty.',
    },
    {
      number: 5,
      title: 'Receive Decision',
      description: 'Admissions decisions are sent via email and available in your application portal.',
    },
    {
      number: 6,
      title: 'Accept Offer & Enroll',
      description: 'Submit your enrollment deposit and complete registration for your first semester.',
    },
  ];

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! This is a demo form. In a real application, your information would be submitted to our admissions team.');
    setIsApplicationOpen(false);
  };

  const handleScholarshipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your scholarship inquiry! This is a demo form. Our financial aid team would contact you with more information.');
    setIsScholarshipOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl mb-6">Admissions</h1>
          <p className="text-xl max-w-3xl mb-8">
            Ready to launch your career in technology? We're excited to welcome passionate, curious students who are ready to make an impact in the world of computer science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-gray-100"
              onClick={() => setIsApplicationOpen(true)}
            >
              <FileText className="mr-2 h-5 w-5" />
              Apply Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10"
              onClick={() => setIsScholarshipOpen(true)}
            >
              <DollarSign className="mr-2 h-5 w-5" />
              Scholarship Information
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-2 text-gray-900">Rolling Admissions</h3>
              <p className="text-gray-600">Applications reviewed on a rolling basis</p>
            </div>
            <div>
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-2 text-gray-900">300+ Students</h3>
              <p className="text-gray-600">Admitted annually across all semesters</p>
            </div>
            <div>
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-2 text-gray-900">$2M+ in Scholarships</h3>
              <p className="text-gray-600">Available for qualified students</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">Admission Requirements</h2>
            <p className="text-xl text-gray-600">
              What you need to apply to our Bachelor's in Computer Science program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requirements.map((req, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <h3 className="text-lg text-gray-900">{req.title}</h3>
                </div>
                <p className="text-gray-600 text-sm ml-9">{req.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deadlines */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">Application Deadlines</h2>
            <p className="text-xl text-gray-600">
              Plan ahead with our admission timeline
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {deadlines.map((deadline, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-2xl mb-4 text-gray-900">{deadline.semester}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Priority Deadline</div>
                    <div className="text-lg text-blue-600">{deadline.priority}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Regular Deadline</div>
                    <div className="text-lg text-blue-600">{deadline.regular}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Decision Notification</div>
                    <div className="text-lg text-blue-600">{deadline.decision}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 italic">
              Priority applicants receive early consideration for scholarships and housing
            </p>
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">Application Process</h2>
            <p className="text-xl text-gray-600">
              Follow these simple steps to complete your application
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {steps.map((step, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl mb-2 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Aid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-900">Financial Aid & Scholarships</h2>
            <p className="text-xl text-gray-600">
              We're committed to making quality education accessible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <GraduationCap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl mb-3 text-gray-900">Merit Scholarships</h3>
              <p className="text-gray-600 mb-4">
                Up to $15,000 per year for outstanding academic achievement
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl mb-3 text-gray-900">Need-Based Aid</h3>
              <p className="text-gray-600 mb-4">
                Financial assistance based on demonstrated need and FAFSA
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl mb-3 text-gray-900">Department Awards</h3>
              <p className="text-gray-600 mb-4">
                Additional scholarships for CS students with exceptional promise
              </p>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" onClick={() => setIsScholarshipOpen(true)}>
              Learn More About Financial Aid
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Ready to Apply?</h2>
          <p className="text-xl mb-8">
            Join our community of innovators and start your journey toward a rewarding career in technology.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-900 hover:bg-gray-100"
            onClick={() => setIsApplicationOpen(true)}
          >
            <Send className="mr-2 h-5 w-5" />
            Start Your Application
          </Button>
          <p className="mt-6 text-sm opacity-90">
            Questions? Contact our admissions team at admissions@university.edu or call (555) 123-4567
          </p>
        </div>
      </section>

      {/* Application Modal */}
      <Dialog open={isApplicationOpen} onOpenChange={setIsApplicationOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Apply to the CS Bachelor's Program</DialogTitle>
            <DialogDescription>
              Fill out this form to begin your application. This is a simplified demo form.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleApplicationSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input id="firstName" required />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input id="lastName" required />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
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
              <Label htmlFor="semester">Intended Start Semester *</Label>
              <select id="semester" className="w-full border border-gray-300 rounded-md p-2" required>
                <option value="">Select a semester</option>
                <option value="fall2025">Fall 2025</option>
                <option value="spring2026">Spring 2026</option>
                <option value="fall2026">Fall 2026</option>
              </select>
            </div>
            <div>
              <Label htmlFor="statement">Why are you interested in Computer Science? *</Label>
              <Textarea id="statement" rows={4} required placeholder="Tell us about your interest in computer science and your career goals..." />
            </div>
            <div className="flex gap-4 pt-4">
              <Button type="submit" className="flex-1">Submit Application</Button>
              <Button type="button" variant="outline" onClick={() => setIsApplicationOpen(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Scholarship Modal */}
      <Dialog open={isScholarshipOpen} onOpenChange={setIsScholarshipOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Scholarship Information Request</DialogTitle>
            <DialogDescription>
              Request detailed information about scholarships and financial aid opportunities.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleScholarshipSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="schFirstName">First Name *</Label>
                <Input id="schFirstName" required />
              </div>
              <div>
                <Label htmlFor="schLastName">Last Name *</Label>
                <Input id="schLastName" required />
              </div>
            </div>
            <div>
              <Label htmlFor="schEmail">Email Address *</Label>
              <Input id="schEmail" type="email" required />
            </div>
            <div>
              <Label htmlFor="schGPA">Current/Expected GPA *</Label>
              <Input id="schGPA" type="number" step="0.01" min="0" max="4" required />
            </div>
            <div>
              <Label htmlFor="schType">Scholarship Type of Interest</Label>
              <select id="schType" className="w-full border border-gray-300 rounded-md p-2">
                <option value="">Select type</option>
                <option value="merit">Merit-Based</option>
                <option value="need">Need-Based</option>
                <option value="both">Both</option>
              </select>
            </div>
            <div>
              <Label htmlFor="schQuestions">Questions or Additional Information</Label>
              <Textarea id="schQuestions" rows={3} placeholder="Any specific questions about scholarships or financial aid?" />
            </div>
            <div className="flex gap-4 pt-4">
              <Button type="submit" className="flex-1">Request Information</Button>
              <Button type="button" variant="outline" onClick={() => setIsScholarshipOpen(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
