"use-client";

import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { valuesMock } from "@/mocks/values.mock";
import { useEffect, useState } from "react";

interface ChartsProps {
  type: string;
}

export const Charts = ({ type }: ChartsProps) => {
  const defineByType = () => {
    return valuesMock.data.map((value) => {
      return {
        consumo:
          type == "kwh"
            ? value.electricity + value.sceee
            : parseFloat(value.electricityValue) + parseFloat(value.sceeeValue),
        compensada:
          type == "kwh"
            ? value.compensatedEnergy
            : value.compensatedEnergyValue,
        ["mês"]: value.month,
      };
    });
  };

  useEffect(() => {
    defineByType();
  }, [type]);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={defineByType()}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={`var(--green-1)`} stopOpacity={0.4} />
            <stop
              offset="75%"
              stopColor={`var(--green-1)`}
              stopOpacity={0.05}
            />
          </linearGradient>
        </defs>

        <Area dataKey="consumo" stroke={`var(--green-0)`} fill="url(#color)" />
        <Area
          dataKey="compensada"
          stroke={`var(--green-dark)`}
          fill="url(#color)"
        />

        <XAxis dataKey="mês" axisLine={false} tickLine={false} />

        <YAxis
          dataKey="consumo"
          axisLine={false}
          tickLine={false}
          tickCount={10}
        />

        <Tooltip
          formatter={(number) =>
            `${type == "money" ? "R$" : ""}${number}${
              type == "kwh" ? "kWh" : ""
            }`
          }
        />

        <CartesianGrid opacity={0.3} />
      </AreaChart>
    </ResponsiveContainer>
  );
};
