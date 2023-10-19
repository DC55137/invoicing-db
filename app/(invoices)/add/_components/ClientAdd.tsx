import { useMemo } from "react";
import * as Yup from "yup";
// next
import { useRouter } from "next/navigation";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import FormProvider from "@/components/providers/FormProvider";
//
import InvoiceNewEditDetails from "./InvoiceNewEditDetails";

// ----------------------------------------------------------------------

export default function ClientAdd({}) {
  const { push } = useRouter();

  const NewUserSchema = Yup.object().shape({
    createDate: Yup.string().nullable().required("Create date is required"),
    dueDate: Yup.string().nullable().required("Due date is required"),
  });

  const defaultValues = {
    invoiceNumber: "17099",
    createDate: new Date(),
    // Due date one week from now
    dueDate: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
    taxes: 0,
    status: "draft",
    discount: 0,
    invoiceTo: null,
    items: [
      {
        title: "",
        description: "",
        service: "",
        quantity: 1,
        price: 0,
        total: 0,
      },
    ],
    totalPrice: 0,
  };

  const methods = useForm({
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const handleCreateAndSend = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      push("/");
      console.log("DATA", JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods}>
      <div className="overflow-hidden rounded-lg bg-slate-800">
        <InvoiceNewEditDetails />
      </div>

      <div className="flex flex-row justify-end gap-3 mt-3">
        <button onClick={handleSubmit(handleCreateAndSend)}>
          Create and Send
        </button>
      </div>
    </FormProvider>
  );
}
