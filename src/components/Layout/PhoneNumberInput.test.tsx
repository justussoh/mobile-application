import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { PhoneNumberInput } from "./PhoneNumberInput";

describe("PhoneNumberInput", () => {
  it("should render", () => {
    expect.assertions(3);
    const { queryByText, queryByTestId } = render(
      <PhoneNumberInput
        label="Hello World"
        countryCodeValue=""
        mobileNumberValue=""
        onChangeCountryCode={() => {}}
        onChangeMobileNumber={() => {}}
      />
    );
    expect(queryByText("Hello World")).not.toBeNull();
    expect(queryByTestId("country-code-input")).not.toBeNull();
    expect(queryByTestId("mobile-number-input")).not.toBeNull();
  });

  it("Country Code should change on new value input", () => {
    expect.assertions(1);
    const onChange = jest.fn();
    const { getByTestId } = render(
      <PhoneNumberInput
        label="Hello World"
        countryCodeValue=""
        mobileNumberValue=""
        onChangeCountryCode={onChange}
        onChangeMobileNumber={() => {}}
      />
    );
    fireEvent.change(getByTestId("country-code-input"), {
      nativeEvent: { text: 65 }
    });
    expect(onChange).toHaveBeenCalledWith(65);
  });

  it("Mobile number should change on new value input", () => {
    expect.assertions(1);
    const onChange = jest.fn();
    const { getByTestId } = render(
      <PhoneNumberInput
        label="Hello World"
        countryCodeValue=""
        mobileNumberValue=""
        onChangeCountryCode={() => {}}
        onChangeMobileNumber={onChange}
      />
    );
    fireEvent.change(getByTestId("mobile-number-input"), {
      nativeEvent: { text: 81234567 }
    });
    expect(onChange).toHaveBeenCalledWith(81234567);
  });
});
