import React from "react";
import { render } from "@testing-library/react-native";
import { AppName } from "./AppName";
import { AppMode } from "../../context/config";

describe("AppName", () => {
  it("should render in production", () => {
    expect.assertions(1);
    const { queryByTestId } = render(<AppName />);
    expect(queryByTestId("app-logo")).not.toBeNull();
  });

  it("should render text in staging", () => {
    expect.assertions(2);
    const { queryByTestId, getByText } = render(
      <AppName mode={AppMode.staging} />
    );
    expect(queryByTestId("app-logo")).not.toBeNull();
    expect(getByText("TESTING MODE")).not.toBeNull();
  });
});
