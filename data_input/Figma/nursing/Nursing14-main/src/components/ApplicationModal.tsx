import { X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select } from './ui/select';
import { useState } from 'react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'apply' | 'request-info';
}

export function ApplicationModal({ isOpen, onClose, type }: ApplicationModalProps) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-blue-900">
            {type === 'apply' ? 'Application Form' : 'Request Information'}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        {submitted ? (
          <div className="px-6 py-12 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-green-900 mb-2">Thank you!</h3>
            <p className="text-gray-600">
              {type === 'apply'
                ? 'Your application has been submitted. We will contact you soon.'
                : 'Your request has been received. Information will be sent to your email.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input id="firstName" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input id="lastName" required className="mt-1" />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" type="email" required className="mt-1" />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" type="tel" required className="mt-1" />
            </div>

            {type === 'apply' && (
              <>
                <div>
                  <Label htmlFor="gpa">Current GPA *</Label>
                  <Input id="gpa" type="number" step="0.01" min="0" max="4" required className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="program">Previous Education *</Label>
                  <select id="program" required className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2">
                    <option value="">Select...</option>
                    <option value="high-school">High School Diploma</option>
                    <option value="associate">Associate Degree</option>
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="startTerm">Intended Start Term *</Label>
                  <select id="startTerm" required className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2">
                    <option value="">Select...</option>
                    <option value="fall-2025">Fall 2025</option>
                    <option value="spring-2026">Spring 2026</option>
                    <option value="fall-2026">Fall 2026</option>
                  </select>
                </div>
              </>
            )}

            <div>
              <Label htmlFor="message">
                {type === 'apply' ? 'Why do you want to pursue nursing?' : 'Questions or Comments'}
              </Label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
                placeholder={type === 'apply' ? 'Tell us about your motivation...' : 'Any questions?'}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                {type === 'apply' ? 'Submit Application' : 'Submit Request'}
              </Button>
              <Button type="button" onClick={onClose} variant="outline" className="flex-1">
                Cancel
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
