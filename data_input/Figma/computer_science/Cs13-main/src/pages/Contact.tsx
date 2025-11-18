import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you within 1-2 business days.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      content: '123 University Drive\nTech City, TC 12345\nUnited States',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      content: 'Main Office: (555) 123-4567\nAdmissions: (555) 123-4568\nFax: (555) 123-4569',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      content: 'General: cs.info@university.edu\nAdmissions: cs.admissions@university.edu\nFaculty: cs.faculty@university.edu',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Office Hours',
      content: 'Monday - Friday: 8:00 AM - 5:00 PM\nSaturday: 9:00 AM - 1:00 PM\nSunday: Closed',
    },
  ];

  const departments = [
    {
      name: 'Admissions Office',
      description: 'Questions about applying, requirements, or visiting campus',
      email: 'cs.admissions@university.edu',
      phone: '(555) 123-4568',
    },
    {
      name: 'Academic Advising',
      description: 'Course selection, degree requirements, and academic planning',
      email: 'cs.advising@university.edu',
      phone: '(555) 123-4570',
    },
    {
      name: 'Career Services',
      description: 'Internships, job placement, and career counseling',
      email: 'cs.careers@university.edu',
      phone: '(555) 123-4571',
    },
    {
      name: 'Financial Aid',
      description: 'Scholarships, grants, loans, and payment plans',
      email: 'cs.financialaid@university.edu',
      phone: '(555) 123-4572',
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Have questions? We're here to help! Reach out to us and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john.doe@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2">Subject *</label>
                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="Admissions">Admissions Inquiry</option>
                    <option value="Program Information">Program Information</option>
                    <option value="Financial Aid">Financial Aid</option>
                    <option value="Transfer Credits">Transfer Credits</option>
                    <option value="Campus Visit">Campus Visit</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">Message *</label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                    <div className="text-blue-600 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="mb-2">{info.title}</h3>
                      <p className="text-gray-700 whitespace-pre-line">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="mb-4">Follow Us on Social Media</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-4">Contact by Department</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Not sure who to contact? Here's a quick guide to help you reach the right department.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="mb-3 text-blue-600">{dept.name}</h3>
                <p className="text-gray-700 mb-4">{dept.description}</p>
                <div className="space-y-2">
                  <a 
                    href={`mailto:${dept.email}`}
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{dept.email}</span>
                  </a>
                  <a 
                    href={`tel:${dept.phone.replace(/\D/g, '')}`}
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{dept.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-8">Find Us on Campus</h2>
          <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <p>Interactive map would be displayed here</p>
              <p className="text-sm mt-2">Computer Science Building, Room 101</p>
              <p className="text-sm">123 University Drive, Tech City, TC 12345</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center mb-8">Quick Answers</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h4 className="mb-2 text-blue-600">When will I hear back after submitting an inquiry?</h4>
                <p className="text-gray-700">We typically respond within 1-2 business days.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h4 className="mb-2 text-blue-600">Can I schedule a campus tour?</h4>
                <p className="text-gray-700">Yes! Contact our admissions office at (555) 123-4568 or email cs.admissions@university.edu to schedule a personalized campus tour.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h4 className="mb-2 text-blue-600">How do I speak with a faculty member?</h4>
                <p className="text-gray-700">Faculty members maintain regular office hours. Email cs.faculty@university.edu with your inquiry and we'll connect you with the appropriate professor.</p>
              </div>
              <div className="pb-4">
                <h4 className="mb-2 text-blue-600">What if I have technical issues with my application?</h4>
                <p className="text-gray-700">For technical support, please email cs.admissions@university.edu with a description of the issue and screenshots if possible.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
