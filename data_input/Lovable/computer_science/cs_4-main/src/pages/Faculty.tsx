import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { FacultyCard } from "@/components/FacultyCard";

import heroImage from "@/assets/hero-home.jpg";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";

const facultyMembers = [
  {
    name: "Dr. Michael Chen",
    title: "Professor of Computer Science & Department Chair",
    bio: "Dr. Chen specializes in artificial intelligence and machine learning. With over 20 years of experience, he has published 50+ papers and led groundbreaking research in neural networks. Previously worked at Google AI.",
    image: faculty1,
    email: "m.chen@university.edu",
  },
  {
    name: "Dr. Sarah Williams",
    title: "Associate Professor of Software Engineering",
    bio: "Dr. Williams focuses on software architecture and distributed systems. She has extensive industry experience at Microsoft and Amazon, and is passionate about preparing students for real-world software development challenges.",
    image: faculty2,
    email: "s.williams@university.edu",
  },
  {
    name: "Dr. Raj Patel",
    title: "Assistant Professor of Cybersecurity",
    bio: "Dr. Patel's research centers on cryptography and network security. He holds certifications including CISSP and CEH, and collaborates with government agencies on cybersecurity initiatives. Former security consultant.",
    image: faculty3,
    email: "r.patel@university.edu",
  },
];

const Faculty = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <Hero
          title="Meet Our Faculty"
          subtitle="Learn from accomplished professors who combine academic excellence with real-world industry experience"
          backgroundImage={heroImage}
          primaryCTA={{ label: "Apply Now", to: "/admissions" }}
        />

        {/* Faculty Introduction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                World-Class Educators & Researchers
              </h2>
              <p className="text-lg text-muted-foreground">
                Our faculty members are not only exceptional teachers but also active researchers and industry practitioners. They bring cutting-edge knowledge and real-world insights into the classroom, ensuring you receive an education that's both rigorous and relevant.
              </p>
            </div>

            {/* Faculty Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {facultyMembers.map((faculty) => (
                <FacultyCard key={faculty.email} {...faculty} />
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Stats */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Faculty Excellence
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15:1</div>
                <p className="text-muted-foreground">Student-Faculty Ratio</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">PhDs in Field</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">250+</div>
                <p className="text-muted-foreground">Research Publications</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">95%</div>
                <p className="text-muted-foreground">Student Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Research Excellence
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-card rounded-lg border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Artificial Intelligence & Machine Learning</h3>
                  <p className="text-muted-foreground">
                    Cutting-edge research in deep learning, natural language processing, computer vision, and reinforcement learning.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-lg border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Cybersecurity & Privacy</h3>
                  <p className="text-muted-foreground">
                    Advanced studies in cryptography, network security, blockchain technology, and privacy-preserving systems.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-lg border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Software Engineering</h3>
                  <p className="text-muted-foreground">
                    Research in software architecture, testing methodologies, DevOps practices, and agile development.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-lg border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Human-Computer Interaction</h3>
                  <p className="text-muted-foreground">
                    Exploring user experience design, accessibility, virtual reality, and innovative interface technologies.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-lg border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Distributed Systems & Cloud Computing</h3>
                  <p className="text-muted-foreground">
                    Research in scalable architectures, microservices, edge computing, and cloud-native applications.
                  </p>
                </div>

                <div className="p-6 bg-card rounded-lg border">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Data Science & Analytics</h3>
                  <p className="text-muted-foreground">
                    Big data processing, predictive analytics, data visualization, and business intelligence systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Join Our Academic Community
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Interested in teaching or research opportunities? We're always looking for talented individuals to join our department.
              </p>
              <a
                href="mailto:cs-jobs@university.edu"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 transition-colors"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Faculty;
