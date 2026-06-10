'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardContainer from './DashboardContainer';
import { Course } from '../types/database';

export default function MainLayoutWrapper({ initialCourses }: { initialCourses: Course[] }) {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col md:flex-row p-4 md:p-6 gap-6 pb-24 md:pb-6">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 w-full max-w-7xl mx-auto">
        <DashboardContainer courses={initialCourses} activeTab={activeTab} />
      </main>
    </div>
  );
}