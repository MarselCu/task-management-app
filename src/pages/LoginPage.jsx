import React from "react";
import AppButton from "../atoms/Button/AppButton";
import plus_icon from "@assets/icons/plus-icon.svg";

const LoginPage = () => {
  return (
    <>
      <AppButton
        label="Hello World"
        onClick={() => alert("Hello World")}
        type="fill"
        size="md"
        icon={plus_icon}
        iconPosition="right"
      />
    </>
  );
};

export default LoginPage;
