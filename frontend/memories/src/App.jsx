import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import Form from '../components/FormComponent'
import SignUp from "../pages/SignUp";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path='/add-post' element={<Form />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
