import { useRef } from "react";

interface Skill {
  name: string;
  icon: string;
  iconType?: "devicon" | "emoji";
}

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const skillsRow1: Skill[] = [
    { name: "Flutter", icon: "devicon-flutter-plain", iconType: "devicon" },
    { name: "Dart", icon: "devicon-dart-plain", iconType: "devicon" },
    { name: "Kotlin", icon: "devicon-kotlin-plain", iconType: "devicon" },
    { name: "Swift", icon: "devicon-swift-plain", iconType: "devicon" },
    { name: "SwiftUI", icon: "📲", iconType: "emoji" },
    { name: "RESTful APIs", icon: "🔗", iconType: "emoji" },
    { name: "GraphQL", icon: "devicon-graphql-plain", iconType: "devicon" },
  ];

  const skillsRow2: Skill[] = [
    { name: "Firebase", icon: "devicon-firebase-plain", iconType: "devicon" },
    { name: "API Integration", icon: "🔌", iconType: "emoji" },
    {
      name: "Android Studio",
      icon: "devicon-androidstudio-plain",
      iconType: "devicon",
    },
    {
      name: "GitHub Actions",
      icon: "devicon-github-original",
      iconType: "devicon",
    },
    { name: "Figma", icon: "devicon-figma-plain", iconType: "devicon" },
    { name: "Postman", icon: "📮", iconType: "emoji" },
    { name: "BLoC", icon: "🧱", iconType: "emoji" },
  ];

  const skillsRow3: Skill[] = [
    { name: "GetX", icon: "🔄", iconType: "emoji" },
    { name: "Riverpod", icon: "🌊", iconType: "emoji" },
    {
      name: "Play Store",
      icon: "devicon-googleplay-original",
      iconType: "devicon",
    },
    { name: "App Store", icon: "🍎", iconType: "emoji" },
    { name: "CI/CD", icon: "🚀", iconType: "emoji" },
    { name: "Git", icon: "devicon-git-plain", iconType: "devicon" },
    { name: "VS Code", icon: "devicon-vscode-plain", iconType: "devicon" },
  ];

  const SkillRow = ({
    skills,
    direction,
  }: {
    skills: Skill[];
    direction: "left" | "right";
  }) => (
    <div className="overflow-hidden">
      <div
        className={`flex gap-6 ${
          direction === "left" ? "animate-slide-left" : "animate-slide-right"
        }`}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex-shrink-0 glass-effect rounded-xl p-4 text-center min-w-[120px]"
          >
            <div className="text-3xl mb-2 flex justify-center items-center">
              {skill.iconType === "devicon" ? (
                <i className={`${skill.icon} colored text-4xl`}></i>
              ) : (
                <span>{skill.icon}</span>
              )}
            </div>
            <h3 className="text-sm font-semibold text-white whitespace-nowrap">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-teal-950 via-black to-gray-950"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Sliding Skills Rows */}
        <div className="space-y-8">
          <SkillRow skills={skillsRow1} direction="left" />
          <SkillRow skills={skillsRow2} direction="right" />
          <SkillRow skills={skillsRow3} direction="left" />
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
