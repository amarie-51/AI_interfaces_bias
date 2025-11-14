import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Have questions about our Computer Science program? We're here to help! 
          Reach out to us through any of the channels below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll respond within 24-48 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Smith"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex.smith@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) => setFormData({ ...formData, subject: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="admissions">Admissions Question</SelectItem>
                      <SelectItem value="program">Program Information</SelectItem>
                      <SelectItem value="financial">Financial Aid</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you'd like to know..."
                    rows={6}
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p>Computer Science Department</p>
                  <p className="text-gray-600 text-sm">123 University Avenue</p>
                  <p className="text-gray-600 text-sm">Campus City, ST 12345</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-blue-600 flex-shrink-0" size={20} />
                <div>
                  <p>Phone</p>
                  <a href="tel:+15551234567" className="text-gray-600 text-sm hover:text-blue-600">
                    (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-blue-600 flex-shrink-0" size={20} />
                <div>
                  <p>Email</p>
                  <a href="mailto:cs@university.edu" className="text-gray-600 text-sm hover:text-blue-600">
                    cs@university.edu
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p>Office Hours</p>
                  <p className="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600 text-sm">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Follow Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-4">
                Stay updated with the latest news, events, and announcements.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Map Section */}
      <section className="mb-16">
        <h2 className="mb-6">Find Us on Campus</h2>
        <Card className="overflow-hidden">
          <div className="h-96 bg-gray-200 flex items-center justify-center relative">
            {/* Placeholder for map */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="mx-auto mb-4 text-blue-600" />
                <p className="text-gray-700">Interactive Map</p>
                <p className="text-gray-600 text-sm">
                  Computer Science Department
                  <br />
                  123 University Avenue, Campus City
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Department Contacts */}
      <section>
        <h2 className="mb-6">Department Contacts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Admissions Office</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-gray-600 text-sm">For application and enrollment questions</p>
              <div className="flex items-center gap-2 text-sm">
                <Mail size={14} />
                <a href="mailto:admissions@university.edu" className="text-blue-600 hover:underline">
                  admissions@university.edu
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone size={14} />
                <span>(555) 123-4501</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Student Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-gray-600 text-sm">For current student support and advising</p>
              <div className="flex items-center gap-2 text-sm">
                <Mail size={14} />
                <a href="mailto:studentservices@university.edu" className="text-blue-600 hover:underline">
                  studentservices@university.edu
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone size={14} />
                <span>(555) 123-4502</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Financial Aid</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-gray-600 text-sm">For scholarships and financial assistance</p>
              <div className="flex items-center gap-2 text-sm">
                <Mail size={14} />
                <a href="mailto:financialaid@university.edu" className="text-blue-600 hover:underline">
                  financialaid@university.edu
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone size={14} />
                <span>(555) 123-4503</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
