import { type FC, useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export const Switch: FC<{
  theme: 'light' | 'dark';
  onToggle: () => void;
}> = ({ theme, onToggle }) => {
  const [checked, setChecked] = useState(theme === 'dark');

  useEffect(() => {
    setChecked(theme === 'dark');
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => {
        setChecked(v => !v);
        onToggle();
      }}
      className="
        relative w-14 h-7
        rounded-full
        bg-[var(--bg-surface-muted)]
        border border-[var(--border-subtle)]
        flex items-center
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]
      "
    >
      <span
        className="
          absolute w-6 h-6 rounded-full
          bg-[var(--accent-primary)]
          shadow-[var(--shadow-sm)]
          transition-transform duration-300 ease-in-out
          top-[1px]
        "
        style={{
          transform: checked ? 'translateX(30px)' : 'translateX(0px)',
        }}
      />
      <Sun
        size={14}
        className="
          absolute left-1 top-1/2 -translate-y-1/2
          text-[var(--text-inverse)]
          opacity-80
        "
      />
      <Moon
        size={14}
        className="
          absolute right-1 top-1/2 -translate-y-1/2
          text-[var(--text-inverse)]
          opacity-60
        "
      />
    </button>
  );
};
