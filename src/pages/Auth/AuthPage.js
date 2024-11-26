import React from "react";
import ApiEndPoint from "../../Api/ApiEndPoint";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@mui/material";

const AuthPage = () => {
  const onGoogleLogin = () => {
    window.location.href = `${ApiEndPoint.BASE}/auth/google`;
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Button
        onClick={onGoogleLogin}
        variant="outlined"
        startIcon={<FcGoogle />}
      >
        Login with Google
      </Button>
    </div>
  );
};

export default AuthPage;
