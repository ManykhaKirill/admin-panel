export const UserDetailsSkeleton = () => (
  <div className="flex flex-col gap-6 animate-pulse w-1/2">
    <div
      className="
        bg-[var(--bg-surface)]
        border border-[var(--border-subtle)]
        rounded-[var(--radius-lg)]
        shadow-[var(--shadow-sm)]
        p-6
        flex items-center gap-6
      "
    >
      <div
        className="
          w-28 h-28
          rounded-full
          bg-[var(--bg-surface-muted)]
          border border-[var(--border-subtle)]
        "
      />
      <div className="flex flex-col gap-3 w-full max-w-sm">
        <div className="h-6 w-2/3 bg-[var(--bg-surface-muted)] rounded-md" />
        <div className="h-4 w-1/2 bg-[var(--bg-surface-muted)] rounded-md" />
        <div className="h-4 w-3/4 bg-[var(--bg-surface-muted)] rounded-md" />
        <div className="h-4 w-1/3 bg-[var(--bg-surface-muted)] rounded-md" />
        <div className="h-4 w-1/2 bg-[var(--bg-surface-muted)] rounded-md" />
      </div>
    </div>
  </div>
);