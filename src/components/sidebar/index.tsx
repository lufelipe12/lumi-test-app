"use client";

import Image from "next/image";
import Link from "next/link";
import { FaRegChartBar, FaListUl } from "react-icons/fa";
import { useState } from "react";

import Logo from "../../../public/lumi-logo.png";
import * as S from "./styles";

export const Sidebar = () => {
  const [onPage, setOnPage] = useState<"dash" | "invoices">("dash");

  return (
    <S.Container>
      <Image alt="lumi-logo" src={Logo} />
      <S.ListContainer>
        <li>
          <Link href="/">
            <S.Link
              className={onPage === "dash" ? "active" : ""}
              onClick={() => setOnPage("dash")}
            >
              <FaRegChartBar />
              Dashboard
            </S.Link>
          </Link>
        </li>
        <li>
          <Link href="/invoices">
            <S.Link
              className={onPage === "invoices" ? "active" : ""}
              onClick={() => setOnPage("invoices")}
            >
              <FaListUl />
              Faturas
            </S.Link>
          </Link>
        </li>
      </S.ListContainer>
    </S.Container>
  );
};
