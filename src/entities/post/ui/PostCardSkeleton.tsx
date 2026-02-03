export const PostCardSkeleton = () => (
  <div className="rounded-2xl bg-card/80 shadow-md ring-1 ring-black/5 p-6 animate-pulse flex flex-col gap-4">
    <div className="h-5 w-3/4 bg-border rounded" />
    <div className="space-y-2">
      <div className="h-4 w-full bg-border rounded" />
      <div className="h-4 w-5/6 bg-border rounded" />
    </div>
    <div className="h-4 w-32 bg-border rounded" />
  </div>
);