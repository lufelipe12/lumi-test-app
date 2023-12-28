"use client";

import styled from "styled-components";

export const Container = styled.section`
  width: 14.12rem;
  height: auto;
  border-radius: 0 1.87rem 0 0;
  background: var(--green-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3.4rem;
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 6.25rem;
  padding-top: 1rem;
`;

export const Link = styled.a`
  width: 11rem;
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  color: var(--white-0);
  font-size: 1.25rem;
  font-weight: 400;
  outline: none;
  text-decoration: none;
  padding-left: 1rem;

  &:active,
  &.active {
    font-weight: 700;
  }
`;
