import React from "react";
import { render } from "@testing-library/react-native";
import { KeyboardAvoidingScrollView } from "./KeyboardAvoidingScrollView";
import { Text } from "react-native";

describe("KeyboardAvoidingScrollView", () => {
  it("should render children", () => {
    expect.assertions(1);
    const { queryByText } = render(
      <KeyboardAvoidingScrollView>
        <Text>Hello World</Text>
      </KeyboardAvoidingScrollView>
    );
    expect(queryByText("Hello World")).not.toBeNull();
  });
});
