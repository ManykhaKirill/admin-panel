import { ThemeToggle } from '@/features/theme';
import { Search } from '@/features/search';

export const Header = () => {

  return (
    <header className="
      flex
      flex-row
      items-center
      justify-between
      bg-[var(--bg-layout)] 
      border-b border-[var(--border-subtle)] 
      w-full 
      px-6 py-4"
    >
      <div className="flex items-start gap-8 group cursor-pointer">
        <div className='flex gap-3'>
          <div
            className="
              w-10 h-10
              rounded-md
              border
              border-[var(--accent-primary)]
              text-[var(--accent-primary)]
              flex items-center justify-center
              font-semibold
              transition-all duration-200
              group-hover:bg-[var(--accent-primary-soft)]
            "
          >
            MA
          </div>
          <div className="flex flex-col leading-tight">
              <span className="
                text-base font-semibold
                text-[var(--text-primary)]
              ">
                Mini Admin
              </span>
            <span className="
              text-xs
              text-[var(--text-muted)]
            ">
              Admin System
            </span>
          </div>
        </div>
        <div className="flex items-start">
          <Search />
        </div>
     </div>

        <div className='flex items-end'>
          <ThemeToggle />
        </div>
    </header>
  )
};