import React, { ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { render, RenderOptions, RenderResult } from "@testing-library/react";

const WithTheme = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme.main}>{children}</ThemeProvider>;
};

const renderTestWithTheme = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
): RenderResult => render(ui, { ...(options || {}), wrapper: WithTheme });

export * from "@testing-library/react";
export { renderTestWithTheme };
