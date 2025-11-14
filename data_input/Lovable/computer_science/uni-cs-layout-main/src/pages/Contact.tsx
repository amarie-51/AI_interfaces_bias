import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: ["123 University Ave", "Campus City, ST 12345"]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["Main: (555) 123-4567", "Admissions: (555) 123-4568"]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@university.edu", "admissions@university.edu"]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Office Hours",
      details: ["Mon-Fri: 9:00 AM - 5:00 PM", "Sat: 10:00 AM - 2:00 PM"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif font-bold text-5xl mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Have questions about our Computer Science program? We're here to help. Reach out to us today.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif font-bold text-3xl mb-6">Send us a Message</h2>
              <Card className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Your full name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="your.email@example.com"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      placeholder="How can we help you?"
                      rows={6}
                      className="mt-1"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-serif font-bold text-3xl mb-6">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start">
                      <div className="text-primary mr-4 mt-1">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
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
          <h2 className="font-serif font-bold text-3xl mb-8 text-center">Visit Our Campus</h2>
          <Card className="overflow-hidden">
            <div className="h-96 bg-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <p className="text-lg">Interactive Map</p>
                <p className="text-sm">Campus location: 123 University Ave, Campus City, ST 12345</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif font-bold text-3xl mb-6">Connect With Us</h2>
          <p className="text-muted-foreground mb-8">
            Follow us on social media for the latest updates, events, and student stories.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="lg">Facebook</Button>
            <Button variant="outline" size="lg">Twitter</Button>
            <Button variant="outline" size="lg">LinkedIn</Button>
            <Button variant="outline" size="lg">Instagram</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
