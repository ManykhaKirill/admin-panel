export const CommentCardSkeleton = () => (
        <div className="flex flex-column items-center bg-white shadow rounded-xl p-4 animate-pulse space-y-3 px-4 gap-4">
            <div className='flex w-10 h-10 bg-slate-200 rounded-full' />
            <div className="flex flex-col w-full gap-1">
                <div className="h-4 w-1/3 bg-slate-200 rounded" />
                <div className="h-3 w-28 bg-slate-200 rounded" />
                <div className="h-3 w-1/2 bg-slate-200 rounded" />
            </div>
        </div>
);