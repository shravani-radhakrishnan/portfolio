import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-gray-200/60 dark:border-zinc-800/80 bg-white/50 dark:bg-dark-bg/50 backdrop-blur-md py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-sm font-medium text-gray-600 dark:text-zinc-400">
            © {new Date().getFullYear()} Shravani Manduva.
          </p>
          {/* <p className="text-xs text-gray-400 dark:text-zinc-500 mt-1">
            M.S. in Computer Science (Texas Tech University) • 9+ Years Professional Experience
          </p> */}
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-zinc-800/80 text-gray-600 dark:text-zinc-400 hover:text-accent-purple dark:hover:text-accent-cyan hover:scale-110 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/shravaniradhakrishna/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-zinc-800/80 text-gray-600 dark:text-zinc-400 hover:text-accent-purple dark:hover:text-accent-cyan hover:scale-110 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:shravanimanduva513@gmail.com"
              aria-label="Email"
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-zinc-800/80 text-gray-600 dark:text-zinc-400 hover:text-accent-purple dark:hover:text-accent-cyan hover:scale-110 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>


          <button
            onClick={scrollToTop}
            aria-label="Scroll to Top"
            className="p-2.5 rounded-xl bg-accent-purple/10 text-accent-purple dark:text-accent-cyan border border-accent-purple/20 hover:bg-accent-purple hover:text-white transition-all duration-300"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
