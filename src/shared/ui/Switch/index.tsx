import type { FC } from 'react';
import { Sun, Moon } from 'lucide-react';

export const Switch: FC<{ 
  onClick: () => void; 
  theme: 'light' | 'dark';
}> = ({
  theme,
  onClick
}) => (
    <label className="inline-flex items-center relative">
      <input 
        className="peer hidden" 
        id="toggle" 
        type="checkbox"
        checked={theme === 'dark'}
        onClick={onClick}
      />
      <div className="
        relative w-[110px] h-[50px] 
        bg-card 
        rounded-full
        border border-border
        after:absolute after:content-[''] after:w-[40px] after:h-[40px] 
        after:bg-gradient-to-r from-orange-500 to-yellow-400 
        peer-checked:after:from-zinc-900 
        peer-checked:after:to-zinc-900 
        after:rounded-full
        after:top-[5px] after:left-[5px] 
        active:after:w-[50px] peer-checked:after:left-[105px] peer-checked:after:translate-x-[-100%] 
        shadow-sm duration-300 after:duration-300 after:shadow-md" 
      />
      <Sun className='
        fill-white 
        peer-checked:opacity-60
        absolute 
        w-6 h-6 left-[14px]'
        size={24}
      />
      <Moon className='
        fill-black 
        opacity-60
        peer-checked:opacity-70
        peer-checked:fill-white 
        absolute 
        w-6 h-6 right-[12px]'
        size={24} 
      />
    </label>
  );
