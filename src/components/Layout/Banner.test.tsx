import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Banner } from "./Banner";

describe("Banner", () => {
  it("should render just title if only title provdied", () => {
    expect.assertions(1);
    const { getByText } = render(<Banner title="Hello World" />);
    expect(getByText("Hello World")).not.toBeNull();
  });

  it("should render both title and description when provided", () => {
    expect.assertions(2);
    const { getByText } = render(
      <Banner title="Hello World" description="Hello description" />
    );
    expect(getByText("Hello World")).not.toBeNull();
    expect(getByText("Hello description")).not.toBeNull();
  });

  it("should render both title and icon when provided", () => {
    expect.assertions(2);
    const { getByText, queryByTestId } = render(
      <Banner title="Hello World" featherIconName="maximize" />
    );
    expect(getByText("Hello World")).not.toBeNull();
    expect(queryByTestId("banner-icon")).not.toBeNull();
  });

  it("should render both title and action when provided", () => {
    expect.assertions(2);
    const action = {
      callback: () => {},
      label: "action-label"
    };
    const { getByText } = render(
      <Banner title="Hello World" action={action} />
    );
    expect(getByText("Hello World")).not.toBeNull();
    expect(getByText("action-label")).not.toBeNull();
  });

  it("should fire action when pressed", () => {
    expect.assertions(2);
    const action = {
      callback: jest.fn(),
      label: "action-label"
    };
    const { getByText } = render(
      <Banner title="Hello World" action={action} />
    );
    expect(getByText("action-label")).not.toBeNull();
    fireEvent.press(getByText("action-label"));
    expect(action.callback).toHaveBeenCalledTimes(1);
  });
});
