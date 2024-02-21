import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Transactions from "./Pages/Transactions";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/Transactions" element={<Transactions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
