import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DemoModal from "./DemoModal";
import type { Project } from "../data/projects";
import {  categories, getProjectsByCategory } from "../data/projects";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [demoProject, setDemoProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  // Projects and categories are now imported from centralized data

  const filteredProjects = getProjectsByCategory(selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-950 via-black to-teal-950"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills
            and creativity
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white"
                  : "glass-effect text-gray-300 hover:text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => navigate(`/project/${project.id}`)}
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 overflow-hidden">
                {project.image.startsWith("/") ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      console.error(`Failed to load image: ${project.image}`);
                      console.error(e);
                    }}
                    onLoad={() => {
                      console.log(
                        `Successfully loaded image: ${project.image}`
                      );
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center">
                    <div className="text-6xl text-white">{project.image}</div>
                  </div>
                )}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold z-10">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="bg-teal-600/20 text-teal-300 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-gray-400 text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/project/${project.id}`);
                    }}
                    className="flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:from-teal-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    View Details
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setDemoProject(project);
                      setShowDemoModal(true);
                    }}
                    className="flex-1 border border-teal-400 text-teal-400 py-2 px-4 rounded-lg text-center text-sm font-medium hover:bg-teal-400 hover:text-white transition-all duration-300"
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="glass-effect rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-teal-600/20 text-teal-300 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="h-48 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  {selectedProject.image.startsWith("/") ? (
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <div className="text-8xl">{selectedProject.image}</div>
                  )}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setDemoProject(selectedProject);
                      setShowDemoModal(true);
                    }}
                    className="flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 px-6 rounded-lg text-center font-medium hover:from-teal-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    View Live Demo
                  </button>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-teal-400 text-teal-400 py-3 px-6 rounded-lg text-center font-medium hover:bg-teal-400 hover:text-white transition-all duration-300"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        <DemoModal
          isOpen={showDemoModal}
          onClose={() => setShowDemoModal(false)}
          project={demoProject}
        />
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-32 h-32 bg-teal-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-indigo-900/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Projects;
