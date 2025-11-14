import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Clock, GraduationCap, Laptop, CheckCircle } from "lucide-react";

import heroImage from "@/assets/hero-home.jpg";
import labImage from "@/assets/program-lab.jpg";
import collabImage from "@/assets/program-collab.jpg";

const AboutProgram = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <Hero
          title="Bachelor of Computer Science"
          subtitle="A comprehensive program designed to transform curious minds into innovative tech leaders"
          backgroundImage={heroImage}
          primaryCTA={{ label: "Apply Now", to: "/admissions" }}
          secondaryCTA={{ label: "View Faculty", to: "/faculty" }}
        />

        {/* Program Description */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                About the Program
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Our Bachelor of Computer Science program is designed for students who are passionate about technology and eager to make an impact in the digital world. Through a rigorous curriculum that balances theoretical foundations with practical applications, you'll develop the skills needed to succeed in today's rapidly evolving tech landscape.
                </p>
                <p>
                  From algorithms and data structures to artificial intelligence and cybersecurity, our program covers the full spectrum of computer science. You'll work on real-world projects, collaborate with industry partners, and learn from faculty who are leaders in their fields.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Information */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Program Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <Clock className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Duration</CardTitle>
                  <CardDescription className="text-lg font-semibold text-foreground">4 Years</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <GraduationCap className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Degree</CardTitle>
                  <CardDescription className="text-lg font-semibold text-foreground">Bachelor of Science</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Credits</CardTitle>
                  <CardDescription className="text-lg font-semibold text-foreground">120 Credit Hours</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <Laptop className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Study Mode</CardTitle>
                  <CardDescription className="text-lg font-semibold text-foreground">Full-Time / On Campus</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Learning Outcomes
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Design, implement, and evaluate computing-based solutions to complex problems",
                  "Apply computer science theory and software development fundamentals",
                  "Communicate effectively in professional contexts",
                  "Recognize professional responsibilities and make informed ethical judgments",
                  "Function effectively as a member or leader of development teams",
                  "Apply security principles and practices to maintain operations",
                ].map((outcome, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Images Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img src={labImage} alt="Computer Science Lab" className="w-full h-80 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white font-semibold text-xl">State-of-the-Art Labs</h3>
                  <p className="text-white/90 text-sm">Access cutting-edge technology and equipment</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img src={collabImage} alt="Student Collaboration" className="w-full h-80 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-white font-semibold text-xl">Collaborative Learning</h3>
                  <p className="text-white/90 text-sm">Work with peers on innovative projects</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Curriculum Overview
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="year1" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                    Year 1: Foundations
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 space-y-2">
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Introduction to Programming (Python/Java)</li>
                      <li>• Discrete Mathematics</li>
                      <li>• Computer Systems & Architecture</li>
                      <li>• Calculus I & II</li>
                      <li>• General Education Requirements</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="year2" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                    Year 2: Core Concepts
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 space-y-2">
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Data Structures & Algorithms</li>
                      <li>• Object-Oriented Programming</li>
                      <li>• Database Systems</li>
                      <li>• Web Development</li>
                      <li>• Linear Algebra & Probability</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="year3" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                    Year 3: Advanced Topics
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 space-y-2">
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Operating Systems</li>
                      <li>• Software Engineering</li>
                      <li>• Computer Networks</li>
                      <li>• Artificial Intelligence</li>
                      <li>• Elective Courses (Cybersecurity, ML, Cloud Computing)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="year4" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                    Year 4: Specialization & Capstone
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 space-y-2">
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Advanced Electives (Choose 3-4 from 15+ options)</li>
                      <li>• Senior Capstone Project</li>
                      <li>• Professional Development Seminar</li>
                      <li>• Internship or Research Experience</li>
                      <li>• Ethics in Computing</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Career Opportunities
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Software Development</CardTitle>
                    <CardDescription>
                      Full-stack developer, mobile app developer, front-end engineer, back-end engineer
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Data Science & AI</CardTitle>
                    <CardDescription>
                      Data scientist, machine learning engineer, AI researcher, data analyst
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Cybersecurity</CardTitle>
                    <CardDescription>
                      Security analyst, penetration tester, security architect, incident responder
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Systems & Cloud</CardTitle>
                    <CardDescription>
                      Systems engineer, cloud architect, DevOps engineer, site reliability engineer
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Product & Management</CardTitle>
                    <CardDescription>
                      Product manager, technical project manager, engineering manager
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Research & Academia</CardTitle>
                    <CardDescription>
                      Research scientist, PhD candidate, professor, innovation specialist
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <div className="mt-12 p-6 bg-accent/10 rounded-lg border border-accent/20">
                <h3 className="text-xl font-semibold text-foreground mb-3">Top Employers</h3>
                <p className="text-muted-foreground mb-4">
                  Our graduates are employed by leading technology companies worldwide:
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Google", "Microsoft", "Amazon", "Apple", "Meta", "Netflix", "Tesla", "IBM", "Oracle", "Cisco"].map((company) => (
                    <span key={company} className="px-3 py-1 bg-background rounded-full text-sm font-medium border">
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Why Choose Our Program?
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      Industry-Aligned Curriculum
                    </CardTitle>
                    <CardDescription>
                      Our curriculum is regularly updated in consultation with tech industry leaders to ensure you're learning the most relevant and in-demand skills.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      Small Class Sizes
                    </CardTitle>
                    <CardDescription>
                      With an average student-to-faculty ratio of 15:1, you'll receive personalized attention and mentorship throughout your journey.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      Hands-On Experience
                    </CardTitle>
                    <CardDescription>
                      From day one, you'll be coding, building projects, and solving real problems. Our program emphasizes practical skills alongside theory.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-accent" />
                      Career Support
                    </CardTitle>
                    <CardDescription>
                      Dedicated career services, internship placement assistance, interview preparation, and a strong alumni network to help launch your career.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutProgram;
