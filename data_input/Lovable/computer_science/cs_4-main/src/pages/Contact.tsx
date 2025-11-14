import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import heroImage from "@/assets/hero-home.jpg";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Simulate form submission
    console.log("Contact form submitted:", Object.fromEntries(formData));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    // Reset form
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <Hero
          title="Get in Touch"
          subtitle="Have questions about our Computer Science program? We're here to help you every step of the way."
          backgroundImage={heroImage}
        />

        {/* Contact Form & Info */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our team will respond within 24 hours.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" name="firstName" required placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" name="lastName" required placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required placeholder="john@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" name="subject" required placeholder="Program Inquiry" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell us how we can help you..."
                      rows={6}
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
                  <p className="text-muted-foreground mb-8">
                    Reach out to us through any of these channels. We're always happy to hear from prospective students!
                  </p>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        Address
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Computer Science Department<br />
                        123 University Avenue, Building C<br />
                        Tech City, TC 12345<br />
                        United States
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        Phone
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-muted-foreground">
                        Main Office: <a href="tel:5551234567" className="text-primary hover:underline">(555) 123-4567</a>
                      </p>
                      <p className="text-muted-foreground">
                        Admissions: <a href="tel:5551234568" className="text-primary hover:underline">(555) 123-4568</a>
                      </p>
                      <p className="text-sm text-muted-foreground/80 mt-2">
                        Monday-Friday: 9:00 AM - 5:00 PM EST
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        Email
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-muted-foreground">
                        General Inquiries: <a href="mailto:cs-info@university.edu" className="text-primary hover:underline">cs-info@university.edu</a>
                      </p>
                      <p className="text-muted-foreground">
                        Admissions: <a href="mailto:admissions@university.edu" className="text-primary hover:underline">admissions@university.edu</a>
                      </p>
                      <p className="text-muted-foreground">
                        Faculty: <a href="mailto:cs-faculty@university.edu" className="text-primary hover:underline">cs-faculty@university.edu</a>
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Follow Us on Social Media</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-colors"
                      aria-label="YouTube"
                    >
                      <Youtube className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Visit Our Campus
            </h2>
            <div className="max-w-5xl mx-auto">
              <div className="aspect-video bg-background rounded-lg border flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <p className="text-lg">Campus Map</p>
                  <p className="text-sm">123 University Avenue, Tech City, TC 12345</p>
                </div>
              </div>
              <p className="text-center text-muted-foreground mt-6">
                Schedule a campus tour to see our state-of-the-art facilities and meet our faculty and students!
              </p>
            </div>
          </div>
        </section>

        {/* Office Hours */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Office Hours
              </h2>
              <Card>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-4">Department Office</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p>Monday - Thursday: 8:00 AM - 6:00 PM</p>
                        <p>Friday: 8:00 AM - 5:00 PM</p>
                        <p>Saturday - Sunday: Closed</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-4">Admissions Office</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p>Saturday: 10:00 AM - 2:00 PM (Appointment Only)</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <p className="text-sm text-muted-foreground">
                      <strong>Note:</strong> Office hours may vary during holidays and university breaks. Please call ahead or check our website for updated hours.
                    </p>
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
