"use client";

import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  padding: 8rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const StyledDiv = styled.div`
  width: 18.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledTitle = styled.h1`
  font-size: 1.375rem;
  text-align: center;
  color: var(--green-dark);
  font-weight: 600;
`;

export const ToggleSection = styled.section`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
`;
