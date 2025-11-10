import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { CheckCircle, Calendar, FileText, DollarSign } from "lucide-react";
import { admissionRequirements, importantDates } from "../data/mockData";
import { toast } from "sonner@2.0.3";

export function AdmissionsPage() {
  const [applyDialogOpen, setApplyDialogOpen] = useState(false);
  const [infoDialogOpen, setInfoDialogOpen] = useState(false);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted successfully! We'll be in touch soon.");
    setApplyDialogOpen(false);
  };

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Information request received! Check your email for details.");
    setInfoDialogOpen(false);
  };

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4">Admissions</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
          Begin your journey toward a rewarding career in computer science. We're here to 
          guide you through every step of the admission process.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Dialog open={applyDialogOpen} onOpenChange={setApplyDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Apply Now
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Start Your Application</DialogTitle>
                <DialogDescription>
                  Fill out the form below to begin your application to the Computer Science program.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleApplySubmit} className="space-y-4 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" required placeholder="Alex" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" required placeholder="Smith" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" required placeholder="alex.smith@example.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
                <div>
                  <Label htmlFor="gpa">GPA *</Label>
                  <Input id="gpa" type="number" step="0.01" min="0" max="4" required placeholder="3.5" />
                </div>
                <div>
                  <Label htmlFor="statement">Personal Statement *</Label>
                  <Textarea 
                    id="statement" 
                    required 
                    placeholder="Tell us why you want to study Computer Science..."
                    rows={5}
                  />
                </div>
                <div className="flex gap-4 justify-end pt-4">
                  <Button type="button" variant="outline" onClick={() => setApplyDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    Submit Application
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>

          <Dialog open={infoDialogOpen} onOpenChange={setInfoDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" variant="outline">
                Request Information
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Request Information</DialogTitle>
                <DialogDescription>
                  Get more details about our program, admissions, and financial aid.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleInfoSubmit} className="space-y-4 pt-4">
                <div>
                  <Label htmlFor="infoName">Full Name *</Label>
                  <Input id="infoName" required placeholder="Alex Smith" />
                </div>
                <div>
                  <Label htmlFor="infoEmail">Email Address *</Label>
                  <Input id="infoEmail" type="email" required placeholder="alex.smith@example.com" />
                </div>
                <div>
                  <Label htmlFor="interests">What would you like to know more about?</Label>
                  <Textarea 
                    id="interests" 
                    placeholder="Program details, financial aid, campus life, etc."
                    rows={4}
                  />
                </div>
                <div className="flex gap-4 justify-end pt-4">
                  <Button type="button" variant="outline" onClick={() => setInfoDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    Request Info
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Admission Requirements */}
      <section className="mb-16">
        <h2 className="mb-8">Admission Requirements</h2>
        <Card>
          <CardHeader>
            <CardTitle>What You Need to Apply</CardTitle>
            <CardDescription>
              We review applications holistically, considering academic performance, 
              personal qualities, and potential for success.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {admissionRequirements.map((requirement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{requirement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Important Dates */}
      <section className="mb-16">
        <h2 className="mb-8">Important Dates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {importantDates.map((item, index) => (
            <Card key={index} className="border-l-4 border-l-blue-600">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="text-blue-600" size={20} />
                  <Badge variant="outline">{item.date}</Badge>
                </div>
                <CardTitle className="text-lg">{item.event}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Application Process */}
      <section className="mb-16">
        <h2 className="mb-8">Application Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600">1</span>
              </div>
              <CardTitle className="text-lg">Submit Application</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Complete the online application form and submit required documents.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600">2</span>
              </div>
              <CardTitle className="text-lg">Application Review</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Our admissions team reviews your application materials.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600">3</span>
              </div>
              <CardTitle className="text-lg">Decision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Receive your admission decision and financial aid package.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600">4</span>
              </div>
              <CardTitle className="text-lg">Enrollment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Accept your offer and complete enrollment procedures.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Financial Aid & Tuition */}
      <section className="mb-16">
        <h2 className="mb-8">Tuition & Financial Aid</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="text-blue-600" size={24} />
                <CardTitle>Tuition & Fees</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-gray-600">Annual Tuition</span>
                <span>$12,000</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-gray-600">Program Fees</span>
                <span>$800</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="text-gray-600">Technology Fee</span>
                <span>$400</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span>Total (per year)</span>
                <span>$13,200</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <FileText className="text-blue-600" size={24} />
                <CardTitle>Financial Aid</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600">Merit-based scholarships available</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600">Need-based financial aid programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600">Federal student loans and grants</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600">Work-study opportunities available</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-600">Over 85% of students receive aid</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Admissions */}
      <section className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="mb-4">Have Questions?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Our admissions counselors are here to help you through the application process. 
          Don't hesitate to reach out with any questions about the program, requirements, 
          or financial aid.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => setInfoDialogOpen(true)}
          >
            Contact Admissions
          </Button>
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => setApplyDialogOpen(true)}
          >
            Start Application
          </Button>
        </div>
      </section>
    </div>
  );
}
