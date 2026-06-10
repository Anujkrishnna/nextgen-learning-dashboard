// app/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex p-4 md:p-6 gap-6">
      {/* Sidebar Skeleton */}
      <div className="hidden md:flex w-16 lg:w-64 bg-[#121212] border border-zinc-800/50 rounded-3xl animate-pulse" />
      
      {/* Main Content Skeleton */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
        {/* Hero Tile Skeleton */}
        <div className="md:col-span-2 lg:col-span-3 h-48 bg-[#121212] border border-zinc-800/50 rounded-3xl animate-pulse" />
        
        {/* Activity Tile Skeleton */}
        <div className="md:col-span-2 lg:col-span-2 h-64 bg-[#121212] border border-zinc-800/50 rounded-3xl animate-pulse" />
        
        {/* Course Cards Skeletons */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-48 bg-[#121212] border border-zinc-800/50 rounded-3xl animate-pulse" />
        ))}
      </main>
    </div>
  );
}