import ClientInvoicing from "./ClientInvoicing";

export default function Home() {
  return (
    <main className="">
      <div className="container mx-auto">
        <h1 className="mt-40 ">Invoices</h1>
        <ClientInvoicing />
      </div>
    </main>
  );
}
