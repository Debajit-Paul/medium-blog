import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputBox from "./InputBox";
import { SignupType } from "@debajit_ckt/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";
const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();

  const [signupInput, setSignupInput] = useState<SignupType>({
    name: "",
    email: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        signupInput
      );
      const jwt = await response.data.token;
      localStorage.setItem("token", jwt);
      navigate("/blog");
    } catch (error) {}
  }

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex flex-col items-center justify-center px-10">
        <p className="text-4xl font-bold">
          {type === "signin" ? "Login to your account" : "Create an account"}
        </p>
        <p className=" text-slate-500 mt-3">
          {type === "signin"
            ? "Don't have an account?"
            : "Already have an account?"}
          <Link
            to={type === "signin" ? "/signup" : "/signin"}
            className="hover:underline pl-2"
          >
            {type === "signin" ? "Create Now" : "Login"}
          </Link>
        </p>
      </div>
      <div className="mt-6 flex flex-col gap-5">
        {type === "signup" && (
          <InputBox
            type={"text"}
            lable={"Username"}
            placeholder={"Enter your username"}
            onChange={(e) => {
              setSignupInput((preSignupInput) => ({
                ...preSignupInput,
                name: e.target.value,
              }));
            }}
          />
        )}
        <InputBox
          type={"email"}
          lable={"Email"}
          placeholder={"me@example.com"}
          onChange={(e) => {
            setSignupInput((preSignupInput) => ({
              ...preSignupInput,
              email: e.target.value,
            }));
          }}
        />
        <InputBox
          type={"password"}
          lable={"Password"}
          placeholder={""}
          onChange={(e) => {
            setSignupInput((preSignupInput) => ({
              ...preSignupInput,
              password: e.target.value,
            }));
          }}
        />
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={sendRequest}
        >
          {type === "signin" ? "Sign In" : "Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
