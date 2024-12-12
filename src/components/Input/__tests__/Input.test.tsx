import { render } from "@testing-library/react";
import React from "react";
import Input from "../Input";
import "jest-styled-components";
import { renderTestWithTheme } from "../../../util/testUtil";

describe("Input", () => {
  it("should render correctly", () => {
    const { getByPlaceholderText } = renderTestWithTheme(
      <Input placeholder="Type something here" />,
    );
    expect(getByPlaceholderText(/Type something here/i)).toBeDefined();
  });

  it("should render error input", () => {
    const { getByPlaceholderText } = renderTestWithTheme(
      <Input error="some error" placeholder="Type something here" />,
    );
    expect(getByPlaceholderText(/Type something here/i)).toBeDefined();
  });
});
