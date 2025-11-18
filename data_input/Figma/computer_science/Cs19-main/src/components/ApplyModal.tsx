import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

interface ApplyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ApplyModal({ open, onOpenChange }: ApplyModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    programType: '',
    startTerm: '',
    gpa: '',
    statement: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Application submitted successfully! We will contact you soon.');
    onOpenChange(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      programType: '',
      startTerm: '',
      gpa: '',
      statement: '',
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Apply to the Program</DialogTitle>
          <DialogDescription>
            Complete the form below to start your application. This is a preliminary application - you'll receive further instructions via email.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="programType">Program Type *</Label>
              <Select
                value={formData.programType}
                onValueChange={(value) => setFormData({ ...formData, programType: value })}
                required
              >
                <SelectTrigger id="programType">
                  <SelectValue placeholder="Select program type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="startTerm">Desired Start Term *</Label>
              <Select
                value={formData.startTerm}
                onValueChange={(value) => setFormData({ ...formData, startTerm: value })}
                required
              >
                <SelectTrigger id="startTerm">
                  <SelectValue placeholder="Select start term" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fall-2025">Fall 2025</SelectItem>
                  <SelectItem value="spring-2026">Spring 2026</SelectItem>
                  <SelectItem value="fall-2026">Fall 2026</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="gpa">High School GPA *</Label>
            <Input
              id="gpa"
              type="number"
              step="0.01"
              min="0"
              max="4"
              required
              placeholder="e.g., 3.5"
              value={formData.gpa}
              onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
            />
          </div>

          <div>
            <Label htmlFor="statement">Personal Statement *</Label>
            <Textarea
              id="statement"
              required
              placeholder="Tell us about your interest in computer science and why you want to join our program..."
              rows={5}
              value={formData.statement}
              onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Submit Application</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
