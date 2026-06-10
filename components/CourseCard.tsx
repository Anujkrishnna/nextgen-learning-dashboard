'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Course } from '../types/database';
import { Code, Palette, Database, Sparkles, X, CheckCircle } from 'lucide-react';

const getIcon = (name: string) => {
  switch (name) {
    case 'Code': return <Code className="text-blue-400" size={24} />;
    case 'Palette': return <Palette className="text-pink-400" size={24} />;
    case 'Database': return <Database className="text-green-400" size={24} />;
    case 'Sparkles': return <Sparkles className="text-yellow-400" size={24} />;
    default: return <Code className="text-gray-400" size={24} />;
  }
};

// Mock multi-layer content for detailed view
const courseSyllabus: Record<string, string[]> = {
  'Next.js 15 Premium Course': ['Introduction to App Router', 'Server Components vs Client Components', 'Streaming and Suspense Architecture', 'Supabase Secure Mutations'],
  'Mastering TypeScript': ['Strict Compiler Flags & Setup', 'Advanced Discriminated Unions', 'Generics and Conditional Typing', 'Mapped Types & Utilities'],
  'Framer Motion Animations': ['Spring Physics vs Tweens', 'LayoutId Shared Elements', 'Stagger and Variants Cascading', 'Hardware Accelerated Keyframes'],
  'UI/UX Design Systems': ['Figma Primitive Tokens', 'Typography Scale Systems', 'Dark Mode Semantic Colors', 'Bento Grid Structural Planning']
};

export default function CourseCard({ course }: { course: Course }) {
  const [isOpen, setIsOpen] = useState(false);
  const progressValue = course.progress || 0;
  const modules = courseSyllabus[course.title] || ['Module 1: Setup', 'Module 2: Basics', 'Module 3: Advanced Core', 'Module 4: Deployment'];

  return (
    <>
      <motion.article
        layoutId={`card-container-${course.id}`}
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative p-6 rounded-3xl bg-[#121212] border border-zinc-800 overflow-hidden group h-full flex flex-col justify-between cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        <div className="relative z-10 w-full">
          <div className="mb-4 bg-zinc-800/50 w-fit p-3 rounded-2xl border border-zinc-700/50">
            {getIcon(course.icon_name)}
          </div>
          <h3 className="text-lg font-semibold text-zinc-100 mb-6 group-hover:text-white transition-colors">
            {course.title}
          </h3>
        </div>

        <div className="relative z-10 w-full mt-auto">
          <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressValue}%` }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="h-full bg-indigo-500 rounded-full"
            />
          </div>
          <p className="text-xs text-zinc-400 mt-3 font-medium">{progressValue}% Complete</p>
        </div>
      </motion.article>

      {/* Expanded Multi-layer Modal View */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              layoutId={`card-container-${course.id}`}
              className="w-full max-w-2xl bg-[#0e0e11] border border-zinc-800 rounded-3xl p-6 relative overflow-hidden shadow-2xl"
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                className="absolute top-4 right-4 p-2 bg-zinc-900 rounded-full border border-zinc-800 hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-zinc-200"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="bg-zinc-800/80 p-3 rounded-2xl border border-zinc-700/50">
                  {getIcon(course.icon_name)}
                </div>
                <div>
                  <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Course Syllabus</span>
                  <h2 className="text-xl font-bold text-zinc-100">{course.title}</h2>
                </div>
              </div>

              {/* Progress Tracking Bar inside layer */}
              <div className="mb-6 bg-zinc-900 p-4 rounded-2xl border border-zinc-800/50">
                <div className="flex justify-between text-xs mb-2 text-zinc-400">
                  <span>Current Completion Status</span>
                  <span className="font-bold text-indigo-400">{progressValue}%</span>
                </div>
                <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${progressValue}%` }} />
                </div>
              </div>

              {/* Syllabus Modules List */}
              <h3 className="text-sm font-medium text-zinc-400 mb-3">Interactive Modules</h3>
              <div className="space-y-2.5">
                {modules.map((module, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-zinc-900/40 border border-zinc-800/60 rounded-xl hover:border-zinc-700/50 transition-colors">
                    <CheckCircle size={16} className={i < (progressValue/25) ? "text-indigo-400" : "text-zinc-700"} />
                    <span className={`text-sm ${i < (progressValue/25) ? "text-zinc-200" : "text-zinc-500"}`}>{module}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}