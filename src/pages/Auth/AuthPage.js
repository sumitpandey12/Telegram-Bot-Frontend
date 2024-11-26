import React from "react";
import ApiEndPoint from "../../Api/ApiEndPoint";

const AuthPage = () => {
  const onGoogleLogin = () => {
    window.location.href = `${ApiEndPoint.BASE}/auth/google`;
  };
  return (
    <div>
      <button onClick={onGoogleLogin}>Google Login</button>
    </div>
  );
};

export default AuthPage;
