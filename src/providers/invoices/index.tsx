"use client";

import { createContext, ReactNode, useContext, useState } from "react";

import lumiApi from "../../services/axios.service";
import { ApiResponse } from "@/interfaces/api-response.interface";

interface InvoiceProps {
  children: ReactNode;
}

interface InvoicesContextData {
  invoices?: ApiResponse;
  getInvoices: () => Promise<void>;
}

const InvoiceContext = createContext<InvoicesContextData>(
  {} as InvoicesContextData
);

export const InvoicesProvider = ({ children }: InvoiceProps) => {
  const [invoices, setInvoices] = useState<ApiResponse>();

  const getInvoices = async () => {
    lumiApi
      .get("bills?limit=100")
      .then((res) => {
        setInvoices(res.data);
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  };

  return (
    <InvoiceContext.Provider value={{ getInvoices, invoices }}>
      {children}
    </InvoiceContext.Provider>
  );
};

export const useInvoices = () => useContext(InvoiceContext);
