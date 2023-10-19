import React from "react";
import { headLabel } from "@/data/constants";

export function TableHead({
  rowCount = 0,
  numSelected = 0,
  onSelectAllRows,
}: {
  rowCount?: number;
  numSelected?: number;
  onSelectAllRows?: (checked: boolean) => void;
}) {
  return (
    <thead className="border-b border-slate-600 bg-slate-700">
      <tr>
        {onSelectAllRows && (
          <th className="w-2 px-4 py-2">
            <input
              className="border-slate-600 bg-slate-700 text-main-600"
              type="checkbox"
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={(event) => onSelectAllRows(event.target.checked)}
            />
          </th>
        )}
        <th></th>

        {headLabel.map((headCell) => (
          <th
            className={`px-4 py-2 text-slate-100 align-${
              headCell.align || "left"
            }`}
            style={{ minWidth: headCell.minWidth }}
            key={headCell.id}
          >
            {headCell.label}
          </th>
        ))}
        <th></th>
      </tr>
    </thead>
  );
}

export default TableHead;
