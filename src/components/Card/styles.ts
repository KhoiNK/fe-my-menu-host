import styled from "styled-components";
import { toRem } from "../../styles/globalStyle";

const CardStyled = styled.section`
  background-color: ${({ theme }) => theme.colors.grey0};
  border-radius: ${({ theme }) => theme.borderRadius.card};
  box-shadow: ${({ theme }) => theme.boxShadow.elevationL};
  @media ${({ theme }) => theme.device.laptop} {
    max-width: ${toRem(720)};
  }
`;

export const CardContentStyled = styled.div`
  padding: ${toRem(60)} ${toRem(96)};
`;

export default CardStyled;
