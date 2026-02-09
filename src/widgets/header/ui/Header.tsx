import { ThemeToggle } from '@/features/theme';
import { Search } from '@/features/search';

export const Header = () => {

  return (
    <header className="
      bg-[var(--bg-layout)] 
      border-b border-[var(--border-subtle)] 
      w-full 
      px-6 py-4"
    >
      <div className='flex flex-row justify-between'>
          <Search />
          <ThemeToggle />
      </div>
    </header>
  )
};