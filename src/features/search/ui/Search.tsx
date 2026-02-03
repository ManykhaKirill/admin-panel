import { useState, useEffect } from 'react';
import { Filters } from '@/shared/ui/Filters';
import { useSearchStore } from '../model/store';
import { useDebouncedValue } from "@/shared/lib";

export const Search = () => {
    const { query, setQuery, disabled } = useSearchStore();
    const [inputValue, setInputValue] = useState(query);
    const debounced = useDebouncedValue(inputValue, 300);

    useEffect(() => {
        if(!disabled) setQuery(debounced);
    }, [disabled, debounced, setQuery]);

    return (
        <Filters
            search={inputValue}
            setSearch={setInputValue}
            disabled={disabled}
        />
    )
}