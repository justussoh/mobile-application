import React from "react";
import { render } from "@testing-library/react-native";
import { AppText } from "./AppText";

describe("AppText", () => {
  it("should render", () => {
    expect.assertions(1);
    const { queryByText } = render(<AppText>Hello World</AppText>);
    expect(queryByText("Hello World")).not.toBeNull();
  });
});
