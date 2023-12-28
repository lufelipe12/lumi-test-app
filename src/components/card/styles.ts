import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardItem = styled.div`
  width: 80%;
  height: 3.56rem;
  padding: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TableHeader = styled.section`
  width: 12%;
  font-size: 1rem;
  font-weight: 700;
  color: var(--green-dark);
`;

export const CardProps = styled.div`
  width: 12%;
  font-size: 0.8rem;
  color: var(--green-dark);
`;
