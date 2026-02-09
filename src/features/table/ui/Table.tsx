import { Edit, Trash } from 'lucide-react';
import { Button } from '@/shared/ui/Button';
 
export type Column<T> = {
  key: keyof T;
  label: string;
};


interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  isLoading?: boolean;
  isError?: boolean;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
}

export function Table<T extends Record<string, any>>({
  data,
  columns,
  isLoading,
  isError,
  onEdit,
  onDelete,
}: TableProps<T>) {

    return (
      <div  
        className="
          relative flex flex-col
          bg-[var(--bg-surface)]
          text-[var(--text-primary)]
          border border-[var(--border-subtle)]
          rounded-md
          shadow-[var(--shadow-sm)]
          p-4
          transition-[var(--transition-base)]
      ">

        {isError && <div className="text-red-600">Error loading data</div>}

        {!isError && (
          <table className="w-full border-collapse">
            <thead>
              <tr className="
              bg-[var(--bg-surface-muted)]
                text-sm
                text-[var(--text-secondary)]
              ">
                {columns.map((col) => (
                  <th 
                    key={String(col.key)} 
                    className="
                      p-4
                      border-b border-[var(--border-subtle)]
                      font-medium"
                  >
                    {col.label}
                  </th>
                ))}
                {(onEdit || onDelete) && <th className="
                      p-4
                      border-b border-[var(--border-subtle)]
                      font-medium"
                    >Actions</th>}
              </tr>
            </thead>
            <tbody>
            {isLoading ? Array.from({ length: 5 }).map((_, i) => (
              <tr key={i} className="animate-pulse">
                {Array.from({ length: columns.length + 1 }).map((_, index) => (
                  <td key={index} className="
                    p-4
                    border-b border-[var(--border-subtle)]
                    text-sm"
                  >
                    <div className='
                        h-4
                        rounded
                        bg-[var(--border-subtle)]
                        opacity-60'
                      />
                  </td>
                ))}
              </tr>
            ))
            :
            data?.map((item, idx) => (
              <tr key={idx} className="
              transition-colors 
              hover:bg-[var(--bg-surface-muted)]
              hover:shadow-[var(--shadow-md)]
              ">
              {columns.map((col) => (
                <td key={String(col.key)} className="
                  p-4
                  border-b border-[var(--border-subtle)]
                  text-sm">
                  {String(item[col.key])}
                </td>
                ))}
                {(onEdit || onDelete) && (
                <td className="
                  p-4
                  border-b border-[var(--border-subtle)]
                  text-sm">
                  <div className='flex flex-row justify-center gap-2'>
                  {onEdit && (
                    <Button
                      variant='secondary'
                      icon={<Edit size={16}/>}
                      onClick={() => onEdit(item)}
                    >
                      Edit
                    </Button>
                  )}
                  {onDelete && (
                    <Button
                      variant='danger'
                      icon={<Trash size={16}/>}
                      onClick={() => onDelete(item)}
                    >
                    Delete
                    </Button>
                  )}
                  </div>
                </td>
              )}
              </tr>
            ))}
            </tbody>
          </table>
        )}
      </div>
    );
}