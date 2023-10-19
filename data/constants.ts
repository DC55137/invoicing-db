import { Invoice } from "@/types/types";

const user = {
  name: "Whitney Francis",
  email: "whitney.francis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigation = [
  { name: "Dashboard", href: "/", current: true },
  { name: "New Jobs", href: "/new-job", current: false },
  { name: "Calendar", href: "/calendar", current: false },
];

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

const publishingOptions = [
  {
    name: "Published",
    description: "This job posting can be viewed by anyone who has the link.",
    current: true,
  },
  {
    name: "Draft",
    description: "This job posting will no longer be publicly accessible.",
    current: false,
  },
];

const headLabel = [
  { id: "number", label: "Client", align: "left", minWidth: 150 },
  { id: "address", label: "Address", align: "left", minWidth: 350 },
  { id: "Mobile", label: "Mobile", align: "left", minwidth: 100 },
  { id: "amount", label: "Amount", align: "right", minwidth: 150 },
];

const mockInvoices: Invoice[] = [
  {
    id: 1,
    client: "Client 1",
    description: "Description 1",
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
    mobile: "1234567890",
    email: "abc@gmail.com",
    address: "1234 Main St",
  },
  {
    id: 2,
    client: "Client 2",
    description: "Description 2",
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
    mobile: "1234567890",
    email: "abc@gmail.com",
    address: "1234 Main St",
  },
  {
    id: 3,
    client: "Client 3",
    description: "Description 3",
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
    mobile: "1234567890",
    email: "abc@gmail.com",
    address: "1234 Main St",
  },
  {
    id: 4,
    client: "Client 4",
    description: "Description 4",
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
    mobile: "1234567890",
    email: "abc@gmail.com",
    address: "1234 Main St",
  },
  {
    id: 5,
    client: "Client 5",
    description: "Description 5",
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
    mobile: "1234567890",
    email: "abc@gmail.com",
    address: "1234 Main St",
  },
  {
    id: 6,
    client: "Client 6",
    description: "Description 6",
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
    mobile: "1234567890",
    email: "abc@gmail.com",
    address: "1234 Main St",
  },
];

export {
  user,
  navigation,
  userNavigation,
  publishingOptions,
  headLabel,
  mockInvoices,
};
