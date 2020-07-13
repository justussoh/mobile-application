import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
// import { useLogout } from "../../hooks/useLogout";
import { mockNavigation } from "../../test/helpers/navigation";
import { AppHeaderComponent } from "./AppHeader";

// jest.mock("../../hooks/useLogout");
// const mockUseLogout = useLogout as jest.Mock;

describe("AppHeader", () => {
  it("should render", () => {
    expect.assertions(2);
    const { queryByTestId, getByText } = render(
      <AppHeaderComponent navigation={mockNavigation} />
    );
    expect(queryByTestId("app-logo")).not.toBeNull();
    expect(getByText("Logout")).not.toBeNull();
  });

  it("should fire logout when pressed", () => {
    expect.assertions(2);
    const { getByTestId } = render(
      <AppHeaderComponent navigation={mockNavigation} />
    );
    expect(getByTestId("app-header-logout")).not.toBeNull();
    fireEvent.press(getByTestId("app-header-logout"));
    const globalAny: any = global;
    expect(globalAny.alert.mock.call).not.toBeNull();
  });
});
