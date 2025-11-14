import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '../ui/dialog';
import { CheckCircle2, Calendar, FileText, Send } from 'lucide-react';
import { admissionRequirements, importantDeadlines, admissionProcedures } from '../../data/mockData';

export function Admissions() {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4">Admissions</h1>
          <p className="text-lg mb-8">
            Take the first step toward your nursing career. We're here to guide you through the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => setShowApplyModal(true)}
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Apply Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setShowInfoModal(true)}
              className="text-white border-white hover:bg-white/10"
            >
              Request Information
            </Button>
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-center">Admission Requirements</h2>
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {admissionRequirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Important Deadlines */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-center">Important Deadlines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {importantDeadlines.map((deadline, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <CardTitle className="text-lg">{deadline.term}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Application Deadline:</span>
                      <Badge variant="secondary">{deadline.deadline}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 text-sm">Decision Notification:</span>
                      <Badge variant="outline">{deadline.notification}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Procedures */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-4 text-center">Application Procedures</h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            Follow these steps to complete your application to our BSN program. Our admissions team is here to help you every step of the way.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {admissionProcedures.map((procedure) => (
              <Card key={procedure.step} className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg">
                  <span>{procedure.step}</span>
                </div>
                <CardContent className="pt-8 p-6">
                  <h3 className="mb-2">{procedure.title}</h3>
                  <p className="text-gray-600 text-sm">{procedure.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Aid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-center">Financial Aid & Scholarships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Financial Aid</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">
                  We're committed to making nursing education accessible. Federal financial aid, including grants and loans, is available for eligible students.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2" />
                    <span>Complete the FAFSA (Free Application for Federal Student Aid)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2" />
                    <span>Federal grants and work-study programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2" />
                    <span>Federal student loans with flexible repayment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Scholarships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">
                  Various scholarships are available specifically for nursing students based on merit, need, and other criteria.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2" />
                    <span>University nursing scholarships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2" />
                    <span>Healthcare organization partnerships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2" />
                    <span>National nursing scholarship programs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4">Ready to Apply?</h2>
          <p className="text-gray-700 mb-8">
            Join our community of future healthcare leaders. Start your application today or request more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => setShowApplyModal(true)}>
              <FileText className="mr-2 w-4 h-4" />
              Apply Now
            </Button>
            <Button size="lg" variant="outline" onClick={() => setShowInfoModal(true)}>
              <Send className="mr-2 w-4 h-4" />
              Request Information
            </Button>
          </div>
        </div>
      </section>

      {/* Apply Now Modal */}
      <Dialog open={showApplyModal} onOpenChange={setShowApplyModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Apply to BSN Program</DialogTitle>
            <DialogDescription>
              You will be redirected to our secure online application portal.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-gray-700 mb-4">
              Before you begin, please have the following ready:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                <span>Official transcripts from all institutions attended</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                <span>Standardized test scores (SAT/ACT)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                <span>Letters of recommendation contact information</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                <span>Personal statement draft</span>
              </li>
            </ul>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowApplyModal(false)}>
              Cancel
            </Button>
            <Button onClick={() => {
              alert('In a live environment, you would be redirected to the application portal.');
              setShowApplyModal(false);
            }}>
              Continue to Application
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Request Info Modal */}
      <Dialog open={showInfoModal} onOpenChange={setShowInfoModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request Information</DialogTitle>
            <DialogDescription>
              Get more details about our BSN program delivered to your inbox.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-gray-700 mb-4">
              By requesting information, you'll receive:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                <span>Detailed program brochure</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                <span>Financial aid and scholarship information</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                <span>Virtual tour invitation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                <span>Updates on application deadlines and events</span>
              </li>
            </ul>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowInfoModal(false)}>
              Cancel
            </Button>
            <Button onClick={() => {
              alert('In a live environment, you would be redirected to an information request form.');
              setShowInfoModal(false);
            }}>
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
