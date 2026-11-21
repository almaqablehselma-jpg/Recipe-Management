import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import Login from "./pages/login";
import Register from "./pages/register";
import About from "./pages/about";
import Navbar from "./components/navbar";
import "./pages/page.css";

function App() {
  const [page, setPage] = useState(window.location.hash || "#/");

  useEffect(() => {
    const handleNavigation = () => {
      setPage(window.location.hash || "#/");
    };

    window.addEventListener("hashchange", handleNavigation);

    return () => {
      window.removeEventListener("hashchange", handleNavigation);
    };
  }, []);

  return (
    <>
      <Navbar />

      {page === "#/login" ? <Login /> :
       page === "#/register" ? <Register /> :
       page === "#/about" ? <About /> :
       <Homepage />}
    </>
  );
}

export default App;

