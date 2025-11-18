import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: ['123 University Drive', 'Medical Campus', 'MC 12345'],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['Main: (555) 123-4567', 'Admissions: (555) 123-4568'],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['bsn@university.edu', 'admissions@university.edu'],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 1:00 PM'],
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-6 h-6" />, label: 'Facebook', url: '#' },
    { icon: <Twitter className="w-6 h-6" />, label: 'Twitter', url: '#' },
    { icon: <Instagram className="w-6 h-6" />, label: 'Instagram', url: '#' },
    { icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn', url: '#' },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Have questions about our BSN program? We're here to help. Reach out to us and 
            we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" required placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" required placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <select
                    id="subject"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select a subject</option>
                    <option value="admissions">Admissions Inquiry</option>
                    <option value="program">Program Information</option>
                    <option value="financial">Financial Aid</option>
                    <option value="transfer">Transfer Credits</option>
                    <option value="visit">Campus Visit</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Tell us how we can help you..."
                    rows={6}
                  />
                </div>

                {formStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md">
                    <p>Thank you for your message! We'll get back to you within 24-48 hours.</p>
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-6">Get in Touch</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="text-blue-600 flex-shrink-0">{info.icon}</div>
                    <div>
                      <h3 className="mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-700">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="mb-4">Follow Us on Social Media</h3>
                <p className="text-gray-700 mb-4">
                  Stay updated with the latest news, events, and student stories from our BSN program.
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="bg-white p-3 rounded-full text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon}
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
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Placeholder for map */}
            <div className="relative h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">
                  123 University Drive, Medical Campus, MC 12345
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Interactive map would be integrated here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Visit CTA */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 text-white rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-white mb-4">Schedule a Campus Visit</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience our state-of-the-art facilities, meet our faculty, and talk to current 
              students. See firsthand what makes our BSN program exceptional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-gray-100"
              >
                Schedule a Visit
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Virtual Tour
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-12">Need More Information?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-blue-900 mb-3">Admissions</h3>
              <p className="text-gray-600 mb-4">
                Learn about application requirements and deadlines
              </p>
              <a
                href="/admissions"
                className="text-blue-600 hover:underline inline-flex items-center gap-2"
              >
                View Admissions Info →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-blue-900 mb-3">Program Details</h3>
              <p className="text-gray-600 mb-4">
                Explore curriculum, outcomes, and career paths
              </p>
              <a
                href="/about"
                className="text-blue-600 hover:underline inline-flex items-center gap-2"
              >
                View Program Info →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-blue-900 mb-3">Meet Our Faculty</h3>
              <p className="text-gray-600 mb-4">
                Get to know our experienced nursing educators
              </p>
              <a
                href="/faculty"
                className="text-blue-600 hover:underline inline-flex items-center gap-2"
              >
                Meet the Faculty →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
