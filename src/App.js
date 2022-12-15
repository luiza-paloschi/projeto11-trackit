import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import TodayPage from "./pages/TodayPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/cadastro" element={<SignUpPage />} />
      <Route path="/hoje" element={<TodayPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
