import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Computer Science Department', '123 University Avenue', 'Tech City, TC 12345', 'United States'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['Main Office: (555) 123-4567', 'Admissions: (555) 123-4568', 'Fax: (555) 123-4569'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['General Inquiries: info@university.edu', 'Admissions: admissions@university.edu', 'Faculty: faculty@university.edu'],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday: 10:00 AM - 2:00 PM', 'Sunday: Closed'],
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:text-pink-600' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-700' },
    { icon: Youtube, label: 'YouTube', href: '#', color: 'hover:text-red-600' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have questions about our program? We're here to help. Reach out to us and we'll get back
            to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-700 mb-6">
                Fill out the form below and our team will respond within 1-2 business days.
              </p>
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="text-green-600 mb-2 text-5xl">✓</div>
                  <h3 className="text-xl text-green-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-700">
                    Thank you for contacting us. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
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
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="What is your inquiry about?"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-700 mb-6">
                You can also reach us through any of the following channels:
              </p>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                      <info.icon className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-1">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-xl text-gray-900 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`bg-gray-100 p-3 rounded-full text-gray-600 transition-colors ${social.color}`}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl text-gray-900 mb-8 text-center">Visit Our Campus</h2>
          <div className="bg-gray-300 rounded-lg overflow-hidden" style={{ height: '400px' }}>
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
              <div className="text-center">
                <MapPin className="text-blue-600 mx-auto mb-4" size={64} />
                <p className="text-gray-700 text-xl">Interactive Map</p>
                <p className="text-gray-600">123 University Avenue, Tech City, TC 12345</p>
                <Button className="mt-4" variant="outline">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl text-gray-900 mb-8 text-center">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-blue-50 transition-colors cursor-pointer">
              <h3 className="text-gray-900 mb-2">Admissions FAQ</h3>
              <p className="text-sm text-gray-600">Common questions about applying to our program</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-blue-50 transition-colors cursor-pointer">
              <h3 className="text-gray-900 mb-2">Campus Tours</h3>
              <p className="text-sm text-gray-600">Schedule a visit to see our facilities</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-blue-50 transition-colors cursor-pointer">
              <h3 className="text-gray-900 mb-2">Financial Aid</h3>
              <p className="text-sm text-gray-600">Learn about scholarships and assistance</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-blue-50 transition-colors cursor-pointer">
              <h3 className="text-gray-900 mb-2">Student Services</h3>
              <p className="text-sm text-gray-600">Support services available to students</p>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contact */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-3xl text-gray-900 mb-4 text-center">Department Contacts</h2>
            <p className="text-gray-700 mb-6 text-center">
              For specific inquiries, contact our specialized teams directly:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-gray-900 mb-1">Academic Advising</h3>
                <p className="text-sm text-gray-600 mb-1">advising@university.edu</p>
                <p className="text-sm text-gray-600">(555) 123-4570</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-gray-900 mb-1">Career Services</h3>
                <p className="text-sm text-gray-600 mb-1">careers@university.edu</p>
                <p className="text-sm text-gray-600">(555) 123-4571</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-gray-900 mb-1">Research Opportunities</h3>
                <p className="text-sm text-gray-600 mb-1">research@university.edu</p>
                <p className="text-sm text-gray-600">(555) 123-4572</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-gray-900 mb-1">International Students</h3>
                <p className="text-sm text-gray-600 mb-1">international@university.edu</p>
                <p className="text-sm text-gray-600">(555) 123-4573</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
