"use client";

import React from "react";
import clsx from "clsx";
import { Invoice } from "@/types/types";

export default function Tabs({
  invoices,
  filterStatus,
  setFilterStatus,
}: {
  invoices: Invoice[];
  filterStatus: string;
  setFilterStatus: (filterStatus: string) => void;
}) {
  const getLengthByStatus = (stage: string) =>
    invoices.filter((item) => item.status === stage).length;

  const TABS = [
    {
      value: "all",
      label: "All",
      color: "text-yellow-600 border-yellow-500 bg-yellow-200",
      colorBorder: "border-yellow-500    text-white",
      count: invoices.length,
    },
    {
      value: "draft",
      label: "Draft",
      color: "text-yellow-600 border-yellow-500 bg-yellow-400",
      colorBorder: "border-yellow-500  text-white ",
      count: getLengthByStatus("draft"),
    },
    {
      value: "paid",
      label: "Paid",
      color: "text-yellow-600 border-yellow-500 bg-yellow-200",
      colorBorder: "border-yellow-500   text-white",
      count: getLengthByStatus("paid"),
    },
    {
      value: "cancelled",
      label: "Cancelled",
      color: "text-green-600 border-green-500 bg-green-200",
      colorBorder: "border-green-500  text-white ",
      count: getLengthByStatus("cancelled"),
    },
    {
      value: "overdue",
      label: "Overdue",
      color: "text-blue-600 border-blue-500 bg-blue-200",
      colorBorder: "border-blue-500    text-white",
      count: getLengthByStatus("overdue"),
    },
  ];

  return (
    <>
      <div className="px-4 sm:px-6 md:hidden lg:px-8">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-slate-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          {TABS.map((tab, index) => (
            <option key={index} value={tab.value}>
              {tab.label}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden rounded-t-md border border-slate-700 bg-slate-700 md:block">
        <div className="mx-2 ">
          <nav className="flex" aria-label="Tabs">
            {TABS.map((tab, index) => (
              // button with a variable width according to the content
              <button
                key={index}
                className={clsx(
                  tab.value === filterStatus && tab.colorBorder,
                  "flex flex-1 whitespace-nowrap border-b-4 px-2 py-2 text-sm font-medium text-slate-100  transition-all duration-300 ease-in-out",
                  tab.value !== filterStatus &&
                    "border-transparent opacity-50 hover:border-slate-700 hover:text-slate-200 hover:opacity-80"
                )}
                onClick={() => setFilterStatus(tab.value)}
              >
                {tab.label}{" "}
                <div
                  className={clsx(
                    tab.color,
                    "mx-1 rounded-md ",
                    tab.count > 10 ? "px-1" : "px-2"
                  )}
                >
                  {tab.count}
                </div>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
