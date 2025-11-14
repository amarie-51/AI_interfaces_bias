import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll respond within 24-48 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 University Drive\nMedical Campus Building, Room 205\nState 12345",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "Main Office: (555) 123-4567\nAdmissions: (555) 123-4568\nFax: (555) 123-4569",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "nursing@university.edu\nadmissions@university.edu\ninfo@university.edu",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Monday - Friday: 8:00 AM - 5:00 PM\nSaturday: 9:00 AM - 1:00 PM\nSunday: Closed",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Page Header */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're here to answer your questions about our BSN program
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Send Us a Message</h2>
              <Card className="shadow-medium">
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john.doe@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
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
                  <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg h-fit">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2 text-foreground">{info.title}</h3>
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

      {/* Social Media */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Connect With Us</h2>
            <p className="text-muted-foreground mb-8">
              Follow us on social media to stay updated with program news, events, and student success stories
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors shadow-soft"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors shadow-soft"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors shadow-soft"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-colors shadow-soft"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Find Us on Campus</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-medium overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Interactive map will be displayed here
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      123 University Drive, Medical Campus Building
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mb-8">
              Before reaching out, you might find answers to common questions on our information pages
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="shadow-soft hover:shadow-medium transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-foreground mb-2">Admissions</h3>
                  <p className="text-sm text-muted-foreground">
                    Requirements, deadlines, and application process
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-soft hover:shadow-medium transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-foreground mb-2">Program Details</h3>
                  <p className="text-sm text-muted-foreground">
                    Curriculum, clinical hours, and outcomes
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-soft hover:shadow-medium transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-foreground mb-2">Financial Aid</h3>
                  <p className="text-sm text-muted-foreground">
                    Tuition costs and scholarship opportunities
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
