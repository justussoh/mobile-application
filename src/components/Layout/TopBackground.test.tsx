import React from "react";
import { render } from "@testing-library/react-native";
import { TopBackground } from "./TopBackground";

describe("TopBackground", () => {
  it("should render children", () => {
    expect.assertions(1);
    const { queryByTestId } = render(<TopBackground />);
    expect(queryByTestId("top-background")).not.toBeNull();
  });
});
