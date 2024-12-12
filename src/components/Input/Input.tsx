import React, { HTMLProps } from "react";
import { InputStyled } from "./styles";

interface Props extends HTMLProps<HTMLInputElement> {
  error?: string;
}

const Input: React.FC<Props> = ({ error, ...rest }) => {
  return <InputStyled error={!!error} {...rest} />;
};

export default Input;
