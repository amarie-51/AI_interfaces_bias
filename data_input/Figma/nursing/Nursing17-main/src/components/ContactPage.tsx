import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      details: [
        'School of Nursing',
        '123 University Drive',
        'Medical Campus, Building C',
        'State 12345',
      ],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        'Main Office: (555) 123-4567',
        'Admissions: (555) 123-4568',
        'Student Services: (555) 123-4569',
        'Monday-Friday: 8:00 AM - 5:00 PM',
      ],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'General Inquiries: bsn.info@university.edu',
        'Admissions: admissions@university.edu',
        'Academic Advising: advising@university.edu',
        'Technical Support: support@university.edu',
      ],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Thursday: 8:00 AM - 6:00 PM',
        'Friday: 8:00 AM - 5:00 PM',
        'Saturday: 9:00 AM - 1:00 PM',
        'Sunday: Closed',
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Twitter, url: 'https://twitter.com', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Instagram, url: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-700' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-blue-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="mb-4 text-white">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Have questions? We're here to help. Reach out to us and we'll get back to you as soon as
            possible.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will respond within 24-48 hours during business
                days.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="john.doe@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    required
                    placeholder="What is your inquiry about?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                You can also reach us through any of the following methods. We look forward to
                hearing from you!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <info.icon className="w-6 h-6 text-blue-600" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-3">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-gray-600 text-sm">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Social Media */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Map Placeholder */}
            <div>
              <h2 className="mb-6">Find Us on Campus</h2>
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1631599143424-5bc234fbebf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYzNDUyMzkwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="University Campus"
                  className="w-full h-96 object-cover"
                />
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                The School of Nursing is located in Building C on the Medical Campus. Free parking
                is available in Lot 5. Visitor passes can be obtained at the main entrance security
                desk.
              </p>
            </div>

            {/* Social Media & Additional Info */}
            <div>
              <h2 className="mb-6">Connect With Us</h2>
              <p className="text-gray-600 mb-6">
                Follow us on social media to stay updated with the latest news, events, and stories
                from our BSN program community.
              </p>

              <div className="flex gap-4 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md transition-all ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="mb-4">Campus Tours</h3>
                  <p className="text-gray-600 mb-4">
                    Interested in visiting our campus and touring our state-of-the-art simulation
                    labs? Schedule a campus visit to meet our faculty, see our facilities, and learn
                    more about student life.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                    Schedule a Campus Tour
                  </Button>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardContent className="p-6">
                  <h3 className="mb-4">Virtual Information Sessions</h3>
                  <p className="text-gray-600 mb-4">
                    Can't make it to campus? Join us for a virtual information session where you can
                    learn about the program and ask questions from the comfort of your home.
                  </p>
                  <Button variant="outline" className="w-full">
                    Join Virtual Session
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Frequently Asked Questions</h2>
          <p className="text-gray-600 mb-8">
            Looking for quick answers? Check out our FAQ section for common questions about
            admissions, curriculum, financial aid, and more.
          </p>
          <Button size="lg" variant="outline">
            View FAQs
          </Button>
        </div>
      </section>
    </div>
  );
}
