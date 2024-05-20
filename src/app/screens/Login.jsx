import React, { useState } from "react";
import Auth from "../components/Auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const fetchApi = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      navigate("/home");
    }, 3000);
  };

  return (
    <Auth
      formTitle="Login"
      color="blue"
      buttonText="Login"
      isLoading={loader}
      onClickEvent={fetchApi}
      formType={"login"}
    />
  );
};

export default Login;
