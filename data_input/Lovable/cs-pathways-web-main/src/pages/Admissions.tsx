import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Calendar, FileText, DollarSign } from "lucide-react";

const Admissions = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Admissions</h1>
          <p className="text-xl max-w-3xl">
            Join our community of innovators and start your journey toward a rewarding career in computer science
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Admission Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="text-accent" />
                  Academic Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span>High school diploma or equivalent with minimum 3.0 GPA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span>Strong background in mathematics (Algebra II, Pre-Calculus recommended)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span>SAT scores of 1200+ or ACT scores of 24+ (optional for 2024-2025)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span>Official high school transcripts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="text-accent" />
                  Application Materials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span>Completed online application</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span>Personal statement (500-750 words)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span>Two letters of recommendation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                    <span>Resume or list of activities (optional but recommended)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Timeline */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Application Deadlines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="shadow-card hover:shadow-card-hover transition-all">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Early Decision</h3>
                <p className="text-3xl font-bold text-accent mb-2">Nov 1</p>
                <p className="text-muted-foreground">Notification by December 15</p>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-card-hover transition-all">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Regular Decision</h3>
                <p className="text-3xl font-bold text-accent mb-2">Feb 1</p>
                <p className="text-muted-foreground">Notification by April 1</p>
              </CardContent>
            </Card>
            <Card className="shadow-card hover:shadow-card-hover transition-all">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Rolling Admission</h3>
                <p className="text-3xl font-bold text-accent mb-2">Until Full</p>
                <p className="text-muted-foreground">Application reviewed upon receipt</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tuition & Financial Aid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Tuition & Financial Aid</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card-hover mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="text-accent" />
                  Tuition & Fees
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-muted-foreground mb-2">Annual Tuition</p>
                    <p className="text-3xl font-bold text-accent">$42,000</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-2">Room & Board</p>
                    <p className="text-3xl font-bold text-accent">$14,500</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Financial Aid & Scholarships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We're committed to making education accessible. Over 80% of our students receive some form of financial aid.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Merit-based scholarships up to full tuition</li>
                  <li>• Need-based financial aid packages</li>
                  <li>• Work-study opportunities</li>
                  <li>• External scholarship resources</li>
                  <li>• Payment plans available</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Apply?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your application today and take the first step toward an exciting career in technology
          </p>
          <Button size="lg" variant="outline" className="bg-accent-foreground/10 border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent text-lg px-8">
            Start Application
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
