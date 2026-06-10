'use client';

import { motion } from 'framer-motion';
import { Home, BookOpen, BarChart2, Settings } from 'lucide-react';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'analytics', label: 'Analytics', icon: BarChart2 },
  { id: 'settings', label: 'Settings', icon: Settings },
];

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <>
      {/* Desktop & Tablet Sidebar */}
      <nav className="hidden md:flex flex-col items-center lg:items-start w-20 lg:w-64 bg-[#0c0c0e] border border-zinc-800/80 rounded-3xl p-4 h-[calc(100vh-2rem)] sticky top-4">
        <div className="flex items-center gap-3 px-3 mb-8 mt-2">
          <div className="w-8 h-8 rounded-xl bg-indigo-500 flex items-center justify-center font-bold text-white">N</div>
          <span className="hidden lg:block font-bold text-lg tracking-wider bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">NEXUS</span>
        </div>

        <ul className="space-y-2 w-full flex-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <li key={item.id} className="relative w-full">
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-center lg:justify-start gap-4 px-4 py-3.5 rounded-2xl text-sm font-medium transition-colors relative z-10 ${
                    isActive ? 'text-indigo-400' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <Icon size={20} />
                  <span className="hidden lg:block">{item.label}</span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="fixed bottom-4 left-4 right-4 z-50 md:hidden bg-[#0c0c0e]/90 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-2 flex justify-around items-center shadow-xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`p-3 rounded-xl relative ${isActive ? 'text-indigo-400' : 'text-zinc-500'}`}
            >
              <Icon size={20} />
              {isActive && (
                <motion.div
                  layoutId="activeIndicatorMobile"
                  className="absolute inset-0 bg-indigo-500/10 rounded-xl -z-10"
                />
              )}
            </button>
          );
        })}
      </nav>
    </>
  );
}