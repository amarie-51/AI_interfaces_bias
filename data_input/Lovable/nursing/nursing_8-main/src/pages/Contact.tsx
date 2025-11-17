import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll respond within 24-48 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Campus Address",
      content: "123 University Avenue\nCity, State 12345\nUnited States",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      content: "Main Office: (555) 123-4567\nAdmissions: (555) 123-4568",
    },
    {
      icon: Mail,
      title: "Email Addresses",
      content: "General: info@bsnprogram.edu\nAdmissions: admissions@bsnprogram.edu",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Monday - Friday: 8:00 AM - 5:00 PM\nSaturday: 9:00 AM - 1:00 PM\nSunday: Closed",
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", handle: "@BSNProgram" },
    { icon: Twitter, href: "#", label: "Twitter", handle: "@BSNProgram" },
    { icon: Instagram, href: "#", label: "Instagram", handle: "@BSNProgram" },
    { icon: Linkedin, href: "#", label: "LinkedIn", handle: "BSN Program" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Contact Us
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto opacity-90">
            Have questions? We're here to help. Reach out to us and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Send Us a Message</h2>
              <Card className="border-border">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                        placeholder="john.doe@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us how we can help you..."
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
              <h2 className="text-3xl font-bold mb-6 text-foreground">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-foreground">
                            {info.title}
                          </h3>
                          <p className="text-muted-foreground whitespace-pre-line text-sm">
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
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
            Find Us on Campus
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-border overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Interactive map would be embedded here
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    123 University Avenue, City, State 12345
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Connect on Social Media
            </h2>
            <p className="text-muted-foreground mb-8">
              Follow us for updates, student stories, and nursing program news
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex flex-col items-center gap-3 p-6 bg-card border border-border rounded-lg hover:shadow-lg transition-all hover:border-primary group"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <social.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{social.label}</p>
                    <p className="text-sm text-muted-foreground">{social.handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-foreground">
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center mb-6">
                  Before reaching out, you might find answers to common questions in our FAQ section.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">
                      What are the application deadlines?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Priority deadlines are February 1 for fall and September 1 for spring admission. Regular deadlines extend to April 15 and November 1 respectively.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">
                      How long is the program?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      The BSN program is typically completed in 4 years (8 semesters) for full-time students. Part-time options are available.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
