import { type FC, type ReactNode, useState } from 'react';
import { Cog, ChevronDown } from 'lucide-react';

type DropdownT = {
    title: string;
    icon?: ReactNode;
    children: ReactNode;
}

export const Dropdown: FC<DropdownT> = ({
    title,
    children
}) => {
    const [isHidden, setIsHidden] = useState<boolean>(false);

    return (
        <>
            <div 
                onClick={() => setIsHidden(!isHidden)} 
                className={`
                    flex items-center gap-2 px-3 py-2
                    rounded-md
                    transition-[var(--transition-base)]
                    text-[var(--text-inverse)]
                    cursor-pointer
                    ${isHidden ? "" : "bg-[var(--accent-primary-soft)] text-[var(--accent-primary)] font-medium"}
                    hover:bg-[var(--accent-primary-soft)]
        `}
            >
                <Cog size={20} />
                <span>{title}</span>
                <ChevronDown size={18} className='ml-auto transition-transform' transform={isHidden ? 'rotate(-90)' : 'rotate(0)'}/>
            </div>
            <div className={isHidden ? 'hidden' : 'flex flex-col gap-2 pl-4'}>
                    {children}
            </div>
        </>
    )
}