import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import ProjectModal from '@/components/ProjectModal';
import { ExternalLink, Github, Filter } from 'lucide-react';

const showcaseProjects = [
  {
    id: 'love-lens-capture',
    title: 'Love Lens Capture',
    subtitle: 'Photography Portfolio & Gallery Website',
    category: 'React & Styling',
    description: 'A beautiful, minimalist photography portfolio site crafted to present wedding, lifestyle, and portrait captures with fluid gallery transitions.',
    fullDescription: 'Love Lens Capture is a client project designed for professional photographers. Features Google Web Fonts (Amita & Caveat), fluid responsive photo grid galleries, custom lightboxes, and elegant contact booking flows.',
    tags: ['React', 'CSS3', 'Google Fonts', 'Netlify', 'Responsive Layout'],
    features: [
      'Custom typography integration (Amita & Caveat fonts)',
      'High-resolution responsive image gallery lightbox',
      'Fluid page transitions & smooth scrolling',
      'Deployed on Netlify with zero build latency'
    ],
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
    tags: ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'Netlify'],
    features: [
      'Instant decision algorithm for food, movies & activities',
      'Vite-powered ultra-fast frontend build engine',
      'Fun, high-energy interactive user interface',
      'Mobile-first responsive UI built with Tailwind CSS'
    ],
    liveUrl: 'https://yepapp.netlify.app/',
    githubUrl: 'https://github.com/shravani-radhakrishnan'
  },
  {
    id: 'shravani-portfolio',
    title: 'Manduva Sravani Personal Portfolio',
    subtitle: 'Modern Web Developer Portfolio',
    category: 'React & Styling',
    description: 'Personal web developer portfolio showcasing frontend achievements, interactive project showcases, and personal brand identity.',
    fullDescription: 'A clean, dark/light theme web developer portfolio built with React and custom styling. Designed to highlight technical skills, client projects, and software engineering capabilities.',
    tags: ['React', 'CSS3', 'JavaScript', 'Netlify', 'UX Design'],
    features: [
      'Interactive theme & smooth section scrolling',
      'Custom project showcase cards & modal views',
      'Clean contact form & social link integration'
    ],
    liveUrl: 'https://manduvasravani.netlify.app/',
    githubUrl: 'https://github.com/shravani-radhakrishnan'
  },
  {
    id: 'manoj-uppuluri-ca',
    title: 'Manoj Uppuluri and Co CA Website',
    subtitle: 'Corporate Financial & Audit Advisory Portal',
    category: 'Corporate Web App',
    description: 'Professional corporate web platform for Chartered Accountancy firm offering tax planning, audit advisory, and corporate compliance services.',
    fullDescription: 'Designed and developed a corporate web portal for Manoj Uppuluri and Co CA. Features clear service breakdowns, tax calculators, consultation booking forms, and compliance updates for client businesses.',
    tags: ['React', 'HTML5/CSS3', 'Corporate UX', 'Responsive Design'],
    features: [
      'Structured financial & audit services breakdown',
      'Online client consultation booking form',
      'Mobile-first responsive corporate UI',
      'SEO optimized meta tags & fast loading'
    ],
    liveUrl: 'https://lovelenscapture.netlify.app/',
    githubUrl: 'https://github.com/shravani-radhakrishnan'
  },
  {
    id: 'ionic-weather-app',
    title: 'Ionic Mobile Weather Application',
    subtitle: 'Cross-Platform Mobile Weather Telemetry App',
    category: 'Ionic & Mobile',
    description: 'Cross-platform mobile application delivering real-time weather forecasts, temperature telemetry, and interactive location radar.',
    fullDescription: 'Built using the Ionic framework and Angular/JavaScript. Integrates weather forecasting APIs to display multi-day weather predictions, humidity, wind velocity, and location-based auto-detection.',
    tags: ['Ionic Framework', 'Angular', 'TypeScript', 'Weather API', 'GitHub Open Source'],
    features: [
      'Real-time location-based weather telemetry',
      '5-day & hourly forecast visualizations',
      'Cross-platform mobile UI (iOS & Android compatible)',
      'Open-source repository on GitHub'
    ],
    liveUrl: 'https://github.com/shravani-radhakrishnan/weather',
    githubUrl: 'https://github.com/shravani-radhakrishnan/weather'
  }
];

const categories = ['All', 'React & Styling', 'Vite & React', 'Corporate Web App', 'Ionic & Mobile'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All' 
    ? showcaseProjects 
    : showcaseProjects.filter(p => p.category === activeCategory);

  return (
    <>
      <Head>
        <title>Projects Showcase | Shravani Manduva</title>
        <meta name="description" content="Explore live web applications built by Shravani Manduva including Love Lens Capture, Yep! Quick Decision Maker, Manoj Uppuluri CA, and Ionic Weather." />
      </Head>

      <main className="w-full text-primary dark:text-dark-text transition-colors duration-300">
        <Layout className="!pt-6">
          
          {/* Header */}
          <div className="mb-10 text-center sm:text-left">
            <span className="text-xs font-bold text-accent-purple dark:text-accent-cyan uppercase tracking-widest">
              Live Showcase
            </span>
            <AnimatedText
              text="Featured Client Projects & Web Applications."
              className="!text-4xl sm:!text-5xl font-black tracking-tight !text-left mt-2"
            />
            <p className="text-gray-600 dark:text-zinc-400 mt-2 max-w-3xl text-sm sm:text-base">
              Explore live web applications including photography portfolios, quick decision tools, corporate portals, and mobile apps.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-gray-200/80 dark:border-zinc-800/80">
            <span className="text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter Category:
            </span>
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive 
                      ? 'bg-gradient-to-r from-accent-purple to-accent-indigo text-white shadow-md shadow-accent-purple/20' 
                      : 'bg-white/60 dark:bg-zinc-900/60 text-gray-600 dark:text-zinc-400 hover:bg-gray-100 dark:hover:bg-zinc-800 border border-gray-200/80 dark:border-zinc-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(project)}
                  className="glass-card rounded-3xl p-6 flex flex-col justify-between cursor-pointer group hover:border-accent-purple/50 dark:hover:border-accent-cyan/50 transition-all hover:shadow-2xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-purple/10 text-accent-purple dark:text-accent-cyan">
                        {project.category}
                      </span>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1 rounded text-gray-400 hover:text-accent-purple dark:hover:text-accent-cyan transition-colors"
                        title="Open Live App"
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

                  <div className="space-y-4 pt-4 border-t border-gray-100 dark:border-zinc-800">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((t, idx) => (
                        <span key={idx} className="text-[11px] font-medium px-2 py-0.5 rounded bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-400">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="text-xs font-semibold text-accent-purple dark:text-accent-cyan flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Explore Project Details →
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </Layout>
      </main>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
