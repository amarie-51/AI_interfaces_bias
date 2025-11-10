import { Card, CardContent } from "@/components/ui/card";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Michael Thompson",
      title: "Professor of Computer Science",
      image: faculty1,
      education: "Ph.D. in Computer Science, MIT",
      specialization: "Artificial Intelligence, Machine Learning",
      bio: "Dr. Thompson has over 15 years of experience in AI research and has published numerous papers in top-tier conferences. His work focuses on neural networks and deep learning applications.",
    },
    {
      name: "Dr. Lisa Chen",
      title: "Associate Professor",
      image: faculty2,
      education: "Ph.D. in Software Engineering, Stanford University",
      specialization: "Software Engineering, Cybersecurity",
      bio: "Dr. Chen brings extensive industry experience from her time at leading tech companies. She specializes in secure software development and has received multiple teaching excellence awards.",
    },
    {
      name: "Dr. Robert Martinez",
      title: "Professor Emeritus",
      image: faculty3,
      education: "Ph.D. in Computer Science, Carnegie Mellon University",
      specialization: "Algorithms, Theoretical Computer Science",
      bio: "Dr. Martinez is a distinguished researcher in algorithm design and complexity theory. He has authored two textbooks and mentored dozens of Ph.D. students throughout his career.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Faculty</h1>
          <p className="text-xl max-w-3xl">
            Learn from world-class educators and researchers who are leaders in their fields
          </p>
        </div>
      </section>

      {/* Faculty Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Expert Mentorship</h2>
            <p className="text-lg text-muted-foreground">
              Our faculty members are not just teachers—they're mentors, researchers, and industry experts committed to your success. With small class sizes and an open-door policy, you'll have direct access to professors who genuinely care about your growth and development.
            </p>
          </div>

          {/* Faculty Cards */}
          <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="shadow-card hover:shadow-card-hover transition-all">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        className="w-full aspect-square rounded-lg object-cover shadow-card"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-bold mb-2">{faculty.name}</h3>
                      <p className="text-accent font-semibold mb-2">{faculty.title}</p>
                      <p className="text-muted-foreground mb-4">{faculty.education}</p>
                      <div className="mb-4">
                        <span className="font-semibold">Specialization: </span>
                        <span className="text-muted-foreground">{faculty.specialization}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{faculty.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Research Excellence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Active Research Areas</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Artificial Intelligence & Machine Learning</li>
                    <li>• Cybersecurity & Privacy</li>
                    <li>• Data Science & Big Data</li>
                    <li>• Human-Computer Interaction</li>
                    <li>• Software Engineering</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Student Opportunities</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Undergraduate research assistantships</li>
                    <li>• Co-author publications</li>
                    <li>• Present at conferences</li>
                    <li>• Work on funded research projects</li>
                    <li>• Collaborate with industry partners</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
