import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/AuthSlice";

const GoogleOAuthSuccessRedirect = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const jwtUser = params.get("jwtUser");
    if (jwtUser) {
      const userFromJwt = jwtDecode(jwtUser);
      console.log(userFromJwt._doc);
      dispatch(setUser(userFromJwt._doc));
    }

    navigate("/");
  }, []);

  return <div>Logging in...</div>;
};

export default GoogleOAuthSuccessRedirect;
