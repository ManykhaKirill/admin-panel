import type { FC } from 'react';
import { ChevronDown } from 'lucide-react';
import { Input } from '../Input';

interface FiltersProps {
  search: string;
  setSearch: (v: string) => void;
  userId?: number | '';
  setUserId?: (v: number | '') => void;
  users?: { id: number; name: string }[];
  disabled?: boolean;
  customStyle?: string;
}

export const Filters: FC<FiltersProps> = ({
  search,
  setSearch,
  userId,
  setUserId,
  users,
  disabled,
  customStyle
}) => {
  return (
    <div className={`${customStyle || 
    'flex flex-row lg:w-[512px] md:w-[240px]'
    }`}>
      <Input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        disabled={disabled}
        placeholder="Search..."
      />
    {users && (
      <div className="relative w-full sm:w-64">
        <select
          value={userId}
          onChange={(e) => setUserId?.(e.target.value ? Number(e.target.value) : "")}
          disabled={disabled}
          className={`
                appearance-none
                rounded-md 
                px-4 py-2
                bg-[var(--bg-surface)]
                text-[var(--text-primary)]
                border border-[var(--border-subtle)]
                focus:outline-none
                focus:border-[var(--accent-primary)]
                focus:ring-2
                focus:ring-[var(--accent-primary-soft)]
                transition-[var(--transition-base)]
                disabled:bg-[var(--bg-surface-muted)]
                disabled:text-[var(--text-muted)]
                disabled:cursor-not-allowed
                `}
        >
          <option value="">All users</option>
          {users.map((u) => (
            <option key={u.id} value={u.id}>
              {u.name}
            </option>
          ))}
        </select>
        <ChevronDown 
          size={18}
          className="pointer-events-none absolute inset-y-3 right-16 flex items-center"
        />
      </div>
    )}
    </div>
  );
};
