import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle, 
  Copy, 
  Check, 
  Sparkles,
  MessageSquare,
  Clock
} from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const email = 'shravanimanduva513@gmail.com';
  const phone = '972-677-8015';
  const recipientEmail = 'manduvasravani@gmail.com';


  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <>
      <Head>
        <title>Contact Me | Sravani Radhakrishnan</title>
        <meta name="description" content="Get in touch with Sravani for freelance projects, full-time roles, or technical design collaborations." />
      </Head>

      <main className="w-full text-primary dark:text-dark-text transition-colors duration-300">
        <Layout className="!pt-6">
          
          {/* Header */}
          <div className="mb-12">
            <span className="text-xs font-bold text-accent-purple dark:text-accent-cyan uppercase tracking-widest">
              Get In Touch
            </span>
            <AnimatedText
              text="Let's Build Something Exceptional Together."
              className="!text-4xl sm:!text-5xl font-black tracking-tight !text-left mt-2"
            />
            <p className="text-gray-600 dark:text-zinc-400 mt-2 max-w-2xl text-sm sm:text-base">
              Have a project in mind, a question, or want to discuss a full-time role? Send a message below or reach out directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Direct Email Card */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-4">
                <div className="p-3 rounded-2xl bg-accent-purple/10 text-accent-purple dark:text-accent-cyan w-fit">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider">Direct Email</span>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-lg font-bold text-gray-900 dark:text-white">
                      {email}
                    </p>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1.5 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 hover:text-accent-purple transition-colors"
                      title="Copy email"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Location & Availability */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-4">
                <div className="p-3 rounded-2xl bg-accent-purple/10 text-accent-purple dark:text-accent-cyan w-fit">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider">Location & Status</span>
                  <p className="text-base font-bold text-gray-900 dark:text-white mt-1">
                    Dallas, TX (Remote Friendly)
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>Open to freelance & full-time opportunities</span>
                  </div>
                </div>
              </div>

              {/* Response Time Indicator */}
              <div className="p-6 rounded-3xl bg-gradient-to-tr from-accent-purple/10 via-indigo-500/10 to-accent-cyan/10 border border-accent-purple/20 flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-white dark:bg-zinc-900 text-accent-purple dark:text-accent-cyan">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">Quick Response Time</p>
                  <p className="text-xs text-gray-500 dark:text-zinc-400">Usually responds within 24 hours</p>
                </div>
              </div>

            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-7">
              <div className="glass-card rounded-3xl p-6 sm:p-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-accent-purple dark:text-accent-cyan" />
                  Send Me a Message
                </h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 text-center rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 space-y-3"
                  >
                    <CheckCircle className="w-12 h-12 mx-auto text-emerald-500" />
                    <h4 className="text-xl font-bold">Message Sent Successfully!</h4>
                    <p className="text-sm text-gray-600 dark:text-zinc-300">
                      Thank you for reaching out. I'll review your note and get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-zinc-400 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-zinc-400 mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-zinc-400 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Project Inquiry / Job Opportunity"
                        className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-zinc-400 mb-2">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your project goals or team needs..."
                        className="w-full px-4 py-3 rounded-xl bg-white/80 dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-purple transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-purple via-indigo-600 to-accent-indigo text-white font-bold text-sm shadow-xl shadow-accent-purple/25 hover:shadow-accent-purple/40 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </Layout>
      </main>
    </>
  );
}
