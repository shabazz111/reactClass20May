import React from "react";
import Auth from "../components/Auth";

const Signup = () => {
  return (
    <Auth
      formType="signup"
      formTitle="Signup"
      color="red"
      buttonText="Signup"
      isLoading={false}
    />
  );
};

export default Signup;
