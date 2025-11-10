import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Have questions? We're here to help. Reach out and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="lg:col-span-2 shadow-card-hover">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required className="mt-2" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input id="phone" type="tel" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      required
                      className="mt-2 min-h-[150px]"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-accent">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <Mail className="text-accent flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">admissions@cs.edu</p>
                      <p className="text-muted-foreground">info@cs.edu</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mb-6">
                    <Phone className="text-accent flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                      <p className="text-muted-foreground">Toll Free: (800) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="text-accent flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        Computer Science Department<br />
                        123 University Avenue<br />
                        Tech City, TC 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="text-accent flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Office Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card bg-gradient-accent text-accent-foreground">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Schedule a Campus Visit</h3>
                  <p className="mb-4">
                    Experience our campus firsthand and meet with faculty and current students.
                  </p>
                  <Button variant="outline" className="w-full bg-accent-foreground/10 border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                    Schedule Visit
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "What is the application deadline?",
                answer: "We have multiple admission cycles. Early Decision deadline is November 1st, Regular Decision is February 1st, and we also offer rolling admissions.",
              },
              {
                question: "Do I need prior programming experience?",
                answer: "No prior programming experience is required. Our curriculum is designed to accommodate students from all backgrounds, starting with introductory courses.",
              },
              {
                question: "What career support do you offer?",
                answer: "We provide comprehensive career services including resume reviews, interview preparation, career fairs, and connections with our extensive network of industry partners.",
              },
              {
                question: "Can I visit campus?",
                answer: "Yes! We encourage prospective students to visit. You can schedule a campus tour, sit in on classes, and meet with faculty and current students.",
              },
            ].map((faq, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
