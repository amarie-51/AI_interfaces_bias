import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send
} from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: [
        'School of Nursing',
        '123 University Avenue',
        'Medical Campus, Suite 200',
        'Boston, MA 02115',
      ],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        'Main Office: (555) 555-1234',
        'Admissions: (555) 555-1235',
        'Student Services: (555) 555-1236',
      ],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'General: nursing@university.edu',
        'Admissions: admissions@university.edu',
        'Academic Advising: advising@university.edu',
      ],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 8:00 AM - 5:00 PM',
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
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            We're here to answer your questions and help you take the next step in your nursing education journey
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
              <p className="text-gray-700 mb-8">
                Have a question about our BSN program? Fill out the form below and we'll get back to you 
                within 1-2 business days.
              </p>

              {submitted ? (
                <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-3 text-green-800">
                    <Send className="h-6 w-6" />
                    <div>
                      <h3 className="mb-1">Message Sent!</h3>
                      <p className="text-sm">Thank you for contacting us. We'll respond soon.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john.doe@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What is your inquiry about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Please provide details about your question or inquiry..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-6">Get In Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-gray-50">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <info.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="mb-2">{info.title}</h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-700 text-sm">
                              {detail}
                            </p>
                          ))}
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

      {/* Map Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-8">Find Us on Campus</h2>
          <div className="relative h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.4447235304547!2d-71.10172468455684!3d42.33951797918831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a0c429bf0cd%3A0x45e8c3d4f5f0e5f0!2sBoston%2C%20MA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Campus Location"
            />
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-700 mb-4">
              Our School of Nursing is located on the Medical Campus, easily accessible by public transportation 
              and with parking available for visitors.
            </p>
            <Button variant="outline" asChild>
              <a
                href="https://www.google.com/maps/search/Boston+MA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4">Connect With Us</h2>
          <p className="text-gray-700 mb-8">
            Follow us on social media to stay updated on program news, student achievements, and nursing events
          </p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-gray-100 rounded-full transition-colors ${social.color}`}
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-2">How long does it take to complete the BSN program?</h3>
                <p className="text-gray-700">
                  The traditional BSN program is 4 years (8 semesters) of full-time study. We also offer 
                  accelerated options for students with previous degrees.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-2">What is the student-to-faculty ratio?</h3>
                <p className="text-gray-700">
                  We maintain a 10:1 student-to-faculty ratio in clinical settings and small class sizes 
                  to ensure personalized attention and quality education.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-2">Can I work while attending the program?</h3>
                <p className="text-gray-700">
                  While the program is demanding, many students work part-time. Clinical rotations are 
                  typically scheduled during daytime hours on weekdays.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-2">Where do students complete clinical rotations?</h3>
                <p className="text-gray-700">
                  We have partnerships with over 50 healthcare facilities including major hospitals, 
                  community health centers, and specialty clinics in the greater Boston area.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
