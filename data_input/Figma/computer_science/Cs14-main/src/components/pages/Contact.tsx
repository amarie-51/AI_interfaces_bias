import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "Address",
      content: "123 University Avenue\nComputer Science Department\nTech City, TC 12345"
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Phone",
      content: "Main Office: +1 (555) 123-4567\nAdmissions: +1 (555) 123-4568\nFax: +1 (555) 123-4569"
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      content: "General: cs@university.edu\nAdmissions: admissions@university.edu\nFaculty: faculty@university.edu"
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "Office Hours",
      content: "Monday - Friday: 8:00 AM - 5:00 PM\nSaturday: 9:00 AM - 1:00 PM\nSunday: Closed"
    }
  ];

  const departments = [
    {
      name: "Admissions Office",
      description: "Questions about applying, requirements, and deadlines",
      email: "admissions@university.edu",
      phone: "+1 (555) 123-4568"
    },
    {
      name: "Academic Advising",
      description: "Curriculum questions, course planning, and academic guidance",
      email: "advising@university.edu",
      phone: "+1 (555) 123-4570"
    },
    {
      name: "Student Services",
      description: "Housing, financial aid, and student support resources",
      email: "studentservices@university.edu",
      phone: "+1 (555) 123-4571"
    },
    {
      name: "Career Services",
      description: "Internships, job placement, and career counseling",
      email: "careers@university.edu",
      phone: "+1 (555) 123-4572"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl text-blue-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Have questions? We're here to help. Reach out to us and we'll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Form and Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="p-8">
            <h2 className="text-3xl text-blue-900 mb-6">Send Us a Message</h2>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="text-green-600 mb-2">✓ Message Sent Successfully!</div>
                <p className="text-gray-700">
                  Thank you for contacting us. We'll respond to your inquiry within 1-2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                    placeholder="John Doe"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required 
                    placeholder="What is your inquiry about?"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required 
                    rows={6}
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  Send Message
                </Button>
              </form>
            )}
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{info.icon}</div>
                <div>
                  <h3 className="text-lg text-blue-900 mb-2">{info.title}</h3>
                  <p className="text-gray-700 text-sm whitespace-pre-line">{info.content}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Department Contacts */}
      <div className="mb-16">
        <h2 className="text-3xl text-blue-900 mb-8 text-center">Department Contacts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {departments.map((dept, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl text-blue-900 mb-2">{dept.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{dept.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Mail size={16} className="text-blue-600" />
                  <a href={`mailto:${dept.email}`} className="hover:text-blue-600">
                    {dept.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone size={16} className="text-blue-600" />
                  <span>{dept.phone}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="mb-16">
        <Card className="overflow-hidden">
          <div className="bg-gray-200 h-96 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin size={48} className="mx-auto mb-4 text-blue-600" />
              <p>Interactive Campus Map</p>
              <p className="text-sm">123 University Avenue, Tech City, TC 12345</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Social Media Links */}
      <Card className="p-8 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="text-center mb-6">
          <h2 className="text-3xl text-blue-900 mb-2">Connect With Us</h2>
          <p className="text-gray-700">
            Follow us on social media for the latest news, events, and updates
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-md hover:shadow-lg"
            aria-label="Facebook"
          >
            <Facebook size={28} />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all shadow-md hover:shadow-lg"
            aria-label="Twitter"
          >
            <Twitter size={28} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all shadow-md hover:shadow-lg"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all shadow-md hover:shadow-lg"
            aria-label="Instagram"
          >
            <Instagram size={28} />
          </a>
        </div>
        <div className="text-center mt-6 space-y-1">
          <div className="text-gray-700">@UniversityCS</div>
          <div className="text-sm text-gray-600">Tag us in your posts and use #FutureOfTech</div>
        </div>
      </Card>

      {/* FAQ Callout */}
      <div className="mt-16 bg-blue-900 text-white rounded-lg p-12 text-center">
        <h2 className="text-3xl mb-4">Have a Quick Question?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Check out our FAQ page or schedule a virtual tour to learn more about our program
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-white text-blue-900 hover:bg-gray-100"
          >
            View FAQ
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white/10"
          >
            Schedule a Tour
          </Button>
        </div>
      </div>
    </div>
  );
}
