export const UserCardSkeleton = () => (
  <div className="
    grid grid-cols-2 
    rounded-2xl 
    bg-card/80 
    shadow-md ring-1 
    ring-black/5 p-6 animate-pulse 
    "
  >
    <div className='flex flex-col items-center gap-2'>
      <div className="w-24 h-24 bg-border  rounded-full" />
      <div className="h-4 w-24 bg-border  rounded" />
    </div>
    <div className="flex flex-col justify-center gap-4">
      <div className="h-5 w-40 bg-border rounded" />
      <div className="h-4 w-32 bg-border rounded" />
      <div className="h-4 w-28 bg-border rounded" />
    </div>
  </div>
);