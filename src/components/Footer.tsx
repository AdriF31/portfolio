const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/adri-fatwal-fiqhi',
      icon: '💼'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/adrifatwa',
      icon: '🐱'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: '🐦'
    },
    {
      name: 'Email',
      url: 'mailto:adrifatwa31@gmail.com',
      icon: '📧'
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <footer className="bg-black/95 backdrop-blur-sm border-t border-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-teal-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-900/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AF</span>
              </div>
              <h3 className="text-xl font-bold text-white">Adri Fatwal Fiqhi</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Mobile Developer with 3 years of experience building cross-platform 
              apps using Flutter.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-teal-400">📧</span>
                <a 
                  href="mailto:adrifatwa31@gmail.com" 
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
                >
                  adrifatwa31@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-teal-400">📞</span>
                <a 
                  href="tel:+6285797859312" 
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
                >
                  (+62) 85797859312
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-teal-400">📍</span>
                <span className="text-gray-300">Bandung, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to get notified about my latest projects and articles
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-medium rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {currentYear} Adri Fatwal Fiqhi. All rights reserved. Built with ❤️ using React & Tailwind CSS.
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-teal-400 text-sm transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-teal-400 text-sm transition-colors duration-300"
            >
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-400 hover:text-teal-400 text-sm transition-all duration-300 hover:scale-105"
            >
              <span>Back to Top</span>
              <span className="transform rotate-180">⬇️</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 flex items-center justify-center"
        title="Back to Top"
      >
        <span className="transform rotate-180 text-lg">⬇️</span>
      </button>
    </footer>
  )
}

export default Footer