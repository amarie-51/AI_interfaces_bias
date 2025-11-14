import FacultyCard from "@/components/FacultyCard";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Robert Mitchell",
      title: "Professor & Department Chair",
      bio: "Dr. Mitchell brings over 25 years of experience in computer science education and research. His work focuses on distributed systems and cloud computing. He has published over 50 peer-reviewed papers and regularly consults with Fortune 500 companies on system architecture.",
      image: faculty1,
      email: "r.mitchell@csuniversity.edu",
    },
    {
      name: "Dr. Emily Chen",
      title: "Associate Professor of Computer Science",
      bio: "Dr. Chen specializes in artificial intelligence and machine learning. She holds a Ph.D. from MIT and has worked at leading AI research labs. Her current research focuses on ethical AI and explainable machine learning systems, with funding from multiple federal agencies.",
      image: faculty2,
      email: "e.chen@csuniversity.edu",
    },
    {
      name: "Dr. James Rodriguez",
      title: "Assistant Professor of Cybersecurity",
      bio: "Dr. Rodriguez is an expert in cybersecurity and network security. Before joining academia, he spent 8 years working as a security consultant for major tech companies. He leads our cybersecurity research lab and regularly speaks at international security conferences.",
      image: faculty3,
      email: "j.rodriguez@csuniversity.edu",
    },
    {
      name: "Dr. Sarah Williams",
      title: "Associate Professor of Software Engineering",
      bio: "Dr. Williams teaches software engineering and web development courses. She has extensive industry experience having worked as a senior software engineer at Google and Microsoft. Her research interests include software testing, agile methodologies, and human-computer interaction.",
      image: faculty2,
      email: "s.williams@csuniversity.edu",
    },
    {
      name: "Dr. Michael Thompson",
      title: "Professor of Data Science",
      bio: "Dr. Thompson leads our data science program and big data research initiatives. With a background in mathematics and computer science, he has pioneered new approaches to data visualization and analytics. He collaborates with researchers worldwide on climate and health data projects.",
      image: faculty1,
      email: "m.thompson@csuniversity.edu",
    },
    {
      name: "Dr. Lisa Park",
      title: "Assistant Professor of Mobile Computing",
      bio: "Dr. Park specializes in mobile application development and ubiquitous computing. She completed her postdoctoral work at Stanford's Human-Computer Interaction Lab. Her research explores innovative mobile interfaces and context-aware computing systems.",
      image: faculty2,
      email: "l.park@csuniversity.edu",
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Faculty</h1>
            <p className="text-xl text-primary-foreground/90">
              Learn from accomplished educators and researchers who are leaders in their fields
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Introduction */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            World-Class Computer Science Educators
          </h2>
          <p className="text-lg text-muted-foreground">
            Our faculty members are not just teachers—they're active researchers, industry
            consultants, and mentors dedicated to your success. With diverse backgrounds spanning
            academia and industry, they bring real-world experience and cutting-edge knowledge
            to every class.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((faculty, index) => (
            <FacultyCard key={index} {...faculty} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-muted rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
            Faculty Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">Published Research Papers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15:1</div>
              <div className="text-muted-foreground">Student-to-Faculty Ratio</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$5M+</div>
              <div className="text-muted-foreground">Annual Research Funding</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
