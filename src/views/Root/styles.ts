import styled from "styled-components";

export const BodyStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background: radial-gradient(
    circle at 0%,
    ${({ theme }) => theme.colors.primary100} 60%,
    ${({ theme }) => theme.colors.grey0} 60%
  );
  display: flex;
`;
