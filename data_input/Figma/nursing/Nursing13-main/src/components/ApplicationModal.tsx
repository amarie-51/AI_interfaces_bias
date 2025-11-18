import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Calendar } from 'lucide-react';

interface ApplicationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  applicationType: 'fall' | 'spring' | 'info';
}

export function ApplicationModal({ open, onOpenChange, applicationType }: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    previousEducation: '',
    essay: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your application! Our admissions team will contact you within 2-3 business days.');
    onOpenChange(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      previousEducation: '',
      essay: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const getTitle = () => {
    if (applicationType === 'fall') return 'Apply for Fall 2025';
    if (applicationType === 'spring') return 'Apply for Spring 2026';
    return 'Request Information';
  };

  const getDescription = () => {
    if (applicationType === 'info') {
      return 'Fill out this form and we\'ll send you detailed information about our BSN program.';
    }
    return 'Complete this application to begin your journey toward a Bachelor of Science in Nursing degree.';
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-600" />
            {getTitle()}
          </DialogTitle>
          <DialogDescription>
            {getDescription()}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="John"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john.doe@email.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="(555) 555-5555"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Mailing Address *</Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="123 Main Street, City, State ZIP"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="previousEducation">Previous Education *</Label>
            <Input
              id="previousEducation"
              name="previousEducation"
              value={formData.previousEducation}
              onChange={handleChange}
              required
              placeholder="High School / College Name and Graduation Year"
            />
          </div>

          {applicationType !== 'info' && (
            <div className="space-y-2">
              <Label htmlFor="essay">
                Personal Statement * (Why do you want to become a nurse?)
              </Label>
              <Textarea
                id="essay"
                name="essay"
                value={formData.essay}
                onChange={handleChange}
                required
                placeholder="Tell us about your motivation to pursue nursing..."
                rows={6}
              />
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
              {applicationType === 'info' ? 'Request Information' : 'Submit Application'}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center">
            * All fields are required. By submitting this form, you consent to be contacted by our admissions team.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
