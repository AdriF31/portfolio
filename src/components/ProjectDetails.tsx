import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface Project {
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
  duration: string;
  role: string;
  teamSize: string;
}

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);

  // Real project data
  const projectsData = {
    "diarium-super-apps": {
      title: "Diarium Super Apps",
      description:
        "Internal app for Telkom Indonesia to support employee activities and streamline communication",
      longDescription:
        "Developed an internal app for Telkom Indonesia to support employee activities and streamline communication within the company. I improved the Attendance Module, making tracking more accurate and efficient. Integrated an OKR system to align individual tasks with team goals, boosting productivity. I also refactored the UI using Flutter's reusable components to enhance user engagement and reduce code redundancy. While the app is not available on the Play Store or App Store, it is hosted on Telkom's internal portal and is actively used within the company for improving employee experience and productivity.",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "REST API",
        "OKR Integration",
        "UI Components",
      ],
      image: "🏢",
      liveUrl: "https://internal.telkom.co.id",
      githubUrl: "https://github.com/private/diarium-super-apps",
      category: "Enterprise Mobile Development",
      duration: "8 months",
      team: "Mobile Development Team",
      features: [
        "Enhanced Attendance Module with GPS tracking",
        "OKR (Objectives and Key Results) Integration",
        "Employee Communication Hub",
        "Task Management & Goal Alignment",
        "Reusable UI Component Library",
        "Internal Portal Integration",
        "Employee Activity Dashboard",
        "Real-time Notifications",
      ],
      challenges: [
        "Improving attendance tracking accuracy while maintaining user privacy",
        "Integrating complex OKR system with existing company workflows",
        "Refactoring legacy UI components for better reusability",
        "Ensuring seamless integration with Telkom's internal systems",
      ],
      outcomes: [
        "Successfully deployed to Telkom's internal portal",
        "Improved attendance tracking accuracy by 40%",
        "Increased employee productivity through OKR alignment",
        "Reduced code redundancy by 50% through component refactoring",
        "Enhanced user engagement across all company departments",
      ],
    },
    "dapen-telkom-mobile": {
      title: "Dapen Telkom Mobile",
      description:
        "Mobile app for Telkom's pensioners providing easy access to pension information and services",
      longDescription:
        "Created a mobile app for Telkom's pensioners, providing easy access to pension information and services. I resolved critical issues in the login flow, including facial recognition and token authentication, reducing user complaints. I redesigned the app's interface using Flutter and Figma to improve accessibility, especially for senior users. I also built new features like an emergency contact manager and profile editor, and managed the full deployment to both the Play Store and App Store.",
      technologies: [
        "Flutter",
        "Dart",
        "Figma",
        "Facial Recognition",
        "Token Authentication",
        "REST API",
      ],
      image: "👴",
      liveUrl: "https://play.google.com/store/apps/details?id=com.telkom.dapen",
      githubUrl: "https://github.com/private/dapen-telkom-mobile",
      category: "Mobile Development",
      duration: "6 months",
      team: "Cross-functional Team",
      features: [
        "Secure Login with Facial Recognition",
        "Token-based Authentication System",
        "Pension Information Dashboard",
        "Emergency Contact Manager",
        "Profile Editor & Management",
        "Senior-friendly UI Design",
        "Accessibility Features",
        "Multi-platform Deployment",
      ],
      challenges: [
        "Resolving critical login flow issues affecting user experience",
        "Implementing reliable facial recognition for senior users",
        "Designing accessible interface for elderly users",
        "Managing complex deployment process to both app stores",
      ],
      outcomes: [
        "Successfully launched on both Play Store and App Store",
        "Reduced user login complaints by 80%",
        "Improved app accessibility rating to 4.5/5",
        "Enhanced user satisfaction among senior citizens",
        "Streamlined pension service access for thousands of retirees",
      ],
    },
    peoplehub: {
      title: "PeopleHub",
      description:
        "HR platform designed to enhance employee engagement and streamline HR processes",
      longDescription:
        "PeopleHub is an HR platform designed to enhance employee engagement and streamline HR processes. The app centralizes employee data, announcements, and collaboration tools, aiming to boost communication and operational efficiency across teams. So far, I've developed key modules like Attendance, Overtime, and Leave Management, which are integral to the platform's functionality. Currently in development, PeopleHub is being built for internal use within our company but has the potential to be expanded for multi-company support and marketed to other organizations. My role focuses on ensuring these modules integrate smoothly and are optimized for scalability as we plan for future releases.",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "HR Management",
        "Employee Engagement",
        "Collaboration Tools",
      ],
      image: "👥",
      liveUrl: "https://peoplehub-internal.example.com",
      githubUrl: "https://github.com/private/peoplehub",
      category: "HR Technology",
      duration: "Ongoing (12+ months)",
      team: "Development Team Lead",
      features: [
        "Centralized Employee Data Management",
        "Attendance Tracking Module",
        "Overtime Management System",
        "Leave Management & Approval Workflow",
        "Company Announcements Hub",
        "Team Collaboration Tools",
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
  };

  const projects: Project[] = Object.entries(projectsData).map(
    ([id, data]) => ({
      id,
      ...data,
      featured: id === "diarium-super-apps" || id === "dapen-telkom-mobile",
      role: data.team.includes("Lead")
        ? "Development Team Lead"
        : "Mobile Developer",
      teamSize: data.team,
    })
  );

  useEffect(() => {
    const foundProject = projects.find((p) => p.id === id);
    setProject(foundProject || null);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-teal-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-300 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-medium hover:from-teal-700 hover:to-cyan-700 transition-all duration-300"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-teal-950">
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">{project.image}</div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {project.longDescription}
            </p>

            {/* Project Meta Info */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="glass-effect p-4 rounded-lg">
                <h3 className="text-teal-300 font-semibold mb-2">Duration</h3>
                <p className="text-white">{project.duration}</p>
              </div>
              <div className="glass-effect p-4 rounded-lg">
                <h3 className="text-teal-300 font-semibold mb-2">Role</h3>
                <p className="text-white">{project.role}</p>
              </div>
              <div className="glass-effect p-4 rounded-lg">
                <h3 className="text-teal-300 font-semibold mb-2">Team Size</h3>
                <p className="text-white">{project.teamSize}</p>
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-teal-600/20 text-teal-300 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-medium hover:from-teal-700 hover:to-cyan-700 transition-all duration-300"
              >
                View Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-teal-400 text-teal-400 px-8 py-3 rounded-lg font-medium hover:bg-teal-400 hover:text-white transition-all duration-300"
              >
                View Code
              </a>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-32 h-32 bg-teal-900/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-indigo-900/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Key <span className="text-gradient">Features</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.features.map((feature, index) => (
                <div key={index} className="glass-effect p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <p className="text-gray-300">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Challenges & <span className="text-gradient">Solutions</span>
            </h2>
            <div className="space-y-6">
              {project.challenges.map((challenge, index) => (
                <div key={index} className="glass-effect p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">!</span>
                    </div>
                    <p className="text-gray-300">{challenge}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Info Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Project <span className="text-gradient">Information</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-effect p-8 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">
                  Project Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-teal-300 font-semibold">
                      Category:{" "}
                    </span>
                    <span className="text-gray-300">{project.category}</span>
                  </div>
                  <div>
                    <span className="text-teal-300 font-semibold">
                      Status:{" "}
                    </span>
                    <span className="text-gray-300">
                      {project.featured ? "Featured Project" : "Completed"}
                    </span>
                  </div>
                  <div>
                    <span className="text-teal-300 font-semibold">
                      Development Time:{" "}
                    </span>
                    <span className="text-gray-300">{project.duration}</span>
                  </div>
                </div>
              </div>
              <div className="glass-effect p-8 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">My Role</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-teal-300 font-semibold">
                      Position:{" "}
                    </span>
                    <span className="text-gray-300">{project.role}</span>
                  </div>
                  <div>
                    <span className="text-teal-300 font-semibold">
                      Team Size:{" "}
                    </span>
                    <span className="text-gray-300">{project.teamSize}</span>
                  </div>
                  <div>
                    <span className="text-teal-300 font-semibold">
                      Responsibilities:{" "}
                    </span>
                    <span className="text-gray-300">
                      Frontend development, UI/UX implementation, API
                      integration
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Interested in{" "}
              <span className="text-gradient">Working Together?</span>
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              I'm always excited to work on new projects and collaborate with
              amazing teams.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate("/#contact")}
                className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-medium hover:from-teal-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get In Touch
              </button>
              <button
                onClick={() => navigate("/#projects")}
                className="border border-teal-400 text-teal-400 px-8 py-3 rounded-lg font-medium hover:bg-teal-400 hover:text-white transition-all duration-300"
              >
                View More Projects
              </button>
              <button
                onClick={() => navigate("/")}
                className="glass-effect text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
              >
                Back to Portfolio
              </button>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-32 h-32 bg-teal-900/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-indigo-900/20 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
