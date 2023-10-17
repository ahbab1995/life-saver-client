import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import Allproduct from "./Pages/Allproduct";
import About from "./Pages/About";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import RequireAuth from "./Pages/Login/RequireAuth";
import Card from "./Pages/Card/Card";
import Checkout from "./Pages/Card/Checkout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import User from "./Pages/Dashboard/User";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/allproduct"
          element={
            <RequireAuth>
              <Allproduct></Allproduct>
            </RequireAuth>
          }
        ></Route>
         <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard>
              <Route path="/user" element={<User></User>}></Route>
              </Dashboard>
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/card" element={<Card></Card>}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
