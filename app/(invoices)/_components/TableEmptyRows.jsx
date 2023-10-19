import React from "react";

export default function TableEmptyRows({ emptyRows }) {
  if (!emptyRows) {
    return null;
  }
  const rows = [];
  for (let i = 0; i < emptyRows; i++) {
    rows.push(
      <tr className="h-14" key={i * 40}>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  }

  return rows;
}
