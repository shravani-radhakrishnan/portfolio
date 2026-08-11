import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden my-8"
        >
          {/* Header Banner */}
          <div className="relative h-64 sm:h-80 w-full bg-gradient-to-tr from-accent-purple via-indigo-600 to-accent-cyan p-8 flex flex-col justify-end">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/30 text-white hover:bg-black/60 transition-colors backdrop-blur-md"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 mb-2">
              {project.category}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              {project.title}
            </h2>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
                Overview
              </h3>
              <p className="text-gray-700 dark:text-zinc-300 leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Key Features */}
            {project.features && (
              <div>
                <h3 className="text-sm font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-3">
                  Key Deliverables & Highlights
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-accent-purple dark:text-accent-cyan shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4" /> Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-zinc-200 border border-gray-200 dark:border-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="p-6 bg-gray-50 dark:bg-zinc-950 border-t border-gray-200 dark:border-zinc-800 flex items-center justify-end gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-300 dark:border-zinc-700 text-sm font-semibold text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
              >
                <Github className="w-4 h-4" /> Code Repository
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-purple to-accent-indigo text-white text-sm font-semibold shadow-lg shadow-accent-purple/20 hover:opacity-95 transition-opacity"
              >
                <ExternalLink className="w-4 h-4" /> View Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
