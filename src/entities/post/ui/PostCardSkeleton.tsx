import { Card } from '@/shared/ui/Card';

export const PostCardSkeleton = () => (
  <Card className="p-6 animate-pulse">
    <div className="flex flex-col gap-4">
      <div className="h-5 w-3/4 rounded bg-[var(--border-subtle)]" />
      <div className="space-y-2">
        <div className="h-4 w-full rounded bg-[var(--border-subtle)]" />
        <div className="h-4 w-5/6 rounded bg-[var(--border-subtle)]" />
      </div>
      <div className="h-4 w-32 rounded bg-[var(--border-subtle)]" />
    </div>
  </Card>
);
