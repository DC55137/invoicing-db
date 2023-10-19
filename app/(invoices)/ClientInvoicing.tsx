import React from "react";
import Table from "./Table";
import { mockInvoices } from "@/data/constants";

import { Invoice } from "@/types/types";

export default async function ClientInvoicing() {
  const data = await getData();
  return (
    <div>
      <Table invoices={data} />
    </div>
  );
}

//Dummy data for now.
async function getData(): Promise<Invoice[]> {
  // create 6 objects dummy data for now
  return mockInvoices;
}
