"use client";

import * as S from "./styles";
import InvoicesTable from "@/components/card";
import { useInvoices } from "@/providers/invoices";
import { useEffect } from "react";

export default function Invoices() {
  const { getInvoices, invoices } = useInvoices();

  useEffect(() => {
    async function fetchData() {
      await getInvoices();
    }

    fetchData();
  }, []);

  return (
    <S.Container>
      <S.StyledTitle>Faturas</S.StyledTitle>
      <S.TableContainer>
        <InvoicesTable invoices={invoices} />
      </S.TableContainer>
    </S.Container>
  );
}
