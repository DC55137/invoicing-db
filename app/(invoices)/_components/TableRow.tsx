"use client";
import { useRouter } from "next/navigation";

// components
import { fDateTimeSuffix } from "@/lib/formatTime";
import { handleCopyValue } from "@/data/iconData";

import { Folder } from "lucide-react";
import { Invoice } from "@/types/types";

// ----------------------------------------------------------------------

export default function TableRow({
  row,
  selected,
  onSelectRow,
}: {
  row: Invoice;
  selected: boolean;
  onSelectRow: (id: number) => void;
}) {
  const {
    client,
    address,
    mobile,
    email,
    id,
    status,
    createdAt,
    totalAmount,
    description,
  } = row;

  const router = useRouter();
  // States

  function handleJobLink() {
    router.push(`/edit/${id}`);
  }

  function truncateName(client: string) {
    if (client.length > 15) {
      return client.substring(0, 20) + "...";
    }
    return client;
  }
  function truncateNotes(client: string) {
    if (client.length > 50) {
      return client.substring(0, 70) + "...";
    }
    return client;
  }

  function jobFolderLocation(row: Invoice) {
    const { id, client } = row;
    const clientUpdate = client.replace(/\s/g, "");
    return `/Users/cbroofing/Library/Mobile Documents/com~apple~CloudDocs/Documents/CBRoofing/Jobs/all/${id}-${clientUpdate}`;
  }
  const jobFolderLocationString = jobFolderLocation(row);

  return (
    <>
      <tr
        className={`${
          selected ? "bg-gray-900" : "bg-gray-800"
        } h-2.5 text-ellipsis text-base text-gray-200 hover:bg-gray-900`}
      >
        <td className="px-4 py-2">
          <input
            type="checkbox"
            checked={selected}
            onChange={() => onSelectRow(row.id)}
            className=" without-ring h-4 w-4 rounded border-gray-600 bg-gray-700 text-main-600 "
          />
        </td>
        <td className="eading-5 cursor-pointer">
          <Folder
            className="inline h-6 w-6"
            onClick={() => handleCopyValue(jobFolderLocationString)}
          />
        </td>

        <td className=" px-2 py-2 leading-5">
          <button
            onClick={() => handleJobLink()}
            className="underline hover:text-slate-400"
          >
            {id}-{status}
          </button>
          <br />
          <p className="cursor-pointer" onClick={() => handleCopyValue(client)}>
            {truncateName(client)}
          </p>
        </td>
        <td
          onClick={() => handleCopyValue(address)}
          className="cursor-pointer px-2 py-2 leading-5"
        >
          <p className="">description: {truncateNotes(description)}</p>
        </td>
        <td
          onClick={() => handleCopyValue(mobile)}
          className="cursor-pointer px-2 py-2 leading-5"
        >
          {mobile ? mobile : "no No."}
        </td>
        <td
          className="cursor-pointer px-2 py-2 leading-5"
          onClick={() => handleCopyValue(email)}
        >
          ${totalAmount.toFixed(2)} <br />
          Created - {fDateTimeSuffix(createdAt)}
        </td>
      </tr>
    </>
  );
}
