import { useState } from "react";

export function useSort<T>(data: T[], key: keyof T) {
  const [sortKey, setSortKey] = useState<keyof T>(key);
  const [ascending, setAscending] = useState(true);

  const sort = (newKey: keyof T) => {
    const isSameKey = sortKey === newKey;
    const newAscending = isSameKey ? !ascending : true;
    setSortKey(newKey);
    setAscending(newAscending);

    return [...data].sort((a, b) => {
      const aValue = a[newKey];
      const bValue = b[newKey];

      if (typeof aValue === "string" && typeof bValue === "string") {
        const collator = new Intl.Collator();
        return newAscending
          ? collator.compare(aValue, bValue)
          : collator.compare(bValue, aValue)
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return newAscending ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });
  };

  return { sort, sortKey, ascending };
}