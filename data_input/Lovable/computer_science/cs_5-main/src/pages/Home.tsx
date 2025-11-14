import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import StudentTestimonial from "@/components/StudentTestimonial";
import { Code, Users, Award, Briefcase, ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-campus.jpg";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";

const Home = () => {
  const highlights = [
    {
      icon: Code,
      title: "Cutting-Edge Curriculum",
      description: "Learn the latest technologies and programming languages used in industry.",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from experienced professors and industry professionals.",
    },
    {
      icon: Award,
      title: "Accredited Program",
      description: "Our program is fully accredited and recognized worldwide.",
    },
    {
      icon: Briefcase,
      title: "Career Support",
      description: "95% job placement rate with support from our career services.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      year: "Senior, Class of 2025",
      quote: "The CS program has exceeded my expectations. The hands-on projects and supportive faculty have prepared me incredibly well for my career in software development.",
      image: student1,
    },
    {
      name: "Miguel Rodriguez",
      year: "Junior, Class of 2026",
      quote: "I love the collaborative learning environment and access to cutting-edge technology. The internship opportunities through the program have been invaluable.",
      image: student2,
    },
    {
      name: "Amara Johnson",
      year: "Sophomore, Class of 2027",
      quote: "The diversity of specializations and the quality of instruction make this program stand out. I feel confident about my future in tech.",
      image: student3,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Bachelor of Computer Science
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
            Build Your Future in Technology
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg">
              <Link to="/admissions">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Launch Your Tech Career
          </h2>
          <p className="text-lg text-muted-foreground">
            Our Bachelor of Computer Science program combines rigorous academic training with
            practical, hands-on experience to prepare you for success in the rapidly evolving tech
            industry.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-elegant transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose Our Program?</h3>
            <ul className="space-y-4">
              {[
                "Industry-relevant curriculum updated regularly",
                "State-of-the-art computer labs and facilities",
                "Internship opportunities with leading tech companies",
                "Small class sizes for personalized attention",
                "Flexible online and on-campus options",
                "Strong alumni network in the tech industry",
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-6" size="lg">
              <Link to="/about">
                Explore the Program <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="bg-muted rounded-lg p-8">
            <h4 className="text-xl font-semibold text-foreground mb-4">Quick Facts</h4>
            <dl className="space-y-4">
              <div>
                <dt className="font-medium text-foreground">Duration</dt>
                <dd className="text-muted-foreground">4 years (8 semesters)</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Credits</dt>
                <dd className="text-muted-foreground">120 credit hours</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Study Mode</dt>
                <dd className="text-muted-foreground">Full-time / Part-time</dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Specializations</dt>
                <dd className="text-muted-foreground">
                  Software Engineering, AI/ML, Cybersecurity, Data Science
                </dd>
              </div>
              <div>
                <dt className="font-medium text-foreground">Start Dates</dt>
                <dd className="text-muted-foreground">Fall & Spring semesters</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Student Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from our current students about their experiences
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <StudentTestimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-primary text-primary-foreground p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join our next cohort of aspiring computer scientists and technology leaders. Applications
            are now open for the upcoming semester.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/admissions">View Admissions</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
};

export default Home;
