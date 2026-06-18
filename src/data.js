export const profile = {
  name: 'Adri Fatwal Fiqhi',
  title: 'Mobile Developer',
  location: 'Bandung, Indonesia',
  email: 'adrifatwa31@gmail.com',
  phone: '+62 85797859312',
  github: 'https://github.com/adrifatwa',
  linkedin: 'https://linkedin.com/in/adrifatwa',
  summary: 'Mobile Developer with 4 years of experience specializing in high-traffic cross-platform applications using Flutter. Proven track record of architecting scalable enterprise solutions, optimizing app performance, and delivering robust offline-first experiences.'
}

export const experiences = [
  {
    role: 'Mobile Developer',
    company: 'PT Telkom Indonesia',
    period: 'Jan 2023 — Present',
    highlights: [
      'Engineered core modules of Diarium Super App serving thousands of TelkomGroup employees nationwide',
      'Architected features focusing on low-latency performance and complex state management',
      'Integrated secure RESTful APIs and internal microservices for real-time functionalities',
      'Spearheaded performance profiling and testing to minimize memory leaks'
    ]
  },
  {
    role: 'Freelance Mobile Developer',
    company: 'Dapen Telkom',
    period: 'Sep 2023 — May 2024',
    highlights: [
      'Developed and maintained Dapen Mobile Apps',
      'Worked with backend team for seamless app-server integration',
      'Monitored performance and implemented enhancements based on user feedback'
    ]
  },
  {
    role: 'Flutter Developer Intern',
    company: 'PT Jerbee Indonesia',
    period: 'Feb 2020 — Jul 2020',
    highlights: [
      'Self-taught Flutter/Dart through documentation',
      'Built cross-platform apps from scratch with custom UI/UX',
      'Published apps to Google Play Store'
    ]
  }
]

export const projects = [
  {
    slug: 'diarium',
    title: 'Diarium Super Apps',
    tagline: 'Enterprise HR platform for Telkom Indonesia',
    tags: ['Flutter', 'Cubit', 'REST API', 'Enterprise'],
    color: '#e63946',
    description: 'Internal app for Telkom Indonesia supporting employee activities and streamlining communication. Improved Attendance Module for accurate tracking, integrated OKR system aligning tasks with team goals, and refactored UI using reusable Flutter components.',
    role: 'Lead Mobile Developer',
    impact: 'Serving thousands of TelkomGroup employees nationwide',
    tech: ['Flutter', 'Dart', 'BLoC/Cubit', 'RESTful APIs', 'Firebase'],
    images: ['diarium/diarium-1.png', 'diarium/diarium-2.png', 'diarium/diarium-3.png', 'diarium/diarium-4.png', 'diarium/diarium-5.png', 'diarium/diarium-6.png', 'diarium/diarium-7.png', 'diarium/diarium-8.png', 'diarium/diarium-9.png']
  },
  {
    slug: 'ferizy',
    title: 'Ferizy',
    tagline: 'Nationwide ferry ticketing platform',
    tags: ['Flutter', 'Cubit', 'Payment Gateway', 'High-Traffic'],
    color: '#457b9d',
    description: 'Led the architectural revamp of a high-traffic ferry ticketing platform. Built end-to-end features for ticket searching, booking, payment gateway integration, rescheduling, and refund processing. Engineered a reusable Flutter package/module for third-party integrations.',
    role: 'Lead Architect',
    impact: 'High-traffic nationwide platform handling real-time transactions',
    tech: ['Flutter', 'Cubit', 'Payment APIs', 'Modular Architecture'],
    images: []
  },
  {
    slug: 'dapen-telkom',
    title: 'Dapen Telkom Mobile',
    tagline: 'Pension services app for Telkom retirees',
    tags: ['Flutter', 'Figma', 'Accessibility'],
    color: '#2a9d8f',
    description: 'Mobile app for Telkom pensioners providing easy access to pension information. Resolved critical login flow issues including facial recognition and token auth. Redesigned interface for senior accessibility. Built emergency contact manager and managed full deployment.',
    role: 'Sole Mobile Developer',
    impact: 'Reduced user complaints significantly through login flow fixes',
    tech: ['Flutter', 'Figma', 'Face Recognition', 'iOS/Android Deployment'],
    images: []
  },
  {
    slug: 'optimos-hr',
    title: 'OptimosHR',
    tagline: 'HR platform for employee engagement',
    tags: ['Flutter', 'HR Tech', 'Scalable'],
    color: '#e9c46a',
    description: 'HR platform centralizing employee data, announcements, and collaboration tools. Developed Attendance, Overtime, and Leave Management modules. Built for internal use with potential for multi-company expansion.',
    role: 'Mobile Developer',
    impact: 'Core HR modules serving internal company operations',
    tech: ['Flutter', 'Provider', 'REST APIs', 'Scalable Architecture'],
    images: []
  },
  {
    slug: 'knk-pos',
    title: 'KNK POS',
    tagline: 'Smart point-of-sale for hospitality',
    tags: ['Jetpack Compose', 'Computer Vision', 'Biometrics'],
    color: '#f4a261',
    description: 'Collaborative smart POS and workforce ecosystem for hospitality. Engineered biometric attendance with face detection, liveness verification, and facial recognition. Built visual checkout interface and real-time Kitchen Display System. Currently developing native mobile version with Jetpack Compose.',
    role: 'Co-Developer & Mobile Lead',
    impact: 'Multi-branch production product from scratch',
    tech: ['Jetpack Compose', 'Android', 'Computer Vision', 'KDS'],
    images: []
  },
  {
    slug: 'eazytask',
    title: 'EazyTask',
    tagline: 'Offline-first employee scheduling',
    tags: ['Flutter', 'Offline-First', 'Encryption'],
    color: '#264653',
    description: 'Enterprise admin app for employee scheduling and attendance. Built resilient offline-first experience with Provider. Integrated advanced caching and encrypted local storage for data security in low-signal environments with automatic sync.',
    role: 'Sole Developer',
    impact: 'Reliable operations in low-connectivity environments',
    tech: ['Flutter', 'Provider', 'Encrypted Storage', 'Auto-sync'],
    images: []
  },
  {
    slug: 'eazytask-kiosk',
    title: 'EazyTask Kiosk',
    tagline: 'Shared-device attendance logging',
    tags: ['Flutter', 'Kiosk Mode', 'Security'],
    color: '#6a4c93',
    description: 'Dedicated shared-device application for employee attendance logging. Established rock-solid offline-first architecture with tamper-proof security. Implemented robust caching and encrypted local storage for shared-device environments.',
    role: 'Sole Developer',
    impact: 'Tamper-proof attendance on shared devices',
    tech: ['Flutter', 'Provider', 'Kiosk Security', 'Encrypted Sync'],
    images: []
  },
  {
    slug: 'hora-app',
    title: 'Hora App',
    tagline: 'Freemium mobile HR solution',
    tags: ['Flutter', 'AdMob', 'Freemium'],
    color: '#d62828',
    description: 'Mobile HR solution with freemium model. Integrated Google AdMob for ad-based monetization while maintaining smooth UX. Implemented check-in/check-out system for employee attendance with scalable architecture.',
    role: 'Sole Developer',
    impact: 'Balanced monetization with utility in a scalable HR app',
    tech: ['Flutter', 'AdMob', 'Freemium Model', 'HR Features'],
    images: []
  }
]

export const skills = {
  'Languages': ['Dart', 'Kotlin', 'Swift'],
  'Frameworks': ['Flutter', 'SwiftUI', 'Jetpack Compose'],
  'State Management': ['BLoC/Cubit', 'Provider', 'Riverpod', 'GetX'],
  'Backend & API': ['RESTful APIs', 'GraphQL', 'Firebase'],
  'Tools': ['Git', 'GitHub Actions', 'Postman', 'Figma', 'Agile/Scrum']
}

export const education = [
  {
    title: 'Candradimuka Jabar Coding Camp',
    period: 'November 2022',
    detail: 'Graduated with predicate Master in Flutter Mobile Developer class'
  },
  {
    title: 'UIN Sunan Gunung Djati Bandung',
    period: 'September 2022',
    detail: "Bachelor's degree in Informatics — GPA 3.68"
  }
]
