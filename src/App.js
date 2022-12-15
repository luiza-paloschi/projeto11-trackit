import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import TodayPage from "./pages/TodayPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HistoricPage from "./pages/HistoricPage";
import HabitsPage from "./pages/HabitsPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/hoje" element={<TodayPage />} />
        <Route path="/historico" element={<HistoricPage />} />
        <Route path="/habitos" element={<HabitsPage />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
