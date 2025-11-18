import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram, Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      // Reset form
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 University Avenue', 'Tech City, TC 12345', 'United States'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['Main Office: (555) 123-4567', 'Admissions: (555) 123-4568', 'Fax: (555) 123-4569'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['General: info@cs.edu', 'Admissions: admissions@cs.edu', 'Faculty: faculty@cs.edu'],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday: 10:00 AM - 2:00 PM', 'Sunday: Closed'],
    },
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#' },
    { icon: Twitter, name: 'Twitter', url: '#' },
    { icon: Linkedin, name: 'LinkedIn', url: '#' },
    { icon: Instagram, name: 'Instagram', url: '#' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl mb-6">Contact Us</h1>
            <p className="text-xl">
              Have questions? We're here to help. Reach out to us and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              
              {formSubmitted ? (
                <Card className="border-2 border-green-600 bg-green-50">
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl mb-2">Message Sent!</h3>
                    <p className="text-gray-700">
                      Thank you for contacting us. We'll get back to you shortly.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        required 
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        required 
                        className="mt-2"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="(555) 123-4567" 
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input 
                        id="subject" 
                        placeholder="General Inquiry" 
                        required 
                        className="mt-2"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      rows={6} 
                      placeholder="Tell us how we can help you..." 
                      required 
                      className="mt-2"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2" size={20} />
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                You can also reach us through any of the following channels:
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} className="border-0 shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="text-blue-600" size={24} />
                          </div>
                          <div>
                            <h3 className="text-xl mb-2">{info.title}</h3>
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-gray-600 text-sm">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-xl mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                        aria-label={social.name}
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl mb-8 text-center">Visit Our Campus</h2>
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin size={48} className="mx-auto mb-4" />
              <p className="text-lg">Interactive Map</p>
              <p className="text-sm">123 University Avenue, Tech City, TC 12345</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Schedule a campus tour to explore our facilities and meet our faculty and students.
            </p>
            <Button size="lg">
              Schedule a Campus Tour
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-2">What are your office hours?</h3>
                  <p className="text-gray-600">
                    Our office is open Monday through Friday from 9:00 AM to 5:00 PM, and Saturday from 10:00 AM to 2:00 PM. We're closed on Sundays and major holidays.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-2">How quickly will I receive a response?</h3>
                  <p className="text-gray-600">
                    We strive to respond to all inquiries within 24 hours during business days. During peak admission periods, it may take up to 48 hours.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-2">Can I schedule an in-person meeting?</h3>
                  <p className="text-gray-600">
                    Yes! We welcome campus visits and in-person meetings. Please contact us to schedule an appointment with an admissions counselor or faculty member.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl mb-2">Do you offer virtual consultations?</h3>
                  <p className="text-gray-600">
                    Absolutely. We offer virtual meetings via Zoom or phone for prospective students who cannot visit campus. Contact us to schedule a virtual consultation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
