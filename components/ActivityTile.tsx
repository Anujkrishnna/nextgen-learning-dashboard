'use client';
import { motion } from 'framer-motion';

export default function ActivityTile() {
  // Static predefined patterns jo server aur client dono par hamesha same rahenge (No Hydration Error)
  const blockColors = [
    'bg-zinc-800/40', 'bg-indigo-950', 'bg-indigo-800', 'bg-indigo-600', 'bg-indigo-400',
    'bg-zinc-800/40', 'bg-zinc-800/40', 'bg-indigo-950', 'bg-indigo-600', 'bg-zinc-800/40',
    'bg-indigo-800', 'bg-indigo-400', 'bg-zinc-800/40', 'bg-indigo-950', 'bg-indigo-800',
    'bg-zinc-800/40', 'bg-indigo-600', 'bg-indigo-400', 'bg-zinc-800/40', 'bg-indigo-950',
    'bg-indigo-950', 'bg-indigo-800', 'bg-indigo-600', 'bg-zinc-800/40', 'bg-indigo-400',
    'bg-zinc-800/40', 'bg-indigo-800', 'bg-indigo-600'
  ];

  return (
    <motion.section 
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="md:col-span-2 p-6 rounded-3xl bg-[#121212] border border-zinc-800 relative overflow-hidden flex flex-col justify-between min-h-[220px]"
    >
      <div>
        <h4 className="text-sm font-medium text-zinc-400 mb-1">Learning Consistency</h4>
        <h3 className="text-xl font-bold text-zinc-100">Activity Analytics</h3>
      </div>

      {/* Contribution Blocks Grid */}
      <div className="grid grid-flow-col grid-rows-4 gap-2 mt-4 overflow-x-auto pb-2">
        {blockColors.map((bgColor, index) => (
          <div 
            key={index} 
            className={`w-full h-8 rounded-md ${bgColor} border border-zinc-800/50 hover:border-zinc-500/30 transition-colors duration-200`}
          />
        ))}
      </div>

      <div className="flex justify-between items-center text-xs text-zinc-500 mt-2">
        <span>Less active</span>
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-zinc-800/40 rounded-sm" />
          <div className="w-2 h-2 bg-indigo-800 rounded-sm" />
          <div className="w-2 h-2 bg-indigo-400 rounded-sm" />
        </div>
        <span>More active</span>
      </div>
    </motion.section>
  );
}