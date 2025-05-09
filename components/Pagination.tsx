"use client";

import React from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const visiblePages = 2;
  const pages: React.ReactNode[] = [];

  const start = Math.max(2, currentPage - visiblePages);
  const end = Math.min(totalPages - 1, currentPage + visiblePages);

  pages.push(
    <button
      key={1}
      onClick={() => onPageChange(1)}
      className={`px-3 py-1 rounded border hover:bg-lime-500 ${
        currentPage === 1
          ? "bg-violet-500 text-white"
          : "bg-white text-gray-700"
      }`}
    >
      1
    </button>
  );

  if (start > 2) {
    pages.push(<span key="start-ellipsis">...</span>);
  }

  for (let i = start; i <= end; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => onPageChange(i)}
        className={`px-3 py-1 rounded border hover:bg-lime-500 ${
          currentPage === i
            ? "bg-violet-500 text-white"
            : "bg-white text-gray-700"
        }`}
      >
        {i}
      </button>
    );
  }

  if (end < totalPages - 1) {
    pages.push(<span key="end-ellipsis">...</span>);
  }

  if (totalPages > 1) {
    pages.push(
      <button
        key={totalPages}
        onClick={() => onPageChange(totalPages)}
        className={`px-3 py-1 rounded border hover:bg-lime-500 ${
          currentPage === totalPages
            ? "bg-violet-500 text-white"
            : "bg-white text-gray-700"
        }`}
      >
        {totalPages}
      </button>
    );
  }

  return <div className="flex flex-wrap gap-2 justify-center">{pages}</div>;
}
