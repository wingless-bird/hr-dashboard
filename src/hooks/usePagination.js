import { useMemo, useState, useEffect } from 'react';

export function usePagination(items, pageSize = 10) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));

  // reset to page 1 whenever the underlying (filtered/sorted) list changes
  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [items, totalPages]); // eslint-disable-line react-hooks/exhaustive-deps

  const pageItems = useMemo(
    () => items.slice((page - 1) * pageSize, page * pageSize),
    [items, page, pageSize]
  );

  return { page, setPage, totalPages, pageItems };
}