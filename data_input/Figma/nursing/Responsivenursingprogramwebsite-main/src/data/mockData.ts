export const images = {
  heroImage: "https://images.unsplash.com/photo-1658227658336-f7354bc5a568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzaW5nJTIwc3R1ZGVudCUyMGhvc3BpdGFsfGVufDF8fHx8MTc2MjE2NTk4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  studentStory1: "https://images.unsplash.com/photo-1758691463610-3c2ecf5fb3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwc21pbGluZ3xlbnwxfHx8fDE3NjIxNTY4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  studentStory2: "https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZSUyMGhlYWx0aGNhcmUlMjB3b3JrZXJ8ZW58MXx8fHwxNzYyMDg4NjI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  studentStory3: "https://images.unsplash.com/photo-1693011142814-aa33d7d1535c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzYyMTUxMzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  faculty1: "https://images.unsplash.com/photo-1758691462477-976f771224d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyMDk4MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  faculty2: "https://images.unsplash.com/photo-1758206523685-6e69f80a11ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwbnVyc2UlMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc2MjE0NTUxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
};

export const programHighlights = [
  {
    id: 1,
    title: "CCNE Accredited",
    description: "Our program is fully accredited by the Commission on Collegiate Nursing Education, ensuring the highest quality education.",
  },
  {
    id: 2,
    title: "Clinical Experience",
    description: "Over 700 hours of hands-on clinical practice in leading healthcare facilities across the region.",
  },
  {
    id: 3,
    title: "High NCLEX Pass Rate",
    description: "Our graduates achieve a 95% first-time pass rate on the NCLEX-RN exam, well above the national average.",
  },
  {
    id: 4,
    title: "Career Support",
    description: "Dedicated career services with job placement assistance and ongoing professional development opportunities.",
  },
];

export const studentStories = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: images.studentStory1,
    quote: "The hands-on clinical experience and supportive faculty prepared me perfectly for my career in pediatric nursing.",
    role: "Class of 2023, Pediatric RN",
  },
  {
    id: 2,
    name: "Michael Chen",
    image: images.studentStory2,
    quote: "The simulation labs and real-world scenarios gave me the confidence I needed to excel in emergency care.",
    role: "Class of 2022, Emergency Room Nurse",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    image: images.studentStory3,
    quote: "The comprehensive curriculum and research opportunities opened doors I never imagined possible.",
    role: "Class of 2024, Currently pursuing MSN",
  },
];

export const courses = [
  {
    id: 1,
    title: "Fundamentals of Nursing",
    code: "NURS 101",
    credits: 4,
    description: "Introduction to basic nursing concepts, skills, and professional values. Includes foundational clinical practice.",
    modules: [
      "Introduction to Professional Nursing",
      "Health Assessment",
      "Basic Nursing Skills",
      "Infection Control",
      "Documentation and Communication",
    ],
    semester: "Fall - Year 1",
  },
  {
    id: 2,
    title: "Anatomy & Physiology I",
    code: "BIOL 201",
    credits: 4,
    description: "Comprehensive study of human body systems, structures, and functions essential for nursing practice.",
    modules: [
      "Cell Biology and Tissues",
      "Skeletal System",
      "Muscular System",
      "Nervous System",
      "Integumentary System",
    ],
    semester: "Fall - Year 1",
  },
  {
    id: 3,
    title: "Medical-Surgical Nursing",
    code: "NURS 301",
    credits: 6,
    description: "Advanced concepts in caring for adult patients with medical and surgical conditions. Heavy clinical component.",
    modules: [
      "Cardiovascular Nursing",
      "Respiratory Care",
      "Perioperative Nursing",
      "Critical Care Basics",
      "Patient Education",
    ],
    semester: "Fall - Year 3",
  },
  {
    id: 4,
    title: "Pharmacology for Nurses",
    code: "NURS 250",
    credits: 3,
    description: "Study of drug classifications, mechanisms of action, and nursing implications for safe medication administration.",
    modules: [
      "Drug Classifications",
      "Pharmacokinetics",
      "Medication Administration",
      "Drug Interactions",
      "Dosage Calculations",
    ],
    semester: "Spring - Year 2",
  },
  {
    id: 5,
    title: "Maternal & Child Health",
    code: "NURS 320",
    credits: 5,
    description: "Focus on nursing care for mothers, newborns, children, and adolescents across the health-illness continuum.",
    modules: [
      "Prenatal Care",
      "Labor and Delivery",
      "Newborn Care",
      "Pediatric Assessment",
      "Family-Centered Care",
    ],
    semester: "Spring - Year 3",
  },
  {
    id: 6,
    title: "Mental Health Nursing",
    code: "NURS 340",
    credits: 4,
    description: "Exploration of mental health disorders and therapeutic nursing interventions in psychiatric settings.",
    modules: [
      "Therapeutic Communication",
      "Psychiatric Disorders",
      "Crisis Intervention",
      "Psychopharmacology",
      "Community Mental Health",
    ],
    semester: "Fall - Year 4",
  },
];

export const facultyMembers = [
  {
    id: 1,
    name: "Dr. Rebecca Martinez",
    title: "Course Coordinator & Associate Professor",
    image: images.faculty1,
    credentials: "PhD, RN, CNE",
    bio: "Dr. Martinez has over 15 years of experience in nursing education and clinical practice. She specializes in curriculum development and evidence-based teaching methodologies. Her research focuses on innovative simulation techniques in nursing education.",
    email: "r.martinez@university.edu",
    office: "Nursing Building, Room 301",
  },
  {
    id: 2,
    name: "Prof. James Anderson",
    title: "Clinical Instructor",
    image: images.faculty2,
    credentials: "MSN, RN, CCRN",
    bio: "Professor Anderson brings 20 years of critical care nursing experience to the classroom. He coordinates our clinical placements and mentors students through their hands-on learning experiences in ICU and emergency settings.",
    email: "j.anderson@university.edu",
    office: "Nursing Building, Room 215",
  },
];

export const careerOutcomes = [
  {
    id: 1,
    title: "98% Employment Rate",
    description: "Graduates find employment within 6 months of graduation",
  },
  {
    id: 2,
    title: "$72,000 Average Salary",
    description: "Starting salary for our BSN graduates in the region",
  },
  {
    id: 3,
    title: "100+ Healthcare Partners",
    description: "Clinical placement sites and hiring partners",
  },
  {
    id: 4,
    title: "Advanced Opportunities",
    description: "Many graduates pursue MSN, DNP, or specialized certifications",
  },
];

export const keyFacts = [
  { label: "Program Length", value: "4 years (8 semesters)" },
  { label: "Total Credits", value: "120 credits" },
  { label: "Clinical Hours", value: "700+ hours" },
  { label: "Class Size", value: "Average 30 students" },
  { label: "Student-Faculty Ratio", value: "12:1" },
  { label: "Accreditation", value: "CCNE Accredited" },
];

export const careerProspects = [
  "Registered Nurse (RN) in hospitals, clinics, and healthcare facilities",
  "Specialty areas: Pediatrics, Emergency, Critical Care, Oncology, Surgery",
  "Public Health Nurse",
  "School Nurse",
  "Case Manager",
  "Nurse Educator",
  "Graduate studies (MSN, DNP, PhD)",
  "Advanced Practice roles (with further education)",
];

export const admissionRequirements = [
  "High school diploma or equivalent with minimum 3.0 GPA",
  "Completed prerequisite courses: Biology, Chemistry, Mathematics",
  "Minimum SAT score of 1150 or ACT score of 23",
  "Letters of recommendation (2 required)",
  "Personal statement (500-750 words)",
  "Background check and health clearance",
  "Current CPR certification (required before clinical rotations)",
];

export const importantDeadlines = [
  { term: "Fall 2025 Admission", deadline: "February 1, 2025", notification: "April 1, 2025" },
  { term: "Spring 2026 Admission", deadline: "October 1, 2025", notification: "December 1, 2025" },
];

export const admissionProcedures = [
  {
    step: 1,
    title: "Submit Application",
    description: "Complete the online application through our admissions portal and pay the application fee.",
  },
  {
    step: 2,
    title: "Submit Documents",
    description: "Provide official transcripts, test scores, and letters of recommendation.",
  },
  {
    step: 3,
    title: "Personal Statement",
    description: "Write and submit your personal statement explaining your interest in nursing.",
  },
  {
    step: 4,
    title: "Interview (if selected)",
    description: "Selected candidates will be invited for an interview with faculty members.",
  },
  {
    step: 5,
    title: "Receive Decision",
    description: "Admission decisions are sent by email and through the application portal.",
  },
  {
    step: 6,
    title: "Accept & Enroll",
    description: "Accept your offer, submit deposit, and complete enrollment requirements.",
  },
];

export const universityInfo = {
  name: "University School of Nursing",
  address: "123 University Drive, Medical Campus",
  city: "Springfield, ST 12345",
  phone: "(555) 123-4567",
  email: "nursing@university.edu",
  officeHours: "Monday - Friday: 9:00 AM - 5:00 PM",
};

export const socialLinks = [
  { name: "Facebook", url: "https://facebook.com", icon: "facebook" },
  { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
  { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
];
