import styled from "styled-components";
import { toRem } from "../../styles/globalStyle";

export const InputStyled = styled.input<{ error?: boolean }>`
  color: ${({ theme }) => theme.colors.grey1000};
  padding-left: ${toRem(12)};
  padding-right: ${toRem(12)};
  background-color: ${({ theme, error }) =>
    !!error ? theme.colors.grey0 : theme.colors.primary200};
  border: ${({ error, theme }) =>
    !!error ? `1px solid ${theme.colors.red600}` : "none"};
  border-radius: ${({ theme }) => theme.borderRadius.input};
  height: 44px;
  box-sizing: border-box;
`;
