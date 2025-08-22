import { useState, useEffect } from 'react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Mobile Developer & Flutter Developer'
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gradient-to-br from-black via-gray-900 to-teal-950">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-teal-900/30 rounded-full blur-xl floating-animation"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-indigo-900/30 rounded-full blur-xl floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-violet-900/30 rounded-full blur-xl floating-animation" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-teal-800/30 rounded-full blur-xl floating-animation" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="text-gradient block">Adri Fatwal Fiqhi</span>
          </h1>
          
          <div className="text-xl lg:text-2xl text-teal-200 mb-6 h-8">
            {displayText}
            <span className="animate-pulse">|</span>
          </div>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            Mobile Developer with 3 years of experience building cross-platform apps using Flutter. 
            Passionate about learning new technologies and creating high-quality, user-focused solutions.
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
          <div className="flex justify-center lg:justify-start space-x-6 mt-8">
            <a
              href="https://github.com/adrifatwa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/adrifatwalfiqhi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:adrifatwa31@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.9.732-1.636 1.636-1.636h.749L12 10.855l9.615-7.034h.749c.904 0 1.636.732 1.636 1.636z"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end mb-8 lg:mb-0">
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-teal-400 via-cyan-500 to-slate-600 p-2">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-teal-200 to-cyan-200 rounded-full flex items-center justify-center text-6xl font-bold text-teal-800">
                  JD
                </div>
              </div>
            </div>
            {/* Floating decorative elements around image */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full floating-animation"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full floating-animation" style={{animationDelay: '3s'}}></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-red-400 rounded-full floating-animation" style={{animationDelay: '1.5s'}}></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero