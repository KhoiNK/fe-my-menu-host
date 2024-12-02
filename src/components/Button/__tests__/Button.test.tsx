import React from "react";
import { renderTestWithTheme } from "../../../util/testUtil";
import Button from "../Button";

describe("Buttons", () => {
  it("should render correctly", () => {
    const { container } = renderTestWithTheme(<Button text="Test button" />);
    expect(container).toMatchSnapshot();
  });
  it("should render default type", () => {
    const { container, queryByText } = renderTestWithTheme(
      <Button text="Test button" buttonType="default" />,
    );
    expect(container).toBeDefined();
    expect(queryByText("Test button")).toBeDefined();
  });
});
