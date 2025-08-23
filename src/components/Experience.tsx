import { useState, useEffect, useRef } from "react";

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  logo: string;
}

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      company: "PT Swamedia Informatika",
      position: "Mobile Developer",
      duration: "January 2023 - Present",
      location: "Bandung, Indonesia",
      description: [
        "Developed and maintained cross-platform mobile applications using Flutter",
        "Worked closely with product managers and stakeholders to gather requirements",
        "Ensured high performance and responsiveness of apps",
        "Collaborated with UI/UX designers to create visually appealing interfaces",
        "Integrated RESTful APIs and third-party libraries for enhanced functionality",
        "Conducted thorough testing and debugging to ensure app reliability",
      ],
      technologies: ["Flutter", "Dart", "Firebase", "REST API", "Git", "Figma"],
      logo: "SI",
    },
    {
      id: 2,
      company: "Dapen Telkom",
      position: "Freelance Mobile Developer",
      duration: "September 2023 - May 2024",
      location: "Remote",
      description: [
        "Developed and maintained Dapen Mobile Apps for Telkom pensioners",
        "Worked closely with backend development team for seamless integration",
        "Conducted thorough testing to identify and resolve issues before releases",
        "Continuously monitored app performance and user feedback",
        "Implemented improvements and enhancements based on user needs",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "REST API",
        "Firebase",
        "Play Store",
        "App Store",
      ],
      logo: "DT",
    },
    {
      id: 3,
      company: "PT Jerbee Indonesia",
      position: "Flutter Developer Intern",
      duration: "February 2020 - July 2020",
      location: "Bandung, Indonesia",
      description: [
        "Independently learned mobile app development using Flutter and Dart",
        "Designed and built cross-platform mobile applications from scratch",
        "Strengthened UI/UX skills using Figma for design",
        "Published apps to Google Play Store",
        "Participated in code reviews and development best practices",
      ],
      technologies: [
        "Flutter",
        "Dart",
        "Figma",
        "Android Studio",
        "Play Store",
      ],
      logo: "JI",
    },
  ];

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
      id="experience"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-teal-950 via-black to-gray-950"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A journey through my professional career and the impact I've made
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-600 to-cyan-600 rounded-full"></div>

              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex items-center mb-16 transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full border-4 border-gray-900 z-10"></div>

                  {/* Content */}
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "pr-8" : "ml-auto pl-8"
                    }`}
                  >
                    <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        {index % 2 === 0 ? (
                          <>
                            <div>
                              <h3 className="text-xl font-bold text-white">
                                {exp.position}
                              </h3>
                              <p className="text-teal-300 font-semibold">
                                {exp.company}
                              </p>
                              <p className="text-gray-400 text-sm">
                                {exp.duration} • {exp.location}
                              </p>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {exp.logo}
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {exp.logo}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white">
                                {exp.position}
                              </h3>
                              <p className="text-teal-300 font-semibold">
                                {exp.company}
                              </p>
                              <p className="text-gray-400 text-sm">
                                {exp.duration} • {exp.location}
                              </p>
                            </div>
                          </>
                        )}
                      </div>

                      <ul className="text-gray-300 space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-teal-400 mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-teal-600/20 text-teal-300 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden">
            <div className="relative pl-8">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 w-0.5 h-full bg-gradient-to-b from-teal-600 to-cyan-600"></div>

              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative mb-12 transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 w-3 h-3 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full border-2 border-gray-900"></div>

                  {/* Content */}
                  <div className="glass-effect rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {exp.logo}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {exp.position}
                        </h3>
                        <p className="text-teal-300 font-semibold">
                          {exp.company}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {exp.duration} • {exp.location}
                        </p>
                      </div>
                    </div>

                    <ul className="text-gray-300 space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-teal-400 mt-1">•</span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-teal-600/20 text-teal-300 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-teal-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-900/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Experience;
