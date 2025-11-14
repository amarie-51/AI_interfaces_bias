import { Mail, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import faculty1 from "@/assets/faculty1.jpg";
import faculty2 from "@/assets/faculty2.jpg";
import faculty3 from "@/assets/faculty3.jpg";

const facultyMembers = [
  {
    name: "Dr. Margaret Thompson",
    title: "Program Director & Professor",
    image: faculty1,
    credentials: "PhD, RN, CNE",
    email: "m.thompson@bsn.edu",
    bio: "Dr. Thompson brings over 25 years of nursing education experience to our program. She earned her PhD in Nursing Education from Johns Hopkins University and has published extensively on clinical teaching methodologies. Her research focuses on innovative teaching strategies in nursing education and simulation-based learning. As Program Director, she is committed to maintaining excellence in nursing education and preparing the next generation of nursing leaders.",
    specialties: ["Nursing Education", "Clinical Teaching", "Curriculum Development"],
  },
  {
    name: "Dr. James Patterson",
    title: "Associate Professor, Critical Care",
    image: faculty2,
    credentials: "DNP, RN, CCRN",
    email: "j.patterson@bsn.edu",
    bio: "Dr. Patterson combines clinical expertise with academic excellence. He practiced as a critical care nurse for 15 years before transitioning to nursing education. His Doctor of Nursing Practice from the University of Pennsylvania focused on improving outcomes in intensive care settings. Dr. Patterson teaches advanced medical-surgical nursing and mentors students interested in critical care specialties. He actively practices in the ICU, bringing real-world clinical experience to the classroom.",
    specialties: ["Critical Care", "Medical-Surgical Nursing", "Evidence-Based Practice"],
  },
  {
    name: "Prof. Linda Martinez",
    title: "Assistant Professor, Community Health",
    image: faculty3,
    credentials: "MSN, RN, PHN",
    email: "l.martinez@bsn.edu",
    bio: "Professor Martinez is passionate about community health and health equity. With a Master's in Community Health Nursing from UCLA, she has worked extensively in underserved communities and public health programs. She teaches community health nursing and leads our service-learning initiatives. Her work focuses on addressing health disparities and promoting culturally competent care. She coordinates clinical placements in diverse community settings, ensuring students gain experience with varied populations.",
    specialties: ["Community Health", "Public Health", "Health Equity"],
  },
];

const Faculty = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="mb-6 text-white">Our Faculty</h1>
            <p className="text-xl text-white/95">
              Meet the dedicated educators who will guide your journey to becoming an exceptional nurse.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <p className="text-lg text-muted-foreground mb-8">
              Our faculty members are accomplished educators, researchers, and practitioners who bring 
              extensive clinical experience and academic expertise to the classroom. They are committed 
              to fostering your growth as a skilled, compassionate nurse and supporting you throughout 
              your educational journey.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Profiles */}
      <section className="py-8 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {facultyMembers.map((faculty, index) => (
              <Card 
                key={index} 
                className="card-shadow hover:elevated-shadow transition-shadow duration-300 animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {/* Image Section */}
                    <div className="md:col-span-1 bg-muted">
                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        className="w-full h-full object-cover min-h-[300px] md:min-h-full"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="md:col-span-2 p-8">
                      <div className="mb-4">
                        <h3 className="text-2xl font-semibold mb-1">{faculty.name}</h3>
                        <p className="text-primary font-medium text-lg mb-1">{faculty.title}</p>
                        <p className="text-muted-foreground text-sm">{faculty.credentials}</p>
                      </div>

                      <div className="flex items-center space-x-2 mb-6 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <a 
                          href={`mailto:${faculty.email}`} 
                          className="text-sm hover:text-primary transition-colors"
                        >
                          {faculty.email}
                        </a>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {faculty.bio}
                      </p>

                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <Award className="h-5 w-5 text-primary" />
                          <span className="font-semibold">Areas of Expertise</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {faculty.specialties.map((specialty, specIndex) => (
                            <span
                              key={specIndex}
                              className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="mb-4">Learn From the Best</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our faculty members are not only excellent educators but also active practitioners 
              and researchers. They bring current, real-world knowledge to every class and are 
              dedicated to your success.
            </p>
            <p className="text-muted-foreground">
              Ready to start your journey with our exceptional faculty? Contact us to learn more 
              about our program and schedule a campus visit.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Faculty;
