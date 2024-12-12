import React from "react";
import { queryByText, render } from "@testing-library/react";
import Row from "../Row";
test("it should render correctly", () => {
  const { container } = render(<Row>test child</Row>);
  expect(queryByText(container, "test child")).toBeDefined();
  const { container: center } = render(<Row justify="center">test child</Row>);
  expect(queryByText(center, "test child")).toBeDefined();
  const { container: flexStart } = render(
    <Row justify="flex-start">test child</Row>,
  );
  expect(queryByText(flexStart, "test child")).toBeDefined();
  const { container: flexEnd } = render(
    <Row justify="flex-end">test child</Row>,
  );
  expect(queryByText(flexEnd, "test child")).toBeDefined();
});
