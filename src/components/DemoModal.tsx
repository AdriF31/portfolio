import React from "react";

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
}

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl p-6 max-w-2xl w-full max-w-[50vw] max-h-[60vh] overflow-auto shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-white">
            {project.title} - Live Demo
          </h3>
          <button
            onClick={onClose}
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
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-8 mb-4">
            <div className="text-gray-400 mb-4">
              <svg
                className="w-16 h-16 mx-auto mb-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-lg">Demo GIF Placeholder</p>
              <p className="text-sm text-gray-500 mt-2">
                Add your app demo GIF here
              </p>
            </div>
          </div>
          <p className="text-gray-300 text-sm">
            This would show an animated GIF demonstrating the key features and
            user flow of {project.title}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
