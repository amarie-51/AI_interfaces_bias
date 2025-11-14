import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ApplicationModal } from "@/components/ApplicationModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Calendar, FileText, User, DollarSign } from "lucide-react";

import heroImage from "@/assets/hero-home.jpg";

const Admissions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <Hero
          title="Join Our Community"
          subtitle="Start your journey toward becoming a technology leader. Applications for Fall 2025 are now open!"
          backgroundImage={heroImage}
        />

        {/* Application Deadlines */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Application Deadlines
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="border-accent">
                <CardHeader>
                  <Calendar className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>Early Action</CardTitle>
                  <CardDescription className="text-lg font-semibold text-foreground">
                    November 15, 2024
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Non-binding early application. Decisions by December 20.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary">
                <CardHeader>
                  <Calendar className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Regular Decision</CardTitle>
                  <CardDescription className="text-lg font-semibold text-foreground">
                    February 1, 2025
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Standard application deadline. Decisions by April 1.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-muted-foreground">
                <CardHeader>
                  <Calendar className="h-8 w-8 text-muted-foreground mb-2" />
                  <CardTitle>Rolling Admission</CardTitle>
                  <CardDescription className="text-lg font-semibold text-foreground">
                    Until June 1, 2025
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Applications reviewed as received while spaces remain.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Admission Requirements */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Admission Requirements
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Academic Prerequisites
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">High school diploma or equivalent with minimum 3.0 GPA</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">Strong performance in mathematics (Algebra, Geometry, Calculus recommended)</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">Science coursework (Physics or Chemistry preferred)</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Required Documents
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">Completed application form</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">Official high school transcripts</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">SAT or ACT scores (test-optional for 2025)</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">Personal statement (500-750 words)</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">Two letters of recommendation (one from math/science teacher preferred)</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      International Students
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">TOEFL (minimum 80) or IELTS (minimum 6.5) for non-native English speakers</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">Evaluation of international credentials through WES or equivalent</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">Financial statement demonstrating ability to cover costs</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Application Steps */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                How to Apply
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Create Your Account</h3>
                    <p className="text-muted-foreground">
                      Start by creating an account in our application portal. You'll be able to save your progress and return anytime.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Complete the Application</h3>
                    <p className="text-muted-foreground">
                      Fill out your personal information, academic history, and upload required documents. Take your time with the personal statement—it's your chance to shine!
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Submit Supporting Materials</h3>
                    <p className="text-muted-foreground">
                      Request transcripts, test scores, and letters of recommendation. Make sure all materials are submitted before the deadline.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Pay Application Fee</h3>
                    <p className="text-muted-foreground">
                      Submit the $65 application fee (fee waivers available for eligible students). Your application won't be reviewed until payment is received.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Track Your Application</h3>
                    <p className="text-muted-foreground">
                      Monitor your application status online. We'll notify you when a decision has been made.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tuition & Financial Aid */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Tuition & Financial Aid
              </h2>
              
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-6 w-6 text-primary" />
                    2024-2025 Tuition & Fees
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">In-State Tuition (per year)</p>
                      <p className="text-2xl font-bold text-foreground">$18,500</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Out-of-State Tuition (per year)</p>
                      <p className="text-2xl font-bold text-foreground">$35,200</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Room & Board (estimated)</p>
                      <p className="text-2xl font-bold text-foreground">$14,000</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Books & Supplies (estimated)</p>
                      <p className="text-2xl font-bold text-foreground">$1,200</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-accent/10 p-6 rounded-lg border border-accent/20">
                <h3 className="text-xl font-semibold text-foreground mb-4">Financial Aid Available</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Over 75% of our students receive some form of financial assistance</p>
                  <p>• Merit-based scholarships ranging from $5,000 to full tuition</p>
                  <p>• Need-based grants and work-study programs</p>
                  <p>• Federal and state loan programs</p>
                  <p>• Special scholarships for women and underrepresented minorities in tech</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Apply?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Take the first step toward your future in technology. Our admissions team is here to support you throughout the application process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ApplicationModal
                title="Start Your Application"
                description="Fill out this form to begin your application to our Computer Science program. We'll contact you with next steps."
              >
                <Button size="lg" variant="secondary">
                  Apply Now
                </Button>
              </ApplicationModal>
              <ApplicationModal
                title="Request Information"
                description="Interested in learning more? Fill out this form and we'll send you detailed program information and answer any questions."
              >
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Request Info
                </Button>
              </ApplicationModal>
            </div>
          </div>
        </section>

        {/* Contact Admissions */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Questions About Admissions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our admissions counselors are ready to help answer your questions and guide you through the application process.
              </p>
              <div className="space-y-4">
                <p className="text-foreground">
                  <span className="font-semibold">Email:</span>{" "}
                  <a href="mailto:admissions@university.edu" className="text-primary hover:underline">
                    admissions@university.edu
                  </a>
                </p>
                <p className="text-foreground">
                  <span className="font-semibold">Phone:</span>{" "}
                  <a href="tel:5551234567" className="text-primary hover:underline">
                    (555) 123-4567
                  </a>
                </p>
                <p className="text-muted-foreground text-sm">
                  Office Hours: Monday-Friday, 9:00 AM - 5:00 PM EST
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Admissions;
