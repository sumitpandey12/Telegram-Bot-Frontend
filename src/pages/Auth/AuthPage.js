import React from "react";
import ApiEndPoint from "../../Api/ApiEndPoint";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@mui/material";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/AuthSlice";

const AuthPage = () => {
  const dispatch = useDispatch();
  const onGoogleLogin = () => {
    window.location.href = `${ApiEndPoint.BASE}/auth/google`;
  };

  const onGuestLogin = () => {
    const user = {
      email: "test@test.com",
      firstName: "Test",
      lastName: "",
      picture: "",
      accessToken: "",
      refreshToken: "",
    };
    dispatch(setUser(user));
    window.location.href = "/";
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-4">
        <Button
          onClick={onGoogleLogin}
          variant="outlined"
          startIcon={<FcGoogle />}
        >
          Login with Google
        </Button>
        <Button
          onClick={onGuestLogin}
          variant="outlined"
          startIcon={<MdOutlineFreeBreakfast />}
        >
          Login as Guest
        </Button>
      </div>
    </div>
  );
};

export default AuthPage;
