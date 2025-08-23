import { useState, useEffect } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Mobile Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gradient-to-br from-black via-gray-900 to-teal-950"
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-teal-900/30 rounded-full blur-xl floating-animation"></div>
        <div
          className="absolute top-40 right-20 w-32 h-32 bg-indigo-900/30 rounded-full blur-xl floating-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-24 h-24 bg-violet-900/30 rounded-full blur-xl floating-animation"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-40 right-10 w-16 h-16 bg-teal-800/30 rounded-full blur-xl floating-animation"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient block">Adri Fatwal Fiqhi</span>
          </h1>

          <div className="text-xl lg:text-2xl text-teal-200 mb-6 h-8">
            {displayText}
            <span className="animate-pulse">|</span>
          </div>

          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            Hey there! 👋 I'm a Mobile Developer who loves crafting awesome apps
            with Flutter. After 3 years of bringing ideas to life, I'm still
            excited to explore new tech and build cool stuff that people love!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </button>
            <button
              onClick={scrollToProjects}
              className="border-2 border-teal-400 text-teal-400 px-8 py-3 rounded-full font-semibold hover:bg-teal-400 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
          </div>

          {/* Social Links */}
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end mb-8 lg:mb-0">
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-teal-400 via-cyan-500 to-slate-600 p-2">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}avatar.png`} 
                  alt="Adri Fatwal Fiqhi" 
                  className="w-full h-full object-cover object-center rounded-full"
                />
              </div>
            </div>
            {/* Floating decorative elements around image */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full floating-animation"></div>
            <div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full floating-animation"
              style={{ animationDelay: "3s" }}
            ></div>
            <div
              className="absolute top-1/2 -left-8 w-4 h-4 bg-red-400 rounded-full floating-animation"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
