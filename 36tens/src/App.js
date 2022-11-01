import { Routes, Route } from "react-router-dom";
import "./App.css";

import LogIn from "./layout/Authentication/LogIn";
import SignUp from "./layout/Authentication/SignUp";
import Forget from "./layout/Authentication/Forget";
import Mockup from "./pages/Mockup";
import Master from "./pages/Master";
import Results from "./layout/Results";
import RouteGuard from "./ProtectedRoute/ProtectedRoute";
import { setAuthToken } from "./utils/authToken";
function App() {
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Mockup />} />
        <Route path="authentication">
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forget" element={<Forget />} />
        </Route>
        <Route
          path="/admin/*"
          element={
            <RouteGuard>
              <Master />
            </RouteGuard>
          }
        />
        {/* <Route path="results" element={<Results />} /> */}
      </Routes>
    </>
  );
}

export default App;
