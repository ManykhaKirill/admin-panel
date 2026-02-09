import { type FC, type ReactNode, Children } from 'react';
import { Meh } from 'lucide-react';
import { motion } from 'framer-motion';

export const Section: FC<{ name: string; children: ReactNode }> = ({
    name,
    children
}) => {
    let hasElements = Children.count(children);

    return (
        hasElements ? (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
            >
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                {children}
            </div>
            </motion.div>) : (
            <div className='
                flex flex-col items-center justify-center
                h-full
                rounded-md
                bg-[var(--bg-surface-muted)]
                text-center
                text-[var(--text-muted)]'
            >
                <Meh className='w-16 h-16 mb-3 opacity-70' />
                <span className='text-lg'>Section {name} is empty</span>
            </div>
        )
    )
}