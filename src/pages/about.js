import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import { 
  Briefcase, 
  GraduationCap, 
  CheckCircle2, 
  Code, 
  Layout as LayoutIcon, 
  Zap,
  Terminal,
  Cpu,
  Database,
  Wrench,
  Layers,
  Award,
  ShieldCheck,
  Globe,
  MapPin,
  Check
} from 'lucide-react';

const experiences = [
  {
    role: 'Senior Software Developer',
    company: 'New Brunswick Community Care',
    period: 'Oct 2024 – Present',
    description: 'Architected & developed an offline-first React Progressive Web Application (PWA) for Electronic Patient Care Reports (ePCR) used by paramedics & ambulance services across New Brunswick on Toughbook tablets.',
    highlights: [
      'Architected offline-first charting solution using IndexedDB with deferred sync under low/no network',
      'Integrated ESRI Maps & spatial location services for paramedic navigation and emergency routing',
      'Built dynamic form-driven React components for Patient ID, Assessment, Treatment, Vitals, & Transfer of Care',
      'Hybrid state management using React Context API (PCR session) & Redux Toolkit for complex forms',
      'Implemented i18n support for provincial bilingual (English/French) compliance and accessibility standards',
      'Role-based access control (RBAC) and secure authentication for Medics, Supervisors & Admins',
      'Leveraged GitHub Copilot and developed custom AI-assisted skills/workflows to automate code reviews and pull request (PR) creation, improving code quality, consistency, and developer productivity.',
      'Implemented an automated regression test suite using Playwright, covering critical ePCR workflows.',
      'Contributed to Salesforce API development by building extension Apex REST endpoints and request/response contracts to support ePCR submission and retrieval workflows.',
      'Built the ePCR interface to WCAG 2.1 AA standards, applying semantic HTML, ARIA roles and live regions, full keyboard navigation, visible focus management, and color-contrast compliance for use in bright outdoor field conditions.'

    ]
  },
  {
    role: 'UI Developer',
    company: 'Verizon',
    location: 'USA',
    period: 'Jun 2024 – Oct 2024',
    description: 'Developed scalable React and Angular UI components, configured complex state management, and optimized large-scale data presentation.',
    highlights: [
      'Managed application state using Redux Toolkit & React Hooks for multi-step form workflows',
      'Utilized Ag-Grid for high-performance rendering of data-intensive web applications',
      'Bundled TypeScript & JavaScript modules using Webpack, Babel, and ESLint',
      'Integrated RESTful APIs, participating in daily Agile sprints, code reviews, and defect tracking in JIRA',
      'Integrated GitHub Copilot to write unit tests and improve code suggestions, reducing development time.'
    ]
  },
  {
    role: 'Front End / UI Developer',
    company: 'Paychex',
    location: 'USA',
    period: 'Jul 2022 – Jun 2024',
    description: 'Architected enterprise payroll and HR management web applications using Angular 13, React, Node.js, and RxJS.',
    highlights: [
      'Developed end-to-end SPA features with Angular 13 directives, lazy loading, and RxJS streams',
      'Reduced post-release bugs by 50% using Karma & Jasmine automated unit testing',
      'Implemented modules in Java (Spring Boot) to integrate with designs and requirements.',
      'Developed and maintained Java-based RESTful microservices using Spring Boot, supporting payroll processing, employee benefits, and client onboarding modules consumed by the Angular front end.',
      'Implemented responsive web design and maintained larger stylesheets using Bootstrap.',
      'Designed relational schemas and wrote optimized SQL queries and stored procedures in MySQL / SQL Server for payroll transactions, audit trails, and reporting.'
    ]
  },
  {
    role: 'Senior Software Engineer',
    company: 'ACS Solutions',
    location: 'India',
    period: 'Mar 2021 – Jan 2022',
    description: 'Designed profile and analytics dashboard modules in the Precision Areas platform using React.js and Java backend services.',
    highlights: [
      'Improved application performance by 30% by optimizing code and reducing redundant API calls',
      'Translated business wireframes into responsive React.js components leveraging Virtual DOM & hooks',
      'Improved application performance by 30% by reducing API calls and optimizing code and also involved in API development using Java, and used RxJS operators to manage data flow and Handle HTTP requests in the UI.',
      'Developed RESTful APIs in Java using Spring Boot for the Precision Areas profile module, exposing endpoints for user profiles, preferences, and dashboard metrics consumed by the React UI.'

    ]
  },
  {
    role: 'Software Engineer (Full Time)',
    company: 'Ahex Technologies Pvt Ltd',
    location: 'India',
    period: 'May 2020 – Feb 2021',
    description: 'Engineered AI cyber-intelligence risk management applications for Allianz & ELEMENT multinational clients.',
    highlights: [
      'Reduced cyber incidents by 40% through AI risk assessment & alert workflows',
      'Implemented state management using NgRx to streamline data flow and maintain application state across multiple components.',
      'Created Java Spring Boot RESTful microservices with JWT authentication & machine learning risk algorithms',
      'Successfully orchestrated a complex workflow for case management and alert management, leading a team of 12 members. ',
      'Built Angular 8 dynamic dashboards with D3.js interactive KPI visualizations and Ag-Grid tables',
      'System-automated tasks like CSS and HTML minification were performed using the Gulp tool, and Node packages and dependencies were managed using npm.',
    ]
  },
  {
    role: 'Software Engineer (Full Time)',
    company: 'Laalsa Business Insights Pvt Ltd',
    location: 'India',
    period: 'Feb 2019 – May 2020',
    description: 'Built restaurant POS and hybrid mobile food ordering applications using Angular 7, Ionic, Node.js, MongoDB, and AWS.',
    highlights: [
      'Independently developed a range of food-related and a hybrid mobile app, using Angular 7 and the Ionic platform, along with Google Maps API Integration for live tracking of food delivery.',
      'Integrated Socket.IO for real-time order status synchronization between POS and mobile delivery app',
      'Engineered backend REST APIs with Express & Node.js, storing food imagery on Amazon S3',
      'Experience in building websites that adhere to mobile-first functionality using Bootstrap and CSS Media Queries.',
      'Architected scalable, fault-tolerant infrastructure using AWS services and Google Maps API integration'
    ]
  },
  {
    role: 'Software Engineer (Full Time)',
    company: 'Primebit solutions Pvt Ltd',
    location: 'India',
    period: 'Jun 2016 – Feb 2019',
    description: 'Built website for educational institution.SMO & SEO optimized website content, meta tags, and other on-page elements to improve search engine rankings within a short span of time.',
    highlights: [
     'Demonstrated track record in developing 2 enterprise-grade websites and web applications characterized by pixel-perfect design and seamless responsiveness utilizing HTML, JavaScript, CSS, and Bootstrap.',
     'Built server-side contact and enquiry form handling in Java using Servlets / Spring MVC, with server-side validation and JavaMail-based email notifications.',
     'Built and consumed REST APIs in Java returning JSON responses, connecting website front ends with internal data services.',
     'Designed and edited digital assets for projects using Adobe Creative Suite and Canva.'
    ]
  }
];

const education = [
  {
    degree: "Master's in Computer Science",
    institution: 'Texas Tech University',
    year: 'Graduated May 2023',
    gpa: '3.5 CGPA'
  },
  {
    degree: "Bachelor's in Computer Science and Engineering",
    institution: 'JNTUA',
    year: 'Graduated May 2016',
    gpa: '3.2 CGPA'
  }
];

const certifications = [
  {
    provider: 'Skillsoft',
    title: 'Understanding Security Threats',
    tags: ['Security', 'Threat Analysis', 'Cyber Defense']
  },
  {
    provider: 'Skillsoft',
    title: 'Building Apps using React JS & Vue JS',
    tags: ['React JS', 'Vue JS', 'Frontend Architecture']
  },
  {
    provider: 'LinkedIn Learning',
    title: 'React Hooks, Angular, SQL & Jasmine',
    tags: ['React Hooks', 'Angular', 'SQL', 'Jasmine Unit Testing']
  },
  {
    provider: 'Udemy',
    title: 'ECMAScript (Modern ES6+ JavaScript)',
    tags: ['JavaScript', 'ES6+', 'Asynchronous JS']
  },
  {
    provider: 'Google',
    title: 'Google Analytics for Beginners',
    tags: ['Analytics', 'Telemetry', 'User Insights']
  }
];

const skillCategories = [
  {
    category: 'Frontend Technologies',
    icon: Code,
    skills: [
      'HTML5', 'CSS3', 'SCSS', 'JavaScript (ES6+)', 'jQuery', 'JSON', 'D3.js', 
      'Bootstrap', 'AJAX', 'Material UI', 'AngularJS', 'Angular 13+', 'React', 
      'Vue.js', 'Redux / Redux Toolkit', 'RxJS', 'ESRI Maps', 'Ag-Grid', 'i18n'
    ]
  },
  {
    category: 'Backend, Cloud & DB',
    icon: Database,
    skills: [
      'Node.js', 'Express', 'Java', 'Spring Boot', 'GraphQL', 'AWS (S3, EC2)', 
      'MySQL', 'MySQL Server', 'MongoDB', 'IndexedDB (Offline PWA)', 'RESTful APIs', 'Microservices'
    ]
  },
  {
    category: 'IDEs, Build Tools & OS',
    icon: Terminal,
    skills: [
      'VS Code', 'Eclipse', 'Atom', 'Sublime', 'Jenkins', 'Postman', 
      'Webpack & Babel', 'Gulp', 'npm', 'Mac OS', 'Windows', 'Linux', 'Unix'
    ]
  },
  {
    category: 'Testing & Project Management',
    icon: Wrench,
    skills: [
      'Jest', 'Katalon', 'Jasmine', 'Karma', 'JIRA', 'Confluence', 
      'Agile / Scrum', 'GitHub', 'Bitbucket', 'Gitlab'
    ]
  }
];

export default function About() {
  return (
    <>
      <Head>
        <title>About & Experience | Shravani Manduva</title>
        <meta name="description" content="Professional background, 9+ years experience, certifications, education, and full skill matrix of Senior Software Developer Shravani Manduva." />
      </Head>

      <main className="w-full text-primary dark:text-dark-text transition-colors duration-300">
        <Layout className="!pt-6">
          
          {/* PAGE TITLE */}
          <div className="mb-12">
            <span className="text-xs font-bold text-accent-purple dark:text-accent-cyan uppercase tracking-widest">
              Professional Profile
            </span>
            <AnimatedText
              text="9+ Years of Building High-Performance Enterprise Applications."
              className="!text-3xl sm:!text-5xl font-black tracking-tight !text-left mt-2"
            />
          </div>

          {/* BIO & SUMMARY */}
          <div className="glass-card rounded-3xl p-8 sm:p-10 mb-16 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Shravani Manduva — Senior Software Developer
            </h3>
            
            <p className="text-gray-600 dark:text-zinc-300 text-base sm:text-lg leading-relaxed">
              Senior Software Developer with over 9 years of professional expertise in information technology and software engineering. Demonstrated ability to design and architect enterprise Progressive Web Apps (PWAs), real-time GIS spatial applications with <strong>ESRI Maps</strong>, clinical charting tools, and scalable microservices using <strong>React, Angular, Vue.js, Node.js, Redux, and Cloud Infrastructure</strong>.
            </p>

            {/* Quick Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-200/80 dark:border-zinc-800">
              <div>
                <span className="text-xs font-semibold text-accent-purple dark:text-accent-cyan uppercase">Experience</span>
                <p className="font-bold text-gray-900 dark:text-white text-base">9+ Years</p>
              </div>
              <div>
                <span className="text-xs font-semibold text-accent-purple dark:text-accent-cyan uppercase">Education</span>
                <p className="font-bold text-gray-900 dark:text-white text-base">M.S. in CS (Texas Tech)</p>
              </div>
              <div>
                <span className="text-xs font-semibold text-accent-purple dark:text-accent-cyan uppercase">Location</span>
                <p className="font-bold text-gray-900 dark:text-white text-base">USA</p>
              </div>
              <div>
                <span className="text-xs font-semibold text-accent-purple dark:text-accent-cyan uppercase">Core Specialization</span>
                <p className="font-bold text-gray-900 dark:text-white text-base">React, Angular, Node, ESRI</p>
              </div>
            </div>
          </div>

          {/* DEDICATED CERTIFICATIONS SECTION */}
          <section className="py-12 mb-16 border-t border-gray-200/80 dark:border-zinc-800/80">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 rounded-xl bg-accent-purple/10 text-accent-purple dark:text-accent-cyan">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                  Professional Certifications
                </h2>
                <p className="text-xs text-gray-500 dark:text-zinc-400 font-medium">Verified technical courses & certifications</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="glass-card rounded-2xl p-6 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 text-xs font-extrabold uppercase tracking-wider rounded-full bg-accent-purple/10 text-accent-purple dark:text-accent-cyan">
                        {cert.provider}
                      </span>
                      <ShieldCheck className="w-5 h-5 text-emerald-500" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white pt-1">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100 dark:border-zinc-800">
                    {cert.tags.map((t, i) => (
                      <span key={i} className="text-[11px] font-medium px-2 py-0.5 rounded bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* DEDICATED EDUCATION SECTION */}
          <section className="py-12 mb-16 border-t border-gray-200/80 dark:border-zinc-800/80">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 rounded-xl bg-accent-purple/10 text-accent-purple dark:text-accent-cyan">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                  Education & Academic Degrees
                </h2>
                <p className="text-xs text-gray-500 dark:text-zinc-400 font-medium">Computer Science degrees & credentials</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {education.map((edu, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent-purple/10 text-accent-purple dark:text-accent-cyan">
                      {edu.gpa}
                    </span>
                    <span className="text-xs font-semibold text-gray-500 dark:text-zinc-400">
                      {edu.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-gray-600 dark:text-zinc-300">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* TECHNICAL SKILLS MATRIX */}
          <section className="py-12 border-t border-gray-200/80 dark:border-zinc-800/80">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 rounded-xl bg-accent-purple/10 text-accent-purple dark:text-accent-cyan">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                  Full Technical Skill Matrix
                </h2>
                <p className="text-xs text-gray-500 dark:text-zinc-400 font-medium">All technologies, IDEs, databases, OS & build tools from resume</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((cat, index) => {
                const Icon = cat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    className="glass-card rounded-2xl p-6 space-y-4"
                  >
                    <div className="flex items-center gap-3 pb-3 border-b border-gray-100 dark:border-zinc-800">
                      <div className="p-2.5 rounded-xl bg-accent-purple/10 text-accent-purple dark:text-accent-cyan">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-base text-gray-900 dark:text-white">
                        {cat.category}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-semibold rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-zinc-200 border border-gray-200 dark:border-zinc-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* WORK EXPERIENCE TIMELINE */}
          <section className="py-12 border-t border-gray-200/80 dark:border-zinc-800/80">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 rounded-xl bg-accent-purple/10 text-accent-purple dark:text-accent-cyan">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                  Professional Experience
                </h2>
                <p className="text-xs text-gray-500 dark:text-zinc-400 font-medium">9+ years career timeline & project achievements</p>
              </div>
            </div>

            <div className="relative border-l-2 border-accent-purple/20 dark:border-zinc-800 ml-4 sm:ml-8 space-y-10">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="relative pl-6 sm:pl-8 group"
                >
                  <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-dark-bg border-4 border-accent-purple dark:border-accent-cyan group-hover:scale-125 transition-transform" />
                  
                  <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-semibold text-accent-purple dark:text-accent-cyan">
                          {exp.company} {exp.location ? `• ${exp.location}` : ''}
                        </p>
                      </div>
                      <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 w-fit shrink-0">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-zinc-300 leading-relaxed font-medium">
                      {exp.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-zinc-800/60">
                      {exp.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-accent-purple dark:text-accent-cyan shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

        </Layout>
      </main>
    </>
  );
}
