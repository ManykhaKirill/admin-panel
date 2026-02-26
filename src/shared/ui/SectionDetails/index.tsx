import type { FC, ReactNode } from 'react';

export const SectionDetails: FC<{
    isLoading: boolean;
    loader: ReactNode;
    children: ReactNode;
}> = ({
    isLoading,
    loader,
    children
}) => {
    
    return (
        <div className="space-y-8 h-full">
            {isLoading ? loader : children}
        </div>
    )
}