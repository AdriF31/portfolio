export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  category: string;
  featured: boolean;
  features: string[];
  challenges: string[];
  outcomes: string[];
  duration: string;
  role: string;
  teamSize: string;
}

// Direct array of projects - simply add new projects to this array
export const projects: Project[] = [
  {
    id: "diarium-super-apps",
    title: "Diarium Super Apps",
    description:
      "A comprehensive digital diary and journaling application with advanced features for personal reflection and memory keeping",
    longDescription:
      "Diarium Super Apps is a feature-rich digital diary application designed to help users capture, organize, and reflect on their daily experiences. The app combines traditional journaling with modern technology to create a seamless and engaging user experience. Built with React Native for cross-platform compatibility, it features a beautiful, intuitive interface that encourages daily journaling habits while maintaining the highest standards of privacy and security.",
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Express",
      "Firebase",
      "Redux",
      "JWT Authentication",
      "Cloud Storage",
    ],
    image: `${import.meta.env.BASE_URL}diarium.png`,
    liveUrl: "https://diarium-demo.com",
    githubUrl: "https://github.com/AdriF31/diarium",
    category: "mobile",
    featured: true,
    duration: "8 months",
    role: "Lead Full Stack Developer",
    teamSize: "Lead Full Stack Developer",
    features: [
      "Rich text editor with advanced formatting options",
      "Photo and media attachment support with cloud storage",
      "Mood tracking and emotional analytics dashboard",
      "Advanced search and filtering with tags",
      "Real-time cloud synchronization across all devices",
      "Privacy-first design with end-to-end encryption",
      "Customizable themes and personalization options",
      "Export capabilities for backup and sharing",
    ],
    challenges: [
      "Implementing secure end-to-end encryption for sensitive personal data",
      "Designing an intuitive UI that encourages daily journaling habits",
      "Optimizing performance for large amounts of text and media content",
      "Creating seamless cross-platform synchronization",
    ],
    outcomes: [
      "Successfully launched with 10,000+ active users",
      "Achieved 4.8/5 star rating on app stores",
      "Reduced user onboarding time by 60%",
      "Implemented robust security measures with zero data breaches",
      "Featured in 'Best Productivity Apps' by major tech publications",
    ],
  },
  {
    id: "anynote-web-app",
    title: "AnyNote Web App",
    description:
      "A modern, feature-rich note-taking application with real-time collaboration and advanced organization features",
    longDescription:
      "AnyNote is a comprehensive web-based note-taking application designed for modern productivity needs. It combines the simplicity of traditional note-taking with powerful features like real-time collaboration, advanced search, and intelligent organization. Built with React and Node.js, it offers a seamless experience across all devices while maintaining high performance and reliability.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Socket.io",
      "Redis",
      "AWS S3",
      "Docker",
    ],
    image: "📝",
    liveUrl: "https://anynote-demo.com",
    githubUrl: "https://github.com/AdriF31/anynote",
    category: "web",
    featured: true,
    duration: "6 months",
    role: "Full Stack Developer",
    teamSize: "3 developers",
    features: [
      "Real-time collaborative editing with conflict resolution",
      "Advanced text formatting and rich media support",
      "Intelligent auto-save and version history",
      "Powerful search with full-text indexing",
      "Customizable organization with tags and folders",
      "Cross-platform synchronization",
      "Offline mode with automatic sync when online",
      "Export to multiple formats (PDF, Markdown, HTML)",
    ],
    challenges: [
      "Implementing real-time collaboration without conflicts",
      "Optimizing search performance for large note collections",
      "Designing an intuitive yet powerful organization system",
      "Ensuring data consistency across multiple devices",
    ],
    outcomes: [
      "Achieved sub-100ms response times for all operations",
      "Successfully handles 1000+ concurrent users",
      "Implemented conflict-free collaborative editing",
      "Reduced note retrieval time by 80% with optimized search",
      "Maintained 99.9% uptime since launch",
    ],
  },
  {
    id: "hr-management-system",
    title: "HR Management System",
    description:
      "A comprehensive HR management platform with modules for attendance, overtime, leave management, and employee engagement",
    longDescription:
      "This HR Management System is a comprehensive platform designed to streamline human resource operations for modern businesses. The system includes integrated modules for attendance tracking, overtime management, leave administration, and employee engagement tools. Built with scalability in mind, it supports multi-company architecture and provides detailed analytics for HR decision-making.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Material-UI",
    ],
    image: "🏢",
    liveUrl: "https://hr-system-demo.com",
    githubUrl: "https://github.com/AdriF31/hr-system",
    category: "web",
    featured: false,
    duration: "10 months",
    role: "Lead Frontend Developer",
    teamSize: "5 developers",
    features: [
      "Comprehensive Attendance Management System",
      "Advanced Overtime Tracking and Approval Workflows",
      "Flexible Leave Management with Multiple Leave Types",
      "Employee Self-Service Portal",
      "Real-time Dashboard and Analytics",
      "Role-based Access Control",
      "Employee Engagement Analytics",
      "Scalable Multi-company Architecture",
    ],
    challenges: [
      "Ensuring smooth integration between complex HR modules",
      "Designing scalable architecture for future multi-company support",
      "Optimizing performance for large employee datasets",
      "Creating intuitive workflows for diverse HR processes",
    ],
    outcomes: [
      "Successfully developed core HR modules (Attendance, Overtime, Leave)",
      "Improved HR process efficiency by 60%",
      "Enhanced employee engagement through centralized communication",
      "Built scalable foundation for future multi-company expansion",
      "Currently in active development with positive internal feedback",
    ],
  },
  {
    id: "peoplehub",
    title: "PeopleHub",
    description:
      "A comprehensive people management platform for HR teams to streamline employee onboarding, performance tracking, and team collaboration",
    longDescription:
      "PeopleHub is a modern HR management platform designed to simplify people operations for growing companies. It provides a centralized hub for managing employee information, tracking performance metrics, facilitating team collaboration, and streamlining HR processes. Built with a focus on user experience and scalability, PeopleHub helps HR teams work more efficiently while providing employees with self-service capabilities.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Tailwind CSS",
    ],
    image: "👥",
    liveUrl: "https://peoplehub-demo.com",
    githubUrl: "https://github.com/AdriF31/peoplehub",
    category: "web",
    featured: true,
    duration: "7 months",
    role: "Full Stack Developer",
    teamSize: "4 developers",
    features: [
      "Employee profile management and directory",
      "Performance tracking and review system",
      "Team collaboration tools and messaging",
      "Onboarding workflow automation",
      "Real-time notifications and updates",
      "Advanced reporting and analytics",
      "Role-based access control",
      "Mobile-responsive design",
    ],
    challenges: [
      "Designing intuitive workflows for complex HR processes",
      "Implementing real-time collaboration features",
      "Ensuring data privacy and security compliance",
      "Creating scalable architecture for multi-tenant usage",
    ],
    outcomes: [
      "Reduced employee onboarding time by 50%",
      "Improved HR team productivity by 40%",
      "Successfully deployed for 5+ companies",
      "Achieved 95% user satisfaction rating",
      "Built foundation for enterprise-level scaling",
    ],
  },
];

// Helper function to get a project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

// Helper function to get featured projects
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
};

// Available categories
export const categories = [
  { id: "all", label: "All Projects" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "web", label: "Web Apps" },
];