import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "general" | "visit" | "info";
}

export function ApplicationModal({ isOpen, onClose, type }: ApplicationModalProps) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const getTitle = () => {
    switch (type) {
      case "general":
        return "Apply to BSN Program";
      case "visit":
        return "Schedule a Campus Visit";
      case "info":
        return "Request Information";
      default:
        return "Contact Us";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2>{getTitle()}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="px-6 py-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="mb-2">Thank You!</h3>
              <p className="text-gray-600">
                We've received your {type === "general" ? "application" : "request"} and will contact you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  type="text"
                  required
                  placeholder="Enter your first name"
                />
              </div>

              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  type="text"
                  required
                  placeholder="Enter your last name"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  placeholder="(555) 123-4567"
                />
              </div>

              {type === "general" && (
                <>
                  <div>
                    <Label htmlFor="gpa">Current GPA</Label>
                    <Input
                      id="gpa"
                      type="text"
                      placeholder="e.g., 3.5"
                    />
                  </div>

                  <div>
                    <Label htmlFor="graduation">Expected High School Graduation</Label>
                    <Input
                      id="graduation"
                      type="text"
                      placeholder="e.g., May 2026"
                    />
                  </div>
                </>
              )}

              {type === "visit" && (
                <div>
                  <Label htmlFor="preferredDate">Preferred Visit Date</Label>
                  <Input
                    id="preferredDate"
                    type="date"
                  />
                </div>
              )}

              <div>
                <Label htmlFor="message">
                  {type === "general" ? "Tell us about yourself" : "Additional Information"}
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder={
                    type === "general"
                      ? "Share your interests in nursing and career goals..."
                      : "Let us know if you have any specific questions..."
                  }
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button type="submit" className="flex-1">
                  Submit
                </Button>
                <Button type="button" variant="outline" onClick={onClose}>
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
