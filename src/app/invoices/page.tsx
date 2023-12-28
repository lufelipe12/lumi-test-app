"use client";

import * as S from "./styles";
import { valuesMock } from "@/mocks/values.mock";
import InvoicesTable from "@/components/card";

export default function Invoices() {
  return (
    <S.Container>
      <S.StyledH1>Invoices</S.StyledH1>
      <S.TableContainer>
        <InvoicesTable invoices={valuesMock} />
      </S.TableContainer>
    </S.Container>
  );
}
