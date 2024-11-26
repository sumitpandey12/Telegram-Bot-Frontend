import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/Auth/AuthPage";
import HomePage from "./pages/Home/HomePage";
import GoogleOAuthSuccessRedirect from "./pages/Auth/GoogleOAuthSuccessRedirect";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    if (!user) {
      if (window.location.pathname !== "/auth") {
        window.location.href = "/auth";
      }
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="auth" element={<AuthPage />} />
      <Route
        path="auth/google-oauth-success-redirect"
        element={<GoogleOAuthSuccessRedirect />}
      />
    </Routes>
  );
}

export default App;
