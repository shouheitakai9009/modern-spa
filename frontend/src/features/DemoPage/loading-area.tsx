import { Skeleton } from '@/components/common/Skelton';

export const LoadingArea = () => {
  return (
    <div>
      <div className="flex gap-2">
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Skeleton className="w-10 h-10 rounded-full" />
            <div className="space-y-1">
              <Skeleton className="w-[200px] h-4" />
              <Skeleton className="w-[200px] h-4" />
            </div>
          </div>
          <div className="flex items-center space-x-2 mb-3">
            <Skeleton className="w-10 h-10 rounded-full" />
            <div className="space-y-1">
              <Skeleton className="w-[200px] h-4" />
              <Skeleton className="w-[200px] h-4" />
            </div>
          </div>
          <div className="flex items-center space-x-2 mb-3">
            <Skeleton className="w-10 h-10 rounded-full" />
            <div className="space-y-1">
              <Skeleton className="w-[200px] h-4" />
              <Skeleton className="w-[200px] h-4" />
            </div>
          </div>
          <div className="flex items-center space-x-2 mb-3">
            <Skeleton className="w-10 h-10 rounded-full" />
            <div className="space-y-1">
              <Skeleton className="w-[200px] h-4" />
              <Skeleton className="w-[200px] h-4" />
            </div>
          </div>
        </div>
        <Skeleton className="h-52 w-[200px]" />
      </div>
    </div>
  );
};
