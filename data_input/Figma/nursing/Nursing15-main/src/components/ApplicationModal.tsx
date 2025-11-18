import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";

interface ApplicationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ApplicationModal({ open, onOpenChange }: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    previousEducation: "",
    startSemester: "",
    statement: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    alert("Application submitted successfully! We'll contact you soon.");
    onOpenChange(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      previousEducation: "",
      startSemester: "",
      statement: "",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Apply to BSN Program</DialogTitle>
          <DialogDescription>
            Complete the form below to start your application. We'll review your
            information and contact you within 2-3 business days.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                required
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                required
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="education">Previous Education *</Label>
            <Select
              value={formData.previousEducation}
              onValueChange={(value) =>
                setFormData({ ...formData, previousEducation: value })
              }
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your highest education level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high-school">High School Diploma</SelectItem>
                <SelectItem value="some-college">Some College Credits</SelectItem>
                <SelectItem value="associate">Associate Degree</SelectItem>
                <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="semester">Preferred Start Semester *</Label>
            <Select
              value={formData.startSemester}
              onValueChange={(value) =>
                setFormData({ ...formData, startSemester: value })
              }
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select semester" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fall-2025">Fall 2025</SelectItem>
                <SelectItem value="spring-2026">Spring 2026</SelectItem>
                <SelectItem value="fall-2026">Fall 2026</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="statement">
              Personal Statement (Why do you want to study nursing?)
            </Label>
            <Textarea
              id="statement"
              rows={4}
              value={formData.statement}
              onChange={(e) =>
                setFormData({ ...formData, statement: e.target.value })
              }
              placeholder="Share your motivation for pursuing a career in nursing..."
            />
          </div>

          <div className="flex gap-3 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Submit Application</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
