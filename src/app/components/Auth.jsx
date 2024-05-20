import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Auth = ({ formTitle, color, isLoading, formType, onClickEvent }) => {
  const isSignup = formType == "signup";
  const isLogin = formType == "login";
  const isPassword = formType == "forgotPassword";
  return (
    <section className="w-full h-screen bg-gray-400 flex justify-center items-center">
      <div className="w-96 rounded-xl bg-white p-4">
        <span className="text-purple-500">{formTitle} Form</span>
        {isSignup ? (
          <input
            type="text"
            placeholder="Username"
            className="w-full border rounded-lg p-2 mt-3"
          />
        ) : null}

        {isSignup || isLogin ? (
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg p-2 mt-3"
          />
        ) : null}

        {isSignup || "login" || "forgotPassword" ? (
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg p-2 mt-3"
          />
        ) : null}

        {isPassword ? (
          <input
            type="password"
            placeholder="confirm Password"
            className="w-full border rounded-lg p-2 mt-3"
          />
        ) : null}

        {/* Remember me and forgot password */}

        <div className="flex w-full mt-4 items-center  justify-between ">
          {isLogin ? (
            <div className="flex items-center h-full gap-2 text-sm">
              <input
                type="checkbox"
                id="check"
                name="check"
                className="w-4 h-4 rounded-md border "
              />
              <label
                htmlFor="check"
                className="h-4 flex cursor-pointer justify-center items-center"
              >
                Remember Me
              </label>
            </div>
          ) : null}

          <div className="text-blue-600 text-sm cursor-pointer">
            {!isPassword ? (
              <Link to="/password">Forgot password?</Link>
            ) : null}
          </div>
        </div>
        <Button
          isLoading={isLoading}
          onClickEvent={onClickEvent}
          color={color}
        />
        <div className="flex gap-2 justify-center items-center">
          {isSignup ? (
            <>
              Already have an account?
              <Link to="/" className="text-sm text-blue-600">
                Sign In
              </Link>
            </>
          ) : (
            <>
              I Don't have an account
              <Link to="/signup" className="text-sm text-blue-600">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Auth;
