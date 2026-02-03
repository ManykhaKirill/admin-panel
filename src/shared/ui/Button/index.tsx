import { type FC, type ReactNode, type ButtonHTMLAttributes} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: ReactNode;
    onClick?: () => void;
    customStyle?: string;
    children?: ReactNode;
}

export const Button: FC<ButtonProps> = ({
    type = 'button',
    icon,
    onClick,
    customStyle,
    children
}) => {
    return (
        <button
            type={type}
            className={customStyle || 
                'h-10 items-center px-3 py-2 rounded bg-blue-600 cursor-pointer text-white hover:bg-blue-700 transition'
            }
            onClick={onClick}
        >
            {icon}
            {children}
        </button>
    )
}
