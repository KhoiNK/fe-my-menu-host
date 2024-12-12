import React, { HTMLAttributes } from "react";
import { ButtonStyled } from "./style";

export const enum BUTTON_TYPE_ENUM {
  primary = "primary",
  default = "default",
}

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
  buttonType?: keyof typeof BUTTON_TYPE_ENUM;
}

const Button: React.FC<Props> = ({ text, buttonType, ...rest }) => {
  return (
    <ButtonStyled buttonType={buttonType || "primary"} {...rest}>
      <b>{text}</b>
    </ButtonStyled>
  );
};

export default Button;
