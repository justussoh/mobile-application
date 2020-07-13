import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { InputWithLabel } from "./InputWithLabel";

describe("InputWithLabel", () => {
  it("should render", () => {
    expect.assertions(2);
    const { queryByText, queryByTestId } = render(
      <InputWithLabel label="Hello World" />
    );
    expect(queryByText("Hello World")).not.toBeNull();
    expect(queryByTestId("input-with-label-input")).not.toBeNull();
  });

  it("should change on new value input", () => {
    expect.assertions(1);
    const onChange = jest.fn();
    const { getByTestId } = render(
      <InputWithLabel label="Hello World" onChange={onChange} />
    );
    fireEvent.change(getByTestId("input-with-label-input"), "Good Day");
    expect(onChange).toHaveBeenCalledWith("Good Day");
  });
});
