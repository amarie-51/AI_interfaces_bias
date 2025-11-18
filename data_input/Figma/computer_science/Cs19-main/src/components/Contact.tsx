import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
    toast.success('Message sent successfully! We will get back to you soon.');
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
      details: ['Computer Science Department', '123 University Ave', 'Campus City, ST 12345'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['Main Office: (555) 123-4567', 'Admissions: (555) 123-4568', 'Mon-Fri: 9:00 AM - 5:00 PM'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['General: info@csuniversity.edu', 'Admissions: admissions@csuniversity.edu', 'Faculty: faculty@csuniversity.edu'],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday: 10:00 AM - 2:00 PM', 'Sunday: Closed'],
    },
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: 'https://facebook.com' },
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com' },
    { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: Instagram, name: 'Instagram', url: 'https://instagram.com' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-blue-900/90 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1632834380561-d1e05839a33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNjM0MDA2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <h1 className="mb-4">Contact Us</h1>
          <p className="text-xl text-gray-100">
            We're here to answer your questions and help you start your journey
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <info.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-sm text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="mb-4">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Have a question about our program? Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
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
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
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

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    required
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-4">Visit Our Campus</h2>
                <p className="text-gray-700 mb-4">
                  We'd love to have you visit our campus and see our facilities firsthand. Schedule a campus tour to meet our faculty, explore our labs, and learn more about student life.
                </p>
                <Button variant="outline" className="w-full">
                  Schedule a Campus Tour
                </Button>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-4">Connect With Us</h3>
                  <p className="text-gray-600 mb-4">
                    Follow us on social media to stay updated with the latest news, events, and opportunities.
                  </p>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-blue-50 hover:bg-blue-100 rounded-full transition-colors"
                        aria-label={social.name}
                      >
                        <social.icon className="h-6 w-6 text-blue-600" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-4">FAQ</h3>
                  <p className="text-gray-600 mb-4">
                    Looking for quick answers? Check out our frequently asked questions page for information about admissions, curriculum, financial aid, and more.
                  </p>
                  <Button variant="outline" className="w-full">
                    View FAQ
                  </Button>
                </CardContent>
              </Card>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="mb-3 text-blue-900">Need Immediate Help?</h3>
                <p className="text-gray-700 mb-4">
                  For urgent inquiries, please call our main office during business hours.
                </p>
                <a href="tel:5551234567" className="text-blue-600 hover:text-blue-700">
                  (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center">Find Us</h2>
          <div className="bg-gray-200 rounded-lg overflow-hidden" style={{ height: '400px' }}>
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <div className="text-center">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <p>123 University Ave, Campus City, ST 12345</p>
                <p className="text-sm mt-2">Interactive map would be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
