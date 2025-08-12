import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
import Form from '../components/FormComponent'
import SignUp from "../pages/SignUp";
import EditMemory from "../components/editMemory";
import NoAccount from "../components/NoAccount";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/add-post' element={<Form />} />
        <Route path='/no-account' element={<NoAccount />} />
        <Route path='/edit-memory/:memoryId' element={<EditMemory/>} /> 
      </Routes>
    </>
  );
}

export default App;
