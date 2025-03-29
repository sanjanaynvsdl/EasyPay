import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import SignInPage from "./pages/signin-page";
import Dashboard from "./pages/dashboard";
import InvalidPage from "./pages/invalid-page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="*" element={<InvalidPage />} />
      </Routes>
    </BrowserRouter>
  );
}
