import { useEffect } from 'react';
import { Frown } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Button } from '@/shared/ui/Button';
import { useSearchStore } from '@/features/search';

export const NotFoundPage = () => {
    const navigate = useNavigate();
    const { setDisabled } = useSearchStore();

    useEffect(() => {
        setDisabled(true);
        return () => setDisabled(false);
    },[])

    return (
        <div className='flex flex-col justify-center h-full text-center text-slate-500'>
            <Frown className='w-1/4 h-1/4 mx-auto' />
            <div className='flex flex-col items-center '>
                <span className='mb-2 p-2 text-2xl'>Page not found</span>
                <Button onClick={() => navigate('/posts', { replace: true })}>
                    Go back to Posts
                </Button>
            </div>
        </div>
    )
}