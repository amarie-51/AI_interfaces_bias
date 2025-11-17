import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24-48 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Campus Address",
      details: ["123 University Avenue", "Tech City, TC 12345", "United States"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["Main: (555) 123-4567", "Admissions: (555) 123-4568", "Student Services: (555) 123-4569"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["General: info@csuni.edu", "Admissions: admissions@csuni.edu", "Support: support@csuni.edu"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 10:00 AM - 2:00 PM", "Sunday: Closed"],
    },
  ];

  const socialLinks = [
    { icon: Facebook, url: "#", label: "Facebook" },
    { icon: Twitter, url: "#", label: "Twitter" },
    { icon: Instagram, url: "#", label: "Instagram" },
    { icon: Linkedin, url: "#", label: "LinkedIn" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-95">
            Have questions about our program? We're here to help. Reach out to us and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Send Us a Message</h2>
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Inquiry about program"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us how we can help..."
                        rows={6}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <info.icon className="h-6 w-6 text-accent flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold mb-2 text-card-foreground">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-muted-foreground">
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

      {/* Social Media & Map */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Social Media */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Connect With Us</h2>
              <p className="text-muted-foreground mb-6">
                Follow us on social media to stay updated with the latest news, events, and student achievements.
              </p>
              <div className="flex gap-6 justify-center">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-12 h-12 bg-card hover:bg-accent hover:text-accent-foreground text-card-foreground rounded-full flex items-center justify-center transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">Find Us on Campus</h3>
                <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Interactive map would be displayed here
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Computer Science Department - Building A, 3rd Floor
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Support */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Need Immediate Assistance?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our admissions team is available to answer your questions and guide you through the application process.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild>
                <a href="tel:+15551234567">Call Us Now</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:admissions@csuni.edu">Email Admissions</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
