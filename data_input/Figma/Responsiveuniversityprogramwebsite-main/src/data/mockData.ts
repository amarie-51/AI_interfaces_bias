// Mock data for the Computer Science program website

export interface Course {
  id: string;
  title: string;
  code: string;
  description: string;
  level: 'Year 1' | 'Year 2' | 'Year 3' | 'Year 4';
  credits: number;
  modules: string[];
}

export interface Faculty {
  id: string;
  name: string;
  title: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  specialization: string[];
}

export interface StudentStory {
  id: string;
  name: string;
  year: string;
  story: string;
  image: string;
  quote: string;
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Programming',
    code: 'CS101',
    description: 'Learn the fundamentals of programming using Python. This course covers basic syntax, data structures, and problem-solving techniques.',
    level: 'Year 1',
    credits: 4,
    modules: ['Variables & Data Types', 'Control Structures', 'Functions', 'Object-Oriented Programming']
  },
  {
    id: '2',
    title: 'Data Structures and Algorithms',
    code: 'CS201',
    description: 'Explore essential data structures and algorithms including arrays, linked lists, trees, graphs, sorting, and searching.',
    level: 'Year 2',
    credits: 4,
    modules: ['Arrays & Linked Lists', 'Trees & Graphs', 'Sorting Algorithms', 'Algorithm Analysis']
  },
  {
    id: '3',
    title: 'Database Management Systems',
    code: 'CS202',
    description: 'Study the design, implementation, and management of database systems including SQL, normalization, and transactions.',
    level: 'Year 2',
    credits: 3,
    modules: ['SQL Fundamentals', 'Database Design', 'Normalization', 'Transactions & Concurrency']
  },
  {
    id: '4',
    title: 'Web Development',
    code: 'CS203',
    description: 'Learn modern web development technologies including HTML, CSS, JavaScript, and popular frameworks like React.',
    level: 'Year 2',
    credits: 3,
    modules: ['HTML & CSS', 'JavaScript Essentials', 'React Framework', 'RESTful APIs']
  },
  {
    id: '5',
    title: 'Computer Networks',
    code: 'CS301',
    description: 'Understand the principles of computer networking including protocols, network architecture, and security.',
    level: 'Year 3',
    credits: 4,
    modules: ['Network Protocols', 'TCP/IP Stack', 'Network Security', 'Wireless Networks']
  },
  {
    id: '6',
    title: 'Software Engineering',
    code: 'CS302',
    description: 'Learn software development methodologies, design patterns, testing strategies, and project management.',
    level: 'Year 3',
    credits: 4,
    modules: ['Agile Methodology', 'Design Patterns', 'Testing & QA', 'DevOps Practices']
  },
  {
    id: '7',
    title: 'Artificial Intelligence',
    code: 'CS401',
    description: 'Explore AI concepts including machine learning, neural networks, natural language processing, and computer vision.',
    level: 'Year 4',
    credits: 4,
    modules: ['Machine Learning Basics', 'Neural Networks', 'Deep Learning', 'AI Applications']
  },
  {
    id: '8',
    title: 'Cloud Computing',
    code: 'CS402',
    description: 'Study cloud architecture, services, deployment models, and hands-on experience with major cloud platforms.',
    level: 'Year 4',
    credits: 3,
    modules: ['Cloud Architecture', 'AWS/Azure Services', 'Containerization', 'Serverless Computing']
  },
  {
    id: '9',
    title: 'Cybersecurity',
    code: 'CS303',
    description: 'Learn security principles, cryptography, ethical hacking, and strategies to protect systems and data.',
    level: 'Year 3',
    credits: 3,
    modules: ['Security Fundamentals', 'Cryptography', 'Ethical Hacking', 'Security Best Practices']
  }
];

export const faculty: Faculty[] = [
  {
    id: '1',
    name: 'Dr. Sarah Mitchell',
    title: 'Course Coordinator & Associate Professor',
    role: 'Program Director',
    bio: 'Dr. Mitchell leads the Computer Science program with over 15 years of experience in software engineering and education. Their research focuses on machine learning and educational technology.',
    image: 'https://images.unsplash.com/photo-1615502589469-8c9d26f6d63d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3NvcnxlbnwxfHx8fDE3NjE4Mjc4ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    email: 's.mitchell@university.edu',
    specialization: ['Machine Learning', 'Software Engineering', 'Educational Technology']
  },
  {
    id: '2',
    name: 'Dr. Jamie Chen',
    title: 'Associate Professor',
    role: 'Research Lead',
    bio: 'Dr. Chen specializes in artificial intelligence and data science. They have published over 40 research papers and lead several industry partnerships.',
    image: 'https://images.unsplash.com/photo-1700616466971-a4e05aa89e7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyfGVufDF8fHx8MTc2MTc2NzUwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    email: 'j.chen@university.edu',
    specialization: ['Artificial Intelligence', 'Data Science', 'Deep Learning']
  },
  {
    id: '3',
    name: 'Prof. Riley Rodriguez',
    title: 'Senior Lecturer',
    role: 'Industry Liaison',
    bio: 'Professor Rodriguez brings 20 years of industry experience from leading tech companies. They teach software engineering and maintain strong industry connections.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    email: 'r.rodriguez@university.edu',
    specialization: ['Software Engineering', 'Web Development', 'Cloud Computing']
  },
  {
    id: '4',
    name: 'Dr. Jordan Thompson',
    title: 'Assistant Professor',
    role: 'Cybersecurity Specialist',
    bio: 'Dr. Thompson is an expert in cybersecurity and network systems. They previously worked as a security consultant for government agencies.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    email: 'j.thompson@university.edu',
    specialization: ['Cybersecurity', 'Network Security', 'Cryptography']
  }
];

export const studentStories: StudentStory[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    year: 'Final Year Student',
    story: 'The Computer Science program has been transformative. The hands-on projects and supportive faculty helped me secure an internship at a major tech company.',
    image: 'https://images.unsplash.com/photo-1663535067514-66386c117b6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBzdHVkZW50c3xlbnwxfHx8fDE3NjE3MjQzNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    quote: 'The hands-on approach to learning is what sets this program apart.'
  },
  {
    id: '2',
    name: 'Priya Patel',
    year: 'Graduate 2024',
    story: 'From struggling with basic coding to building complex AI applications, this program gave me the confidence and skills to excel in the tech industry.',
    image: 'https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NjE3NDU2NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    quote: 'I went from novice to confident developer in just four years.'
  },
  {
    id: '3',
    name: 'Sam Torres',
    year: 'Third Year Student',
    story: 'The collaborative environment and real-world projects prepare you for the challenges of the tech industry. The faculty truly care about student success.',
    image: 'https://images.unsplash.com/photo-1675664535114-99fcb3c80c82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVjaG5vbG9neSUyMHN0dWRlbnR8ZW58MXx8fHwxNzYxODI5MDEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    quote: 'Real-world projects made all the difference in my learning journey.'
  }
];

export const programHighlights = [
  {
    title: 'Industry-Relevant Curriculum',
    description: 'Learn cutting-edge technologies and programming languages used by top tech companies.',
    icon: '💻'
  },
  {
    title: 'Expert Faculty',
    description: 'Learn from professors with extensive industry experience and active research programs.',
    icon: '🎓'
  },
  {
    title: 'Hands-On Projects',
    description: 'Build real-world applications and work on industry-sponsored projects.',
    icon: '🚀'
  },
  {
    title: 'Career Support',
    description: '95% placement rate with dedicated career services and industry connections.',
    icon: '💼'
  }
];

export const careerOutcomes = [
  {
    title: 'Software Engineer',
    description: 'Design and develop software applications for various platforms.',
    averageSalary: '$85,000 - $120,000'
  },
  {
    title: 'Data Scientist',
    description: 'Analyze complex data sets and build predictive models.',
    averageSalary: '$90,000 - $130,000'
  },
  {
    title: 'Cloud Architect',
    description: 'Design and implement cloud infrastructure solutions.',
    averageSalary: '$100,000 - $150,000'
  },
  {
    title: 'Cybersecurity Analyst',
    description: 'Protect systems and networks from security threats.',
    averageSalary: '$80,000 - $115,000'
  },
  {
    title: 'Full-Stack Developer',
    description: 'Build complete web applications from front-end to back-end.',
    averageSalary: '$75,000 - $110,000'
  },
  {
    title: 'AI/ML Engineer',
    description: 'Develop artificial intelligence and machine learning solutions.',
    averageSalary: '$95,000 - $140,000'
  }
];

export const admissionRequirements = [
  'High school diploma or equivalent',
  'Minimum GPA of 3.0',
  'Mathematics prerequisite (Calculus or equivalent)',
  'English proficiency (TOEFL/IELTS for international students)',
  'Personal statement',
  'Two letters of recommendation',
  'SAT/ACT scores (optional)'
];

export const importantDates = [
  { event: 'Application Opens', date: 'November 1, 2025' },
  { event: 'Early Decision Deadline', date: 'January 15, 2026' },
  { event: 'Regular Decision Deadline', date: 'March 1, 2026' },
  { event: 'Financial Aid Deadline', date: 'March 15, 2026' },
  { event: 'Decision Notifications', date: 'April 1, 2026' },
  { event: 'Enrollment Deposit Due', date: 'May 1, 2026' }
];

export const keyFacts = [
  { label: 'Program Duration', value: '4 Years (Full-time)' },
  { label: 'Total Credits', value: '120 Credits' },
  { label: 'Student-Faculty Ratio', value: '15:1' },
  { label: 'Average Class Size', value: '25 Students' },
  { label: 'Internship Rate', value: '90%' },
  { label: 'Job Placement Rate', value: '95%' },
  { label: 'Starting Salary', value: '$75,000+' },
  { label: 'Graduate School Rate', value: '30%' }
];
