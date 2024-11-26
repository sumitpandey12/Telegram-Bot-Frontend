import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/Auth/AuthPage";
import HomePage from "./pages/Home/HomePage";
import GoogleOAuthSuccessRedirect from "./pages/Auth/GoogleOAuthSuccessRedirect";

function App() {
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
