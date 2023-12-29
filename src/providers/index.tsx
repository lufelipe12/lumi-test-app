"use client";

import { ReactNode } from "react";
import { InvoicesProvider } from "./invoices";

interface AppProvider {
  children: ReactNode;
}

const Provider = ({ children }: AppProvider) => {
  return <InvoicesProvider>{children}</InvoicesProvider>;
};

export default Provider;
