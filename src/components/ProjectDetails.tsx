import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DemoModal from "./DemoModal";
import type { Project } from "../data/projects";
import { getProjectById } from "../data/projects";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [showDemoModal, setShowDemoModal] = useState(false);

  // Project data is now imported from centralized data file

  useEffect(() => {
    if (id) {
      const foundProject = getProjectById(id);
      setProject(foundProject || null);
    }
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
            {typeof project.image === "string" &&
            project.image.includes(".") ? (
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 mb-8 shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full max-w-full object-contain rounded-lg drop-shadow-lg"
                />
              </div>
            ) : (
              <div className="text-6xl mb-6">{project.image}</div>
            )}
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
              <button
                onClick={() => setShowDemoModal(true)}
                className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-medium hover:from-teal-700 hover:to-cyan-700 transition-all duration-300"
              >
                View Live Demo
              </button>
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

        <DemoModal
          isOpen={showDemoModal}
          onClose={() => setShowDemoModal(false)}
          project={project}
        />

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
