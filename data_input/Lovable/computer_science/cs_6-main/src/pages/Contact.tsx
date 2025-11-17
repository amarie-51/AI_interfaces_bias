import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
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
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in">Contact Us</h1>
            <p className="text-xl opacity-95 max-w-3xl animate-slide-up">
              Have questions? We're here to help. Reach out to us and we'll respond as soon as possible.
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <Card>
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={6}
                          required
                          className="mt-1"
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
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-accent/10 p-3 rounded-lg">
                          <MapPin className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Address</h3>
                          <p className="text-muted-foreground">
                            Computer Science Department<br />
                            123 University Drive<br />
                            Campus City, ST 12345
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-accent/10 p-3 rounded-lg">
                          <Phone className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Phone</h3>
                          <p className="text-muted-foreground">(555) 123-4567</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Monday - Friday: 9:00 AM - 5:00 PM
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-accent/10 p-3 rounded-lg">
                          <Mail className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Email</h3>
                          <p className="text-muted-foreground">admissions@university.edu</p>
                          <p className="text-muted-foreground">cs-info@university.edu</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-4">Follow Us</h3>
                      <div className="flex space-x-4">
                        <a 
                          href="#" 
                          className="bg-accent/10 p-3 rounded-lg hover:bg-accent/20 transition-colors"
                          aria-label="Facebook"
                        >
                          <Facebook className="h-6 w-6 text-accent" />
                        </a>
                        <a 
                          href="#" 
                          className="bg-accent/10 p-3 rounded-lg hover:bg-accent/20 transition-colors"
                          aria-label="Twitter"
                        >
                          <Twitter className="h-6 w-6 text-accent" />
                        </a>
                        <a 
                          href="#" 
                          className="bg-accent/10 p-3 rounded-lg hover:bg-accent/20 transition-colors"
                          aria-label="Instagram"
                        >
                          <Instagram className="h-6 w-6 text-accent" />
                        </a>
                        <a 
                          href="#" 
                          className="bg-accent/10 p-3 rounded-lg hover:bg-accent/20 transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="h-6 w-6 text-accent" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Hours */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Office Hours</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2">Admissions Office</h3>
                      <p className="text-sm text-muted-foreground">Monday - Friday</p>
                      <p className="text-sm text-muted-foreground">9:00 AM - 5:00 PM</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Academic Advising</h3>
                      <p className="text-sm text-muted-foreground">Monday - Thursday</p>
                      <p className="text-sm text-muted-foreground">10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-6">
                    Walk-ins welcome, but appointments are recommended for personalized attention.
                  </p>
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
