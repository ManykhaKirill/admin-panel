import { ThemeToggle } from '@/features/theme';
import { Search } from '@/features/search';

export const Header = () => {

  return (
    <header className="bg-card shadow w-full px-6 py-4">
      <div className='flex flex-row justify-between'>
          <Search />
          <ThemeToggle />
      </div>
    </header>
  )
};