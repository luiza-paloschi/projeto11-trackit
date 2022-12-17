import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import TodayPage from "./pages/TodayPage";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import HistoricPage from "./pages/HistoricPage";
import HabitsPage from "./pages/HabitsPage";
import { useContext, useEffect } from "react";
import { UserContext } from "./components/UserContext";


function App() {
  const {user} = useContext(UserContext)
  const empty = isEmpty(user)
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
 
   

console.log(empty)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/" element={empty === false ? <Navigate to="/hoje" /> : <LoginPage />} />
        <Route path="/hoje" element={<TodayPage />} />
        <Route path="/historico" element={<HistoricPage />} />
        <Route path="/habitos" element={<HabitsPage />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
