import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { GraduationCap, Clock, Globe, BookOpen, Briefcase, Award } from "lucide-react";
import studentsGroup from "@/assets/students-group.jpg";

const About = () => {
  const keyHighlights = [
    { icon: Clock, label: "Duration", value: "4 Years (8 Semesters)" },
    { icon: GraduationCap, label: "Degree", value: "Bachelor of Arts (BA)" },
    { icon: BookOpen, label: "Credits", value: "120 Credit Hours" },
    { icon: Globe, label: "Study Mode", value: "Full-time / Part-time" },
    { icon: Award, label: "Language", value: "English" },
  ];

  const learningOutcomes = [
    "Critical thinking and scientific reasoning in psychological research",
    "Understanding of major theoretical perspectives in psychology",
    "Application of psychological principles to real-world situations",
    "Research design, data analysis, and statistical interpretation",
    "Effective written and oral communication of psychological concepts",
    "Ethical decision-making in psychological practice and research",
    "Cultural competence and diversity awareness in psychology"
  ];

  const curriculum = [
    {
      year: "First Year",
      courses: [
        "Introduction to Psychology",
        "Research Methods in Psychology",
        "Statistics for Psychology",
        "Biological Psychology",
        "General Education Requirements"
      ]
    },
    {
      year: "Second Year",
      courses: [
        "Developmental Psychology",
        "Social Psychology",
        "Cognitive Psychology",
        "Abnormal Psychology",
        "Personality Theories"
      ]
    },
    {
      year: "Third Year",
      courses: [
        "Clinical Psychology",
        "Psychological Testing & Assessment",
        "Neuroscience",
        "Health Psychology",
        "Psychology Electives"
      ]
    },
    {
      year: "Fourth Year",
      courses: [
        "Advanced Research Methods",
        "Capstone Research Project",
        "Professional Ethics in Psychology",
        "Specialized Electives",
        "Internship/Practicum"
      ]
    }
  ];

  const careerPaths = [
    "Clinical Psychologist (with graduate degree)",
    "School Counselor",
    "Human Resources Specialist",
    "Market Research Analyst",
    "Social Services Coordinator",
    "Mental Health Counselor",
    "Research Assistant",
    "Case Manager",
    "Behavioral Therapist"
  ];

  const whyChoose = [
    {
      title: "Innovative Research Opportunities",
      description: "Participate in cutting-edge research projects alongside faculty members in our state-of-the-art laboratories."
    },
    {
      title: "Hands-On Clinical Experience",
      description: "Gain practical experience through internships at local mental health facilities, schools, and research centers."
    },
    {
      title: "Interdisciplinary Approach",
      description: "Benefit from our program's connections with neuroscience, sociology, education, and public health departments."
    },
    {
      title: "Student Exchange Programs",
      description: "Study abroad opportunities with partner universities in Europe, Asia, and Australia to gain global perspectives."
    },
    {
      title: "Modern Facilities",
      description: "Access to psychology labs, observation rooms, biofeedback equipment, and comprehensive digital research databases."
    },
    {
      title: "Career Development Support",
      description: "Personalized advising, graduate school preparation, and connections with alumni working in diverse fields."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About the Program</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Our Bachelor of Arts in Psychology provides a comprehensive education in the scientific study of behavior 
            and mental processes, preparing students for diverse career opportunities or advanced graduate study.
          </p>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {keyHighlights.map((item, index) => (
              <Card key={index} className="text-center border-none shadow-[var(--shadow-card)]">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-semibold text-foreground">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Program Overview</h2>
              <p className="text-muted-foreground mb-4">
                Our psychology program offers a rigorous, science-based curriculum that explores human behavior, 
                cognition, emotion, and development. Students gain theoretical knowledge and practical skills through 
                coursework, research experiences, and applied learning opportunities.
              </p>
              <p className="text-muted-foreground mb-6">
                The program emphasizes critical thinking, scientific methodology, and ethical practice, preparing 
                graduates for careers in mental health, education, business, research, and many other fields. Our 
                graduates also have an excellent track record of acceptance into competitive graduate programs.
              </p>
              <Button asChild>
                <NavLink to="/admissions">Apply Now</NavLink>
              </Button>
            </div>
            <div className="relative">
              <img
                src={studentsGroup}
                alt="Group of psychology students collaborating on project"
                className="rounded-lg shadow-[var(--shadow-elegant)] w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Learning Outcomes</h2>
          <Card className="max-w-4xl mx-auto border-none shadow-[var(--shadow-card)]">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-6">
                Upon completion of the program, graduates will have developed:
              </p>
              <ul className="space-y-3">
                {learningOutcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 flex-shrink-0">
                      {index + 1}
                    </Badge>
                    <span className="text-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Curriculum Outline</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {curriculum.map((year, index) => (
              <Card key={index} className="border-none shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="text-xl text-primary">{year.year}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    {year.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="flex items-start gap-2 text-foreground">
                        <span className="text-accent mt-1">•</span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-6">Career Opportunities</h2>
            <p className="text-center text-muted-foreground mb-8">
              A psychology degree opens doors to diverse career paths across many industries. Our graduates pursue 
              careers in:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {careerPaths.map((career, index) => (
                <Card key={index} className="border-none shadow-[var(--shadow-card)]">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Briefcase className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{career}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose This Program */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Why Choose This Program?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((feature, index) => (
              <Card key={index} className="border-none shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore the Human Mind?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards a rewarding career in psychology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <NavLink to="/admissions">Apply Now</NavLink>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <NavLink to="/contact">Contact Admissions</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
