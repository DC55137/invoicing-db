import React from "react";
import Table from "./Table";

export type Invoice = {
  id: string;
  client: string;
  createdAt: Date;
  dueDate: Date;
  totalAmount: number;
  items?: {
    name: string;
    description: string;
    quantity: number;
    price: number;
  }[];
  status: "draft" | "sent" | "paid" | "cancelled" | "overdue";
};

export default async function ClientInvoicing() {
  const data = await getData();
  return (
    <div>
      <Table invoices={data} />
    </div>
  );
}
async function getData(): Promise<Invoice[]> {
  // create 6 objects dummy data for now
  return [
    {
      id: "1",
      client: "Client 1",
      createdAt: new Date("2023-01-01"),
      dueDate: new Date("2023-01-10"),
      totalAmount: 100,
      items: [
        {
          name: "Item 1",
          description: "Item 1 description",
          quantity: 1,
          price: 100,
        },
      ],
      status: "draft",
    },
    {
      id: "2",
      client: "Client 2",
      createdAt: new Date("2023-01-05"),
      dueDate: new Date("2023-01-15"),
      totalAmount: 100,
      items: [
        {
          name: "Item 1",
          description: "Item 1 description",
          quantity: 1,
          price: 100,
        },
      ],
      status: "draft",
    },
    {
      id: "3",
      client: "Client 3",
      createdAt: new Date("2023-01-10"),
      dueDate: new Date("2023-01-20"),
      totalAmount: 100,
      items: [
        {
          name: "Item 1",
          description: "Item 1 description",
          quantity: 1,
          price: 100,
        },
      ],
      status: "draft",
    },
    {
      id: "4",
      client: "Client 4",
      createdAt: new Date("2023-01-15"),
      dueDate: new Date("2023-01-25"),
      totalAmount: 100,
      items: [
        {
          name: "Item 1",
          description: "Item 1 description",
          quantity: 1,
          price: 100,
        },
      ],
      status: "draft",
    },
    {
      id: "5",
      client: "Client 5",
      createdAt: new Date("2023-01-20"),
      dueDate: new Date("2023-01-30"),
      totalAmount: 100,
      items: [
        {
          name: "Item 1",
          description: "Item 1 description",
          quantity: 1,
          price: 100,
        },
      ],
      status: "draft",
    },
    {
      id: "6",
      client: "Client 6",
      createdAt: new Date("2023-01-25"),
      dueDate: new Date("2023-02-05"),
      totalAmount: 100,
      items: [
        {
          name: "Item 1",
          description: "Item 1 description",
          quantity: 1,
          price: 100,
        },
      ],
      status: "draft",
    },
  ];
}
