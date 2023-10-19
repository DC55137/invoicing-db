"use client";

import { useState } from "react";
import { Invoice } from "@/types/types";

interface UseTableProps {
  defaultDense?: boolean;
  defaultOrderBy?: string;
  defaultOrder?: "asc" | "desc";
  defaultCurrentPage?: number;
  defaultRowsPerPage?: number;
  defaultSelected?: number[];
}

export default function useTable({
  defaultDense = true,
  defaultOrderBy = "client",
  defaultOrder = "asc",
  defaultCurrentPage = 0,
  defaultRowsPerPage = 5,
  defaultSelected = [],
}: UseTableProps = {}) {
  const [dense, setDense] = useState<boolean>(defaultDense);
  const [orderBy, setOrderBy] = useState<string>(defaultOrderBy);
  const [order, setOrder] = useState<"asc" | "desc">(defaultOrder);
  const [page, setPage] = useState<number>(defaultCurrentPage);
  const [rowsPerPage, setRowsPerPage] = useState<number>(defaultRowsPerPage);
  const [selected, setSelected] = useState<number[]>(defaultSelected);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterName, setFilterName] = useState<string>("");

  function onChangeFilterStatus(status: string) {
    setPage(0);
    setFilterStatus(status);
  }

  const handleFilterName = (filterName: string) => {
    setPage(0);
    setFilterName(filterName);
  };

  const onSelectRow = (id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const onSelectAllRows = (checked: boolean, newSelecteds: number[]) => {
    if (checked) {
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const onChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const onChangeRowsPerPage = (rowsPerPage: number) => {
    setPage(0);
    setRowsPerPage(rowsPerPage);
  };

  const onChangeDense = (event: any) => {
    setDense(event.target.checked);
  };

  function applySortFilter({
    invoices,
    comparator,
    filterName,
    filterStatus,
  }: ComparatorProps) {
    const stabilizedThis = invoices.map((el: Invoice, index: number) => [
      el,
      index,
    ]);
    stabilizedThis.sort((a: any, b: any) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    invoices = stabilizedThis.map((el: any) => el[0]);
    if (filterName) {
      invoices = invoices.filter(
        (item) =>
          item.client.toLowerCase().indexOf(filterName.toLowerCase()) !== -1 ||
          item.mobile
            .replace(/\s/g, "")
            .toLowerCase()
            .indexOf(filterName.replace(/\s/g, "").toLowerCase()) !== -1 ||
          item.address.toLowerCase().indexOf(filterName.toLowerCase()) !== -1 ||
          item.email.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
      );
    } else if (filterStatus !== "all") {
      invoices = invoices.filter((item) => item.status === filterStatus);
    }
    return invoices;
  }

  return {
    dense,
    order,
    page,
    setPage,
    orderBy,
    rowsPerPage,
    filterStatus,
    filterName,
    onChangeFilterStatus,
    selected,
    setSelected,
    onSelectRow,
    setRowsPerPage,
    onSelectAllRows,
    onChangePage,
    onChangeDense,
    onChangeRowsPerPage,
    applySortFilter,
    handleFilterName,
  };
}

interface ComparatorProps {
  invoices: Invoice[];
  comparator: (a: any, b: any) => number;
  filterName: string;
  filterStatus: string;
}

export function descendingComparator(a: any, b: any, orderBy: string): number {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(
  order: "asc" | "desc",
  orderBy: string
): (a: any, b: any) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function emptyRows(
  page: number,
  rowsPerPage: number,
  arrayLength: number
): number {
  return Math.max(0, (1 + page) * rowsPerPage - arrayLength);
}
