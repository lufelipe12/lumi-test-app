"use client";
import { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { Switch } from "@mui/material";

import { Charts } from "@/components/chart";
import * as S from "./style";

export default function Home() {
  const [type, setType] = useState<"kwh" | "money">("kwh");

  return (
    <S.Container>
      <S.ChartContainer>
        <S.StyledDiv>
          <S.StyledTitle>Olá,</S.StyledTitle>
          <S.StyledTitle>Aqui estão suas estatísticas completas</S.StyledTitle>
        </S.StyledDiv>
        <Charts type={type} />
        <S.ToggleSection>
          {type == "kwh" ? (
            <AiFillThunderbolt
              style={{ color: "var(--green-1)", fontSize: "1.2rem" }}
            />
          ) : (
            <FaDollarSign
              style={{ color: "var(--green-1)", fontSize: "1.2rem" }}
            />
          )}
          <Switch
            color="success"
            onClick={() => (type == "kwh" ? setType("money") : setType("kwh"))}
          />
        </S.ToggleSection>
      </S.ChartContainer>
    </S.Container>
  );
}
