import React, { useState } from "react";
import Auth from "../components/Auth";

const Signup = () => {
  const [loader, setLoader] = useState(false);

  const fetchApi = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  };
  return (
    <Auth
      formType="signup"
      formTitle="Signup"
      color="red"
      buttonText="Signup"
      isLoading={loader}
      onClickEvent={fetchApi}
    />
  );
};

export default Signup;
