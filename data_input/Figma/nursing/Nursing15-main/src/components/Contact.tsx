import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    alert("Thank you for contacting us! We'll respond within 24-48 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: ["123 University Avenue", "Medical Campus Building", "City, State 12345"],
    },
    {
      icon: Phone,
      title: "Phone",
      content: ["Main Office: (555) 123-4567", "Admissions: (555) 123-4568"],
    },
    {
      icon: Mail,
      title: "Email",
      content: ["nursing@university.edu", "admissions@university.edu"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: ["Monday - Friday: 8:00 AM - 5:00 PM", "Closed on weekends and holidays"],
    },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", url: "#" },
    { icon: Twitter, label: "Twitter", url: "#" },
    { icon: Instagram, label: "Instagram", url: "#" },
    { icon: Linkedin, label: "LinkedIn", url: "#" },
  ];

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our BSN program? We're here to help! Reach out to
            us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john.doe@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="What is your inquiry about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us more about your question or inquiry..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-2">{info.title}</h3>
                      {info.content.map((line, lineIndex) => (
                        <p key={lineIndex} className="text-gray-600 text-sm">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Social Media */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Stay updated with the latest news, events, and student stories
                  from our BSN program.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <section className="mb-16">
          <Card>
            <CardContent className="p-0">
              <div className="bg-gray-200 h-[400px] rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-xl">Campus Map</p>
                  <p className="text-sm mt-2">
                    123 University Avenue, Medical Campus Building
                  </p>
                  <p className="text-sm">City, State 12345</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Visit Us Section */}
        <section>
          <Card className="bg-blue-50">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-2xl mb-4">Visit Our Campus</h2>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Experience our state-of-the-art facilities firsthand! Schedule a
                  campus tour to see our simulation labs, meet our faculty, and
                  learn more about student life in our BSN program.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg">Schedule a Tour</Button>
                  <Button size="lg" variant="outline">
                    Attend an Info Session
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Additional Resources */}
        <section className="mt-16">
          <h2 className="text-2xl mb-6 text-center">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg text-gray-900 mb-2">
                  Prospective Students
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn about admissions, requirements, and how to apply
                </p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg text-gray-900 mb-2">Current Students</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Access resources, schedules, and student services
                </p>
                <Button variant="outline" size="sm">
                  Student Portal
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-lg text-gray-900 mb-2">Alumni</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Stay connected and access career resources
                </p>
                <Button variant="outline" size="sm">
                  Alumni Network
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
