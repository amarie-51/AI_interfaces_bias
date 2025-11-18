import { useState } from "react";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube, Clock } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Thank you for your message, ${formData.name}! This is a demo form. In the live system, we would send you a confirmation email and respond within 24-48 hours.`
    );
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Have questions about our Computer Science program? We're here to
            help. Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john.doe@email.com"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Inquiry about the program"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <Button type="submit" className="w-full md:w-auto px-8">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <MapPin className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 mb-1">Main Office</p>
                      <p className="text-gray-600 text-sm">
                        Computer Science Department
                        <br />
                        Engineering Building, Room 301
                        <br />
                        123 University Avenue
                        <br />
                        Tech City, TC 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 mb-1">Phone</p>
                      <p className="text-gray-600 text-sm">
                        Main Office: (555) 123-4567
                        <br />
                        Admissions: (555) 123-4568
                        <br />
                        Fax: (555) 123-4569
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 mb-1">Email</p>
                      <p className="text-gray-600 text-sm">
                        General:{" "}
                        <a
                          href="mailto:cs.department@university.edu"
                          className="text-blue-600 hover:underline"
                        >
                          cs.department@university.edu
                        </a>
                        <br />
                        Admissions:{" "}
                        <a
                          href="mailto:admissions@university.edu"
                          className="text-blue-600 hover:underline"
                        >
                          admissions@university.edu
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Clock className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="text-gray-900 mb-1">Office Hours</p>
                      <p className="text-gray-600 text-sm">
                        Monday - Friday: 8:00 AM - 5:00 PM
                        <br />
                        Saturday: 10:00 AM - 2:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="mb-4">Connect With Us</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Follow us on social media to stay updated on the latest news,
                  events, and student achievements.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center">Visit Our Campus</h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-96 bg-gray-300 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <p>Interactive campus map would be displayed here</p>
              <p className="text-sm mt-2">
                123 University Avenue, Tech City, TC 12345
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-4">
              We encourage prospective students to visit our campus and tour our
              facilities. Schedule a visit to meet faculty, sit in on classes,
              and experience student life firsthand.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Schedule a Campus Tour
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="mb-2 text-blue-600">Admissions Process</h3>
              <p className="text-gray-600 text-sm mb-4">
                Learn about application requirements, deadlines, and the review
                process.
              </p>
              <a
                href="/admissions"
                className="text-blue-600 hover:underline text-sm"
              >
                View Admissions Info →
              </a>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="mb-2 text-blue-600">Program Curriculum</h3>
              <p className="text-gray-600 text-sm mb-4">
                Explore the courses, specializations, and learning outcomes of
                our program.
              </p>
              <a
                href="/about"
                className="text-blue-600 hover:underline text-sm"
              >
                View Program Details →
              </a>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="mb-2 text-blue-600">Financial Aid</h3>
              <p className="text-gray-600 text-sm mb-4">
                Discover scholarship opportunities and financial aid options
                available to students.
              </p>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                Learn About Financial Aid →
              </a>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="mb-2 text-blue-600">Student Life</h3>
              <p className="text-gray-600 text-sm mb-4">
                Find out about clubs, organizations, and activities for CS
                students.
              </p>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                Explore Student Life →
              </a>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="mb-2 text-blue-600">Career Services</h3>
              <p className="text-gray-600 text-sm mb-4">
                Learn about internship opportunities and career support services
                for students.
              </p>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                View Career Services →
              </a>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="mb-2 text-blue-600">Transfer Students</h3>
              <p className="text-gray-600 text-sm mb-4">
                Information for students transferring from other institutions.
              </p>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                Transfer Information →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
