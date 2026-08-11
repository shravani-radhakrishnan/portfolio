import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import ProjectModal from '@/components/ProjectModal';
import { 
  ArrowRight, 
  Code2, 
  Sparkles, 
  Layout as LayoutIcon, 
  Terminal, 
  Zap, 
  Globe,
  ExternalLink,
  ChevronRight,
  Database,
  Server
} from 'lucide-react';

const featuredProjects = [
  {
    id: 'love-lens-capture',
    title: 'Love Lens Capture',
    subtitle: 'Photography Portfolio & Gallery Site',
    category: 'React & Styling',
    description: 'A minimalist, responsive photography portfolio site crafted to showcase wedding, portrait, and lifestyle captures.',
    fullDescription: 'Love Lens Capture is a photography portfolio application built with React and custom styling. Integrates Google Web Fonts (Amita & Caveat), fluid responsive lightboxes, and smooth image galleries.',
    tags: ['React', 'CSS3', 'Google Fonts', 'Netlify'],
    features: ['Typography styling with Amita & Caveat', 'High-res image gallery lightbox', 'Fluid page transitions'],
    liveUrl: 'https://lovelenscapture.netlify.app/',
    githubUrl: 'https://github.com/shravani-radhakrishnan'
  },
  {
    id: 'yep-quick-decision-app',
    title: 'Yep! Quick Decision Maker',
    subtitle: 'Instant Choices for Food, Movies & Activities',
    category: 'Vite & React',
    description: 'A fun, fast decision-making web app that helps you pick what to eat, what movie to watch, or what to do next without overthinking.',
    fullDescription: 'Yep! eliminates indecision by providing instant, fun recommendations. Whether you cannot decide what food to order right now, which movie to stream tonight, or how to spend your evening, Yep! gives you a quick, effortless answer.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Netlify'],
    features: ['Instant decision algorithm for food, movies & activities', 'Vite ultra-fast build framework', 'Fun, high-energy interactive user interface'],
    liveUrl: 'https://yepapp.netlify.app/',
    githubUrl: 'https://github.com/shravani-radhakrishnan'
  },
  {
    id: 'manoj-uppuluri-ca',
    title: 'Manoj Uppuluri and Co CA',
    subtitle: 'Corporate Financial Advisory Web Portal',
    category: 'Corporate Web App',
    description: 'Corporate web platform for Chartered Accountancy firm offering tax planning, audit advisory, and corporate compliance services.',
    fullDescription: 'Structured web portal featuring online consultation booking forms, financial service breakdowns, and responsive corporate design.',
    tags: ['React', 'HTML5/CSS3', 'Corporate UX', 'Netlify'],
    features: ['Online client consultation booking form', 'Comprehensive service breakdowns', 'Mobile-first responsive corporate UI'],
    liveUrl: 'https://lovelenscapture.netlify.app/',
    githubUrl: 'https://github.com/shravani-radhakrishnan'
  }
];

const skills = [
  { name: 'React & Next.js', level: '9+ Yrs Exp', icon: Code2 },
  { name: 'Angular (13+/8)', level: '9+ Yrs Exp', icon: LayoutIcon },
  { name: 'ESRI Maps & GIS', level: 'Expert', icon: Globe },
  { name: 'Vue.js & Frontend', level: 'Certified', icon: Code2 },
  { name: 'Redux & State', level: 'Expert', icon: Terminal },
  { name: 'Node.js & Java', level: 'Advanced', icon: Server }
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <Head>
        <title>Shravani Manduva | Senior Software Developer</title>
        <meta name="description" content="Portfolio of Shravani Manduva - Senior Software Developer with 9+ years experience specializing in React, Angular, Node.js, and Enterprise Web Applications." />
      </Head>

      <main className="w-full text-primary dark:text-dark-text transition-colors duration-300">
        <Layout className="!pt-6">
          
          {/* HERO SECTION */}
          <div className="flex flex-col items-center text-center space-y-8 my-8 max-w-4xl mx-auto">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple dark:text-accent-cyan text-xs font-semibold uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Senior Software Developer • 9+ Years Professional Experience
            </motion.div>

            {/* Headline */}
            <div className="w-full">
              <AnimatedText
                text="Architecting High-Performance Enterprise Applications & Digital Products."
                className="!text-4xl sm:!text-6xl font-black tracking-tight leading-tight text-gray-900 dark:text-white"
              />
            </div>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-xl text-gray-600 dark:text-zinc-300 max-w-3xl leading-relaxed"
            >
              Hi, I'm <strong>Shravani Manduva</strong> — a Senior Software Developer with over 9 years of experience creating web applications with <strong>React, Angular, Node.js, Redux, and Cloud Technologies</strong>. Master's in Computer Science from Texas Tech University.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-2 w-full"
            >
              <Link
                href="/projects"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-accent-purple via-indigo-600 to-accent-indigo text-white font-semibold text-sm shadow-xl shadow-accent-purple/25 hover:shadow-2xl hover:shadow-accent-purple/40 hover:scale-[1.02] transition-all flex items-center gap-2"
              >
                Explore Live Projects
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/about"
                className="px-7 py-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-800 dark:text-zinc-200 font-semibold text-sm hover:bg-gray-50 dark:hover:bg-zinc-800 hover:scale-[1.02] transition-all flex items-center gap-2"
              >
                View 9+ Yrs Work Experience
              </Link>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 w-full border-t border-gray-200/80 dark:border-zinc-800/80"
            >
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
                  <span className="text-accent-purple dark:text-accent-cyan">9+</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-zinc-400 mt-1 font-medium">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
                  <span className="text-accent-purple dark:text-accent-cyan">M.S.</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-zinc-400 mt-1 font-medium">Texas Tech University</p>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
                  <span className="text-accent-purple dark:text-accent-cyan">5+</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-zinc-400 mt-1 font-medium">Live Projects</p>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
                  <span className="text-accent-purple dark:text-accent-cyan">50%</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-zinc-400 mt-1 font-medium">Bug Reduction Rate</p>
              </div>
            </motion.div>

          </div>

          {/* FEATURED LIVE PROJECTS SHOWCASE */}
          <section className="py-16 border-t border-gray-200/80 dark:border-zinc-800/80">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-xs font-bold text-accent-purple dark:text-accent-cyan uppercase tracking-widest">
                  Live Applications
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
                  Featured Client & Web Projects
                </h2>
              </div>
              <Link
                href="/projects"
                className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-purple dark:text-accent-cyan hover:underline"
              >
                View All Projects <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedProject(project)}
                  className="glass-card rounded-2xl p-6 cursor-pointer flex flex-col justify-between group transition-all hover:border-accent-purple/40 dark:hover:border-accent-cyan/40"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-purple/10 text-accent-purple dark:text-accent-cyan">
                        {project.category}
                      </span>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1 rounded text-gray-400 hover:text-accent-purple dark:hover:text-accent-cyan transition-colors"
                        title="Open Live Site"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-accent-purple dark:group-hover:text-accent-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-gray-500 dark:text-zinc-400 mb-3">
                      {project.subtitle}
                    </p>
                    
                    <p className="text-sm text-gray-600 dark:text-zinc-400 line-clamp-3 mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100 dark:border-zinc-800">
                    {project.tags.map((t, idx) => (
                      <span key={idx} className="text-[11px] font-medium px-2 py-0.5 rounded bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* SKILLS MATRIX */}
          <section className="py-16 border-t border-gray-200/80 dark:border-zinc-800/80">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-accent-purple dark:text-accent-cyan uppercase tracking-widest">
                Technical Stack
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
                Core Technologies
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="glass-pill p-5 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 group hover:border-accent-purple/50 transition-all"
                  >
                    <div className="p-3 rounded-xl bg-accent-purple/10 text-accent-purple dark:text-accent-cyan group-hover:bg-accent-purple group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-semibold text-sm text-gray-800 dark:text-zinc-200">
                      {skill.name}
                    </h4>
                    <span className="text-xs text-gray-500 dark:text-zinc-500 font-medium">
                      {skill.level}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </section>

        </Layout>
      </main>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
