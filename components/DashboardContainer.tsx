'use client';

import { motion } from 'framer-motion';
import { Course } from '../types/database';
import CourseCard from './CourseCard';
import ActivityTile from './ActivityTile';
import { Sparkles, TrendingUp, Award, Clock } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 25 } }
};

interface ContainerProps {
  courses: Course[];
  activeTab: string;
}

export default function DashboardContainer({ courses, activeTab }: ContainerProps) {
  
  // LAYER 1: Core Main Dashboard View
  if (activeTab === 'dashboard') {
    return (
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max"
      >
        <motion.section 
          variants={itemVariants}
          whileHover={{ scale: 1.005 }}
          className="md:col-span-2 lg:col-span-3 p-8 rounded-3xl bg-gradient-to-r from-indigo-950/20 via-[#121212] to-[#121212] border border-zinc-800 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 min-h-[160px]"
        >
          <div>
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-2">
              <Sparkles size={14} /> Next-Gen Learning
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-100 tracking-tight">Welcome back, Anuj Kumar!</h2>
            <p className="text-sm text-zinc-400 mt-1">Your futuristic tech portal is fully synchronized.</p>
          </div>
          <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-2xl px-5 py-3 flex items-center gap-3 w-fit shrink-0">
            <span className="text-2xl">🔥</span>
            <div>
              <p className="text-xs text-zinc-400 font-medium">Daily Streak</p>
              <p className="text-sm font-bold text-amber-400">3 Days Active</p>
            </div>
          </div>
        </motion.section>

        <motion.div variants={itemVariants}>
          <ActivityTile />
        </motion.div>

        {courses.map((course) => (
          <motion.div key={course.id} variants={itemVariants}>
            <CourseCard course={course} />
          </motion.div>
        ))}
      </motion.div>
    );
  }

  // LAYER 2: Advanced Analytics View Subpage
  if (activeTab === 'analytics') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div className="md:col-span-3 bg-[#121212] border border-zinc-800 p-6 rounded-3xl">
          <h2 className="text-xl font-bold text-zinc-100 mb-1">Performance Overview</h2>
          <p className="text-sm text-zinc-400">Deep-dive assessment metric insights.</p>
        </div>

        {/* Analytic Cards Grid Inside Layer */}
        <div className="bg-[#121212] border border-zinc-800 p-6 rounded-3xl flex items-center gap-4">
          <div className="p-3 bg-green-500/10 text-green-400 rounded-2xl border border-green-500/20"><TrendingUp size={24} /></div>
          <div>
            <p className="text-xs text-zinc-400 font-medium">Monthly Progress Rate</p>
            <p className="text-2xl font-bold text-zinc-100">+24.8%</p>
          </div>
        </div>

        <div className="bg-[#121212] border border-zinc-800 p-6 rounded-3xl flex items-center gap-4">
          <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-2xl border border-indigo-500/20"><Clock size={24} /></div>
          <div>
            <p className="text-xs text-zinc-400 font-medium">Total Study Time</p>
            <p className="text-2xl font-bold text-zinc-100">36.5 Hours</p>
          </div>
        </div>

        <div className="bg-[#121212] border border-zinc-800 p-6 rounded-3xl flex items-center gap-4">
          <div className="p-3 bg-amber-500/10 text-amber-400 rounded-2xl border border-amber-500/20"><Award size={24} /></div>
          <div>
            <p className="text-xs text-zinc-400 font-medium">Certificates Unlocked</p>
            <p className="text-2xl font-bold text-zinc-100">2 Complete</p>
          </div>
        </div>
      </motion.div>
    );
  }

  // LAYER 3: Settings Placeholder
  return (
    <div className="bg-[#121212] border border-zinc-800 p-8 rounded-3xl text-center text-zinc-400">
      Settings module and active environment scope credentials management panel.
    </div>
  );
}