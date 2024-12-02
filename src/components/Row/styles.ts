import styled from "styled-components";

export const RowContainer = styled.div<{
  flex?: boolean;
  justify?: string;
}>`
  width: 100%;
  display: flex;
  flex-flow: row;
  flex-basis: max-content;
  justify-content: ${({ justify }) => justify || "flex-start"};
`;
