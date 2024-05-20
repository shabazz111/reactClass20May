import React, { useState } from "react";
import Auth from "../components/Auth";

const ForgotPassword = () => {
  const [loader, setLoader] = useState(false);

  const fetchApi = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  };

  return (
    <Auth
      formType="forgotPassword"
      formTitle="Forgot Password"
      color="purple"
      buttonText="Reset Password"
      isLoading={loader}
      onClickEvent={fetchApi}
    />
  );
};

export default ForgotPassword;
