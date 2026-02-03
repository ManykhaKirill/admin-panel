import { type FC, type ReactNode, useState } from 'react';
import { ChevronDown } from 'lucide-react';

type DropdownT = {
    title: string;
    icon?: ReactNode;
    children: ReactNode;
}

export const Dropdown: FC<DropdownT> = ({
    title,
    children
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <div 
                onClick={() => setIsOpen(!isOpen)} 
                className={`${isOpen ? 'text-sidebar-text' : 'text-sidebar-active-text'}
                flex items-center text-lg gap-2 px-3 py-2 
                rounded-md transition-colors cursor-pointer 
                hover:bg-sidebar-hover hover:text-sidebar-active-text`}
            >
                <ChevronDown size={18} className='' transform={isOpen ? 'rotate(-90)' : 'rotate(0)'}/>
                <span>{title}</span>
            </div>
            <div className={isOpen ? 'hidden' : 'flex flex-col'}>
                    {children}
            </div>
        </>
    )
}