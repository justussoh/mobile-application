import React from "react";
import { render } from "@testing-library/react-native";
import { Card } from "./Card";
import { Text } from "react-native";

describe("Card", () => {
  it("should render children", () => {
    expect.assertions(1);
    const { queryByText } = render(
      <Card>
        <Text>Hello World</Text>
      </Card>
    );
    expect(queryByText("Hello World")).not.toBeNull();
  });
});
