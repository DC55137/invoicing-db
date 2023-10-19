export type Invoice = {
  id: number;
  client: string;
  createdAt: Date;
  dueDate: Date;
  totalAmount: number;
  description: string;
  paidDate?: Date;
  items?: {
    title: string;
    description: string;
    quantity: number;
    price: number;
  }[];
  email: string;
  mobile: string;
  address: string;
  status: "draft" | "sent" | "paid" | "cancelled" | "overdue";
};
