export type NavItem = {
  id: string;
  label: string;
};

export type ContactLink = {
  label: string;
  href: string;
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  stack: string[];
  github: string;
  live?: string;
  featured?: boolean;
  images?: string[];
};

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "leadership", label: "Leadership" },
  { id: "courses", label: "Courses" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export const profile = {
  fullName: "Avishka Hirushan",
  title: "Computer Engineering Undergraduate | Software, Full-Stack & Mobile Developer",
  shortIntro:
    "Third-year Computer Engineering undergraduate at the University of Ruhuna focused on building reliable, user-centered software across web, mobile, and desktop platforms.",
  summary:
    "I build practical software products with strong engineering fundamentals, clean architecture, and collaborative workflows. My experience spans React and Next.js frontends, backend services with Node.js and Spring Boot, and mobile apps with Flutter and Firebase, supported by Git-based teamwork and DevOps practices.",
  locationNote: "University of Ruhuna, Sri Lanka",
  cvPath: "/Avishka_Hirushan_CV_CGPA_TechProjects_AIUpdated_v2.pdf",
};

export const contacts: ContactLink[] = [
  { label: "Email", href: "mailto:ahirushan629@gmail.com" },
  { label: "Phone", href: "tel:+94742850328" },
  { label: "GitHub", href: "https://github.com/Avizz220" },
  { label: "LinkedIn", href: "https://rb.gy/hrckip" },
  { label: "Website", href: "https://vesco.lk" },
];

export const education = [
  {
    school: "University of Ruhuna",
    period: "2023 - Present",
    degree: "B.Sc. (Hons) in Engineering",
    focus: "Faculty of Engineering - Specializing in Computer Engineering",
    note: "CGPA: 3.48 / 4.00 (up to 3rd semester)",
    primary: true,
  },
  {
    school: "ACPT (Academy of Computer Professional Training)",
    period: "Recent / Ongoing",
    degree: "Diploma / Course in Full Stack Mobile & Web Development",
    focus: "Focused on end-to-end application development and modern web and mobile technology stacks.",
    note: "Current learning track",
    primary: false,
  },
  {
    school: "ESOFT Metro Campus, Matara",
    period: "Completed",
    degree: "Diploma in Information Technology",
    focus: "Foundational training in computing, systems, and digital logic.",
    note: "Academic foundation",
    primary: false,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend & Frameworks",
    items: ["Node.js", "Java", "Spring Boot", "Spring Security", "ASP.NET MVC"],
  },
  {
    category: "Microsoft Stack",
    items: ["C#", ".NET", "WPF", "Windows Forms"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "JDBC"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "Firebase"],
  },
  {
    category: "AI-Assisted Development",
    items: ["Prompt-driven prototyping", "AI-assisted workflows", "Developer productivity"],
  },
  {
    category: "DevOps & Version Control",
    items: ["AWS", "Jenkins", "Git", "GitHub Actions", "Terraform"],
  },
  {
    category: "Collaboration",
    items: ["Team-based delivery", "Git workflow", "Code collaboration", "Real-client projects"],
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Vesco Engineering Web Platform",
    description:
      "Co-founded and built a business web platform for an engineering services venture, delivering a performant full-stack solution with a production-ready user experience.",
    stack: ["Next.js", "Node.js", "MySQL"],
    github: "https://github.com/Avizz220/Vesco-Engineering",
    live: "https://vesco.lk",
    featured: true,
    images: [
      "/vesco/Screenshot 2026-03-21 005100.png",
      "/vesco/Screenshot 2026-03-21 005115.png",
      "/vesco/Screenshot 2026-03-21 005127.png",
    ],
  },
  {
    title: "DevOps Application",
    description:
      "Developed a full-stack platform with CI/CD pipelines and deployment-focused workflows, integrating automation practices and cloud-oriented infrastructure concepts.",
    stack: ["Jenkins", "GitHub Actions", "AWS", "Terraform", "Full-Stack"],
    github: "https://github.com/Avizz220/Devops-Project",
    featured: true,
    images: ["/devops/1769792902359.jpg", "/devops/1769792903120.jpg"],
  },
  {
    title: "University Internship Management System",
    description:
      "Contributing to a team-based ongoing system for the University of Ruhuna to streamline internship coordination and management processes.",
    stack: ["Team Project", "Full-Stack", "University System"],
    github: "https://github.com/Pasan02/Software-Group-Project",
    featured: true,
    images: [
      "/internshipmanagement/Screenshot 2026-03-21 003343.png",
      "/internshipmanagement/Screenshot 2026-03-21 003406.png",
      "/internshipmanagement/Screenshot 2026-03-21 003419.png",
      "/internshipmanagement/Screenshot 2026-03-21 003448.png",
    ],
  },
  {
    title: "Daily To-Do Task Manager",
    description:
      "Built a cross-platform task manager with secure authentication and object-oriented architecture for reliable daily productivity management.",
    stack: ["Flutter", "Firebase", "Mobile Development"],
    github: "https://github.com/Avizz220/Flutter-Mobile-App",
    images: [
      "/taskmanager/Screenshot 2026-03-21 003746.png",
      "/taskmanager/Screenshot 2026-03-21 003830.png",
      "/taskmanager/Screenshot 2026-03-21 003858.png",
    ],
  },
  {
    title: "Vehicle Stock Management System",
    description:
      "Implemented a desktop stock management system for a real client requirement in a team setting, focusing on robust data handling and usability.",
    stack: ["C#", ".NET", "WPF", "PostgreSQL"],
    github: "https://github.com/Pasan02/inventory-management",
    images: [
      "/vehicleinventory/Screenshot 2026-03-21 002910.png",
      "/vehicleinventory/Screenshot 2026-03-21 002931.png",
      "/vehicleinventory/Screenshot 2026-03-21 002959.png",
      "/vehicleinventory/Screenshot 2026-03-21 003103.png",
    ],
  },
];

export const leadershipHighlights = [
  "Led the publicity team for Rextro 2025, a major exhibition event at the University of Ruhuna.",
  "Coordinated cross-functional teams and supported digital and social media outreach.",
  "Contributed to promotional planning and execution through structured team collaboration.",
];

export const softSkills = [
  "Leadership",
  "Communication",
  "Collaboration",
  "Organization",
  "Problem Solving",
  "Adaptability",
];

export const courses = [
  "Full Stack Mobile & Web Development (ongoing)",
  "Mobile Application Development with Flutter & Firebase",
  "Web Development",
  "Software Engineering Principles",
  "Object-Oriented Programming",
  "DevOps Engineering",
  "Software Testing and Quality Assurance",
];

export const certificates = {
  title: "Certificates & Supporting Documents",
  description:
    "Verified certificates and supporting records are maintained in the shared Google Drive folder.",
  link: "https://drive.google.com/drive/folders/16VsYwuvHRZCX93_l59R-899jHRlXPfZK?usp=drive_link",
};

export const languages = ["English", "Sinhala"];
