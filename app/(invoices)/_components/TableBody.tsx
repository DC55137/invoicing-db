import React from "react";

import { cn } from "@/lib/utils";
import { format } from "date-fns";

import { Invoice } from "../Table";

type TableBodyProps = {
  invoices: Invoice[];
  selectedPeople: Invoice[];
  setSelectedPeople: (people: Invoice[]) => void;
};

export default function TableBody({
  invoices,
  selectedPeople,
  setSelectedPeople,
}: TableBodyProps) {
  return (
    <tbody className="divide-y divide-gray-200 bg-white">
      {invoices.map((invoice) => (
        <tr
          key={invoice.client}
          className={
            selectedPeople.includes(invoice) ? "bg-gray-50" : undefined
          }
        >
          <td className="relative px-7 sm:w-12 sm:px-6">
            {selectedPeople.includes(invoice) && (
              <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
            )}
            <input
              type="checkbox"
              className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              value={invoice.client}
              checked={selectedPeople.includes(invoice)}
              onChange={(e) =>
                setSelectedPeople(
                  e.target.checked
                    ? [...selectedPeople, invoice]
                    : selectedPeople.filter((p) => p !== invoice)
                )
              }
            />
          </td>
          <td
            className={cn(
              "whitespace-nowrap py-4 pr-3 text-sm font-medium",
              selectedPeople.includes(invoice)
                ? "text-indigo-600"
                : "text-gray-900"
            )}
          >
            {invoice.client}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {format(invoice.createdAt, "MM/dd/yyyy")}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {format(invoice.dueDate, "MM/dd/yyyy")}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {invoice.totalAmount.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </td>
          <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
            <a href="#" className="text-indigo-600 hover:text-indigo-900">
              Edit<span className="sr-only">, {invoice.id}</span>
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
