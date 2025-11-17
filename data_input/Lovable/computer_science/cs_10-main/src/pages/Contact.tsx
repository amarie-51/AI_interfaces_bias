import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 1-2 business days.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 University Avenue, Tech City, TC 12345",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "(555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "admissions@csuniversity.edu",
      link: "mailto:admissions@csuniversity.edu",
    },
  ];

  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, url: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-hero-gradient-start to-hero-gradient-end text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl text-primary-foreground/90">
            Have questions about our program? We're here to help. Reach out to us and we'll get back to you as soon as
            possible.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Send Us a Message</h2>
              <Card className="border-border">
                <CardContent className="pt-6">
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
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Get in Touch</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <info.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Office Hours */}
              <Card className="border-border mb-8">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-4 text-lg">Office Hours</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium text-foreground">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium text-foreground">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium text-foreground">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-border">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-4 text-lg">Connect With Us</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={social.label}
                      >
                        <social.icon className="h-6 w-6" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-section-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Find Us on Campus</h2>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center max-w-5xl mx-auto">
            <div className="text-center text-muted-foreground">
              <MapPin className="h-16 w-16 mx-auto mb-4" />
              <p className="text-lg">Interactive Campus Map</p>
              <p className="text-sm">Computer Science Building - Room 101</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
