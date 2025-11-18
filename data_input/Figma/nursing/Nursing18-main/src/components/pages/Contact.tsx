import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submission logic
    alert('Thank you for your message! We will get back to you within 24-48 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: ['123 University Avenue', 'Medical Sciences Building, Room 200', 'Cityville, ST 12345'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: ['Main Office: (555) 123-4567', 'Admissions: (555) 123-4568', 'Mon-Fri: 8:00 AM - 5:00 PM'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: ['General: bsn@university.edu', 'Admissions: admissions@university.edu', 'Faculty: faculty@university.edu'],
    },
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 1:00 PM (by appointment)' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', url: 'https://facebook.com' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com' },
    { icon: Instagram, label: 'Instagram', url: 'https://instagram.com' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4 text-white">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Have questions about our BSN program? We're here to help. Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6">Send Us a Message</h2>
              <Card className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
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
                      placeholder="john.doe@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Inquiry about admission requirements"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please tell us how we can help you..."
                      rows={6}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex gap-4">
                        <div className="bg-blue-100 p-3 rounded-lg h-fit">
                          <info.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="mb-2">{info.title}</h3>
                          {info.content.map((line, lineIndex) => (
                            <p key={lineIndex} className="text-gray-600">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <h3 className="mb-0">Office Hours</h3>
                </div>
                <div className="space-y-2">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b last:border-0">
                      <span className="text-gray-700">{schedule.day}</span>
                      <span className="text-gray-900">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Social Media */}
              <Card className="p-6">
                <h3 className="mb-4">Connect With Us</h3>
                <p className="text-gray-600 mb-4">
                  Follow us on social media to stay updated on program news, events, and student success stories.
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-100 p-3 rounded-lg hover:bg-blue-200 transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 text-blue-600" />
                    </a>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center">Find Us on Campus</h2>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg bg-gray-300">
            {/* Placeholder for map - in a real application, you would integrate Google Maps or similar */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-600">Interactive map would be displayed here</p>
                <p className="text-sm text-gray-500 mt-2">
                  Medical Sciences Building, 123 University Avenue
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="mb-2">What are your admission requirements?</h3>
              <p className="text-gray-600">
                We require a minimum 3.0 GPA, completion of prerequisite courses, letters of recommendation, and a personal statement. Visit our{' '}
                <a href="/admissions" className="text-blue-600 hover:underline">
                  Admissions page
                </a>{' '}
                for complete details.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="mb-2">How long does the program take to complete?</h3>
              <p className="text-gray-600">
                The BSN program is a four-year, full-time program consisting of 120 credit hours including general education, nursing theory, and clinical practice.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="mb-2">Can I schedule a campus tour?</h3>
              <p className="text-gray-600">
                Yes! We offer campus tours Monday through Friday. Contact our admissions office at (555) 123-4568 or admissions@university.edu to schedule your visit.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="mb-2">What is the application deadline?</h3>
              <p className="text-gray-600">
                Application deadlines are March 1st for Fall admission and October 1st for Spring admission. We encourage early application as space is limited.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
