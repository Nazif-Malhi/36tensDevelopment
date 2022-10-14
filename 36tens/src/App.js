import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import LogIn from "./layout/Authentication/LogIn";
import SignUp from "./layout/Authentication/SignUp";
import Forget from "./layout/Authentication/Forget";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="authentication">
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forget" element={<Forget />} />
        </Route>
      </Routes>
      {/* <div className="App">
        <Navbar />
        <Home />
        <Packages />
        <Services />
        <ContactUs />
        <Rights />
      </div> */}
      {/* <Routes>
        <Route to="/signup" exact element={SignUp} />
      </Routes> */}
      {/* <SignUp /> */}
      {/* <LogIn /> */}
      {/* <Forget /> */}
    </>
  );
}

export default App;
