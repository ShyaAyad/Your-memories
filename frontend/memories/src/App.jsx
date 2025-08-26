import { Routes, Route } from "react-router-dom";
import Main from "/src/pages/Main";
import Login from "/src/pages/Login";
import Navbar from "/src/components/Navbar";
import Form from '/src/components/FormComponent'
import SignUp from "/src/pages/SignUp";
import EditMemory from "/src/components/editMemory";
import NoAccount from "/src/components/NoAccount";
import UserAccount from "/src/components/UserAccount";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/user-account' element={<UserAccount />} />
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
