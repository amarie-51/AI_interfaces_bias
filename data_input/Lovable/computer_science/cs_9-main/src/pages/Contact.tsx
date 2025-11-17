import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "123 University Avenue\nTech City, TC 12345\nUnited States",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567\nMon-Fri: 9AM - 5PM",
    },
    {
      icon: Mail,
      title: "Email",
      content: "admissions@csuni.edu\ninfo@csuni.edu",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Monday - Friday\n9:00 AM - 5:00 PM\nClosed on weekends",
    },
  ];

  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, url: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 text-center">
            Contact Us
          </h1>
          <p className="text-xl text-primary-foreground/90 text-center max-w-3xl mx-auto">
            Have questions? We're here to help you on your journey
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <Card className="border-border">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="What is your message about?"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us how we can help you..."
                        rows={6}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          <p className="text-muted-foreground text-sm whitespace-pre-line">
                            {info.content}
                          </p>
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
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Visit Our Campus
          </h2>
          <Card className="border-border max-w-5xl mx-auto overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Interactive map would be displayed here
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  123 University Avenue, Tech City, TC 12345
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Connect With Us
            </h2>
            <p className="text-muted-foreground mb-8">
              Follow us on social media for the latest updates, news, and student stories
            </p>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-primary/10 rounded-full hover:bg-primary/20 transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-8 w-8 text-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Looking for Quick Answers?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Check out our frequently asked questions or schedule a campus tour
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              View FAQs
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-background/10 border-primary-foreground text-primary-foreground hover:bg-background/20"
            >
              Schedule Campus Tour
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
