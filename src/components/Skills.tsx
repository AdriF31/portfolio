import { useState, useEffect, useRef } from "react";

interface Skill {
  name: string;
  icon: string;
  category: string;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    // Mobile Development
    { name: "Flutter", icon: "📱", category: "mobile" },
    { name: "Dart", icon: "🎯", category: "mobile" },
    { name: "Kotlin", icon: "🤖", category: "mobile" },
    { name: "Swift", icon: "🍎", category: "mobile" },
    { name: "SwiftUI", icon: "📲", category: "mobile" },

    // Backend & APIs
    { name: "RESTful APIs", icon: "🔗", category: "backend" },
    { name: "GraphQL", icon: "📊", category: "backend" },
    { name: "Firebase", icon: "🔥", category: "backend" },
    { name: "API Integration", icon: "🔌", category: "backend" },

    // Development Tools
    { name: "Android Studio", icon: "🛠️", category: "tools" },
    { name: "GitHub Actions", icon: "⚙️", category: "tools" },
    { name: "Figma", icon: "🎨", category: "tools" },
    { name: "Postman", icon: "📮", category: "tools" },

    // State Management
    { name: "BLoC", icon: "🧱", category: "state" },
    { name: "GetX", icon: "🔄", category: "state" },
    { name: "Riverpod", icon: "🌊", category: "state" },

    // Deployment
    { name: "Play Store", icon: "📱", category: "deployment" },
    { name: "App Store", icon: "🍎", category: "deployment" },
    { name: "CI/CD", icon: "🚀", category: "deployment" },
  ];

  const categories = [
    { id: "all", label: "All Skills", icon: "🚀" },
    { id: "mobile", label: "Mobile Development", icon: "📱" },
    { id: "backend", label: "Backend & APIs", icon: "⚙️" },
    { id: "tools", label: "Development Tools", icon: "🛠️" },
    { id: "state", label: "State Management", icon: "🧱" },
    { id: "deployment", label: "Deployment", icon: "🚀" },
  ];

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

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
    <section ref={sectionRef} id="skills" className="py-20 relative overflow-hidden bg-gradient-to-br from-teal-950 via-black to-gray-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white"
                  : "glass-effect text-gray-300 hover:text-white"
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`glass-effect rounded-xl p-4 hover:scale-105 transition-all duration-500 text-center ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="text-3xl mb-3">{skill.icon}</div>
              <h3 className="text-sm font-semibold text-white">{skill.name}</h3>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass-effect rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="text-xl font-bold text-white mb-2">
              Cross-Platform Development
            </h3>
            <p className="text-gray-300 text-sm">
              Expert in building apps that work seamlessly on iOS and Android
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="text-xl font-bold text-white mb-2">UI/UX Design</h3>
            <p className="text-gray-300 text-sm">
              Creating visually appealing and user-friendly mobile interfaces
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-xl font-bold text-white mb-2">
              Performance Optimization
            </h3>
            <p className="text-gray-300 text-sm">
              Ensuring high performance and responsiveness in mobile apps
            </p>
          </div>
        </div>

        {/* Education & Achievements */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Education & <span className="text-gradient">Achievements</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-effect rounded-2xl p-6">
              <h4 className="text-xl font-semibold mb-4 flex items-center text-white">
                <span className="text-2xl mr-3">🎓</span>
                Education & Certifications
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Bachelor's in Informatics (GPA 3.68)</li>
                <li>• Candradimuka Jabar Coding Camp</li>
                <li>• Flutter Mobile Developer Master</li>
                <li>• UIN Sunan Gunung Djati Bandung</li>
              </ul>
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <h4 className="text-xl font-semibold mb-4 flex items-center text-white">
                <span className="text-2xl mr-3">🎯</span>
                Achievements
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>• 3+ years mobile development experience</li>
                <li>• Multiple apps published on stores</li>
                <li>• Enterprise-level app development</li>
                <li>• Cross-platform expertise</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-teal-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-indigo-900/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Skills;
