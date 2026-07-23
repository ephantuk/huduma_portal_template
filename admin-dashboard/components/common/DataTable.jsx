"use client";

import { useMemo, useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";

export default function DataTable({
  columns,
  rows,
  searchKeys = [],
  pageSize = 8,
  rowClassName,
  onRowClick,
  emptyMessage = "No records found.",
}) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (!search || searchKeys.length === 0) return rows;
    const q = search.toLowerCase();
    return rows.filter((row) => searchKeys.some((key) => String(row[key] ?? "").toLowerCase().includes(q)));
  }, [rows, search, searchKeys]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const paged = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div>
      {searchKeys.length > 0 ? (
        <div className="mb-3" style={{ maxWidth: 320 }}>
          <Form.Control
            type="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            aria-label="Search table"
          />
        </div>
      ) : null}
      <div className="table-responsive">
        <Table hover className="align-middle mb-0">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="text-secondary small text-uppercase">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paged.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="text-center text-secondary py-4">
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              paged.map((row, i) => (
                <tr
                  key={row.id ?? i}
                  className={[onRowClick ? "cursor-pointer" : "", rowClassName ? rowClassName(row) : ""].join(" ")}
                  onClick={onRowClick ? () => onRowClick(row) : undefined}
                >
                  {columns.map((col) => (
                    <td key={col.key}>{col.render ? col.render(row) : row[col.key]}</td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
      {totalPages > 1 ? (
        <Pagination className="mb-0 mt-3">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Pagination.Item key={p} active={p === currentPage} onClick={() => setPage(p)}>
              {p}
            </Pagination.Item>
          ))}
        </Pagination>
      ) : null}
    </div>
  );
}
