"use client";

import React from "react";
import { Invoice } from "@/types/types";

import useTable, { getComparator, emptyRows } from "@/hooks/useTable";
import TableHead from "./_components/TableHead";
import TableRow from "./_components/TableRow";
import Search from "./_components/Search";
import Pagination from "./_components/Pagination";
import Tabs from "./_components/Tabs";
import TableEmptyRows from "./_components/TableEmptyRows";

export default function Table({ invoices }: { invoices: Invoice[] }) {
  const {
    page,
    order,
    orderBy,
    rowsPerPage,
    setPage,
    filterName,
    //
    selected,
    setSelected,
    onSelectRow,
    onSelectAllRows,
    //
    onChangeRowsPerPage,
    filterStatus,
    onChangeFilterStatus,
    handleFilterName,
    applySortFilter,
  } = useTable({ defaultOrderBy: "client" });

  const dataFiltered = applySortFilter({
    invoices,
    comparator: getComparator(order, orderBy),
    filterName,
    filterStatus,
  });

  // const handleUpdateRow = async (location) => {
  //   // prettier-ignore

  //   if (window.confirm(`are you sure you want to move to ${location}?`)) {
  //     // eslint-disable-line no-alert
  //     const sendRows = invoices.filter((row) => selected.includes(row.id))
  //     setSelected([])
  //     if (page * rowsPerPage >= dataFiltered.length) {
  //       setPage(0)
  //     }
  //     try {
  //       const res = await fetch('/api/updateRows', {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ selected, location }),
  //       })

  //       const data = await res.json()
  //       if (data.success) {
  //         toast(data.message)
  //       } else {
  //         toast(data.message)
  //         console.error(data.message)
  //       }
  //     } catch (err) {
  //       console.error(err)
  //     }
  //   }
  // };
  // const handleUpdateRowAction = async (action) => {
  //   // prettier-ignore
  //   if (window.confirm(`are you sure you want to change action?`)) {// eslint-disable-line no-alert
  //     const sendRows = invoices.filter((row) => selected.includes(row.id));
  //     setSelected([]);
  //     if (page * rowsPerPage >= dataFiltered.length) {
  //       setPage(0);
  //     }
  //     try {
  //       const res = await fetch('/api/updateRowsAction', {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ selected, action }),
  //       });

  //       const data = await res.json();
  //       if (data.success) {
  //         toast(data.message);
  //       } else {
  //         toast(data.message)
  //         console.error(data.message);
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  // };

  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto rounded-t-lg border-2 border-b-0 border-slate-700 md:overflow-visible ">
          {!filterName && (
            <Tabs
              invoices={invoices}
              filterStatus={filterStatus}
              setFilterStatus={onChangeFilterStatus}
            />
          )}
          <Search
            filterName={filterName}
            onFilterName={handleFilterName}
            setSelected={setSelected}
          />
          <div className="relative block min-w-full align-middle ">
            <table className="relative min-w-full ">
              <TableHead
                rowCount={dataFiltered.length}
                numSelected={selected.length}
                onSelectAllRows={(checked) =>
                  onSelectAllRows(
                    checked,
                    invoices.map((row) => row.id)
                  )
                }
              />
              <tbody className="">
                {dataFiltered
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: Invoice) => (
                    <TableRow
                      key={row.id}
                      row={row}
                      selected={selected.includes(row.id)}
                      onSelectRow={() => onSelectRow(row.id)}
                    />
                  ))}
                <TableEmptyRows
                  emptyRows={emptyRows(page, rowsPerPage, dataFiltered.length)}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination
        setPage={setPage}
        page={page}
        invoices={dataFiltered}
        rowsPerPage={rowsPerPage}
        onChangeRowsPerPage={onChangeRowsPerPage}
      />
    </>
  );
}
