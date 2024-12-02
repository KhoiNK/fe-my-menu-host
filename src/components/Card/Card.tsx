import React, { PropsWithChildren } from "react";
import CardStyled, { CardContentStyled } from "./styles";

interface Props {}

const Card: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <CardStyled>
      <CardContentStyled>{children}</CardContentStyled>
    </CardStyled>
  );
};

export default Card;
