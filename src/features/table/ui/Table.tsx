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
      <div className="relative flex flex-col text-gray-700 bg-card shadow-md rounded-lg bg-clip-border">

        {isError && <div className="text-red-600">Error loading data</div>}

        {!isError && (
          <table className="w-full border-collapse bg-card rounded shadow-sm">
            <thead>
              <tr className="bg-table-header-bg text-left text-sm text-table-text-secondary">
                {columns.map((col) => (
                  <th 
                    key={String(col.key)} 
                    className="p-4 border-b border-border"
                  >
                    {col.label}
                  </th>
                ))}
                {(onEdit || onDelete) && <th className="p-4 border-b border-border text-center">Actions</th>}
              </tr>
            </thead>
            <tbody>
            {isLoading ? Array.from({ length: 5 }).map((_, i) => (
              <tr key={i} className="animate-pulse">
                {Array.from({ length: columns.length + 1 }).map((_, index) => (
                  <td key={index} className="p-4 border-b border-border">
                    <div className='h-4 bg-slate-200 rounded'/>
                  </td>
                ))}
              </tr>
            ))
            :
            data?.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50">
              {columns.map((col) => (
                <td key={String(col.key)} className="p-4 border-b border-border">{String(item[col.key])}</td>
                ))}
                {(onEdit || onDelete) && (
                <td className="p-4 border-b border-border text-left space-x-2">
                  <div className='flex flex-row justify-center gap-2'>
                  {onEdit && (
                    <Button
                      icon={<Edit size={16}/>}
                      customStyle="
                      flex items-center
                      gap-1 px-3 py-1 
                      rounded 
                      bg-yellow-500 
                      text-white 
                      hover:bg-yellow-600
                      cursor-pointer
                      "
                      onClick={() => onEdit(item)}
                    >
                      Edit
                    </Button>
                  )}
                  {onDelete && (
                    <Button
                      icon={<Trash size={16}/>}
                      customStyle="
                      flex items-center 
                      gap-1 px-3 py-1 
                      rounded 
                      bg-red-500 
                      text-white 
                      hover:bg-red-600
                      cursor-pointer
                      "
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