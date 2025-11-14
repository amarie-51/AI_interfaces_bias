import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 University Avenue\nCity, State 12345\nUnited States"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "Main: (555) 123-4567\nAdmissions: (555) 123-4568\nMon-Fri, 9am-5pm EST"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "General: info@csbackelors.edu\nAdmissions: admissions@csbackelors.edu\nSupport: support@csbackelors.edu"
    },
  ];

  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, url: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-3xl">
              Have questions about our program? We're here to help. Reach out to us and we'll 
              get back to you as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          placeholder="john.doe@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number (Optional)</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          rows={6}
                          placeholder="How can we help you?"
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
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex gap-4">
                          <info.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                            <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {/* Social Media */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                      <div className="flex gap-4">
                        {socialLinks.map((social, index) => (
                          <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                            aria-label={social.label}
                          >
                            <social.icon size={20} />
                          </a>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-section-bg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Find Us on Campus</h2>
            <div className="max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-lg">Interactive map would be embedded here</p>
                      <p className="text-sm mt-2">123 University Avenue, City, State 12345</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">
                  We're located in the heart of campus, next to the Engineering Building and across 
                  from the Student Center. Free visitor parking is available in Lot C.
                </p>
                <Button variant="outline">Get Directions</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Office Hours */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Office Hours</h2>
              <Card>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div>
                      <h3 className="font-semibold mb-2">Academic Year</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-muted-foreground">Saturday: 10:00 AM - 2:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Summer Hours</h3>
                      <p className="text-muted-foreground">Monday - Thursday: 9:00 AM - 4:00 PM</p>
                      <p className="text-muted-foreground">Friday: 9:00 AM - 12:00 PM</p>
                      <p className="text-muted-foreground">Weekends: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
