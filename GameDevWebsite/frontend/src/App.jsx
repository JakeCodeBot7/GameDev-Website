import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import logo from "./assets/logo.png";
import "./App.css"
function App() {
    return (
        <Router>
            <nav
                style={{
                    padding: "0.2rem 1.5rem",          // ⬅ less top/bottom space, standard side padding
                    background: "#121212",
                    display: "flex",
                    alignItems: "center",            // ⬅ vertically centers items
                    gap: "1rem"
                }}
            >

                <Link to="/">
                    <img src={logo} className="logo" alt="Home logo" />
                </Link>
                <Link to="/" className="nav-link" style={{ marginRight: "1rem", color: "white" }}>Home</Link>
                <Link to="/games" className="nav-link" style={{ color: "white" }}>Games</Link>
                <p className="logo-name">Serenitatis Games</p>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Games />} />
            </Routes>
        </Router>
    );
}

export default App;
