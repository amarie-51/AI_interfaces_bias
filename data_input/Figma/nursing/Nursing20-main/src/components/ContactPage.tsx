import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Campus Location",
      details: [
        "School of Nursing",
        "123 University Avenue",
        "Medical Campus, Building C",
        "Boston, MA 02115",
      ],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Main Office: (617) 555-0100",
        "Admissions: (617) 555-0101",
        "Student Services: (617) 555-0102",
        "Fax: (617) 555-0199",
      ],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "General: nursing@university.edu",
        "Admissions: admissions.nursing@university.edu",
        "Academic Advising: advising.nursing@university.edu",
        "Clinical Placement: clinical@university.edu",
      ],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM (Admissions only)",
        "Sunday: Closed",
        "Holiday closures may apply",
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            We're here to answer your questions and help you begin your nursing education journey
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="mb-4">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Have a question? Fill out the form below and we'll get back to you within 1-2 business days.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
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
                  <h3 className="mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll respond to your inquiry soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      type="text"
                      required
                      placeholder="What is your inquiry about?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      required
                      placeholder="Please provide details about your question or inquiry..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>

                  <p className="text-gray-600">
                    * Required fields
                  </p>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Connect with us through any of the following channels. We look forward to hearing from you!
              </p>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-8">Visit Our Campus</h2>
          
          {/* Placeholder Map */}
          <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600">
                School of Nursing - Medical Campus
              </p>
              <p className="text-gray-600">
                123 University Avenue, Boston, MA 02115
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-4">
              We encourage prospective students to visit our campus and tour our facilities.
            </p>
            <Button size="lg" variant="outline">
              Schedule a Campus Tour
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 mb-12">
            Quick answers to common questions. For more detailed information, please contact us directly.
          </p>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="mb-2">What are your application deadlines?</h3>
              <p className="text-gray-600">
                We have priority deadlines on December 1 for Fall admission and August 1 for Spring admission. 
                Regular deadlines are March 1 and October 1 respectively. We encourage early application as 
                spaces are limited.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="mb-2">Can I transfer credits from another institution?</h3>
              <p className="text-gray-600">
                Yes, we accept transfer credits from accredited institutions. Our admissions team will evaluate 
                your transcripts and determine which credits are eligible for transfer. Contact our admissions 
                office for a preliminary evaluation.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="mb-2">What is the student-to-faculty ratio?</h3>
              <p className="text-gray-600">
                We maintain a 15:1 student-to-faculty ratio to ensure personalized attention and quality 
                education. Clinical groups are even smaller to maximize hands-on learning opportunities.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="mb-2">Do you offer campus tours?</h3>
              <p className="text-gray-600">
                Yes! We offer both group and individual campus tours. You can schedule a tour by contacting 
                our admissions office or using the contact form above. Tours include visits to our simulation 
                labs, classrooms, and student facilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
