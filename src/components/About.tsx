import { useState, useEffect, useRef } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    experience: 0,
    clients: 0,
    awards: 0,
  });
  const sectionRef = useRef<HTMLElement>(null);

  const finalStats = {
    projects: 10,
    experience: 3,
    clients: 5,
    awards: 2,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateStats();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setAnimatedStats({
        projects: Math.floor(finalStats.projects * progress),
        experience: Math.floor(finalStats.experience * progress),
        clients: Math.floor(finalStats.clients * progress),
        awards: Math.floor(finalStats.awards * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setAnimatedStats(finalStats);
      }
    }, stepDuration);
  };

  return (
    <section ref={sectionRef} id="about" className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-950 via-black to-teal-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and what skills I have
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Get to know me!
            </h3>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a{" "}
                <strong className="text-teal-300">Mobile Developer</strong>{" "}
                with 3 years of experience building cross-platform applications
                using Flutter. Based in Bandung, I'm passionate about learning
                new technologies and continuously growing my skills to create
                high-quality, user-focused solutions.
              </p>

              <p>
                My journey in tech started with a curiosity about how things
                work behind the scenes. This curiosity led me to explore various
                technologies and frameworks, eventually specializing in mobile
                development with Flutter and Dart.
              </p>

              <p>
                I thrive in collaborative environments, working with diverse
                teams to optimize app performance, maintain clean code, and
                enhance the user experience. I believe in continuous learning
                and staying updated with the latest industry trends.
              </p>

              <p>
                I'm always excited about solving new challenges and contributing
                to impactful projects in fast-paced, agile settings with
                like-minded individuals who share a passion for innovation and
                excellence.
              </p>
            </div>

            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Me
            </button>
          </div>

          {/* Stats */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-effect rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                  {animatedStats.projects}+
                </div>
                <div className="text-gray-300 font-medium">Apps Developed</div>
              </div>

              <div className="glass-effect rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                  {animatedStats.experience}+
                </div>
                <div className="text-gray-300 font-medium">
                  Years Experience
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                  {animatedStats.clients}+
                </div>
                <div className="text-gray-300 font-medium">Happy Clients</div>
              </div>

              <div className="glass-effect rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                  {animatedStats.awards}+
                </div>
                <div className="text-gray-300 font-medium">Published Apps</div>
              </div>
            </div>

            {/* Skills Preview */}
            <div className="mt-8 glass-effect rounded-2xl p-6">
              <h4 className="text-xl font-bold text-white mb-4">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-3">
                {[
                  "Flutter",
                  "Dart",
                  "Firebase",
                  "REST API",
                  "Git",
                  "Android",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-teal-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-indigo-900/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default About;
