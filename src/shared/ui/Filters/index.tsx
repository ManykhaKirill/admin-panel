import type { FC } from 'react';
import { ChevronDown } from 'lucide-react';

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
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        disabled={disabled}
        placeholder="Search..."
        className={`
            w-full
            rounded-xl
            border border-border
            px-4 py-2
            ${disabled ? 'bg-gray-200' : 'card'} 
            shadow-sm
            focus:outline-none
            focus:ring-2 focus:ring-primary-hover focus:border-primary-hover
            placeholder-text-muted
            transition
            cursor-card
            `}
      />
    {users && (
      <div className="relative w-full sm:w-64">
        <select
          value={userId}
          onChange={(e) => setUserId?.(e.target.value ? Number(e.target.value) : "")}
          disabled={disabled}
          className={`
                appearance-none
                rounded-xl 
                border border-gray-200
                px-4 py-2
               ${disabled ? 'bg-gray-200' : 'bg-white'} 
                shadow-sm
                focus:outline-none 
                focus:ring-2 focus:ring-blue-400 focus:border-blue-400
                transition
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
