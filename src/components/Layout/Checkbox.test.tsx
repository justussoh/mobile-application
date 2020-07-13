import React from "react";
import { Text } from "react-native";
import { render, fireEvent } from "@testing-library/react-native";
import { Checkbox, Toggle } from "./Checkbox";

describe("Toggle", () => {
  it("should not render check if isCheck is false", () => {
    expect.assertions(1);
    const { queryByTestId } = render(<Toggle isChecked={false} />);
    expect(queryByTestId("toggle-check")).toBeNull();
  });

  it("should render check if isChecked is true", () => {
    expect.assertions(1);
    const { queryByTestId } = render(<Toggle isChecked={true} />);
    expect(queryByTestId("toggle-check")).not.toBeNull();
  });
});

describe("Checkbox", () => {
  it("should render label element", () => {
    expect.assertions(2);
    const { queryByTestId, queryByText } = render(
      <Checkbox
        label={<Text>Hello World</Text>}
        isChecked={false}
        onToggle={() => {}}
      />
    );
    expect(queryByTestId("toggle-check")).toBeNull();
    expect(queryByText("Hello World")).not.toBeNull();
  });

  it("should fire onPress when pressed", () => {
    expect.assertions(1);
    const onPress = jest.fn();
    const { getByTestId } = render(
      <Checkbox
        label={<Text>Hello World</Text>}
        isChecked={false}
        onToggle={onPress}
      />
    );
    fireEvent.press(getByTestId("checkbox-box"));
    expect(onPress).toHaveBeenCalledWith(true);
  });
});
