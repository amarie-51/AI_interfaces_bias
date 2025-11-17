import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to submit the form.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll respond within 1-2 business days.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Campus Address",
      content: "123 University Drive\nCampus City, ST 12345\nUnited States",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "(555) 123-4567\nMon-Fri: 9:00 AM - 5:00 PM",
    },
    {
      icon: Mail,
      title: "Email",
      content: "nursing@university.edu\ninfo@bsnprogram.edu",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Monday - Friday: 9:00 AM - 5:00 PM\nSaturday - Sunday: Closed",
    },
  ];

  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, url: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Have questions about our BSN program? We're here to help. Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-border text-center">
                  <CardContent className="pt-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">
                      {info.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      placeholder="Tell us what you'd like to know about our BSN program..."
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Map and Additional Info */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Visit Our Campus</h2>
                <div className="space-y-6">
                  <Card className="border-border overflow-hidden">
                    <div className="h-64 bg-muted flex items-center justify-center">
                      <MapPin className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-foreground mb-2">School of Nursing</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        123 University Drive<br />
                        Campus City, ST 12345<br />
                        United States
                      </p>
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm font-medium"
                      >
                        Get Directions →
                      </a>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-foreground mb-4">Follow Us on Social Media</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Stay connected with us for program updates, student spotlights, and nursing education news.
                      </p>
                      <div className="flex gap-4">
                        {socialLinks.map((social, index) => (
                          <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                            aria-label={social.label}
                          >
                            <social.icon className="h-5 w-5" />
                          </a>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mb-8">
              Before reaching out, you might find answers to common questions in our FAQ section or program information pages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/about">
                <Button variant="outline">View Program Details</Button>
              </a>
              <a href="/admissions">
                <Button variant="outline">Admissions Information</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
