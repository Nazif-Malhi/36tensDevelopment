import { Routes, Route } from "react-router-dom";
import "./App.css";

import LogIn from "./layout/Authentication/LogIn";
import SignUp from "./layout/Authentication/SignUp";
import Forget from "./layout/Authentication/Forget";
import Mockup from "./pages/Mockup";
import Master from "./pages/Master";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mockup />} />
        <Route path="authentication">
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forget" element={<Forget />} />
        </Route>
        <Route path="/admin/*" element={<Master />} />
      </Routes>
    </>
  );
}

export default App;
