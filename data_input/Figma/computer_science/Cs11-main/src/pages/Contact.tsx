import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube
} from 'lucide-react';

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
    alert('Thank you for your message! This is a demo form. In a real application, your message would be sent to our admissions team.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Computer Science Department', '123 University Avenue', 'College Town, ST 12345'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['Main Office: (555) 123-4567', 'Admissions: (555) 123-4568', 'Fax: (555) 123-4569'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['General: cs@university.edu', 'Admissions: admissions@university.edu', 'Faculty: faculty.cs@university.edu'],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday: 10:00 AM - 2:00 PM', 'Sunday: Closed'],
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', url: '#' },
    { icon: Twitter, label: 'Twitter', url: '#' },
    { icon: Linkedin, label: 'LinkedIn', url: '#' },
    { icon: Instagram, label: 'Instagram', url: '#' },
    { icon: Youtube, label: 'YouTube', url: '#' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Have questions about our program? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <info.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl mb-6 text-gray-900">Send Us a Message</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and our team will respond within 1-2 business days.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md p-2"
                  >
                    <option value="">Select a topic</option>
                    <option value="admissions">Admissions Inquiry</option>
                    <option value="program">Program Information</option>
                    <option value="financial">Financial Aid</option>
                    <option value="transfer">Transfer Credits</option>
                    <option value="campus">Campus Visit</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-4xl mb-6 text-gray-900">Find Us</h2>
              
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg overflow-hidden mb-8 h-[300px] flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">123 University Avenue, College Town, ST 12345</p>
                </div>
              </div>

              {/* Quick Links */}
              <Card className="p-6 mb-6">
                <h3 className="text-xl mb-4 text-gray-900">Quick Links</h3>
                <div className="space-y-3">
                  <a href="#" className="block text-blue-600 hover:text-blue-800">
                    → Schedule a Campus Tour
                  </a>
                  <a href="#" className="block text-blue-600 hover:text-blue-800">
                    → Request Information Packet
                  </a>
                  <a href="#" className="block text-blue-600 hover:text-blue-800">
                    → Meet with an Advisor
                  </a>
                  <a href="#" className="block text-blue-600 hover:text-blue-800">
                    → Virtual Open House Dates
                  </a>
                </div>
              </Card>

              {/* Parking & Directions */}
              <Card className="p-6">
                <h3 className="text-xl mb-4 text-gray-900">Parking & Directions</h3>
                <p className="text-gray-600 mb-3">
                  Visitor parking is available in Lot B, located on the east side of the Computer Science building. Free parking passes can be obtained from the main office.
                </p>
                <p className="text-gray-600">
                  <strong>From downtown:</strong> Take Highway 101 North, exit at University Ave, turn left and continue for 2 miles. Building is on the right.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Social Media */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl mb-6 text-gray-900">Connect With Us</h2>
              <p className="text-lg text-gray-600 mb-6">
                Follow us on social media for the latest news, events, and student success stories.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.label}
                    className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h2 className="text-3xl mb-6 text-gray-900">Stay Updated</h2>
              <p className="text-lg text-gray-600 mb-6">
                Subscribe to our newsletter for program updates, events, and admissions tips.
              </p>
              <form className="flex gap-3" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing! This is a demo form.'); }}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="flex-1"
                />
                <Button type="submit">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl mb-12 text-center text-gray-900">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl mb-2 text-gray-900">What are the office hours for the Computer Science department?</h3>
              <p className="text-gray-600">
                Our office is open Monday through Friday from 9:00 AM to 5:00 PM, and Saturday from 10:00 AM to 2:00 PM. We're closed on Sundays and university holidays.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl mb-2 text-gray-900">How can I schedule a campus visit?</h3>
              <p className="text-gray-600">
                You can schedule a campus visit by calling our admissions office at (555) 123-4568 or by filling out the contact form above and selecting "Campus Visit" as your subject.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl mb-2 text-gray-900">Do you offer virtual tours or information sessions?</h3>
              <p className="text-gray-600">
                Yes! We offer virtual open houses every month and one-on-one virtual meetings with advisors. Contact us to schedule a session that fits your schedule.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl mb-2 text-gray-900">Who should I contact about financial aid questions?</h3>
              <p className="text-gray-600">
                For financial aid and scholarship questions, please email admissions@university.edu or call (555) 123-4568. Our financial aid counselors are available to help you explore all available options.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
