import styled from "styled-components";
import { toRem } from "../../styles/globalStyle";
import { Theme } from "../../styles/theme";
import { BUTTON_TYPE_ENUM } from "./Button";

const getButtonTypeBackground = (
  theme: Theme,
): {
  [key: keyof typeof BUTTON_TYPE_ENUM | string]: string;
} => ({
  primary: theme.colors.primary500,
  default: theme.colors.grey0,
});
const getButtonTypeColor = (
  theme: Theme,
): {
  [key: keyof typeof BUTTON_TYPE_ENUM | string]: string;
} => ({
  primary: theme.colors.grey0,
  default: theme.colors.primary1000,
});
const getButtonTypeBorder = (
  theme: Theme,
): {
  [key: keyof typeof BUTTON_TYPE_ENUM | string]: string;
} => ({
  primary: "none",
  default: `1px solid ${theme.colors.primary1000}`,
});

export const ButtonStyled = styled.button<{ buttonType: string }>`
  font-size: ${({ theme }) => theme.fontSize.bodyB2Regular};
  color: ${({ buttonType, theme }) => getButtonTypeColor(theme)[buttonType]};
  background-color: ${({ buttonType, theme }) =>
    getButtonTypeBackground(theme)[buttonType]};
  border-radius: ${({ theme }) => theme.borderRadius.button};
  text-align: center;
  border: ${({ buttonType, theme }) => getButtonTypeBorder(theme)[buttonType]};
  padding: ${toRem(16)};
  min-width: 360px;
  cursor: pointer;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey200};
    color: ${({ theme }) => theme.colors.grey400};
  }
`;
