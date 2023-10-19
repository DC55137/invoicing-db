"use client";

import React from "react";
import { CircleDashedIcon, SearchIcon } from "lucide-react";

export default function Search({
  onFilterName,
  filterName,
  setSelected,
}: {
  onFilterName: (filterName: string) => void;
  filterName: string;
  setSelected: (selected: number[]) => void;
}) {
  return (
    <div className="flex w-full items-center bg-slate-900 px-3 py-2">
      <div className="relative w-full rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon className="h-5 w-5 text-slate-400" />
        </div>
        <input
          className="form-input my-4 block w-full rounded-md border border-slate-500 bg-slate-900 py-4 pl-10 leading-5 text-slate-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          type="text"
          value={filterName}
          onChange={(event) => {
            onFilterName(event.target.value);
            setSelected([]);
          }}
          placeholder="Search job..."
          aria-label="Search job"
        />

        <button
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          type="button"
          onClick={() => {
            onFilterName("");
            setSelected([]);
          }}
        >
          <CircleDashedIcon className="h-5 w-5 text-slate-400" />
        </button>
      </div>
    </div>
  );
}
