import React, { PropsWithChildren } from "react";
import { RowContainer } from "./styles";

interface Props {
  justify?: "flex-start" | "flex-end" | "center";
}

const Row: React.FC<PropsWithChildren<Props>> = ({ children, justify }) => {
  return (
    <RowContainer data-testid="row-container" justify={justify}>
      {children}
    </RowContainer>
  );
};

export default Row;
