import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useState } from 'react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Have questions about our BSN program? We're here to help. Reach out to our admissions team.
          </p>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-blue-900 mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-green-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We will respond within 24-48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <select id="subject" required className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2">
                      <option value="">Select a subject...</option>
                      <option value="admissions">Admissions Inquiry</option>
                      <option value="program">Program Information</option>
                      <option value="financial-aid">Financial Aid</option>
                      <option value="campus-visit">Campus Visit</option>
                      <option value="transfer">Transfer Credits</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <textarea
                      id="message"
                      rows={6}
                      required
                      className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Send className="mr-2" size={18} />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Office Info */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-blue-900 mb-4">Office Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-gray-900">School of Nursing</p>
                    <p className="text-gray-600">123 University Avenue</p>
                    <p className="text-gray-600">Medical Campus Building, Suite 200</p>
                    <p className="text-gray-600">City, State 12345</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-gray-900">(555) 123-4567</p>
                    <p className="text-gray-600">Monday - Friday</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <a href="mailto:nursing@university.edu" className="text-blue-600 hover:text-blue-700">
                      nursing@university.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-gray-900">Office Hours</p>
                    <p className="text-gray-600">Mon - Fri: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Sat - Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Admissions Contact */}
            <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
              <h3 className="text-blue-900 mb-4">Admissions Office</h3>
              <p className="text-gray-700 mb-3">
                For questions about applications, requirements, or deadlines:
              </p>
              <p className="text-blue-600 mb-1">admissions@university.edu</p>
              <p className="text-gray-900">(555) 123-4500</p>
            </div>

            {/* Student Services */}
            <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
              <h3 className="text-blue-900 mb-4">Student Services</h3>
              <p className="text-gray-700 mb-3">
                Current students and academic advising:
              </p>
              <p className="text-blue-600 mb-1">studentservices@university.edu</p>
              <p className="text-gray-900">(555) 123-4510</p>
            </div>

            {/* Social Media */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-blue-900 mb-4">Follow Us</h3>
              <p className="text-gray-600 mb-4">
                Stay connected and get the latest updates
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-blue-900 mb-8">Visit Our Campus</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-blue-600 mx-auto mb-4" size={48} />
                <p className="text-gray-700 mb-2">123 University Avenue</p>
                <p className="text-gray-600">Medical Campus, City, State 12345</p>
                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-center text-blue-900 mb-12">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <h3 className="text-blue-900 mb-3">Schedule a Campus Tour</h3>
            <p className="text-gray-600 mb-4">Visit our facilities and meet current students and faculty</p>
            <button className="text-blue-600 hover:text-blue-700">
              Book a Tour →
            </button>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <h3 className="text-blue-900 mb-3">Attend an Info Session</h3>
            <p className="text-gray-600 mb-4">Join a virtual or in-person information session</p>
            <button className="text-blue-600 hover:text-blue-700">
              View Schedule →
            </button>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
            <h3 className="text-blue-900 mb-3">Chat with Current Students</h3>
            <p className="text-gray-600 mb-4">Connect with current BSN students to learn about their experience</p>
            <button className="text-blue-600 hover:text-blue-700">
              Start Chat →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
