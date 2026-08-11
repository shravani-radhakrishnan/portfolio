import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import Logo from './Logo';
import { useTheme } from '@/context/ThemeContext';

const CustomLink = ({ href, title, className = "", onClick }) => {
  const router = useRouter();
  const isActive = router ? router.asPath === href || router.pathname === href : false;

  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={`${className} relative text-sm font-medium transition-colors hover:text-accent-purple ${
        isActive ? 'text-accent-purple dark:text-accent-cyan font-semibold' : 'text-gray-700 dark:text-zinc-300'
      }`}
    >
      {title}
      {isActive && (
        <motion.span
          layoutId="activeNav"
          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/70 dark:bg-dark-bg/70 border-b border-gray-200/50 dark:border-zinc-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
        
        {/* Logo & Status */}
        <div className="flex items-center space-x-4">
          <Logo />
          <div className="hidden sm:flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for work</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/projects" title="Projects" />
          <CustomLink href="/contact" title="Contact" />
        </nav>

        {/* Action Controls (Theme Toggle & CTA) */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-zinc-800/80 text-gray-700 dark:text-zinc-200 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white overflow-hidden rounded-xl bg-gradient-to-r from-accent-purple to-accent-indigo shadow-md shadow-accent-purple/20 hover:shadow-lg hover:shadow-accent-purple/40 transition-all duration-300"
          >
            <span className="flex items-center gap-1.5 z-10">
              <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
              Let's Talk
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center space-x-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-200"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-gray-700 dark:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-gray-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl px-6 py-6"
          >
            <nav className="flex flex-col space-y-4">
              <CustomLink href="/" title="Home" onClick={() => setIsOpen(false)} />
              <CustomLink href="/about" title="About" onClick={() => setIsOpen(false)} />
              <CustomLink href="/projects" title="Projects" onClick={() => setIsOpen(false)} />
              <CustomLink href="/contact" title="Contact" onClick={() => setIsOpen(false)} />
              
              <div className="pt-4 border-t border-gray-200 dark:border-zinc-800">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-accent-purple to-accent-indigo text-white font-medium text-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  Let's Talk
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;