import React from "react";
import Auth from "../components/Auth";

const ForgotPassword = () => {
  return (
    <Auth
      formType="forgotPassword"
      formTitle="Forgot Password"
      color="purple"
      buttonText="Reset Password"
    />
  );
};

export default ForgotPassword;
