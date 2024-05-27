import React from "react";
import Quote from "../component/Quote";
import Auth from "../component/Auth";

const Signin = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center">
        <Auth type="signin" />
      </div>
      <Quote />
    </div>
  );
};

export default Signin;
